"use client";

import { useRef } from "react";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import ProfileAnalyzer from "./components/ProfileAnalyzer";
import Footer from "./components/Footer";

export default function Home() {
  const analyzeRef = useRef<HTMLDivElement>(null);

  function scrollToAnalyze() {
    analyzeRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <main>
      <HeroSection onAnalyzeClick={scrollToAnalyze} />
      <FeaturesSection />
      <div ref={analyzeRef} className="scroll-mt-8 pt-8">
        <div className="mx-auto max-w-3xl px-4 mb-10">
          <h2 className="text-xl font-bold text-foreground">Analyze a GitHub profile</h2>
          <p className="text-sm text-muted mt-1">
            Enter any public GitHub username to see stars, forks, top languages, and repo breakdown.
          </p>
        </div>
        <ProfileAnalyzer />
      </div>
      <Footer />
    </main>
  );
}
