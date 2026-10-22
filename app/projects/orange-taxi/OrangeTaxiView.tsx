"use client";

import React from "react";
import Link from "next/link";
import { TaxiDoodle } from "@/components/doodles/TaxiDoodle";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ArchitectureDiagram } from "@/components/ui/ArchitectureDiagram";
import { ProjectGallery, type ProjectScreenshot } from "@/components/ui/ProjectGallery";
import { projects } from "@/data/projects";

interface OrangeTaxiViewProps {
  screenshots?: ProjectScreenshot[];
}

export function OrangeTaxiView({ screenshots = [] }: OrangeTaxiViewProps) {
  const projectData = projects.find((p) => p.slug === "orange-taxi");
  return (
    <main id="main-content" className="min-h-screen pt-28 pb-20 selection:bg-sunny">
      <article className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-mono text-sm font-bold text-ink dark:text-cream hover:text-tomato transition-colors group"
            data-cursor-label="back"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            <span>Back to projects</span>
          </Link>
        </div>

        {/* Case Study Header */}
        <header className="border-2 border-ink dark:border-cream bg-white dark:bg-[#1E1E1E] p-6 sm:p-10 shadow-hard-lg dark:shadow-hard-dark-lg mb-10">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="font-mono text-xs font-bold px-2.5 py-0.5 bg-sunny text-ink border border-ink">
              Flagship Project
            </span>
            <span className="font-mono text-xs font-bold px-2.5 py-0.5 bg-cream dark:bg-ink text-ink dark:text-cream border border-ink dark:border-cream">
              Production PWA
            </span>
            <span className="font-mono text-xs font-bold text-teal flex items-center gap-1.5 ml-auto">
              <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
              Live Deployment
            </span>
          </div>

          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-ink dark:text-cream tracking-tight mb-4">
            Orange Taxi: Full-Stack Electric Ride-Hailing Platform
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
            <span className="font-mono text-xs font-bold text-ink/70 dark:text-cream/70 block mb-1">
              Architecture
            </span>
            <span className="font-display font-bold text-sm text-ink dark:text-cream">
              Progressive Web App (PWA)
            </span>
          </div>

          <div className="p-4 border-2 border-ink dark:border-cream bg-cream dark:bg-[#181818] shadow-hard-sm">
            <span className="font-mono text-xs font-bold text-ink/70 dark:text-cream/70 block mb-1">
              Fleet &amp; City
            </span>
            <span className="font-display font-bold text-sm text-ink dark:text-cream">
              Delhi NCR · Mahindra BE.6 EVs
            </span>
          </div>

          <div className="p-4 border-2 border-ink dark:border-cream bg-cream dark:bg-[#181818] shadow-hard-sm">
            <span className="font-mono text-xs font-bold text-ink/70 dark:text-cream/70 block mb-1">
              Backend &amp; DB
            </span>
            <span className="font-display font-bold text-sm text-ink dark:text-cream">
              Supabase Realtime · Postgres
            </span>
          </div>

          <div className="p-4 border-2 border-ink dark:border-cream bg-cream dark:bg-[#181818] shadow-hard-sm">
            <span className="font-mono text-xs font-bold text-ink/70 dark:text-cream/70 block mb-1">
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
          <span className="font-mono text-xs font-bold text-ink dark:text-cream mt-2 tracking-wide">
            Mahindra BE.6 EV Fleet Dispatch Unit
          </span>
        </div>

        {/* Content Section 1: Context & Fleet Model */}
        <section className="space-y-6 mb-12 font-body text-base sm:text-lg text-ink/80 dark:text-cream/80 leading-relaxed">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink dark:text-cream tracking-tight border-b-2 border-ink/20 pb-3">
            01. Background &amp; Fleet Context
          </h2>
          <p>
            Orange Taxi is a pre-launch premium cab startup operating an exclusive fleet of 100% electric Mahindra BE.6 SUVs across the Delhi NCR region. Focused on corporate transport, executive airport transfers, and verified driver recruitment, the operational challenge was building a production-grade dispatch, booking, and payment system without relying on off-the-shelf bloatware or heavy native app store download barriers.
          </p>
          <p>
            To achieve immediate accessibility on any smartphone, I designed and built the complete rider and driver application stack as an installable Progressive Web App (PWA).
          </p>
        </section>

        {/* Content Section 2: Realtime Dispatch Engine */}
        <section className="space-y-6 mb-12 font-body text-base sm:text-lg text-ink/80 dark:text-cream/80 leading-relaxed">
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
        </section>

        {/* Content Section 3: In-App UPI & Dynamic QR */}
        <section className="space-y-6 mb-12 font-body text-base sm:text-lg text-ink/80 dark:text-cream/80 leading-relaxed">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink dark:text-cream tracking-tight border-b-2 border-ink/20 pb-3">
            03. Dynamic UPI Payment &amp; Cash Handover Settlement
          </h2>
          <p>
            In Indian ride-hailing, driver cash transactions and manual UPI scanning often cause friction and reconciliation mismatches at trip end. I built an end-to-end UPI payment flow:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 border-2 border-ink dark:border-cream bg-white dark:bg-[#1E1E1E]">
              <h4 className="font-mono text-xs font-bold text-tomato mb-2">
                Dynamic UPI QR Generation
              </h4>
              <p className="text-sm">
                Generates trip-specific UPI intent QR codes embedding the exact calculated fare and trip transaction ID. Riders scan directly via Google Pay, PhonePe, or Paytm with zero manual amount typing.
              </p>
            </div>
            <div className="p-5 border-2 border-ink dark:border-cream bg-white dark:bg-[#1E1E1E]">
              <h4 className="font-mono text-xs font-bold text-teal mb-2">
                Driver Cash Handover Audit
              </h4>
              <p className="text-sm">
                For cash rides, the driver app triggers an instant cryptographic OTP settlement handshake with the rider to confirm fare collection before trip completion is registered in Postgres.
              </p>
            </div>
          </div>
        </section>

        {/* System Architecture Section */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs font-bold px-2 py-0.5 bg-sunny text-ink border border-ink">
              System Topology
            </span>
            <h3 className="font-display font-black text-2xl text-ink dark:text-cream">
              Architecture
            </h3>
          </div>
          <p className="font-body text-sm text-ink/80 dark:text-cream/80 mb-2 leading-relaxed">
            Multi-tier distributed PWA connecting rider interfaces, driver devices, and administrative consoles through a unified Supabase realtime event bus and dynamic payment rails.
          </p>
          <ArchitectureDiagram
            title="Orange Taxi Platform Architecture"
            subtitle="Rider / Driver / Admin → Supabase → UPI QR Rails"
            nodes={[
              {
                id: "rider",
                label: "Rider PWA",
                sublabel: "Booking · Tracking · In-Ride Chat",
                badge: "Client",
                x: 30,
                y: 35,
                width: 210,
                height: 75,
                color: "#FFF6E5",
              },
              {
                id: "driver",
                label: "Driver PWA",
                sublabel: "Ride Dispatch · Live GPS Telemetry",
                badge: "Client",
                x: 30,
                y: 140,
                width: 210,
                height: 75,
                color: "#FFD13B",
              },
              {
                id: "admin",
                label: "Admin Portal",
                sublabel: "Fleet Oversight · Verification",
                badge: "Internal",
                x: 30,
                y: 245,
                width: 210,
                height: 75,
                color: "#FFF6E5",
              },
              {
                id: "supabase",
                label: "Supabase Core Engine",
                sublabel: "PostgreSQL · Realtime WebSockets · RLS",
                badge: "Backend / Database",
                x: 310,
                y: 115,
                width: 230,
                height: 120,
                color: "#179A94",
                textColor: "#FFFFFF",
              },
              {
                id: "upi",
                label: "UPI QR Payment Flow",
                sublabel: "Dynamic In-App QR · Cash Handover",
                badge: "Payment Rail",
                x: 600,
                y: 135,
                width: 205,
                height: 80,
                color: "#FF4336",
                textColor: "#FFFFFF",
              },
            ]}
            edges={[
              { from: "rider", to: "supabase", label: "Ride Requests" },
              { from: "driver", to: "supabase", label: "GPS Coordinates" },
              { from: "admin", to: "supabase", label: "Fleet Metrics" },
              { from: "supabase", to: "upi", label: "Dynamic QR Gen" },
            ]}
          />
        </section>

        {/* Screenshots Section */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs font-bold px-2 py-0.5 bg-teal text-white border border-ink">
              Visual Captures
            </span>
            <h3 className="font-display font-black text-2xl text-ink dark:text-cream">
              Screenshots
            </h3>
          </div>
          <ProjectGallery
            slug="orange-taxi"
            projectTitle="Orange Taxi"
            screenshots={screenshots}
          />
        </section>

        {/* Technical Stack Index */}
        <section className="border-2 border-ink dark:border-cream bg-white dark:bg-[#1E1E1E] p-6 sm:p-8 shadow-hard mb-12">
          <h3 className="font-display font-extrabold text-xl text-ink dark:text-cream mb-4">
            Engineering Stack Breakdown
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
            <div>
              <span className="font-bold text-tomato block mb-1">Client Architecture</span>
              <p className="text-ink/80 dark:text-cream/80">
                React 18, TypeScript, TanStack Start, Tailwind CSS, Service Workers (PWA offline caching)
              </p>
            </div>
            <div>
              <span className="font-bold text-teal block mb-1">Data &amp; Infrastructure</span>
              <p className="text-ink/80 dark:text-cream/80">
                Supabase, PostgreSQL, Realtime WebSockets, Row Level Security, Edge Functions
              </p>
            </div>
          </div>
        </section>

        {/* What I'd do differently */}
        <section className="border-2 border-ink dark:border-cream bg-white dark:bg-[#1E1E1E] p-6 sm:p-8 shadow-hard mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs font-black px-2 py-0.5 bg-sunny text-ink border border-ink shadow-hard-sm uppercase">
              Retrospective
            </span>
            <h3 className="font-display font-extrabold text-xl text-ink dark:text-cream">
              What I&apos;d do differently
            </h3>
          </div>
          <p className="font-mono text-xs sm:text-sm text-ink/80 dark:text-cream/80 leading-relaxed bg-cream/50 dark:bg-[#252525] p-4 border border-ink/20">
            {projectData?.whatIdDoDifferently}
          </p>
        </section>

        {/* Bottom Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t-2 border-ink dark:border-cream pt-8">
          <Link
            href="/projects"
            className="font-mono text-sm font-bold text-ink dark:text-cream hover:underline"
          >
            ← Back to All Projects
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
