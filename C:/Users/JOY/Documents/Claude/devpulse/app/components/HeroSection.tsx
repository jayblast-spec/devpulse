"use client";

import { motion } from "framer-motion";

export default function HeroSection({ onAnalyzeClick }: { onAnalyzeClick: () => void }) {
  return (
    <section className="violet-bg hex-grid relative flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-accent/8 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex max-w-3xl flex-col items-center gap-6"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-2 rounded-full border border-accent/30 bg-accent-soft px-4 py-1.5 text-xs font-semibold text-accent-2"
        >
          <span>◈</span> GitHub analytics · No API key · Public profiles only
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl"
        >
          Any GitHub profile.
          <br />
          <span className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">
            Instant analytics.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="max-w-xl text-base text-muted sm:text-lg"
        >
          Enter any public GitHub username and get a full breakdown — total stars, forks, top languages,
          most active repos, and contribution patterns. Zero login, zero API keys.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center gap-3 sm:flex-row"
        >
          <button
            onClick={onAnalyzeClick}
            className="rounded-xl bg-accent px-8 py-3.5 text-sm font-semibold text-white hover:opacity-90 active:scale-95 transition-all"
          >
            Analyze a profile →
          </button>
          <span className="text-xs text-muted">Type a username · Instant results</span>
        </motion.div>

        {/* Stats preview chip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-4 w-full max-w-xs rounded-2xl border border-border bg-surface p-5 text-left shadow-2xl"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-sm">JB</div>
            <div>
              <p className="text-sm font-bold text-foreground">jayblast-spec</p>
              <p className="text-xs text-muted">12 repos · San Francisco</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center">
            {[
              { label: "Stars", value: "847" },
              { label: "Forks", value: "124" },
              { label: "Langs", value: "5" },
            ].map((s) => (
              <div key={s.label} className="rounded-lg bg-surface-2 p-2">
                <p className="text-sm font-bold text-accent">{s.value}</p>
                <p className="text-[10px] text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted"
      >
        <span className="text-xs">Try it below</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.4 }} className="h-4 w-px bg-muted/50" />
      </motion.div>
    </section>
  );
}
