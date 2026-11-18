// news-image-20261118 entry (Node 22, standard library only): the image is
// the entry.png beside this file, and the program copies it to the output
// directory as entry.png. The image sums up the world news of Wednesday
// 18 November 2026 in one front-page picture.
//
// Run locally with: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// (the grader sets MAKEFUN_OUTPUT_DIR to /output itself).

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(
  new URL('./entry.png', import.meta.url),
  join(outDir, 'entry.png'),
);
