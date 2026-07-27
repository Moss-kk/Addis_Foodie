# ADDIS FOODIES — AI CROSS-COLLABORATION HANDOFF DOCUMENT (v5.0 Stitch Master)

This document provides complete technical, design, architectural, and route context for any AI assistant or developer working on the **Addis Foodies** project.

---

## 📌 Project Overview & Value Proposition
- **Project Name:** Addis Foodies Digital Platform
- **Core Tagline:** *"Discover Addis Ababa One Bite at a Time"*
- **Vision:** The Official Digital Home of Addis Foodies.
- **Value Proposition:** An authoritative, visual-first culinary discovery magazine and review aggregator for Addis Ababa, Ethiopia (Bole, Kazanchis, Piassa, Sarbet). Amplifies 150,000+ monthly foodies across Instagram, Telegram, and Web.

---

## 🎨 Stitch Design System & Phone-First UX Overhaul

### Master Visual Tokens
- **Primary Crimson (`#A81D1D`)**: Brand logo border ring, primary CTAs, active hover underlines, focus borders.
- **Dark Crimson (`#8B1717`)**: Hero gradient overlay, active press states, CTA dark hover.
- **Warm Amber (`#F59E0B`)**: Monospaced ETB price badges, rating star chips, tagline text, live alerts, AI tags.
- **Deep Charcoal (`#111827`)**: Brand logo container, dark card containers, body headings, receipts background.
- **Soft Cream (`#FAFAFA`)**: Page canvas background.
- **Emerald Green (`#10B981`)**: Real-time live status badges (`🚨 TODAY!! LIVE NOW`).

### Mobile Phone Usability Enhancements
1. **Top Sticky Search**: Accessible search box in sticky top navigation header (`Header.tsx`).
2. **Mobile Bottom Navigation Bar**: Fixed bottom bar for phone viewports (`MobileBottomNav.tsx`).
3. **Direct Click-to-Call Action**: Phone booking action button (`📞 Call`) on review cards (`ReviewCard.tsx`).
4. **Horizontal Craving Chips**: Swipeable craving chips (`Kitfo`, `Burgers`, `Fasting`, `Coffee`, `Bole`).
5. **Templates Hub**: Dedicated template showcase component (`TemplateShowcase.tsx`) for event & vendor promotion kits.

---

## 📁 Directory & Component Structure

```
c:\Users\user\Documents\Addis_Foodie\
├── Design.md                  # v5.0 Official Master Design System Specification
├── ARCHITECTURE.md            # Technical Architecture & Topology Document
├── HANDOFF.md                 # AI Cross-Collaboration Handoff Document
├── README.md                  # Project Readme
├── tailwind.config.ts         # Brand color tokens & typography configuration
├── scripts/
│   └── sync_design_tokens.js  # Automated design token verification script
└── src/
    ├── app/
    │   ├── layout.tsx         # Root layout with LanguageProvider
    │   ├── page.tsx           # Social & Food Curation Homepage (with Sticky Search & Templates Hub)
    │   ├── about/             # About Addis Foodies page
    │   ├── events/            # Culinary Events & Festivals Hub
    │   ├── services/          # Commercial Rate Card & Services Catalog
    │   └── collaborate/       # Commercial Partnership & Review Inquiry
    └── components/
        ├── Header.tsx         # Sticky header with brand badge & top search box
        ├── Footer.tsx         # Multi-column brand footer
        ├── ReviewCard.tsx     # 4:3 media card with monospaced price chip & call action
        ├── FilterBar.tsx      # Swipeable craving pill slider
        ├── AiCravingFinder.tsx# Natural language preset craving chips
        ├── EventBanner.tsx    # Emerald green live event alert banner
        ├── templates/
        │   └── TemplateShowcase.tsx # Food curation & event templates hub
        └── layout/
            └── MobileBottomNav.tsx # Fixed phone bottom navigation bar
```

---

## 🔧 Token Verification & Build Commands
- **Run Token Audit Script:**
  ```bash
  node scripts/sync_design_tokens.js
  ```
- **Run Next.js Production Build:**
  ```bash
  npm run build
  ```
