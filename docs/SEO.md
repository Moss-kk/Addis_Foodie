# MULTILINGUAL SEO & METADATA SPECIFICATION (v5.0)

## Overview
ADFP implements automated bilingual SEO for English and Amharic search indexability.

### Structured Data (JSON-LD) Example
```json
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Habesha 2000",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bole",
    "addressRegion": "Addis Ababa",
    "addressCountry": "ET"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "128"
  }
}
```
