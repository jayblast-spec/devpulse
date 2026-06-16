export type IntelligenceInput = { input?: string };
const product = {
  "repo": "DevPulse",
  "suite": "Creator / Founder Tools",
  "domain": "Developer proof",
  "accent": "from-cyan-300 via-emerald-300 to-lime-300",
  "hero": "Turn code progress into public proof that compounds credibility.",
  "sub": "DevPulse helps builders translate commits, releases, demos, and technical decisions into a proof feed investors, users, contributors, and collaborators can understand.",
  "input": "Shipped RLS security fix, rebuilt ExposureWatch, opened contributor missions, verified API and build",
  "cta": "Generate dev pulse",
  "score": "Credibility signal",
  "modules": [
    [
      "Commit intelligence",
      "Summarize what changed and why it matters."
    ],
    [
      "Proof feed",
      "Create public updates with receipts and screenshots."
    ],
    [
      "Demo script",
      "Turn technical work into a short product story."
    ],
    [
      "Roadmap signal",
      "Show what shipped, what learned, and what comes next."
    ]
  ],
  "rows": [
    [
      "Release note",
      "Users",
      "Medium",
      "Translate changes into value users understand."
    ],
    [
      "Build log",
      "Contributors",
      "High",
      "Show technical detail and open tasks."
    ],
    [
      "Founder update",
      "Investors",
      "High",
      "Connect execution speed to business momentum."
    ],
    [
      "Demo outline",
      "Distribution",
      "Medium",
      "Make the next video or walkthrough easier to record."
    ]
  ],
  "missions": [
    [
      "GitHub commit ingestion",
      "Read commits and PRs into the proof engine."
    ],
    [
      "Screenshot evidence",
      "Attach UI and deploy proof to every update."
    ],
    [
      "Public roadmap feed",
      "Publish what shipped and what is next."
    ],
    [
      "Credibility score",
      "Track consistency, proof density, and user-facing progress."
    ]
  ]
} as const;
function scoreFor(subject: string) { let score = 57 + Math.min(30, Math.floor(subject.length / 6)); if (/risk|urgent|investor|client|payment|contract|meeting|decision|launch|proof|delay/i.test(subject)) score += 7; return Math.min(98, score); }
function band(score: number) { return score >= 86 ? 'strong' : score >= 72 ? 'ready' : score >= 60 ? 'needs review' : 'starter'; }
export function generateIntelligence({ input = '' }: IntelligenceInput) {
  const subject = input.trim() || product.input;
  const score = scoreFor(subject);
  return {
    product: product.repo,
    brand: 'ArkNet Digital',
    suite: product.suite,
    domain: product.domain,
    subject,
    score,
    status: band(score),
    executive_summary: product.sub,
    intelligence_map: product.modules.map(([label, value]) => ({ label, value, status: score >= 72 ? 'priority' : 'review' })),
    action_queue: product.rows.slice(0, 3).map(([item, owner, priority, note]) => ({ action: item + ' - ' + owner, priority, impact: note })),
    contributor_lanes: product.missions.map(([lane, mission]) => ({ lane, mission })),
    generated_at: new Date().toISOString()
  };
}
