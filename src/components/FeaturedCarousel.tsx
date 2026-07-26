'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FoodPost } from '../types/post';
import { slugify } from '../lib/restaurants';

interface FeaturedCarouselProps {
  posts: FoodPost[];
  onSelectPost: (post: FoodPost) => void;
}

export default function FeaturedCarousel({ posts, onSelectPost }: FeaturedCarouselProps) {
  // Select top 4 posts as featured highlights
  const featured = posts.slice(0, 4);
  const [activeIndex, setActiveIndex] = useState(0);

  if (featured.length === 0) return null;

  const current = featured[activeIndex];

  return (
    <section className="w-full flex flex-col gap-4">
      {/* Section Title Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="flex h-3 w-3 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
          </span>
          <h3 className="font-syne font-black text-lg sm:text-xl text-[#111827] tracking-tight">
            Weekly Foodie Spotlights
          </h3>
        </div>
        <span className="text-xs font-bold text-zinc-600">
          Handpicked Must-Try Spots
        </span>
      </div>

      {/* Featured Showcase Card */}
      <div className="relative w-full rounded-3xl overflow-hidden bg-zinc-950 text-white border border-zinc-800 shadow-2xl group min-h-[320px] sm:min-h-[380px] flex flex-col justify-end">
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

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between">
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
              className="hover:underline hover:text-[#F59E0B] transition-colors"
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
              className="bg-[#F59E0B] hover:bg-amber-400 text-zinc-950 text-xs sm:text-sm font-black py-3 px-6 rounded-xl transition-all duration-200 shadow-md hover:scale-102 flex items-center gap-2 cursor-pointer"
            >
              <span>Explore Review & Menu</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l7.5-7.5M21 12H3" />
              </svg>
            </button>

            {/* Thumbnail Nav Indicators */}
            <div className="flex items-center gap-2">
              {featured.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`relative h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    activeIndex === idx ? 'w-8 bg-[#F59E0B]' : 'w-2 bg-white/40 hover:bg-white/70'
                  }`}
                  title={`View spotlight for ${item.restaurantName}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
