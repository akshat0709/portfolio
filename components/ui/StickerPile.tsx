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
    badge: "Bengaluru",
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
    badge: "Academics",
  },
  {
    id: "s3",
    title: "Realtime EV Dispatch",
    subtitle: "Supabase Realtime & PWA Fleet Engine",
    color: "#FF4336", // Tomato Red
    textColor: "#FFFFFF",
    initialX: 40,
    initialY: 100,
    initialRotate: -2,
    badge: "Orange Taxi",
  },
  {
    id: "s4",
    title: "INSPIRE Awardee",
    subtitle: "National Science Exhibition (Rs 10,000)",
    color: "#179A94", // Teal
    textColor: "#FFFFFF",
    initialX: 130,
    initialY: 140,
    initialRotate: 4,
    badge: "Recognition",
  },
  {
    id: "s5",
    title: "Zero Buzzwords",
    subtitle: "'innovative', 'passionate': 404 not found",
    color: "#FFF6E5",
    textColor: "#1A1A1A",
    initialX: 25,
    initialY: 190,
    initialRotate: -4,
    badge: "Principle",
  },
  {
    id: "s6",
    title: "GPS-Denied Rover",
    subtitle: "Autonomous disaster search & rescue",
    color: "#FFD13B",
    textColor: "#1A1A1A",
    initialX: 110,
    initialY: 230,
    initialRotate: 1,
    badge: "Robotics",
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
          <span className="font-mono text-xs font-bold text-ink dark:text-cream ml-2">
            Interactive Sticker Pile (Try dragging)
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
        <p className="absolute bottom-3 right-4 font-mono text-xs text-ink/70 dark:text-cream/70 pointer-events-none tracking-wide">
          Grab and toss stickers freely
        </p>

        {initialStickers.map((sticker) => {
          const z = zIndices[sticker.id] || 1;
          return (
            <motion.div
              key={sticker.id}
              role="region"
              aria-label={`Interactive draggable sticker: ${sticker.title}`}
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
              className="absolute cursor-grab active:cursor-grabbing hover:-translate-y-0.5 hover:shadow-hard-lg transition-shadow max-w-[280px] sm:max-w-[310px] p-4 border-2 border-ink shadow-hard select-none"
              style={{
                backgroundColor: sticker.color,
                color: sticker.textColor,
                zIndex: z,
              }}
              data-cursor-label="drag"
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                {sticker.badge && (
                  <span className="font-mono text-xs font-bold px-2 py-0.5 border border-ink bg-white/80 text-ink">
                    {sticker.badge}
                  </span>
                )}
                {/* Visual affordance grab indicator */}
                <span className="font-mono text-xs font-bold px-1.5 py-0.5 bg-ink/10 text-ink border border-ink/30 flex items-center gap-1">
                  <span>⠿</span>
                  <span>Drag</span>
                </span>
              </div>
              <h4 className="font-display font-extrabold text-base tracking-tight leading-tight">
                {sticker.title}
              </h4>
              <p className="font-mono text-xs text-ink/80 dark:text-cream/80 mt-1 leading-snug">
                {sticker.subtitle}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
