export const AWARDS_BASE_URL = 'https://addisfoodie-awards.netlify.app/';

// Specific category URL overrides if provided by the human, defaulting to main Awards homepage
export const AWARDS_CATEGORY_URLS: Record<string, string> = {
  'cafes-coffee': AWARDS_BASE_URL,
  'traditional-habesha': AWARDS_BASE_URL,
  'siga-bet': AWARDS_BASE_URL,
  'indian': AWARDS_BASE_URL,
  'chinese': AWARDS_BASE_URL,
  'italian': AWARDS_BASE_URL,
  'bakery-pastry': AWARDS_BASE_URL,
  'fast-food-burgers': AWARDS_BASE_URL,
  'fasting-vegan': AWARDS_BASE_URL,
  'fine-dining': AWARDS_BASE_URL,
};

export function getAwardsUrl(categorySlugOrName?: string): string {
  if (!categorySlugOrName) return AWARDS_BASE_URL;

  const normalized = categorySlugOrName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  return AWARDS_CATEGORY_URLS[normalized] || AWARDS_BASE_URL;
}
