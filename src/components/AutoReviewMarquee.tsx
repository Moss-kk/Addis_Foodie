'use client';

import React, { useState } from 'react';
import { FoodPost } from '../types/post';
import ReviewCard from './ReviewCard';
import { InfiniteSlider } from './core/infinite-slider';
import { Pause, Play } from 'lucide-react';

interface AutoReviewMarqueeProps {
  posts: FoodPost[];
  onSelectPost?: (post: FoodPost) => void;
  speed?: number;
  speedOnHover?: number;
}

export default function AutoReviewMarquee({
  posts,
  onSelectPost,
  speed = 1,
  speedOnHover = 0.2,
}: AutoReviewMarqueeProps) {
  const [isPaused, setIsPaused] = useState(false);

  if (posts.length === 0) return null;

  return (
    <div
      className="relative w-full flex flex-col gap-2 group/marquee"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* Play/Pause Control Button */}
      <div className="flex items-center justify-end px-1">
        <button
          type="button"
          onClick={() => setIsPaused(!isPaused)}
          className="p-1 rounded-md bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[#F59E0B] text-[var(--text-primary)] transition cursor-pointer text-[10px] flex items-center gap-1 font-mono"
          title={isPaused ? 'Resume Scroll' : 'Pause Scroll'}
        >
          {isPaused ? <Play className="w-3 h-3 text-amber-500" /> : <Pause className="w-3 h-3 text-stone-400" />}
          <span className="text-[10px]">{isPaused ? 'Play' : 'Pause'}</span>
        </button>
      </div>

      {/* InfiniteSlider Smooth Marquee Engine */}
      <InfiniteSlider gap={24} speed={speed} isPaused={isPaused}>
        {posts.map((post) => (
          <div key={post.id} className="w-[280px] sm:w-[320px] lg:w-[340px] shrink-0">
            <ReviewCard
              post={post}
              onClick={() => onSelectPost?.(post)}
            />
          </div>
        ))}
      </InfiniteSlider>
    </div>
  );
}
