'use client';

import { useState } from 'react';
import { FoodPost } from '../types/post';
import ReviewCard from './ReviewCard';
import PostDetailModal from './PostDetailModal';

interface RestaurantReviewGridProps {
  posts: FoodPost[];
}

export default function RestaurantReviewGrid({ posts }: RestaurantReviewGridProps) {
  const [activePost, setActivePost] = useState<FoodPost | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {posts.map((post) => (
          <ReviewCard
            key={post.id}
            post={post}
            onClick={() => setActivePost(post)}
          />
        ))}
      </div>

      {activePost && (
        <PostDetailModal
          post={activePost}
          onClose={() => setActivePost(null)}
        />
      )}
    </>
  );
}
