import type { Metadata } from "next";
import { HomeView } from "./HomeView";
import { siteConfig } from "@/lib/site";
import { getGitHubRepos } from "@/lib/github";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
  },
};

export default async function Page() {
  const repos = await getGitHubRepos();
  return <HomeView repos={repos} />;
}
