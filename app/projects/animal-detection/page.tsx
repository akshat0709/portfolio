import type { Metadata } from "next";
import { AnimalDetectionView } from "./AnimalDetectionView";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Animal Detection in Locomotive Tracks | Case Study",
  description:
    "Real-time computer vision system processing live locomotive cab video streams to detect track wildlife and prevent collisions.",
  alternates: {
    canonical: "/projects/animal-detection",
  },
  openGraph: {
    title: "Animal Detection in Locomotive Tracks | Akshat Gupta",
    description:
      "Real-time computer vision system processing live locomotive cab video streams to detect track wildlife and prevent collisions.",
    url: `${siteConfig.url}/projects/animal-detection`,
    siteName: siteConfig.name,
    type: "article",
  },
};

export default function Page() {
  return <AnimalDetectionView />;
}
