# ADDIS FOODIES — BRAND DESIGN SYSTEM & UI/UX SPECIFICATIONS

## 1. Core Visual Identity
* **Logo Asset**: `/public/images/logo.png`
* **Badge Style**: Circular dark badge featuring clean white cutlery (fork, knife, spoon) with bold brand typography.
* **Tagline**: *"Discovering Foods in Addis"*

---

## 2. Color Palette & Tokens

| Token Name | Hex Code | Purpose & Usage |
| :--- | :--- | :--- |
| **Warm Crimson** | `#A81D1D` | Primary Brand Color, CTA Buttons, Active Navigation Rings |
| **Dark Crimson** | `#8B1717` | Hero Gradient Overlays, Hover & Pressed Highlights |
| **Amber Gold** | `#F59E0B` | Price Chips (ETB), Rating Star Badges, Active Price Filters |
| **Deep Charcoal** | `#111827` | Primary Typography, Dark Surface Containers, Navigation Bar |
| **Soft Cream** | `#FAFAFA` | Light Surface Background, Page Canvas |
| **Emerald Green** | `#10B981` | Real-Time Live Status ("🚨 TODAY!! LIVE NOW") |

---

## 3. Typography Stack
* **Primary Sans**: `Plus Jakarta Sans`, system-ui, sans-serif (Body, Descriptions, Inputs)
* **Display**: `Syne`, `Plus Jakarta Sans`, sans-serif (Headings, Hero Titles, Restaurant Names)
* **Monospace**: `JetBrains Mono`, monospace (Price Tags, Coordinates, Timestamps)

---

## 4. UI/UX Principles
1. **Dopamine Priming**: High-contrast, appetizing imagery occupying majority real estate above the fold.
2. **Cognitive Load Reduction**: Zero login friction, instant search, and clear category pills.
3. **Price Transparency**: Every dish and review card explicitly displays prices in Ethiopian Birr (`ETB`).
4. **Mobile First**: All touch targets strictly >= 48x48px with horizontal scrolling chip bars.

---

## 5. Motion & Shaders
- **3D WebGL Canvas**: Metallic MeshStandardMaterial with roughness `0.2` and metalness `0.85`. Specular highlights in Amber Gold (`#F59E0B`) and Crimson (`#A81D1D`).
- **Framer Motion**: Smooth spring transitions on card hovers (`scale: 1.02`, `y: -4`).
