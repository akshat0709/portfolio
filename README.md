# Akshat Gupta · Personal Portfolio

Hand-crafted personal portfolio website for **Akshat Gupta** — Full-stack developer and CS undergrad (IoT, Cybersecurity & Blockchain) at BMS College of Engineering, Bengaluru.

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**, styled in a playful indie-zine / editorial aesthetic featuring a cream/ink palette, tomato/sunny/teal accents, 2px ink borders, hard offset shadows, doodle SVGs, and an interactive sticker pile.

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js 18.17+ or 20+
- npm (or pnpm / yarn)

### 2. Installation
```bash
npm install
```

### 3. Environment Variables
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

Set the following variables:
| Variable | Description | Default |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_SITE_URL` | Canonical domain for metadata, sitemap, Open Graph, and JSON-LD schema | `http://localhost:3000` |
| `RESEND_API_KEY` | *(Optional)* Resend API key for sending contact form submissions | `re_...` |
| `CONTACT_TO_EMAIL` | *(Optional)* Destination email receiving contact submissions | `akshat070906@gmail.com` |

> **Note on Contact Form Fallback:** If `RESEND_API_KEY` is not provided or fails, the API route fails gracefully and the client automatically presents a direct `mailto:` fallback link with the user's prefilled message.

### 4. Running Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Production Build & Linting
```bash
npm run lint
npm run build
```

---

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx                     # Root layout (next/font, metadataBase, JSON-LD, Skip link, Cursor)
│   ├── page.tsx / HomeView.tsx        # Home page (Server metadata + Client view)
│   ├── projects/                      # Projects list & case studies
│   │   ├── page.tsx / ProjectsView.tsx
│   │   ├── orange-taxi/               # Flagship case study
│   │   ├── autonomous-rescue-robot/   # Rescue Robot case study
│   │   └── animal-detection/          # Animal Detection case study
│   ├── skills/                        # Skills index
│   ├── experience/                    # Experience timeline
│   ├── about/                         # Bio, philosophy & background
│   ├── not-found.tsx                  # Custom 404 page
│   ├── opengraph-image.tsx            # Dynamic 1200x630 OG image via next/og ImageResponse
│   ├── twitter-image.tsx              # Twitter card image
│   ├── icon.svg & apple-icon.tsx      # Favicon and Apple touch icons
│   ├── sitemap.ts & robots.ts         # Dynamic sitemap & robots.txt
│   └── api/contact/route.ts           # Contact API route (rate limited, honeypot, Resend email)
├── components/
│   ├── doodles/                       # Hand-crafted SVG doodles (TaxiDoodle, RobotDoodle, etc.)
│   └── ui/                            # Navbar, Footer (with contact form & Now strip), StickerPile, etc.
├── data/
│   └── projects.ts                    # Typed project directory driving the projects list & sitemap
├── lib/
│   └── site.ts                        # Centralized site constants & personal config
└── public/
    ├── Akshat_Gupta_Resume.pdf        # Downloadable 1-page PDF resume
    └── screenshots/                   # Production screenshots for case-study pages
```

---

## 🛠️ How to Add a New Project

All portfolio projects are centralized in [`data/projects.ts`](file:///Users/akshatgupta/Desktop/Akshat/data/projects.ts).

1. Open `data/projects.ts`.
2. Add a new object to the `PROJECTS` array conforming to the `Project` type:
```typescript
{
  slug: "my-new-project",            // URL slug: /projects/my-new-project
  number: "04",                      // Two-digit index
  title: "Project Title",            // Display title
  tagline: "Short 1-line punchy description.",
  category: "Full-Stack / Robotics / Mobile",
  stack: ["TypeScript", "Next.js", "PostgreSQL"],
  highlight: "Key feature or standout engineering achievement.",
  liveUrl: "https://example.com",     // Optional: omit or set to null if not live
  repoUrl: "https://github.com/...", // Optional: omit if private
  accentColor: "tomato",             // "tomato" | "sunny" | "teal"
  doodle: "taxi",                    // "taxi" | "robot" | "train" | "wheelchair" | "chai"
  featured: true,                    // Appears on home page if true
}
```
3. If you want a dedicated deep-dive case-study page, create `app/projects/[slug]/page.tsx` and `app/projects/[slug]/[Slug]View.tsx` matching the structure of `app/projects/orange-taxi/`.
4. Run `npm run build` — `sitemap.ts` and the projects index will automatically include the new project.

---

## 📸 Adding Screenshots to Case Studies

The flagship case study (`/projects/orange-taxi`) automatically detects and showcases production screenshots using `next/image` with responsive blur-up placeholders.

To add or update screenshots:
1. Save optimized `.png`, `.jpg`, or `.webp` images into `public/screenshots/`.
2. Use descriptive kebab-case names, for example:
   - `orange-taxi-1.png` (Rider booking flow / dispatch map)
   - `orange-taxi-2.png` (Driver real-time interface / earnings)
   - `orange-taxi-3.png` (Dynamic UPI QR payment handover)
3. Recommended resolution: **1600×1000px** or **1920×1080px** (16:10 or 16:9 aspect ratio), compressed under **350KB** each.
4. When images exist in `public/screenshots/`, the gallery automatically replaces the fallback interactive schematic cards.

---

## ♿ Accessibility & Performance

- **WCAG AA Compliance:** Strict color contrast verification across both light (`#FFF6E5`) and dark (`#121212`) modes:
  - Sunny `#FFD13B` always pairs with Ink `#1A1A1A` text (10.5:1 ratio).
  - Tomato `#FF4336` and Teal `#179A94` pair with White `#FFFFFF` text (> 4.5:1 ratio).
  - High-visibility focus ring on `:focus-visible` (`2px solid #FF4336`, `3px offset`).
- **Skip Link:** Accessible "Skip to main content →" anchor jumps keyboard focus straight to `<main id="main-content">`.
- **Keyboard Navigation:** Sticker pile is operable via keyboard (`Tab` to focus, `Enter` or `Space` to cycle z-index).
- **Reduced Motion:** Fully honors `prefers-reduced-motion: reduce` by disabling floating animations, spring drags, and rotational wobbles.
- **Smart Cursor:** Custom cursor blob automatically hides on keyboard navigation (`Tab`), never intercepts pointer clicks (`pointer-events-none`), and re-enables on mouse move.
- **Shared First-Load JS:** Under **88 kB** shared across all static routes, exceeding the 120 kB target.
