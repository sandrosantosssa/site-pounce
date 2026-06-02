/* eslint-disable no-console */
/**
 * Grava um vídeo de demonstração do site Pounce para enviar ao cliente.
 *
 * O que o script faz:
 *   1. Abre o site em http://localhost:5173/?preview=site (preview do site novo)
 *   2. Tela cheia 1440×900 (proporção 16:10, boa pra notebook e WhatsApp)
 *   3. Permanece na Hero (vídeo de fundo + cronômetro mental) por alguns segundos
 *   4. Faz scroll suave de cima a baixo passando por todas as seções
 *   5. Pequenas pausas em cada seção pra dar tempo do espectador ler
 *   6. Salva o WebM em ./demo-video/
 *
 * Requisitos:
 *   - npm run dev rodando em http://localhost:5173
 *   - chromium do Playwright instalado (npx playwright install chromium)
 *
 * Como rodar:
 *   node scripts/record-demo.mjs
 */
import { chromium } from 'playwright';
import { mkdir, readdir, rename } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'demo-video');

const SITE_URL = process.env.SITE_URL ?? 'http://localhost:5173/?preview=site';
const WIDTH = 1440;
const HEIGHT = 900;

async function main() {
  await mkdir(OUT_DIR, { recursive: true });

  console.log('[demo] iniciando Chromium…');
  const browser = await chromium.launch({ headless: true });

  const context = await browser.newContext({
    viewport: { width: WIDTH, height: HEIGHT },
    deviceScaleFactor: 1,
    recordVideo: { dir: OUT_DIR, size: { width: WIDTH, height: HEIGHT } },
  });

  const page = await context.newPage();
  console.log(`[demo] abrindo ${SITE_URL}`);
  await page.goto(SITE_URL, { waitUntil: 'networkidle', timeout: 60_000 });

  // Garante que o vídeo do hero começou a tocar (autoplay muted)
  await page.waitForTimeout(2000);

  // Tour: nas âncoras de cada seção, rola suave + pausa
  const stops = [
    { selector: '#inicio', hold: 3500, label: 'Hero' },
    { selector: '#sobre', hold: 4000, label: 'Sobre' },
    { selector: '#esg', hold: 4500, label: 'ESG (operação)' },
    { selector: '#produtos', hold: 5000, label: 'Produtos (PCR + PIR)' },
    { selector: '#noticias', hold: 4500, label: 'Notícias Abiplast' },
    { selector: '#carreiras', hold: 4000, label: 'Carreiras' },
    { selector: '#contato', hold: 4000, label: 'Contato' },
  ];

  for (const stop of stops) {
    console.log(`[demo] → ${stop.label}`);
    await page.evaluate((sel) => {
      const el = document.querySelector(sel);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, stop.selector);
    await page.waitForTimeout(stop.hold);
  }

  // Volta suave para o topo pra fechar o tour
  console.log('[demo] voltando ao topo…');
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'smooth' }));
  await page.waitForTimeout(2500);

  await page.close(); // fecha pra salvar o vídeo
  await context.close();
  await browser.close();

  // Renomeia o arquivo .webm gerado para algo amigável
  const files = (await readdir(OUT_DIR)).filter((f) => f.endsWith('.webm'));
  const generated = files
    .map((f) => ({ f, mtime: new Date().getTime() }))
    .sort((a, b) => b.mtime - a.mtime)[0];
  if (generated) {
    const finalPath = path.join(OUT_DIR, 'pounce-site-demo.webm');
    try {
      await rename(path.join(OUT_DIR, generated.f), finalPath);
      console.log(`[demo] ✅ vídeo salvo em ${finalPath}`);
    } catch (e) {
      console.log(`[demo] ✅ vídeo salvo em ${path.join(OUT_DIR, generated.f)}`);
    }
  } else {
    console.warn('[demo] ⚠ nenhum .webm encontrado em', OUT_DIR);
  }
}

main().catch((err) => {
  console.error('[demo] erro:', err);
  process.exit(1);
});
