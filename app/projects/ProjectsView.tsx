"use client";

import React from "react";
import Link from "next/link";
import { TaxiDoodle } from "@/components/doodles/TaxiDoodle";
import { RobotDoodle } from "@/components/doodles/RobotDoodle";
import { TrainDoodle } from "@/components/doodles/TrainDoodle";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { EarlyWorkSection } from "@/components/ui/ExperienceAndRecognition";

export function ProjectsView() {
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
            <span className="font-mono text-xs font-bold px-2.5 py-0.5 bg-tomato text-white border border-ink">
              Projects Archive
            </span>
            <span className="font-mono text-xs font-bold px-2.5 py-0.5 bg-sunny text-ink border border-ink">
              3 Production Systems
            </span>
          </div>

          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-ink dark:text-cream tracking-tight mb-4">
            Engineered Systems &amp; Case Studies
          </h1>

          <p className="font-body text-lg text-ink/80 dark:text-cream/80 max-w-2xl leading-relaxed">
            Every project detailed here was built to operate in real conditions: from live electric fleet dispatching in Delhi to autonomous search rovers that function in GPS-denied catastrophe zones.
          </p>
        </header>

        {/* Project Cards Stack */}
        <div className="space-y-12">
          {/* Project 1 */}
          <ProjectCard
            slug="orange-taxi"
            number="01"
            title="Orange Taxi: Full-Stack Electric Ride-Hailing Platform"
            tagline="Pre-launch premium 100% electric cab service in Delhi NCR using Mahindra BE.6 electric SUVs for airport transfers and corporate accounts."
            category="Web / Production PWA / Flagship"
            stack={["React", "TypeScript", "TanStack Start", "Supabase", "PostgreSQL", "Tailwind CSS", "PWA"]}
            highlight="Built real-time dispatch engine on Supabase Realtime (ride requests, live driver coordinates, in-ride chat) + in-app UPI dynamic QR driver handover flow."
            liveUrl="https://orange-taxi.com"
            accentColor="sunny"
            initialRotation={0}
            doodle={<TaxiDoodle className="w-36 h-24" />}
          />

          {/* Project 2 */}
          <ProjectCard
            slug="autonomous-rescue-robot"
            number="02"
            title="Autonomous Search and Rescue Robot"
            tagline="Hazardous terrain exploration rover engineered for independent navigation and survivor telemetry in GPS-denied disaster environments."
            category="IoT / Embedded / Robotics"
            stack={["C/C++", "Microcontrollers", "LiDAR/Sensors", "Path Planning", "Telemetry", "Autonomous Logic"]}
            highlight="Obstacle detection sensor fusion, real-time hazardous telemetry transmission, path planning in GPS-denied zones, and fail-safe decision logic."
            repoUrl="https://github.com/akshat0709/AutonomousSearchAndRescueRobot"
            accentColor="teal"
            initialRotation={0}
            doodle={<RobotDoodle className="w-28 h-28" />}
          />

          {/* Project 3 */}
          <ProjectCard
            slug="animal-detection"
            number="03"
            title="Animal Detection in Locomotive Tracks"
            tagline="Real-time computer vision system processing live locomotive cab video streams to detect track wildlife and prevent collisions."
            category="Python / Computer Vision / AI-ML"
            stack={["Python", "Computer Vision", "Deep Learning", "Real-Time Alerts", "Video Pipeline"]}
            highlight="Low-latency inference on video feeds, real-time alert dispatch to train operators, and emergency safety protocol triggers."
            repoUrl="https://github.com/akshat0709/AnimalDetection"
            accentColor="tomato"
            initialRotation={0}
            doodle={<TrainDoodle className="w-36 h-24" />}
          />
        </div>

        {/* Early Experiments Strip */}
        <div className="mt-12">
          <EarlyWorkSection />
        </div>
      </div>
    </main>
  );
}
