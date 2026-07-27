# ADDIS AI ASSISTANT SPECIFICATION (v5.0)

## Overview
Addis AI is an interactive conversational assistant built directly into the ADFP platform header and home sidebar.

### Supported Query Formats
- **English**: "Where can I eat good Kitfo near Bole?", "Best Macchiato under 300 Br", "Vegetarian food in Kazanchis".
- **Amharic**: "ምን ልርዳዎት ነው?", "በቦሌ Kitfo", "የእግር ምግብ እንዴት ነው?".
- **Mixed**: "Best Kitfo near Bole under 500 ETB".

### Response Payload Structure
```json
{
  "query": "Where can I eat good Kitfo near Bole?",
  "replyText": "Here are 3 top-rated Kitfo spots in Bole with verified ETB pricing:",
  "recommendations": [
    {
      "name": "Habesha 2000",
      "dish": "Kitfo Special",
      "neighborhood": "Bole, Edna Mall",
      "priceEtb": 450,
      "rating": 4.8,
      "coordinates": { "lat": 8.9806, "lng": 38.7834 }
    }
  ]
}
```
