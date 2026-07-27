# ADDIS FOODIES API SPECIFICATIONS (v5.0)

## Core API Endpoints

### 1. Food Reviews API
- `GET /api/reviews`: Returns paginated reviews with filter query parameters (`location`, `category`, `priceRange`, `search`).
- `GET /api/reviews/[id]`: Returns detailed review payload with itemized price breakdown in ETB.

### 2. Addis AI Assistant API
- `POST /api/ai/query`: Accepts Amharic or English query string (`{ "prompt": "Where can I eat good Kitfo near Bole?" }`).
- Returns structured JSON response with natural text, recommended restaurant list, average price in ETB, and Google Maps pin coordinates.

### 3. Social Sync Webhook API
- `POST /api/webhooks/instagram`: Accepts incoming Instagram Graph API payloads.
- `POST /api/webhooks/telegram`: Accepts Telegram Bot API update webhooks.

### 4. Food Map API
- `GET /api/map/markers`: Returns spatial coordinates and detail popup data for all verified restaurant locations across Addis Ababa.
