import sharp from 'sharp';
import { readdir, stat } from 'node:fs/promises';
import { join, parse, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIR = join(__dirname, '..', 'public', 'images');

// Logos & UI-Icons werden verlustfrei konvertiert (keine sichtbaren Artefakte),
// Fotos mit Q82 (gutes Verhältnis Größe/Qualität).
const LOSSLESS = new Set(['whatsapp-logo', 'die-freien-logo']);

// Diese Files überspringen (alte/ungenutzte Originale)
const SKIP = new Set(['logo.png', 'logo.jpg', 'hero.webp.png', 'hero.webp', 'hero.svg']);

const files = await readdir(DIR);
let totalIn = 0, totalOut = 0;

for (const file of files) {
  if (!/\.(png|jpe?g)$/i.test(file)) continue;
  if (SKIP.has(file)) {
    console.log(`⏭️  skip ${file}`);
    continue;
  }

  const inPath = join(DIR, file);
  const { name } = parse(file);
  const outPath = join(DIR, `${name}.webp`);

  const inSize = (await stat(inPath)).size;

  const pipeline = sharp(inPath);
  if (LOSSLESS.has(name)) {
    await pipeline.webp({ lossless: true, effort: 6 }).toFile(outPath);
  } else {
    await pipeline.webp({ quality: 82, effort: 6 }).toFile(outPath);
  }

  const outSize = (await stat(outPath)).size;
  totalIn += inSize;
  totalOut += outSize;

  const pct = ((1 - outSize / inSize) * 100).toFixed(1);
  console.log(`✓ ${file.padEnd(36)} ${(inSize / 1024).toFixed(0)} kB → ${(outSize / 1024).toFixed(0)} kB  (-${pct}%)`);
}

console.log('\nGesamt:');
console.log(`  Input:  ${(totalIn / 1024 / 1024).toFixed(2)} MB`);
console.log(`  Output: ${(totalOut / 1024 / 1024).toFixed(2)} MB`);
console.log(`  Saved:  ${((1 - totalOut / totalIn) * 100).toFixed(1)}%`);
