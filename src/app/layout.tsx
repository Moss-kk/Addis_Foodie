import type { Metadata } from "next";
import { Fraunces, Public_Sans, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { LanguageProvider } from "../context/LanguageContext";
import { ThemeProvider } from "../context/ThemeContext";
import { SavedProvider } from "../context/SavedContext";
import "./globals.css";

// Heritage Design.md: Display & H1 Headlines (Fraunces serif)
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

// Heritage Design.md: Body copy (Public Sans)
const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

// Heritage Design.md: Labels & Metadata (Space Grotesk)
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

// JetBrains Mono for pricing and itemized codes
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono-face",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Addis Foodie — Journalistic Gravitas & Ethiopian Culinary Heritage",
  description:
    "Architectural minimalism meets journalistic gravitas. The premier editorial media brand and food review destination in Addis Ababa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${publicSans.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col transition-colors duration-300"
        style={{
          backgroundColor: "var(--bg-app)",
          color: "var(--text-primary)",
          fontFamily: "var(--font-public-sans), 'Public Sans', system-ui, sans-serif",
        }}
      >
        <ThemeProvider>
          <LanguageProvider>
            <SavedProvider>
              <div className="min-h-screen bg-[var(--bg-app)] text-[var(--text-primary)] overflow-x-hidden relative flex flex-col selection:bg-[#B8422E] selection:text-white">
                {children}
              </div>
            </SavedProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
