<div align="center">

# DevPulse

### Turn Code Progress Into Public Proof That Compounds Credibility

DevPulse helps builders translate commits, releases, demos, and technical decisions into a proof feed that investors, users, contributors, and collaborators can actually understand — a credibility signal instead of another private changelog.

<p>
  <a href="https://devpulse-drab-alpha.vercel.app"><img alt="Live Demo" src="https://img.shields.io/badge/Live-Demo-1D4ED8?style=for-the-badge&logo=vercel&logoColor=white"></a>
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
- `app/api/intelligence` runs a deterministic engine (`lib/product-engine.ts`) that converts the submitted progress summary into a scored intelligence map, a prioritized action queue split by audience, and contributor missions.
- The homepage is a single-page command studio: a text input for the raw progress summary, a live score panel, and generated output panels for release notes, build logs, founder updates, and demo outlines.

## Live

[devpulse-drab-alpha.vercel.app](https://devpulse-drab-alpha.vercel.app)

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
