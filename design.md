# DESIGN SYSTEM & ARCHITECTURE (design.md) — Addis Foodies & Delivery

## 1. Brand Identity & Visual Philosophy
Addis Foodies unifies editorial food discovery (`@addis.foodie`) with high-contrast food delivery (`@addis.foodie.delivery`). Inspired by Uber's delivery geometry, Vercel's hairline precision, and Cursor's editorial typography:

- **Canvas Floor:** Void Black (`#000000`) in Dark Mode / Soft Cream Slate (`#F8FAFC`) in Light Mode.
- **Card Surfaces:** High-Contrast Dark Slate (`#111111`) with 1px subtle hairline borders (`#222222`).
- **Accent Restraint:** Warm Ethiopian Honey Gold (`#F59E0B`) is strictly reserved for active category tabs, star ratings, and event spotlight borders.
- **Brand Authority:** All reviews are published strictly under "Official Addis Foodies Curation".
- **Delivery Integration:** High-contrast Black & White cards featuring QR codes, store buttons (App Store / Google Play), and direct order CTAs.

---

## 2. Global CSS Token System (`globals.css`)

```css
:root {
  /* Day / Light Mode (Soft Cream Canvas) */
  --bg-app: #F8FAFC;
  --bg-surface: #FFFFFF;
  --bg-card-monochrome: #000000;
  --text-card-monochrome: #FFFFFF;
  
  --border-subtle: #E2E8F0;
  --text-primary: #0F172A;
  --text-secondary: #475569;
  --accent-gold: #D97706;
}

[data-theme="dark"] {
  /* Night / Dark Mode (Stark Void Black Canvas - Uber/Vercel Style) */
  --bg-app: #000000;
  --bg-surface: #111111;
  --bg-surface-elevated: #1A1A1A;
  
  --border-subtle: #222222;
  --border-active: #333333;
  
  --text-primary: #FFFFFF;
  --text-secondary: #A3A3A3;
  --accent-gold: #F59E0B;
}

/* Radius System (Uber & Vercel Hybrid) */
:root, [data-theme="dark"] {
  --radius-sm: 6px;                  /* Nav buttons & small inputs */
  --radius-md: 10px;                 /* Form inputs & modal containers */
  --radius-lg: 16px;                 /* Food Cards & Delivery Panels */
  --radius-stadium: 40px;            /* Hero Banners */
  --radius-pill: 9999px;             /* Rating Badges, Category Filters & CTAs */
}
```

---

## 3. Structural Layout & Page Rules

### A. Homepage (`/`)
- **Hero Banner:** Bold title (*"Discover & Order Food in Addis"*) with quick CTAs (*Explore Reviews*, *Download Delivery App*, *Kitfo Fest*).
- **Event Spotlight Banner:** A high-contrast black card with a 1px Gold (`#F59E0B`) border highlighting major events (**Kitfo Fest**, **Taste of Addis**, **Christmas Expo**).
- **Latest Official Reviews:** Display strictly the top 6 fresh reviews under "Official Addis Foodies Curation".
- **Delivery Teaser Card:** Uber-style black card introducing `@addis.foodie.delivery` with App Store / Google Play store links.

### B. Combined Reviews & Reels Feed (`/reviews`)
- **Unified Feed:** Merges written reviews and video Reels into one page.
- **Category Search Bar:** Sheger Gebeta style filter pills (*Burgers*, *Kitfo*, *Traditional*, *Cafes*, *Fasting*).
- **Inline Map Toggle:** A `Grid View` | `Map View` toggle button that reveals an interactive dark map with category pins directly on the page.

### C. Services & Delivery Hub (`/services`)
- **Addis Foodie Delivery Section:** Full showcase for the mobile delivery app with phone contact (`0966550000`), download links, and order options.
- **Catering Services:** Dedicated section for Addis Foodies event catering and promotional hosting.

### D. Simplified Awards Page (`/events#awards`)
- **Minimalist Matrix:** Direct category voting pills (*Best Kitfo*, *Best Burger*, *Best Traditional*) with quick action links (*"Vote Now →"*).