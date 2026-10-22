"use client";

import React from "react";
import { motion } from "framer-motion";
import { WheelchairDoodle } from "@/components/doodles/WheelchairDoodle";
import { ChaiDoodle } from "@/components/doodles/ChaiDoodle";

export function ExperienceSection() {
  return (
    <div className="w-full">
      <div className="border-2 border-ink dark:border-cream bg-white dark:bg-[#1E1E1E] shadow-hard dark:shadow-hard-dark p-6 sm:p-8">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b-2 border-ink/20 dark:border-cream/20 pb-6 mb-6">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="font-mono text-xs font-black uppercase tracking-wider px-2.5 py-0.5 bg-tomato text-white border border-ink">
                Internship
              </span>
              <span className="font-mono text-xs font-bold text-ink/70 dark:text-cream/70">
                Sep 2026 – Present (Dec 2026)
              </span>
            </div>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-ink dark:text-cream tracking-tight">
              Full-Stack Developer Intern
            </h3>
            <p className="font-display font-bold text-lg text-tomato mt-1">
              Orange Taxi · Delhi, India
            </p>
          </div>

          <div className="flex items-center gap-2 self-start">
            <span className="font-mono text-xs font-bold px-3 py-1 bg-cream dark:bg-ink border-2 border-ink dark:border-cream text-ink dark:text-cream">
              Flagship Production
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <p className="font-body text-base sm:text-lg text-ink/90 dark:text-cream/90 leading-relaxed">
            Orange Taxi is a pre-launch premium 100% electric cab startup operating Mahindra BE.6 electric SUVs in Delhi NCR for airport transfers, corporate accounts, and city mobility.
          </p>

          <div className="bg-cream dark:bg-[#151515] border-2 border-ink dark:border-[#333333] p-4 sm:p-5">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-ink dark:text-cream mb-2">
              Key Engineering Delivered:
            </h4>
            <ul className="space-y-2 font-body text-sm sm:text-base text-ink dark:text-cream list-disc list-inside">
              <li>
                Architected and built the complete production software suite as an installable Progressive Web App (PWA).
              </li>
              <li>
                Engineered the real-time dispatch engine powered by Supabase Realtime for instant ride matching, driver status updates, and live in-ride coordinates.
              </li>
              <li>
                Implemented in-app UPI payment integration and dynamic QR code generation for driver cash handovers and instant settlement.
              </li>
            </ul>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {["React", "TypeScript", "TanStack Start", "Supabase", "PostgreSQL", "Tailwind CSS", "PWA"].map(
              (tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs font-bold px-2 py-0.5 border border-ink bg-white dark:bg-ink text-ink dark:text-cream"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function RecognitionSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      {/* Awards & Competitions Card */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="border-2 border-ink dark:border-cream bg-white dark:bg-[#1E1E1E] shadow-hard dark:shadow-hard-dark p-6 flex flex-col justify-between"
      >
        <div>
          <div className="flex items-center justify-between pb-4 border-b-2 border-ink/20 dark:border-cream/20 mb-4">
            <h3 className="font-display font-extrabold text-xl text-ink dark:text-cream tracking-tight">
              Honors & Awards
            </h3>
            <span className="font-mono text-xs font-black px-2 py-0.5 bg-sunny text-ink border border-ink">
              MERIT
            </span>
          </div>

          <div className="space-y-5">
            <div className="flex items-start gap-3">
              <div className="mt-1 flex-shrink-0">
                <WheelchairDoodle className="w-12 h-12" />
              </div>
              <div>
                <span className="font-mono text-[11px] font-bold text-tomato uppercase">
                  National Exhibition Award (Rs 10,000)
                </span>
                <h4 className="font-display font-bold text-base text-ink dark:text-cream leading-snug">
                  INSPIRE Award · National Science Exhibition
                </h4>
                <p className="font-body text-xs text-ink/70 dark:text-cream/70 mt-1">
                  Awarded for developing a Voice-Controlled Wheelchair, a low-cost assistive device engineered for individuals with mobility disabilities.
                </p>
              </div>
            </div>

            <div className="border-t border-ink/10 dark:border-cream/10 pt-4">
              <span className="font-mono text-[11px] font-bold text-teal uppercase">
                State Level Podium
              </span>
              <h4 className="font-display font-bold text-base text-ink dark:text-cream leading-snug">
                3rd Place · CSIR-CIMFR State Science Exhibition
              </h4>
              <p className="font-body text-xs text-ink/70 dark:text-cream/70 mt-1">
                Jharkhand state-level presentation for the assistive voice-controlled mobility unit.
              </p>
            </div>

            <div className="border-t border-ink/10 dark:border-cream/10 pt-4">
              <span className="font-mono text-[11px] font-bold text-ink/70 dark:text-cream/70 uppercase">
                Olympiad
              </span>
              <h4 className="font-display font-bold text-base text-ink dark:text-cream leading-snug">
                School Rank 1 · International Mathematics Olympiad
              </h4>
              <p className="font-body text-xs text-ink/70 dark:text-cream/70 mt-1">
                Distinction in logical analysis and discrete mathematical problem-solving.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Certifications & Interests Card */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="border-2 border-ink dark:border-cream bg-white dark:bg-[#1E1E1E] shadow-hard dark:shadow-hard-dark p-6 flex flex-col justify-between"
      >
        <div>
          <div className="flex items-center justify-between pb-4 border-b-2 border-ink/20 dark:border-cream/20 mb-4">
            <h3 className="font-display font-extrabold text-xl text-ink dark:text-cream tracking-tight">
              Certifications & Fields
            </h3>
            <span className="font-mono text-xs font-black px-2 py-0.5 bg-teal text-white border border-ink">
              VERIFIED
            </span>
          </div>

          <div className="mb-6">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-ink/60 dark:text-cream/60 mb-3">
              Technical Certifications
            </h4>
            <div className="space-y-2">
              {[
                { name: "Microsoft x UpGrad AI Fundamentals", issuer: "Microsoft / UpGrad" },
                { name: "Java Programming", issuer: "Apna College" },
                { name: "C Programming", issuer: "Technical Foundation" },
                { name: "Web Development", issuer: "Full-Stack Track" },
              ].map((cert) => (
                <div
                  key={cert.name}
                  className="flex items-center justify-between p-2.5 bg-cream/60 dark:bg-[#151515] border border-ink dark:border-[#333333]"
                >
                  <span className="font-display font-bold text-xs sm:text-sm text-ink dark:text-cream">
                    {cert.name}
                  </span>
                  <span className="font-mono text-[10px] text-ink/60 dark:text-cream/60">
                    {cert.issuer}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-ink/60 dark:text-cream/60 mb-2">
              Research & Technical Interests
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {[
                "AI & ML",
                "Cybersecurity",
                "Blockchain",
                "Software Development",
                "IoT",
                "Robotics",
              ].map((interest) => (
                <span
                  key={interest}
                  className="font-mono text-xs font-bold px-2.5 py-1 border border-ink bg-sunny text-ink shadow-[1px_1px_0px_#1A1A1A]"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function EarlyWorkSection() {
  return (
    <div className="border-2 border-ink dark:border-cream bg-cream dark:bg-[#1A1A1A] p-5 shadow-hard dark:shadow-hard-dark flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <ChaiDoodle className="w-14 h-14 flex-shrink-0" />
        <div>
          <span className="font-mono text-[10px] font-black tracking-wider uppercase px-2 py-0.5 bg-ink text-cream">
            EARLY EXPERIMENTS
          </span>
          <p className="font-body text-sm sm:text-base text-ink dark:text-cream mt-1 font-medium">
            Early exploratory builds: <strong>Airbnb clone</strong> and <strong>Buy Me a Coffee clone</strong> (pure HTML, CSS, JavaScript).
          </p>
        </div>
      </div>

      <a
        href="https://github.com/akshat0709/BuyMeAChai"
        target="_blank"
        rel="noopener noreferrer"
        className="font-mono text-xs font-bold px-3 py-2 border-2 border-ink bg-white text-ink shadow-[2px_2px_0px_#1A1A1A] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all flex-shrink-0"
        data-cursor-label="github"
      >
        View BuyMeAChai Repo ↗
      </a>
    </div>
  );
}
