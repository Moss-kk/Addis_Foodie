# Addis Foodies — Design System & Attention Engineering Manual

## 1. Core Philosophy: Zero-Friction Attention Loop
Every millisecond of delay or visual noise costs user engagement. The Addis Foodies interface is built on three core psychological pillars:
1. **Dopamine Priming (Visual Heavy):** Food discovery is emotional and visual. High-contrast, appetite-inducing media occupies 65% of screen real estate above the fold.
2. **Cognitive Load Reduction:** No signups, no modal popups, no hidden navigation. The user reaches content in **< 1 second**.
3. **Frictionless Action (The Social Flywheel):** Every review card provides immediate, one-tap paths to external Telegram channels and Instagram posts.

---

## 2. Brand Identity & Assets
* **Logo Asset Path:** `/public/images/logo.png`
* **Logo Style:** Circular dark badge featuring clean white cutlery (fork, knife, spoon) with bold brand typography.
* **Tagline:** *"Discovering Foods in Addis"*

---

## 3. Typography & Font Stack
To ensure instant readability on low-end mobile devices and high-DPI screens alike, we use a hyper-legible, performance-first font stack.

```css
/* Font Definitions */
--font-primary: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
--font-display: 'Syne', 'Plus Jakarta Sans', sans-serif;
--font-mono: 'JetBrains Mono', monospace;
# UI Design Principles

The Addis Foodies interface must communicate food before functionality.

Visual hierarchy:

1 Restaurant Photography

2 Location

3 Price

4 Restaurant Name

5 Category

6 Review

7 Social Links

Every card must immediately answer

Where?

How much?

What food?

Should I visit?

Every screen must feel

Premium

Minimal

Modern

Warm

Fast

Readable

Food First

Avoid dashboard aesthetics.

Use large imagery.

Bold pricing.

High contrast location.

Minimal text.
## 4. Sprint 2 UI Additions

**Load More Button:** Centered below the grid, full-width on mobile / auto-width on desktop. Style: `bg-brand-dark hover:bg-brand-primary text-white font-bold rounded-xl py-3 px-8`. Shows a subtle loading pulse while appending the next batch — never a full-page spinner.

**Price Range & Sort Controls:** Extend the FilterBar chip row (Price) with the same pill style as Location/Category, using Amber Gold (`#F59E0B`) as the active-state accent to visually tie it to pricing. Sort is a compact dropdown pinned to the right edge of the FilterBar, collapsing under the chip row on mobile.

**Restaurant Profile Page (`/restaurant/[slug]`):**
- Hero block: restaurant name (font-display, extrabold), neighborhood pill, avg price badge, review count — same visual weight as the homepage hero but no gradient, just a clean cream/charcoal split.
- Compiled Menu block: single deduped price table, styled identically to the PostDetailModal's "Menu & Prices (ETB)" table.
- Review grid below: reuses ReviewCard exactly as on the homepage, filtered to that restaurant.
- Back-to-feed link at top, no dead ends — page must never be a UI cul-de-sac.