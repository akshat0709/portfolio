import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FFF6E5",
        ink: "#1A1A1A",
        "ink-deep": "#121212",
        "ink-card": "#1E1E1E",
        "ink-border": "#333333",
        tomato: "#FF4336",
        sunny: "#FFD13B",
        teal: "#179A94",
        "cream-light": "#FFFDF9",
        paper: "#FFFFFF",
      },
      fontFamily: {
        display: ["var(--font-display)", "Space Grotesk", "sans-serif"],
        body: ["var(--font-body)", "Plus Jakarta Sans", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      boxShadow: {
        hard: "4px 4px 0px #1A1A1A",
        "hard-sm": "2px 2px 0px #1A1A1A",
        "hard-lg": "6px 6px 0px #1A1A1A",
        "hard-xl": "8px 8px 0px #1A1A1A",
        "hard-dark": "4px 4px 0px #FFF6E5",
        "hard-dark-sm": "2px 2px 0px #FFF6E5",
        "hard-dark-lg": "6px 6px 0px #FFF6E5",
      },
      borderRadius: {
        zine: "16px",
      },
      borderWidth: {
        ink: "2px",
      },
      keyframes: {
        wobble: {
          "0%, 100%": { transform: "rotate(-1deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
      },
      animation: {
        wobble: "wobble 0.3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
