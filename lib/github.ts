export interface GitHubRepo {
  name: string;
  description: string | null;
  language: string | null;
  stars: number;
  pushed_at: string;
  html_url: string;
  updatedRelative: string;
}

const ALLOWED_REPOS = [
  "orangeetaxi",
  "Orange-Taxi-Rider",
  "Orange-Taxi-Driver",
  "AutonomousSearchAndRescueRobot",
  "AnimalDetection",
  "BuyMeAChai",
  "portfolio",
];

export function formatRelativeTime(dateString: string): string {
  try {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.max(0, Math.floor((now.getTime() - date.getTime()) / 1000));

    if (diffInSeconds < 60) return "updated just now";
    const minutes = Math.floor(diffInSeconds / 60);
    if (minutes < 60) return `updated ${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `updated ${hours}h ago`;
    const days = Math.floor(hours / 24);
    if (days === 1) return "updated yesterday";
    if (days < 30) return `updated ${days} days ago`;
    const months = Math.floor(days / 30);
    if (months === 1) return `updated 1 month ago`;
    if (months < 12) return `updated ${months} months ago`;
    const years = Math.floor(days / 365);
    return `updated ${years}y ago`;
  } catch {
    return "recently updated";
  }
}

export const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  Python: "#3572A5",
  "C++": "#F34B7D",
  C: "#555555",
  Java: "#B07219",
  HTML: "#E34C26",
  CSS: "#563D7C",
  Default: "#179A94",
};

export async function getGitHubRepos(): Promise<GitHubRepo[]> {
  const headers: HeadersInit = {
    Accept: "application/vnd.github.v3+json",
    "User-Agent": "akshat-gupta-portfolio",
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `token ${process.env.GITHUB_TOKEN}`;
  }

  const results: GitHubRepo[] = [];

  for (const repoName of ALLOWED_REPOS) {
    try {
      const res = await fetch(`https://api.github.com/repos/akshat0709/${repoName}`, {
        headers,
        next: { revalidate: 3600 },
      });

      if (!res.ok) {
        // Silently skip if private, 404, rate-limited, etc.
        continue;
      }

      const data = await res.json();
      if (!data || !data.name || !data.html_url) {
        continue;
      }

      results.push({
        name: data.name,
        description: data.description || null,
        language: data.language || null,
        stars: Number(data.stargazers_count) || 0,
        pushed_at: data.pushed_at || data.updated_at || new Date().toISOString(),
        html_url: data.html_url,
        updatedRelative: formatRelativeTime(data.pushed_at || data.updated_at),
      });
    } catch {
      // Silently skip on error (network issue, rate limit, etc.)
      continue;
    }
  }

  return results;
}
