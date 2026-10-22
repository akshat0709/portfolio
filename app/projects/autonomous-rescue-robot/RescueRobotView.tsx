"use client";

import React from "react";
import Link from "next/link";
import { RobotDoodle } from "@/components/doodles/RobotDoodle";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function RescueRobotView() {
  return (
    <main id="main-content" className="min-h-screen pt-28 pb-20 selection:bg-sunny">
      <article className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-mono text-sm font-bold text-ink dark:text-cream hover:text-tomato transition-colors group"
            data-cursor-label="back"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            <span>Back to projects</span>
          </Link>
        </div>

        {/* Case Study Header */}
        <header className="border-2 border-ink dark:border-cream bg-white dark:bg-[#1E1E1E] p-6 sm:p-10 shadow-hard-lg dark:shadow-hard-dark-lg mb-10">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="font-mono text-xs font-bold px-2.5 py-0.5 bg-teal text-white border border-ink">
              Robotics &amp; Embedded
            </span>
            <span className="font-mono text-xs font-bold px-2.5 py-0.5 bg-cream dark:bg-ink text-ink dark:text-cream border border-ink dark:border-cream">
              Hardware + Firmware
            </span>
          </div>

          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-ink dark:text-cream tracking-tight mb-4">
            Autonomous Search and Rescue Robot
          </h1>

          <p className="font-body text-xl text-ink/80 dark:text-cream/80 leading-relaxed mb-6">
            Autonomous navigation system and hazardous telemetry unit engineered for rapid disaster zone reconnaissance in collapsed, GPS-denied environments.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4 border-t-2 border-ink/15 dark:border-cream/15">
            <MagneticButton
              href="https://github.com/akshat0709/AutonomousSearchAndRescueRobot"
              variant="secondary"
              cursorLabel="github"
              external={true}
              className="px-6 py-2.5 text-sm"
            >
              View GitHub Repository ↗
            </MagneticButton>

            <span className="font-mono text-xs text-ink/70 dark:text-cream/70">
              Domain: IoT, Embedded C/C++, Microcontrollers &amp; Sensors
            </span>
          </div>
        </header>

        {/* Project Meta Grid */}
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          <div className="p-4 border-2 border-ink dark:border-cream bg-cream dark:bg-[#181818] shadow-hard-sm">
            <span className="font-mono text-xs font-bold text-ink/70 dark:text-cream/70 block mb-1">
              Environment
            </span>
            <span className="font-display font-bold text-sm text-ink dark:text-cream">
              GPS-Denied Disaster Sites
            </span>
          </div>

          <div className="p-4 border-2 border-ink dark:border-cream bg-cream dark:bg-[#181818] shadow-hard-sm">
            <span className="font-mono text-xs font-bold text-ink/70 dark:text-cream/70 block mb-1">
              Core Sensors
            </span>
            <span className="font-display font-bold text-sm text-ink dark:text-cream">
              LiDAR, Ultrasonic, IMU, Gas
            </span>
          </div>

          <div className="p-4 border-2 border-ink dark:border-cream bg-cream dark:bg-[#181818] shadow-hard-sm">
            <span className="font-mono text-xs font-bold text-ink/70 dark:text-cream/70 block mb-1">
              Control Stack
            </span>
            <span className="font-display font-bold text-sm text-ink dark:text-cream">
              C/C++, FreeRTOS, Microcontrollers
            </span>
          </div>

          <div className="p-4 border-2 border-ink dark:border-cream bg-cream dark:bg-[#181818] shadow-hard-sm">
            <span className="font-mono text-xs font-bold text-ink/70 dark:text-cream/70 block mb-1">
              Telemetry
            </span>
            <span className="font-display font-bold text-sm text-ink dark:text-cream">
              Low-Bandwidth RF Link
            </span>
          </div>
        </section>

        {/* Visual Doodle Banner */}
        <div className="border-2 border-ink dark:border-cream bg-teal/10 dark:bg-[#151515] p-8 mb-12 flex flex-col items-center justify-center">
          <RobotDoodle className="w-40 h-40" />
          <span className="font-mono text-xs font-bold text-ink dark:text-cream mt-2 tracking-wide">
            All-Terrain Sensor Rig &amp; Mast Architecture
          </span>
        </div>

        {/* Content Section 1: The Problem */}
        <section className="space-y-6 mb-12 font-body text-base sm:text-lg text-ink/80 dark:text-cream/80 leading-relaxed">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink dark:text-cream tracking-tight border-b-2 border-ink/20 pb-3">
            01. The Problem: GPS-Denied Hazardous Navigation
          </h2>
          <p>
            During structural collapses, earthquakes, or chemical leaks, first responders cannot safely enter interior voids, and satellite GPS signals do not penetrate thick reinforced concrete and subterranean rubble. Remote-controlled drones frequently lose line-of-sight signal within seconds.
          </p>
          <p>
            This system was engineered as an autonomous tracked ground rover capable of penetrating structural rubble, performing real-time obstacle avoidance, and relaying environmental telemetry back to mission control without requiring an external pilot or satellite link.
          </p>

          {/* Placeholder 1 */}
          <div className="border-2 border-dashed border-ink dark:border-cream bg-cream dark:bg-[#1C1C1C] p-8 text-center my-8">
            <span className="font-mono text-xs font-bold px-2 py-1 bg-tomato text-white inline-block mb-2">
              [PHOTO: Robot Chassis &amp; Sensor Array]
            </span>
            <p className="font-mono text-xs text-ink/70 dark:text-cream/70 max-w-md mx-auto">
              Replace with high-res photograph of the tracked physical robot chassis, microcontroller mount, ultrasonic sensors, and antenna.
            </p>
          </div>
        </section>

        {/* Content Section 2: Sensor Fusion & Control Logic */}
        <section className="space-y-6 mb-12 font-body text-base sm:text-lg text-ink/80 dark:text-cream/80 leading-relaxed">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink dark:text-cream tracking-tight border-b-2 border-ink/20 pb-3">
            02. Autonomous Control Logic &amp; Path Planning
          </h2>
          <p>
            The robot uses reactive obstacle avoidance and local dead-reckoning algorithms to traverse unknown geometry:
          </p>
          <div className="bg-white dark:bg-[#1E1E1E] border-2 border-ink dark:border-cream p-6 shadow-hard-sm space-y-4">
            <div>
              <h3 className="font-mono text-xs font-bold text-teal mb-1">
                Sensor Fusion &amp; Distance Mapping
              </h3>
              <p className="text-sm sm:text-base">
                Combines multiple ultrasonic distance transducers with an Inertial Measurement Unit (IMU) to map physical obstructions within a 180-degree forward arc and monitor tilt thresholds to prevent roll-overs on rubble.
              </p>
            </div>
            <div className="border-t border-ink/15 dark:border-cream/15 pt-3">
              <h3 className="font-mono text-xs font-bold text-tomato mb-1">
                Dead-End Backtracking &amp; Escape Routines
              </h3>
              <p className="text-sm sm:text-base">
                When all forward paths are blocked below threshold clearance, the control logic executes a deterministic reverse-and-pivot scan to find the optimal exit vector without user input.
              </p>
            </div>
          </div>

          {/* Placeholder 2 */}
          <div className="border-2 border-dashed border-ink dark:border-cream bg-cream dark:bg-[#1C1C1C] p-8 text-center my-8">
            <span className="font-mono text-xs font-bold px-2 py-1 bg-sunny text-ink border border-ink inline-block mb-2">
              [SCREENSHOT: Real-Time Telemetry Dashboard]
            </span>
            <p className="font-mono text-xs text-ink/70 dark:text-cream/70 max-w-md mx-auto">
              Replace with capture of the serial telemetry stream or operator dashboard plotting sensor distance readings and attitude pitch/roll.
            </p>
          </div>
        </section>

        {/* Content Section 3: Telemetry Stream */}
        <section className="space-y-6 mb-12 font-body text-base sm:text-lg text-ink/80 dark:text-cream/80 leading-relaxed">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink dark:text-cream tracking-tight border-b-2 border-ink/20 pb-3">
            03. Low-Latency RF Telemetry Packet Architecture
          </h2>
          <p>
            Because high-bandwidth Wi-Fi drops through steel rebar, telemetry is packed into compact, byte-aligned binary packets transmitted over low-frequency radio channels (433MHz/868MHz band).
          </p>
          <div className="p-4 bg-cream dark:bg-[#151515] border-2 border-ink dark:border-[#333333] font-mono text-xs sm:text-sm">
            <span className="text-ink/70 dark:text-cream/70 block mb-2 font-bold">
              {"// Telemetry packet structure (24 bytes)"}
            </span>
            <div className="space-y-1">
              <div><strong className="text-tomato">uint16_t</strong> packet_id;</div>
              <div><strong className="text-teal">int16_t</strong> pitch, roll, yaw;</div>
              <div><strong className="text-sunny">uint16_t</strong> forward_dist_mm, left_dist_mm, right_dist_mm;</div>
              <div><strong className="text-ink dark:text-cream">uint8_t</strong> gas_hazard_level;</div>
              <div><strong className="text-ink dark:text-cream">uint8_t</strong> motor_status_flags;</div>
              <div><strong className="text-tomato">uint16_t</strong> crc16_checksum;</div>
            </div>
          </div>
        </section>

        {/* Bottom Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t-2 border-ink dark:border-cream pt-8">
          <Link
            href="/projects/orange-taxi"
            className="font-mono text-sm font-bold text-ink dark:text-cream hover:underline"
          >
            ← Previous: Orange Taxi
          </Link>
          <Link
            href="/projects/animal-detection"
            className="font-mono text-sm font-bold text-ink dark:text-cream hover:text-tomato flex items-center gap-2 group"
          >
            <span>Next Project: Locomotive Animal Detection</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </article>
    </main>
  );
}
