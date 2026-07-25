# Software Requirements Specification (SRS)
## Addis Foodies Digital Platform (v4.0 Brand-First Master Document)
### 3D Interactive Culinary Discovery, Commercial Collaboration Hub & Restaurant Ecosystem

---

## 1. Executive Summary & Vision

### 1.1 Document Purpose
This Software Requirements Specification (SRS) defines the complete functional, non-functional, business, and architectural requirements for the official digital platform of **Addis Foodies**. It establishes a brand-first, editorial discovery model where every review is authored and curated solely by Addis Foodies.

### 1.2 Product Vision
**Addis Foodies** is a premier, trusted food review brand and digital content creator in Addis Ababa, Ethiopia. The platform serves as the official online home of Addis Foodies, designed to:
1. **Communicate Brand Discovery**: "Discover trusted restaurant reviews by Addis Foodies."
2. **Provide Frictionless Discovery**: Zero public login, zero user-generated review noise.
3. **Curate Restaurant Profiles**: Function as curated review hubs (not editable business claim portals).
4. **Offer a Business Collaboration Hub ("Work With Addis Foodies")**: Provide structured workflows for review requests, new menu launches, event invitations, campaign promotions, food photography, and sponsorships.
5. **Feature Brand Assets ("Brand Kit")**: Provide press materials, official logos, brand colors, and media kit details for partners and journalists.

### 1.3 Out of Scope
* ❌ Public user account registration, login, or public user reviews.
* ❌ Editable restaurant claim dashboards.
* ❌ Direct online food delivery transactions.

---

## 2. Platform Navigation & Core Pages

| Route | Page Name | Core Purpose |
| :--- | :--- | :--- |
| `/` | **Homepage Discovery** | Brand hero section, quick search, trending tags, featured carousel, and paginated review feed. |
| `/about` | **About Addis Foodies** | The Addis Foodies story, mission & values, review selection methodology, social growth metrics, and media kit links. |
| `/collaborate` | **Work With Addis Foodies** | Business collaboration portal (review requests, menu launches, event coverage, catering, sponsorships, and full social grid). |
| `/services` | **Services Showcase** | Comprehensive catalog of commercial services (Restaurant Reviews, Launch Coverage, Food Photography, Social Media Campaigns, Event Coverage). |
| `/events` | **Events & Fests** | Destination hub covering restaurant openings, seasonal fasting guides, food festivals (Kitfo Fest), coffee ceremonies, and live music promotions. |
| `/brand-kit` | **Brand Kit & Media Kit** | Official logo downloads, brand color palette, mission statement, typography stack, and press media contact specs. |
| `/restaurant/[slug]` | **Curated Review Hub** | Aggregated review hub for specific venues with compiled menu tables, editorial verdicts, prices in ETB, and Google Maps links. |

---

## 3. Brand Identity & Design Tokens

* **Warm Crimson (`#A81D1D`)**: Primary Brand Color, CTA Buttons, Active Navigation Rings.
* **Amber Gold (`#F59E0B`)**: Price Chips (ETB), Rating Badges, Featured Event Tags.
* **Deep Charcoal (`#111827`)**: Primary Typography, Dark Surface Containers, Header.
* **Soft Cream (`#FAFAFA`)**: Page Background Surface.
* **Typography Stack**: `Plus Jakarta Sans`, `Syne`, `JetBrains Mono`.

---

## 4. Business Model & Services

1. **Restaurant & Menu Reviews**: Editorial review coverage with high-resolution food photography.
2. **New Restaurant Launch Coverage**: Launch campaigns for grand openings.
3. **Food Photography & Video Reels**: Short-form vertical video production for Instagram and TikTok.
4. **Social Media Promotion**: Dedicated featured slots on Instagram (@addis.foodie) and Telegram (@AddisFoodies).
5. **Campaign Collaborations**: Custom promotional challenges and giveaways.
6. **Event Coverage & Festival Hosting**: Media partnership for major culinary festivals (e.g. Kitfo Fest).
7. **Catering & Brand Promotion**: Highlighting catering services and artisanal food brands.