export interface FoodPost {
  id: string;
  restaurantName: string;
  location: string;
  image: string;
  caption: string;
  price: number; // in ETB
  sourcePlatform: 'telegram' | 'instagram';
  category: 'Traditional' | 'Burgers' | 'Coffee' | 'Fasting';
  timestamp: string; // ISO date string or formatted date
  originalPostUrl: string;
}
