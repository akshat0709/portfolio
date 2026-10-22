"use client";

import React from "react";
import Link from "next/link";
import { TaxiDoodle } from "@/components/doodles/TaxiDoodle";
import { RobotDoodle } from "@/components/doodles/RobotDoodle";
import { TrainDoodle } from "@/components/doodles/TrainDoodle";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { EarlyWorkSection } from "@/components/ui/ExperienceAndRecognition";
import { projects, Project } from "@/data/projects";

function getProjectDoodle(doodle: Project["doodle"]) {
  switch (doodle) {
    case "taxi":
      return <TaxiDoodle className="w-36 h-24" />;
    case "robot":
      return <RobotDoodle className="w-28 h-28" />;
    case "train":
      return <TrainDoodle className="w-36 h-24" />;
  }
}

export function ProjectsView() {
  return (
    <main className="min-h-screen pt-28 pb-20 selection:bg-sunny">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-sm font-bold text-ink dark:text-cream hover:text-tomato transition-colors group"
            data-cursor-label="home"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            <span>Back to home</span>
          </Link>
        </div>

        {/* Page Header */}
        <header className="border-2 border-ink dark:border-cream bg-white dark:bg-[#1E1E1E] p-6 sm:p-10 shadow-hard mb-12">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="font-mono text-xs font-bold px-2.5 py-0.5 bg-tomato text-white border border-ink">
              Projects Archive
            </span>
            <span className="font-mono text-xs font-bold px-2.5 py-0.5 bg-sunny text-ink border border-ink">
              {projects.length} Production Systems
            </span>
          </div>

          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-ink dark:text-cream tracking-tight mb-4">
            Engineered Systems &amp; Case Studies
          </h1>

          <p className="font-body text-lg text-ink/80 dark:text-cream/80 max-w-2xl leading-relaxed">
            Every project detailed here was built to operate in real conditions: from live electric fleet dispatching in Delhi to autonomous search rovers that function in GPS-denied catastrophe zones.
          </p>
        </header>

        {/* Project Cards Stack */}
        <div className="space-y-12">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              slug={project.slug}
              number={project.number}
              title={project.title}
              tagline={project.tagline}
              category={project.category}
              stack={project.stack}
              highlight={project.highlight}
              liveUrl={project.liveUrl}
              repoUrl={project.repoUrl}
              accentColor={project.accentColor}
              initialRotation={project.initialRotation ?? 0}
              doodle={getProjectDoodle(project.doodle)}
            />
          ))}
        </div>

        {/* Early Experiments Strip */}
        <div className="mt-12">
          <EarlyWorkSection />
        </div>
      </div>
    </main>
  );
}
