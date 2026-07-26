# Software Requirements Specification (SRS)
## Addis Foodies Digital Platform (v5.0 Master Edition)

---

## 1. Executive Summary & Scope

### 1.1 Purpose & Vision
Addis Foodies is the premier culinary media brand, food review hub, landmark event orchestrator, and digital concierge in Addis Ababa, Ethiopia. This platform serves as the official digital home to showcase curated food reviews, feature landmark culinary festivals (e.g., Kitfo Fest #5 at Monarch Hotel Rooftop, Coffee Week, Burger Challenges), amplify brand reach, and provide businesses with direct channels to request reviews, event coverage, food photography, and commercial promotions.

### 1.2 Updated Scope Boundaries
- **3D WebGL Brand Anchor**: Interactive WebGL brand canvas featuring 3D Addis Foodies emblem rendered in `#A81D1D` Warm Crimson and `#F59E0B` Amber Gold, surrounded by smooth particle dynamics.
- **Culinary Events & Festival Engine**: Multi-day event showcase for landmark food festivals (Kitfo Fest #5, Burger Week, Coffee Ceremony Exhibitions).
- **Direct Commercial Promotion Center**: Dedicated promotion workflows ("DM for Promotion", Menu Reviews, Event Coverage, Brand Sponsorships) with direct contact triggers (`0966-55-00-00`, `0911-23-92-70`, Telegram `@AddisFoodies`, Instagram/TikTok `@addis.foodie`).
- **Comprehensive Multi-Platform Social Hub**: Cross-platform deep links to Telegram, Instagram, TikTok, and direct phone reservations.

---

## 2. Core Functional Requirements

### 2.1 3D WebGL Brand Anchor (FR-1)
- **FR-1.1 Canvas Rendering**: Interactive WebGL canvas embedded in the homepage hero featuring a 3D metallic torus knot emblem with mouse orbit controls and auto-rotation.
- **FR-1.2 Mobile Graceful Fallback**: Automatic detection of WebGL context availability. On non-WebGL devices or low-bandwidth connections, fall back to high-impact CSS animated brand badge without layout shift.

### 2.2 Culinary Events & Competitions Engine (FR-2)
- **FR-2.1 Major Festival Pages**: Dedicated landing showcase for events such as "Kitfo Fest #5 at Monarch Hotel Rooftop".
- **FR-2.2 Detailed Event Metadata**: Display event dates (e.g., Meskerem 19-20 / Sep 30 - Oct 01), operational hours (11:00 AM - 11:00 PM), exact venue location with landmark references ("Around Tewdros Square, Infront of Friendship Park"), entrance terms ("No entrance fee"), menu offerings (Kitfo, Tibs, Tire Siga, Areke, Tej), line-ups (Gurage cultural dancers, DJs, Masinko performance), and games.
- **FR-2.3 One-Touch Reservation & Contact**: Direct click-to-call integration for reservations via primary hotlines (`0966-55-00-00`, `0911-23-92-70`).
- **FR-2.4 Social Cross-Linking**: Native deep links to Telegram (`@AddisFoodies`), Instagram (`@addis.foodie`), and TikTok (`@addis.foodie`).

### 2.3 Commercial Promotion & Partnership Hub (FR-3)
- **FR-3.1 Promotion Showcase**: Clear callouts for "DM for Promotion", Menu Reviews, Grand Opening Coverage, and Photography.
- **FR-3.2 Direct Inquiry Channels**: Display official telephone hotlines, instant messaging links, and multi-step inquiry form with ETB budget tier selection.

---

## 3. Non-Functional & Performance Requirements

- **Sub-1.2s FCP**: Asynchronous 3D WebGL canvas initialization ensuring zero render blocking.
- **Bilingual Internationalization (i18n)**: Full English (`EN`) and Amharic (`AM`) UI text switching across all pages and modals.
- **Accessibility**: Exceed WCAG AA standards (4.5:1 contrast ratio across `#111827`, `#A81D1D`, and `#F59E0B`).
