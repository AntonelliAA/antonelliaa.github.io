// Gate for the CV on antonelliaa.github.io: takes an email, checks that it can receive mail,
// records it, and answers with a signed link to the PDF that lasts two minutes.
// Deployed without JWT verification because visitors are not signed in.
import { createClient } from 'npm:@supabase/supabase-js@2';

const ORIGINS = new Set(['https://antonelliaa.github.io', 'http://localhost:4321']);
const FILES = { pt: 'cv-pt.pdf', en: 'cv-en.pdf' } as const;
const DOWNLOAD_NAMES = { pt: 'Anthony-Antonelli-CV-PT.pdf', en: 'Anthony-Antonelli-CV-EN.pdf' } as const;
const LINK_SECONDS = 120;
// Each visitor gets a small hourly allowance, so one client cannot use up the service for the rest.
// The total is only a high backstop.
const VISITOR_HOURLY_CAP = 8;
const TOTAL_HOURLY_CAP = 1500;
// Throwaway inboxes: the address exists for ten minutes and tells me nothing about who asked.
const DISPOSABLE = new Set([
  'mailinator.com', 'guerrillamail.com', 'guerrillamail.net', 'sharklasers.com', '10minutemail.com', 'tempmail.com',
  'temp-mail.org', 'yopmail.com', 'trashmail.com', 'getnada.com', 'dispostable.com', 'maildrop.cc', 'throwawaymail.com',
  'fakeinbox.com', 'mohmal.com', 'emailondeck.com', 'tempail.com', 'mailnesia.com', 'mintemail.com', 'spamgourmet.com',
]);
const EMAIL = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+$/;

const keys = Deno.env.get('SUPABASE_SECRET_KEYS');
const secret = keys ? JSON.parse(keys)['default'] : Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
const supabase = createClient(Deno.env.get('SUPABASE_URL')!, secret, { auth: { persistSession: false } });

async function dns(name: string, type: 'MX' | 'A'): Promise<string[]> {
  const response = await fetch(`https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(name)}&type=${type}`, {
    headers: { accept: 'application/dns-json' },
    signal: AbortSignal.timeout(4000),
  });
  if (!response.ok) throw new Error(`dns ${response.status}`);
  const body = await response.json();
  const wanted = type === 'MX' ? 15 : 1;
  return (body.Answer ?? []).filter((answer: { type: number }) => answer.type === wanted).map((answer: { data: string }) => answer.data);
}

// A domain receives mail when it publishes an MX record, or, with none, an address record
// (RFC 5321 §5.1). An MX of "." says outright that it takes no mail (RFC 7505).
async function receivesMail(domain: string): Promise<boolean> {
  const mx = await dns(domain, 'MX');
  if (mx.length) return mx.some((record) => record.trim().split(/\s+/).pop() !== '.');
  return (await dns(domain, 'A')).length > 0;
}

// The address is never stored: only a salted hash of it, which is enough to count attempts.
async function visitorHash(request: Request): Promise<string> {
  const forwarded = request.headers.get('x-forwarded-for') ?? '';
  const address = request.headers.get('cf-connecting-ip') ?? forwarded.split(',')[0].trim() ?? 'unknown';
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(`${secret}:${address}`));
  return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, '0')).join('').slice(0, 32);
}

Deno.serve(async (request) => {
  const origin = request.headers.get('origin') ?? '';
  const cors = {
    'Access-Control-Allow-Origin': ORIGINS.has(origin) ? origin : 'https://antonelliaa.github.io',
    'Access-Control-Allow-Headers': 'content-type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    Vary: 'Origin',
  };
  const reply = (status: number, body: Record<string, unknown>) => Response.json(body, { status, headers: cors });

  if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });
  if (request.method !== 'POST') return reply(405, { error: 'method' });
  if (!ORIGINS.has(origin)) return reply(403, { error: 'origin' });

  // Every request counts against its visitor, valid or not, before anything else is looked up.
  const visitor = await visitorHash(request);
  const hourAgo = new Date(Date.now() - 3_600_000).toISOString();
  // A fresh builder per query: the client's builders are not meant to be reused.
  const attempts = () => supabase.from('cv_download_attempts');
  const [mine, everyone] = await Promise.all([
    attempts().select('id', { count: 'exact', head: true }).eq('visitor', visitor).gte('created_at', hourAgo),
    attempts().select('id', { count: 'exact', head: true }).gte('created_at', hourAgo),
  ]);
  if (mine.error || everyone.error) {
    console.error('attempt count failed', mine.error ?? everyone.error);
    return reply(500, { error: 'server' });
  }
  if ((mine.count ?? 0) >= VISITOR_HOURLY_CAP || (everyone.count ?? 0) >= TOTAL_HOURLY_CAP) return reply(429, { error: 'busy' });
  const { error: attemptError } = await attempts().insert({ visitor });
  if (attemptError) {
    console.error('attempt insert failed', attemptError);
    return reply(500, { error: 'server' });
  }
  // Attempts are only useful for an hour; a day is kept and the rest is dropped as requests come in.
  await attempts().delete().lt('created_at', new Date(Date.now() - 86_400_000).toISOString());

  let input: { email?: unknown; lang?: unknown; website?: unknown };
  try {
    input = await request.json();
  } catch {
    return reply(400, { error: 'invalid' });
  }
  // `website` is a field people never see; only a script fills it in.
  if (typeof input.website === 'string' && input.website) return reply(400, { error: 'invalid' });
  const lang = input.lang === 'pt' ? 'pt' : 'en';
  const email = typeof input.email === 'string' ? input.email.trim().toLowerCase() : '';
  if (email.length > 254 || !EMAIL.test(email)) return reply(400, { error: 'invalid' });
  const domain = email.slice(email.lastIndexOf('@') + 1);
  if (DISPOSABLE.has(domain)) return reply(400, { error: 'disposable' });

  try {
    if (!(await receivesMail(domain))) return reply(400, { error: 'domain' });
  } catch (error) {
    // The lookup service being down should not cost a recruiter the CV.
    console.error('dns lookup failed', error);
  }

  // One row per address and language per day, however many times the button is pressed.
  const dayAgo = new Date(Date.now() - 86_400_000).toISOString();
  const { data: recent, error: recentError } = await supabase.from('cv_downloads').select('id').eq('email', email).eq('lang', lang).gte('created_at', dayAgo).limit(1);
  if (recentError) {
    console.error('lookup failed', recentError);
    return reply(500, { error: 'server' });
  }
  if (!recent.length) {
    const { error: insertError } = await supabase.from('cv_downloads').insert({ email, lang });
    if (insertError) {
      console.error('insert failed', insertError);
      return reply(500, { error: 'server' });
    }
  }

  const { data: link, error: linkError } = await supabase.storage.from('cv').createSignedUrl(FILES[lang], LINK_SECONDS, { download: DOWNLOAD_NAMES[lang] });
  if (linkError || !link) {
    console.error('signed url failed', linkError);
    return reply(500, { error: 'server' });
  }
  return reply(200, { url: link.signedUrl });
});
