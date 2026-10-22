"use client";

import React from "react";
import Link from "next/link";
import { TrainDoodle } from "@/components/doodles/TrainDoodle";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ArchitectureDiagram } from "@/components/ui/ArchitectureDiagram";
import { ProjectGallery, type ProjectScreenshot } from "@/components/ui/ProjectGallery";
import { projects } from "@/data/projects";

interface AnimalDetectionViewProps {
  screenshots?: ProjectScreenshot[];
}

export function AnimalDetectionView({ screenshots = [] }: AnimalDetectionViewProps) {
  const projectData = projects.find((p) => p.slug === "animal-detection");
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
            <span className="font-mono text-xs font-bold px-2.5 py-0.5 bg-tomato text-white border border-ink">
              AI / Computer Vision
            </span>
            <span className="font-mono text-xs font-bold px-2.5 py-0.5 bg-cream dark:bg-ink text-ink dark:text-cream border border-ink dark:border-cream">
              Low-Latency Inference
            </span>
          </div>

          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-ink dark:text-cream tracking-tight mb-4">
            Animal Detection in Locomotive Tracks
          </h1>

          <p className="font-body text-xl text-ink/80 dark:text-cream/80 leading-relaxed mb-6">
            Real-time computer vision system processing high-speed forward cab video feeds to detect wildlife and cattle on railway tracks and trigger instant operator alerts.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4 border-t-2 border-ink/15 dark:border-cream/15">
            <MagneticButton
              href="https://github.com/akshat0709/AnimalDetection"
              variant="primary"
              cursorLabel="github"
              external={true}
              className="px-6 py-2.5 text-sm"
            >
              View GitHub Repository ↗
            </MagneticButton>

            <span className="font-mono text-xs text-ink/70 dark:text-cream/70">
              Stack: Python, OpenCV, Deep Learning Object Detection, Alert Dispatch
            </span>
          </div>
        </header>

        {/* Project Meta Grid */}
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          <div className="p-4 border-2 border-ink dark:border-cream bg-cream dark:bg-[#181818] shadow-hard-sm">
            <span className="font-mono text-xs font-bold text-ink/70 dark:text-cream/70 block mb-1">
              Objective
            </span>
            <span className="font-display font-bold text-sm text-ink dark:text-cream">
              Prevent Train-Wildlife Collisions
            </span>
          </div>

          <div className="p-4 border-2 border-ink dark:border-cream bg-cream dark:bg-[#181818] shadow-hard-sm">
            <span className="font-mono text-xs font-bold text-ink/70 dark:text-cream/70 block mb-1">
              Input Stream
            </span>
            <span className="font-display font-bold text-sm text-ink dark:text-cream">
              Live High-Speed Cab Cameras
            </span>
          </div>

          <div className="p-4 border-2 border-ink dark:border-cream bg-cream dark:bg-[#181818] shadow-hard-sm">
            <span className="font-mono text-xs font-bold text-ink/70 dark:text-cream/70 block mb-1">
              Inference Mode
            </span>
            <span className="font-display font-bold text-sm text-ink dark:text-cream">
              Low-Latency Real-Time
            </span>
          </div>

          <div className="p-4 border-2 border-ink dark:border-cream bg-cream dark:bg-[#181818] shadow-hard-sm">
            <span className="font-mono text-xs font-bold text-ink/70 dark:text-cream/70 block mb-1">
              Action Trigger
            </span>
            <span className="font-display font-bold text-sm text-ink dark:text-cream">
              Auditory / Visual Pilot Alert
            </span>
          </div>
        </section>

        {/* Visual Doodle Banner */}
        <div className="border-2 border-ink dark:border-cream bg-tomato/10 dark:bg-[#151515] p-8 mb-12 flex flex-col items-center justify-center">
          <TrainDoodle className="w-52 h-32" />
          <span className="font-mono text-xs font-bold text-ink dark:text-cream mt-2 tracking-wide">
            Railway Corridor Real-Time Vision Scanner
          </span>
        </div>

        {/* Content Section 1: Problem Statement */}
        <section className="space-y-6 mb-12 font-body text-base sm:text-lg text-ink/80 dark:text-cream/80 leading-relaxed">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink dark:text-cream tracking-tight border-b-2 border-ink/20 pb-3">
            01. Wildlife Safety on Heavy Rail Corridors
          </h2>
          <p>
            Locomotive collisions with animals (elephants, cattle, wildlife) along rail corridors cause severe tragic loss of wildlife and catastrophic derailment hazards. Heavy locomotives travelling at 90–120 km/h have braking distances exceeding 600–1000 meters; human eyesight under night glare or adverse weather conditions frequently identifies obstacles too late for emergency deceleration.
          </p>
          <p>
            The project automates continuous forward-corridor vision using a deep learning pipeline optimized for high-frame-rate detection, filtering out false positives from trackside brush, and immediately escalating confirmed hazards to the train pilot.
          </p>
        </section>

        {/* Content Section 2: Pipeline & Low Latency */}
        <section className="space-y-6 mb-12 font-body text-base sm:text-lg text-ink/80 dark:text-cream/80 leading-relaxed">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink dark:text-cream tracking-tight border-b-2 border-ink/20 pb-3">
            02. Computer Vision Pipeline &amp; Region of Interest (ROI)
          </h2>
          <p>
            To prevent false alarms from livestock grazing harmlessly behind fencing 50 meters away, the computer vision engine incorporates a dynamic Region-of-Interest corridor filter:
          </p>
          <div className="bg-white dark:bg-[#1E1E1E] border-2 border-ink dark:border-cream p-6 shadow-hard-sm space-y-4">
            <div>
              <h3 className="font-mono text-xs font-bold text-tomato mb-1">
                Corridor Track Masking
              </h3>
              <p className="text-sm sm:text-base">
                Perspective transforms and track segmentation isolate the immediate danger zone between the rails and the 5-meter safety envelope on either side.
              </p>
            </div>
            <div className="border-t border-ink/15 dark:border-cream/15 pt-3">
              <h3 className="font-mono text-xs font-bold text-teal mb-1">
                Temporal Consistency Filter
              </h3>
              <p className="text-sm sm:text-base">
                Single-frame artifacts or flickering shadows are suppressed through a rolling temporal confidence buffer, preventing erratic alert spam while triggering safety protocols when an animal remains on the path.
              </p>
            </div>
          </div>
        </section>

        {/* System Architecture Section */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs font-bold px-2 py-0.5 bg-tomato text-white border border-ink">
              System Topology
            </span>
            <h3 className="font-display font-black text-2xl text-ink dark:text-cream">
              Architecture
            </h3>
          </div>
          <p className="font-body text-sm text-ink/80 dark:text-cream/80 mb-2 leading-relaxed">
            Real-time inference pipeline connecting front-facing locomotive optical sensor feeds, temporal frame buffers, on-device edge ML detection models, and audible pilot alarms.
          </p>
          <ArchitectureDiagram
            title="Locomotive Track Animal Vision Architecture"
            subtitle="Video Ingestion → Edge ML Inference → Pilot Beacon Alarm"
            isPlaceholder={true}
            placeholderText="[DIAGRAM_PLACEHOLDER]"
          />
        </section>

        {/* Screenshots Section */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs font-bold px-2 py-0.5 bg-sunny text-ink border border-ink">
              Visual Captures
            </span>
            <h3 className="font-display font-black text-2xl text-ink dark:text-cream">
              Screenshots
            </h3>
          </div>
          <ProjectGallery
            slug="animal-detection"
            projectTitle="Animal Detection in Locomotive Tracks"
            screenshots={screenshots}
          />
        </section>

        {/* Content Section 3: Alert System */}
        <section className="space-y-6 mb-12 font-body text-base sm:text-lg text-ink/80 dark:text-cream/80 leading-relaxed">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink dark:text-cream tracking-tight border-b-2 border-ink/20 pb-3">
            03. Real-Time Operator Alert Escalation
          </h2>
          <p>
            When an animal is confirmed inside the locomotive envelope, the system triggers a two-tier emergency protocol:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 border-2 border-ink dark:border-cream bg-white dark:bg-[#1E1E1E]">
              <h4 className="font-mono text-xs font-bold text-tomato mb-2">
                Level 1: Audible Pilot Alarm
              </h4>
              <p className="text-sm">
                Generates a distinct high-frequency audio warning and visual red beacon inside the operator cabin, displaying estimated target distance and track segment.
              </p>
            </div>
            <div className="p-5 border-2 border-ink dark:border-cream bg-white dark:bg-[#1E1E1E]">
              <h4 className="font-mono text-xs font-bold text-teal mb-2">
                Level 2: Telemetry Event Log
              </h4>
              <p className="text-sm">
                Logs GPS coordinates, snapshot frame, and timestamp to the central safety operations database for predictive railway route analysis.
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

        {/* Bottom Sibling Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t-2 border-ink dark:border-cream pt-8">
          <Link
            href="/projects/autonomous-rescue-robot"
            className="font-mono text-sm font-bold text-ink dark:text-cream hover:underline"
          >
            ← Previous: Autonomous Rescue Robot
          </Link>
          <Link
            href="/projects/orange-taxi"
            className="font-mono text-sm font-bold text-ink dark:text-cream hover:text-tomato flex items-center gap-2 group"
          >
            <span>Next Project: Orange Taxi PWA</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </article>
    </main>
  );
}
