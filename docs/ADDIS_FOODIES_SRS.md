# Software Requirements Specification (SRS)
## Addis Foodies Digital Platform (v4.0 Official Master Specification)
### The Official Digital Home of Addis Foodies

---

## 1. Executive Summary & Product Positioning

### 1.1 Document Purpose
This Software Requirements Specification (SRS) defines the complete functional, non-functional, business, editorial, and architectural requirements for the official digital platform of **Addis Foodies**.

### 1.2 Product Positioning
- **Core Tagline**: *"Discover Addis Ababa One Bite at a Time"*
- **Product Vision**: The Official Digital Home of Addis Foodies.
- **Value Proposition**: Rather than a generic user-generated review directory (like Yelp or TripAdvisor), the platform amplifies Addis Foodies' existing trusted brand, editorial authority, social media reach (150,000+ monthly foodies across Instagram & Telegram), and real food photography.

### 1.3 Out of Scope
* ❌ Public user account registration, login, or public user reviews.
* ❌ Self-service editable restaurant claim dashboards.
* ❌ Direct online food ordering or delivery processing transactions.

---

## 2. Brand Strategy & Editorial Guidelines

### 2.1 Brand Identity & Voice
- **Tone**: Authentic, passionate, authoritative, visually rich, and local-first.
- **Author Attribution**: Every review and verdict is authored solely by Addis Foodies.
- **Price Transparency**: Every dish and review card explicitly displays prices in Ethiopian Birr (`ETB`).

### 2.2 Editorial Content Publishing Workflow
1. **Scouting & Selection**: Organic community recommendations + editorial scouting across Bole, Kazanchis, Piassa, and Sarbet.
2. **Photography & Taste Verification**: High-definition food photography, taste profile evaluation, portion sizing, and hygiene assessment.
3. **Structured Ingestion & ISR Publishing**: Automatic ingestion via Instagram Graph API & Telegram Bot API webhooks, parsing text into structured fields and revalidating via Next.js ISR.

---

## 3. Core Functional Modules

### 3.1 12-Section Storytelling Homepage Layout Sequence
1. **Header**: Brand Badge, Full Navigation, Search Icon, Dark Mode indicator, Language Switcher (`EN | AM`).
2. **Hero Section**: Headline *"Discover Addis Ababa One Bite at a Time"*, subtext, CTAs (`Explore Reviews`, `Work With Addis Foodies`).
3. **Featured This Week**: High-impact editorial spotlights.
4. **Trending Reviews**: Most requested reviews across Addis Ababa.
5. **Search & Useful AI Craving Finder**: Natural language prompt chips (*"I'm craving Kitfo"*, *"Coffee around Bole"*, *"Affordable lunch under 500 Br"*).
6. **Latest Ingested Reviews**: Chronological feed of newly ingested reviews.
7. **Popular Areas**: Neighborhood discovery hubs (Bole, Kazanchis, Piassa, Sarbet).
8. **Upcoming Food Events**: Culinary festivals, countdowns, and participating venues.
9. **Why Trust Addis Foodies**: Review process, editorial impact, and independence statement.
10. **Instagram & Telegram Highlights**: Visual media gallery.
11. **Restaurant Collaboration CTA**: Business invitation banner.
12. **Newsletter Subscription**: Instant email subscription box.
13. **Comprehensive Multi-Column Brand Footer**: Directory, legal, press, and social handles.

### 3.2 Events & Culinary Festivals Hub (`/events`)
- Feature signature events: Kitfo Festival, Coffee Week, Burger Battle, Tibs Challenge, Shiro Week, Ramadan Fasting Guide, Easter Fasting Guide, and Chef Spotlights.
- Includes event countdowns, participating restaurant list, reviews, maps, and reservation contact triggers (`0966-55-00-00` / `0911-23-92-70`).

### 3.3 Work With Addis Foodies Commercial Hub (`/collaborate`)
- Workflows for restaurant review requests, grand openings, food photography, video reels, brand partnerships, campaign promotions, event coverage, and sponsorships.
- Direct contact details (Phone, Email, Telegram, Instagram, TikTok, Facebook, Business Hours).

### 3.4 Services Catalog (`/services`)
- 8 commercial service offerings defined with clear descriptions and booking actions.

### 3.5 Brand Kit & Media Kit (`/brand-kit`)
- Downloadable/viewable official logo, brand color tokens, typography stack, press contact details, and media kit inquiry.

---

## 4. Non-Functional Requirements & Technical Standards

* **NFR-1 Performance Target**: First Contentful Paint (FCP) < 1.2s on mobile 3G/4G networks in Addis Ababa.
* **NFR-2 SEO & Structured Data**: Emit compliant JSON-LD (`Restaurant`, `Review`, `Event`, `BreadcrumbList`) across all dynamic and static pages.
* **NFR-3 Accessibility Standards**: Touch targets strictly >= 48x48px with proper color contrast compliance.
* **NFR-4 Analytics Requirements**: Track search queries, popular area filters, collaboration inquiry conversions, and event phone triggers server-side.
