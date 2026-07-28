import type { Metadata } from "next";
import { Inter, Archivo_Black, JetBrains_Mono } from "next/font/google";
import { LanguageProvider } from "../context/LanguageContext";
import { ThemeProvider } from "../context/ThemeContext";
import "./globals.css";

// Vodafone Design.md: "Inter for body copy & labels"
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Vodafone Design.md: "Archivo Black for monumental display headlines"
const archivoBlack = Archivo_Black({
  weight: "400",
  variable: "--font-display-face",
  subsets: ["latin"],
  display: "swap",
});

// JetBrains Mono for pricing and codes
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
      className={`${inter.variable} ${archivoBlack.variable} ${jetbrainsMono.variable} h-full antialiased`}
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
