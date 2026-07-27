export interface MenuItem {
  name: string;
  price: number;
}

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
  menuItems?: MenuItem[]; // for the detail breakdown table
  mapUrl?: string; // for the Open in Maps button
  videoUrl?: string; // video reel URL
  reelPlatform?: 'instagram_reel' | 'tiktok_video';
  viewsCount?: string; // e.g. "48.5K views"
  rating?: string; // e.g. "4.8"
}

export type EventStatus = 'UPCOMING' | 'LIVE_TODAY' | 'COMPLETED';

export interface CulinaryEvent {
  id: string;
  title: string;
  slug: string;
  status: EventStatus;
  gregorianDates: string;
  ethiopianDates?: string;
  timeRange: string;
  locationName: string;
  landmark: string;
  offeringTags: string[];
  activities: string[];
  entranceFee: string;
  phones: string[];
  posterImage: string;
  createdAt: string;
}

export interface PromotionInquiryPayload {
  businessName: string;
  contactPhone: string;
  promoType: 'Video Review' | 'Festival Slot' | 'Banner Slot' | 'Photography';
  message?: string;
}
