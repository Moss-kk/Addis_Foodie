import type { Metadata } from "next";
import { Outfit, Syne, JetBrains_Mono } from "next/font/google";
import { LanguageProvider } from "../context/LanguageContext";
import { ThemeProvider } from "../context/ThemeContext";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-primary",
  subsets: ["latin"],
  display: "swap",
  fallback: ["system-ui", "-apple-system", "sans-serif"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  fallback: ["monospace"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Addis Foodies — Discovering Foods in Addis",
  description: "A modern, visual-first food review aggregator for Addis Ababa. Find burgers, coffee, fasting, and traditional foods in Bole, Kazanchis, Piassa, and Sarbet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${syne.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans transition-colors duration-300 bg-[#FAF8F5] dark:bg-[#120907] text-zinc-900 dark:text-[#FFF8F6]">
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
