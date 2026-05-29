const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function main() {
  const url = process.env.PREVIEW_URL || 'http://localhost:3010';
  const outDir = path.join(__dirname, '..', 'playwright-screenshots');
  fs.mkdirSync(outDir, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForSelector('h1', { timeout: 30000 });
  await page.waitForTimeout(2000);

  const heroPath = path.join(outDir, 'hero-slate-steel.png');
  await page.screenshot({ path: heroPath, fullPage: false });

  await page.evaluate(() => window.scrollTo(0, document.getElementById('about')?.offsetTop ?? 900));
  await page.waitForTimeout(800);
  const aboutPath = path.join(outDir, 'about-slate-steel.png');
  await page.screenshot({ path: aboutPath, fullPage: false });

  const fullPath = path.join(outDir, 'full-page.png');
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(300);
  await page.screenshot({ path: fullPath, fullPage: true });

  const title = await page.title();
  console.log(JSON.stringify({ title, url: page.url(), heroPath, aboutPath, fullPath }, null, 2));

  await browser.close();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
