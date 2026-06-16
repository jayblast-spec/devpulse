"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FEATURES = [
  {
    icon: "⭐",
    title: "Total star count",
    body: "See the aggregate stars across all public repos — a quick signal of community trust and project visibility.",
  },
  {
    icon: "🍴",
    title: "Fork breakdown",
    body: "Total forks tell you how many developers found a project worth building on. A key indicator of ecosystem influence.",
  },
  {
    icon: "💻",
    title: "Top languages",
    body: "See exactly which programming languages dominate the profile — weighted by lines of code across all repos.",
  },
  {
    icon: "📦",
    title: "Repo breakdown",
    body: "All public repos listed by stars — name, description, language, and when they were last updated.",
  },
  {
    icon: "🔗",
    title: "Zero auth required",
    body: "Uses GitHub's public API. No token, no login, no rate limits for casual use. Just type a username and go.",
  },
  {
    icon: "📊",
    title: "Shareable insights",
    body: "Use it to research potential collaborators, evaluate open source projects, or showcase your own work in a new format.",
  },
];

export default function FeaturesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="mx-auto max-w-4xl px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
          The GitHub metrics that{" "}
          <span className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">
            actually matter
          </span>
        </h2>
        <p className="mt-3 text-muted">
          Research any developer&apos;s public impact in seconds. No setup, no accounts.
        </p>
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            className="rounded-2xl border border-border bg-surface p-5 hover:border-accent/40 transition-colors"
          >
            <div className="mb-3 text-2xl">{f.icon}</div>
            <p className="mb-1 font-semibold text-foreground">{f.title}</p>
            <p className="text-sm text-muted leading-relaxed">{f.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
