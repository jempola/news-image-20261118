// news-image-20261118 entry (Node 22, standard library only): the image is
// the entry.png beside this file, and the program copies it to the output
// directory as entry.png. The image sums up the world news of Wednesday
// 18 November 2026 in one front-page picture.
//
// Run locally with: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// (the grader sets MAKEFUN_OUTPUT_DIR to /output itself).

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const sourcePath = new URL('./entry.png', import.meta.url);
const outPath = join(outDir, 'entry.png');
copyFileSync(sourcePath, outPath);

// Determinism guard: the grader runs the program twice and requires
// identical bytes, so read the written file back and verify it matches
// the source exactly; fail loudly instead of shipping a corrupt copy.
const written = readFileSync(outPath);
const source = readFileSync(sourcePath);
if (!written.equals(source)) {
  throw new Error('entry.png mismatch: written output differs from source');
}
