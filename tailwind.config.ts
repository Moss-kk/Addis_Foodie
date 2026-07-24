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
          primary: "#A81D1D", // Warm Crimson
          accent: "#F59E0B",  // Amber Gold
          bg: "#FAFAFA",      // Soft Cream
          dark: "#111827",    // Dark Charcoal
        },
      },
      fontFamily: {
        sans: ["var(--font-primary)", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-display)", "Plus Jakarta Sans", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
