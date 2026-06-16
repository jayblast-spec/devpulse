export type IntelligenceInput = { input?: string };

const product = {
  "repo": "DevPulse",
  "suite": "Creator / Founder Tools",
  "category": "Developer signal",
  "audience": "developers, indie hackers, CTOs, and technical creators",
  "promise": "turn code, commits, and product motion into a public proof engine",
  "inputLabel": "Project update, repo summary, or changelog",
  "placeholder": "Added live SSE cockpit, failure learning, and repo factory quality gate",
  "primary": "Generate dev pulse",
  "gradient": "from-cyan-300 via-emerald-300 to-lime-300",
  "modules": [
    "Changelog intelligence",
    "Technical story builder",
    "Repo health pulse",
    "Demo script",
    "Public proof archive"
  ],
  "outputs": [
    "Public update",
    "Technical summary",
    "Next demo target",
    "Credibility gaps"
  ],
  "next": [
    "GitHub commit ingestion",
    "release note automation",
    "public roadmap feed",
    "technical credibility score"
  ]
} as const;

function score(text: string) {
  const length = text.trim().length;
  const diversity = new Set(text.toLowerCase().replace(/[^a-z0-9 ]/g, '').split(/\s+/).filter(Boolean)).size;
  return Math.min(97, 48 + Math.floor(length / 7) + Math.min(28, diversity));
}

export function generateIntelligence({ input = '' }: IntelligenceInput) {
  const subject = input.trim() || product.placeholder;
  const confidence = score(subject);
  const urgency = confidence > 82 ? 'high' : confidence > 66 ? 'medium' : 'starter';
  return {
    product: product.repo,
    category: product.category,
    subject,
    confidence,
    urgency,
    executive_summary: product.promise,
    immediate_outputs: product.outputs.map((output, index) => ({
      title: output,
      detail: output + ' for: ' + subject,
      priority: index === 0 ? 'primary' : index === 1 ? 'supporting' : 'next'
    })),
    automation_plan: product.modules.map((module, index) => ({
      stage: index + 1,
      module,
      value: 'Automate ' + module.toLowerCase() + ' so ' + product.audience + ' can move faster with less manual work.'
    })),
    future_addons: product.next.map((addon, index) => ({
      name: addon,
      horizon: index < 2 ? 'v2' : 'v3',
      contributor_lane: index % 2 === 0 ? 'integration' : 'product intelligence'
    })),
    contributor_brief: 'Improve ' + product.repo + ' by making ' + product.category.toLowerCase() + ' easier for ' + product.audience + '.',
    generated_at: new Date().toISOString()
  };
}
