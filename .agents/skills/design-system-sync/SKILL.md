---
name: design-system-sync
description: Audits, validates, and synchronizes Design.md master tokens (colors, typography, 2px/4px/6px grid, dual mood black & white) with Tailwind CSS and Next.js React components.
---

# Design System Synchronization Skill — Vodafone Specification

Use this skill whenever creating or editing UI components in **Addis Foodies** to enforce strict compliance with `design.md` (Vodafone Master Specification).

## Color Tokens Checklist
- [ ] **Primary (`#0D0D0D` / `#FFFFFF`)**: Headlines and core text in White & Black moods.
- [ ] **Secondary (`#6D6D6D` / `#A3A3A3`)**: Borders, captions, and metadata.
- [ ] **Tertiary (`#E60000`)**: Vodafone Red — sole driver for interaction. Reserve it!
- [ ] **Neutral (`#F4F4F4` / `#0D0D0D`)**: Canvas foundation for White Mood and Black Mood.
- [ ] **Surface (`#FFFFFF` / `#171717`)**: Card surface background across light and dark modes.

## Typography Stack Checklist
- [ ] **Primary Body & Labels**: `Inter` (`font-sans font-body text-base`).
- [ ] **Display Headings**: `Archivo Black` (`font-display font-black text-6rem uppercase tracking-tight`).
- [ ] **Chapter Bands**: Solid 4px saturated Vodafone-red (`#E60000`) accent border on display sections.

## Audit Command
Run token verification script:
```bash
node scripts/sync_design_tokens.js
```
