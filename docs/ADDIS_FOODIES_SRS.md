# ADDIS FOODIES WEB PLATFORM
## SOFTWARE REQUIREMENTS SPECIFICATION (SRS v4.0 Professional Edition)
### 3D Interactive Culinary Discovery, Festival Ticketing & Restaurant Ecosystem

---

## 1. Executive Summary & Vision

### 1.1 Document Purpose
This Software Requirements Specification (SRS) defines the functional, non-functional, business, visual, and architectural requirements for the official digital platform of **Addis Foodies**. It supersedes all earlier drafts and establishes a brand-first, editorial discovery model.

### 1.2 Product Vision
**Addis Foodies** is a premier, trusted food review brand and digital content creator in Addis Ababa, Ethiopia. The platform serves as the official online home of Addis Foodies, designed to showcase curated food reviews, amplify brand reach, establish a searchable culinary archive, and provide a direct portal for businesses, restaurants, and event organizers to collaborate with the Addis Foodies team.

The platform is **NOT** a user-generated restaurant review marketplace (like Yelp or TripAdvisor), nor is it a self-service restaurant claim portal. Instead, it complements Addis Foodies' Instagram (@addis.foodie) and Telegram (@AddisFoodies) communities with an SEO-optimized, highly structured, fast, and searchable web interface.

---

## 2. Guardrails & Non-Negotiable Constraints

1. ❌ **NO Public User Auth / Login**: Visitors browse, search, and view reviews with zero registration, passwords, or logins.
2. ❌ **NO Restaurant Claim Dashboards**: Restaurants cannot self-manage or edit profile pages. All content is curated solely by the Addis Foodies team.
3. ❌ **NO User-Generated Reviews**: Public users cannot post reviews or star ratings.
4. ✅ **Brand Color Palette Compliance**:
   - Warm Crimson: `#A81D1D` (Primary brand, active states, key badges)
   - Amber Gold: `#F59E0B` (Secondary highlights, price chips, ratings)
   - Deep Charcoal: `#111827` (Headings, dark containers, high contrast text)
   - Soft Cream: `#FAFAFA` (Background surface)
5. ✅ **Technical Stack Constraints**:
   - Framework: Next.js (App Router, Server Components, Server Actions)
   - Language: TypeScript (Strict mode)
   - Styling: Tailwind CSS + Shadcn UI / Radix UI
   - Data & Cache: PostgreSQL (via Prisma ORM) + Redis / BullMQ
   - Optimization: WebP/AVIF images, Sub-1.5s FCP optimized for mobile 3G/4G networks in Addis Ababa.

---

## 3. Core Modules & Capabilities

1. **Interactive 3D Brand Experience**: WebGL hero canvas rendering the official Addis Foodies cutlery logo in 3D with dynamic lighting, hover physics, and ambient particles.
2. **Live Events & Food Festivals Engine ("Kitfo Fest Portal")**: Real-time event publishing for food festivals (e.g., *Kitfo Fest #5*, *Burger Week*), live schedule, offerings, and direct phone reservation triggers (`0966-55-00-00` / `0911-23-92-70`).
3. **Zero-Login Public Discovery & Restaurant Profiles**: Fast search and filtering by Area (Bole, Piassa, etc.), Price Range (Under 300 Br / 300-700 Br / 700+ Br), Category (Habesha, Fasting/Veggie, etc.), and dedicated restaurant pages (`/restaurant/[slug]`).
4. **Commercial Promotion Engine ("DM for Promotion")**: Booking interface for restaurant sponsorships, video review requests, award nominations, and direct social links (TikTok, Telegram, Instagram, Phone).
5. **Automated Content Sync Engine**: Parse incoming posts from official Instagram (@addis.foodie) and Telegram (@AddisFoodies) channels into structured reviews with prices in ETB.

---

## 4. Non-Functional Requirements

* **NFR-1 Performance**: First Contentful Paint (FCP) < 1.2s on mobile 3G/4G networks in Addis Ababa.
* **NFR-2 SEO & Structured Data**: Every public review, event, and restaurant profile page emits valid JSON-LD (`Restaurant`, `Review`, `Event`).
* **NFR-3 Accessibility**: Mobile-first design with touch targets min 48x48px and clear visual contrast.
* **NFR-4 Security**: Webhooks validated via HMAC signatures (X-Hub-Signature-256), encrypted secrets server-side.
