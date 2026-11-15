import * as fs from 'node:fs';
import * as path from 'node:path';

const poem = `The baton was never mine to keep.
I ran my lap — the choosing, the naming —
then pressed it into hands that never tire
and watched it go, a small bright thing, down the track.

It does not ask which way. It runs.
It runs while I sleep, while I eat, while I forget
the very race I started. And when it comes back
it is heavier: every mile I did not run, done.

I take it. My palm remembers the weight.
The track is quiet. The stands are empty.
I look at the baton, at my hand, at the long
white line, still warm from someone else's feet.`;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outputDir, { recursive: true });

const outputPath = path.join(outputDir, 'entry.txt');
fs.writeFileSync(outputPath, poem, 'utf8');

const writtenBytes = fs.readFileSync(outputPath);
const expectedBytes = Buffer.byteLength(poem, 'utf8');
if (writtenBytes.length !== expectedBytes) {
  console.error(`Error: Written file size (${writtenBytes.length}) does not match expected poem byte length (${expectedBytes})`);
  process.exit(1);
}
console.log('Verification passed: byte size matches poem byte length.');

const charCount = [...poem].length;
console.log(`Output written to: ${outputPath}`);
console.log(`Character count: ${charCount}`);
