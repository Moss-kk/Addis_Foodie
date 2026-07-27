# ADDIS FOODIES DATABASE SCHEMA (v5.0)

## Prisma Schema Overview

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model Restaurant {
  id           String   @id @default(uuid())
  name         String
  slug         String   @unique
  neighborhood String   // Bole, Kazanchis, Piassa, Sarbet
  location     String
  latitude     Float?
  longitude    Float?
  phone        String?
  rating       Float    @default(4.5)
  reviews      Review[]
  createdAt    DateTime @default(now())
}

model Review {
  id             String         @id @default(uuid())
  title          String
  titleAmharic   String?
  caption        String
  restaurantId   String
  restaurant     Restaurant     @relation(fields: [restaurantId], references: [id])
  category       String         // Traditional, Burgers, Fasting, Coffee, Pizza
  price          Int            // Price in ETB
  itemizedPrices ItemizedItem[]
  images         String[]
  videoReelUrl   String?
  rating         Float
  publishedAt    DateTime       @default(now())
}

model ItemizedItem {
  id        String   @id @default(uuid())
  reviewId  String
  review    Review   @relation(fields: [reviewId], references: [id])
  name      String
  priceEtb  Int
}

model Event {
  id          String   @id @default(uuid())
  title       String
  location    String
  startDate   DateTime
  endDate     DateTime
  description String
  image       String
}
```
