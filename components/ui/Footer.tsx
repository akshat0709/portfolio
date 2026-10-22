"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MagneticButton } from "./MagneticButton";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = "akshat070906@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 border-t-2 border-ink dark:border-cream">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="border-2 border-ink dark:border-cream bg-white dark:bg-[#1E1E1E] shadow-hard-lg dark:shadow-hard-dark-lg p-8 sm:p-12 relative overflow-hidden">
          {/* Indie Zine corner tag */}
          <div className="inline-block px-3 py-1 bg-sunny text-ink border-2 border-ink font-mono text-xs font-black uppercase tracking-wider mb-6 rotate-[-2deg]">
            Direct Channel · Bengaluru / Delhi
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-ink dark:text-cream tracking-tight mb-4">
            Looking for an intern who ships real code?
          </h2>

          <p className="font-body text-lg sm:text-xl text-ink/80 dark:text-cream/80 max-w-2xl mb-8 leading-relaxed">
            I build full-stack web platforms and hardware-integrated systems. Open for summer/fall internships, early-career software roles, and selected freelance projects.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-10">
            {/* Primary Action CTA with gentle magnetic pull */}
            <MagneticButton
              href={`mailto:${email}?subject=Engineering%20Opportunity`}
              variant="primary"
              isMagnetic={true}
              cursorLabel="email me"
              className="text-base sm:text-lg px-8 py-4"
            >
              Email Akshat →
            </MagneticButton>

            {/* Copy Email Button */}
            <button
              onClick={handleCopyEmail}
              className="border-2 border-ink dark:border-cream bg-cream dark:bg-ink text-ink dark:text-cream px-5 py-4 font-mono font-bold text-sm tracking-wide shadow-hard hover:translate-x-[1px] hover:translate-y-[1px] active:shadow-none transition-all uppercase"
              data-cursor-label="copy"
            >
              {copied ? "✓ Copied to clipboard" : "Copy Email"}
            </button>

            {/* Resume Download CTA */}
            <MagneticButton
              href="/Akshat_Gupta_Resume.pdf"
              download={true}
              variant="secondary"
              cursorLabel="resume"
              className="px-6 py-4"
            >
              Download PDF Resume ↓
            </MagneticButton>
          </div>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t-2 border-ink/20 dark:border-cream/20 pt-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-ink/60 dark:text-cream/60 font-bold block mb-1">
                Direct Email
              </span>
              <a
                href={`mailto:${email}`}
                className="font-mono text-sm font-bold text-ink dark:text-cream hover:text-tomato underline"
              >
                {email}
              </a>
            </div>

            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-ink/60 dark:text-cream/60 font-bold block mb-1">
                Phone
              </span>
              <a
                href="tel:+917360911966"
                className="font-mono text-sm font-bold text-ink dark:text-cream hover:text-tomato"
              >
                +91-7360911966
              </a>
            </div>

            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-ink/60 dark:text-cream/60 font-bold block mb-1">
                Locations
              </span>
              <span className="font-mono text-sm font-bold text-ink dark:text-cream">
                Bengaluru · BMSCE / Delhi NCR
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t-2 border-ink dark:border-cream bg-[#FFF6E5] dark:bg-[#121212] py-10 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="w-7 h-7 rounded-full bg-tomato border-2 border-ink flex items-center justify-center font-mono font-bold text-xs text-white">
            AG
          </span>
          <span className="font-display font-bold text-sm text-ink dark:text-cream">
            Akshat Gupta · Hand-crafted with point of view
          </span>
        </div>

        <div className="flex items-center gap-5 font-mono text-sm font-bold">
          <a
            href="https://github.com/akshat0709"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink dark:text-cream hover:text-tomato underline decoration-2"
            data-cursor-label="github"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/akshat-gupta-957084317"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink dark:text-cream hover:text-teal underline decoration-2"
            data-cursor-label="linkedin"
          >
            LinkedIn
          </a>
          <a
            href="/Akshat_Gupta_Resume.pdf"
            download
            className="text-ink dark:text-cream hover:text-sunny underline decoration-2"
            data-cursor-label="resume"
          >
            Resume (PDF)
          </a>
          <Link
            href="#hero"
            className="px-2 py-1 bg-white dark:bg-ink border border-ink dark:border-cream text-xs uppercase"
            data-cursor-label="top"
          >
            ↑ Top
          </Link>
        </div>
      </div>
    </footer>
  );
}
