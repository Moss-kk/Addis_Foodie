'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { FoodPost } from '../types/post';
import { slugify } from '../lib/restaurants';

interface FeaturedCarouselProps {
  posts: FoodPost[];
  onSelectPost: (post: FoodPost) => void;
}

const AUTOPLAY_DURATION = 5000; // 5 seconds per slide
const PROGRESS_INTERVAL = 50; // Update progress bar smooth animation every 50ms

export default function FeaturedCarousel({ posts, onSelectPost }: FeaturedCarouselProps) {
  // Select top 4 posts as featured highlights
  const featured = posts.slice(0, 4);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0); // 0 to 100 percentage
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const current = featured[activeIndex] || featured[0];

  // Detect OS prefers-reduced-motion preference
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
    } else {
      mediaQuery.addListener(handleChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  // Handle Document Visibility Changes (pause when tab loses focus)
  useEffect(() => {
    if (typeof document === 'undefined') return;
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsPaused(true);
      } else {
        setIsPaused(false);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Autoplay Timer & Progress Bar Loop
  useEffect(() => {
    if (featured.length === 0 || isPaused || prefersReducedMotion) {
      return;
    }

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + (PROGRESS_INTERVAL / AUTOPLAY_DURATION) * 100;
        if (next >= 100) {
          setActiveIndex((idx) => (idx + 1) % featured.length);
          return 0;
        }
        return next;
      });
    }, PROGRESS_INTERVAL);

    return () => clearInterval(timer);
  }, [featured.length, isPaused, prefersReducedMotion]);

  // Reset progress bar whenever active index changes manually or automatically
  const handleSelectSlide = (idx: number) => {
    setActiveIndex(idx);
    setProgress(0);
  };

  // Handle Swipe Gesture
  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      // Swiped Left -> Next slide
      handleSelectSlide((activeIndex + 1) % featured.length);
    } else if (info.offset.x > swipeThreshold) {
      // Swiped Right -> Previous slide
      handleSelectSlide((activeIndex - 1 + featured.length) % featured.length);
    }
  };

  if (!current || featured.length === 0) return null;

  return (
    <section className="w-full flex flex-col gap-4">
      {/* Section Title Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="flex h-3 w-3 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
          </span>
          <h3 className="font-syne font-black text-lg sm:text-xl text-[var(--text-primary)] tracking-tight">
            Weekly Foodie Spotlights
          </h3>
        </div>
        <span className="text-xs font-bold text-zinc-400">
          Handpicked Must-Try Spots
        </span>
      </div>

      {/* Featured Showcase Card with Drag & Touch Support */}
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragEnd={handleDragEnd}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
        className="relative w-full rounded-3xl overflow-hidden bg-zinc-950 text-white border border-zinc-800 shadow-2xl group min-h-[320px] sm:min-h-[380px] flex flex-col justify-end touch-pan-y select-none cursor-grab active:cursor-grabbing"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 z-0"
          >
            {/* Background Image with Gradient Overlay */}
            <Image
              src={current.image}
              alt={current.restaurantName}
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-55"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-transparent z-10 pointer-events-none" />
          </motion.div>
        </AnimatePresence>

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[10px] font-mono font-black uppercase tracking-wider bg-zinc-900/90 text-[#F59E0B] border border-zinc-800 shadow-md backdrop-blur-md">
            🔥 Spotlight #{activeIndex + 1}
          </span>
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-black text-zinc-950 bg-[#F59E0B] border border-white/20 shadow-lg tracking-wide">
            {current.priceFormatted}
          </span>
        </div>

        {/* Card Content Overlay */}
        <div className="relative z-20 p-6 sm:p-8 flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-white/80">
            <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-zinc-300">
              📍 {current.location}
            </span>
            <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 uppercase tracking-wider text-[10px] text-amber-400">
              {current.category}
            </span>
          </div>

          <h2 className="font-syne font-black text-2xl sm:text-3xl lg:text-4xl text-white leading-snug">
            <Link
              href={`/restaurant/${slugify(current.restaurantName)}`}
              className="hover:underline hover:text-[#F59E0B] transition-colors pointer-events-auto"
            >
              {current.restaurantName}
            </Link>
          </h2>

          <p className="text-xs sm:text-sm text-zinc-300 line-clamp-2 max-w-3xl leading-relaxed font-medium">
            {current.caption}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-white/10 mt-1">
            <button
              onClick={() => onSelectPost(current)}
              className="bg-[#F59E0B] hover:bg-amber-400 text-zinc-950 text-xs sm:text-sm font-black py-3 px-6 rounded-xl transition-all duration-200 shadow-md hover:scale-102 flex items-center gap-2 cursor-pointer pointer-events-auto"
            >
              <span>Explore Review & Menu</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l7.5-7.5M21 12H3" />
              </svg>
            </button>

            {/* Thumbnail Nav Indicators & Progress Bar Container */}
            <div className="flex flex-col gap-1.5 items-end">
              <div className="flex items-center gap-2 pointer-events-auto">
                {featured.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => handleSelectSlide(idx)}
                    className={`relative h-2.5 rounded-full transition-all duration-300 cursor-pointer overflow-hidden ${
                      activeIndex === idx ? 'w-8 bg-zinc-700' : 'w-2.5 bg-white/40 hover:bg-white/70'
                    }`}
                    title={`View spotlight for ${item.restaurantName}`}
                  >
                    {/* Active Slide Amber Progress Fill */}
                    {activeIndex === idx && !prefersReducedMotion && (
                      <div
                        className="h-full bg-[#F59E0B] transition-all duration-75"
                        style={{ width: `${progress}%` }}
                      />
                    )}
                    {activeIndex === idx && prefersReducedMotion && (
                      <div className="h-full bg-[#F59E0B] w-full" />
                    )}
                  </button>
                ))}
              </div>
              <span className="text-[10px] font-mono text-zinc-400">
                {isPaused ? '⏸ Paused' : prefersReducedMotion ? 'Manual dots' : `Auto-advancing (5s)`}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
