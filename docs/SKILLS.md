# ADDIS FOODIES — ENGINEERING STANDARDS & SKILLS MANUAL

## 1. Code Quality & Standards
- **Strict Typing**: Zero `any` types permitted. All interfaces must be defined in `src/types/`.
- **Server Components First**: Render static content and review layouts using React Server Components for sub-1.5s FCP on mobile networks. Use `"use client"` only for interactive states (search input, filter selection, modals).
- **Zero-Friction UX**: No public user authentication, login modals, or gated content.
- **Mobile First**: Touch targets must maintain a minimum bounding box of 48x48px. Filter bars must support smooth horizontal overflow scrolling without layout shift.

---

## 2. SEO & Performance Standards
- **JSON-LD Microdata**: Public review and event pages must render valid schema.org structured data.
- **Image Optimization**: WebP/AVIF format with explicit aspect ratios to eliminate cumulative layout shift (CLS).
- **Price Transparency**: Prices in Ethiopian Birr (`ETB`) must be rendered prominently using Amber Gold chips.

---

## 3. Brand Compliance Verification Check
- Warm Crimson: `#A81D1D`
- Amber Gold: `#F59E0B`
- Deep Charcoal: `#111827`
- Soft Cream: `#FAFAFA`
- Font Stack: Plus Jakarta Sans, Syne, JetBrains Mono.
