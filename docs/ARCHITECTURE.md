# ADDIS FOODIES SYSTEM ARCHITECTURE (v5.0)

## System Overview Diagram

```
[Social Media Platforms] (Instagram / Telegram / TikTok / Facebook)
           │
           ▼
[Social Sync Ingestion Service] ──► [AI Content Processing Engine]
                                                │
                                                ▼
                                    [CMS Approval Queue]
                                                │
                                                ▼
                                    [PostgreSQL / Prisma DB]
                                                │
                                                ▼
                                 [ADFP Next.js Platform Core]
                                     ├── Web Application
                                     ├── Interactive Food Map
                                     ├── Video Reels Carousel
                                     └── Addis AI Assistant
                                                │
                                                ▼
                                   [Mobile App Ready APIs]
                                  (PWA / Flutter / React Native)
```

## Key Architectural Layers

1. **Ingestion & Social Sync Layer**:
   - Webhook listeners for Instagram Graph API and Telegram Bot API.
   - Media file processor uploading high-res images and 9:16 reels to Cloudinary.

2. **AI & Natural Language Layer**:
   - Addis AI Assistant processing queries in Amharic & English.
   - Automated metadata extraction (Dish, Restaurant, Location, Price ETB).

3. **Data & Storage Layer**:
   - PostgreSQL relational database managed by Prisma ORM.
   - Redis caching for high-speed review searches and trending queries.

4. **Presentation & UI Layer**:
   - Next.js 16 App Router with Turbopack.
   - Responsive Day/Night Theme Context (`ThemeContext.tsx`).
   - Multilingual Context (`LanguageContext.tsx`).
