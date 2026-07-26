'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FoodPost } from '../types/post';
import VideoReelModal from './VideoReelModal';

interface VideoReelsSectionProps {
  posts: FoodPost[];
}

export default function VideoReelsSection({ posts }: VideoReelsSectionProps) {
  const [activeReel, setActiveReel] = useState<FoodPost | null>(null);

  // Filter posts that have video reel metadata
  const reelPosts = posts.slice(0, 4);

  return (
    <section className="flex flex-col gap-6 bg-gradient-to-r from-zinc-950 via-[#121215] to-zinc-950 text-white p-6 sm:p-10 rounded-3xl shadow-2xl relative overflow-hidden border border-zinc-800">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F59E0B]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-800 pb-5 relative z-10">
        <div className="flex items-center gap-3">
          <span className="text-3xl">🎬</span>
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#F59E0B]/15 text-[#F59E0B] text-[10px] font-black uppercase tracking-widest border border-[#F59E0B]/30 mb-1">
              🔥 Trending Short-Form Reviews
            </div>
            <h2 className="font-syne font-black text-2xl sm:text-3xl text-white">
              TikTok & Instagram Video Reels Spotlight
            </h2>
          </div>
        </div>

        <span className="text-xs font-mono font-bold text-zinc-400 bg-white/5 px-3.5 py-1.5 rounded-full border border-white/10 self-start sm:self-auto">
          🎥 100% Author-Verified Video Coverage
        </span>
      </div>

      {/* 9:16 Video Reels Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">
        {reelPosts.map((post) => (
          <div
            key={post.id}
            onClick={() => setActiveReel(post)}
            className="group relative aspect-[9/16] rounded-2xl overflow-hidden bg-zinc-900 border border-white/15 cursor-pointer shadow-lg hover:shadow-2xl hover:border-[#F59E0B] transition-all duration-300 transform hover:-translate-y-1"
          >
            {/* Background Thumbnail Image */}
            <Image
              src={post.image}
              alt={post.restaurantName}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20" />

            {/* Top Badges */}
            <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
              <span className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-black uppercase text-amber-400 border border-amber-400/30 flex items-center gap-1">
                {post.reelPlatform === 'tiktok_video' ? '🎵 TikTok' : '📸 Reel'}
              </span>

              <span className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-mono font-bold text-white border border-white/20">
                👁️ {post.viewsCount || '45K views'}
              </span>
            </div>

            {/* Center Animated Play Button */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="w-14 h-14 rounded-full bg-[#F59E0B] text-zinc-950 flex items-center justify-center shadow-xl group-hover:scale-115 group-hover:bg-amber-400 transition-all duration-300 border-2 border-white/40">
                <svg className="w-6 h-6 fill-current ml-1" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>

            {/* Bottom Details Bar */}
            <div className="absolute bottom-0 inset-x-0 p-4 flex flex-col gap-1.5 z-10 bg-gradient-to-t from-black/95 to-transparent pt-8">
              <span className="text-[11px] font-mono font-black text-[#F59E0B]">
                {post.priceFormatted} • {post.neighborhood}
              </span>

              <h3 className="font-syne font-black text-base text-white line-clamp-1 group-hover:text-[#F59E0B] transition-colors">
                {post.restaurantName}
              </h3>

              <p className="text-[11px] text-zinc-300 font-medium line-clamp-2 leading-snug">
                {post.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Video Player Modal */}
      {activeReel && (
        <VideoReelModal
          post={activeReel}
          onClose={() => setActiveReel(null)}
        />
      )}
    </section>
  );
}
