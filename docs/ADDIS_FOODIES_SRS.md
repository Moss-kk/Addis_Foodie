# Software Requirements Specification (SRS)
## Addis Foodies Digital Platform (v4.0 Master Document)
### 3D Interactive Culinary Discovery, Festival Ticketing & Restaurant Ecosystem

---

## 1. Executive Summary & Vision

### 1.1 Document Purpose
This Software Requirements Specification (SRS) defines the functional, non-functional, business, and architectural requirements for the official digital platform of **Addis Foodies**. It supersedes all earlier software requirements drafts and establishes a brand-first, editorial discovery model.

### 1.2 Product Vision
**Addis Foodies** is a premier, trusted food review brand and digital content creator in Addis Ababa, Ethiopia. The platform serves as the official online home of Addis Foodies, designed to showcase curated food reviews, amplify brand reach, establish a searchable culinary archive, and provide a direct portal for businesses, restaurants, and event organizers to collaborate with the Addis Foodies team.

The platform is **NOT** a user-generated restaurant review marketplace (like Yelp or TripAdvisor), nor is it a self-service restaurant claim portal. Instead, it complements Addis Foodies' Instagram (@addis.foodie) and Telegram (@AddisFoodies) communities with an SEO-optimized, highly structured, fast, and searchable web interface.

### 1.3 Core Objectives
* **O1 — Brand Amplification:** Present a world-class, responsive web showcase that elevates Addis Foodies from a social account to a premier media institution.
* **O2 — Content Discoverability:** Transform short-form social captions into structured, SEO-rich, searchable review cards and restaurant profile hubs.
* **O3 — Business Collaboration Portal:** Provide clear workflows for restaurants, brands, and event planners to request reviews, coverage, food photography, and promotional partnerships.
* **O4 — Automated Social Synchronization:** Continuously pull, parse, and structure posts from official Instagram and Telegram channels into the web database with zero manual friction.
* **O5 — Event Destination Hub:** Feature landmark culinary events (e.g., Kitfo Fest, Coffee Week, Burger Challenges) with dedicated interactive pages.

### 1.4 Out of Scope
The following concepts are explicitly excluded from this system:
* ❌ Public user account registration, login, or public user reviews.
* ❌ Self-service restaurant claim/management dashboards.
* ❌ Direct online food ordering, delivery processing, or table booking transactions.
* ❌ Consumer loyalty or points-earning programs.

---

## 2. Business Model & Strategy

### 2.1 Value Proposition
* **For Diners & Foodies:** A fast, searchable, zero-friction directory of authentic food spots in Addis Ababa curated by trusted local experts.
* **For Restaurants & Brands:** High-visibility exposure to a targeted audience of food enthusiasts, with direct channels to book professional promotional services.
* **For Addis Foodies:** A centralized business hub that monetizes content creation, event coverage, and brand partnerships through automated incoming inquiry workflows.

### 2.2 Target Audience
1. **Diners & Tourists:** Local residents and visitors in Addis Ababa looking for curated dining recommendations, menu pricing in ETB, and precise geographic locations.
2. **Restaurant Owners & Marketing Managers:** Businesses looking to boost foot traffic through paid reviews, menu launch coverage, and food photography.
3. **Event Organizers & Sponsors:** Corporate sponsors and event management companies seeking media partnerships for food festivals and lifestyle events.

---

## 3. System Architecture & Modules

The platform consists of five primary functional modules:
1. **Public Brand & Review Showcase:** Homepage, Review Archive, Category Hubs, Restaurant Review Hubs.
2. **Events & Culinary Challenges Module:** Event landing pages (Kitfo Fest, Burger Week, Coffee Ceremonies) with live details and coverage.
3. **Business & Collaboration Center:** Services menu, Media Kit, Review Request workflow, Event Coverage Booking form.
4. **Social Ingestion Engine:** Automated API connectors for Instagram Graph API and Telegram Bot API with NLP/Regex parser.
5. **Addis Foodies Admin & Analytics Console:** Performance metrics, content overrides, manual post publisher, sync monitoring.

---

## 4. Detailed Functional Requirements

### 4.1 Public Brand Showcase & Navigation
* **FR-1.1 Homepage Identity:** The hero section shall state: *"Discover trusted restaurant reviews by Addis Foodies."* Prominent calls to action shall include: `Explore Reviews`, `Work With Addis Foodies`, `Request a Review`, and `Contact Us`.
* **FR-1.2 Zero-Login Browsing:** The entire public directory, events page, and service listing shall be accessible with zero authentication.
* **FR-1.3 Instant Search:** Real-time client and server search covering dish names, restaurant titles, areas (Bole, Kazanchis, Piassa, Old Airport, etc.), and tags.
* **FR-1.4 Filter Bar:** Filter by Area, Food Category (Habesha, Fasting/Veggie, Burgers, Italian, Desserts, Coffee, Fine Dining), and Price Tier ($ Budget, $$ Moderate, $$$ Premium).

### 4.2 Review Pages & Restaurant Profile Hubs
* **FR-2.1 Review Detail Page:** Every review card shall detail:
    * Restaurant Name and Handle
    * Responsive Image & Video Gallery
    * Addis Foodies Editorial Verdict
    * Parsed Menu Items with exact ETB pricing
    * Landmark Location and Google Maps link
    * Original Instagram and Telegram deep-links
    * Publication Date and relative freshness badge
* **FR-2.2 Curated Restaurant Profile Hub:** Instead of editable profiles, restaurant pages function as aggregate hubs containing all reviews conducted by Addis Foodies for that venue, opening hours, general price range, menu highlights, and direct social links.

### 4.3 Events & Challenges System
* **FR-3.1 Festival Landing Pages:** Dynamic showcase for signature culinary events (e.g., *Kitfo Fest*, *Addis Burger Challenge*, *Coffee Week*, *Ramadan Fasting Guide*).
* **FR-3.2 Event Content Structure:** Include event hero banner, dates, venue locations, participating restaurants, featured Addis Foodies review cards, media gallery, sponsor logos, and Google Maps integration.

### 4.4 Business & Collaboration Center
* **FR-4.1 Services Showcase:** Present commercial offerings with detailed specs:
    * Restaurant & Menu Reviews
    * Grand Opening & Event Coverage
    * Professional Food Photography & Video Production
    * Social Media Sponsored Campaigns
    * Catering & Brand Promotion
* **FR-4.2 Collaboration Request Workflow:** Interactive multi-step form allowing businesses to:
    * Select collaboration type (Review Request, Event Coverage, Sponsored Post, Media Kit Inquiry).
    * Submit business details, target dates, budget range, and special notes.
    * Receive automated confirmation with response SLAs.
* **FR-4.3 Brand Kit & Media Kit:** Downloadable press assets including high-res logos, official brand guidelines, audience reach demographics, and case studies.

### 4.5 Ingestion & Automated Synchronization
* **FR-5.1 Dual Social Pull:** Background engine listening to Instagram Graph API webhooks and Telegram Bot API updates.
* **FR-5.2 Structured Parsing:** Regex + rule-based extraction engine to identify:
    * Restaurant handle/name (`@venue`)
    * Prices in Birr (`ETB`, `br`, `Birr`)
    * Neighborhoods (`#Bole`, `#Piassa`, `#CMC`)
* **FR-5.3 Manual Fallback & Override:** Admin panel feature allowing the team to manually edit parsed text, re-tag locations, or pin posts.

---

## 5. Non-Functional Requirements & Security

* **NFR-1 Performance:** First Contentful Paint (FCP) < 1.2s over mobile 3G/4G in Addis Ababa.
* **NFR-2 SEO & Structured Data:** Every review and event page must output JSON-LD (`Restaurant`, `Review`, `Event`, `BreadcrumbList`) for maximum search visibility.
* **NFR-3 Security:** API keys, Instagram tokens, and Telegram bot secrets shall remain encrypted server-side; webhooks shall validate incoming requests via HMAC signatures (X-Hub-Signature-256).
* **NFR-4 Scalability:** Static pages revalidated via ISR (Incremental Static Regeneration) backed by edge caching, capable of handling high burst traffic during major events.
