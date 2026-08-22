// Serve the site locally and photograph it at desktop + phone widths, then report anything
// that 404'd or threw. This is the only way to know a build is good before it is public:
// GitHub Pages has no staging, so "push and look" means the broken version was live.
//
//   node tools/shot_site.mjs                 # / at 1440 and 390
//   node tools/shot_site.mjs /bloodlines-chess/
//
// playwright-core is borrowed from the racer repo rather than installed here — this repo is a
// static site with no package.json and it should stay that way.
import { createRequire } from 'node:module';
import { createServer } from 'node:http';
import { readFile, stat, mkdir } from 'node:fs/promises';
import { join, extname, resolve } from 'node:path';

const require = createRequire('file:///C:/Users/respe/qmm-racing-3d/');
const { chromium } = require('playwright-core');
const { chromePath } = await import('file:///C:/Users/respe/qmm-racing-3d/tools/chrome.mjs');

const ROOT = resolve('.');
const OUT = resolve('tools/_shots');
const PORT = +(process.env.PORT || 8899);
const PATHS = process.argv.slice(2);
const ROUTES = PATHS.length ? PATHS : ['/'];

const MIME = {
  '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json',
  '.svg': 'image/svg+xml', '.jpg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp',
  '.mp4': 'video/mp4', '.webm': 'video/webm', '.mp3': 'audio/mpeg', '.wav': 'audio/wav',
  '.glb': 'model/gltf-binary', '.ico': 'image/x-icon', '.xml': 'application/xml', '.txt': 'text/plain',
  '.wasm': 'application/wasm',
};
const server = createServer(async (req, res) => {
  const url = decodeURIComponent(req.url.split('?')[0]);
  let path = join(ROOT, url);
  try {
    if ((await stat(path)).isDirectory()) path = join(path, 'index.html');
  } catch { res.writeHead(404).end('not found'); return; }
  try {
    const body = await readFile(path);
    res.writeHead(200, { 'Content-Type': MIME[extname(path)] || 'application/octet-stream' });
    res.end(body);
  } catch { res.writeHead(404).end('not found'); }
});
await mkdir(OUT, { recursive: true });
await new Promise(r => server.listen(PORT, r));

const browser = await chromium.launch({
  executablePath: chromePath(), headless: true,
  args: ['--no-sandbox', '--autoplay-policy=no-user-gesture-required', '--mute-audio',
    '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'],
});

let bad = 0;
for (const route of ROUTES) {
  for (const [tag, w, h] of [['desktop', 1440, 900], ['phone', 390, 844]]) {
    const page = await browser.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: 1 });
    const problems = [];
    page.on('pageerror', e => problems.push('JS  ' + e.message));
    page.on('console', m => { if (m.type() === 'error') problems.push('LOG ' + m.text()); });
    page.on('response', r => { if (r.status() >= 400) problems.push(r.status() + ' ' + r.url()); });

    await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: 'load' });
    // Scroll the whole page so every lazy image and every reveal actually fires before the
    // shutter — a full-page screenshot alone leaves them blank and the shot lies.
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 400) {
        window.scrollTo(0, y); await new Promise(r => setTimeout(r, 60));
      }
      window.scrollTo(0, 0);
    });
    // Force every reveal on before the shutter. Playwright's fullPage capture re-lays-out the
    // page, and anything still mid-transition photographs as an empty band — which reads as a
    // broken section when the section is fine.
    await page.evaluate(() => document.querySelectorAll('.rv').forEach(e => e.classList.add('in')));
    // loading="lazy" is right for real visitors and wrong for a screenshot: a scripted scroll
    // outruns the fetches, so everything below the second fold photographs as an empty box.
    // Flip them eager and WAIT for the decode, then the shot shows what a reader sees.
    await page.evaluate(async () => {
      const imgs = [...document.images];
      imgs.forEach(i => { i.loading = 'eager'; if (!i.src) i.src = i.src; });
      await Promise.all(imgs.map(i => i.complete ? Promise.resolve()
        : new Promise(r => { i.onload = i.onerror = r; })));
    });
    await page.waitForTimeout(600);
    const broken = await page.evaluate(() =>
      [...document.images].filter(i => !i.naturalWidth).map(i => i.getAttribute('src')));
    for (const b of broken) { console.log('   BROKEN IMG ' + b); bad++; }

    // Every <video> must actually DECODE, not merely load. A shipped VP9 webm once passed
    // every other check here — 200 OK, right duration, ffmpeg decoded it clean — and then
    // died in Chrome with PIPELINE_ERROR_DECODE a third of a second in, so the hero was a
    // frozen poster on the live site. canPlayType() says "probably" for that same file, so
    // the only honest test is to press play and watch the clock move.
    const vids = await page.evaluate(async () => {
      const out = [];
      for (const v of document.querySelectorAll('video')) {
        v.muted = true;
        try { await v.play(); } catch { /* autoplay refusal is reported via t below */ }
        await new Promise(r => setTimeout(r, 1500));
        out.push({ src: (v.currentSrc || v.src).split('/').pop(), t: +v.currentTime.toFixed(2),
                   err: v.error ? `${v.error.code} ${v.error.message}` : null });
      }
      return out;
    });
    for (const v of vids) {
      if (v.err || v.t < 0.4) { console.log(`   VIDEO STALLED ${v.src} t=${v.t} ${v.err || ''}`); bad++; }
      else console.log(`   video ok  ${v.src}  t=${v.t}`);
    }

    const name = (route.replace(/[^a-z0-9]+/gi, '_') || 'root') + '_' + tag + '.png';
    await page.screenshot({ path: join(OUT, name), fullPage: true });
    // Horizontal overflow is the one bug a full-page screenshot hides: the image is simply
    // wider, and it looks fine until a real phone shows a sideways scrollbar.
    const over = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    console.log(`${route} @${tag}  ${name}${over > 0 ? `  ⚠ overflows ${over}px` : ''}`);
    if (over > 0) bad++;
    for (const p of [...new Set(problems)]) { console.log('   ' + p); bad++; }
    await page.close();
  }
}
await browser.close();
server.close();
console.log(bad ? `\n${bad} problem(s)` : '\nclean');
