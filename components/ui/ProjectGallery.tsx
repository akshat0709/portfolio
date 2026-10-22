"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

export interface ProjectScreenshot {
  src: string;
  alt: string;
  filename: string;
}

interface ProjectGalleryProps {
  slug: string;
  projectTitle: string;
  screenshots: ProjectScreenshot[];
}

export function ProjectGallery({ slug, projectTitle, screenshots }: ProjectGalleryProps) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const triggerRefMap = useRef<Map<number, HTMLButtonElement>>(new Map());
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const isOpen = activeIdx !== null;

  const handleOpen = (idx: number) => {
    setActiveIdx(idx);
  };

  const handleClose = useCallback(() => {
    if (activeIdx !== null) {
      const trigger = triggerRefMap.current.get(activeIdx);
      if (trigger) {
        trigger.focus();
      }
    }
    setActiveIdx(null);
  }, [activeIdx]);

  const handleNext = useCallback(() => {
    if (screenshots.length === 0) return;
    setActiveIdx((prev) => (prev === null ? 0 : (prev + 1) % screenshots.length));
  }, [screenshots.length]);

  const handlePrev = useCallback(() => {
    if (screenshots.length === 0) return;
    setActiveIdx((prev) =>
      prev === null ? 0 : (prev - 1 + screenshots.length) % screenshots.length
    );
  }, [screenshots.length]);

  // Keyboard navigation & Esc & Focus Trap
  useEffect(() => {
    if (!isOpen) return;

    // Focus close button on open
    setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        handleClose();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrev();
      } else if (e.key === "Tab" && modalRef.current) {
        // Trap focus inside modal
        const focusables = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const focusableArray = Array.from(focusables);
        if (focusableArray.length === 0) return;

        const first = focusableArray[0];
        const last = focusableArray[focusableArray.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleClose, handleNext, handlePrev]);

  if (screenshots.length === 0) {
    return (
      <div className="border-2 border-dashed border-ink/40 dark:border-cream/30 bg-cream/30 dark:bg-[#1A1A1A]/40 p-8 sm:p-10 text-center my-6">
        <span className="font-mono text-xs font-bold px-2.5 py-0.5 bg-sunny text-ink border border-ink shadow-hard-sm inline-block mb-3">
          [SCREENSHOTS_PLACEHOLDER]
        </span>
        <p className="font-mono text-xs text-ink/70 dark:text-cream/70 max-w-md mx-auto leading-relaxed">
          No images uploaded yet. Drop image files (.png, .jpg, .webp) into{" "}
          <code className="bg-ink/10 dark:bg-cream/10 px-1 py-0.5 border border-ink/20">
            public/screenshots/{slug}/
          </code>{" "}
          to automatically render production interface captures.
        </p>
      </div>
    );
  }

  const currentImage = activeIdx !== null ? screenshots[activeIdx] : null;

  return (
    <div className="my-6">
      {/* Thumbnails Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {screenshots.map((item, idx) => (
          <button
            key={item.src}
            ref={(el) => {
              if (el) triggerRefMap.current.set(idx, el);
              else triggerRefMap.current.delete(idx);
            }}
            type="button"
            onClick={() => handleOpen(idx)}
            className="group text-left border-2 border-ink dark:border-cream bg-white dark:bg-[#1E1E1E] shadow-hard dark:shadow-hard-dark hover:-translate-y-1 hover:shadow-hard-lg transition-all overflow-hidden flex flex-col"
            aria-label={`View enlarged screenshot: ${item.alt}`}
            data-cursor-label="zoom"
          >
            <div className="relative aspect-[16/10] w-full bg-cream/60 dark:bg-[#151515] overflow-hidden border-b-2 border-ink dark:border-cream">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-102 transition-transform duration-300"
              />
              <span className="absolute bottom-2 right-2 px-2 py-0.5 bg-ink text-cream text-[10px] font-mono font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                Enlarge ↗
              </span>
            </div>
            <div className="p-3 flex items-center justify-between gap-2">
              <span className="font-mono text-xs font-bold text-ink dark:text-cream truncate">
                {item.alt}
              </span>
              <span className="font-mono text-[10px] text-ink/60 dark:text-cream/60 uppercase">
                {item.filename.split(".").pop()}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Accessible Lightbox Modal */}
      {isOpen && currentImage && (
        <div
          ref={modalRef}
          role="dialog"
          aria-modal="true"
          aria-label={`${projectTitle} screenshot lightbox`}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-ink/80 backdrop-blur-sm"
          onClick={handleClose}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] bg-cream dark:bg-[#1A1A1A] border-2 border-ink dark:border-cream shadow-hard-lg flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-3 border-b-2 border-ink dark:border-cream bg-white dark:bg-[#222222]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-tomato border border-ink" />
                <span className="font-mono text-xs font-bold text-ink dark:text-cream">
                  {currentImage.alt}
                </span>
                <span className="font-mono text-xs text-ink/50 dark:text-cream/50">
                  ({activeIdx + 1} of {screenshots.length})
                </span>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={handleClose}
                aria-label="Close image lightbox"
                className="px-2.5 py-1 border-2 border-ink dark:border-cream bg-sunny text-ink font-mono text-xs font-bold hover:bg-tomato hover:text-white transition-colors"
              >
                Close ✕ (Esc)
              </button>
            </div>

            {/* Modal Image Display */}
            <div className="relative flex-1 min-h-[300px] sm:min-h-[460px] bg-black/10 dark:bg-black/40 flex items-center justify-center p-2">
              <div className="relative w-full h-[60vh] max-h-[600px]">
                <Image
                  src={currentImage.src}
                  alt={currentImage.alt}
                  fill
                  sizes="90vw"
                  className="object-contain"
                  priority
                />
              </div>

              {/* Prev / Next Buttons */}
              {screenshots.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Previous screenshot"
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 border-2 border-ink dark:border-cream bg-white dark:bg-[#1E1E1E] text-ink dark:text-cream shadow-hard font-mono text-base font-bold flex items-center justify-center hover:bg-sunny dark:hover:bg-sunny dark:hover:text-ink transition-colors"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next screenshot"
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 border-2 border-ink dark:border-cream bg-white dark:bg-[#1E1E1E] text-ink dark:text-cream shadow-hard font-mono text-base font-bold flex items-center justify-center hover:bg-sunny dark:hover:bg-sunny dark:hover:text-ink transition-colors"
                  >
                    →
                  </button>
                </>
              )}
            </div>

            {/* Modal Footer Key Hints */}
            <div className="p-2 border-t-2 border-ink dark:border-cream bg-white dark:bg-[#222222] flex items-center justify-between font-mono text-[11px] text-ink/70 dark:text-cream/70">
              <span>Use ← / → keys to navigate</span>
              <span>Filename: {currentImage.filename}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
