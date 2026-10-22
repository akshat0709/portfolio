import type { Metadata } from "next";
import { OrangeTaxiView } from "./OrangeTaxiView";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Orange Taxi: Full-Stack Electric Ride-Hailing Platform",
  description:
    "Production PWA for a 100% electric cab fleet in Delhi NCR: Supabase Realtime dispatch engine, live coordinate tracking, and in-app dynamic UPI QR payments.",
  alternates: {
    canonical: "/projects/orange-taxi",
  },
  openGraph: {
    title: "Orange Taxi: Full-Stack Electric Ride-Hailing Platform | Akshat Gupta",
    description:
      "Production PWA for a 100% electric cab fleet in Delhi NCR: Supabase Realtime dispatch engine and dynamic UPI payments.",
    url: `${siteConfig.url}/projects/orange-taxi`,
    siteName: siteConfig.name,
    type: "article",
  },
};

export default function Page() {
  return <OrangeTaxiView />;
}
