export interface CuisineCategory {
  id: string;
  slug: string;
  label: string;
  labelAm: string;
  emoji: string;
  description: string;
  descriptionAm: string;
}

export const CUISINE_CATEGORIES: CuisineCategory[] = [
  {
    id: 'traditional-habesha',
    slug: 'traditional-habesha',
    label: 'Traditional / Habesha',
    labelAm: 'ባህላዊ የሐበሻ ምግቦች',
    emoji: '🍲',
    description: 'Authentic Ethiopian Kitfo, Doro Wat, Beyaynetu & Cultural Dining',
    descriptionAm: 'እውነተኛ የኢትዮጵያ ክትፎ፣ ዶሮ ወጥ፣ በያይነቱ እና የባህል ምግቦች',
  },
  {
    id: 'siga-bet',
    slug: 'siga-bet',
    label: 'Siga Bet (Meat House)',
    labelAm: 'ሥጋ ቤት እና ጥብስ',
    emoji: '🥩',
    description: 'Fresh Siga Tibs, Kurt, Tere Siga & Highland Lamb Barbecue',
    descriptionAm: 'ትኩስ የሥጋ ጥብስ፣ ቁርት፣ ጥሬ ሥጋ እና የጉራጌ ክትፎ',
  },
  {
    id: 'indian',
    slug: 'indian',
    label: 'Indian',
    labelAm: 'የሕንድ ምግቦች',
    emoji: '🍛',
    description: 'Aromatic curries, butter chicken, naan & authentic Indian spices',
    descriptionAm: 'የሕንድ ካሪ፣ በተር ቺከን፣ ናን እና የተለያዩ ቅመማ ቅመሞች',
  },
  {
    id: 'chinese',
    slug: 'chinese',
    label: 'Chinese',
    labelAm: 'የቻይና ምግቦች',
    emoji: '🥢',
    description: 'Handmade dumplings, fried rice, hotpot & Sichuan delicacies',
    descriptionAm: 'የተሰሩ ደምፕሊንጎች፣ ፍራይድ ራይስ እና የሲቹዋን ምግቦች',
  },
  {
    id: 'italian',
    slug: 'italian',
    label: 'Italian',
    labelAm: 'የጣሊያን ምግቦች',
    emoji: '🍕',
    description: 'Wood-fired sourdough pizzas, fresh pasta & artisan gelato',
    descriptionAm: 'በእንጨት እሳት የተጋገረ ፒዛ፣ ፓስታ እና ጄላቶ',
  },
  {
    id: 'cafes-coffee',
    slug: 'cafes-coffee',
    label: 'Cafés & Coffee',
    labelAm: 'ቡና እና ካፌ',
    emoji: '☕',
    description: 'Single-origin Ethiopian specialty coffees, macchiatos & cafe culture',
    descriptionAm: 'የኢትዮጵያ ልዩ ቡና፣ ማኪያቶ እና የካፌ ባህል',
  },
  {
    id: 'bakery-pastry',
    slug: 'bakery-pastry',
    label: 'Bakery & Pastry',
    labelAm: 'ባክቴሪያ እና ኬክ',
    emoji: '🥐',
    description: 'Freshly baked croissants, French pastries, cakes & artisan bread',
    descriptionAm: 'ትኩስ ክሩአሳን፣ የፈረንሳይ ኬኮች እና የቤት እንጀራ/ዳቦ',
  },
  {
    id: 'fast-food-burgers',
    slug: 'fast-food-burgers',
    label: 'Fast Food & Burgers',
    labelAm: 'ፈጣን ምግቦች እና በርገር',
    emoji: '🍔',
    description: 'Juicy craft burgers, crispy fried chicken, shawarma & quick bites',
    descriptionAm: 'በአዲስ አበባ ውስጥ ያሉ ምርጥ በርገሮች፣ የተጠበሰ ዶሮ እና ሻዋርማ',
  },
  {
    id: 'fasting-vegan',
    slug: 'fasting-vegan',
    label: 'Fasting / Vegan',
    labelAm: 'የጾም / ቪገን ምግቦች',
    emoji: '🥗',
    description: '100% Plant-based Ethiopian fasting platters, vege-stews & salads',
    descriptionAm: '100% የእፅዋት የጾም በያይነቱ፣ አልጫ ወጥ እና ሰላጣዎች',
  },
  {
    id: 'fine-dining',
    slug: 'fine-dining',
    label: 'Fine Dining',
    labelAm: 'ከፍተኛ ደረጃ ምግቦች',
    emoji: '🍷',
    description: 'Luxury multi-course gastronomy, cocktail lounges & upscale ambiance',
    descriptionAm: 'የቅንጦት ባለ ብዙ ኮርስ ምግቦች፣ ኮክቴል ሌውንጅ እና ውብ ድባብ',
  },
];

export function getCategoryBySlug(slug: string): CuisineCategory | undefined {
  return CUISINE_CATEGORIES.find(
    (cat) => cat.slug.toLowerCase() === slug.toLowerCase() || cat.id.toLowerCase() === slug.toLowerCase()
  );
}

export function getCategoryLabel(slugOrName: string, lang: 'EN' | 'AM' = 'EN'): string {
  const match = CUISINE_CATEGORIES.find(
    (cat) =>
      cat.slug.toLowerCase() === slugOrName.toLowerCase() ||
      cat.label.toLowerCase() === slugOrName.toLowerCase() ||
      cat.id.toLowerCase() === slugOrName.toLowerCase()
  );
  if (match) {
    return lang === 'AM' ? match.labelAm : match.label;
  }
  return slugOrName;
}
