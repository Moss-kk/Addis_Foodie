# ADDIS FOODIES — BRAND DESIGN SYSTEM & ATTENTION ENGINEERING MANUAL

===================================================================================
ADDIS FOODIES DESIGN SYSTEM (v4.0 Unified Specification)
Visual Identity, Rectangular Header Brand Block, Attention Engineering & Grouped Feed

## 1. Core Philosophy: Zero-Friction Attention Loop
Every millisecond of delay or visual noise costs user engagement. The Addis Foodies interface is built on three core psychological pillars:
1. **Dopamine Priming (Visual Heavy):** Food discovery is emotional and visual. High-contrast, appetite-inducing media occupies 65% of screen real estate above the fold.
2. **Cognitive Load Reduction:** No signups, no modal popups, no hidden navigation. The user reaches content in **< 1 second**.
3. **Frictionless Action (The Social Flywheel):** Every review card provides immediate, one-tap paths to external Telegram channels and Instagram posts.

---

## 2. Brand Identity & Header Logo Block Specification

* **Logo Asset Path:** `/public/images/logo.png`
* **Header Brand Block Design**:
  - **Structure**: Rectangular brand badge container (`px-3 py-1 rounded-2xl bg-zinc-900/90 border border-brand-primary/40 shadow-sm flex items-center gap-2.5`).
  - **Cutlery Mark**: Circular dark badge containing clean white cutlery (fork, knife, spoon) with glowing red/gold accent ring.
  - **Typography**: Display font (`Syne` / `Plus Jakarta Sans`), bold wordmark (`Addis` in white, `Foodies` in Warm Crimson `#A81D1D`), and tagline *"Discovering Foods in Addis"* in Amber Gold (`#F59E0B`).

---

## 3. Brand Color Tokens

| Token Name | Hex Code | Purpose & Usage |
| :--- | :--- | :--- |
| **Warm Crimson** | `#A81D1D` | Primary Brand Color, CTA Buttons, Active Navigation Rings, Logo Wordmark |
| **Dark Crimson** | `#8B1717` | Hero Gradient & Press States |
| **Amber Gold** | `#F59E0B` | Price Tags (ETB), Rating Badges, Tagline Highlight |
| **Deep Charcoal** | `#111827` | Primary Body Text, Header Brand Block Background, Dark Surface Cards |
| **Soft Cream** | `#FAFAFA` | Light Surface Background |
| **Emerald Green** | `#10B981` | Real-Time Live Status ("🚨 TODAY!! LIVE NOW") |

---

## 4. Typography & Font Stack
* **Primary Sans**: `Plus Jakarta Sans`, system-ui, -apple-system, sans-serif
* **Display**: `Syne`, `Plus Jakarta Sans`, sans-serif
* **Monospace**: `JetBrains Mono`, monospace

---

## 5. Homepage Feed Grouping & Visual Hierarchy Architecture

To maintain maximum visual consistency and content freshness, the Homepage feed is organized into **3 distinct visual sections**:

1. **Group 1: 🕒 Fresh & Recent Discoveries (Always Front & Center)**
   - Placed at the very top of the review section.
   - Displays newly ingested social posts from Telegram & Instagram in chronological order with relative freshness badges (`2 min ago`, `9 min ago`, `15 min ago`).
   - Ensures returning visitors immediately see what was published today.

2. **Group 2: 🔥 Popular & Top-Rated Spots**
   - Curated grid highlighting high-rating and highly requested dining spots in Addis Ababa.
   - Features restaurant name, neighborhood, average price badge, and review counts.

3. **Group 3: 🏷️ Interactive Discovery & Price Archive**
   - Interactive FilterBar supporting Neighborhood chips (Bole, Kazanchis, Piassa, Sarbet), Price Tiers (Under 300 Br, 300–700 Br, 700+ Br), Categories (Burgers, Coffee, Fasting, Traditional), and Sort options (Newest, Price: Low to High, Price: High to Low).
   - Paginated grid with client-side "Load More" (9 cards/batch).
