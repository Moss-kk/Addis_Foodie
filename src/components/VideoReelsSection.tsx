'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Video, Flame, Eye, Film } from 'lucide-react';
import { FoodPost } from '../types/post';
import VideoReelModal, { ReelItem } from './VideoReelModal';

interface VideoReelsSectionProps {
  posts: FoodPost[];
}

export default function VideoReelsSection({ posts }: VideoReelsSectionProps) {
  const [activeReelId, setActiveReelId] = useState<string | null>(null);

  const reelItems: ReelItem[] = posts.slice(0, 4).map((post) => ({
    id: post.id,
    restaurantName: post.restaurantName,
    dishName: post.restaurantName,
    priceFormatted: post.priceFormatted,
    location: post.location,
    thumbnail: post.image,
    sourcePlatform: post.sourcePlatform === 'telegram' ? 'telegram' : 'instagram',
    badge: post.category,
    views: post.viewsCount || '45K views',
  }));

  return (
    <section className="flex flex-col gap-6 bg-[#1A1C1E] text-white p-6 sm:p-10 rounded-lg shadow-sm border border-[var(--border-subtle)] relative overflow-hidden">
      
      {/* Header Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-5 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-[#B8422E]/20 text-[#B8422E] flex items-center justify-center">
            <Video className="w-5 h-5 text-[#B8422E]" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-sm bg-white/10 text-white text-[10px] font-label font-bold uppercase tracking-widest border border-white/20 mb-1">
              <Flame className="w-3 h-3 text-[#B8422E]" />
              <span>Official Video Coverage</span>
            </div>
            <h2 className="font-display font-medium text-2xl sm:text-3xl text-white">
              TikTok &amp; Instagram Reels Spotlight
            </h2>
          </div>
        </div>

        <a
          href="https://www.tiktok.com/@addis.foodie?_r=1&_t=ZS-98Smpg1WuZg"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-label uppercase font-bold text-[#B8422E] hover:underline"
        >
          Watch TikTok @addis.foodie →
        </a>
      </div>

      {/* 9:16 Video Reels Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">
        {reelItems.map((reel) => (
          <div
            key={reel.id}
            onClick={() => setActiveReelId(reel.id)}
            className="group relative aspect-[9/16] rounded-md overflow-hidden bg-slate-900 border border-white/15 cursor-pointer shadow-xs hover:border-[#B8422E] transition-all duration-300"
          >
            {/* Background Thumbnail Image */}
            <Image
              src={reel.thumbnail}
              alt={reel.dishName}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20" />

            {/* Top Badges */}
            <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
              <span className="bg-[#1A1C1E]/90 px-2.5 py-1 rounded-sm text-[10px] font-label font-bold uppercase text-white border border-white/20">
                {reel.badge}
              </span>
            </div>

            {/* Center Animated Play Button */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="w-12 h-12 rounded-full bg-[#B8422E] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-all duration-300">
                <svg className="w-5 h-5 fill-current ml-0.5" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>

            {/* Bottom Details Bar */}
            <div className="absolute bottom-0 inset-x-0 p-4 flex flex-col gap-1 z-10 bg-gradient-to-t from-black/95 to-transparent pt-8">
              <span className="text-[10px] font-label font-bold text-[#B8422E]">
                {reel.priceFormatted} • {reel.location}
              </span>

              <h3 className="font-display font-medium text-sm text-white line-clamp-1 group-hover:text-[#B8422E] transition-colors">
                {reel.dishName}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Video Player Modal */}
      {activeReelId && (
        <VideoReelModal
          reels={reelItems}
          activeReelId={activeReelId}
          onClose={() => setActiveReelId(null)}
        />
      )}
    </section>
  );
}
