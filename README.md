# 🇪🇹 Addis Foodies — Visual Culinary Curation & Review Aggregator

**Addis Foodies** is a high-performance, mobile-first web application for discovering restaurants, cafes, street food, and culinary festivals across Addis Ababa, Ethiopia (Bole, Kazanchis, Piassa, Sarbet).

Built with Next.js 15, React 19, TypeScript, and styled according to the **Stitch Design System (v5.0)**.

---

## ✨ Features & Design Highlights

- **Stitch MCP Design System (v5.0)**: Built using Primary Crimson (`#A81D1D`), Warm Amber (`#F59E0B`), Deep Charcoal (`#111827`), Soft Cream (`#FAFAFA`), and Emerald Green (`#10B981`).
- **Phone-First UX & Touch Accessibility**: Sticky top search bar, fixed mobile bottom navigation bar, and direct `tel:` phone call buttons for restaurant bookings.
- **Top Search & Filtering**: Instant search on top header with horizontal swipeable craving pills (`Kitfo`, `Burgers`, `Fasting`, `Coffee`, `Bole`).
- **AI Craving Finder**: Natural language prompt builder for instant culinary recommendations.
- **Templates Hub**: Reusable templates for food vendor promotions, event kit registrations, and food guide downloads.
- **Dynamic Bilingual Localization**: Full English & Amharic (`EN | አማርኛ`) language toggle.

---

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to explore the platform.

---

## 🛠 Validation Commands

- **Audit Design System Tokens:**
  ```bash
  node scripts/sync_design_tokens.js
  ```
- **Build Production Bundle:**
  ```bash
  npm run build
  ```
