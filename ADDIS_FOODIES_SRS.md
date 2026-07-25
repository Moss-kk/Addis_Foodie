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

# Software Requirements Specification (SRS)
## Addis Foodies Digital Platform (v4.0 Professional Edition)

---

## 1. Executive Summary & Vision

### 1.1 Document Purpose
This Software Requirements Specification (SRS) defines the functional, non-functional, business, and architectural requirements for the official digital platform of **Addis Foodies**. This document supersedes all earlier software requirements drafts and establishes a brand-first, editorial discovery model.

### 1.2 Product Vision
**Addis Foodies** is a premier, trusted food review brand and digital content creator in Addis Ababa, Ethiopia. The platform serves as the official online home of Addis Foodies, designed to showcase curated food reviews, amplify brand reach, establish a searchable culinary archive, and provide a direct portal for businesses, restaurants, and event organizers to collaborate with the Addis Foodies team.

The platform is **not** a user-generated restaurant review marketplace (like Yelp or TripAdvisor), nor is it a self-service restaurant claim portal. Instead, it complements Addis Foodies' Instagram (@addis.foodie) and Telegram (@AddisFoodies) communities with an SEO-optimized, highly structured, fast, and searchable web interface.

### 1.3 Core Objectives
*   **O1 — Brand Amplification:** Present a world-class, responsive web showcase that elevates Addis Foodies from a social account to a premier media institution.
*   **O2 — Content Discoverability:** Transform short-form social captions into structured, SEO-rich, searchable review cards and restaurant profile hubs.
*   **O3 — Business Collaboration Portal:** Provide clear workflows for restaurants, brands, and event planners to request reviews, coverage, food photography, and promotional partnerships.
*   **O4 — Automated Social Synchronization:** Continuously pull, parse, and structure posts from official Instagram and Telegram channels into the web database with zero manual friction.
*   **O5 — Event Destination Hub:** Feature landmark culinary events (e.g., Kitfo Fest, Coffee Week, Burger Challenges) with dedicated interactive pages.

### 1.4 Out of Scope
The following concepts are explicitly excluded from this system:
*   ❌ Public user account registration, login, or public user reviews.
*   ❌ Self-service restaurant claim/management dashboards[cite: 1].
*   ❌ Direct online food ordering, delivery processing, or table booking transactions.
*   ❌ Consumer loyalty or points-earning programs[cite: 1].

---

## 2. Business Model & Strategy

### 2.1 Value Proposition
*   **For Diners & Foodies:** A fast, searchable, zero-friction directory of authentic food spots in Addis Ababa curated by trusted local experts[cite: 1].
*   **For Restaurants & Brands:** High-visibility exposure to a targeted audience of food enthusiasts, with direct channels to book professional promotional services[cite: 1].
*   **For Addis Foodies:** A centralized business hub that monetizes content creation, event coverage, and brand partnerships through automated incoming inquiry workflows[cite: 1].

### 2.2 Target Audience
1.  **Diners & Tourists:** Local residents and visitors in Addis Ababa looking for curated dining recommendations, menu pricing in ETB, and precise geographic locations[cite: 1].
2.  **Restaurant Owners & Marketing Managers:** Businesses looking to boost foot traffic through paid reviews, menu launch coverage, and food photography[cite: 1].
3.  **Event Organizers & Sponsors:** Corporate sponsors and event management companies seeking media partnerships for food festivals and lifestyle events[cite: 1].

---

## 3. System Architecture & Modules

The platform consists of five primary functional modules:
1.  **Public Brand & Review Showcase:** Homepage, Review Archive, Category Hubs, Restaurant Review Hubs[cite: 1].
2.  **Events & Culinary Challenges Module:** Event landing pages (Kitfo Fest, Burger Week, Coffee Ceremonies) with live details and coverage[cite: 1].
3.  **Business & Collaboration Center:** Services menu, Media Kit, Review Request workflow, Event Coverage Booking form[cite: 1].
4.  **Social Ingestion Engine:** Automated API connectors for Instagram Graph API and Telegram Bot API with NLP/Regex parser[cite: 1].
5.  **Addis Foodies Admin & Analytics Console:** Performance metrics, content overrides, manual post publisher, sync monitoring[cite: 1].

---

## 4. Detailed Functional Requirements

### 4.1 Public Brand Showcase & Navigation
*   **FR-1.1 Homepage Identity:** The hero section shall state: *"Discover trusted restaurant reviews by Addis Foodies."* Prominent calls to action shall include: `Explore Reviews`, `Work With Addis Foodies`, `Request a Review`, and `Contact Us`[cite: 1].
*   **FR-1.2 Zero-Login Browsing:** The entire public directory, events page, and service listing shall be accessible with zero authentication[cite: 1].
*   **FR-1.3 Instant Search:** Real-time client and server search covering dish names, restaurant titles, areas (Bole, Kazanchis, Piassa, Old Airport, etc.), and tags[cite: 1].
*   **FR-1.4 Filter Bar:** Filter by Area, Food Category (Habesha, Fasting/Veggie, Burgers, Italian, Desserts, Coffee, Fine Dining), and Price Tier ($ Budget, $$ Moderate, $$$ Premium)[cite: 1].

### 4.2 Review Pages & Restaurant Profile Hubs
*   **FR-2.1 Review Detail Page:** Every review card shall detail:
    *   Restaurant Name and Handle[cite: 1].
    *   Responsive Image & Video Gallery[cite: 1].
    *   Addis Foodies Editorial Verdict[cite: 1].
    *   Parsed Menu Items with exact ETB pricing[cite: 1].
    *   Landmark Location and Google Maps link[cite: 1].
    *   Original Instagram and Telegram deep-links[cite: 1].
    *   Publication Date and relative freshness badge[cite: 1].
*   **FR-2.2 Curated Restaurant Profile Hub:** Instead of editable profiles, restaurant pages function as aggregate hubs containing all reviews conducted by Addis Foodies for that venue, opening hours, general price range, menu highlights, and direct social links[cite: 1].

### 4.3 Events & Challenges System
*   **FR-3.1 Festival Landing Pages:** Dynamic showcase for signature culinary events (e.g., *Kitfo Fest*, *Addis Burger Challenge*, *Coffee Week*, *Ramadan Fasting Guide*)[cite: 1].
*   **FR-3.2 Event Content Structure:** Include event hero banner, dates, venue locations, participating restaurants, featured Addis Foodies review cards, media gallery, sponsor logos, and Google Maps integration[cite: 1].

### 4.4 Business & Collaboration Center
*   **FR-4.1 Services Showcase:** Present commercial offerings with detailed specs:
    *   Restaurant & Menu Reviews[cite: 1]
    *   Grand Opening & Event Coverage[cite: 1]
    *   Professional Food Photography & Video Production[cite: 1]
    *   Social Media Sponsored Campaigns[cite: 1]
    *   Catering & Brand Promotion[cite: 1]
*   **FR-4.2 Collaboration Request Workflow:** Interactive multi-step form allowing businesses to:
    *   Select collaboration type (Review Request, Event Coverage, Sponsored Post, Media Kit Inquiry)[cite: 1].
    *   Submit business details, target dates, budget range, and special notes[cite: 1].
    *   Receive automated confirmation with response SLAs[cite: 1].
*   **FR-4.3 Brand Kit & Media Kit:** Downloadable press assets including high-res logos, official brand guidelines, audience reach demographics, and case studies[cite: 1].

### 4.5 Ingestion & Automated Synchronization
*   **FR-5.1 Dual Social Pull:** Background engine listening to Instagram Graph API webhooks and Telegram Bot API updates[cite: 1].
*   **FR-5.2 Structured Parsing:** Regex + rule-based extraction engine to identify:
    *   Restaurant handle/name (`@venue`)[cite: 1]
    *   Prices in Birr (`ETB`, `br`, `Birr`)[cite: 1]
    *   Neighborhoods (`#Bole`, `#Piassa`, `#CMC`)[cite: 1]
*   **FR-5.3 Manual Fallback & Override:** Admin panel feature allowing the team to manually edit parsed text, re-tag locations, or pin posts[cite: 1].

---

## 5. Non-Functional Requirements

*   **NFR-1 Performance:** First Contentful Paint (FCP) < 1.2s over mobile 3G/4G in Addis Ababa[cite: 1].
*   **NFR-2 SEO & Structured Data:** Every review and event page must output JSON-LD (`Restaurant`, `Review`, `Event`, `BreadcrumbList`) for maximum search visibility[cite: 1].
*   **NFR-3 Security:** Admin authentication secured via NextAuth/JWT with CSRF protection, rate-limiting on collaboration form submissions, and encrypted API secret storage[cite: 1].
*   **NFR-4 Scalability:** Static pages revalidated via ISR (Incremental Static Regeneration) backed by edge caching, capable of handling high burst traffic during major events[cite: 1].

---

## 6. Comprehensive Data Schema (Conceptual)
---