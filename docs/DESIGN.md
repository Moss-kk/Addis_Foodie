# ADDIS FOODIES — DESIGN SYSTEM & REUSABLE COMPONENT MANUAL

===================================================================================
ADDIS FOODIES DESIGN SYSTEM (v5.0 Official Master Design System)
Obsidian Black Theme, Gold & Coral Accents, Outfit Typography & Component Specs

## 1. Core Visual Tokens

### 1.1 Color Tokens
- **Obsidian Canvas (`#09090B`)**: Full-page background surface across all pages (Home, About, Events, Services, Collaborate).
- **Sticky Header Glass (`bg-black/90 backdrop-blur-md border-zinc-800`)**: Pure black sticky navigation header.
- **Warm Amber (`#F59E0B`)**: Primary CTA buttons, brand logo ring, active navigation underlines, ETB price chips, rating badges.
- **Refined Fiery Coral (`#FF3B30`)**: Subtle micro highlight accents & flame tags (minimized from dominating blocks).
- **Deep Graphite Surface (`#121215` / `#18181C`)**: Dark glass container cards, modal bodies, and multi-column footer background.
- **Emerald Green (`#10B981`)**: Real-time live status badges ("🚨 TODAY!! LIVE NOW").

---

### 1.2 Typography Hierarchy
- **Primary Body & UI**: `Outfit` (font-sans text-zinc-100 font-medium).
- **Display Headings**: `Syne` (font-syne font-black tracking-tight text-white).
- **Section Headings**: `Syne` / `Outfit` (font-black text-xl sm:text-2xl text-zinc-100).
- **Labels & Badges**: `Outfit` (font-extrabold text-[10px] sm:text-xs uppercase tracking-wider).
- **Prices & Numbers**: `JetBrains Mono` (font-mono font-black text-[#F59E0B]).
- **Locations**: `Outfit` (font-bold text-zinc-300).

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
