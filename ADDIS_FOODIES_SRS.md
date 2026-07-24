===================================================================================
ADDIS FOODIES WEB PLATFORM
SOFTWARE REQUIREMENTS SPECIFICATION (SRS v3.1)
3D Interactive Culinary Discovery, Festival Ticketing & Restaurant Ecosystem

---

## 1. Introduction

### 1.1 Purpose
This Software Requirements Specification (SRS) defines the complete functional, non-functional, visual, and architectural requirements for the **Addis Foodies Web Platform**. It transforms Addis Foodies from a social channel mirror into Ethiopia’s **#1 interactive, 3D-powered food discovery, festival ticketing, event management, and restaurant promotion ecosystem**.

This document is the single source of truth for developers, designers, product managers, and brand managers.

---

### 1.2 Scope & Capabilities
The platform delivers five primary pillars:
1. **Interactive 3D Brand Experience**: An interactive WebGL hero canvas rendering the official Addis Foodies cutlery logo (fork, spoon, knife) in 3D with dynamic lighting, hover physics, and particle shaders.
2. **Live Events & Food Festivals Engine ("Kitfo Fest Portal")**: Real-time event publishing for food festivals (e.g., *Kitfo Fest #5*, *Coca-Cola Taste Fest*), cultural performances, live DJ lineups, game zones, and direct phone reservation links (`0966-55-00-00` / `0911-23-92-70`).
3. **Zero-Login Public Discovery & Restaurant Profiles**: Frictionless access to food reviews, menus, normalized prices in Ethiopian Birr (ETB), landmark-based location maps, and dedicated restaurant pages (`/restaurant/[slug]`) without authentication barriers.
4. **Commercial Promotion Engine ("DM for Promotion")**: Dedicated booking interface for restaurant sponsorships, video review requests, award nominations, and direct social links (TikTok, Telegram, Instagram, Phone).
5. **Sprint 2 Feed Polish & Pagination Engine**: Paginated batching (9 cards/batch with "Load More"), Price Range filtering (Under 300 Br / 300–700 Br / 700+ Br), and Sort controls (Newest, Price: Low to High, Price: High to Low).

---

## 2. Visual Layouts & UI/UX Renderings

### 2.1 Brand Badge & Identity
The official visual mark is a circular dark badge containing white silhouettes of a fork, spoon, and knife (`/public/images/logo.png`).

            +---------------------------------+
            |        (  /  |  \  )           |
            |       (  /   |   \  )          |
            |      ADDIS FOODIES LOGO         |
            |  Circular Badge + Cutlery Mark  |
            +---------------------------------+

---

### 2.2 Live Homepage Layout (3D Hero + Active Event Banner + Paginated Grid)

+---------------------------------------------------------------------------------+
| (Cutlery Logo) ADDIS FOODIES   [ Home ] [ Fests & Events ] [ Reviews ] [ Promo ]|
+---------------------------------------------------------------------------------+
|                                                                                 |
|  +---------------------------------------------------------------------------+  |
|  |                       3D CANVAS HERO SECTION                              |  |
|  |     [ Interactive 3D Metallic Cutlery Model Rotates on Cursor Move ]      |  |
|  |     "DISCOVER THE CULINARY HEART OF ADDIS ABABA"                          |  |
|  |     [ Search Dishes, Cafes, Neighborhoods... ] [ Search Button ]          |  |
|  +---------------------------------------------------------------------------+  |
|                                                                                 |
|  🚨 URGENCY EVENT BANNER: TODAY!! TODAY!! KITFO FEST #5 📍 MONARCH HOTEL       |
|  +---------------------------------------------------------------------------+  |
|  | 🐂 Kitfo, Tibs & Tire Siga | 💃 Guragyna Dancers | 💰 FREE Entrance        |  |
|  | ⏰ 11:00 AM - 11:00 PM    | 📍 Piassa          | 📞 0966-55-00-00         |  |
|  +---------------------------------------------------------------------------+  |
|                                                                                 |
|  FILTER BAR: [All] [Bole] [Piassa] | Price: [<300 Br] [300-700 Br] [700+ Br]    |
|                                                      Sort: [ Newest v ]         |
|                                                                                 |
|  FEATURED REVIEWS & RECENT DISCOVERIES                                          |
|  +---------------------------+ +---------------------------+                    |
|  | [NEW] [HABESHA] 1,200 ETB   | | [NEW] [FASTING] 260 ETB   |                    |
|  | Yado Kitfo                | | Fasting Burger            |                    |
|  | 📍 Bole near Millennium   | | 📍 Bole Tele Medhanialem  |                    |
|  | 🕒 2 min ago [IG] [TG]    | | 🕒 9 min ago [IG] [TG]    |                    |
|  +---------------------------+ +---------------------------+                    |
|                                                                                 |
|                         [ LOAD MORE REVIEWS (9) ]                               |
|                                                                                 |
|  +---------------------------------------------------------------------------+  |
|  | 🚀 WANT TO PROMOTE YOUR RESTAURANT OR EVENT? [ DM FOR PROMOTION ]        |  |
|  | 📱 TikTok | ✈️ Telegram (@addisfoodiess) | 📸 Instagram | 📞 0966550000    |  |
|  +---------------------------------------------------------------------------+  |
+---------------------------------------------------------------------------------+


---

### 2.3 Mobile Viewport & Restaurant Profile Page Layout
+----------------------------------+  +----------------------------------+
| (Cutlery Logo) Addis Foodies     |  | <- Back to Feed                  |
| [ Search dishes, fests, areas ]  |  |                                  |
+----------------------------------+  | YADO KITFO                       |
| [All] [Bole] [Piassa] [Kitfo]    |  | 📍 Bole near Millennium Hall     |
+----------------------------------+  | [4.8 Rating] [12 Reviews]        |
| 🚨 LIVE TODAY: KITFO FEST #5     |  |                                  |
| 📍 Monarch Hotel Roof Top        |  | COMPILED MENU & PRICES (ETB)     |
| 📞 Call: 0966-55-00-00           |  | • Chefiya ............ 1,800 Br  |
+----------------------------------+  | • Special Kitfo ........ 1,200 Br|
| RECENT DISCOVERIES               |  |                                  |
| +------------------------------+ |  | RESTAURANT REVIEWS               |
| | [IMAGE] Yado Kitfo           | |  | +------------------------------+ |
| | 📍 Bole | 💰 1,200 ETB       | |  | | [CARD 1] Special Chefiya     | |
| +------------------------------+ |  | +------------------------------+ |
+----------------------------------+  +----------------------------------+


---

## 3. Brand Tokens & Design System

### 3.1 Color Palette
* **Primary Crimson (`#A81D1D`)**: Brand badge ring, primary CTA buttons, active navigation states.
* **Dark Crimson (`#8B1717`)**: Hero gradient background overlays and pressed state highlights.
* **Warm Amber (`#F59E0B`)**: Menu pricing tags, active price chips, featured event badges.
* **Dark Charcoal (`#1F2937`)**: Primary dark interface background and surface cards.
* **Soft Cream (`#FAFAFA`)**: High-contrast typography and light surface overlays.
* **Emerald Green (`#10B981`)**: Real-time event urgency badges (`🚨 TODAY!! LIVE NOW`).

---

### 3.2 Typography Standards
* **Font Family**: Primary (`Plus Jakarta Sans`), Display (`Syne`), Mono (`JetBrains Mono`).
* **Landmark Locations**: Always **Bold** (`font-bold text-gray-900 dark:text-gray-100`).
* **Restaurant / Event Titles**: Always **Extra Bold** (`font-extrabold tracking-tight`).
* **Pricing**: Always **Highlighted** in Amber Chips (`bg-amber-500/10 text-amber-600 font-bold px-2 py-1 rounded`). Pricing transparency is essential.

---

## 4. Functional Requirements

### 4.1 3D Interactive Hero Canvas
* **FR-1.1**: The platform shall render an interactive 3D WebGL scene using React Three Fiber.
* **FR-1.2**: The scene shall present a 3D metallic rendering of the Addis Foodies cutlery logo floating above the canvas.
* **FR-1.3**: The model shall react dynamically to cursor movement, touch drag events, and scroll depth while spawning ambient particle effects.
* **FR-1.4**: On low-performance mobile devices, the WebGL canvas shall automatically degrade gracefully to an animated 3D CSS mark.

---

### 4.2 Events & Food Festivals Engine ("Kitfo Fest Portal")
* **FR-2.1 Real-Time Alert Banner**: Display urgent event notification banners at the top of the feed (e.g., `🚨 TODAY!! TODAY!! KITFO FEST #5 📍 MONARCH HOTEL ROOF TOP`).
* **FR-2.2 Event Detail Specifications**: Each festival post shall render:
  * **Title & Venue**: e.g., *KITFO FEST #5 📍 MONARCH HOTEL (ROOF TOP)*.
  * **Dates**: Ethiopian & Gregorian calendars (e.g., *Sat & Sun Meskerem 19 & 20 | Sep 30 & Oct 01*).
  * **Schedule**: e.g., *11:00 AM till 11:00 PM*.
  * **Offerings**: *Kitfo, Tibs, Tire Siga, Desserts, Cakes, Ice Cream, Areke, Tej*.
  * **Entertainment**: *Guragyna Cultural Dancers & Singers, Masinko Performance, Board Games, DJ Lineups*.
  * **Entrance**: Highlighted entrance status (`💰 No Entrance Fee` or `Paid VIP`).
  * **Landmark Location**: *Piassa, Around Tewdros Square, In front of Friendship Park @monarchparkview*.
  * **Direct Reservation Actions**: One-tap phone triggers for `0966-55-00-00` and `0911-23-92-70`.

---

### 4.3 Brand Partnerships & Commercial Engine ("DM for Promotion")
* **FR-3.1 Promotion Hub Modal**: A dedicated interface allowing restaurant owners to request video reviews, book festival stalls, or sponsor homepage banner slots.
* **FR-3.2 Unified Social Contact Grid**:
  * **Direct Phone Calls**: `0966-55-00-00` / `0911-23-92-70`
  * **Telegram Contact**: `@addisfoodiess`
  * **Telegram Channel**: `t.me/AddisFoodies`
  * **Instagram**: `instagram.com/addis.foodie`
  * **TikTok**: Official Addis Foodies handle link

---

### 4.4 Automated Content Sync & Ingestion Engine
* **FR-4.1 Ingestion Engine**: Automatically pull media, captions, prices, and locations from official Instagram Graph API and Telegram Bot API webhooks.
* **FR-4.2 Structured Parsing**: Parse unstructured text into structured fields: Dish Title, Venue Handle, Area Tag, Price in ETB, and Social Links.
* **FR-4.3 Recent-First Ordering**: Position newly published social posts at the top of the homepage within 60 seconds using Next.js on-demand ISR revalidation.

---

### 4.5 Sprint 2 — Feed Polish & Filtering
* **FR-5.1 Paginated Feed Batching**: Homepage feed loads an initial batch of 9 posts, newest-first; a "Load More" action reveals the next batch client-side without full page reloads or layout shift.
* **FR-5.2 Advanced Filtering & Sorting**: FilterBar supports Price Range filtering (Under 300 Br / 300–700 Br / 700+ Br) using Amber Gold (`#F59E0B`) active pills, and a Sort dropdown (Newest, Price: Low to High, Price: High to Low) composable with Area/Category chips.

---

### 4.6 Sprint 2 — Restaurant Profile Pages
* **FR-6.1 Dynamic Restaurant Routes**: Dedicated pages at `/restaurant/[slug]` aggregating all posts linked to a given `venueName` or `slug`.
* **FR-6.2 Compiled Menu & Overview**: Display restaurant name, neighborhood pill, review count, average price tier, and a deduped compiled menu table.
* **FR-6.3 Seamless Navigation**: Reachable by tapping the restaurant name on any ReviewCard or PostDetailModal, featuring a "Back to Feed" link at the top to prevent dead ends.

---

## 5. System Architecture & Technology Stack

+-----------------------------------------------------------------------------------+
|                                 FRONTEND LAYER                                    |
|   Next.js 15 (App Router)  |  React 19  |  TypeScript  |  Tailwind CSS v4       |
|   Three.js / React Three Fiber / Drei (@react-three/fiber)  |  Framer Motion       |
+-----------------------------------------------------------------------------------+
|
+-----------------------------------------------------------------------------------+
|                                  BACKEND & API                                    |
|   Next.js Server Actions & Route Handlers  |  Prisma ORM  |  Zod Validation      |
+-----------------------------------------------------------------------------------+
|
+-----------------------------------------------------------------------------------+
|                             DATABASE & CACHE LAYER                                |
|   PostgreSQL (Supabase/Neon)  |  Redis (Upstash) for Rate Limiting & Webhooks     |
+-----------------------------------------------------------------------------------+


---

## 6. Database Schema (Prisma)

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

enum EventStatus {
  UPCOMING
  LIVE_TODAY
  COMPLETED
}

model Review {
  id            String   @id @default(cuid())
  title         String
  venueName     String
  venueSlug     String
  venueHandle   String?
  neighborhood  String
  landmark      String
  category      String
  priceEtb      Float
  menuItems     Json     // [{ dish: string, price: number }]
  caption       String
  images        String[]
  sourceChannel String   @default("TELEGRAM")
  sourceUrl     String?
  postedAt      DateTime @default(now())
  createdAt     DateTime @default(now())

  @@index([neighborhood])
  @@index([category])
  @@index([venueSlug])
  @@index([priceEtb])
}

model Event {
  id             String      @id @default(cuid())
  title          String      // e.g. "KITFO FEST #5"
  slug           String      @unique
  status         EventStatus @default(UPCOMING)
  gregorianDates String      // e.g. "Sep 30 and Oct 01"
  ethiopianDates String?     // e.g. "Meskerem 19 & 20"
  timeRange      String      // e.g. "11:00 AM till 11:00 PM"
  locationName   String      // e.g. "Monarch Hotel Roof Top"
  landmark       String      // e.g. "Piassa, Around Tewdros Square"
  offeringTags   String[]    // ["Kitfo", "Tibs", "Areke", "Tej"]
  activities     String[]    // ["Guragyna Dancers", "Masinko", "Games", "DJs"]
  entranceFee    String      @default("Free")
  phones         String[]    // ["0966550000", "0911239270"]
  posterImage    String
  createdAt      DateTime    @default(now())
}

model PromotionInquiry {
  id           String   @id @default(cuid())
  businessName String
  contactPhone String
  promoType    String   // "Video Review", "Festival Slot", "Banner"
  message      String?
  createdAt    DateTime @default(now())
}
7. Non-Functional Requirements & Security
NFR-1 Performance: First Contentful Paint (FCP) shall remain under 1.2 seconds on local mobile 3G/4G networks in Addis Ababa.

NFR-2 Asset Optimization: All images shall be automatically converted to WebP/AVIF formats and served via an edge CDN.

NFR-3 Security: API keys, Instagram tokens, and Telegram bot secrets shall remain encrypted server-side; webhooks shall validate incoming requests via HMAC signatures (X-Hub-Signature-256).

Document Sign-Off & Status
Status: Approved Specification (v3.1 Master Document)

Target Release: Sprint 2 Feed Polish & Restaurant Profile Pages


---