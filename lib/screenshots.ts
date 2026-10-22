import fs from "fs";
import path from "path";

export interface ProjectScreenshot {
  src: string;
  alt: string;
  filename: string;
}

export function getProjectScreenshots(slug: string): ProjectScreenshot[] {
  try {
    const dir = path.join(process.cwd(), "public", "screenshots", slug);
    if (!fs.existsSync(dir)) {
      return [];
    }

    const files = fs.readdirSync(dir);
    const validExts = new Set([".png", ".jpg", ".jpeg", ".webp", ".svg", ".avif"]);

    return files
      .filter((file) => validExts.has(path.extname(file).toLowerCase()))
      .sort()
      .map((file) => {
        const rawName = path.parse(file).name;
        // Clean slug-style filenames into human-readable alt labels
        const formatted = rawName
          .split(/[-_]+/)
          .filter(Boolean)
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");

        return {
          src: `/screenshots/${slug}/${file}`,
          alt: formatted,
          filename: file,
        };
      });
  } catch {
    return [];
  }
}
