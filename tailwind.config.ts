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
        sans: ["var(--font-primary)", "Inter", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-display)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      keyframes: {
        kenburns: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.12)" },
        },
      },
      animation: {
        kenburns: "kenburns 20s ease-out infinite alternate",
      },
    },
  },
  plugins: [],
};

export default config;

