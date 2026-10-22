"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { TaxiDoodle } from "@/components/doodles/TaxiDoodle";
import { RobotDoodle } from "@/components/doodles/RobotDoodle";
import { TrainDoodle } from "@/components/doodles/TrainDoodle";
import { WheelchairDoodle } from "@/components/doodles/WheelchairDoodle";
import { ChaiDoodle } from "@/components/doodles/ChaiDoodle";
import { ContactSection } from "@/components/ui/Footer";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { BuiltInPublicSection } from "@/components/ui/BuiltInPublicSection";
import { projects } from "@/data/projects";
import { siteConfig } from "@/lib/site";
import type { GitHubRepo } from "@/lib/github";

const springOvershoot = {
  type: "spring",
  stiffness: 400,
  damping: 25,
};

interface HomeViewProps {
  repos?: GitHubRepo[];
}

export function HomeView({ repos = [] }: HomeViewProps) {
  const sections = [
    {
      num: "01",
      title: "Projects & Systems",
      subtitle: `${projects.length} real engineering systems with dedicated case studies`,
      description:
        "Full-stack electric ride-hailing PWA (Orange Taxi), GPS-denied autonomous disaster rescue rover, and low-latency locomotive vision ML.",
      badge: "Flagship Work",
      color: "#FFD13B", // sunny
      href: "/projects",
      cta: "Explore Case Studies",
      icon: <TaxiDoodle className="w-16 h-12" />,
    },
    {
      num: "02",
      title: "Technical Index",
      subtitle: "Languages, systems, cybersecurity & embedded layers",
      description:
        "Verified skills grouped by architectural tier with zero progress bars: TypeScript, React, Supabase, PostgreSQL, C/C++, Kali Linux, and IoT microcontrollers.",
      badge: "Capabilities",
      color: "#179A94", // teal
      href: "/skills",
      cta: "View Tech Stack",
      icon: <RobotDoodle className="w-14 h-14" />,
    },
    {
      num: "03",
      title: "Experience & Honors",
      subtitle: "Production internship & national-level engineering awards",
      description:
        "Full-Stack Developer Intern at Orange Taxi (Delhi NCR) plus INSPIRE Award (Rs 10,000) at the National Science Exhibition for an assistive wheelchair.",
      badge: "Industry & Merit",
      color: "#FF4336", // tomato
      href: "/experience",
      cta: "View Timeline & Honors",
      icon: <WheelchairDoodle className="w-14 h-14" />,
    },
    {
      num: "04",
      title: "About Akshat",
      subtitle: "CS undergrad at BMSCE Bengaluru (CGPA 8.97)",
      description:
        "Specializing in IoT, Cybersecurity & Blockchain (class of 2028). Engineering philosophy, academics, and an interactive draggable sticker studio.",
      badge: "Bio & Studio",
      color: "#FFF6E5",
      href: "/about",
      cta: "Read Background",
      icon: <ChaiDoodle className="w-12 h-12" />,
    },
  ];

  return (
    <main id="main-content" className="min-h-screen pt-24 sm:pt-28 pb-16 selection:bg-sunny">
      {/* ===================== HERO SECTION ===================== */}
      <section id="hero" className="relative px-4 sm:px-6 pt-6 sm:pt-10 pb-16 sm:pb-20 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          {/* Top Status Strip */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={springOvershoot}
            className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-white dark:bg-ink border-2 border-ink dark:border-cream shadow-hard-sm font-mono text-xs font-bold text-ink dark:text-cream -rotate-1">
              <span className="w-2.5 h-2.5 rounded-full bg-teal animate-pulse" />
              Available for internships &amp; early roles
            </span>
            <span className="inline-block px-3 py-1 bg-sunny text-ink border-2 border-ink shadow-hard-sm font-mono text-xs font-bold rotate-1">
              Bengaluru · BMSCE &apos;28
            </span>
            <span className="hidden sm:inline-block px-3 py-1 bg-cream dark:bg-[#252525] text-ink dark:text-cream border-2 border-ink dark:border-cream shadow-hard-sm font-mono text-xs font-bold">
              CGPA 8.97
            </span>
          </motion.div>

          {/* Hero Name & Oversized Statement */}
          <div className="relative">
            <div className="select-none pointer-events-none opacity-[0.03] dark:opacity-[0.05] absolute -top-16 -left-6 sm:-left-10 font-display font-black text-7xl sm:text-9xl text-ink dark:text-cream">
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
                <span className="highlight-yellow mx-1">
                  builds real systems
                </span>{" "}
                —from a live electric ride-hailing platform to an autonomous rescue robot.
              </p>

              <p className="font-body text-base sm:text-lg text-ink/80 dark:text-cream/80 leading-relaxed">
                Currently in 3rd year at BMS College of Engineering, Bengaluru (IoT, Cybersecurity &amp; Blockchain). No placeholder mockups, zero buzzwords—just resilient code and functional hardware.
              </p>
            </motion.div>
          </div>

          {/* Doodles popping in one by one */}
          <div className="relative my-6 py-6 border-y-2 border-ink/20 dark:border-cream/20 bg-cream/40 dark:bg-[#181818]">
            <p className="font-mono text-xs font-bold text-ink/70 dark:text-cream/70 mb-3 px-2">
              Bespoke artifacts from real projects:
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
                <span className="font-mono text-xs font-bold text-ink dark:text-cream mt-1">
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
                <span className="font-mono text-xs font-bold text-ink dark:text-cream mt-1">
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
                <span className="font-mono text-xs font-bold text-ink dark:text-cream mt-1">
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
                <span className="font-mono text-xs font-bold text-ink dark:text-cream mt-1">
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
                <span className="font-mono text-xs font-bold text-ink dark:text-cream mt-1">
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
            {/* Primary Action */}
            <MagneticButton
              href="/projects"
              variant="primary"
              isMagnetic={true}
              cursorLabel="view"
              className="text-sm px-6 py-3.5 h-[48px]"
            >
              Explore Projects (3) ↓
            </MagneticButton>

            {/* Secondary Action */}
            <MagneticButton
              href="/Akshat_Gupta_Resume.pdf"
              download={true}
              variant="secondary"
              cursorLabel="resume"
              className="text-sm px-6 py-3.5 h-[48px]"
            >
              Download PDF Resume (1-Page)
            </MagneticButton>

            {/* Tertiary Contact Action */}
            <MagneticButton
              href="mailto:akshat070906@gmail.com?subject=Portfolio%20Inquiry%20from%20Recruiter"
              variant="outline"
              cursorLabel="email"
              className="text-sm px-6 py-3.5 h-[48px]"
            >
              Get In Touch →
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* ===================== 60-SECOND RECRUITER VERSION ===================== */}
      <section className="px-4 sm:px-6 pb-12 sm:pb-16 -mt-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="border-2 border-ink dark:border-cream bg-white dark:bg-[#1E1E1E] shadow-hard dark:shadow-hard-dark p-6 sm:p-7 relative"
          >
            {/* Card Header Tag */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b-2 border-ink/15 dark:border-cream/15 mb-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-black px-2.5 py-0.5 bg-sunny text-ink border border-ink shadow-hard-sm uppercase tracking-wider">
                  ⚡ 60-Second Version
                </span>
                <span className="font-mono text-xs text-ink/70 dark:text-cream/70 hidden sm:inline">
                  for recruiters &amp; engineering managers
                </span>
              </div>
              <span className="font-mono text-xs font-bold text-teal dark:text-teal">
                Quick Glance Summary
              </span>
            </div>

            {/* Who I Am */}
            <p className="font-display font-bold text-lg sm:text-xl text-ink dark:text-cream leading-snug mb-5">
              Full-stack developer and CS undergrad (IoT, Cybersecurity &amp; Blockchain) who builds real systems—from a live ride-hailing platform to an autonomous rescue robot.
            </p>

            {/* Three Project Chips */}
            <div className="mb-5">
              <p className="font-mono text-xs font-bold uppercase tracking-wider text-ink/60 dark:text-cream/60 mb-2.5">
                Featured Case Studies:
              </p>
              <div className="flex flex-wrap gap-2.5">
                {projects.slice(0, 3).map((project) => (
                  <Link
                    key={project.slug}
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 px-3 py-1.5 border-2 border-ink dark:border-cream bg-cream dark:bg-[#252525] hover:bg-sunny dark:hover:bg-sunny dark:hover:text-ink text-ink dark:text-cream font-mono text-xs font-bold transition-all shadow-hard-sm group"
                    data-cursor-label="view"
                  >
                    <span className="w-2 h-2 rounded-full bg-tomato flex-shrink-0" />
                    <span>{project.title}</span>
                    <span className="text-ink/50 dark:text-cream/50 group-hover:translate-x-0.5 transition-transform">→</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Bottom Row: Actions & Education */}
            <div className="pt-4 border-t-2 border-ink/15 dark:border-cream/15 flex flex-col md:flex-row md:items-center justify-between gap-4">
              {/* Education Line */}
              <div className="flex items-center gap-2 font-mono text-xs text-ink/80 dark:text-cream/80">
                <span className="font-bold text-ink dark:text-cream">Education:</span>
                <span>BMSCE, B.E. CS (IoT, Cybersecurity &amp; Blockchain), CGPA 8.97 (till 4th sem)</span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href="/Akshat_Gupta_Resume.pdf"
                  download
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-sunny hover:bg-sunny/90 text-ink border-2 border-ink shadow-hard-sm font-mono text-xs font-bold transition-all"
                  data-cursor-label="resume"
                >
                  <span>Download Resume (PDF)</span>
                  <span className="text-tomato font-black">↓</span>
                </a>
                <a
                  href={`mailto:${siteConfig.email}?subject=Opportunity%20Discussion`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-[#252525] hover:bg-cream dark:hover:bg-ink text-ink dark:text-cream border-2 border-ink dark:border-cream shadow-hard-sm font-mono text-xs font-bold transition-all"
                  data-cursor-label="email"
                >
                  <span>Email Me</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================== PORTFOLIO INDEX HUB ===================== */}
      <section className="py-12 sm:py-16 border-t-2 border-ink dark:border-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8">
            <div>
              <span className="font-mono text-xs font-bold px-2 py-0.5 bg-tomato text-white border border-ink inline-block mb-2">
                Site Index
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-ink dark:text-cream tracking-tight">
                Where would you like to start?
              </h2>
            </div>
            <p className="font-mono text-xs text-ink/70 dark:text-cream/70">
              4 dedicated sections · 60-second summary
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sections.map((sec, idx) => (
              <motion.div
                key={sec.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 25,
                  delay: idx * 0.08,
                }}
                className="border-2 border-ink dark:border-cream bg-white dark:bg-[#1E1E1E] shadow-hard dark:shadow-hard-dark p-6 flex flex-col justify-between hover:-translate-y-1 hover:shadow-hard-lg transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b-2 border-ink/15 dark:border-cream/15 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-black text-xl text-ink dark:text-cream">
                        /{sec.num}
                      </span>
                      <span
                        className="font-mono text-xs font-bold px-2 py-0.5 border border-ink"
                        style={{
                          backgroundColor: sec.color,
                          color: sec.color === "#FFF6E5" ? "#1A1A1A" : sec.color === "#FF4336" ? "#FFFFFF" : sec.color === "#179A94" ? "#FFFFFF" : "#1A1A1A",
                        }}
                      >
                        {sec.badge}
                      </span>
                    </div>

                    <div className="opacity-80 group-hover:scale-110 transition-transform">
                      {sec.icon}
                    </div>
                  </div>

                  <h3 className="font-display font-extrabold text-2xl text-ink dark:text-cream tracking-tight mb-1">
                    <Link
                      href={sec.href}
                      className="hover:underline decoration-2 decoration-tomato"
                      data-cursor-label="open"
                    >
                      {sec.title}
                    </Link>
                  </h3>

                  <p className="font-mono text-xs font-bold text-tomato mb-3">
                    {sec.subtitle}
                  </p>

                  <p className="font-body text-sm text-ink/80 dark:text-cream/80 leading-relaxed mb-6">
                    {sec.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-ink/10 dark:border-cream/10 flex items-center justify-between">
                  <Link
                    href={sec.href}
                    className="font-mono text-xs font-bold text-ink dark:text-cream flex items-center gap-2 group-hover:text-tomato transition-colors"
                    data-cursor-label="explore"
                  >
                    <span>{sec.cta}</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>

                  <span className="font-mono text-xs text-ink/60 dark:text-cream/60">
                    Dedicated Page
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== BUILT IN PUBLIC ===================== */}
      <BuiltInPublicSection repos={repos} />

      {/* ===================== CONTACT & FOOTER ===================== */}
      <ContactSection />
    </main>
  );
}
