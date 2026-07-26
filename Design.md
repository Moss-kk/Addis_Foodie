# ADDIS FOODIES — DESIGN SYSTEM & REUSABLE COMPONENT MANUAL

===================================================================================
ADDIS FOODIES DESIGN SYSTEM (v5.0 Official Master Specification)
Design Tokens, 8px Baseline Grid, Typography Hierarchy, Full-Bleed Layouts & Touch Accessibility

## 1. Core Visual Tokens

### 1.1 Color Tokens
- **Primary Crimson (`#A81D1D`)**: Brand badge ring, primary CTA buttons, active navigation indicators, focused input borders.
- **Dark Crimson (`#8B1717`)**: Full-bleed Hero gradient overlay, active press states, dark CTA hover.
- **Warm Amber (`#F59E0B`)**: Price chips in ETB, rating star badges, tagline text, live festival highlights, AI search highlights.
- **Deep Charcoal (`#111827`)**: Brand logo block background, surface containers, primary body typography, dark cards.
- **Soft Cream (`#FAFAFA`)**: Page canvas background surface.
- **Emerald Green (`#10B981`)**: Real-time live status badges ("🚨 TODAY!! LIVE NOW").
- **Muted Steel (`#6B7280`)**: Secondary caption typography, structural dividers.

---

### 1.2 Layout & Grid Specifications (Full-Bleed 1440px Standard)
- **Full-Bleed Sections**: Backgrounds (Hero, Call-to-Action, Footer) MUST stretch 100% full-viewport width (`w-full`), using inner container wrappers.
- **Global Container Standard**: `max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12`.
- **Responsive Breakpoints**:
  - `320px`: Small Mobile (iPhone SE)
  - `375px`: Mobile Standard
  - `390px`: Mobile Medium
  - `430px`: Mobile Large (Pro Max)
  - `768px`: Tablet Portrait
  - `1024px`: Tablet Landscape / Laptop
  - `1440px`: Desktop Standard

---

### 1.3 Touch Accessibility & WCAG 2.2 AA Compliance
- **Minimum Touch Target**: All interactive controls (buttons, chips, toggles, close triggers) MUST satisfy `min-h-[48px]` and `min-w-[48px]`.
- **Focus Indicators**: All interactive elements must feature high-contrast visible focus rings (`focus-visible:ring-2 focus-visible:ring-[#A81D1D]`).
- **Color Contrast**: Secondary body typography must maintain minimum 4.5:1 contrast against background surface (`#4B5563` or `#374151` on light, `#E5E7EB` on dark).

---

### 1.4 Typography Hierarchy & Font Stacks

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

### 1.5 Framer Motion Animation Specification
- **Timing Curve**: `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out smooth curve).
- **Hover Transitions**: Scale lift (`scale-[1.02]`), subtle card elevation (`shadow-xl`), and color shifts.
- **Scroll Entrance**: Staggered fade and slide up (`y: 20 -> 0`, `opacity: 0 -> 1`).

---

## 2. Strict Visual Hierarchy Specification (Review Cards)

Every review card and listing MUST strictly prioritize details in this sequence:
1. **Photography**: 4:3 high-definition image header with WebP optimization.
2. **Restaurant Name**: Bold headline in `Syne` (`font-syne font-black text-[#111827]`).
3. **Location**: Landmark location pill with pin icon (`📍 Bole, near Edna Mall`).
4. **Price**: Monospaced Warm Amber (`#F59E0B`) ETB price badge.
5. **Review**: Clamped caption snippet.
6. **Actions**: Itemized receipt modal trigger & original social link.