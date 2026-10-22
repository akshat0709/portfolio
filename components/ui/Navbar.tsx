"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent, AnimatePresence, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/lib/site";

export function Navbar() {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const { scrollY, scrollYProgress } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);
  const [isDark, setIsDark] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("portfolio-theme");
    if (stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const toggleDarkMode = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("portfolio-theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("portfolio-theme", "dark");
      setIsDark(true);
    }
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    const diff = latest - lastY;
    if (latest < 60) {
      setHidden(false);
    } else if (diff > 8 && !mobileMenuOpen) {
      setHidden(true); // scrolling down
    } else if (diff < -8) {
      setHidden(false); // scrolling up
    }
    setLastY(latest);
  });

  const navLinks = [
    { href: "/projects", label: "Projects" },
    { href: "/skills", label: "Skills" },
    { href: "/experience", label: "Experience" },
    { href: "/about", label: "About" },
  ];

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-110%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4 pb-2"
    >
      <div className="max-w-5xl mx-auto">
        <div className="bg-[#FFF6E5] dark:bg-[#1A1A1A] border-2 border-ink dark:border-[#FFF6E5] shadow-hard dark:shadow-hard-dark px-4 sm:px-6 py-2.5 flex items-center justify-between transition-colors">
          {/* Logo / Monogram & Desktop Availability Badge */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="flex items-center gap-2 group font-display font-extrabold text-xl text-ink dark:text-cream tracking-tight"
              data-cursor-label="home"
            >
              <span className="w-8 h-8 rounded-full bg-sunny border-2 border-ink flex items-center justify-center text-xs font-mono font-bold text-ink group-hover:rotate-12 transition-transform duration-200">
                AG
              </span>
              <span className="hover:underline underline-offset-4 decoration-2 decoration-tomato">
                Akshat Gupta
              </span>
            </Link>

            {siteConfig.availability?.open && (
              <Link
                href="/#contact"
                className="hidden lg:inline-flex items-center gap-2 px-2.5 py-1 bg-white dark:bg-[#1E1E1E] border-2 border-ink dark:border-cream shadow-hard-sm hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px] font-mono text-xs font-bold text-ink dark:text-cream transition-all"
                data-cursor-label="contact"
                title="Akshat is currently open for opportunities"
              >
                <motion.span
                  className="w-2 h-2 rounded-full bg-teal border border-ink flex-shrink-0"
                  initial={shouldReduceMotion ? { scale: 1 } : { scale: 1 }}
                  animate={shouldReduceMotion ? undefined : { scale: [1, 1.45, 1] }}
                  transition={{ duration: 0.6, times: [0, 0.5, 1], repeat: 0 }}
                />
                <span>{siteConfig.availability.label}</span>
              </Link>
            )}
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-2 font-mono text-sm font-bold">
            {navLinks.map((item) => {
              const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== "/");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-2.5 py-1 transition-colors rounded-sm ${
                    isActive
                      ? "bg-ink text-cream dark:bg-cream dark:text-ink"
                      : "text-ink dark:text-cream hover:text-tomato dark:hover:text-tomato"
                  }`}
                  data-cursor-label="navigate"
                >
                  {item.label}
                </Link>
              );
            })}

            {/* Desktop Resume Download Link */}
            <a
              href="/Akshat_Gupta_Resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 text-ink dark:text-cream hover:text-teal dark:hover:text-teal transition-colors flex items-center gap-1 border-b-2 border-transparent hover:border-teal"
              data-cursor-label="resume"
            >
              <span>Resume</span>
              <span className="text-xs text-tomato font-black">↓</span>
            </a>

            {/* Dark Mode Toggle */}
            <button
              type="button"
              onClick={toggleDarkMode}
              aria-label="Toggle theme"
              className="ml-1 w-8 h-8 border-2 border-ink dark:border-cream bg-white dark:bg-ink text-ink dark:text-cream flex items-center justify-center text-xs font-mono font-bold shadow-hard-sm dark:shadow-[2px_2px_0px_#FFF6E5] hover:bg-cream dark:hover:bg-[#2A2A2A] transition-colors"
              data-cursor-label="theme"
            >
              {isDark ? "☀" : "☾"}
            </button>
          </nav>

          {/* Mobile Actions: Dark Mode & Hamburger Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={toggleDarkMode}
              aria-label="Toggle theme"
              className="w-8 h-8 border-2 border-ink dark:border-cream bg-white dark:bg-ink text-ink dark:text-cream flex items-center justify-center text-xs font-mono font-bold shadow-hard-sm"
            >
              {isDark ? "☀" : "☾"}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              className="px-2.5 py-1 border-2 border-ink dark:border-cream bg-sunny text-ink font-mono text-xs font-bold uppercase shadow-hard-sm"
            >
              {mobileMenuOpen ? "Close ✕" : "Menu ☰"}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Panel */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.15 }}
              className="md:hidden mt-2 border-2 border-ink dark:border-cream bg-[#FFF6E5] dark:bg-[#1A1A1A] shadow-hard dark:shadow-hard-dark p-4"
            >
              <div className="flex flex-col gap-2 font-mono text-sm font-bold">
                {/* Mobile Availability Badge */}
                {siteConfig.availability?.open && (
                  <Link
                    href="/#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2 border-2 border-ink dark:border-cream bg-white dark:bg-[#1E1E1E] shadow-hard-sm text-ink dark:text-cream flex items-center gap-2.5 font-mono text-xs font-bold hover:bg-sunny dark:hover:bg-sunny dark:hover:text-ink transition-colors mb-1"
                  >
                    <motion.span
                      className="w-2.5 h-2.5 rounded-full bg-teal border border-ink flex-shrink-0"
                      initial={shouldReduceMotion ? { scale: 1 } : { scale: 1 }}
                      animate={shouldReduceMotion ? undefined : { scale: [1, 1.45, 1] }}
                      transition={{ duration: 0.6, times: [0, 0.5, 1], repeat: 0 }}
                    />
                    <span>{siteConfig.availability.label}</span>
                  </Link>
                )}

                {navLinks.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`px-3 py-2 border-2 border-ink dark:border-cream ${
                        isActive
                          ? "bg-ink text-cream dark:bg-cream dark:text-ink"
                          : "bg-white dark:bg-ink text-ink dark:text-cream hover:bg-sunny"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}

                {/* Mobile Resume Link */}
                <a
                  href="/Akshat_Gupta_Resume.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 border-2 border-ink dark:border-cream bg-sunny text-ink flex items-center justify-between"
                >
                  <span>Download Resume (PDF)</span>
                  <span className="text-tomato font-black">↓</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hand-drawn Pen-stroke Scroll Progress Line */}
        <div className="relative w-full h-[4px] mt-1 bg-transparent overflow-hidden">
          <motion.div
            className="h-full bg-tomato border-b-2 border-ink"
            style={{
              scaleX: scrollYProgress,
              transformOrigin: "left",
            }}
          />
        </div>
      </div>
    </motion.header>
  );
}
