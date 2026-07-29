import { NextRequest, NextResponse } from 'next/server';
import { mockPosts } from '../../../data/mockPosts';
import { FoodPost } from '../../../types/post';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q')?.toLowerCase().trim() || '';
  const category = searchParams.get('category');
  const neighborhood = searchParams.get('neighborhood');
  const maxPrice = searchParams.get('maxPrice') ? Number(searchParams.get('maxPrice')) : null;
  const openNow = searchParams.get('openNow') === 'true';

  let filteredPosts: FoodPost[] = [...mockPosts];

  if (category && category !== 'All') {
    filteredPosts = filteredPosts.filter(p => p.category.toLowerCase() === category.toLowerCase());
  }

  if (neighborhood && neighborhood !== 'All') {
    filteredPosts = filteredPosts.filter(p => p.neighborhood.toLowerCase() === neighborhood.toLowerCase());
  }

  if (maxPrice && !isNaN(maxPrice)) {
    filteredPosts = filteredPosts.filter(p => p.price <= maxPrice);
  }

  if (openNow) {
    filteredPosts = filteredPosts.filter(p => p.isOpenNow === true);
  }

  if (q) {
    filteredPosts = filteredPosts.filter(p => 
      p.restaurantName.toLowerCase().includes(q) ||
      p.caption.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.location.toLowerCase().includes(q) ||
      p.menuItems?.some(item => item.name.toLowerCase().includes(q))
    );
  }

  // Extract individual matching dish items
  const dishes: {
    id: string;
    dishName: string;
    price: number;
    restaurantName: string;
    neighborhood: string;
    location: string;
    rating: string;
    image: string;
    isOpenNow: boolean;
    mapUrl?: string;
  }[] = [];

  filteredPosts.forEach((post) => {
    if (post.menuItems && post.menuItems.length > 0) {
      post.menuItems.forEach((item, idx) => {
        if (!q || item.name.toLowerCase().includes(q) || post.restaurantName.toLowerCase().includes(q) || post.category.toLowerCase().includes(q)) {
          dishes.push({
            id: `${post.id}-dish-${idx}`,
            dishName: item.name,
            price: item.price,
            restaurantName: post.restaurantName,
            neighborhood: post.neighborhood,
            location: post.location,
            rating: post.rating || '4.8',
            image: post.image,
            isOpenNow: post.isOpenNow || true,
            mapUrl: post.mapUrl,
          });
        }
      });
    }
  });

  return NextResponse.json({
    totalRestaurants: filteredPosts.length,
    totalDishes: dishes.length,
    dishes,
    restaurants: filteredPosts,
  });
}
