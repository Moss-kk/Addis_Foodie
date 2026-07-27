# ADDIS FOODIES DESIGN SYSTEM (v5.0 - Broken White & Flame Canvas)

## 1. Color System (Broken White & Flame Aesthetic)
- `--bg-primary`: `#FAF8F5` / `#FAFAFA` (Soft Warm Broken White Canvas)
- `--bg-surface`: `#FFFFFF` (Pure Soft White Card Surface with subtle warm border `rgba(229, 57, 53, 0.12)`)
- `--accent-red`: `#E53935` / `#A81D1D` (Vibrant Flame Ember Red / Primary Crimson; Hover: `#8B1717`)
- `--accent-amber`: `#FF8C00` / `#F59E0B` (Culinary Flame Gold / Fire Glow)
- `--text-primary`: `#111827` (Deep Warm Charcoal)
- `--text-secondary`: `#57534E` (Muted Warm Clay / Stone)
- `--accent-emerald`: `#10B981` (Live Status Green)

## 2. Typography Rules
- DO NOT use wide/extended display fonts for titles longer than 3 words.
- Primary Title Font: 'Outfit' or 'Plus Jakarta Sans', SemiBold/Bold (700/800), tight tracking (-0.02em).
- Body Font: 'Outfit' / 'Inter', Regular (400) / Medium (500) / SemiBold (600).
- Monospaced Price Font: 'JetBrains Mono', ExtraBold (800).

## 3. Layout Simplicity & Page Division
- **HOMEPAGE (`/`) MUST BE MINIMAL**: Hero Search + 9:16 Video Reels Feed + Top 4 Curated Spots + AI Craving Finder.
- **DEDICATED REVIEWS HUB (`/reviews`)**: Move heavy 6-column grid archives, neighborhood filters, and price range ETB selectors here.
- **ABOUT PAGE (`/about`)**: Editorial 4-step inspection process, 150,000+ monthly reach stats, and brand methodology.
- **EVENTS PAGE (`/events`)**: Kitfo Fest, rooftop takeovers, and festival tickets.
- **COMMERCIAL SERVICES (`/services` & `/collaborate`)**: B2B restaurant onboarding, menu launches, and food photography.

## 4. Component Rules
- **Restaurant Review Cards**: MAXIMUM 1 CTA button per card ('Read Review'). Remove extra buttons like 'Call' or 'Receipt' from card faces—place them on detail modals only.
- **Short-Form Video Reels**: 9:16 vertical portrait cards in smooth horizontal snap container with price badge overlay, dish title, and play video modal.