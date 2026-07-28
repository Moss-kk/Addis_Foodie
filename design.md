# DESIGN SYSTEM & ARCHITECTURE (design.md) — Addis Foodies

## 1. Brand Identity & Design Philosophy
Addis Foodies is the premiere digital food platform in Addis Ababa. The visual language merges Figma-grade UI component architecture with the editorial warmth of Claude and the orbital geometry of Mastercard.

- **Core Theme:** Dark Slate Luxury (`#0B0F17` floor) with warm Ethiopian Honey Gold accents (`#F59E0B`).
- **No Stark White Rule:** Pure `#FFFFFF` backgrounds are strictly banned on all routes (`/map`, `/events`, `/reviews`, `/services`). Light mode uses a soft cream-slate canvas (`#F8FAFC`).
- **Media Requirement:** 100% authentic local food media from `@addisfoodiess`. Generic stock images and filler template fluff (such as "Download Media Kit") are strictly prohibited.

## 2. Global CSS Token System (`globals.css`)

```css
:root {
  /* Day Mode (Soft Cream Slate) */
  --bg-app: #F8FAFC;
  --bg-surface: #FFFFFF;
  --border-subtle: #E2E8F0;
  --text-primary: #0F172A;
  --text-secondary: #475569;
  --accent-gold: #D97706;
}

[data-theme="dark"] {
  /* Night Mode (Deep Slate Canvas) */
  --bg-app: #0B0F17;
  --bg-surface: #161E2E;
  --bg-surface-elevated: #252D3E;
  --border-subtle: #1F293D;
  --border-active: #374151;
  --text-primary: #F8FAFC;
  --text-secondary: #94A3B8;
  --text-muted: #64748B;
  --accent-gold: #F59E0B;
}

/* Figma Geometry & Radius Rules */
:root, [data-theme="dark"] {
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --radius-stadium: 40px;
  --radius-pill: 9999px;
}
```

## 3. Homepage & Page Layout Structure

### A. Hero & Featured Reels Section
- **Reels First:** The homepage hero features a vertical video/Reels carousel embedded directly on the main feed, highlighting short-form food clips from `@addisfoodiess`.
- **Kitfo Festival Banner:** A dedicated, high-priority event card pinned near the top of the homepage highlighting upcoming major events (e.g. Kitfo Fest 2026).

### B. Cleaned Up Awards Page (/events#awards)
- **Link Matrix Architecture:** Removed long paragraphs, "Media Kits", and corporate boilerplate.
- **Minimalist Voting Cards:** Display simple category cards (*Best Kitfo in Addis*, *Best Gourmet Burger*, *Best Traditional Spot*, *Best Cafe*) with quick action links ("Vote Now →").

### C. Map Container (/map)
- **Dark Map Tiles:** Map containers render dark-styled map tiles matching `var(--bg-app)` (`#0B0F17`) to eliminate light glare in dark mode.
