import type { Metadata } from "next";
import { ExperienceView } from "./ExperienceView";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work Experience & Honors | Akshat Gupta",
  description:
    "Full-Stack Developer Intern at Orange Taxi, national INSPIRE Award for voice-controlled assistive wheelchair, and academic achievements.",
  alternates: {
    canonical: "/experience",
  },
  openGraph: {
    title: "Work Experience & Honors | Akshat Gupta",
    description:
      "Full-Stack Developer Intern at Orange Taxi, national INSPIRE Award, and technical achievements.",
    url: `${siteConfig.url}/experience`,
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function Page() {
  return <ExperienceView />;
}
