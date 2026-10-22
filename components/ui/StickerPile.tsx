"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Sticker {
  id: string;
  title: string;
  subtitle: string;
  color: string;
  textColor: string;
  initialX: number;
  initialY: number;
  initialRotate: number;
  badge?: string;
}

const initialStickers: Sticker[] = [
  {
    id: "s1",
    title: "BMSCE '28",
    subtitle: "BE CS (IoT, Cyber & Blockchain)",
    color: "#FFD13B", // Sunny yellow
    textColor: "#1A1A1A",
    initialX: 20,
    initialY: 20,
    initialRotate: -3,
    badge: "BENGALURU",
  },
  {
    id: "s2",
    title: "CGPA 8.97",
    subtitle: "Till 4th Sem · Class X: 94.8%",
    color: "#FFFFFF",
    textColor: "#1A1A1A",
    initialX: 90,
    initialY: 45,
    initialRotate: 2,
    badge: "ACADEMICS",
  },
  {
    id: "s3",
    title: "REALTIME EV DISPATCH",
    subtitle: "Supabase Realtime & PWA Fleet Engine",
    color: "#FF4336", // Tomato Red
    textColor: "#FFFFFF",
    initialX: 40,
    initialY: 100,
    initialRotate: -2,
    badge: "ORANGE TAXI",
  },
  {
    id: "s4",
    title: "INSPIRE AWARDEE",
    subtitle: "National Science Exhibition (Rs 10,000)",
    color: "#179A94", // Teal
    textColor: "#FFFFFF",
    initialX: 130,
    initialY: 140,
    initialRotate: 4,
    badge: "RECOGNITION",
  },
  {
    id: "s5",
    title: "ZERO BUZZWORDS",
    subtitle: "'innovative', 'passionate': 404 not found",
    color: "#FFF6E5",
    textColor: "#1A1A1A",
    initialX: 25,
    initialY: 190,
    initialRotate: -4,
    badge: "PRINCIPLE",
  },
  {
    id: "s6",
    title: "GPS-DENIED ROVER",
    subtitle: "Autonomous disaster search & rescue",
    color: "#FFD13B",
    textColor: "#1A1A1A",
    initialX: 110,
    initialY: 230,
    initialRotate: 1,
    badge: "ROBOTICS",
  },
];

export function StickerPile() {
  const [topIndex, setTopIndex] = useState(10);
  const [zIndices, setZIndices] = useState<Record<string, number>>(() =>
    initialStickers.reduce((acc, s, idx) => ({ ...acc, [s.id]: idx + 1 }), {})
  );
  const [resetKey, setResetKey] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(media.matches);
  }, []);

  const bringToFront = (id: string) => {
    setTopIndex((prev) => prev + 1);
    setZIndices((prev) => ({
      ...prev,
      [id]: topIndex + 1,
    }));
  };

  const handleReset = () => {
    setResetKey((prev) => prev + 1);
  };

  return (
    <div className="relative w-full border-2 border-ink dark:border-cream bg-white dark:bg-[#1E1E1E] shadow-hard dark:shadow-hard-dark p-6 overflow-hidden">
      {/* Header bar of the sticker box */}
      <div className="flex items-center justify-between pb-4 border-b-2 border-ink dark:border-[#333333] mb-4">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-tomato border border-ink" />
          <span className="w-3 h-3 rounded-full bg-sunny border border-ink" />
          <span className="w-3 h-3 rounded-full bg-teal border border-ink" />
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-ink dark:text-cream ml-2">
            Interactive Sticker Pile (Try dragging!)
          </span>
        </div>
        <button
          onClick={handleReset}
          className="font-mono text-xs font-bold text-ink dark:text-cream underline hover:text-tomato transition-colors cursor-pointer"
          data-cursor-label="reset"
        >
          Reset pile
        </button>
      </div>

      {/* Draggable Playground area */}
      <div
        key={resetKey}
        className="relative w-full h-[360px] sm:h-[380px] bg-cream dark:bg-[#151515] border-2 border-dashed border-ink/40 dark:border-cream/30 overflow-hidden select-none"
      >
        <p className="absolute bottom-3 right-4 font-mono text-[11px] text-ink/40 dark:text-cream/40 pointer-events-none uppercase tracking-wider">
          grab & toss stickers freely
        </p>

        {initialStickers.map((sticker) => {
          const z = zIndices[sticker.id] || 1;
          return (
            <motion.div
              key={sticker.id}
              drag={!reducedMotion}
              dragConstraints={{
                top: -10,
                left: -20,
                right: 280,
                bottom: 200,
              }}
              dragElastic={0.15}
              whileDrag={{
                scale: 1.05,
                rotate: 0,
                cursor: "grabbing",
              }}
              onPointerDown={() => bringToFront(sticker.id)}
              initial={{
                x: sticker.initialX,
                y: sticker.initialY,
                rotate: sticker.initialRotate,
              }}
              className="absolute cursor-grab active:cursor-grabbing max-w-[280px] sm:max-w-[310px] p-4 border-2 border-ink shadow-hard select-none"
              style={{
                backgroundColor: sticker.color,
                color: sticker.textColor,
                zIndex: z,
              }}
              data-cursor-label="drag"
            >
              <div className="flex items-center justify-between gap-2 mb-1.5">
                {sticker.badge && (
                  <span className="font-mono text-[10px] font-black uppercase tracking-widest px-1.5 py-0.5 border border-ink bg-white/70 text-ink">
                    {sticker.badge}
                  </span>
                )}
                <span className="font-mono text-[10px] opacity-70">
                  #{sticker.id}
                </span>
              </div>
              <h4 className="font-display font-extrabold text-base tracking-tight leading-tight">
                {sticker.title}
              </h4>
              <p className="font-mono text-xs opacity-90 mt-1 leading-snug">
                {sticker.subtitle}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
