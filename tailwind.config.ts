import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#A81D1D",      // Primary Crimson
          darkCrimson: "#8B1717",  // Dark Crimson
          accent: "#F59E0B",       // Warm Amber
          bg: "#FAFAFA",           // Soft Cream
          dark: "#111827",         // Deep Charcoal
          emerald: "#10B981",      // Emerald Green
        },
      },
      fontFamily: {
        sans: ["var(--font-primary)", "Plus Jakarta Sans", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-display)", "Syne", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;

