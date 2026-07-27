# ADDIS FOODIES DIGITAL MEDIA & FOOD DISCOVERY PLATFORM (ADFP)
## SOFTWARE REQUIREMENTS SPECIFICATION (SRS) — VERSION 5.0
**የሶፍትዌር መስፈርቶች መግለጫ (SRS)**

---

## VOLUME 1 — BUSINESS & PRODUCT

### 1. Executive Summary
Addis Foodies Digital Media & Food Discovery Platform (ADFP) is the official digital operating system and media brand dedicated to Ethiopian culinary culture. Transforming traditional restaurant reviews into a unified media ecosystem, ADFP bridges online discovery, verified itemized pricing, short-form video reels, AI-powered natural language recommendations, social media automation, and interactive spatial food maps across Addis Ababa.

### 2. Vision
To become the definitive, trusted digital media home and operating platform for Ethiopian gastronomy worldwide—empowering food lovers with transparent reviews while elevating local culinary creators and dining establishments.

### 3. Mission
- **Authenticity**: Independent, unannounced inspection methodology and verified ETB itemized pricing.
- **Innovation**: AI-driven natural language food discovery in Amharic, English, and mixed dialects.
- **Community**: Connecting 150,000+ food lovers with local culinary culture, street food gems, and grand festivals.
- **Commercial Impact**: Driving measurable foot traffic and brand awareness for Ethiopian food businesses.

### 4. Brand Story & Editorial Philosophy
Founded as `@addisfoodiess`, Addis Foodies grew into Ethiopia's primary culinary media publication. Our editorial philosophy mandates:
1. **Food First**: Food quality, preparation, and taste precede restaurant aesthetics.
2. **Total Transparency**: Itemized receipt price logging in Ethiopian Birr (ETB).
3. **Cultural Heritage**: Celebrating traditional Habesha cuisine (Kitfo, Tibs, Fasting Beyaynetu, Buna Ceremony) alongside modern dining.

### 5. Business & Revenue Model
- **B2B Media Campaigns**: Sponsored review spotlights, video reel production (TikTok/Reels), banner placements.
- **Festival Sponsorships**: Flagship hosting and media partnership for Kitfo Fest, Burger Challenge, Coffee Week.
- **Menu Digitization & Promotion**: Verified digital menu hosting and itemized pricing audits.
- **Addis AI Insights**: B2B analytics reports on local food trends, demand heatmaps, and price benchmarks.

---

## VOLUME 2 — PRODUCT REQUIREMENTS & SYSTEM ARCHITECTURE

### 6. Homepage Architecture
- **Cinematic Hero**: Full-screen video/photography canvas with Ken Burns zoom animation, editorial headline ("The Definitive Guide to Ethiopia’s Food Culture"), dual CTAs, integrated search engine, trending pills, and live stats bar.
- **Addis AI Assistant Widget**: Natural language chat panel ("ምን ልርዳዎት ነው? How can I help you today?") supporting Amharic & English queries.
- **Featured Editorial Story**: Spotlight lead review + 3 secondary stacked cards.
- **Top Food Reviews Grid**: Card grid with ETB prices, neighborhood tags, ratings, and instant modal detail previews.
- **Short Video Reviews & Reels Carousel**: 9:16 vertical video carousel linked to full reviews.
- **Interactive Food Map Preview**: District clustering (Bole, Kazanchis, Piassa, Sarbet) with live location markers.
- **Events Showcase**: Flagship festival countdown, schedule, location details, and free pass reservation.
- **SRS Overview & Tech Specs**: Technical architecture table of contents and MCP connector showcase.

### 7. Food Reviews Module
Each review contains:
- Food Name (English & Amharic)
- Restaurant Name & Logo
- Exact Neighborhood Location & Google Maps Link
- Itemized ETB Price Breakdown (e.g. Kitfo Special: 450 ETB, Extra Ayib: 60 ETB, Injera: 10 ETB)
- Multi-photo Gallery & 9:16 Video Reel
- Integrated Social Sync Links (Instagram, Telegram, TikTok)
- Addis Foodies Editorial Verdict Score (1.0 to 5.0)
- Related Dishes & Nearby Alternatives

### 8. Short Video Reviews (Reels & Shorts)
- Dedicated 9:16 short-form video player.
- Supports Instagram Reels, TikTok, Telegram Videos, and native uploads.
- Direct sync back to complete restaurant review and map coordinates.

### 9. Addis AI Assistant (Addis AI Engine)
- **Natural Language Capabilities**: Understands natural cravings ("Where can I eat good Kitfo near Bole?", "Best Macchiato under 300 Br", "የእግር ምግብ እንዴት ነው?", "Budget under 400 Br").
- **Multilingual NLU**: Amharic, English, and Amharic-English mixed inputs ("በቦሌ Kitfo").
- **Response Payload**: Returns structured text recommendations, price breakdowns, embedded map pins, and links to full reviews.

### 10. Interactive Food Map
- Custom map interface with clustered markers.
- Filter by Neighborhood (Bole, Kazanchis, Piassa, Sarbet), Food Category (Traditional, Burgers, Fasting, Coffee), and Price Range (Under 300 ETB, 300-700 ETB, 700+ ETB).

### 11. Social Media Sync Pipeline
Automatic multi-channel publishing workflow:
```
Instagram / Telegram / TikTok Post
       ↓
Social Sync Service (Extraction)
       ↓
AI Content Parsing (Title, Price ETB, Location)
       ↓
CMS Approval Queue
       ↓
Web Platform & Map Publishing
```

### 12. Tech Stack & MCP Architecture
- **Frontend**: Next.js 16 (App Router, Turbopack), React 19, TypeScript, Tailwind CSS.
- **State & Theme**: ThemeContext (Day `#FAF8F5` / Night `#120907` mode toggle), LanguageContext (EN / AM).
- **Backend / DB**: PostgreSQL, Prisma ORM, Redis, Cloudinary.
- **MCP Integration**: GitHub MCP, PostgreSQL MCP, Vercel MCP, Cloudinary MCP, OpenAI / Gemini MCP, Google Maps MCP.
