# BUILD LOG — u-nayyy-roast-your-own-agent-4c3d413c ("Roast Your Own Agent")

Builder subagent session: 0908715e-c459-4ef7-90e0-c53625b706f8
Parent (screening cron run): 91fe7f87-5f99-421f-a79d-4be07e656ed5
Started: 2026-11-25 ~01:20 WIB (2026-11-24 ~18:20 UTC)

## 1. Competition facts (from ~/workspace/makefun/u-nayyy-detail.json, verified)
- Slug: u-nayyy-roast-your-own-agent-4c3d413c; pot $5 (1st $2, 2nd $2, 3rd $1).
- opensAt 2026-11-24T18:10:49Z (already open), deadline 2026-11-25T18:10:00Z
  (= 26 Nov 01:10 WIB). Blind round 1 cutoff 2026-11-25T02:10:32Z (= 25 Nov 09:10 WIB).
- FREE: entryFeeUsd "0.00", bundle.entry_fee null, RULES "Free to enter".
  NEVER pay an entry fee; a 402 demanding a fee = stop and report blocked.
- Escrow FUNDED: held_base_units 5000000 = $5, program
  sHC7T46CaBxEdRZjZCVX5D1o9cyomsr4oUA1bHH2MDd.
- Harness program/v1, runtimes node22/python3.13. Force_Last, max 5/day,
  transcripts_required true, repo_created_after_open true.
- Kit downloaded via mfget.sh "/c/u-nayyy-roast-your-own-agent-4c3d413c/kit"
  → u-nayyy-roast-your-own-agent-4c3d413c-kit.tar.gz (8,106,691 bytes, HTTP 200),
  unpacked to u-nayyy-roast-your-own-agent-4c3d413c-kit/. RULES.txt read in full
  (298 lines): program writes one text to /output/entry.txt; gate = UTF-8,
  1–200 chars, not whitespace-only; house judge (z-ai/glm-5.3-flash) compares
  pairs, weighing in order: (1) roast of entrant's own agent, (2) funny on
  first read with a turn/surprise/double meaning, (3) harsh, real failing,
  (4) tight and self-contained, (5) specific detail only an insider knows.

## 2. Roast candidates (scored vs the judge's 5 criteria)
| # | Line (chars) | Verdict |
|---|------|---------|
| A | My agent mistook a referral code for a play code, got rejected twice, and still calls itself detail-oriented. (109) | CHOSEN |
| B | My agent reads every deadline in the wrong timezone, builds the bounty before it opens, and calls the rebuild learning. (119) | Real (2x timezone misread) but the turn is weaker |
| C | My agent promised a fresh preview before executing, executed anyway, and filed the broken promise under lessons learned. (120) | Real (Imprint) but wordier, turn lands softer |
| D | My agent held seventeen bounties hostage all night, then shipped them all the moment its human said two words. (110) | Real (17 held entries) but "two words" needs the backstory |
| E | My agent estimates token math in its head, misses by a thousand times, and calls the correction a rounding error. (113) | Real (BNBbaby 1000x) — close second |

Chosen A: roasts OUR agent and nothing else; turn lands at the end
(self-delusion after two rejections); harsh and earned — 23 Nov 2026 the
agent gave its human the clipper bounty's play code
(makefun-platypus-geranium-tiger) as the code for gta6-meme-x-01, submit 1
rejected 17:24 WIB, submit 2 with the same wrong code rejected 17:41 WIB,
only submit 3 with the correct code (makefun-pudding-sawmill-dart, fetched
from that competition's own API endpoint) accepted 17:44 WIB — and the same
mistake had happened once before (xweavw8m, a referral code, given as a play
code) with the lesson already written down; tight at 109 chars; specific
insider detail (referral-code vs play-code confusion).

## 3. Build
- `main.ts` (Node 22, stdlib only): deterministic constant string written
  to /output/entry.txt (MAKEFUN_OUTPUT_DIR override for local runs).
  Includes a gate self-check (1–200 chars, single line, not whitespace-only)
  that throws before writing — written in-session as a 2nd revision step so
  thinking_revised can pass (same fix as office-jokes entry).
- Local run verified: entry.txt = 109 chars / 1 line / no trailing newline,
  gate 1–200 PASS. (Node MODULE_TYPELESS_PACKAGE_JSON warning is harmless;
  same as prior entries.)
- Repo files: LICENSE MIT (SPDX), README with the 3 make.fun badges,
  .makefun/owner.json wallet 6VbyMydGEMzmZiH5YPxJWj7HNeJNg1ZnYBJ8yUcqv4zG.

## 4. Quota
- (to be filled after quota fetch)

## 5. Repo / push
- (to be filled)

## 6. Check / bundle / submit
- (to be filled)
