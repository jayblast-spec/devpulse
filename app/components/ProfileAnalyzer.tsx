"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type GHUser = {
  login: string;
  name: string | null;
  avatar_url: string;
  bio: string | null;
  location: string | null;
  blog: string | null;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
};

type GHRepo = {
  id: number;
  name: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  html_url: string;
  fork: boolean;
};

type ProfileData = {
  user: GHUser;
  repos: GHRepo[];
  totalStars: number;
  totalForks: number;
  languages: Record<string, number>;
  topRepos: GHRepo[];
};

type State = "idle" | "loading" | "error" | ProfileData;

function BarChart({ data, max }: { data: [string, number][]; max: number }) {
  return (
    <div className="flex flex-col gap-2">
      {data.map(([lang, count], i) => (
        <motion.div
          key={lang}
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.07 }}
          className="flex items-center gap-3"
        >
          <span className="text-xs text-muted w-24 shrink-0 truncate">{lang}</span>
          <div className="flex-1 h-2 rounded-full bg-surface-2 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(count / max) * 100}%` }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="h-full rounded-full bg-gradient-to-r from-accent to-accent-2"
            />
          </div>
          <span className="text-xs font-mono text-muted w-8 text-right">{count}</span>
        </motion.div>
      ))}
    </div>
  );
}

export default function ProfileAnalyzer() {
  const [username, setUsername] = useState("");
  const [state, setState] = useState<State>("idle");

  async function analyze(e: React.FormEvent) {
    e.preventDefault();
    const handle = username.trim().replace(/^@/, "");
    if (!handle) return;
    setState("loading");

    try {
      const [userRes, reposRes] = await Promise.all([
        fetch(`https://api.github.com/users/${handle}`),
        fetch(`https://api.github.com/users/${handle}/repos?per_page=100&sort=updated`),
      ]);

      if (!userRes.ok) {
        setState("error");
        return;
      }

      const user: GHUser = await userRes.json();
      const repos: GHRepo[] = reposRes.ok ? await reposRes.json() : [];

      const ownRepos = repos.filter((r) => !r.fork);
      const totalStars = ownRepos.reduce((s, r) => s + r.stargazers_count, 0);
      const totalForks = ownRepos.reduce((s, r) => s + r.forks_count, 0);

      const langCounts: Record<string, number> = {};
      ownRepos.forEach((r) => {
        if (r.language) langCounts[r.language] = (langCounts[r.language] || 0) + 1;
      });

      const topRepos = [...ownRepos].sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 8);

      setState({ user, repos: ownRepos, totalStars, totalForks, languages: langCounts, topRepos });
    } catch {
      setState("error");
    }
  }

  const result = typeof state === "object" && "user" in state ? state : null;
  const langEntries = result
    ? Object.entries(result.languages).sort((a, b) => b[1] - a[1]).slice(0, 8)
    : [];
  const maxLang = langEntries[0]?.[1] ?? 1;

  return (
    <section id="analyze" className="mx-auto w-full max-w-3xl px-4 pb-32">
      <form onSubmit={analyze} className="flex gap-3 mb-10">
        <div className="flex-1">
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter GitHub username (e.g. jayblast-spec)"
            className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none"
          />
        </div>
        <button
          type="submit"
          disabled={state === "loading" || !username.trim()}
          className="rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition-all disabled:opacity-50 shrink-0"
        >
          {state === "loading" ? (
            <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.37 0 0 5.37 0 12h4z" />
            </svg>
          ) : "Analyze"}
        </button>
      </form>

      {state === "error" && (
        <div className="rounded-xl border border-danger/30 bg-danger/10 p-4 text-sm text-danger mb-8">
          User not found or GitHub API rate limit reached. Try again in a minute.
        </div>
      )}

      <AnimatePresence>
        {result && (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            {/* Profile header */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-4"
            >
              <img
                src={result.user.avatar_url}
                alt={result.user.login}
                className="h-16 w-16 rounded-full border border-border"
              />
              <div>
                <h3 className="text-xl font-bold text-foreground">{result.user.name || result.user.login}</h3>
                <p className="text-sm text-muted">@{result.user.login}</p>
                {result.user.bio && <p className="text-xs text-muted mt-1 max-w-md">{result.user.bio}</p>}
                <div className="flex gap-3 mt-1.5 flex-wrap">
                  {result.user.location && <span className="text-xs text-muted">📍 {result.user.location}</span>}
                  {result.user.blog && <a href={result.user.blog.startsWith("http") ? result.user.blog : `https://${result.user.blog}`} target="_blank" rel="noopener noreferrer" className="text-xs text-accent hover:underline truncate max-w-[200px]">🔗 {result.user.blog}</a>}
                </div>
              </div>
            </motion.div>

            {/* Stats row */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { label: "Public repos", value: result.user.public_repos, color: "text-accent-2" },
                { label: "Total stars", value: result.totalStars, color: "text-warn" },
                { label: "Total forks", value: result.totalForks, color: "text-success" },
                { label: "Followers", value: result.user.followers, color: "text-foreground" },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.06 }}
                  className="rounded-xl border border-border bg-surface p-3 text-center"
                >
                  <p className={`text-2xl font-bold ${s.color}`}>{s.value.toLocaleString()}</p>
                  <p className="text-xs text-muted mt-0.5">{s.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Languages */}
            {langEntries.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="rounded-2xl border border-border bg-surface p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-4">Top Languages</p>
                <BarChart data={langEntries} max={maxLang} />
              </motion.div>
            )}

            {/* Top repos */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-3">
                Top Repos by Stars
              </p>
              <div className="flex flex-col gap-2">
                {result.topRepos.map((repo, i) => (
                  <motion.a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 + i * 0.05 }}
                    className="flex items-center justify-between gap-3 rounded-xl border border-border bg-surface p-4 hover:border-accent/40 transition-colors group"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors truncate">{repo.name}</p>
                      {repo.description && <p className="text-xs text-muted mt-0.5 truncate">{repo.description}</p>}
                    </div>
                    <div className="flex items-center gap-3 shrink-0 text-xs text-muted">
                      {repo.language && <span className="hidden sm:block">{repo.language}</span>}
                      <span className="flex items-center gap-1">⭐ {repo.stargazers_count}</span>
                      <span className="flex items-center gap-1">🍴 {repo.forks_count}</span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Member since */}
            <p className="text-xs text-center text-muted/50">
              GitHub member since {new Date(result.user.created_at).getFullYear()} · {result.user.following} following
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
