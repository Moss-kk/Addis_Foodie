# Software Requirements Specification (SRS)
## Project: Addis Foodies Web Platform
**Document Version:** 3.0 (Updated Edition)
**Target Brand:** Addis Foodies

## 1. Introduction

### 1.1 Purpose
This document specifies the software requirements for the Addis Foodies Web Platform — a modern, visual-first culinary discovery website for Addis Ababa that runs on auto-pilot by synchronizing directly with the official Instagram and Telegram channels.

### 1.2 Scope
* **Zero-Login Public Access:** Diners, foodies, and tourists browse, search, and explore food reviews freely with zero-login public access — no accounts, passwords, or barriers.
* **Automated Social Sync & Recent-First Feed:** A hands-off ingestion engine automatically pulls media, captions, prices, and locations from official Instagram and Telegram posts into organized, branded web review cards. The newest posts always surface first on the homepage.
* **Analysis Dashboard:** An internal analytics dashboard gives the administrator live visibility into sync activity, content distribution, audience growth, and site performance.
* **Addis Foodies Branding:** Warm crimson (`#A81D1D`), amber gold (`#F59E0B`), soft cream (`#FAFAFA`), and dark charcoal (`#1F2937`) palette.

## 2. Overall Description

### 2.1 User Classes
1. **General Visitor (Diner / Foodie):** Browses and searches places to eat in Addis Ababa with zero friction.
2. **System Administrator / Operator:** Manages brand channels, monitors sync status, and views analytics via the internal dashboard.
3. **Bot / Sync Engine:** Automated background worker ingesting feeds without manual data entry.

### 2.2 System Architecture
* **Frontend:** Next.js (App Router) + Tailwind CSS + Framer Motion
* **Automation Engine:** Serverless API routes listening to Instagram Graph API & Telegram Bot API webhooks.
* **Database:** PostgreSQL via Prisma ORM storing posts, media, venues, locations, and categories.

## 3. System Features & Functional Requirements
* **FR-1 (Zero-Login Public Discovery):** Public access with interactive search and filtering by Area (Bole, Kazanchis, Sarbet, Piassa, CMC), Category (Traditional, Burgers, Fasting, Coffee), and Price Range.
* **FR-2 (Automated Ingestion Engine):** Webhook endpoints fetching posts, reels, photos, captions, and map links from Telegram and Instagram.
* **FR-3 (Hashtag & Caption Parser):** Auto-extracts tags (`#Bole`, `#Burger`, `#Fasting`) to classify places and price tiers ($/$$/$$$).
* **FR-4 (Admin Dashboard):** KPI cards tracking sync health, recent activity logs, and content stats.
# Development Governance

The Addis Foodies project follows a documentation-first development process.

Every feature must first be reflected in:

• Software Requirements Specification (SRS)

• DESIGN.md

before implementation begins.

If implementation requires architectural changes, the SRS must be updated first.

No feature may exist in the codebase without documentation.

Every Pull Request must satisfy:

✓ SRS Updated

✓ DESIGN Updated

✓ Implementation Complete

✓ Responsive

✓ Accessible

✓ Production Ready

The SRS is considered the single source of truth.
## 3. System Features & Functional Requirements (continued)
* **FR-5 (Paginated Feed):** Homepage feed loads an initial batch of 9 posts, newest-first; a "Load More" action reveals the next batch client-side without route change or layout shift.
* **FR-6 (Advanced Filtering & Sorting):** Extend FilterBar with a Price Range filter (Under 300 Br / 300–700 Br / 700+ Br) and a Sort control (Newest, Price: Low to High, Price: High to Low), composable with existing Area/Category filters.
* **FR-7 (Restaurant Profile Pages):** Each restaurant gets a dedicated page at `/restaurant/[slug]` aggregating every post tied to that `restaurantName`: total review count, average price, neighborhood, compiled menu (deduped across posts), and a grid of all its reviews. Reachable by tapping the restaurant name on any ReviewCard or PostDetailModal.

**Document Version:** 3.1 (Sprint 2 — Feed Polish & Restaurant Pages)