import { FoodPost } from '../types/post';

export const mockPosts: FoodPost[] = [
  {
    id: '1',
    restaurantName: 'Roadrunner Burger',
    location: 'Bole, around Edna Mall',
    neighborhood: 'Bole',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80'
    ],
    caption: 'The Double Cheese Gourmet Burger at Roadrunner is absolutely massive! The burger features double flame-grilled beef patties, each seasoned perfectly and oozing with melted sharp cheddar. It is layered with fresh lettuce, thick tomato slices, pickled red onions, and house-made special burger sauce, all held together by a pillowy soft toasted brioche bun. If you are looking for a satisfying, rich, and juicy burger experience in Bole, this is the place to be. Every bite is packed with savory goodness. Highly recommended! #Bole #Burgers #AddisFoodies #GourmetBurger',
    price: 680,
    priceFormatted: '680 Br',
    sourcePlatform: 'telegram',
    category: 'Burgers',
    timestamp: '2026-07-24T10:30:00Z',
    originalPostUrl: 'https://t.me/addisfoodies/101',
    menuItems: [
      { name: 'Double Cheese Gourmet Burger', price: 680 },
      { name: 'Classic Single Cheeseburger', price: 480 },
      { name: 'Spicy Loaded Fries', price: 220 },
      { name: 'Soft Drink (Coca-Cola)', price: 70 }
    ],
    mapUrl: 'https://maps.google.com/?q=Roadrunner+Burger+Bole+Addis+Ababa'
  },
  {
    id: '2',
    restaurantName: 'Kakur Traditional Restaurant',
    location: 'Kazanchis, near Intercontinental Hotel',
    neighborhood: 'Kazanchis',
    image: 'https://images.unsplash.com/photo-1585937421612-70a0f261c0b7?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1585937421612-70a0f261c0b7?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80'
    ],
    caption: 'We spent our lunchtime in Kazanchis trying out the legendary Special Beyaynetu at Kakur. This fasting platter is a colorful feast! It features over 10 different types of traditional stews, including Misir Wot (spicy red lentils), Kik Alicha (yellow split pea stew), Gomen (collard greens), Suf Fitzfit (sunflower seed salad), and Key Sir (beetroot salad). The star of the show was the Shiro Wot, served in a sizzling clay pot (Shiro Tegabino) bubbling hot, rich with garlic, onion, and berbere spices. Savoring this with their fresh, slightly sour Enjera is pure bliss. #Kazanchis #Traditional #Fasting #Beyaynetu #Shiro #AddisFoodies',
    price: 420,
    priceFormatted: '420 Br',
    sourcePlatform: 'instagram',
    category: 'Fasting',
    timestamp: '2026-07-24T09:15:00Z',
    originalPostUrl: 'https://instagram.com/p/addisfoodies_2',
    menuItems: [
      { name: 'Special Beyaynetu Platter', price: 420 },
      { name: 'Clay Pot Shiro Tegabino', price: 250 },
      { name: 'Fasting Firfir', price: 300 },
      { name: 'Traditional Spiced Tea', price: 60 }
    ],
    mapUrl: 'https://maps.google.com/?q=Kakur+Traditional+Restaurant+Kazanchis+Addis+Ababa'
  },
  {
    id: '3',
    restaurantName: 'Tomoca Coffee',
    location: 'Sarbet, opposite Canadian Embassy',
    neighborhood: 'Sarbet',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80'
    ],
    caption: 'Morning coffee ritual at Tomoca Coffee in Sarbet. Their classic double macchiato is a masterpiece—bold, rich, and topped with the most perfect velvety foam. The coffee beans are locally sourced and dark roasted, yielding a deep caramel and chocolate note with a pleasant, lingering finish. We paired it with a freshly baked butter croissant, which was wonderfully flaky on the outside and soft on the inside. Tomoca remains the gold standard for traditional Italian-style Ethiopian macchiato in Addis. #Sarbet #Coffee #Macchiato #AddisFoodies #EthiopianCoffee',
    price: 150,
    priceFormatted: '150 Br',
    sourcePlatform: 'telegram',
    category: 'Coffee',
    timestamp: '2026-07-23T08:00:00Z',
    originalPostUrl: 'https://t.me/addisfoodies/99',
    menuItems: [
      { name: 'Double Macchiato', price: 150 },
      { name: 'Single Espresso', price: 90 },
      { name: 'Freshly Baked Croissant', price: 110 },
      { name: 'Brewed Jebena Coffee', price: 80 }
    ],
    mapUrl: 'https://maps.google.com/?q=Tomoca+Coffee+Sarbet+Addis+Ababa'
  },
  {
    id: '4',
    restaurantName: 'Chane Traditional Restaurant',
    location: 'Piassa, behind St. George Church',
    neighborhood: 'Piassa',
    image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=800&q=80'
    ],
    caption: 'Finally made our pilgrimage to the legendary Chane Traditional Restaurant in Piassa to try their famous Doro Wot. Doro Wot is the ultimate Ethiopian celebratory dish, and Chane prepares it with unmatched mastery. The chicken is slow-simmered for hours in a rich, deeply spiced red onion gravy (made with plenty of berbere and spiced butter), resulting in meat so tender it falls off the bone. It is served with a hard-boiled egg that is deeply stained by the flavorful sauce. Enjoyed it on soft, fresh Enjera with a side of cottage cheese (Ayeb) to cut the heat. Pure perfection! #Piassa #Traditional #DoroWot #EthiopianFood #AddisFoodies',
    price: 1200,
    priceFormatted: '1,200 Br',
    sourcePlatform: 'instagram',
    category: 'Traditional',
    timestamp: '2026-07-22T13:45:00Z',
    originalPostUrl: 'https://instagram.com/p/addisfoodies_4',
    menuItems: [
      { name: 'Legendary Doro Wot (Special)', price: 1200 },
      { name: 'Sega Wot (Spicy Beef Stew)', price: 850 },
      { name: 'Gomen Besega (Meat & Greens)', price: 780 },
      { name: 'Tej (Traditional Honey Wine)', price: 180 }
    ],
    mapUrl: 'https://maps.google.com/?q=Chane+Traditional+Restaurant+Piassa+Addis+Ababa'
  },
  {
    id: '5',
    restaurantName: 'Kategna Restaurant',
    location: 'Bole, near Millennium Hall',
    neighborhood: 'Bole',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80'
    ],
    caption: 'A wonderful breakfast/lunch at Kategna Restaurant in Bole. We ordered the Fasting Firfir with a side of Shiro. The Firfir is made by shredding Enjera and soaking it in a spicy berbere sauce with onions, garlic, and oil. The texture was spot on—soft and saturated with sauce but not mushy. The Shiro was rich and aromatic, seasoned with holy basil (besobila) and cardamom. Kategna never fails to deliver high-quality, authentic Ethiopian fasting food in a beautiful, modern setting. #Bole #Fasting #Traditional #Firfir #Shiro #AddisFoodies',
    price: 390,
    priceFormatted: '390 Br',
    sourcePlatform: 'telegram',
    category: 'Fasting',
    timestamp: '2026-07-21T12:00:00Z',
    originalPostUrl: 'https://t.me/addisfoodies/95',
    menuItems: [
      { name: 'Fasting Firfir with Shiro', price: 390 },
      { name: 'Kategna Special Enjera Toast', price: 280 },
      { name: 'Special Shiro Tegabino', price: 290 },
      { name: 'Fresh Avocado Juice Blend', price: 160 }
    ],
    mapUrl: 'https://maps.google.com/?q=Kategna+Restaurant+Bole+Addis+Ababa'
  },
  {
    id: '6',
    restaurantName: 'Burger Club',
    location: 'Bole, in front of Cameroon Street Mall',
    neighborhood: 'Bole',
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=800&q=80'
    ],
    caption: 'Tried out the new Crispy Chicken Burger at Burger Club in Bole. The chicken breast is double-breaded in buttermilk, yielding an extremely crunchy outer crust while remaining tender and juicy on the inside. It is topped with melted pepper jack cheese, pickled jalapeno slices, shredded lettuce, and a spicy sriracha mayo. The spice kick is perfect without being overwhelming, and the crunch factor is top-tier. A solid option for chicken burger lovers! #Bole #Burgers #CrispyChicken #SpicyBurger #AddisFoodies',
    price: 580,
    priceFormatted: '580 Br',
    sourcePlatform: 'instagram',
    category: 'Burgers',
    timestamp: '2026-07-20T17:20:00Z',
    originalPostUrl: 'https://instagram.com/p/addisfoodies_6',
    menuItems: [
      { name: 'Crispy Chicken Burger', price: 580 },
      { name: 'Double Bacon Beef Burger', price: 620 },
      { name: 'Cheese Fries Platter', price: 240 },
      { name: 'Vanilla Milkshake', price: 190 }
    ],
    mapUrl: 'https://maps.google.com/?q=Burger+Club+Bole+Addis+Ababa'
  },
  {
    id: '7',
    restaurantName: 'Harar Coffee',
    location: 'Kazanchis, near UNECA Headquarters',
    neighborhood: 'Kazanchis',
    image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&w=800&q=80'
    ],
    caption: 'Experiencing the traditional Ethiopian coffee ceremony at Harar Coffee in Kazanchis is a peaceful, aromatic escape. The beans are roasted right in front of you over hot coals, releasing a rich incense-like aroma, then ground and brewed in a clay pot called a Jebena. The coffee is served in small cups (Sini) alongside fresh popcorn. The brew is strong, full-bodied, and carries distinct fruity and floral notes typical of Harar beans. Highly recommend this cultural experience. #Kazanchis #Coffee #CoffeeCeremony #JebenaCoffee #AddisFoodies',
    price: 120,
    priceFormatted: '120 Br',
    sourcePlatform: 'telegram',
    category: 'Coffee',
    timestamp: '2026-07-19T15:30:00Z',
    originalPostUrl: 'https://t.me/addisfoodies/91',
    menuItems: [
      { name: 'Traditional Coffee Ceremony', price: 120 },
      { name: 'Harar Blend Double Espresso', price: 100 },
      { name: 'Spiced Black Coffee (Jebena)', price: 70 },
      { name: 'Popcorn Portion (Snack)', price: 40 }
    ],
    mapUrl: 'https://maps.google.com/?q=Harar+Coffee+Kazanchis+Addis+Ababa'
  },
  {
    id: '8',
    restaurantName: 'Savor Restaurant',
    location: 'Sarbet, next to Oromia Bank',
    neighborhood: 'Sarbet',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1586816001966-79b736744398?auto=format&fit=crop&w=800&q=80'
    ],
    caption: 'Had a quick dinner at Savor in Sarbet and ordered their Classic Beef Burger. The beef patty is thick, hand-pressed, and cooked to a juicy medium-well. It has a beautiful char from the grill and is seasoned simply with salt and pepper to let the beef flavor shine. It is topped with cheddar cheese, crisp lettuce, red onion, and dill pickles, served with a side of golden French fries and garlic aioli. Standard but very well-executed! #Sarbet #Burgers #BeefBurger #AddisFoodies',
    price: 720,
    priceFormatted: '720 Br',
    sourcePlatform: 'instagram',
    category: 'Burgers',
    timestamp: '2026-07-18T19:00:00Z',
    originalPostUrl: 'https://instagram.com/p/addisfoodies_8',
    menuItems: [
      { name: 'Classic Beef Burger', price: 720 },
      { name: 'Cheese Steak Sandwich', price: 680 },
      { name: 'Golden Onion Rings', price: 200 },
      { name: 'Craft Draft Beer', price: 150 }
    ],
    mapUrl: 'https://maps.google.com/?q=Savor+Restaurant+Sarbet+Addis+Ababa'
  },
  {
    id: '9',
    restaurantName: 'Yod Abyssinia Cultural Restaurant',
    location: 'Bole, behind Friendship City Center',
    neighborhood: 'Bole',
    image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80'
    ],
    caption: 'Celebrated a special occasion at Yod Abyssinia in Bole with their Special Kitfo. Kitfo is made from the leanest raw beef minced finely and warmed slightly in spiced clarified butter (Niter Kibbeh) and mitmita (chili blend). We ordered it \'lebleb\' (slightly cooked). It was served with Kocho (a dense, fibrous bread made from false banana), Ayeb (cottage cheese), and Gomen (collard greens). The butter flavor was rich, and the spices were perfectly balanced. A premium, high-fidelity cultural dining experience. #Bole #Traditional #Kitfo #Kocho #AddisFoodies',
    price: 850,
    priceFormatted: '850 Br',
    sourcePlatform: 'telegram',
    category: 'Traditional',
    timestamp: '2026-07-17T20:30:00Z',
    originalPostUrl: 'https://t.me/addisfoodies/87',
    menuItems: [
      { name: 'Special Kitfo Platter', price: 850 },
      { name: 'Sega Tibs (Sautéed Beef)', price: 790 },
      { name: 'Traditional Beyaynetu Platter', price: 550 },
      { name: 'Traditional Tej Carafe', price: 400 }
    ],
    mapUrl: 'https://maps.google.com/?q=Yod+Abyssinia+Cultural+Restaurant+Bole+Addis+Ababa'
  }
];
