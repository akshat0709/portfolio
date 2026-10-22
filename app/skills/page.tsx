import type { Metadata } from "next";
import { SkillsView } from "./SkillsView";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Technical Index | Akshat Gupta",
  description:
    "Typographic index of programming languages, web & PWA architectures, backend & cloud systems, cybersecurity tooling, and IoT embedded hardware.",
  alternates: {
    canonical: "/skills",
  },
  openGraph: {
    title: "Technical Index | Akshat Gupta",
    description:
      "Typographic index of programming languages, systems, and embedded hardware.",
    url: `${siteConfig.url}/skills`,
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function Page() {
  return <SkillsView />;
}
