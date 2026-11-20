<div align="center">

# DevPulse

### Turn Code Progress Into Public Proof That Compounds Credibility

DevPulse helps builders translate commits, releases, demos, and technical decisions into a proof feed that investors, users, contributors, and collaborators can actually understand — a credibility signal instead of another private changelog.

<p>
  <a href="https://github.com/jayblast-spec/devpulse"><img alt="GitHub Repo" src="https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github&logoColor=white"></a>
</p>

<p>
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-App%20Router-000000?style=flat-square&logo=next.js&logoColor=white">
  <img alt="React" src="https://img.shields.io/badge/React-19-38BDF8?style=flat-square&logo=react&logoColor=white">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-Product%20Layer-1D4ED8?style=flat-square&logo=typescript&logoColor=white">
  <img alt="Tailwind" src="https://img.shields.io/badge/Tailwind-Design%20System-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white">
  <img alt="Framer Motion" src="https://img.shields.io/badge/Framer%20Motion-Interface%20Motion-1D4ED8?style=flat-square&logo=framer&logoColor=white">
  <img alt="Vercel" src="https://img.shields.io/badge/Vercel-Functions-000000?style=flat-square&logo=vercel&logoColor=white">
</p>

<p>
  <img alt="Animated headline" src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=700&size=18&duration=2600&pause=650&color=1D4ED8&center=true&vCenter=true&width=760&lines=Commits+%2B+releases+%E2%86%92+proof+feed;Credibility+signal%2C+not+a+private+changelog;Founder+update+%2B+demo+script+%2B+roadmap;Show+what+shipped%2C+not+what+you+claim">
</p>

</div>

## What It Does

DevPulse takes a description of recent development work (what shipped, what was fixed, what changed) and generates a structured proof package:

- **Commit intelligence** — summarizes what changed and why it matters, in language a non-technical reader can follow.
- **Proof feed** — turns raw progress into public-facing updates that carry receipts, not just claims.
- **Demo script** — converts technical work into a short, presentable product story for a video or walkthrough.
- **Roadmap signal** — a release note, build log, founder update, and demo outline, each addressed to a different audience (users, contributors, investors, distribution).
- **Credibility score** — a scored output tied to the input, plus an action queue and contributor lanes for extending the tool.

## How It Works

- Built on Next.js App Router with TypeScript, Tailwind CSS 4, and Framer Motion, deployed as Vercel serverless functions.
- `app/page.tsx` is the entire live product: a text input for a progress description, wired to `app/api/intelligence`, which calls `generateIntelligence()` in `lib/product-engine.ts` and returns the credibility score, module summaries, and proof-feed content shown on the page.
- `app/components/ProfileAnalyzer.tsx` (real GitHub REST API calls, real stars/forks/language aggregation) exists in the repo but is never imported anywhere — it's not reachable from any route in the live app.

## Engineering Notes

**The real problem, stated honestly:** the "credibility score" shown on the live site is not derived from the commits, releases, or work actually described — this needs to be said plainly since it's the product's single core mechanic, not a secondary feature.

**What the score actually is:** `scoreFor()` in `lib/product-engine.ts` computes `57 + min(30, floor(inputLength / 6))`, plus +7 if the text matches a keyword regex (`risk|urgent|investor|client|payment|contract|meeting|decision|launch|proof|delay`), capped at 98. A longer input, or one containing a matched keyword, scores higher — regardless of whether the described work was real, valuable, or coherent.

**One real number:** typing a single keyword like "launch" into an otherwise empty input raises the score by a flat +7 — the scoring has no relationship to actual commit or release data.

**What would make this real:** the repo already contains a working real building block — `ProfileAnalyzer.tsx` calls the genuine public GitHub REST API and computes real stars/forks/language stats — but it's disconnected dead code, not wired into the credibility flow. Connecting real GitHub activity data to the score is the gap between what this demos as and what it currently does.

## Live

*(demo temporarily offline)*

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js (App Router) |
| UI | React 19, Tailwind CSS 4, Framer Motion |
| Language | TypeScript |
| Proof engine | Deterministic scoring and content-generation model |
| Deployment | Vercel serverless functions |

<div align="center">

<img alt="Footer" src="https://capsule-render.vercel.app/api?type=rect&height=60&color=0:1D4ED8,55:0B1E3D,100:020617&text=michael%40arknet.digital&fontColor=FAFAFA&fontSize=18&fontAlign=50&animation=fadeIn">

</div>
