# ADDIS FOODIES — AI CROSS-COLLABORATION HANDOFF DOCUMENT (v5.0)

This document provides complete technical, design, architectural, and route context for any AI assistant or developer continuing work on the **Addis Foodies** project.

---

## 📌 Project Overview & Value Proposition
- **Project Name:** Addis Foodies Digital Platform
- **Core Tagline:** *"Discover Addis Ababa One Bite at a Time"*
- **Vision:** The Official Digital Home of Addis Foodies.
- **Value Proposition:** An authoritative, visual-first culinary discovery magazine and review aggregator for Addis Ababa, Ethiopia (Bole, Kazanchis, Piassa, Sarbet). Amplifies 150,000+ monthly foodies across Instagram, Telegram, and Web.
- **No User Account Requirement:** All content is curated, author-verified by Addis Foodies editorial field inspectors.

---

## 🛠️ Technology Stack & Environment
- **Framework:** Next.js 16 (App Router with Turbopack)
- **Styling:** Tailwind CSS v4 + Custom Glassmorphism CSS utilities
- **Language:** TypeScript 5.x (Strict mode)
- **Animation:** Framer Motion v12
- **Fonts (Google Fonts):**
  - Display: `Syne` (`font-syne font-black`)
  - Body & UI: `Plus Jakarta Sans` (`font-sans`)
  - Prices & Numbers: `JetBrains Mono` (`font-mono`)
  - Ethiopic Fallback: `Noto Sans Ethiopic` / `Abyssinica SIL`

---

## 🎨 Master Design System Tokens (Stitch MCP Asset `454fb3c749314435921ae5b007fef532`)

- **Primary Crimson (`#A81D1D`)**: Brand logo border ring, primary CTAs, active hover underlines, focus borders.
- **Dark Crimson (`#8B1717`)**: Hero gradient overlay, active press states, CTA dark hover.
- **Warm Amber (`#F59E0B`)**: Price badges in ETB, rating star chips, tagline text, live alerts, AI tags.
- **Deep Charcoal (`#111827`)**: Brand logo block, dark containers, body headings, receipts background.
- **Soft Cream (`#FAFAFA`)**: Page canvas background.
- **Emerald Green (`#10B981`)**: Real-time live status badges (`🚨 TODAY!! LIVE NOW`).

---

## 🌐 Dynamic Bilingual Localization (`EN | AM`)
- **Location:** `src/lib/i18n.ts` & `src/context/LanguageContext.tsx`
- **Usage in Components:**
  ```tsx
  import { useLanguage } from '../context/LanguageContext';
  const { lang, toggleLang, t } = useLanguage();
  return <button onClick={toggleLang}>{t('exploreReviews')}</button>;
  ```

---

## 📁 Directory & Component Structure

```
c:\Users\user\Documents\Addis_Foodie\
├── ADDIS_FOODIES_SRS.md       # v5.0 Official Master SRS Specification
├── Design.md                  # v5.0 Official Master Design System Manual
├── HANDOFF.md                 # Persistent AI Cross-Collaboration Handoff Document
├── tailwind.config.ts         # Extended brand colors & typography fonts
├── scripts/
│   └── sync_design_tokens.js  # Automated token verification script
└── src/
    ├── app/
    │   ├── layout.tsx         # Root layout with LanguageProvider
    │   ├── page.tsx           # 7-Section Storytelling Homepage
    │   ├── about/             # About Addis Foodies editorial standards
    │   ├── events/            # Culinary Events & Festivals Hub
    │   ├── services/          # Commercial Rate Card & Services Catalog
    │   └── collaborate/       # Commercial Partnership & Review Inquiry
    ├── components/
    │   ├── Header.tsx         # Brand logo badge, navigation, language toggle
    │   ├── Footer.tsx         # 4-Column brand footer & newsletter
    │   ├── ReviewCard.tsx     # 4:3 image card with price chip & receipt trigger
    │   ├── PriceReceiptModal  # Monospaced itemized ETB price receipt
    │   ├── AddisMap.tsx       # 2D Interactive Addis Ababa Discovery Map
    │   ├── VideoReelsSection  # 9:16 TikTok & Instagram Video Reels Spotlight
    │   ├── VideoReelModal.tsx # Portrait video review player modal
    │   ├── AiCravingFinder    # Natural language preset craving chips
    │   └── EventBanner.tsx    # Emerald Green live status event alert
    ├── context/
    │   └── LanguageContext    # Client-side language state (EN / AM)
    ├── data/
    │   ├── mockPosts.ts       # Curated review posts with video reel metadata
    │   └── mockEvents.ts      # Festival & event data
    ├── lib/
    │   └── i18n.ts            # English & Amharic dictionaries
    └── types/
        └── post.ts            # FoodPost, CulinaryEvent, MenuItem types
```

---

## 🔧 Token Verification & Build Verification Commands
- **Run Token Audit Script:**
  ```bash
  cmd /c node scripts/sync_design_tokens.js
  ```
- **Run Next.js Turbopack Production Build:**
  ```bash
  cmd /c npm run build
  ```

---

## 💡 Next Steps & Roadmap for Continuing AI Assistants
1. **Instagram Graph API / Telegram Bot Webhook Integration:** Replace static mock data with real-time webhooks parsing incoming post captions into structured `FoodPost` objects.
2. **Database Integration:** Connect Prisma schema to PostgreSQL database to persist commercial collaboration inquiries.
3. **PWA Offline Support:** Add service workers for offline caching of food review cards in low-connectivity areas of Addis Ababa.
