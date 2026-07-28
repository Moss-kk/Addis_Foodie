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
        heritage: {
          primary: "#1A1C1E",
          secondary: "#6C7278",
          tertiary: "#B8422E",
          neutral: "#F7F5F2",
          surface: "#FFFFFF",
          "on-primary": "#FFFFFF",
        },
        brand: {
          primary: "#1A1C1E",
          secondary: "#6C7278",
          tertiary: "#B8422E",
          accent: "#B8422E",
          bg: "#F7F5F2",
          dark: "#1A1C1E",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Fraunces", "serif"],
        h1: ["var(--font-fraunces)", "Fraunces", "serif"],
        body: ["var(--font-public-sans)", "Public Sans", "sans-serif"],
        sans: ["var(--font-public-sans)", "Public Sans", "sans-serif"],
        label: ["var(--font-space-grotesk)", "Space Grotesk", "sans-serif"],
        mono: ["var(--font-mono-face)", "JetBrains Mono", "monospace"],
      },
      borderRadius: {
        sm: "2px",
        md: "4px",
        lg: "8px",
      },
      spacing: {
        sm: "8px",
        md: "16px",
        lg: "32px",
      },
      keyframes: {
        kenburns: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" },
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
