-- Who asked for the CV on the portfolio site. Lives in the Caronas project (yjhyxryxnzhsmyizimma).
-- Written only by the cv-download Edge Function with the secret key; nobody reads or writes it
-- through the Data API, so RLS is on with no policies and the public roles have no grants.
create table if not exists public.cv_downloads (
  id bigint generated always as identity primary key,
  email text not null check (char_length(email) between 6 and 254),
  lang text not null check (lang in ('pt', 'en')),
  created_at timestamptz not null default now()
);
create index if not exists cv_downloads_email_idx on public.cv_downloads (email, created_at desc);
create index if not exists cv_downloads_created_idx on public.cv_downloads (created_at desc);

alter table public.cv_downloads enable row level security;
revoke all on public.cv_downloads from anon, authenticated;

-- Rate limiting for the function: one row per request, keyed by a salted hash of the caller's
-- address (the address itself is never stored). Rows older than a day are deleted by the function.
create table if not exists public.cv_download_attempts (
  id bigint generated always as identity primary key,
  visitor text not null check (char_length(visitor) = 32),
  created_at timestamptz not null default now()
);
create index if not exists cv_download_attempts_visitor_idx on public.cv_download_attempts (visitor, created_at desc);
create index if not exists cv_download_attempts_created_idx on public.cv_download_attempts (created_at desc);

alter table public.cv_download_attempts enable row level security;
revoke all on public.cv_download_attempts from anon, authenticated;

-- The PDFs sit in a private bucket; the function hands out short-lived signed links.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('cv', 'cv', false, 1048576, array['application/pdf'])
on conflict (id) do update set public = false, file_size_limit = excluded.file_size_limit, allowed_mime_types = excluded.allowed_mime_types;
