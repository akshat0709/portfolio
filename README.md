# Akshat Gupta · Personal Portfolio

Hand-crafted personal portfolio website for **Akshat Gupta** — Full-stack developer and CS undergrad (IoT, Cybersecurity & Blockchain) at BMS College of Engineering, Bengaluru.

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**, styled in a playful indie-zine / editorial aesthetic featuring a cream/ink palette, tomato/sunny/teal accents, 2px ink borders, hard offset shadows, doodle SVGs, an interactive sticker pile, and a built-in keyboard command palette.

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
| `GITHUB_TOKEN` | *(Optional)* GitHub personal access token for higher rate limits on repo activity fetching | `ghp_...` |

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

## 🟢 Updating Availability

Akshat's availability status is rendered as a sticker badge in the navbar and mobile drawer.

To update:
1. Open [`lib/site.ts`](file:///Users/akshatgupta/Desktop/Akshat/lib/site.ts).
2. Edit the `availability` object:
```typescript
availability: {
  open: true, // set to false to completely hide the badge
  label: "Open to internships, 2027", // or "Open to early-career roles"
}
```
3. The indicator dot pulses once on load (respects `prefers-reduced-motion`) and links directly to the `#contact` form.

---

## ⌨️ Command Palette (⌘K / Ctrl+K)

The portfolio includes a zero-dependency, keyboard-accessible command palette ([`components/ui/CommandPalette.tsx`](file:///Users/akshatgupta/Desktop/Akshat/components/ui/CommandPalette.tsx)):
- **Shortcut:** Press <kbd>⌘</kbd> + <kbd>K</kbd> (Mac) or <kbd>Ctrl</kbd> + <kbd>K</kbd> (Windows/Linux), or click the **⌘K** button in the navigation bar. (Hint button is hidden on touch devices).
- **Fuzzy Search:** Type to instantly filter navigation targets, project case studies, and actions.
- **Commands Available:**
  - **Navigation:** Home, All Projects, Case Studies (Orange Taxi, Rescue Robot, Animal Detection), Skills Index, Experience, About, Contact.
  - **Actions:** Copy Email (with instant clipboard feedback), Download Resume PDF, Open GitHub profile, Open LinkedIn profile, Toggle Dark/Light mode.
- **Keyboard Controls:**
  - <kbd>↑</kbd> / <kbd>↓</kbd>: Navigate through command results.
  - <kbd>Enter</kbd>: Execute selected action or route navigation.
  - <kbd>Esc</kbd>: Close palette and restore focus to previous element.

---

## 🛠️ How to Add or Update Project Data

All portfolio projects are centralized in [`data/projects.ts`](file:///Users/akshatgupta/Desktop/Akshat/data/projects.ts).

1. Open `data/projects.ts`.
2. Add or modify an entry in the `projects` array conforming to the `Project` type:
```typescript
{
  slug: "my-new-project",            // URL slug: /projects/my-new-project
  number: "04",                      // Two-digit index
  title: "Project Title",            // Display title
  tagline: "Short 1-line punchy description.",
  category: "Full-Stack / Robotics / Mobile",
  stack: ["TypeScript", "Next.js", "PostgreSQL"],
  highlight: "Key feature or standout engineering achievement.",
  liveUrl: "https://example.com",     // Optional: omit if not live
  repoUrl: "https://github.com/...", // Optional: omit if private
  accentColor: "tomato",             // "tomato" | "sunny" | "teal"
  doodle: "taxi",                    // "taxi" | "robot" | "train"
  whatIdDoDifferently: "Reflections on architectural choices and future improvements...",
}
```
3. If creating a dedicated deep-dive case-study page, add `app/projects/[slug]/page.tsx` and `app/projects/[slug]/[Slug]View.tsx`.
4. Run `npm run build` — `sitemap.ts`, the home page 60-second version chips, and the command palette will automatically pick up the new project.

---

## 📸 Dropping in Screenshots for Case Studies

Each case-study page features an automatic screenshot gallery ([`components/ui/ProjectGallery.tsx`](file:///Users/akshatgupta/Desktop/Akshat/components/ui/ProjectGallery.tsx)) with a built-in keyboard-accessible lightbox:

1. Drop `.png`, `.jpg`, or `.webp` files into `public/screenshots/<slug>/`:
   - `public/screenshots/orange-taxi/`
   - `public/screenshots/autonomous-rescue-robot/`
   - `public/screenshots/animal-detection/`
2. Name files descriptively using kebab-case (e.g. `rider-booking-flow.png`, `realtime-dispatch-map.png`). The gallery transforms filenames into accessible alt captions (e.g. "Rider Booking Flow").
3. When images exist in the folder, the gallery renders them with `next/image` lazy loading and opens an accessible lightbox on click.
4. If no images exist, a clean `[SCREENSHOTS_PLACEHOLDER]` block is rendered automatically.

---

## 📐 Architecture Diagrams

The portfolio includes an inline SVG diagram component ([`components/ui/ArchitectureDiagram.tsx`](file:///Users/akshatgupta/Desktop/Akshat/components/ui/ArchitectureDiagram.tsx)):
- Styled with hand-crafted 2px ink strokes, doodle-like rounded corners (`rx="6"`), hard offset shadows, and color-coded subsystem nodes.
- Pass `nodes` and `edges` props to define system topology:
```tsx
<ArchitectureDiagram
  title="My System Architecture"
  subtitle="Client -> API -> Database"
  nodes={[
    { id: "client", label: "Client PWA", x: 30, y: 35, width: 210, height: 75, color: "#FFF6E5" },
    { id: "api", label: "Edge Functions", x: 310, y: 115, width: 230, height: 120, color: "#179A94", textColor: "#FFF" },
  ]}
  edges={[
    { from: "client", to: "api", label: "REST / WebSocket" }
  ]}
/>
```
- For pages awaiting architecture structure (such as the robot and animal detection), pass `isPlaceholder={true}` and `placeholderText="[DIAGRAM_PLACEHOLDER]"`.

---

## ♿ Accessibility & Performance

- **WCAG AA Compliance:** Strict color contrast verification across both light (`#FFF6E5`) and dark (`#121212`) modes:
  - Sunny `#FFD13B` always pairs with Ink `#1A1A1A` text (10.5:1 ratio).
  - Tomato `#FF4336` and Teal `#179A94` pair with White `#FFFFFF` text (> 4.5:1 ratio).
  - High-visibility focus ring on `:focus-visible` (`2px solid #FF4336`, `3px offset`).
- **Skip Link:** Accessible "Skip to main content →" anchor jumps keyboard focus straight to `<main id="main-content">`.
- **Keyboard Navigation:** 
  - Command palette: <kbd>↑</kbd>/<kbd>↓</kbd> arrows, <kbd>Enter</kbd> to execute, <kbd>Esc</kbd> to close.
  - Image lightbox: <kbd>←</kbd>/<kbd>→</kbd> arrows to navigate, <kbd>Esc</kbd> to close, focus trapped.
  - Sticker pile: <kbd>Tab</kbd> to focus, <kbd>Enter</kbd> or <kbd>Space</kbd> to bring to front.
- **Reduced Motion:** Fully honors `prefers-reduced-motion: reduce` by disabling animations, spring drags, and rotational wobbles.
- **First-Load JS:** **87.3 kB** shared across all static routes (well under the 120 kB threshold).
