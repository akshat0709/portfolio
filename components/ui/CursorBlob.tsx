"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function CursorBlob() {
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  // Reusable spring config matching design tokens
  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(-100, springConfig);
  const cursorY = useSpring(-100, springConfig);

  useEffect(() => {
    // Check touch device
    const isTouch =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches;

    if (isTouch) {
      setIsTouchDevice(true);
      return;
    }
    setIsTouchDevice(false);

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactiveEl = target.closest("[data-cursor-label], a, button, [role='button']") as HTMLElement | null;

      if (interactiveEl) {
        setIsHovered(true);
        const customText = interactiveEl.getAttribute("data-cursor-label");
        if (customText) {
          setCursorText(customText);
        } else if (interactiveEl.tagName.toLowerCase() === "a" || interactiveEl.getAttribute("role") === "link") {
          setCursorText("open");
        } else if (interactiveEl.tagName.toLowerCase() === "button") {
          setCursorText("press");
        } else {
          setCursorText("");
        }
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        setIsVisible(false);
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [cursorX, cursorY, isVisible]);

  if (isTouchDevice || !isVisible) {
    return null;
  }

  return (
    <motion.div
      className="fixed pointer-events-none z-[9999] select-none flex items-center justify-center font-mono font-bold text-xs uppercase"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        width: isHovered ? (cursorText ? 68 : 42) : 18,
        height: isHovered ? (cursorText ? 68 : 42) : 18,
        backgroundColor: isHovered ? "#FFD13B" : "#1A1A1A",
        color: "#1A1A1A",
        border: "2px solid #1A1A1A",
        scale: isHovered ? 1.05 : 1,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {cursorText && isHovered && (
        <span className="tracking-wider text-[11px] font-extrabold text-ink leading-none text-center px-1">
          {cursorText}
        </span>
      )}
    </motion.div>
  );
}
