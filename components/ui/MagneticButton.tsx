"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useSpring } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "teal" | "outline";
  isMagnetic?: boolean;
  cursorLabel?: string;
  external?: boolean;
  download?: boolean | string;
}

export function MagneticButton({
  children,
  href,
  onClick,
  className = "",
  variant = "primary",
  isMagnetic = false,
  cursorLabel,
  external = false,
  download = false,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(media.matches);
    const listener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  // Spring physics for gentle magnetic pull
  const x = useSpring(0, { stiffness: 250, damping: 20, mass: 0.2 });
  const y = useSpring(0, { stiffness: 250, damping: 20, mass: 0.2 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isMagnetic || reducedMotion || !ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    // Gentle pull: max 8px displacement
    x.set((clientX - centerX) * 0.18);
    y.set((clientY - centerY) * 0.18);
  };

  const handleMouseLeave = () => {
    if (!isMagnetic || reducedMotion) return;
    x.set(0);
    y.set(0);
  };

  const variantStyles = {
    primary:
      "bg-tomato text-white border-2 border-ink shadow-hard hover:bg-[#e03428] active:translate-x-[2px] active:translate-y-[2px] active:shadow-hard-sm",
    secondary:
      "bg-sunny text-ink border-2 border-ink shadow-hard hover:bg-[#f5c328] active:translate-x-[2px] active:translate-y-[2px] active:shadow-hard-sm",
    teal:
      "bg-teal text-white border-2 border-ink shadow-hard hover:bg-[#13807b] active:translate-x-[2px] active:translate-y-[2px] active:shadow-hard-sm",
    outline:
      "bg-cream dark:bg-ink text-ink dark:text-cream border-2 border-ink dark:border-cream shadow-hard dark:shadow-hard-dark hover:bg-white dark:hover:bg-[#222222] active:translate-x-[2px] active:translate-y-[2px] active:shadow-hard-sm",
  };

  const baseContent = (
    <div
      className={`inline-flex items-center justify-center gap-2 px-6 py-3 font-mono font-bold text-sm tracking-wide transition-all uppercase select-none ${variantStyles[variant]} ${className}`}
      data-cursor-label={cursorLabel}
    >
      {children}
    </div>
  );

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      className="inline-block"
    >
      {href ? (
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          download={download}
          className="inline-block"
        >
          {baseContent}
        </a>
      ) : (
        <button type="button" onClick={onClick} className="inline-block">
          {baseContent}
        </button>
      )}
    </motion.div>
  );
}
