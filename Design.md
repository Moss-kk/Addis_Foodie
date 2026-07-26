# ADDIS FOODIES — DESIGN SYSTEM & REUSABLE COMPONENT MANUAL

===================================================================================
ADDIS FOODIES DESIGN SYSTEM (v5.0 Official Master Design System Specification)
Design Tokens, 8px Baseline Grid, Typography Hierarchy, Amharic Localization & Component Library

## 1. Core Visual Tokens

### 1.1 Color Tokens
- **Primary Crimson (`#A81D1D`)**: Brand badge ring, primary CTA buttons, active navigation underline indicators, focused input borders.
- **Dark Crimson (`#8B1717`)**: Hero gradient overlay, active press states, dark CTA hover.
- **Warm Amber (`#F59E0B`)**: Price chips in ETB, rating star badges, tagline text, live festival highlights, AI search highlights.
- **Deep Charcoal (`#111827`)**: Brand logo block background, surface containers, primary body typography, dark cards.
- **Soft Cream (`#FAFAFA`)**: Page canvas background surface.
- **Emerald Green (`#10B981`)**: Real-time live status badges ("🚨 TODAY!! LIVE NOW").
- **Muted Steel (`#6B7280`)**: Secondary caption typography, structural dividers.

---

### 1.2 Typography Hierarchy & Font Stacks

#### Latin Font Stack:
- **Display Headings**: `Syne` (`font-syne font-black tracking-tight`).
- **Section Headings**: `Plus Jakarta Sans` (`font-extrabold text-xl sm:text-2xl text-[#111827]`).
- **Body Text**: `Plus Jakarta Sans` (`font-medium text-xs sm:text-sm text-zinc-600`).
- **Labels & Badges**: `Plus Jakarta Sans` (`font-extrabold text-[10px] sm:text-xs uppercase tracking-wider`).
- **Prices & Numbers**: `JetBrains Mono` (`font-mono font-black text-[#111827]`).
- **Locations & Landmarks**: `Plus Jakarta Sans` (`font-bold text-zinc-900`).

#### Amharic (Ethiopic) Font Stack:
- **Fallback Hierarchy**: `Noto Sans Ethiopic`, `Abyssinica SIL`, `system-ui`, `sans-serif`.
- **Amharic Line-Height Rule**: Increase line-height multiplier by `1.15x` for Ethiopic glyph readability.

---

### 1.3 8px Baseline Spacing Grid & Responsive Breakpoints
- **Base Grid Unit**: 8px baseline (`p-2` [8px], `p-4` [16px], `p-6` [24px], `p-8` [32px], `p-12` [48px]).
- **Card Grid Spacing**: `gap-6` (24px) for desktop grids, `gap-4` (16px) for mobile.
- **Responsive Breakpoints**:
  - `sm`: 640px (Mobile landscape / small tablets)
  - `md`: 768px (Tablets)
  - `lg`: 1024px (Laptops / Small desktops)
  - `xl`: 1280px (Standard desktops)

---

### 1.4 Motion & Animation Specification
- **Timing Curve**: `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out smooth curve).
- **Hover Transitions**: `duration-200` to `duration-300` for smooth scale (`scale-[1.02]`) and color shifts.
- **Pulse Alert**: `animate-pulse` on `Emerald Green` live event badges.

---

## 2. Reusable Component Specifications

### 2.1 Header & Navigation (`Header.tsx`)
- Rectangular Brand Badge Container (`#111827` background, `#A81D1D` 2px border ring).
- Full Navigation Items (`Home`, `Reviews`, `Restaurants`, `Events`, `Services`, `About`, `Contact`, `Work With Us`).
- Utility Group: Search icon trigger, Language Switcher (`EN | AM`), Collaboration modal trigger.

### 2.2 Hero Section (`page.tsx`)
- Headline: *"Discover Addis Ababa One Bite at a Time"*
- Action CTAs: `Explore Reviews` (Warm Amber `#F59E0B`) and `Work With Addis Foodies` (Glass white border).
- Prominent Search Bar with micro-stats row (`150,000+ Monthly Foodies | 320+ Curated Spots | 4 Key Hubs`).

### 2.3 Useful AI Craving Finder (`AiCravingFinder.tsx`)
- High-contrast dark charcoal card (`#111827`) with vibrant amber icon badge.
- Preset craving chips: *"I'm craving Kitfo"*, *"Coffee around Bole"*, *"Best fasting food"*, *"Affordable lunch under 300 Br"*, *"Juiciest Burgers"*, *"Spots in Piassa"*.

### 2.4 Review Card & Itemized Price Receipt (`ReviewCard.tsx` & `PriceReceiptModal.tsx`)
- Aspect-ratio 4:3 photography container.
- Warm Amber (`#F59E0B`) price badge overlay formatted with monospaced `JetBrains Mono` font.
- Bold location landmark pill, category tag, review caption with hashtag highlighting, Telegram/Instagram source platform pill buttons, and itemized price breakdown trigger.

### 2.5 Interactive Addis Ababa Discovery Map (`AddisMap.tsx`)
- Dark charcoal 2D canvas representing Bole, Kazanchis, Piassa, and Sarbet.
- Custom map pin triggers displaying price tooltips, dish icons, and instant filter synchronization.

### 2.6 Story Video Reel Player (`VideoReelModal.tsx`)
- 9:16 portrait video overlay player with audio toggle, dish tags, portion notes, and original social deep links.

### 2.7 Multi-Column Brand Footer (`Footer.tsx`)
- 4-column footer containing Brand Story, Directory Links, Legal/Press, Social Media Handles, and Newsletter Subscription Form.