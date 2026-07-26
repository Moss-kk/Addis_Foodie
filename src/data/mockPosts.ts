import { FoodPost } from '../types/post';

export const mockPosts: FoodPost[] = [
  {
    id: '1',
    restaurantName: 'Roadrunner Burger',
    location: 'Bole, around Edna Mall',
    neighborhood: 'Bole',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=85',
    images: [
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1000&q=85',
    ],
    caption: 'The Double Cheese Gourmet Burger at Roadrunner is flame-grilled perfection! Double beef patties, melted sharp cheddar, pickled onions, and house burger sauce. #Bole #Burgers #AddisFoodies',
    price: 680,
    priceFormatted: '680 Br',
    sourcePlatform: 'instagram',
    category: 'Burgers',
    timestamp: '2026-07-25T10:30:00Z',
    originalPostUrl: 'https://instagram.com/p/addisfoodies_1',
    reelPlatform: 'instagram_reel',
    viewsCount: '52.4K views',
    menuItems: [
      { name: 'Double Cheese Gourmet Burger', price: 680 },
      { name: 'Classic Single Cheeseburger', price: 480 },
      { name: 'Spicy Loaded Fries', price: 220 },
    ],
    mapUrl: 'https://maps.google.com/?q=Roadrunner+Burger+Bole+Addis+Ababa'
  },
  {
    id: '2',
    restaurantName: 'Kakur Traditional Restaurant',
    location: 'Kazanchis, near Intercontinental',
    neighborhood: 'Kazanchis',
    image: 'https://images.unsplash.com/photo-1585937421612-70a0f261c0b7?auto=format&fit=crop&w=1000&q=85',
    images: [
      'https://images.unsplash.com/photo-1585937421612-70a0f261c0b7?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=85'
    ],
    caption: 'Special Beyaynetu at Kakur! Over 10 traditional stews including Misir Wot, Kik Alicha, and clay pot Shiro Tegabino bubbling hot with garlic and berbere. #Kazanchis #Traditional #Fasting #Shiro',
    price: 420,
    priceFormatted: '420 Br',
    sourcePlatform: 'telegram',
    category: 'Fasting',
    timestamp: '2026-07-24T12:15:00Z',
    originalPostUrl: 'https://t.me/addisfoodies/102',
    reelPlatform: 'tiktok_video',
    viewsCount: '89.1K views',
    menuItems: [
      { name: 'Special Beyaynetu Platter', price: 420 },
      { name: 'Clay Pot Shiro Tegabino', price: 250 },
      { name: 'Fasting Firfir', price: 300 },
    ],
    mapUrl: 'https://maps.google.com/?q=Kakur+Traditional+Restaurant+Kazanchis'
  },
  {
    id: '3',
    restaurantName: 'Tomoca Coffee',
    location: 'Sarbet, opposite Embassy',
    neighborhood: 'Sarbet',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=1000&q=85',
    images: [
      'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=1000&q=85',
    ],
    caption: 'Classic Ethiopian double macchiato at Tomoca Coffee. Bold, dark roasted coffee beans with velvety foam and fresh croissant. #Sarbet #Coffee #Macchiato #AddisFoodies',
    price: 150,
    priceFormatted: '150 Br',
    sourcePlatform: 'instagram',
    category: 'Coffee',
    timestamp: '2026-07-23T08:00:00Z',
    originalPostUrl: 'https://instagram.com/p/addisfoodies_3',
    reelPlatform: 'instagram_reel',
    viewsCount: '34.8K views',
    menuItems: [
      { name: 'Double Macchiato', price: 150 },
      { name: 'Single Espresso', price: 90 },
      { name: 'Freshly Baked Croissant', price: 110 },
    ],
    mapUrl: 'https://maps.google.com/?q=Tomoca+Coffee+Sarbet'
  },
  {
    id: '4',
    restaurantName: 'Chane Traditional Restaurant',
    location: 'Piassa, behind St. George Church',
    neighborhood: 'Piassa',
    image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=1000&q=85',
    caption: 'The legendary slow-cooked Doro Wot at Chane! Tender chicken slow-simmered for hours in red onion gravy with spiced butter (Kibbeh) and boiled egg. #Piassa #Traditional #DoroWot',
    price: 1200,
    priceFormatted: '1,200 Br',
    sourcePlatform: 'telegram',
    category: 'Traditional',
    timestamp: '2026-07-22T13:45:00Z',
    originalPostUrl: 'https://t.me/addisfoodies/98',
    reelPlatform: 'tiktok_video',
    viewsCount: '112.5K views',
    menuItems: [
      { name: 'Legendary Doro Wot (Special)', price: 1200 },
      { name: 'Sega Wot (Spicy Beef Stew)', price: 850 },
      { name: 'Tej (Traditional Honey Wine)', price: 180 }
    ],
    mapUrl: 'https://maps.google.com/?q=Chane+Traditional+Piassa'
  },
  {
    id: '5',
    restaurantName: 'Yod Abyssinia Cultural Restaurant',
    location: 'Bole, near Friendship Center',
    neighborhood: 'Bole',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=85',
    caption: 'Special Kitfo platter at Yod Abyssinia! Finely minced lean beef warmed in spiced clarified butter (Niter Kibbeh), mitmita, served with Kocho, Ayeb, and Gomen. #Bole #Traditional #Kitfo',
    price: 850,
    priceFormatted: '850 Br',
    sourcePlatform: 'instagram',
    category: 'Traditional',
    timestamp: '2026-07-21T19:30:00Z',
    originalPostUrl: 'https://instagram.com/p/addisfoodies_5',
    reelPlatform: 'instagram_reel',
    viewsCount: '67.9K views',
    menuItems: [
      { name: 'Special Kitfo Platter', price: 850 },
      { name: 'Sega Tibs (Sautéed Beef)', price: 790 },
      { name: 'Traditional Tej Carafe', price: 400 }
    ],
    mapUrl: 'https://maps.google.com/?q=Yod+Abyssinia+Bole'
  }
];
