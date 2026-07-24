export interface FoodPost {
  id: string;
  restaurantName: string;
  location: string; // e.g. "Bole, near Millennium Hall"
  neighborhood: 'Bole' | 'Kazanchis' | 'Piassa' | 'Sarbet'; // for exact filtering
  image: string; // main/primary image
  images?: string[]; // for multi-image gallery
  caption: string;
  price: number; // raw price for filtering/sorting
  priceFormatted: string; // e.g. "680 Br" or "1,200 Br"
  sourcePlatform: 'telegram' | 'instagram';
  category: 'Traditional' | 'Burgers' | 'Coffee' | 'Fasting';
  timestamp: string;
  originalPostUrl: string;
  menuItems?: { name: string; price: number }[]; // for the detail breakdown table
  mapUrl?: string; // for the Open in Maps button
}
