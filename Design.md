# ADDIS FOODIES — DESIGN SYSTEM & REUSABLE COMPONENT MANUAL

===================================================================================
ADDIS FOODIES DESIGN SYSTEM (v4.0 Official Master Design System)
Design Tokens, 8px Grid, Typography Hierarchy & Component Library

## 1. Core Visual Tokens

### 1.1 Color Tokens
- **Primary Crimson (`#A81D1D`)**: Brand badge ring, primary CTA buttons, active navigation rings.
- **Dark Crimson (`#8B1717`)**: Hero gradient overlay, press states, dark CTA hover.
- **Warm Amber (`#F59E0B`)**: Price chips in ETB, rating star badges, tagline text, live festival alerts.
- **Deep Charcoal (`#111827`)**: Primary body typography, header logo block background, surface containers.
- **Soft Cream (`#FAFAFA`)**: Page canvas background surface.
- **Emerald Green (`#10B981`)**: Real-time live status badges ("🚨 TODAY!! LIVE NOW").

---

### 1.2 Typography Hierarchy
- **Display Headings**: `Syne` / `Plus Jakarta Sans` (font-extrabold tracking-tight).
- **Section Headings**: `Plus Jakarta Sans` (font-bold text-xl sm:text-2xl text-[#111827]).
- **Body Text**: `Plus Jakarta Sans` (font-medium text-xs sm:text-sm text-zinc-600).
- **Labels & Badges**: `Plus Jakarta Sans` (font-extrabold text-[10px] sm:text-xs uppercase tracking-wider).
- **Prices & Numbers**: `JetBrains Mono` (font-black text-brand-dark).
- **Locations**: `Plus Jakarta Sans` (font-bold text-zinc-900).

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
- Rectangular Brand Badge Container (`#111827` background, `#A81D1D` border ring).
- Full Navigation Items (`Home`, `Reviews`, `Restaurants`, `Events`, `Services`, `About`, `Contact`, `Work With Us`).
- Utility Group: Search icon trigger, Dark Mode indicator, Language Switcher (`EN | AM`).

### 2.2 Hero Section (`page.tsx`)
- Headline: *"Discover Addis Ababa One Bite at a Time"*
- Subtext: *"Trusted restaurant reviews, hidden gems, food festivals, and culinary experiences curated by Addis Foodies."*
- Action CTAs: `Explore Reviews` (Gold) and `Work With Addis Foodies` (Glass/White).

### 2.3 Useful AI Craving Finder (`AiCravingFinder.tsx`)
- Natural language preset craving chips: *"I'm craving Kitfo"*, *"Coffee around Bole"*, *"Best fasting food"*, *"Affordable lunch under 500 Br"*, *"Date night spots"*.

### 2.4 Review Card (`ReviewCard.tsx`)
- Aspect-ratio 4:3 photography container, price badge overlay in Warm Amber (`#F59E0B`), landmark location pill, category tag, review caption snippet, and original Telegram/Instagram link pill.

### 2.5 Event Card (`EventsPage`)
- Festival poster image, live status badge (`🚨 TODAY!! LIVE NOW` vs `📅 UPCOMING FESTIVAL`), gregorian & ethiopian dates, offerings tags, activities tags, and direct phone trigger buttons (`0966-55-00-00` / `0911-23-92-70`).

### 2.6 Multi-Column Brand Footer (`Footer.tsx`)
- 4-column footer containing Brand Story, Directory Links, Legal/Press, Social Media Handles, and Newsletter Subscription Form.