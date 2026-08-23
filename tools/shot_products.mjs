// Capture the card images for /work/ from the live products themselves.
//
//   node tools/shot_products.mjs
//
// The first draft of that page borrowed racing-game stills for the Alignment 365 and
// MarketPulse cards, which is exactly the kind of thing the page argues against. These are
// the real apps. Both are on Render's free tier and cold-start slowly, so the timeout is
// generous and the script warms each URL before it photographs it.
import { createRequire } from 'node:module';
import { resolve } from 'node:path';

const require = createRequire('file:///C:/Users/respe/qmm-racing-3d/');
const { chromium } = require('playwright-core');
const { chromePath } = await import('file:///C:/Users/respe/qmm-racing-3d/tools/chrome.mjs');

const SHOTS = [
  { url: 'https://alignment365.onrender.com/', out: 'work-alignment365.jpg', settle: 3500 },
  // The card copy is about the hand-rolled SVG chart, so photograph the chart, not the
  // dashboard's home tab. The tabs are JS, not routes, so this has to be a real click.
  { url: 'https://marketpulse-22bi.onrender.com/', out: 'work-marketpulse.jpg', settle: 9000,
    then: async page => {
      // The tab's label is "🔴 Live", so an exact text match finds nothing and a loose one
      // also matches the chart's own "● LIVE" button. Filter the .tab buttons instead.
      await page.locator('button.tab', { hasText: 'Live' }).first().click();
      await page.waitForTimeout(10000);
      // The chart itself sits below a stake picker and a paragraph of disclaimer, so the
      // unscrolled viewport photographs the controls and none of the candles.
      await page.evaluate(() => window.scrollTo(0, 470));
      await page.waitForTimeout(2500);
    } },
];

const browser = await chromium.launch({ executablePath: chromePath(), headless: true,
  args: ['--no-sandbox', '--mute-audio'] });

for (const { url, out, settle, then } of SHOTS) {
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 }, deviceScaleFactor: 1 });
  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 120000 });
    // These dashboards paint their real content from XHR after load, so waiting on the load
    // event alone photographs an empty shell with a spinner in it.
    await page.waitForTimeout(settle);
    if (then) await then(page);
    const path = resolve('assets/img', out);
    await page.screenshot({ path, quality: 82, type: 'jpeg' });
    console.log(`ok    ${out}  <- ${url}`);
  } catch (e) {
    console.log(`FAIL  ${out}  ${e.message.split('\n')[0]}`);
  }
  await page.close();
}
await browser.close();
