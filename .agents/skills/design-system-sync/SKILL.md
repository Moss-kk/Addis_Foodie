---
name: design-system-sync
description: Audits, validates, and synchronizes Design.md master tokens (colors, typography, 2px/4px/8px grid, Heritage black & limestone mood) with Tailwind CSS and Next.js React components.
---

# Design System Synchronization Skill — Heritage Specification

Use this skill whenever creating or editing UI components in **Addis Foodies** to enforce strict compliance with `design.md` (Heritage Master Specification).

## Color Tokens Checklist
- [ ] **Primary (`#1A1C1E`)**: Headlines and core text (Deep Ink).
- [ ] **Secondary (`#6C7278`)**: Borders, captions, and metadata.
- [ ] **Tertiary (`#B8422E`)**: Broad architectural accent — sole driver for interaction. Reserve it!
- [ ] **Neutral (`#F7F5F2`)**: Canvas foundation (Warm Limestone).
- [ ] **Surface (`#FFFFFF`)**: Card surface background.

## Typography Stack Checklist
- [ ] **Display**: `Fraunces` (`font-display font-medium text-4rem tracking-tight`).
- [ ] **Headings (H1)**: `Fraunces` (`h1 font-medium text-2.5rem`).
- [ ] **Body**: `Public Sans` (`font-body text-base line-height-1.6`).
- [ ] **Label**: `Space Grotesk` (`text-label text-0.75rem tracking-widest`).

## Audit Command
Run token verification script:
```bash
node scripts/sync_design_tokens.js
```
