import type { Metadata } from "next";
import { RescueRobotView } from "./RescueRobotView";
import { siteConfig } from "@/lib/site";
import { getProjectScreenshots } from "@/lib/screenshots";

export const metadata: Metadata = {
  title: "Autonomous Search and Rescue Robot | Case Study",
  description:
    "Hazardous terrain exploration rover with obstacle detection sensor fusion, real-time RF telemetry, and path planning in GPS-denied catastrophe zones.",
  alternates: {
    canonical: "/projects/autonomous-rescue-robot",
  },
  openGraph: {
    title: "Autonomous Search and Rescue Robot | Akshat Gupta",
    description:
      "Hazardous terrain exploration rover with sensor fusion and path planning in GPS-denied disaster environments.",
    url: `${siteConfig.url}/projects/autonomous-rescue-robot`,
    siteName: siteConfig.name,
    type: "article",
  },
};

export default function Page() {
  const screenshots = getProjectScreenshots("autonomous-rescue-robot");

  return <RescueRobotView screenshots={screenshots} />;
}
