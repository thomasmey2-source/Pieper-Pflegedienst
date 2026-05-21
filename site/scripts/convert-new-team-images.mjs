import sharp from 'sharp';
import { stat } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC = join(__dirname, '..', '..', 'Bilder');
const DST = join(__dirname, '..', 'public', 'images');

// Quelle → Ziel (in /public/images/)
const jobs = [
  { in: 'Armin_Pieper.png',       out: 'armin-pieper.webp',  width: 1200 },
  { in: 'Timo_Pieper.png',        out: 'timo-pieper.webp',   width: 1200 },
  { in: 'familie_pieper.png',     out: 'familie-pieper.webp', width: 1600 },
  { in: 'Armin&Timo_Pieper.png',  out: 'armin-timo.webp',     width: 1600 },
];

for (const j of jobs) {
  const inPath = join(SRC, j.in);
  const outPath = join(DST, j.out);
  const inSize = (await stat(inPath)).size;

  await sharp(inPath)
    .resize({ width: j.width, withoutEnlargement: true })
    .webp({ quality: 82, effort: 6 })
    .toFile(outPath);

  const outSize = (await stat(outPath)).size;
  const pct = ((1 - outSize / inSize) * 100).toFixed(1);
  console.log(`✓ ${j.in.padEnd(28)} → ${j.out.padEnd(22)} ${(inSize / 1024).toFixed(0)} kB → ${(outSize / 1024).toFixed(0)} kB  (-${pct}%)`);
}
