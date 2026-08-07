'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { FoodPost } from '../types/post';
import ReviewCard from './ReviewCard';

interface AutoReviewMarqueeProps {
  posts: FoodPost[];
  onSelectPost?: (post: FoodPost) => void;
  autoplayDuration?: number;
}

export default function AutoReviewMarquee({
  posts,
  onSelectPost,
  autoplayDuration = 5000,
}: AutoReviewMarqueeProps) {
  const [scrollIndex, setScrollIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll effect matching Home Page animation
  useEffect(() => {
    if (isPaused || posts.length <= 1) return;

    const timer = setInterval(() => {
      setScrollIndex((prev) => (prev + 1) % posts.length);
      setProgressKey((prev) => prev + 1);
    }, autoplayDuration);

    return () => clearInterval(timer);
  }, [isPaused, posts.length, autoplayDuration]);

  // Scroll container smoothly when scrollIndex changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      const cardWidth = 320; // Approx card width + gap
      scrollContainerRef.current.scrollTo({
        left: scrollIndex * cardWidth,
        behavior: 'smooth',
      });
    }
  }, [scrollIndex]);

  const handlePrev = () => {
    setScrollIndex((prev) => (prev === 0 ? posts.length - 1 : prev - 1));
    setProgressKey((prev) => prev + 1);
  };

  const handleNext = () => {
    setScrollIndex((prev) => (prev + 1) % posts.length);
    setProgressKey((prev) => prev + 1);
  };

  if (posts.length === 0) return null;

  return (
    <div
      className="relative w-full flex flex-col gap-3 group/marquee"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* Top Progress Bar & Play/Pause Controls */}
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-1.5">
          {posts.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                setScrollIndex(idx);
                setProgressKey((prev) => prev + 1);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === scrollIndex
                  ? 'w-6 bg-[#F59E0B]'
                  : 'w-1.5 bg-stone-700/60 hover:bg-stone-500'
              }`}
              title={`Jump to item ${idx + 1}`}
            />
          ))}
        </div>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={handlePrev}
            className="p-1.5 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[#F59E0B] text-[var(--text-primary)] transition"
          >
            <ChevronLeft className="w-4 h-4 text-[var(--text-primary)]" />
          </button>

          <button
            type="button"
            onClick={() => setIsPaused(!isPaused)}
            className="p-1.5 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[#F59E0B] text-[var(--text-primary)] transition"
            title={isPaused ? 'Play Autoplay' : 'Pause Autoplay'}
          >
            {isPaused ? <Play className="w-3.5 h-3.5 text-amber-500" /> : <Pause className="w-3.5 h-3.5 text-stone-400" />}
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="p-1.5 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[#F59E0B] text-[var(--text-primary)] transition"
          >
            <ChevronRight className="w-4 h-4 text-[var(--text-primary)]" />
          </button>
        </div>
      </div>

      {/* Side-Scrollable Track */}
      <div
        ref={scrollContainerRef}
        className="flex items-stretch gap-5 overflow-x-auto no-scrollbar pb-3 pt-1 snap-x snap-mandatory scroll-smooth"
      >
        {posts.map((post) => (
          <div key={post.id} className="shrink-0 w-[280px] sm:w-[320px] lg:w-[340px] snap-start flex flex-col">
            <ReviewCard
              post={post}
              onClick={() => onSelectPost?.(post)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
