"use client";

import React from "react";
import Link from "next/link";
import {
  ExperienceSection,
  RecognitionSection,
} from "@/components/ui/ExperienceAndRecognition";
import { MagneticButton } from "@/components/ui/MagneticButton";

export default function ExperiencePage() {
  return (
    <main className="min-h-screen pt-28 pb-20 selection:bg-sunny">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-sm font-bold text-ink dark:text-cream hover:text-tomato transition-colors group"
            data-cursor-label="home"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            <span>Back to home</span>
          </Link>
        </div>

        {/* Page Header */}
        <header className="border-2 border-ink dark:border-cream bg-white dark:bg-[#1E1E1E] p-6 sm:p-10 shadow-hard mb-12">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="font-mono text-xs font-bold px-2.5 py-0.5 bg-sunny text-ink border border-ink">
              Industry &amp; Awards
            </span>
            <span className="font-mono text-xs font-bold px-2.5 py-0.5 bg-tomato text-white border border-ink">
              Delhi &amp; Bengaluru
            </span>
          </div>

          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-ink dark:text-cream tracking-tight mb-4">
            Experience &amp; Honors
          </h1>

          <p className="font-body text-lg text-ink/80 dark:text-cream/80 max-w-2xl leading-relaxed">
            Hands-on software delivery at early-stage startups and national-level engineering recognition for assistive assistive hardware systems.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <MagneticButton
              href="/Akshat_Gupta_Resume.pdf"
              download={true}
              variant="secondary"
              cursorLabel="resume"
              className="text-sm px-6 py-3"
            >
              Download PDF Resume ↓
            </MagneticButton>
          </div>
        </header>

        {/* Section 1: Professional Experience */}
        <section className="mb-14">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink dark:text-cream mb-6">
            Production Software Experience
          </h2>
          <ExperienceSection />
        </section>

        {/* Section 2: Honors & Certifications */}
        <section>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink dark:text-cream mb-6">
            Honors, Awards &amp; Certifications
          </h2>
          <RecognitionSection />
        </section>
      </div>
    </main>
  );
}
