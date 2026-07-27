# ADDIS FOODIES — DESIGN SYSTEM & REUSABLE COMPONENT MANUAL

===================================================================================
ADDIS FOODIES DESIGN SYSTEM (v5.0 Stitch Master Specification)
Obsidian Black Theme, Primary Crimson & Warm Amber Accents, Syne & Outfit Typography, Phone-First UX
===================================================================================

## 1. Core Visual Tokens

### 1.1 Color Tokens
- **Sticky Header Glass (`bg-black/95 backdrop-blur-md border-zinc-800`)**: Pure black sticky navigation header with embedded search bar on top.
- **Soft Cream Canvas (`#FAFAFA`)**: Main page background surface across all routes.
- **Primary Crimson (`#A81D1D`)**: Brand logo badge ring, primary CTA buttons, active navigation underlines, focused input borders.
- **Dark Crimson (`#8B1717`)**: Hero gradient overlays, active press states, dark CTA hover.
- **Warm Amber (`#F59E0B`)**: Monospaced ETB price chips, rating star badges, tagline highlights, AI search highlights.
- **Deep Charcoal (`#111827`)**: Brand logo container, footer surface, primary body typography, dark section cards.
- **Emerald Green (`#10B981`)**: Real-time live status badges ("🚨 TODAY!! LIVE NOW").
- **Muted Steel (`#6B7280`)**: Secondary caption typography, structural dividers.

---

### 1.2 Mobile-First & Phone Usability Standards
- **Sticky Search on Top**: Integrated top header search box for immediate phone query access.
- **Mobile Bottom Navigation Bar**: Fixed bottom bar on `< sm` viewports for thumb-reachable navigation (Home, Reviews, Events, Services, Contact).
- **Direct Phone Booking Action**: Direct `tel:` call trigger on review cards (`📞 Call`).
- **Minimum Touch Target**: All interactive controls satisfy `min-h-[48px]` and `min-w-[48px]`.
- **Horizontal Craving Chips**: Smooth swipeable pill slider for instant food craving filtering on small mobile displays.

---

### 1.3 Typography Hierarchy & Font Stacks

#### Latin Font Stack:
- **Primary Body & UI**: `Outfit` (`font-sans font-medium text-zinc-900`).
- **Display Headings**: `Syne` (`font-syne font-black tracking-tight text-[#111827]`).
- **Prices & Numbers**: `JetBrains Mono` (`font-mono font-black text-[#F59E0B]`).
- **Locations & Tags**: `Outfit` (`font-bold text-zinc-700`).

#### Amharic (Ethiopic) Font Stack:
- **Fallback Hierarchy**: `Noto Sans Ethiopic`, `Abyssinica SIL`, `system-ui`, `sans-serif`.
- **Amharic Line-Height Rule**: Increase line-height multiplier by `1.15x` for Ethiopic glyph readability.

---

## 2. Reusable Component Specs & Templates Hub

### 2.1 Review Card Visual Sequence
1. **Photography Header**: 4:3 WebP media ratio.
2. **Restaurant Name**: Bold headline in `Syne`.
3. **Location & Category Pill**: Landmark location badge with pin icon (`📍 Bole`).
4. **Monospaced Price Badge**: Monospaced Warm Amber (`#F59E0B`) ETB price badge.
5. **Caption Snippet**: 2-line clamped review summary with hashtag highlights.
6. **Mobile Action Bar**: `📞 Call` direct trigger, `🧾 Itemized Receipt` trigger, and `Review ↗` details trigger.

### 2.2 Template Showcase Hub
- **Vendor Promotion Template**: Ready-to-use template for restaurant promotion & menu receipts.
- **Festival & Event Kit**: Comprehensive event ticket registration and live coverage showcase.
- **Curator Guide Template**: Downloadable PDF & interactive neighborhood food map template.