# DESIGN SYSTEM & ARCHITECTURE (design.md) — Addis Foodies

## 1. Brand Identity & Color Palette
Addis Foodies bridges editorial food blogging (`@addis.foodie`) with high-contrast monochrome delivery (`@addis.foodie.delivery`).

- **Primary Canvas:** Deep Charcoal Slate (`#0B0F17`) in Dark Mode / Soft Cream Slate (`#F8FAFC`) in Light Mode.
- **Monochrome Delivery Palette:** Pure Black (`#000000`) and Crisp White (`#FFFFFF`) cards for delivery features matching official app branding.
- **Accent Color:** Warm Ethiopian Honey Gold (`#F59E0B`) used exclusively for active states, star ratings, and event spotlight borders.
- **Brand Authority:** All reviews are published strictly under "Official Addis Foodies Curation" (individual reviewer names removed).

## 2. Global CSS Token System (`globals.css`)

```css
:root {
  /* Light / Day Mode Tokens */
  --bg-app: #F8FAFC;
  --bg-surface: #FFFFFF;
  --bg-monochrome-card: #000000;
  --text-monochrome-card: #FFFFFF;
  --border-subtle: #E2E8F0;
  --text-primary: #0F172A;
  --text-secondary: #475569;
  --accent-gold: #D97706;
}

[data-theme="dark"] {
  /* Dark / Night Mode Tokens */
  --bg-app: #0B0F17;
  --bg-surface: #161E2E;
  --bg-monochrome-card: #111111;
  --text-monochrome-card: #FFFFFF;
  --border-subtle: #1F293D;
  --border-active: #374151;
  --text-primary: #F8FAFC;
  --text-secondary: #94A3B8;
  --accent-gold: #F59E0B;
}

/* Radius Rules */
:root, [data-theme="dark"] {
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --radius-stadium: 40px;
  --radius-pill: 9999px;
}
```

## 3. Structural Page Rules

### A. Homepage (/)
Display hero section, high-contrast Event Spotlight banner (Kitfo Fest, Taste of Addis), strictly the latest 6 official reviews, and an Addis Foodie Delivery teaser card.

### B. Reviews & Reels Page (/reviews)
Merge written reviews and video Reels into a unified feed. Category filter bar with an inline Map View Toggle (Sheger Gebeta style pin locations).

### C. Events & Voting (/events)
Display real local festival highlights (Taste of Addis, Kitfo Fest, Christmas Food Festival). Awards section simplified to direct category voting links.

### D. Services & Delivery (/services)
Showcase Addis Foodies Catering Services and the Addis Foodie Delivery App (`@addis.foodie.delivery`) with store download buttons.