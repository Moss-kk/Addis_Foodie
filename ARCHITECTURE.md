```markdown
# Technical Architecture & API Specification
## Addis Foodies Digital Infrastructure

---

## 1. Stack & System Topology

+-------------------------------------------------------------------+
|                        Client Layer (Browsers)                    |
+-------------------------------------------------------------------+
|
v
+-------------------------------------------------------------------+
|                   Edge Network / CDN (Vercel Edge)                |
|                    (ISR Cache / WebP Image Edge)                  |
+-------------------------------------------------------------------+
|
v
+-------------------------------------------------------------------+
|                  Next.js App Router (Node.js LTS)                 |
|   +-----------------------+     +-----------------------------+   |
|   |  Public SSR Pages     |     |  Admin & Analytics Router   |   |
|   +-----------------------+     +-----------------------------+   |
|   |  Collaboration Actions|     |  Social Ingestion Service   |   |
|   +-----------------------+     +-----------------------------+   |
+-------------------------------------------------------------------+
|                                     |
v                                     v
+------------------------------+     +------------------------------+
| PostgreSQL Database (Prisma) |     |   Redis Queue (BullMQ)       |
+------------------------------+     +------------------------------+


---

## 2. Technology Selection Matrix

*   **Frontend & Server Framework:** Next.js (App Router, React, TypeScript)[cite: 1].
*   **Database:** PostgreSQL managed via Prisma ORM[cite: 1].
*   **Cache & Job Queue:** Redis + BullMQ for handling asynchronous webhook processing and rate-limiting[cite: 1].
*   **Media Optimization:** Sharp / Edge CDN converting image assets to WebP/AVIF format[cite: 1].
*   **Authentication:** NextAuth.js (Session JWT restricted exclusively to internal admins)[cite: 1].

---

## 3. Database Schema (Prisma Format)

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

enum Role {
  ADMIN
  EDITOR
}

enum RequestStatus {
  PENDING
  REVIEWED
  CONTACTED
  ARCHIVED
}

model User {
  id        String   @id @default(cuid())
  email     String   @unique
  password  String
  name      String
  role      Role     @default(EDITOR)
  createdAt DateTime @default(now())
}

model Venue {
  id          String   @id @default(cuid())
  name        String
  handle      String?  @unique
  address     String
  neighborhood String
  googleMapUrl String?
  phone       String?
  reviews     Review[]
  createdAt   DateTime @default(now())
}

model Review {
  id           String     @id @default(cuid())
  title        String
  verdict      String     @db.Text
  rawCaption   String     @db.Text
  category     String
  priceTier    String
  source       String     // INSTAGRAM or TELEGRAM
  sourceUrl    String?
  sourcePostId String?    @unique
  publishedAt  DateTime
  isFeatured   Boolean    @default(false)
  isPinned     Boolean    @default(false)
  venueId      String
  venue        Venue      @relation(fields: [venueId], references: [id])
  menuItems    MenuItem[]
  media        Media[]
  createdAt    DateTime   @default(now())
}

model MenuItem {
  id       String @id @default(cuid())
  reviewId String
  review   Review @relation(fields: [reviewId], references: [id], onDelete: Cascade)
  name     String
  priceETB Float
}

model Media {
  id       String  @id @default(cuid())
  reviewId String?
  review   Review? @relation(fields: [reviewId], references: [id], onDelete: Cascade)
  eventId  String?
  event    Event?  @relation(fields: [eventId], references: [id], onDelete: Cascade)
  url      String
  type     String  // IMAGE or VIDEO
}

model Event {
  id          String   @id @default(cuid())
  slug        String   @unique
  title       String
  description String   @db.Text
  startDate   DateTime
  endDate     DateTime
  location    String
  bannerUrl   String
  media       Media[]
  createdAt   DateTime @default(now())
}

model CollaborationRequest {
  id          String        @id @default(cuid())
  type        String        // REVIEW_REQUEST, EVENT_COVERAGE, PROMO, PARTNERSHIP
  companyName String
  contactName String
  email       String
  phone       String
  details     String        @db.Text
  budgetETB   String?
  status      RequestStatus @default(PENDING)
  createdAt   DateTime      @default(now())
}
4. API Endpoints Specification
4.1 Public Endpoints
GET /api/v1/reviews — Paginated review listing with filtering (category, neighborhood, price).

GET /api/v1/reviews/[id] — Detailed review card data.

GET /api/v1/events — Active and upcoming food events[cite: 1].

POST /api/v1/collaborate — Submit review/event coverage request (Rate-limited: max 3 requests/ip/hour)[cite: 1].

4.2 Sync Engine & Webhooks
POST /api/webhooks/telegram — Receives updates from official Telegram bot token[cite: 1].

POST /api/webhooks/instagram — Validates Meta X-Hub-Signature-256 and processes incoming posts[cite: 1].

5. Automated Parsing Pipeline
+-----------------------------------+
| Raw Telegram/Instagram Payload    |
+-----------------------------------+
                  |
                  v
+-----------------------------------+
| Extract @handle & Title           |
+-----------------------------------+
                  |
                  v
+-----------------------------------+
| Regex Price Extraction:           |
| (/(\d[\d,]*)\s*(ETB|br|birr)/gi)  |
+-----------------------------------+
                  |
                  v
+-----------------------------------+
| Match Neighborhood Hashtags       |
| (#Bole, #Piassa, #CMC, etc.)      |
+-----------------------------------+
                  |
                  v
+-----------------------------------+
| Persist to DB & Revalidate ISR    |
+-----------------------------------+