---
name: design-system-sync
description: Audits, validates, and synchronizes Design.md master tokens (colors, typography, 8px grid, i18n, receipts) with Tailwind CSS and Next.js React components.
---

# Design System Synchronization Skill

Use this skill whenever creating or editing UI components in **Addis Foodies** to enforce strict compliance with `Design.md` (v5.0 Official Master Design System Specification).

## Color Tokens Checklist
- [ ] **Primary Crimson (`#A81D1D`)**: Brand logo ring, primary CTAs, active nav links.
- [ ] **Dark Crimson (`#8B1717`)**: Hero gradient overlay & CTA hover press states.
- [ ] **Warm Amber (`#F59E0B`)**: Price badges in ETB, rating star chips, AI highlights.
- [ ] **Deep Charcoal (`#111827`)**: Brand logo block, dark containers, primary body text.
- [ ] **Soft Cream (`#FAFAFA`)**: Main page canvas surface background.
- [ ] **Emerald Green (`#10B981`)**: Real-time live status badges (`🚨 TODAY!! LIVE NOW`).

## Typography Stack Checklist
- [ ] **Display Headings**: `font-syne font-black tracking-tight` (`Syne`).
- [ ] **Section Headings**: `Plus Jakarta Sans` (`font-extrabold text-xl sm:text-2xl text-[#111827]`).
- [ ] **Prices & Numbers**: `JetBrains Mono` (`font-mono font-black text-[#111827]`).
- [ ] **Amharic Fallback**: Ensure Ethiopic line-height multiplier (`1.15x`).

## Audit Command
Run token verification script:
```bash
node scripts/sync_design_tokens.js
```
