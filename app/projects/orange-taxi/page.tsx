"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { TaxiDoodle } from "@/components/doodles/TaxiDoodle";
import { MagneticButton } from "@/components/ui/MagneticButton";

export default function OrangeTaxiCaseStudy() {
  return (
    <main className="min-h-screen pt-28 pb-20 selection:bg-sunny">
      <article className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 font-mono text-sm font-bold text-ink dark:text-cream hover:text-tomato transition-colors group"
            data-cursor-label="back"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            <span>Back to all projects</span>
          </Link>
        </div>

        {/* Case Study Header */}
        <header className="border-2 border-ink dark:border-cream bg-white dark:bg-[#1E1E1E] p-6 sm:p-10 shadow-hard-lg dark:shadow-hard-dark-lg mb-10">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="font-mono text-xs font-black uppercase px-2.5 py-0.5 bg-sunny text-ink border border-ink">
              Flagship Project
            </span>
            <span className="font-mono text-xs font-bold uppercase px-2.5 py-0.5 bg-cream dark:bg-ink text-ink dark:text-cream border border-ink dark:border-cream">
              Production PWA
            </span>
            <span className="font-mono text-xs font-bold text-teal flex items-center gap-1 ml-auto">
              <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
              Live Deployment
            </span>
          </div>

          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-ink dark:text-cream tracking-tight mb-4">
            Orange Taxi: Full-Stack Electric Ride-Hailing &amp; Fleet Mobility Platform
          </h1>

          <p className="font-body text-xl text-ink/80 dark:text-cream/80 leading-relaxed mb-6">
            &ldquo;Premium rides. Without the premium price.&rdquo; A complete production ride-hailing suite for an all-electric fleet of Mahindra BE.6 electric SUVs in Delhi NCR.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4 border-t-2 border-ink/15 dark:border-cream/15">
            <MagneticButton
              href="https://orange-taxi.com"
              variant="teal"
              cursorLabel="live site"
              external={true}
              className="px-6 py-2.5 text-sm"
            >
              Visit Live Platform (orange-taxi.com) ↗
            </MagneticButton>

            <span className="font-mono text-xs text-ink/70 dark:text-cream/70">
              Role: Full-Stack Developer Intern (Sep 2026 – Present)
            </span>
          </div>
        </header>

        {/* Project Meta Grid */}
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          <div className="p-4 border-2 border-ink dark:border-cream bg-cream dark:bg-[#181818] shadow-hard-sm">
            <span className="font-mono text-[11px] font-bold uppercase text-ink/60 dark:text-cream/60 block mb-1">
              Architecture
            </span>
            <span className="font-display font-bold text-sm text-ink dark:text-cream">
              Progressive Web App (PWA)
            </span>
          </div>

          <div className="p-4 border-2 border-ink dark:border-cream bg-cream dark:bg-[#181818] shadow-hard-sm">
            <span className="font-mono text-[11px] font-bold uppercase text-ink/60 dark:text-cream/60 block mb-1">
              Fleet &amp; City
            </span>
            <span className="font-display font-bold text-sm text-ink dark:text-cream">
              Delhi NCR · Mahindra BE.6 EVs
            </span>
          </div>

          <div className="p-4 border-2 border-ink dark:border-cream bg-cream dark:bg-[#181818] shadow-hard-sm">
            <span className="font-mono text-[11px] font-bold uppercase text-ink/60 dark:text-cream/60 block mb-1">
              Backend &amp; DB
            </span>
            <span className="font-display font-bold text-sm text-ink dark:text-cream">
              Supabase Realtime · Postgres
            </span>
          </div>

          <div className="p-4 border-2 border-ink dark:border-cream bg-cream dark:bg-[#181818] shadow-hard-sm">
            <span className="font-mono text-[11px] font-bold uppercase text-ink/60 dark:text-cream/60 block mb-1">
              Frontend Tech
            </span>
            <span className="font-display font-bold text-sm text-ink dark:text-cream">
              React · TypeScript · TanStack
            </span>
          </div>
        </section>

        {/* Visual Doodle Banner */}
        <div className="border-2 border-ink dark:border-cream bg-sunny/20 dark:bg-[#151515] p-8 mb-12 flex flex-col items-center justify-center">
          <TaxiDoodle className="w-48 h-32" />
          <span className="font-mono text-xs font-bold text-ink dark:text-cream mt-2 uppercase tracking-wider">
            Mahindra BE.6 EV Fleet Dispatch Unit
          </span>
        </div>

        {/* Content Section 1: Context & Fleet Model */}
        <section className="space-y-6 mb-12 font-body text-base sm:text-lg text-ink/90 dark:text-cream/90 leading-relaxed">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink dark:text-cream tracking-tight border-b-2 border-ink/20 pb-3">
            01. Background &amp; Fleet Context
          </h2>
          <p>
            Orange Taxi is a pre-launch premium cab startup operating an exclusive fleet of 100% electric Mahindra BE.6 SUVs across the Delhi NCR region. Focused on corporate transport, executive airport transfers, and verified driver recruitment, the operational challenge was building a production-grade dispatch, booking, and payment system without relying on off-the-shelf bloatware or heavy native app store download barriers.
          </p>
          <p>
            To achieve immediate accessibility on any smartphone, I designed and built the complete rider and driver application stack as an installable Progressive Web App (PWA).
          </p>

          {/* Placeholder 1 */}
          <div className="border-2 border-dashed border-ink dark:border-cream bg-cream dark:bg-[#1C1C1C] p-8 text-center my-8">
            <span className="font-mono text-xs font-black px-2 py-1 bg-tomato text-white uppercase inline-block mb-2">
              [SCREENSHOT: Rider PWA Booking Flow]
            </span>
            <p className="font-mono text-xs text-ink/70 dark:text-cream/70 max-w-md mx-auto">
              Replace with screenshot of the mobile PWA booking screen, airport transfer destination selector, and EV ride tiers.
            </p>
          </div>
        </section>

        {/* Content Section 2: Realtime Dispatch Engine */}
        <section className="space-y-6 mb-12 font-body text-base sm:text-lg text-ink/90 dark:text-cream/90 leading-relaxed">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink dark:text-cream tracking-tight border-b-2 border-ink/20 pb-3">
            02. What I Built: Real-Time Dispatch Engine
          </h2>
          <p>
            At the heart of the platform is an asynchronous dispatch loop powered by <strong>Supabase Realtime</strong> channels and PostgreSQL Row-Level Security (RLS).
          </p>
          <div className="bg-white dark:bg-[#1E1E1E] border-2 border-ink dark:border-cream p-6 shadow-hard-sm space-y-3">
            <h3 className="font-display font-bold text-lg text-ink dark:text-cream">
              Dispatch State Machine &amp; Telemetry
            </h3>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
              <li>
                <strong>Instant Ride Matching:</strong> High-frequency subscription channels emit state changes from <code className="font-mono text-xs bg-cream px-1 border border-ink text-ink">REQUESTED</code> to <code className="font-mono text-xs bg-cream px-1 border border-ink text-ink">ACCEPTED</code> without HTTP polling latency.
              </li>
              <li>
                <strong>Live Driver Coordinates:</strong> Low-bandwidth geospatial coordinate broadcast updates rider maps smoothly with sub-second accuracy.
              </li>
              <li>
                <strong>In-Ride Two-Way Chat:</strong> Integrated encrypted WebSocket messaging between rider and driver directly inside the active ride session.
              </li>
            </ul>
          </div>

          {/* Placeholder 2 */}
          <div className="border-2 border-dashed border-ink dark:border-cream bg-cream dark:bg-[#1C1C1C] p-8 text-center my-8">
            <span className="font-mono text-xs font-black px-2 py-1 bg-sunny text-ink border border-ink uppercase inline-block mb-2">
              [SCREENSHOT: Dispatch Dashboard &amp; Live Coordinate Map]
            </span>
            <p className="font-mono text-xs text-ink/70 dark:text-cream/70 max-w-md mx-auto">
              Replace with screenshot of the active dispatch view showing driver status markers, assigned Mahindra BE.6 vehicles, and telemetry.
            </p>
          </div>
        </section>

        {/* Content Section 3: In-App UPI & Dynamic QR */}
        <section className="space-y-6 mb-12 font-body text-base sm:text-lg text-ink/90 dark:text-cream/90 leading-relaxed">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink dark:text-cream tracking-tight border-b-2 border-ink/20 pb-3">
            03. Dynamic UPI Payment &amp; Cash Handover Settlement
          </h2>
          <p>
            In Indian ride-hailing, driver cash transactions and manual UPI scanning often cause friction and reconciliation mismatches at trip end. I built an end-to-end UPI payment flow:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 border-2 border-ink dark:border-cream bg-white dark:bg-[#1E1E1E]">
              <h4 className="font-mono text-xs font-bold uppercase text-tomato mb-2">
                Dynamic UPI QR Generation
              </h4>
              <p className="text-sm">
                Generates trip-specific UPI intent QR codes embedding the exact calculated fare and trip transaction ID. Riders scan directly via Google Pay, PhonePe, or Paytm with zero manual amount typing.
              </p>
            </div>
            <div className="p-5 border-2 border-ink dark:border-cream bg-white dark:bg-[#1E1E1E]">
              <h4 className="font-mono text-xs font-bold uppercase text-teal mb-2">
                Driver Cash Handover Audit
              </h4>
              <p className="text-sm">
                For cash rides, the driver app triggers an instant cryptographic OTP settlement handshake with the rider to confirm fare collection before trip completion is registered in Postgres.
              </p>
            </div>
          </div>

          {/* Placeholder 3 */}
          <div className="border-2 border-dashed border-ink dark:border-cream bg-cream dark:bg-[#1C1C1C] p-8 text-center my-8">
            <span className="font-mono text-xs font-black px-2 py-1 bg-teal text-white uppercase inline-block mb-2">
              [SCREENSHOT: Dynamic UPI QR Driver Handover Screen]
            </span>
            <p className="font-mono text-xs text-ink/70 dark:text-cream/70 max-w-md mx-auto">
              Replace with screenshot of the dynamic QR modal with transaction verification badge.
            </p>
          </div>
        </section>

        {/* Technical Stack Index */}
        <section className="border-2 border-ink dark:border-cream bg-white dark:bg-[#1E1E1E] p-6 sm:p-8 shadow-hard mb-12">
          <h3 className="font-display font-extrabold text-xl text-ink dark:text-cream mb-4">
            Engineering Stack Breakdown
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
            <div>
              <span className="font-bold text-tomato block mb-1">CLIENT ARCHITECTURE</span>
              <p className="text-ink/80 dark:text-cream/80">
                React 18, TypeScript, TanStack Start, Tailwind CSS, Service Workers (PWA offline caching)
              </p>
            </div>
            <div>
              <span className="font-bold text-teal block mb-1">DATA &amp; INFRASTRUCTURE</span>
              <p className="text-ink/80 dark:text-cream/80">
                Supabase, PostgreSQL, Realtime WebSockets, Row Level Security, Edge Functions
              </p>
            </div>
          </div>
        </section>

        {/* Bottom Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t-2 border-ink dark:border-cream pt-8">
          <Link
            href="/#projects"
            className="font-mono text-sm font-bold text-ink dark:text-cream hover:underline"
          >
            ← Back to Overview
          </Link>
          <Link
            href="/projects/autonomous-rescue-robot"
            className="font-mono text-sm font-bold text-ink dark:text-cream hover:text-tomato flex items-center gap-2 group"
          >
            <span>Next Project: Autonomous Rescue Robot</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </article>
    </main>
  );
}
