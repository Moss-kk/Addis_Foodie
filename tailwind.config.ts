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
        vodafone: {
          primary: "#0D0D0D",
          secondary: "#6D6D6D",
          tertiary: "#E60000",
          neutral: "#F4F4F4",
          surface: "#FFFFFF",
          "on-primary": "#FFFFFF",
        },
        brand: {
          primary: "#0D0D0D",
          secondary: "#6D6D6D",
          tertiary: "#E60000",
          accent: "#E60000",
          bg: "#F4F4F4",
          dark: "#0D0D0D",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-display-face)", "Archivo Black", "sans-serif"],
        mono: ["var(--font-mono-face)", "JetBrains Mono", "monospace"],
      },
      borderRadius: {
        sm: "2px",
        md: "4px",
        lg: "6px",
      },
      spacing: {
        sm: "8px",
        md: "16px",
        lg: "32px",
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
