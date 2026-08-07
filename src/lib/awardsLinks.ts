export const AWARDS_BASE_URL = 'https://addisfoodie-awards.netlify.app/';
export const AWARDS_CATEGORIES_URL = 'https://addisfoodie-awards.netlify.app/categories';

// Exact Netlify category URLs provided for direct voting hand-off
export const AWARDS_CATEGORY_URLS: Record<string, string> = {
  'cafes': 'https://addisfoodie-awards.netlify.app/categories/cafes?sbbom=true',
  'cafes-coffee': 'https://addisfoodie-awards.netlify.app/categories/cafes?sbbom=true',
  'chinese': 'https://addisfoodie-awards.netlify.app/categories/chinese?sbbom=true',
  'italian': 'https://addisfoodie-awards.netlify.app/categories/italian?sbbom=true',
  'traditional': 'https://addisfoodie-awards.netlify.app/categories/traditional?sbbom=true',
  'traditional-habesha': 'https://addisfoodie-awards.netlify.app/categories/traditional?sbbom=true',
  'siga-bet': 'https://addisfoodie-awards.netlify.app/categories/siga-bet?sbbom=true',
  'indian': 'https://addisfoodie-awards.netlify.app/categories/indian?sbbom=true',
  'bakery': 'https://addisfoodie-awards.netlify.app/categories/bakery?sbbom=true',
  'bakery-pastry': 'https://addisfoodie-awards.netlify.app/categories/bakery?sbbom=true',
  'burgers': 'https://addisfoodie-awards.netlify.app/categories/burgers?sbbom=true',
  'fast-food-burgers': 'https://addisfoodie-awards.netlify.app/categories/burgers?sbbom=true',
  'fasting': 'https://addisfoodie-awards.netlify.app/categories/fasting?sbbom=true',
  'fasting-vegan': 'https://addisfoodie-awards.netlify.app/categories/fasting?sbbom=true',
  'fine-dining': 'https://addisfoodie-awards.netlify.app/categories/fine-dining?sbbom=true',
  'french': 'https://addisfoodie-awards.netlify.app/categories/bakery?sbbom=true',
  'japanese': 'https://addisfoodie-awards.netlify.app/categories/chinese?sbbom=true',
  'arabian': 'https://addisfoodie-awards.netlify.app/categories/siga-bet?sbbom=true',
};

export function getAwardsUrl(categorySlugOrName?: string): string {
  if (!categorySlugOrName) return AWARDS_CATEGORIES_URL;

  const normalized = categorySlugOrName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  return AWARDS_CATEGORY_URLS[normalized] || AWARDS_CATEGORIES_URL;
}
