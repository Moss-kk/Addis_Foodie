# Technical Architecture & System Specification
## Addis Foodies Digital Infrastructure (v5.0 Stitch Design Standard)

---

## 1. Stack & System Topology

```
+-------------------------------------------------------------------+
|               Mobile & Desktop Client Browsers                    |
+-------------------------------------------------------------------+
                                  |
                                  v
+-------------------------------------------------------------------+
|                    Sticky Search & Navigation                     |
|           (Top Header Search Bar & Mobile Bottom Bar)             |
+-------------------------------------------------------------------+
                                  |
                                  v
+-------------------------------------------------------------------+
|               Next.js 15 App Router & UI Engine                   |
|   +-----------------------+     +-----------------------------+   |
|   |  Public Food Feed     |     |  Templates & Event Engine   |   |
|   +-----------------------+     +-----------------------------+   |
|   |  AI Craving Finder    |     |  Social Reels & Map         |   |
|   +-----------------------+     +-----------------------------+   |
+-------------------------------------------------------------------+
                                  |
                                  v
+-------------------------------------------------------------------+
|                 Prisma ORM & PostgreSQL Database                  |
+-------------------------------------------------------------------+
```

---

## 2. Technology & Design System Matrix

- **Frontend Framework:** Next.js (App Router, React 19, TypeScript).
- **Design Tokens (Stitch v5.0):**
  - Primary Crimson (`#A81D1D`), Dark Crimson (`#8B1717`)
  - Warm Amber (`#F59E0B`), Deep Charcoal (`#111827`)
  - Soft Cream (`#FAFAFA`), Emerald Green (`#10B981`)
- **Typography Stack:** `Syne` (Display/Hero Headings), `Outfit` (Primary Body/UI), `JetBrains Mono` (Prices).
- **Mobile Usability & UX:**
  - Sticky Top Header Search Input (`Header.tsx`)
  - Sticky Mobile Bottom Navigation Bar (`MobileBottomNav.tsx`)
  - Direct Phone Action Triggers (`tel:`) on Review Cards
  - Touch Target Standard: Minimum 48px height & width
- **Database & Services:** PostgreSQL managed via Prisma ORM with API route handlers.

---

## 3. Public UX & Feature Hierarchy

1. **Top Sticky Navigation Header**: Brand Badge + Top Search Input + Language Switcher (`EN | አማርኛ`).
2. **Live Event Alert Banner**: Real-time festival alert chip (`🚨 LIVE NOW`).
3. **Hero Section & Craving Chips**: Visual culinary headline with horizontal swipeable craving pills (`Kitfo`, `Burgers`, `Fasting`, `Coffee`, `Bole`).
4. **AI Craving Finder Widget**: Natural language prompt builder for quick search filtering.
5. **Services & Featured Showcase**: Editorial spotlights & vendor promotion hub.
6. **Restaurant Reviews Feed Grid**: 4:3 WebP photography cards with monospaced ETB pricing, landmark pills, and direct phone call triggers.
7. **Social Video Reels & Interactive Addis Map**: Visual media exploration.
8. **Templates Showcase Hub**: Ready-to-use vendor & event promo templates.
9. **Multi-Column Footer & Mobile Bottom Navigation Bar**.

---

## 4. API Endpoints Specification

### 4.1 Public Endpoints
- `GET /api/promotion` — Active promotional campaign listings.
- `POST /api/collaborate` — Vendor collaboration & review requests.
- `GET /api/v1/reviews` — Paginated review listings with neighborhood and price filters.
- `GET /api/v1/events` — Upcoming culinary events & festival schedules.