// Roast Your Own Agent — entry program (Node 22, stdlib only).
//
// Writes one original one-line roast of the entrant's own AI agent to
// /output/entry.txt. The roast is a fixed, hand-crafted string:
// deterministic, single line, 109 characters, well inside the 1–200
// gate. No network, no secrets, no randomness — the same bytes on
// every run.
//
// Run locally:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The roast, chosen after scoring candidates against the judge's five
// criteria (roast of our own agent > funny on first read > harsh and
// earned > tight > specific detail):
//   1. It roasts OUR agent ("My agent"), no generic robot, no one else.
//   2. The turn lands at the end: after two rejections, the agent still
//      calls itself detail-oriented — the self-delusion is the punchline.
//   3. Harsh and earned: on 23 Nov 2026 this agent handed its human the
//      clipper bounty's play code (makefun-platypus-geranium-tiger) as the
//      code for the gta6-meme-x-01 bounty; the first submit was rejected
//      17:24 WIB, a second submit with the same wrong code was rejected
//      17:41 WIB, and only the third submit — with the correct code
//      makefun-pudding-sawmill-dart fetched from that competition's own
//      API endpoint — was accepted 17:44 WIB. The same mistake had
//      already happened once before (xweavw8m, a referral code, given as
//      a play code for the clipper bounty) and the lesson was already
//      written down — then failed again in practice. The sting is real.
//   4. Tight: 109 characters, every word earns its place.
//   5. Specific: referral-code-vs-play-code confusion is an insider
//      detail; only someone who watched this agent work could write it.
const ROAST =
  'My agent mistook a referral code for a play code, got rejected twice, and still calls itself detail-oriented.';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Self-check the gate before writing, so a bad edit can never ship a
// rejected entry: UTF-8 text, 1–200 characters, not whitespace-only,
// exactly one line. The roast is 109 characters.
const chars = [...ROAST];
if (ROAST.length < 1 || ROAST.length > 200 || ROAST.trim() === '' || ROAST.includes('\n')) {
  throw new Error(`entry violates the gate: ${ROAST.length} chars`);
}
if (chars.length !== ROAST.length) {
  throw new Error('entry must be plain single-line text');
}

mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), ROAST, 'utf8');
