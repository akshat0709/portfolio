import type { Metadata } from "next";
import { ProjectsView } from "./ProjectsView";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects & Systems | Akshat Gupta",
  description:
    "Case studies for full-stack electric mobility platforms, autonomous search and rescue robotics, and real-time railway computer vision.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects & Systems | Akshat Gupta",
    description:
      "Case studies for full-stack electric mobility platforms, autonomous search and rescue robotics, and real-time railway computer vision.",
    url: `${siteConfig.url}/projects`,
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function Page() {
  return <ProjectsView />;
}
