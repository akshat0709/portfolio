"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ProjectCardProps {
  slug: string;
  number: string;
  title: string;
  tagline: string;
  category: string;
  stack: string[];
  highlight: string;
  liveUrl?: string;
  repoUrl?: string;
  accentColor: "tomato" | "sunny" | "teal";
  doodle: React.ReactNode;
  initialRotation?: number;
}

export function ProjectCard({
  slug,
  number,
  title,
  tagline,
  category,
  stack,
  highlight,
  liveUrl,
  repoUrl,
  accentColor,
  doodle,
  initialRotation = 0,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const accentBg = {
    tomato: "bg-tomato text-white",
    sunny: "bg-sunny text-ink",
    teal: "bg-teal text-white",
  }[accentColor];

  const accentPill = {
    tomato: "border-tomato text-tomato bg-tomato/10",
    sunny: "border-ink text-ink bg-sunny",
    teal: "border-teal text-teal bg-teal/10",
  }[accentColor];

  return (
    <motion.div
      initial={{ rotate: initialRotation }}
      whileHover={{
        rotate: 0,
        y: -6,
        x: -4,
        transition: { type: "spring", stiffness: 400, damping: 25 },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative flex flex-col justify-between bg-white dark:bg-[#1E1E1E] border-2 border-ink dark:border-cream shadow-hard dark:shadow-hard-dark hover:shadow-hard-lg dark:hover:shadow-hard-dark-lg transition-shadow duration-200"
    >
      {/* Sticker-Peel Corner Dog-Ear */}
      <div
        className="absolute top-0 right-0 w-10 h-10 overflow-hidden pointer-events-none z-10"
        title="Peel corner"
      >
        <div
          className={`absolute top-0 right-0 w-8 h-8 border-l-2 border-b-2 border-ink transition-transform duration-200 origin-top-right ${
            isHovered
              ? "translate-x-1 -translate-y-1 bg-sunny"
              : "bg-cream dark:bg-[#2A2A2A]"
          }`}
          style={{
            clipPath: "polygon(100% 0, 0 100%, 100% 100%)",
          }}
        />
      </div>

      <div className="p-6 sm:p-8">
        {/* Top bar with project index number and category */}
        <div className="flex items-center justify-between border-b-2 border-ink/15 dark:border-cream/15 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <span className="font-mono font-black text-2xl text-ink dark:text-cream">
              /{number}
            </span>
            <span
              className={`font-mono text-xs font-bold uppercase tracking-wider px-2 py-0.5 border border-ink ${accentBg}`}
            >
              {category}
            </span>
          </div>

          {liveUrl && (
            <span className="font-mono text-xs font-bold text-teal flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
              LIVE
            </span>
          )}
        </div>

        {/* Doodle visual area */}
        <div className="flex items-center justify-center p-6 bg-cream/70 dark:bg-[#151515] border-2 border-ink dark:border-[#333333] mb-6 min-h-[140px]">
          {doodle}
        </div>

        {/* Title and Tagline */}
        <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-ink dark:text-cream tracking-tight mb-2">
          <Link
            href={`/projects/${slug}`}
            className="hover:underline decoration-2 decoration-tomato"
            data-cursor-label="case study"
          >
            {title}
          </Link>
        </h3>
        <p className="font-body text-base text-ink/80 dark:text-cream/80 mb-6 leading-relaxed">
          {tagline}
        </p>

        {/* Core Contribution Highlight */}
        <div className="bg-cream/50 dark:bg-[#252525] border-l-4 border-ink dark:border-cream p-3 mb-6">
          <p className="font-mono text-xs text-ink dark:text-cream leading-normal">
            <strong className="text-tomato uppercase mr-1">Built:</strong>
            {highlight}
          </p>
        </div>

        {/* Tech Stack Chips (peel reveals detail) */}
        <div>
          <p className="font-mono text-[11px] uppercase tracking-wider text-ink/60 dark:text-cream/60 mb-2 font-bold">
            Stack:
          </p>
          <div className="flex flex-wrap gap-1.5">
            {stack.map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs font-semibold px-2 py-0.5 border border-ink dark:border-cream bg-white dark:bg-ink text-ink dark:text-cream hover:rotate-1 transition-transform"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="border-t-2 border-ink dark:border-cream p-4 sm:px-8 bg-cream/30 dark:bg-[#181818] flex items-center justify-between">
        <Link
          href={`/projects/${slug}`}
          className="font-mono text-sm font-black text-ink dark:text-cream flex items-center gap-2 hover:text-tomato transition-colors group"
          data-cursor-label="read"
        >
          <span>READ CASE STUDY</span>
          <span className="group-hover:translate-x-1 transition-transform">
            →
          </span>
        </Link>

        <div className="flex items-center gap-3">
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs font-bold text-ink dark:text-cream hover:underline"
              data-cursor-label="github"
            >
              GitHub ↗
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs font-bold text-teal hover:underline"
              data-cursor-label="live"
            >
              Live Site ↗
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
