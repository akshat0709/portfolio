"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { TaxiDoodle } from "@/components/doodles/TaxiDoodle";
import { RobotDoodle } from "@/components/doodles/RobotDoodle";
import { TrainDoodle } from "@/components/doodles/TrainDoodle";
import { WheelchairDoodle } from "@/components/doodles/WheelchairDoodle";
import { ChaiDoodle } from "@/components/doodles/ChaiDoodle";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SkillsIndex } from "@/components/ui/SkillsIndex";
import { StickerPile } from "@/components/ui/StickerPile";
import {
  ExperienceSection,
  RecognitionSection,
  EarlyWorkSection,
} from "@/components/ui/ExperienceAndRecognition";
import { ContactSection } from "@/components/ui/Footer";
import { MagneticButton } from "@/components/ui/MagneticButton";

// Single spring configuration matching guidelines
const springOvershoot = {
  type: "spring",
  stiffness: 400,
  damping: 25,
};

export default function HomePage() {
  return (
    <main className="min-h-screen pt-24 sm:pt-28 pb-16 selection:bg-sunny">
      {/* ===================== HERO SECTION ===================== */}
      <section id="hero" className="relative px-4 sm:px-6 pt-6 sm:pt-10 pb-16 sm:pb-24 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          {/* Top Status Strip */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={springOvershoot}
            className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-white dark:bg-ink border-2 border-ink dark:border-cream shadow-hard-sm font-mono text-xs font-bold uppercase text-ink dark:text-cream -rotate-1">
              <span className="w-2.5 h-2.5 rounded-full bg-teal animate-pulse" />
              Available for Internships & Early Roles
            </span>
            <span className="inline-block px-3 py-1 bg-sunny text-ink border-2 border-ink shadow-hard-sm font-mono text-xs font-bold uppercase rotate-1">
              Bengaluru · BMSCE &apos;28
            </span>
            <span className="hidden sm:inline-block px-3 py-1 bg-cream dark:bg-[#252525] text-ink dark:text-cream border-2 border-ink dark:border-cream shadow-hard-sm font-mono text-xs font-bold uppercase">
              CGPA 8.97
            </span>
          </motion.div>

          {/* Hero Name & Oversized Statement */}
          <div className="relative">
            {/* Oversized section stamp behind headline */}
            <div className="select-none pointer-events-none opacity-5 dark:opacity-10 absolute -top-10 -left-6 sm:-left-10 font-display font-black text-7xl sm:text-9xl text-ink dark:text-cream">
              BUILDER
            </div>

            <motion.h1
              initial={{ opacity: 0, y: -24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ ...springOvershoot, delay: 0.05 }}
              className="font-display font-extrabold text-5xl sm:text-7xl lg:text-8xl tracking-tight text-ink dark:text-cream leading-[0.95] mb-6"
            >
              Akshat Gupta
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springOvershoot, delay: 0.15 }}
              className="max-w-3xl mb-8"
            >
              <p className="font-display font-bold text-2xl sm:text-3xl text-ink dark:text-cream leading-tight mb-4">
                Full-stack developer and CS undergrad who{" "}
                <span className="highlight-yellow px-1 text-ink">builds real systems</span>
                —from a live electric ride-hailing platform to an autonomous rescue robot.
              </p>

              <p className="font-body text-lg sm:text-xl text-ink/80 dark:text-cream/80 leading-relaxed">
                Currently in 3rd year at BMS College of Engineering, Bengaluru (IoT, Cybersecurity &amp; Blockchain). No placeholder mockups, zero buzzwords—just resilient code and functional hardware.
              </p>
            </motion.div>
          </div>

          {/* Doodles popping in one by one and staying still */}
          <div className="relative my-6 py-6 border-y-2 border-ink/20 dark:border-cream/20 bg-cream/40 dark:bg-[#181818]">
            <p className="font-mono text-[11px] font-black uppercase tracking-widest text-ink/60 dark:text-cream/60 mb-3 px-2">
              Bespoke Artifacts from Real Projects:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 items-center justify-items-center">
              <motion.div
                initial={{ scale: 0, rotate: -15 }}
                animate={{ scale: 1, rotate: -2 }}
                transition={{ ...springOvershoot, delay: 0.25 }}
                className="flex flex-col items-center p-2 hover:rotate-0 transition-transform"
                title="Orange Taxi Electric Cab"
              >
                <TaxiDoodle className="w-24 h-16" />
                <span className="font-mono text-[10px] font-bold text-ink dark:text-cream mt-1">
                  EV Taxi PWA
                </span>
              </motion.div>

              <motion.div
                initial={{ scale: 0, rotate: 12 }}
                animate={{ scale: 1, rotate: 2 }}
                transition={{ ...springOvershoot, delay: 0.32 }}
                className="flex flex-col items-center p-2 hover:rotate-0 transition-transform"
                title="Autonomous Search & Rescue Rover"
              >
                <RobotDoodle className="w-16 h-16" />
                <span className="font-mono text-[10px] font-bold text-ink dark:text-cream mt-1">
                  Rescue Rover
                </span>
              </motion.div>

              <motion.div
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: -1 }}
                transition={{ ...springOvershoot, delay: 0.39 }}
                className="flex flex-col items-center p-2 hover:rotate-0 transition-transform"
                title="Train Track Animal Detection"
              >
                <TrainDoodle className="w-24 h-16" />
                <span className="font-mono text-[10px] font-bold text-ink dark:text-cream mt-1">
                  Track Vision ML
                </span>
              </motion.div>

              <motion.div
                initial={{ scale: 0, rotate: 15 }}
                animate={{ scale: 1, rotate: 3 }}
                transition={{ ...springOvershoot, delay: 0.46 }}
                className="flex flex-col items-center p-2 hover:rotate-0 transition-transform"
                title="Voice Assistive Wheelchair"
              >
                <WheelchairDoodle className="w-16 h-16" />
                <span className="font-mono text-[10px] font-bold text-ink dark:text-cream mt-1">
                  Assistive Mic Unit
                </span>
              </motion.div>

              <motion.div
                initial={{ scale: 0, rotate: -8 }}
                animate={{ scale: 1, rotate: -2 }}
                transition={{ ...springOvershoot, delay: 0.53 }}
                className="col-span-2 sm:col-span-1 flex flex-col items-center p-2 hover:rotate-0 transition-transform"
                title="Buy Me a Chai"
              >
                <ChaiDoodle className="w-14 h-16" />
                <span className="font-mono text-[10px] font-bold text-ink dark:text-cream mt-1">
                  Cutting Chai
                </span>
              </motion.div>
            </div>
          </div>

          {/* Hero CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springOvershoot, delay: 0.58 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            {/* Primary Action with magnetic pull */}
            <MagneticButton
              href="#projects"
              variant="primary"
              isMagnetic={true}
              cursorLabel="view"
              className="text-base sm:text-lg px-8 py-4"
            >
              Explore Projects (3) ↓
            </MagneticButton>

            <MagneticButton
              href={`mailto:akshat070906@gmail.com?subject=Portfolio%20Inquiry%20from%20Recruiter`}
              variant="outline"
              cursorLabel="email"
              className="text-base sm:text-lg px-6 py-4"
            >
              Get In Touch →
            </MagneticButton>

            <a
              href="/Akshat_Gupta_Resume.pdf"
              download
              className="font-mono text-sm font-bold text-ink dark:text-cream underline decoration-2 hover:text-tomato transition-colors ml-2 py-2"
              data-cursor-label="resume"
            >
              Download PDF Resume (1-Page)
            </a>
          </motion.div>
        </div>
      </section>

      {/* ===================== FLAGSHIP PROJECTS ===================== */}
      <section id="projects" className="py-16 sm:py-24 border-t-2 border-ink dark:border-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {/* Section Header with Oversized Word */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 relative">
            <div>
              <span className="font-mono text-xs font-black uppercase tracking-wider px-2 py-0.5 bg-tomato text-white border border-ink inline-block mb-3">
                Flagship Work
              </span>
              <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-ink dark:text-cream tracking-tight">
                Three real systems.
              </h2>
            </div>
            {/* Oversized word for contrast */}
            <span className="font-display font-black text-6xl sm:text-8xl text-ink/10 dark:text-cream/10 select-none pointer-events-none md:self-end">
              PROOFS
            </span>
          </div>

          <p className="font-body text-lg text-ink/80 dark:text-cream/80 max-w-2xl mb-12">
            No synthetic practice tutorials. Each project solves an operational problem in the real world, tested with live users, sensors, or hardware telemetry.
          </p>

          {/* The Three Projects Cards */}
          <div className="space-y-12">
            {/* Project 1: Orange Taxi (Flagship) */}
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
              initialRotation={-0.5}
              doodle={<TaxiDoodle className="w-36 h-24" />}
            />

            {/* Project 2: Autonomous Search and Rescue Robot */}
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
              initialRotation={0.5}
              doodle={<RobotDoodle className="w-28 h-28" />}
            />

            {/* Project 3: Animal Detection in Locomotive Tracks */}
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
              initialRotation={-0.5}
              doodle={<TrainDoodle className="w-36 h-24" />}
            />
          </div>

          {/* Early Work line */}
          <div className="mt-12">
            <EarlyWorkSection />
          </div>
        </div>
      </section>

      {/* ===================== EXPERIENCE ===================== */}
      <section id="experience" className="py-16 sm:py-24 border-t-2 border-ink dark:border-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="font-mono text-xs font-black uppercase tracking-wider px-2 py-0.5 bg-sunny text-ink border border-ink inline-block mb-3">
                Industry Work
              </span>
              <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-ink dark:text-cream tracking-tight">
                Work Experience.
              </h2>
            </div>
            <span className="font-display font-black text-6xl sm:text-8xl text-ink/10 dark:text-cream/10 select-none pointer-events-none md:self-end">
              DISPATCH
            </span>
          </div>

          <ExperienceSection />
        </div>
      </section>

      {/* ===================== SKILLS INDEX ===================== */}
      <section id="skills" className="py-16 sm:py-24 border-t-2 border-ink dark:border-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="font-mono text-xs font-black uppercase tracking-wider px-2 py-0.5 bg-teal text-white border border-ink inline-block mb-3">
                Capabilities
              </span>
              <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-ink dark:text-cream tracking-tight">
                Technical Index.
              </h2>
            </div>
            <span className="font-display font-black text-6xl sm:text-8xl text-ink/10 dark:text-cream/10 select-none pointer-events-none md:self-end">
              INDEX
            </span>
          </div>

          <p className="font-body text-base sm:text-lg text-ink/80 dark:text-cream/80 max-w-2xl mb-8">
            Grouped cleanly by engineering layer. No fictional percentage progress bars—just tools and languages I write real software with.
          </p>

          <SkillsIndex />
        </div>
      </section>

      {/* ===================== ABOUT & STICKER PILE ===================== */}
      <section id="about" className="py-16 sm:py-24 border-t-2 border-ink dark:border-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="font-mono text-xs font-black uppercase tracking-wider px-2 py-0.5 bg-sunny text-ink border border-ink inline-block mb-3">
                Background &amp; Philosophy
              </span>
              <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-ink dark:text-cream tracking-tight">
                About Akshat.
              </h2>
            </div>
            <span className="font-display font-black text-6xl sm:text-8xl text-ink/10 dark:text-cream/10 select-none pointer-events-none md:self-end">
              PERSON
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Bio Column */}
            <div className="lg:col-span-6 space-y-5">
              <div className="border-2 border-ink dark:border-cream bg-white dark:bg-[#1E1E1E] p-6 sm:p-8 shadow-hard dark:shadow-hard-dark">
                <h3 className="font-display font-extrabold text-2xl text-ink dark:text-cream mb-4">
                  Engineering with real constraints.
                </h3>
                <div className="space-y-4 font-body text-base text-ink/85 dark:text-cream/85 leading-relaxed">
                  <p>
                    I am an undergraduate in Computer Science (specializing in <strong>IoT, Cybersecurity &amp; Blockchain</strong>) at BMS College of Engineering, Bengaluru (class of 2028).
                  </p>
                  <p>
                    I prefer building systems that touch the physical world or serve actual users: real-time dispatch systems for electric cabs, autonomous rovers navigating without GPS, and low-latency computer vision on railway lines.
                  </p>
                  <p>
                    Academic track record: <strong>CGPA 8.97</strong> through the 4th semester, and 94.8% in CBSE Class X. I care about speed, clean architecture, and verifiable results over decorative fluff.
                  </p>
                </div>

                <div className="border-t-2 border-ink/20 dark:border-cream/20 mt-6 pt-4 flex flex-wrap gap-4 font-mono text-xs font-bold">
                  <div>
                    <span className="text-ink/60 dark:text-cream/60 block">EDUCATION</span>
                    <span>BMSCE Bengaluru (2024–2028)</span>
                  </div>
                  <div>
                    <span className="text-ink/60 dark:text-cream/60 block">SPECIALIZATION</span>
                    <span>IoT, Cyber &amp; Blockchain</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Signature Interactive Sticker Pile Column */}
            <div className="lg:col-span-6">
              <StickerPile />
            </div>
          </div>
        </div>
      </section>

      {/* ===================== RECOGNITION & CERTIFICATIONS ===================== */}
      <section id="recognition" className="py-16 sm:py-24 border-t-2 border-ink dark:border-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="font-mono text-xs font-black uppercase tracking-wider px-2 py-0.5 bg-tomato text-white border border-ink inline-block mb-3">
                Validation
              </span>
              <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-ink dark:text-cream tracking-tight">
                Recognition.
              </h2>
            </div>
            <span className="font-display font-black text-6xl sm:text-8xl text-ink/10 dark:text-cream/10 select-none pointer-events-none md:self-end">
              HONORS
            </span>
          </div>

          <RecognitionSection />
        </div>
      </section>

      {/* ===================== CONTACT & FOOTER ===================== */}
      <ContactSection />
    </main>
  );
}
