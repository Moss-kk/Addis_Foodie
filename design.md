# DESIGN SYSTEM & ARCHITECTURE (design.md) — Addis Foodies

## 1. Visual Identity & Brand Philosophy
Addis Foodies is the premiere culinary guide for Addis Ababa. The visual design feels editorial, restrained, and authentic—like a luxury food journal rather than a chaotic review app.

- **Theme Base:** Dark-first, slate-toned palette (`#0B0F17`) with warm Ethiopian Honey Gold accents (`#F59E0B`).
- **No Pure White Containers:** Pure white background (`#FFFFFF`) is BANNED for page containers across all routes. All page wrappers inherit `#0B0F17`.
- **Image Treatment:** 100% authentic local Ethiopian culinary photography harvested from `@addisfoodiess` and local Telegram imports (`/telegram-imports/` and `/images/`). No generic stock photos.

## 2. Global Color Palette & Token System
```css
:root {
  /* Dark Slate Default Tokens */
  --bg-app: #0B0F17;           /* Deep Charcoal Slate Page Floor */
  --bg-canvas: #0B0F17;        /* Unified Page Floor */
  --bg-surface: #161E2E;       /* Card & Modal Container Background */
  --bg-surface-hover: #1E293B; /* Interactive Surface Hover */
  --bg-inset: #1F293D;         /* Inset Chips & Filter Bars */

  --border-subtle: #1F293D;    /* Card & Divider Borders */
  --border-hairline: #1F293D;  /* Alignment Dividers */
  --border-active: #374151;    /* Focused Component Borders */

  --text-primary: #F8FAFC;     /* Off-White Headings & Main Titles */
  --text-secondary: #94A3B8;   /* Soft Slate Subtitles & Descriptions */
  --text-muted: #64748B;       /* Metadata, Distances & Timestamps */

  --accent-gold: #F59E0B;      /* Warm Ethiopian Honey Gold */
  --accent-amber: #F59E0B;     /* Ratings & Badges */
  --accent-gold-glow: rgba(245, 158, 11, 0.12);
  --accent-brand: #EF4444;     /* Urgent Alerts / Brand Red */
  --accent-brand-hover: #DC2626;
  --accent-verified: #10B981;  /* Emerald Verified Badge */

  --radius-card: 12px;
  --radius-pill: 9999px;
  --shadow-elevation: rgba(0, 0, 0, 0.5);
}
```

## 3. Page Layout & Background Consistency Rules
- **Universal Page Floor:** Every page wrapper MUST inherit `bg-app` (`#0B0F17`).
- **No White Overrides:** Subpages (`/map`, `/events`, `/reviews`, `/services`, `/about`, `/collaborate`, `/videos`) CANNOT override the root background with `bg-white` or light grays.
- **Theme Variables:** Theme toggle modifies CSS variables at `:root` level only.

## 4. Component Rules & Badges
- **Review Cards:** Clean 100% opacity photos. Single rating pill badge (top-right, `#F59E0B` warm gold) and single price/location pill badge (bottom-left). Overlapping watermarks and cluttered badges are BANNED.
- **Map View:** Interactive map renders with dark-styled tiles matching `#0B0F17`.
- **Typography:** Editorial sans/display font combination with tight tracking (`-0.02em`).
- **Header Navigation:** Streamlined to 5 primary links on desktop with secondary items moved into clean drawer actions.
