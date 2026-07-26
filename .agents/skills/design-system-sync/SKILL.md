---
name: design-system-sync
description: Audits, validates, and synchronizes Design.md master tokens (colors, typography, 8px grid, i18n, receipts) with Tailwind CSS and Next.js React components.
---

# Design System Synchronization Skill

Use this skill whenever creating or editing UI components in **Addis Foodies** to enforce strict compliance with `Design.md` (v5.0 Official Master Design System Specification).

## Color Tokens Checklist
- [ ] **Sticky Header Glass (`bg-black/95 backdrop-blur-md border-zinc-800`)**: Full-width black header.
- [ ] **Soft Cream Canvas (`#FAFAFA`)**: Main page canvas background surface across all routes.
- [ ] **Primary Crimson (`#A81D1D`)**: Brand logo ring, primary CTAs, active navigation underlines.
- [ ] **Dark Crimson (`#8B1717`)**: Hero gradient overlay & CTA hover press states.
- [ ] **Warm Amber (`#F59E0B`)**: Price badges in ETB, rating star chips, tagline text, AI highlights.
- [ ] **Deep Charcoal (`#111827`)**: Footer canvas, dark feature containers, body headers.
- [ ] **Emerald Green (`#10B981`)**: Real-time live status badges (`🚨 TODAY!! LIVE NOW`).

## Typography Stack Checklist
- [ ] **Primary Body & UI**: `Outfit` (`font-sans font-medium text-zinc-900`).
- [ ] **Display Headings**: `Syne` (`font-syne font-black tracking-tight`).
- [ ] **Prices & Numbers**: `JetBrains Mono` (`font-mono font-black text-[#F59E0B]`).
- [ ] **Amharic Fallback**: Ensure Ethiopic line-height multiplier (`1.15x`).

## Audit Command
Run token verification script:
```bash
node scripts/sync_design_tokens.js
```
