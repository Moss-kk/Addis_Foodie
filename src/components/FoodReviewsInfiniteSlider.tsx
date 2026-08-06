'use client';

import React from 'react';
import { InfiniteSlider } from '@/components/core/infinite-slider';
import FoodReviewMorphCard from './FoodReviewMorphCard';
import { FoodPost } from '../types/post';

interface FoodReviewsInfiniteSliderProps {
  posts: FoodPost[];
  gap?: number;
  speed?: number;
  speedOnHover?: number;
  className?: string;
}

export default function FoodReviewsInfiniteSlider({
  posts,
  gap = 24,
  speed = 40,
  speedOnHover = 15,
  className = '',
}: FoodReviewsInfiniteSliderProps) {
  if (!posts || posts.length === 0) return null;

  return (
    <div className={`w-full overflow-hidden py-2 ${className}`}>
      <InfiniteSlider gap={gap} speed={speed} speedOnHover={speedOnHover}>
        {posts.map((post) => (
          <FoodReviewMorphCard key={post.id} post={post} />
        ))}
      </InfiniteSlider>
    </div>
  );
}
