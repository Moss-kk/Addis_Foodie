# ADDIS FOODIES — DESIGN SYSTEM & REUSABLE COMPONENT MANUAL

===================================================================================
ADDIS FOODIES DESIGN SYSTEM (v5.0 Official Master Design System)
Obsidian Black Theme, Gold & Coral Accents, Outfit Typography & Component Specs

## 1. Core Visual Tokens

### 1.1 Color Tokens
- **Sticky Header Glass (`bg-black/95 backdrop-blur-md border-zinc-800`)**: Pure black sticky navigation header across all routes.
- **Soft Cream Canvas (`#FAFAFA`)**: Main page background surface across all routes.
- **Primary Crimson (`#A81D1D`)**: Brand logo badge ring, primary CTA buttons, active navigation underlines.
- **Dark Crimson (`#8B1717`)**: Hero gradient overlay, active press states, dark CTA hover.
- **Warm Amber (`#F59E0B`)**: Price chips in ETB, rating star badges, tagline text, live festival alerts.
- **Deep Charcoal (`#111827`)**: Primary body typography, footer canvas, dark feature section containers.
- **Emerald Green (`#10B981`)**: Real-time live status badges ("🚨 TODAY!! LIVE NOW").

---

### 1.2 Typography Hierarchy
- **Primary Body & UI**: `Outfit` (font-sans text-zinc-900 font-medium).
- **Display Headings**: `Syne` (font-syne font-black tracking-tight).
- **Section Headings**: `Syne` / `Outfit` (font-black text-xl sm:text-2xl text-[#111827]).
- **Labels & Badges**: `Outfit` (font-extrabold text-[10px] sm:text-xs uppercase tracking-wider).
- **Prices & Numbers**: `JetBrains Mono` (font-mono font-black text-[#F59E0B]).
- **Locations**: `Outfit` (font-bold text-zinc-800).

---

### 1.3 8px Spacing Grid & Breakpoints
- **Base Grid**: 8px baseline (`p-2`, `p-4`, `p-6`, `p-8`, `p-12`, `p-14`).
- **Card Spacing**: `gap-6` (24px) for desktop grids, `gap-4` (16px) for mobile.
- **Responsive Breakpoints**:
  - `sm`: 640px (Mobile landscape / small tablets)
  - `md`: 768px (Tablets)
  - `lg`: 1024px (Laptops / Small desktops)
  - `xl`: 1280px (Standard desktops)

---

## 2. Reusable Component Library Specifications

### 2.1 Header & Navigation (`Header.tsx`)
- Rectangular Brand Badge Container (`#121215` background, `#F59E0B` border ring).
- Full Navigation Items (`Home`, `About`, `Events`, `Services`, `Contact`).
- Utility Group: Language Switcher (`🇬🇧 EN | አማርኛ`), Warm Amber Work With Us CTA button.

### 2.2 Hero Section (`page.tsx`)
- Headline: *"Discover Addis Ababa One Bite at a Time"*
- Subtext: *"Trusted restaurant reviews, hidden gems, food festivals, and culinary experiences curated by Addis Foodies."*
- Action CTAs: `Explore Reviews` (Gold) and `Work With Addis Foodies` (Dark Glass/Zinc).

### 2.3 Useful AI Craving Finder (`AiCravingFinder.tsx`)
- Natural language preset craving chips: *"I'm craving Kitfo"*, *"Coffee around Bole"*, *"Best fasting food"*, *"Affordable lunch under 300 Br"*, *"Juiciest Burgers"*.

### 2.4 Review Card (`ReviewCard.tsx`)
- Aspect-ratio 4:3 photography container, price badge overlay in Warm Amber (`#F59E0B`), landmark location pill, category tag, review caption snippet, and itemized receipt trigger button.

### 2.5 Event Card (`EventsPage`)
- Festival poster image, live status badge (`🚨 TODAY!! LIVE NOW` vs `📅 UPCOMING FESTIVAL`), gregorian dates, location landmark, offerings tags, and sponsor trigger button.

### 2.6 Multi-Column Brand Footer (`Footer.tsx`)
- 4-column pure black footer containing Brand Story, Directory Links, For Restaurants Links, and Newsletter Subscription Form.
