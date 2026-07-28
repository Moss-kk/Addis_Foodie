import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import { LanguageProvider } from "../context/LanguageContext";
import { ThemeProvider } from "../context/ThemeContext";
import "./globals.css";

// Design.md: "Inter for clean UI controls"
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Design.md: "Bricolage Grotesque for massive magazine headlines"
const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-display-face",
  subsets: ["latin"],
  display: "swap",
});

// Design.md: "JetBrains Mono for pricing, ratings, and location metadata"
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono-face",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Addis Foodies — The Official Digital Home of Ethiopian Food Culture",
  description:
    "The premier editorial media brand and food review destination in Addis Ababa. Discover curated dining, street food gems, and price audits across Bole, Kazanchis, Piassa, and Sarbet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bricolageGrotesque.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col transition-colors duration-300"
        style={{
          backgroundColor: "var(--bg-app)",
          color: "var(--text-primary)",
          fontFamily: "var(--font-inter), Inter, system-ui, sans-serif",
        }}
      >
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
