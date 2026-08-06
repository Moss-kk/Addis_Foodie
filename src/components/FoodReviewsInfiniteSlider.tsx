'use client';

import React, { useState } from 'react';
import { InfiniteSlider } from '@/components/core/infinite-slider';
import FoodReviewMorphCard from './FoodReviewMorphCard';
import { FoodPost } from '../types/post';

interface FoodReviewsInfiniteSliderProps {
  posts: FoodPost[];
  gap?: number;
  speed?: number;
  speedOnHover?: number;
  className?: string;
  onSelectPost?: (post: FoodPost) => void;
  isPaused?: boolean;
}

export default function FoodReviewsInfiniteSlider({
  posts,
  gap = 24,
  speed = 40,
  speedOnHover = 0,
  className = '',
  onSelectPost,
  isPaused = false,
}: FoodReviewsInfiniteSliderProps) {
  const [internalPaused, setInternalPaused] = useState<boolean>(false);

  if (!posts || posts.length === 0) return null;

  const shouldPause = isPaused || internalPaused;

  return (
    <div className={`w-full overflow-hidden py-2 ${className}`}>
      <InfiniteSlider
        gap={gap}
        speed={speed}
        speedOnHover={speedOnHover}
        isPaused={shouldPause}
      >
        {posts.map((post) => (
          <FoodReviewMorphCard
            key={post.id}
            post={post}
            onClick={() => {
              setInternalPaused(true);
              onSelectPost?.(post);
            }}
          />
        ))}
      </InfiniteSlider>
    </div>
  );
}
