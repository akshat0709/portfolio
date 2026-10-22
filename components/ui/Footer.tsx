"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MagneticButton } from "./MagneticButton";
import { siteConfig } from "@/lib/site";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    botcheck: "",
  });
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");
  const [showMailtoFallback, setShowMailtoFallback] = useState(false);

  const email = siteConfig.email;

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(media.matches);
    const listener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const validate = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.name.trim()) {
      errors.name = "Name is required.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errors.email = "Valid email is required.";
    }
    if (!formData.message.trim() || formData.message.trim().length < 5) {
      errors.message = "Message must be at least 5 characters.";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    setServerMessage("");
    setShowMailtoFallback(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setServerMessage(data.message || "Message sent successfully!");
        setFormData({ name: "", email: "", message: "", botcheck: "" });
      } else {
        setStatus("error");
        setServerMessage(data.error || "Failed to send message.");
        if (data.fallback) {
          setShowMailtoFallback(true);
        }
      }
    } catch {
      setStatus("error");
      setServerMessage("Network error occurred. Please use direct email instead.");
      setShowMailtoFallback(true);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 border-t-2 border-ink dark:border-cream">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="border-2 border-ink dark:border-cream bg-white dark:bg-[#1E1E1E] shadow-hard-lg dark:shadow-hard-dark-lg p-6 sm:p-12 relative overflow-hidden">
          {/* Indie Zine corner tag */}
          <div className="inline-block px-3 py-1 bg-sunny text-ink border-2 border-ink font-mono text-xs font-bold uppercase tracking-wider mb-6 rotate-[-2deg]">
            Direct Channel · Bengaluru / Delhi
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-ink dark:text-cream tracking-tight mb-4">
            Looking for an intern who ships real code?
          </h2>

          <p className="font-body text-base sm:text-lg text-ink/80 dark:text-cream/80 max-w-2xl mb-8 leading-relaxed">
            I build full-stack web platforms and hardware-integrated systems. Open for summer/fall internships, early-career software roles, and selected freelance projects.
          </p>

          {/* Quick Actions Row */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <MagneticButton
              href={`mailto:${email}?subject=Engineering%20Opportunity`}
              variant="primary"
              isMagnetic={true}
              cursorLabel="email me"
              className="text-sm px-6 py-3.5 h-[48px]"
            >
              Email Akshat →
            </MagneticButton>

            {/* Copy Email Button with small sticker */}
            <div className="relative inline-flex items-center">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="border-2 border-ink dark:border-cream bg-cream dark:bg-ink text-ink dark:text-cream px-5 py-3 font-mono font-bold text-sm tracking-wide shadow-hard hover:translate-x-[1px] hover:translate-y-[1px] active:shadow-none transition-all uppercase h-[48px] flex items-center justify-center gap-2"
                data-cursor-label="copy"
                aria-label="Copy email address to clipboard"
              >
                <span>Copy Email</span>
              </button>

              {/* Copied! sticker with 1.5s dismissal */}
              {copied && (
                <motion.span
                  initial={reducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.8, y: -4, rotate: -3 }}
                  animate={{ opacity: 1, scale: 1, y: 0, rotate: 2 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: reducedMotion ? 0.01 : 0.15 }}
                  className="absolute -top-3 -right-3 z-20 px-2 py-0.5 bg-sunny text-ink border border-ink shadow-hard-sm font-mono text-xs font-black uppercase tracking-wider pointer-events-none"
                  role="status"
                  aria-live="polite"
                >
                  Copied!
                </motion.span>
              )}
            </div>

            <MagneticButton
              href="/Akshat_Gupta_Resume.pdf"
              download={true}
              variant="secondary"
              cursorLabel="resume"
              className="text-sm px-6 py-3.5 h-[48px]"
            >
              Download PDF Resume ↓
            </MagneticButton>
          </div>

          {/* Contact Form */}
          <div className="border-t-2 border-ink/20 dark:border-cream/20 pt-8 mb-8">
            <div className="mb-6">
              <span className="font-mono text-xs font-bold px-2 py-0.5 bg-teal text-white border border-ink inline-block mb-2">
                Send a Message
              </span>
              <h3 className="font-display font-extrabold text-2xl text-ink dark:text-cream">
                Send a direct dispatch
              </h3>
            </div>

            {status === "success" ? (
              <div className="p-6 bg-sunny text-ink border-2 border-ink shadow-hard space-y-3">
                <span className="font-mono text-xs font-black uppercase tracking-wider px-2 py-0.5 bg-ink text-cream inline-block">
                  ✓ Dispatch Received
                </span>
                <h4 className="font-display font-bold text-xl">
                  {serverMessage || "Thank you! Your message has been delivered."}
                </h4>
                <p className="font-body text-sm text-ink/80">
                  I will review your message and reply via email within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="font-mono text-xs font-bold underline hover:text-tomato transition-colors pt-2 block"
                >
                  Send another message →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4 max-w-xl">
                {/* Honeypot field (hidden from legitimate users) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="botcheck">Do not fill this field</label>
                  <input
                    id="botcheck"
                    name="botcheck"
                    type="text"
                    value={formData.botcheck}
                    onChange={(e) => setFormData({ ...formData, botcheck: e.target.value })}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {status === "error" && (
                  <div className="p-4 bg-tomato/10 border-2 border-tomato text-ink dark:text-cream shadow-hard-sm">
                    <p className="font-mono text-xs font-bold text-tomato mb-1">
                      {serverMessage || "There was a problem sending your message."}
                    </p>
                    {showMailtoFallback && (
                      <a
                        href={`mailto:${email}?subject=Message%20from%20Portfolio&body=${encodeURIComponent(formData.message)}`}
                        className="font-mono text-xs font-bold underline text-tomato hover:text-ink transition-colors inline-block mt-1"
                      >
                        Click here to send directly via your mail client →
                      </a>
                    )}
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block font-mono text-xs font-bold uppercase tracking-wider text-ink dark:text-cream mb-1">
                    Your Name <span className="text-tomato">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Maya Sharma"
                    className="w-full px-4 py-2.5 bg-cream dark:bg-ink text-ink dark:text-cream border-2 border-ink dark:border-cream shadow-hard-sm focus:outline-none focus:ring-2 focus:ring-tomato font-body text-sm"
                  />
                  {formErrors.name && (
                    <p className="font-mono text-xs text-tomato mt-1">{formErrors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block font-mono text-xs font-bold uppercase tracking-wider text-ink dark:text-cream mb-1">
                    Your Email <span className="text-tomato">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. maya@company.com"
                    className="w-full px-4 py-2.5 bg-cream dark:bg-ink text-ink dark:text-cream border-2 border-ink dark:border-cream shadow-hard-sm focus:outline-none focus:ring-2 focus:ring-tomato font-body text-sm"
                  />
                  {formErrors.email && (
                    <p className="font-mono text-xs text-tomato mt-1">{formErrors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block font-mono text-xs font-bold uppercase tracking-wider text-ink dark:text-cream mb-1">
                    Message <span className="text-tomato">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about the role, team, or project..."
                    className="w-full px-4 py-2.5 bg-cream dark:bg-ink text-ink dark:text-cream border-2 border-ink dark:border-cream shadow-hard-sm focus:outline-none focus:ring-2 focus:ring-tomato font-body text-sm resize-y"
                  />
                  {formErrors.message && (
                    <p className="font-mono text-xs text-tomato mt-1">{formErrors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="border-2 border-ink dark:border-cream bg-tomato text-white px-6 py-3 font-mono font-bold text-sm tracking-wide shadow-hard hover:bg-[#e03428] active:translate-x-[2px] active:translate-y-[2px] active:shadow-hard-sm transition-all uppercase disabled:opacity-60 cursor-pointer"
                >
                  {status === "submitting" ? "Sending Dispatch..." : "Send Message →"}
                </button>
              </form>
            )}
          </div>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t-2 border-ink/20 dark:border-cream/20 pt-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-ink/70 dark:text-cream/70 font-bold block mb-1">
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
              <span className="font-mono text-xs uppercase tracking-wider text-ink/70 dark:text-cream/70 font-bold block mb-1">
                Phone
              </span>
              <a
                href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
                className="font-mono text-sm font-bold text-ink dark:text-cream hover:text-tomato"
              >
                {siteConfig.phone}
              </a>
            </div>

            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-ink/70 dark:text-cream/70 font-bold block mb-1">
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
            {siteConfig.name} · Hand-crafted with point of view
          </span>
        </div>

        <div className="flex items-center gap-5 font-mono text-sm font-bold">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink dark:text-cream hover:text-tomato underline decoration-2"
            data-cursor-label="github"
          >
            GitHub
          </a>
          <a
            href={siteConfig.linkedin}
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
