import { mockPosts } from '../data/mockPosts';
import { FoodPost } from '../types/post';

export interface RestaurantProfile {
  name: string;
  neighborhood: string;
  avgPrice: number;
  reviewCount: number;
  menu: { name: string; price: number }[];
  posts: FoodPost[];
}

/**
 * Converts a restaurant name into a URL-friendly slug.
 * e.g., "Roadrunner Burger" -> "roadrunner-burger"
 */
export function slugify(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Retrieves aggregated restaurant details by matching slug.
 */
export function getRestaurantBySlug(slug: string): RestaurantProfile | null {
  const matchingPosts = mockPosts.filter(
    (post) => slugify(post.restaurantName) === slug
  );

  if (matchingPosts.length === 0) {
    return null;
  }

  const name = matchingPosts[0].restaurantName;
  const neighborhood = matchingPosts[0].neighborhood;
  const reviewCount = matchingPosts.length;

  const totalPrice = matchingPosts.reduce((acc, post) => acc + post.price, 0);
  const avgPrice = Math.round(totalPrice / reviewCount);

  // Compile and deduplicate menu items by item name across all posts
  const menuMap = new Map<string, number>();
  matchingPosts.forEach((post) => {
    if (post.menuItems) {
      post.menuItems.forEach((item) => {
        if (!menuMap.has(item.name)) {
          menuMap.set(item.name, item.price);
        }
      });
    }
  });

  const menu = Array.from(menuMap.entries()).map(([itemName, price]) => ({
    name: itemName,
    price,
  }));

  return {
    name,
    neighborhood,
    avgPrice,
    reviewCount,
    menu,
    posts: matchingPosts,
  };
}

/**
 * Returns all unique restaurant slugs for static params generation.
 */
export function getAllRestaurantSlugs(): { slug: string }[] {
  const slugSet = new Set<string>();
  mockPosts.forEach((post) => {
    slugSet.add(slugify(post.restaurantName));
  });
  return Array.from(slugSet).map((slug) => ({ slug }));
}
