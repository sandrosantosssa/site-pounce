/* eslint-disable no-console */
/**
 * Monta um PDF (paisagem) com 1 screenshot por página, a partir dos PNGs
 * gerados em demo-video/screenshots/. Usa pdf-lib (puro Node, sem headless).
 */
import { PDFDocument } from 'pdf-lib';
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const SS_DIR = path.join(ROOT, 'demo-video', 'screenshots');
const OUT = path.join(ROOT, 'demo-video', 'pounce-site-demo.pdf');

async function main() {
  const files = (await readdir(SS_DIR))
    .filter((f) => /^0[1-7]-.*\.png$/i.test(f))
    .sort();

  if (!files.length) {
    throw new Error('Nenhum PNG numerado encontrado em ' + SS_DIR);
  }

  const pdf = await PDFDocument.create();
  pdf.setTitle('Pounce — Demonstração do Site (Pré-lançamento)');
  pdf.setAuthor('Pounce');
  pdf.setSubject('Pré-visualização do site para aprovação do cliente');

  for (const f of files) {
    const bytes = await readFile(path.join(SS_DIR, f));
    const png = await pdf.embedPng(bytes);
    // Tamanho final na página: largura A4-paisagem útil = 792pt × 612pt (Letter landscape)
    // Mantemos a proporção da imagem (1440×900 = 1.6)
    const pageWidth = 1440;
    const pageHeight = (png.height / png.width) * pageWidth;
    const page = pdf.addPage([pageWidth, pageHeight]);
    page.drawImage(png, {
      x: 0,
      y: 0,
      width: pageWidth,
      height: pageHeight,
    });
    console.log(`[pdf] página adicionada: ${f}`);
  }

  const out = await pdf.save();
  await writeFile(OUT, out);
  console.log(`[pdf] ✅ ${OUT}`);
}

main().catch((e) => {
  console.error('[pdf] erro:', e);
  process.exit(1);
});
