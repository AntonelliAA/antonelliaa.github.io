// Fails the build when a page in dist/ links to an internal page, file or #anchor that is not there.
// External links are left alone, so a third-party outage cannot block a deploy.
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';

const root = process.argv[2] ?? 'dist';
const pages = [];
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walk(path);
    else if (name.endsWith('.html')) pages.push(path);
  }
};
walk(root);

const idsOf = (html) => new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]));
const resolve = (page, path) => {
  const target = path.startsWith('/') ? join(root, path) : join(dirname(page), path);
  if (existsSync(target) && statSync(target).isFile()) return target;
  const index = join(target, 'index.html');
  return existsSync(index) ? index : existsSync(`${target}.html`) ? `${target}.html` : null;
};

const broken = [];
for (const page of pages) {
  const html = readFileSync(page, 'utf8');
  for (const [, url] of html.matchAll(/\s(?:href|src)="([^"]+)"/g)) {
    if (/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(url)) continue;
    const [path, anchor] = url.split('#');
    const target = path ? resolve(page, path.split('?')[0]) : page;
    if (!target) broken.push(`${page}: ${url} (missing file)`);
    else if (anchor && target.endsWith('.html') && !idsOf(readFileSync(target, 'utf8')).has(anchor)) broken.push(`${page}: ${url} (missing anchor)`);
  }
}

if (broken.length) {
  console.error(`${broken.length} broken internal link(s):\n${broken.join('\n')}`);
  process.exit(1);
}
console.log(`${pages.length} pages checked, no broken internal links.`);
