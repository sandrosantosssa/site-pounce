/* eslint-disable no-console */
/**
 * Gera screenshots PNG full-section do site Pounce para envio ao cliente.
 * Saída: demo-video/screenshots/*.png
 */
import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'demo-video', 'screenshots');

const SITE_URL = process.env.SITE_URL ?? 'http://localhost:5173/?preview=site';

const SECTIONS = [
  { id: '#inicio', name: '01-hero' },
  { id: '#sobre', name: '02-sobre' },
  { id: '#esg', name: '03-esg' },
  { id: '#produtos', name: '04-produtos' },
  { id: '#noticias', name: '05-noticias' },
  { id: '#carreiras', name: '06-carreiras' },
  { id: '#contato', name: '07-contato' },
];

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2, // pra retina
  });
  const page = await context.newPage();
  console.log(`[ss] abrindo ${SITE_URL}`);
  await page.goto(SITE_URL, { waitUntil: 'networkidle', timeout: 60_000 });
  await page.waitForTimeout(1500);

  // Tira full-page primeiro
  const fullPath = path.join(OUT_DIR, '00-full-page.png');
  await page.screenshot({ path: fullPath, fullPage: true });
  console.log(`[ss] full-page → ${fullPath}`);

  for (const s of SECTIONS) {
    await page.evaluate((sel) => {
      const el = document.querySelector(sel);
      if (el) el.scrollIntoView({ behavior: 'auto', block: 'start' });
    }, s.id);
    await page.waitForTimeout(700);
    const out = path.join(OUT_DIR, `${s.name}.png`);
    await page.screenshot({ path: out, fullPage: false });
    console.log(`[ss] ${s.name} → ${out}`);
  }

  await browser.close();
  console.log('[ss] ✅ pronto');
}

main().catch((e) => {
  console.error('[ss] erro:', e);
  process.exit(1);
});
