'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Play, Film, Flame, Eye, ArrowRight, X } from 'lucide-react';

const videoReels = [
  {
    id: 'reel-1',
    title: 'Kitfo Preparation Behind The Scenes',
    restaurant: 'Habesha 2000 • Bole',
    views: '45.2K',
    duration: '0:45',
    thumbnail: 'https://images.unsplash.com/photo-1541518763669-27fef04b14e8?auto=format&fit=crop&w=600&q=80',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-cooking-food-in-a-pan-41555-large.mp4',
    badge: 'INSTAGRAM REEL',
  },
  {
    id: 'reel-2',
    title: 'Classic Flame Beef Burger Sizzle',
    restaurant: 'Burger House • Piassa',
    views: '38.9K',
    duration: '0:30',
    thumbnail: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-chef-preparing-a-dish-41553-large.mp4',
    badge: 'TIKTOK TRENDING',
  },
  {
    id: 'reel-3',
    title: 'Traditional Tomoca Latte Art',
    restaurant: 'Tomoca Coffee • Atlas',
    views: '29.1K',
    duration: '0:55',
    thumbnail: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-barista-pouring-milk-in-a-coffee-cup-41554-large.mp4',
    badge: 'TELEGRAM REEL',
  },
  {
    id: 'reel-4',
    title: 'Street Food Vlog: Sizzling Tibs Firfir',
    restaurant: 'Fin Fine Cultural • Kazanchis',
    views: '52.4K',
    duration: '1:12',
    thumbnail: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-cooking-food-in-a-pan-41555-large.mp4',
    badge: 'VIRAL SPOTLIGHT',
  },
];

export default function VideoReelsCarousel() {
  const [activeVideo, setActiveVideo] = useState<typeof videoReels[0] | null>(null);

  return (
    <section className="w-full flex flex-col gap-6 py-4">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-stone-200 dark:border-stone-800 pb-4 gap-3">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-800 text-xs font-mono font-bold uppercase tracking-widest text-[#E53935] w-fit mb-1">
            <Film className="w-3.5 h-3.5" />
            <span>Short Video Reviews & Reels</span>
          </div>
          <h2 className="font-display font-black text-2xl sm:text-4xl text-zinc-900 dark:text-[#FFF8F6]">
            Latest Short Video Reels
          </h2>
        </div>

        <Link
          href="/videos"
          className="touch-target px-4 py-2 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-xs font-bold text-zinc-900 dark:text-white hover:text-[#E53935] transition-colors flex items-center gap-1 shadow-xs"
        >
          <span>View All Reels</span>
          <ArrowRight className="w-4 h-4 text-[#E53935]" />
        </Link>
      </div>

      {/* 9:16 Vertical Reels Cards Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {videoReels.map((reel) => (
          <div
            key={reel.id}
            onClick={() => setActiveVideo(reel)}
            className="group relative aspect-[9/16] w-full rounded-3xl overflow-hidden bg-zinc-900 border border-stone-200 dark:border-stone-800 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
          >
            <Image
              src={reel.thumbnail}
              alt={reel.title}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-75 group-hover:brightness-90"
            />

            {/* Dark Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/40" />

            {/* Top Badges */}
            <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
              <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-amber-300 font-mono font-bold text-[9px] uppercase border border-white/10">
                {reel.badge}
              </span>
              <span className="px-2 py-0.5 rounded-full bg-black/60 text-white font-mono font-bold text-[10px]">
                {reel.duration}
              </span>
            </div>

            {/* Center Play Button */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="w-12 h-12 rounded-full bg-[#E53935] text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                <Play className="w-5 h-5 fill-white ml-0.5" />
              </div>
            </div>

            {/* Bottom Metadata */}
            <div className="absolute bottom-3 left-3 right-3 z-10 flex flex-col gap-1 text-white">
              <h3 className="font-display font-bold text-xs sm:text-sm line-clamp-2 leading-snug text-white group-hover:text-amber-300 transition-colors">
                {reel.title}
              </h3>
              <div className="flex items-center justify-between text-[10px] font-mono text-stone-300 pt-1 border-t border-white/10">
                <span>{reel.restaurant}</span>
                <span className="flex items-center gap-1">
                  <Eye className="w-3 h-3 text-[#FF8C00]" />
                  <span>{reel.views}</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal Lightbox */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-md bg-zinc-950 rounded-3xl border border-white/20 overflow-hidden shadow-2xl flex flex-col">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-[#E53935] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[9/16] w-full bg-black">
              <video
                src={activeVideo.videoUrl}
                controls
                autoPlay
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-4 bg-[#111827] text-white flex flex-col gap-2">
              <span className="text-[10px] font-mono font-bold text-[#FF8C00] uppercase">
                {activeVideo.badge} • {activeVideo.restaurant}
              </span>
              <h4 className="font-display font-black text-base text-white">{activeVideo.title}</h4>
              <Link
                href="/reviews"
                className="touch-target mt-2 py-2.5 rounded-xl bg-[#E53935] hover:bg-[#B71C1C] text-white text-xs font-bold text-center transition-colors flex items-center justify-center gap-1"
              >
                <span>Read Full Verified Review</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
