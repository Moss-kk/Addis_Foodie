# Addis Foodies Design System (DESIGN.md)

## Overview

Addis Foodies is an editorial culinary marketplace for discovering, reviewing, and experiencing authentic local food across Addis Ababa. The visual design bridges the gap between a high-end food magazine zine and a modern consumer marketplace.

The base palette relies on a warm Cream Canvas (`var(--bg-canvas)`) for Day Mode and a rich Charcoal Surface for Night Mode, paired with Berbere Red (`var(--accent-brand)`) as the signature accent. Food photography is treated as the hero content: images sit inside clean card wrappers with 100% opacity, completely free of dark gradient overlays or obscure masks.

The typography stack pairs an expressive high-contrast display font (Bricolage Grotesque) for massive magazine headlines with Inter for clean UI controls and JetBrains Mono for pricing, ratings, and location metadata.

---

## Theme & Color Tokens

The system uses semantic CSS variables to provide native support for both Day Mode (Warm Zine) and Night Mode (Dark Walkthrough).

```css
:root {
  /* Brand Accents */
  --accent-brand: #E63946;         /* Berbere Red - Primary CTAs & Active States */
  --accent-brand-hover: #C02532;   /* Deep Berbere - Press/Hover State */
  --accent-amber: #F4A261;         /* Warm Gold - Star Ratings & Trending Badges */
  --accent-verified: #2A9D8F;      /* Muted Teal - Verified Badges */

  /* Day Mode (Default Warm Zine Canvas) */
  --bg-canvas: #FAF8F5;            /* Warm Cream Page Floor */
  --bg-surface: #FFFFFF;           /* Crisp White for Food Cards & Search Surface */
  --bg-inset: #F2EFE9;             /* Soft Bone for Category Filters & Inset Chips */
  --text-primary: #1A1A1A;         /* Dark Ink for Titles & Headlines */
  --text-body: #383838;            /* Dark Charcoal for Running Reviews & Prose */
  --text-muted: #6E6D6A;           /* Neutral Slate for Locations & Distance Tokens */
  --border-hairline: #E0DDD5;      /* Subtle 1px Cream Divider */
  --shadow-elevation: rgba(0, 0, 0, 0.06);
}

.dark,
[data-theme="dark"] {
  /* Night Mode (Dark Walkthrough Surface) */
  --bg-canvas: #121212;            /* Deep Charcoal Base */
  --bg-surface: #1E1E1E;           /* Elevated Dark Surface for Cards */
  --bg-inset: #2A2A2A;             /* Dark Inset for Filters & Chips */
  --text-primary: #F9F7F3;         /* Off-White Cream for Titles */
  --text-body: #D4D1C9;            /* Muted Soft White for Review Copy */
  --text-muted: #A09E98;           /* Warm Gray for Secondary Meta */
  --border-hairline: #2E2E2E;      /* Dark Hairline Divider */
  --accent-brand: #FF4D5A;         /* Boosted Berbere Red for High Contrast */
  --shadow-elevation: rgba(0, 0, 0, 0.4);
}
```