"use client";

import React from "react";
import Link from "next/link";
import { StickerPile } from "@/components/ui/StickerPile";
import { MagneticButton } from "@/components/ui/MagneticButton";

export default function AboutPage() {
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
              Biography
            </span>
            <span className="font-mono text-xs font-bold px-2.5 py-0.5 bg-cream dark:bg-ink text-ink dark:text-cream border border-ink dark:border-cream">
              BMSCE Bengaluru &apos;28
            </span>
          </div>

          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-ink dark:text-cream tracking-tight mb-4">
            About Akshat Gupta
          </h1>

          <p className="font-body text-lg text-ink/80 dark:text-cream/80 max-w-2xl leading-relaxed">
            Full-stack developer and undergraduate engineer building robust software and hardware solutions with verifiable results and zero hype.
          </p>
        </header>

        {/* Two-column bio and interactive sticker pile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          <div className="lg:col-span-6 space-y-6">
            <div className="border-2 border-ink dark:border-cream bg-white dark:bg-[#1E1E1E] p-6 sm:p-8 shadow-hard">
              <h2 className="font-display font-extrabold text-2xl text-ink dark:text-cream mb-4">
                Systems Over Theory
              </h2>
              <div className="space-y-4 font-body text-base text-ink/80 dark:text-cream/80 leading-relaxed">
                <p>
                  I am a Computer Science undergraduate at <strong>BMS College of Engineering, Bengaluru</strong>, specializing in IoT, Cybersecurity, and Blockchain (2024–2028).
                </p>
                <p>
                  My engineering philosophy focuses on systems that interface with real constraints: moving vehicles, hardware sensors, and live customer transactions. Whether optimizing Supabase Realtime channels for an electric cab dispatch platform in Delhi or programming low-latency vision algorithms for rail lines, I build for resilience.
                </p>
                <p>
                  <strong>Academic Track Record:</strong> CGPA of 8.97 (through 4th semester) and 94.8% in CBSE Class X (2022).
                </p>
              </div>

              <div className="border-t-2 border-ink/15 dark:border-cream/15 mt-6 pt-4 flex flex-wrap gap-4 font-mono text-xs font-bold">
                <div>
                  <span className="text-ink/70 dark:text-cream/70 block">Current Base</span>
                  <span>Bengaluru, India</span>
                </div>
                <div>
                  <span className="text-ink/70 dark:text-cream/70 block">Target Roles</span>
                  <span>Software Engineering Internships</span>
                </div>
              </div>
            </div>

            <div className="border-2 border-ink dark:border-cream bg-white dark:bg-[#1E1E1E] p-6 shadow-hard">
              <h3 className="font-display font-extrabold text-lg text-ink dark:text-cream mb-2">
                Want to collaborate?
              </h3>
              <p className="font-body text-sm text-ink/80 dark:text-cream/80 mb-4">
                I am actively considering summer/fall 2026 engineering internships and selective freelance contracts.
              </p>
              <MagneticButton
                href="mailto:akshat070906@gmail.com?subject=Engineering%20Opportunity"
                variant="primary"
                isMagnetic={true}
                cursorLabel="email"
                className="text-sm px-6 py-3"
              >
                Send an Email →
              </MagneticButton>
            </div>
          </div>

          <div className="lg:col-span-6">
            <StickerPile />
          </div>
        </div>
      </div>
    </main>
  );
}
