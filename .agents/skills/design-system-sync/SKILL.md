---
name: design-system-sync
description: Audits, validates, and synchronizes Design.md master tokens (colors, typography, 8px grid, i18n, receipts) with Tailwind CSS and Next.js React components.
---

# Design System Synchronization Skill

Use this skill whenever creating or editing UI components in **Addis Foodies** to enforce strict compliance with `Design.md` (v5.0 Official Master Design System Specification).

## Color Tokens Checklist
- [ ] **Obsidian Canvas (`#09090B`)**: Full-page background canvas across all pages (Home, About, Events, Services, Collaborate).
- [ ] **Sticky Header Glass (`bg-black/90 backdrop-blur-md border-zinc-800`)**: Full-width black header.
- [ ] **Warm Amber Primary (`#F59E0B`)**: Brand logo accent ring, primary CTAs, active nav indicators, price chips in ETB, rating star badges.
- [ ] **Refined Fiery Coral (`#FF3B30`)**: Subtle highlight accents & micro flame badges (minimized from dominating blocks).
- [ ] **Deep Graphite Surface (`#121215` / `#18181B`)**: Dark glass container cards, modal bodies, and footer canvas.
- [ ] **Emerald Green (`#10B981`)**: Real-time live status badges (`🚨 TODAY!! LIVE NOW`).

## Typography Stack Checklist
- [ ] **Primary Body & UI**: `Outfit` (`font-sans font-medium text-zinc-100`).
- [ ] **Display Headings**: `Syne` (`font-syne font-black tracking-tight text-white`).
- [ ] **Prices & Numbers**: `JetBrains Mono` (`font-mono font-black text-[#F59E0B]`).
- [ ] **Amharic Fallback**: Ensure Ethiopic line-height multiplier (`1.15x`).

## Audit Command
Run token verification script:
```bash
node scripts/sync_design_tokens.js
```
