import type { Metadata } from "next";
import { AboutView } from "./AboutView";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Akshat Gupta | CS Undergrad & Builder",
  description:
    "Undergraduate at BMS College of Engineering, Bengaluru (IoT, Cybersecurity & Blockchain). Academic record, engineering philosophy, and interactive sticker pile.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Akshat Gupta | CS Undergrad & Builder",
    description:
      "Undergraduate at BMS College of Engineering, Bengaluru (IoT, Cybersecurity & Blockchain).",
    url: `${siteConfig.url}/about`,
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function Page() {
  return <AboutView />;
}
