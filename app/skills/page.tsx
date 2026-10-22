"use client";

import React from "react";
import Link from "next/link";
import { SkillsIndex } from "@/components/ui/SkillsIndex";

export default function SkillsPage() {
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
            <span className="font-mono text-xs font-bold px-2.5 py-0.5 bg-teal text-white border border-ink">
              Technical Index
            </span>
            <span className="font-mono text-xs font-bold px-2.5 py-0.5 bg-sunny text-ink border border-ink">
              Zero Progress Bars
            </span>
          </div>

          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-ink dark:text-cream tracking-tight mb-4">
            Engineering Capabilities &amp; Stack
          </h1>

          <p className="font-body text-lg text-ink/80 dark:text-cream/80 max-w-2xl leading-relaxed">
            Organized strictly by architectural domain: languages, frontend/PWA, backend &amp; cloud systems, cybersecurity tooling, and embedded hardware.
          </p>
        </header>

        {/* Main Skills Grid */}
        <SkillsIndex />

        {/* Engineering Philosophy Banner */}
        <div className="mt-12 border-2 border-ink dark:border-cream bg-cream dark:bg-[#1A1A1A] p-6 sm:p-8 shadow-hard">
          <h2 className="font-display font-extrabold text-xl text-ink dark:text-cream mb-3">
            How I Pick Tools
          </h2>
          <p className="font-body text-base text-ink/80 dark:text-cream/80 leading-relaxed max-w-3xl">
            I select technologies for operational reliability, compile-time safety, and minimal user latency. For high-concurrency client state, TypeScript and TanStack; for real-time event streaming and data integrity, Supabase with PostgreSQL Row-Level Security; for hardware, low-overhead C/C++ running bare-metal or on RTOS.
          </p>
        </div>
      </div>
    </main>
  );
}
