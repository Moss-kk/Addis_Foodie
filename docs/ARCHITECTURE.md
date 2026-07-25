# ADDIS FOODIES — TECHNICAL ARCHITECTURE & SYSTEM SPECIFICATIONS

## 1. System Architecture Overview

```
+-----------------------------------------------------------------------------------+
|                                 FRONTEND LAYER                                    |
|   Next.js (App Router)  |  React 19  |  TypeScript  |  Tailwind CSS               |
|   Three.js / React Three Fiber / Drei  |  Framer Motion                           |
+-----------------------------------------------------------------------------------+
                                         |
+-----------------------------------------------------------------------------------+
|                                  BACKEND & API                                    |
|   Next.js Server Actions & Route Handlers  |  Prisma ORM  |  Zod Validation      |
+-----------------------------------------------------------------------------------+
                                         |
+-----------------------------------------------------------------------------------+
|                             DATABASE & CACHE LAYER                                |
|   PostgreSQL  |  Redis (Upstash) for Rate Limiting & Social Ingestion Webhooks    |
+-----------------------------------------------------------------------------------+
```

---

## 2. Technical Stack Specifications

- **Framework**: Next.js (App Router, Server Components & Server Actions)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS + Radix / Shadcn UI primitives
- **ORM & Database**: Prisma ORM with PostgreSQL backend
- **Caching & ISR**: On-demand Incremental Static Regeneration (ISR) revalidated via Server Actions / Webhooks
- **SEO & Microdata**: JSON-LD (`Restaurant`, `Review`, `Event`, `BreadcrumbList`) rendered on Server Components

---

## 3. Webhook & Ingestion Pipeline
- **Instagram Graph API Connector**: Webhook handler receiving media payload, extracting caption text, images, and permalinks.
- **Telegram Bot API Connector**: Webhook handler parsing channel posts from `@AddisFoodies`.
- **NLP / Regex Parsing Rules**:
  - Venue Name / Handle (`@venue`)
  - Price Tag (`ETB [0-9,]+`, `[0-9,]+\s*Birr`, `[0-9,]+\s*Br`)
  - Area Tag (`#Bole`, `#Piassa`, `#Kazanchis`, etc.)
  - Menu Array (`[{ dish: string, price: number }]`)

---

## 4. SEO & Structured Data (JSON-LD)
All public pages render compliant schema.org structured data:
```json
{
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "Restaurant",
    "name": "Yado Kitfo",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Addis Ababa",
      "streetAddress": "Bole near Millennium Hall"
    }
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "4.8",
    "bestRating": "5"
  },
  "author": {
    "@type": "Organization",
    "name": "Addis Foodies"
  }
}
```
