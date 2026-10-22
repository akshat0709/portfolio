import React from "react";
import Link from "next/link";
import { RobotDoodle } from "@/components/doodles/RobotDoodle";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-4 py-20 selection:bg-sunny">
      <div className="max-w-md w-full border-2 border-ink dark:border-cream bg-white dark:bg-[#1E1E1E] shadow-hard-lg dark:shadow-hard-dark-lg p-8 text-center relative">
        <div className="inline-block px-3 py-1 bg-tomato text-white border-2 border-ink font-mono text-xs font-black uppercase tracking-wider mb-6 rotate-[-2deg]">
          404 · Signal Lost
        </div>

        <div className="flex justify-center mb-6">
          <RobotDoodle className="w-24 h-24" />
        </div>

        <h1 className="font-display font-extrabold text-3xl text-ink dark:text-cream tracking-tight mb-2">
          Route Not Found.
        </h1>

        <p className="font-body text-sm text-ink/80 dark:text-cream/80 mb-6 leading-relaxed">
          Unlike the rescue rover, you seem to have traversed outside mapped coordinates. There is no compiled code or telemetry at this endpoint.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 border-2 border-ink dark:border-cream bg-sunny text-ink px-6 py-3 font-mono font-bold text-sm uppercase tracking-wider shadow-hard hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none transition-all"
        >
          <span>← Return to Home</span>
        </Link>
      </div>
    </main>
  );
}
