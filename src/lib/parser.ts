export interface ParsedCaption {
  restaurantName: string;
  neighborhood: 'Bole' | 'Kazanchis' | 'Piassa' | 'Sarbet';
  category: 'Traditional' | 'Burgers' | 'Coffee' | 'Fasting';
  priceEtb: number;
  priceFormatted: string;
  menuItems: { name: string; price: number }[];
  landmark: string;
}

export function parseSocialCaption(caption: string): ParsedCaption {
  // Extract ETB price pattern (e.g. 1,200 ETB, 680 Birr, 450 Br)
  const priceMatch = caption.match(/(\d{1,3}(?:,\d{3})*|\d+)\s*(?:ETB|Birr|Br)/i);
  let priceEtb = 500; // default fallback
  if (priceMatch) {
    priceEtb = parseFloat(priceMatch[1].replace(/,/g, ''));
  }

  // Detect neighborhood
  let neighborhood: 'Bole' | 'Kazanchis' | 'Piassa' | 'Sarbet' = 'Bole';
  if (/kazanchis/i.test(caption)) neighborhood = 'Kazanchis';
  else if (/piassa|piazza/i.test(caption)) neighborhood = 'Piassa';
  else if (/sarbet|sar\s*bet/i.test(caption)) neighborhood = 'Sarbet';

  // Detect category
  let category: 'Traditional' | 'Burgers' | 'Coffee' | 'Fasting' = 'Traditional';
  if (/burger|fries|cheese/i.test(caption)) category = 'Burgers';
  else if (/coffee|espresso|macchiato|roast/i.test(caption)) category = 'Coffee';
  else if (/fasting|beyaynetu|shiro|veggie/i.test(caption)) category = 'Fasting';

  // Extract restaurant name line or handle (@venue)
  const handleMatch = caption.match(/@([A-Za-z0-9_.]+)/);
  const restaurantName = handleMatch
    ? handleMatch[1].replace(/_/g, ' ').toUpperCase()
    : caption.split('\n')[0].substring(0, 30).trim() || 'Addis Dining Spot';

  return {
    restaurantName,
    neighborhood,
    category,
    priceEtb,
    priceFormatted: `${priceEtb.toLocaleString()} ETB`,
    menuItems: [{ name: restaurantName, price: priceEtb }],
    landmark: `${neighborhood}, Addis Ababa`,
  };
}
