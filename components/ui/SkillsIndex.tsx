"use client";

import React from "react";
import { motion } from "framer-motion";

interface SkillCategory {
  title: string;
  badge: string;
  color: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    badge: "Core",
    color: "#FFD13B", // sunny
    skills: ["Java", "C", "C++", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Web & Frontend",
    badge: "UI & PWA",
    color: "#179A94", // teal
    skills: [
      "React",
      "TypeScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Responsive Design",
      "REST APIs",
    ],
  },
  {
    title: "Backend & Cloud",
    badge: "Systems",
    color: "#FF4336", // tomato
    skills: [
      "Supabase",
      "PostgreSQL",
      "Realtime",
      "RLS (Row Level Security)",
      "Nitro",
      "SSR",
    ],
  },
  {
    title: "Cybersecurity",
    badge: "Security",
    color: "#1A1A1A",
    skills: [
      "Kali Linux",
      "Cisco Packet Tracer",
      "Network Security",
      "Ethical Hacking Fundamentals",
    ],
  },
  {
    title: "IoT & Embedded",
    badge: "Hardware",
    color: "#179A94",
    skills: [
      "Sensor Integration",
      "Microcontrollers",
      "Autonomous Systems",
      "Real-time Alerting",
    ],
  },
  {
    title: "Tools & Workflow",
    badge: "DevOps",
    color: "#FFD13B",
    skills: ["Git", "GitHub", "VS Code"],
  },
];

export function SkillsIndex() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {skillCategories.map((cat, idx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 24,
              delay: idx * 0.05,
            }}
            className="h-full border-2 border-ink dark:border-cream bg-white dark:bg-[#1E1E1E] shadow-hard dark:shadow-hard-dark p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-3 border-b-2 border-ink/20 dark:border-cream/20 mb-4 min-h-[38px]">
                <h3 className="font-display font-extrabold text-lg text-ink dark:text-cream tracking-tight">
                  {cat.title}
                </h3>
                <span
                  className="font-mono text-xs font-bold px-2 py-0.5 border border-ink dark:border-cream"
                  style={{
                    backgroundColor: cat.color,
                    color: cat.color === "#1A1A1A" ? "#FFF6E5" : "#1A1A1A",
                  }}
                >
                  {cat.badge}
                </span>
              </div>

              {/* Skills list as a typographic index */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => {
                  const rotations = ["hover:-rotate-2", "hover:rotate-2", "hover:rotate-1", "hover:-rotate-1"];
                  const rotClass = rotations[sIdx % rotations.length];
                  return (
                    <span
                      key={skill}
                      className={`inline-block font-mono text-xs font-semibold px-2.5 py-1 border border-ink dark:border-cream bg-cream dark:bg-ink text-ink dark:text-cream transition-transform duration-150 cursor-default select-none ${rotClass}`}
                      data-cursor-label="skill"
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-ink/10 dark:border-cream/10 flex items-center justify-between font-mono text-xs text-ink/70 dark:text-cream/70">
              <span>Verified stack</span>
              <span className="font-bold text-teal">0{idx + 1}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Currently Learning Callout Strip */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-6 border-2 border-ink dark:border-cream bg-sunny text-ink p-4 shadow-hard flex flex-col sm:flex-row sm:items-center justify-between gap-3"
      >
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-bold px-2.5 py-1 bg-ink text-cream">
            Active Study
          </span>
          <p className="font-display font-bold text-base sm:text-lg">
            Currently learning: <span className="underline decoration-2 decoration-tomato font-extrabold">React Native</span> (cross-platform mobile systems)
          </p>
        </div>
        <span className="font-mono text-xs text-ink/70">
          Status: In progress
        </span>
      </motion.div>
    </div>
  );
}
