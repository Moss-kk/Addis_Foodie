# DESIGN SYSTEM & ARCHITECTURE (design.md) — Addis Foodies

## 1. Brand Identity & Design Philosophy
Addis Foodies is the premiere culinary curation platform and digital food guide for Addis Ababa. The visual design synthesizes the editorial warmth and typographic elegance of Claude with the luxurious orbital geometry, stadium shapes, and tactile pill containers of Mastercard.

- **Core Aesthetic:** Dark-Slate Luxury & Editorial Warmth with Warm Ethiopian Honey Gold accents (`#F59E0B` in Dark / `#D97706` in Day).
- **Surface Strategy:** Deep charcoal-slate floor (`#0B0F17` in Dark / `#F8FAFC` in Day) with elevated surface cards (`#161E2E` in Dark / `#FFFFFF` in Day).
- **The "No Stark White Glare" Rule:** Pure `#FFFFFF` as a full-page background container is strictly banned across all subroutes (`/map`, `/events`, `/reviews`, `/services`).
- **Authentic Media Requirement:** 100% authentic local Ethiopian culinary photography harvested directly from `@addisfoodiess` and local Telegram imports (`/telegram-imports/`). Generic stock photography is prohibited.

## 2. Integrated Design System Influences

| Source | Borrowed Principle | Implementation in Addis Foodies |
| :--- | :--- | :--- |
| **Claude** | Editorial Typographic Hierarchy & Warm Surface Contrast | Serif display headlines paired with high-contrast, readable sans body text. Warm honey-gold accents used with intentional restraint rather than loud rainbow colors. |
| **Mastercard** | Extreme Radii, Orbital Satellites & Pill Containers | Stadium shapes (`40px`) for hero containers, full pill geometry (`9999px`) for rating/price badges, and circular portraits with satellite CTAs for featured venues. |
| **Linear** | Precise Dark Depth & 1px Hairline Borders | Subtle 1px translucent borders (`#1F293D` in Dark / `#E2E8F0` in Day) prevent cards from blending into backgrounds without needing heavy drop shadows. |

## 3. Global CSS Token System (globals.css)

```css
:root {
  /* ==========================================================================
     DAY MODE TOKENS (Warm Slate / Cream Editorial)
     ========================================================================== */
  --bg-app: #F8FAFC;                 /* Soft Warm Cream Slate */
  --bg-surface: #FFFFFF;             /* Pure White Elevated Cards */
  --bg-surface-hover: #F1F5F9;       /* Hover Surface State */
  --bg-surface-elevated: #EDE8E1;    /* Special Highlighted Sections */
  
  --border-subtle: #E2E8F0;          /* Card & Input Outlines */
  --border-active: #CBD5E1;          /* Active Element Outlines */
  
  --text-primary: #0F172A;           /* Deep Charcoal Headings */
  --text-secondary: #475569;         /* Body Copy & Descriptions */
  --text-muted: #64748B;             /* Meta, Timestamps, Subtitles */
  
  --accent-gold: #D97706;            /* Rich Ethiopian Honey Amber */
  --accent-gold-hover: #B45309;      /* Darker Gold Pressed State */
  --accent-gold-glow: rgba(217, 119, 6, 0.12);
  --accent-red: #EF4444;             /* Urgent Notices / Flash Alerts */

  --shadow-card: 0px 4px 20px rgba(15, 23, 42, 0.05);
  --shadow-floating: 0px 12px 32px rgba(15, 23, 42, 0.10);
}

[data-theme="dark"] {
  /* ==========================================================================
     NIGHT MODE TOKENS (Deep Slate / Luxury Midnight Canvas)
     ========================================================================== */
  --bg-app: #0B0F17;                 /* Deep Charcoal Slate Floor */
  --bg-surface: #161E2E;             /* Elevated Slate Cards */
  --bg-surface-hover: #1E293B;       /* Interactive Surface Hover */
  --bg-surface-elevated: #252D3E;    /* Highlighted / Featured Cards */
  
  --border-subtle: #1F293D;          /* Card Dividers & Borders */
  --border-active: #374151;          /* Focused Element Outlines */
  
  --text-primary: #F8FAFC;           /* Crisp Headings */
  --text-secondary: #94A3B8;         /* Subtitles & Descriptions */
  --text-muted: #64748B;             /* Metadata & Timestamps */
  
  --accent-gold: #F59E0B;            /* Vibrant Ethiopian Honey Gold */
  --accent-gold-hover: #D97706;      /* Pressed Gold State */
  --accent-gold-glow: rgba(245, 158, 11, 0.15);
  --accent-red: #EF4444;             /* Urgent Notices / Flash Alerts */

  --shadow-card: 0px 8px 24px rgba(0, 0, 0, 0.35);
  --shadow-floating: 0px 16px 48px rgba(0, 0, 0, 0.50);
}

/* Common Layout Radii Tokens */
:root, [data-theme="dark"] {
  --radius-sm: 6px;                  /* Small Inline Buttons & Chips */
  --radius-md: 10px;                 /* Form Inputs & Small Modals */
  --radius-lg: 16px;                 /* Standard Food Cards */
  --radius-stadium: 40px;            /* Hero Banners & Large Featured Containers */
  --radius-pill: 9999px;             /* Rating Badges, Navigation Bar & Primary CTAs */
}
```

## 4. Typographic Scale & Editorial Hierarchy

To achieve Claude's literary voice, display headlines use an editorial font (`Bricolage Grotesque` / `Serif`) with negative letter-spacing (`-0.02em`), paired with a modern sans-serif for body copy.

```css
.font-display {
  font-family: var(--font-display-face), "Bricolage Grotesque", "Georgia", serif;
  font-weight: 400;
  letter-spacing: -0.02em;
}

.font-body {
  font-family: var(--font-inter), "Inter", -apple-system, sans-serif;
  font-weight: 400;
  line-height: 1.55;
}

.font-body-bold {
  font-family: var(--font-inter), "Inter", -apple-system, sans-serif;
  font-weight: 500;
}
```

| Applied Element | Size (Mobile / Desktop) | Line Height | Tracking |
| :--- | :--- | :--- | :--- |
| **Display Hero (H1)** | 48px / 64px | 1.05 | -0.03em |
| **Section Head (H2)** | 28px / 36px | 1.15 | -0.02em |
| **Card Heading (H3)** | 20px / 24px | 1.25 | -0.01em |
| **Eyebrow Label** | 12px / 14px | 1.00 | +0.06em |
| **Body Paragraph** | 15px / 16px | 1.55 | Normal |
| **Badge / Micro-Copy** | 12px / 13px | 1.00 | Normal |

## 5. Responsive Mobile & Desktop Layout Rules

- **Floating Navigation Bar (Pill Shape):**
  - **Desktop:** Floating pill container pinned `20px` below the top viewport margin. Rounded `var(--radius-pill)`. Houses logo, 5 primary links (Explore, Food Map, Reels, Events, About), theme toggle, and a single primary Work With Us CTA button.
  - **Mobile (≤ 768px):** Collapses to a sticky top floating pill showing logo, theme toggle button, and a circular hamburger button (48px × 48px touch target). Menu opens into a smooth full-screen modal drawer inheriting `var(--bg-app)`.
- **Grid & Card Spacing:**
  - **Mobile (< 768px):** 1-column review grid, 12px horizontal edge gutters, single-stack CTAs.
  - **Tablet (768px - 1024px):** 2-column food grid, asymmetric hero section.
  - **Desktop (> 1024px):** 3-column review grid, max content width capped at 1280px with symmetric outer breathing room.

## 6. Component Guidelines & Overlays

### A. Review Card Architecture (Mastercard Pill Style)
- **Image Aspect Ratio:** Enforced `aspect-[4/3]` with `object-fit: cover`.
- **Badge Placement (Overlay Rules):**
  - **Top-Right Pill:** Rating badge (`4.9 ★`) in `var(--bg-surface)` with a subtle 1px `var(--border-subtle)` outline and gold star accent (`var(--accent-gold)`).
  - **Bottom-Left Pill:** Combined location and price pill (`Bole Atlas • 580 Br`).
  - **Prohibited:** Banned watermarks, heavy black gradient overlays, or extra logos placed directly over food photos.
- **Text Truncation:** Card titles must never truncate awkwardly (e.g., preventing "Roadru..."). Use CSS flexbox with `line-clamp-2`.

### B. Featured Venue "Satellite" Circular Portrait
- **Frame:** Square photo cropped to a perfect circle (`border-radius: 50%`).
- **Satellite Micro-CTA:** A 48px circular white/slate button displaying an arrow icon (`→`) docked at the bottom-right perimeter, protruding ~40% outside the circle container.
- **Metadata Group:** Positioned below the circle with an eyebrow label (`• SPOTLIGHT`) and serif H3 venue title.

### C. Map Container (/map)
- **Background Blending:** Mapbox/Leaflet containers must load custom dark-styled tiles in Dark Mode matching `var(--bg-app)` (`#0B0F17`) to eliminate light flashbangs.
- **Pin Badges:** Color-coded pill markers for food categories (e.g., Gold = Traditional Habesha, Crimson = Gourmet Burgers, Teal = Cafes).

## 7. Quality Assurance Checklist (Do's & Don'ts)

### DO:
- Always use `var(--bg-app)` on every page root to ensure uniform Day/Night transitions.
- Restrain warm Ethiopian Honey Gold (`var(--accent-gold)`) to CTAs, active navigation items, star ratings, and eyebrow dots.
- Enforce full pill radii (`var(--radius-pill)`) on all badges, chip filters, primary buttons, and floating navigation bars.
- Ensure all photography uses authentic local food harvested from `@addisfoodiess`.
- Apply tight negative tracking (`-0.02em` to `-0.03em`) on serif display headings.

### DON'T:
- Don't use stark white (`#FFFFFF`) backgrounds on secondary routes in Dark Mode.
- Don't use generic stock photography from Unsplash.
- Don't overcrowd food photos with redundant logos or text watermarks.
- Don't drop harsh drop-shadows with opacities over 15% in Day Mode or 50% in Dark Mode.
- Don't allow card titles to cut off abruptly without proper line-clamping.
