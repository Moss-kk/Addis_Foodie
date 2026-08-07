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
    id: 'traditional',
    slug: 'traditional',
    label: 'Traditional',
    labelAm: 'ባህላዊ ምግቦች',
    emoji: '🍲',
    description: 'Authentic Ethiopian Kitfo, Doro Wat, Beyaynetu & Cultural Dining',
    descriptionAm: 'እውነተኛ የኢትዮጵያ ክትፎ፣ ዶሮ ወጥ፣ በያይነቱ እና የባህል ምግቦች',
  },
  {
    id: 'burgers',
    slug: 'burgers',
    label: 'Burgers',
    labelAm: 'በርገሮች',
    emoji: '🍔',
    description: 'Juicy craft burgers, smash burgers & gourmet sides in Addis',
    descriptionAm: 'በአዲስ አበባ ውስጥ ያሉ ምርጥ በርገሮች እና የጎን ምግቦች',
  },
  {
    id: 'coffee',
    slug: 'coffee',
    label: 'Coffee',
    labelAm: 'ቡና እና ካፌ',
    emoji: '☕',
    description: 'Single-origin Ethiopian specialty coffees, macchiatos & cafe culture',
    descriptionAm: 'የኢትዮጵያ ልዩ ቡና፣ ማኪያቶ እና የካፌ ባህል',
  },
  {
    id: 'fasting',
    slug: 'fasting',
    label: 'Fasting',
    labelAm: 'የጾም ምግቦች',
    emoji: '🥗',
    description: '100% Plant-based Ethiopian fasting platters, vege-stews & salads',
    descriptionAm: '100% የእፅዋት የጾም በያይነቱ፣ አልጫ ወጥ እና ሰላጣዎች',
  },
  {
    id: 'indian',
    slug: 'indian',
    label: 'Indian',
    labelAm: 'የህንድ ምግቦች',
    emoji: '🍛',
    description: 'Aromatic curries, butter chicken, naan & authentic Indian spices',
    descriptionAm: 'የህንድ ካሪ፣ በተር ቺከን፣ ናን እና የተለያዩ ቅመማ ቅመሞች',
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
    id: 'fast-food',
    slug: 'fast-food',
    label: 'Fast Food',
    labelAm: 'ፈጣን ምግቦች',
    emoji: '🍟',
    description: 'Crispy fried chicken, shawarmas, wraps & quick bites',
    descriptionAm: 'የተጠበሰ ዶሮ፣ ሻዋርማ፣ ራፕ እና ፈጣን ምግቦች',
  },
  {
    id: 'bakery',
    slug: 'bakery',
    label: 'Bakery & Pastry',
    labelAm: 'ባክቴሪያ እና ኬክ',
    emoji: '🥐',
    description: 'Freshly baked croissants, French pastries, cakes & sourdough bread',
    descriptionAm: 'ትኩስ ክሩአሳን፣ የፈረንሳይ ኬኮች እና የቤት እንጀራ/ዳቦ',
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
  return CUISINE_CATEGORIES.find((cat) => cat.slug.toLowerCase() === slug.toLowerCase());
}

export function getCategoryLabel(slugOrName: string, lang: 'EN' | 'AM' = 'EN'): string {
  const match = CUISINE_CATEGORIES.find(
    (cat) => cat.slug.toLowerCase() === slugOrName.toLowerCase() || cat.label.toLowerCase() === slugOrName.toLowerCase()
  );
  if (match) {
    return lang === 'AM' ? match.labelAm : match.label;
  }
  return slugOrName;
}
