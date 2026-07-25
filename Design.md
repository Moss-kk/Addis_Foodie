### FILE 2: `DESIGN.md`
> **Instructions:** Save this to `DESIGN.md` in your project root.

```markdown
# ADDIS FOODIES — BRAND DESIGN SYSTEM & ATTENTION ENGINEERING MANUAL

===================================================================================
ADDIS FOODIES DESIGN SYSTEM
Visual Identity, Attention Engineering, 3D Canvas Shaders & UI Components

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
mathch the dlofgo screen acolose ton stkem 
---

## 3. Typography & Font Stack
To ensure instant legibility on low-end mobile devices and high-DPI screens alike, we use a hyper-legible, performance-first font stack.

```css
/* Font Definitions */
--font-primary: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
--font-display: 'Syne', 'Plus Jakarta Sans', sans-serif;
--font-mono: 'JetBrains Mono', monospace;
4. UI Design Principles & Visual Hierarchy
The Addis Foodies interface communicates food before functionality. Every card immediately answers:

Where?

How much?

What food?

Should I visit?

Visual Hierarchy Rules:
Restaurant Photography (Highest visual priority)

Location (Bold text)

Price (Highlighted amber badge)

Restaurant Name (Extra bold)

Category (Crimson tag)

Review Caption

Social Links

Every screen must feel:

Premium

Minimal

Modern

Warm

Fast

Readable

Food First

Avoid generic dashboard aesthetics. Use large imagery, bold pricing, high-contrast location tags, and minimal regular text.

5. Color Tokens (Tailwind CSS Config)
JavaScript
// tailwind.config.js extension
theme: {
  extend: {
    colors: {
      brand: {
        crimson: '#A81D1D',     // Primary Action & Badge Ring
        darkCrimson: '#8B1717', // Hero Gradient & Press States
        amber: '#F59E0B',       // Price Highlight & Star Badges
        charcoal: '#111827',    // Primary Body & Dark Surface Cards
        cream: '#FAFAFA',       // Light Surface & Crisp Typography
        emerald: '#10B981',     // Real-Time Event Status ("TODAY!!")
      }
    }
  }
}
6. 3D WebGL Hero Canvas Shader Specifications
Scene Setup (@react-three/fiber)
Mesh: 3D Cutlery Mark (Fork, Knife, Spoon) centered on canvas.

Material: Metallic MeshStandardMaterial with roughness 0.2 and metalness 0.85.

Primary Color: Metallic Crimson (#A81D1D) with Brushed Gold specular highlights (#F59E0B).

Lighting:

Point Light 1: Warm Amber (#F59E0B) at [5, 5, 5] intensity 1.5.

Point Light 2: Crimson (#A81D1D) at [-5, -5, -5] intensity 2.0.

Ambient Light: 0.4 intensity.

Particles: 50 floating golden ember particle instances moving upward along Y-axis with noise displacement.

Mouse Interaction: Smooth spring lerp (0.05 coefficient) tilting the mesh max 30deg on mouse/drag movement.

7. Sprint 2 UI Additions & Component Specs
7.1 Load More Button
Placement: Centered below the review grid, full-width on mobile / auto-width on desktop.

Style: bg-brand-charcoal hover:bg-brand-crimson text-white font-bold rounded-xl py-3 px-8 transition-colors.

Interaction: Displays a subtle loading pulse while appending the next batch of 9 posts—never a full-page spinner or layout shift.

7.2 Price Range & Sort Controls
Price Range Chips: Extends the FilterBar chip row with options: Under 300 Br, 300–700 Br, 700+ Br.

Active State: Uses Warm Amber (#F59E0B) as the active-state background chip (bg-amber-500 text-gray-900 font-bold) to visually tie it to pricing.

Sort Dropdown: Compact control pinned to the right edge of the FilterBar (Newest, Price: Low to High, Price: High to Low), collapsing neatly below the chip row on mobile screens.

7.3 Restaurant Profile Page (/restaurant/[slug])
Hero Block: Restaurant name (font-display font-extrabold text-3xl), neighborhood pill, average price badge, total review count. Features a clean cream/charcoal split without heavy hero gradients.

Compiled Menu Block: Single deduped price table, styled identically to the PostDetailModal's "Menu & Prices (ETB)" table.

Review Grid: Reuses ReviewCard components exactly as on the homepage, filtered exclusively to that restaurant.

Top Navigation: "Back to Feed" link at top left—no dead ends or UI cul-de-sacs.

8. Motion & Animation (Framer Motion)
JavaScript
// Motion Presets
export const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: { scale: 1.02, y: -4, transition: { type: "spring", stiffness: 300 } }
};

export const pulseGlow = {
  animate: {
    boxShadow: ["0 0 0px rgba(168,29,29,0)", "0 0 20px rgba(168,29,29,0.5)", "0 0 0px rgba(168,29,29,0)"],
    transition: { repeat: Infinity, duration: 2 }
  }
};
# UI/UX Design System & Specification
## Addis Foodies — Official Web Platform

---

## 1. Brand Identity & Visual Philosophy

The visual language of Addis Foodies balances editorial authority with culinary warmth[cite: 1]. The UI feels like a modern food magazine combined with a lightning-fast utility app[cite: 1].

### 1.1 Core Color Palette

| Name | Hex | CSS Variable | Usage |
|---|---|---|---|
| **Warm Crimson** | `#A81D1D` | `--primary` | Primary brand identity, badges, prominent CTAs, accent borders[cite: 1] |
| **Amber Gold** | `#F59E0B` | `--secondary` | Highlights, ratings, price chips, featured flags[cite: 1] |
| **Deep Charcoal** | `#111827` | `--foreground` | High-contrast typography, top bar, dark mode card containers[cite: 1] |
| **Cream Canvas** | `#FAFAFA` | `--background` | Warm, non-glare background surface[cite: 1] |
| **Card Surface** | `#FFFFFF` | `--card` | Elevated review and content card background |
| **Muted Slate** | `#6B7280` | `--muted` | Secondary body text, timestamps, captions |

---

## 2. Typography Hierarchy

*   **Primary Font:** `Inter` or `Plus Jakarta Sans` (Clean, legible geometric sans-serif for UI and numbers).
*   **Display Font:** `Playfair Display` or `Outfit` (Editorial warmth for section titles and event heroes).

```css
h1 { font-family: var(--font-display); font-size: 2.5rem; font-weight: 800; line-height: 1.1; }
h2 { font-family: var(--font-display); font-size: 1.875rem; font-weight: 700; }
h3 { font-family: var(--font-sans); font-size: 1.25rem; font-weight: 600; }
body { font-family: var(--font-sans); font-size: 1.0rem; line-height: 1.6; }
3. Core Component Library
3.1 Review Card Blueprint
+-------------------------------------------------------+
| [Category Badge]                       [ Price Chip ] |
|                                                       |
|                  HERO IMAGE / CAROUSEL                |
|                                                       |
| [New Badge] 2 hrs ago                     [IG] [TG]   |
+-------------------------------------------------------+
| Dish / Review Title                                   |
| 📍 Neighborhood Landmark                              |
|                                                       |
| Selected Menu Items:                                  |
| • Item One ................................ 450 ETB   |
| • Item Two ................................ 800 ETB   |
+-------------------------------------------------------+
3.2 Navigation Header
Desktop: Left-aligned circular logo badge (Black with white cutlery icon)[cite: 1], centered links (Reviews, Events, Services, About), right-aligned primary CTA (Work With Us)[cite: 1].

Mobile: Sticky top header with brand logo, search toggle, and slide-out navigation sheet. Bottom sticky quick-bar (Home, Search, Events, Collaborate).

4. Page Layout Specifications
4.1 Homepage Structure
Top Alert Banner: Direct highlight for active major event (e.g., "🔥 Kitfo Fest #7 Live at Monarch Hotel — View Schedule").

Editorial Hero: Search bar with quick suggestions + Tagline: "Discover trusted restaurant reviews by Addis Foodies."

[cite: 1]

Horizontal Filter Scroll: Fast-tap filter chips (All, Bole, Habesha, Fasting, Burgers, Coffee, $ Budget)[cite: 1].

Recent Reviews Feed: Responsive 3-column grid featuring the newest review cards ordered chronologically[cite: 1].

Featured Event Banner: High-impact full-width callout for upcoming culinary challenges.

Services & Collaboration Teaser: Grid highlighting business offerings with direct form trigger[cite: 1].

Footer: Social channels, legal info, media kit download, copyright[cite: 1].

5. UI Inspiration & Directives
Header & Clean Lines: Inspired by high-end culinary media.

Card Micro-Interactions: Subtle scale-up on image hover (transform: scale(1.03) with dynamic image shadow).

Accessibility: All text satisfies WCAG AA 4.5:1 contrast standards[cite: 1]. Tap targets on mobile are a minimum of 48x48px.
---