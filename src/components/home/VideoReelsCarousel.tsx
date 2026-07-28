'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Play, Film, Eye, ArrowRight, X } from 'lucide-react';

const videoReels = [
  {
    id: 'reel-1',
    title: 'Kitfo Preparation Behind The Scenes',
    restaurant: 'Habesha 2000 • Bole',
    views: '45.2K',
    duration: '0:45',
    thumbnail: '/telegram-imports/Yado kitfo.jpg',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-cooking-food-in-a-pan-41555-large.mp4',
    badge: 'INSTAGRAM REEL',
  },
  {
    id: 'reel-2',
    title: 'Classic Queen Beef Burger Sizzle',
    restaurant: 'Titich Gourmet • Bole',
    views: '38.9K',
    duration: '0:30',
    thumbnail: '/telegram-imports/Queen Burger.jpg',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-chef-preparing-a-dish-41553-large.mp4',
    badge: 'TIKTOK TRENDING',
  },
  {
    id: 'reel-3',
    title: 'Vanilla Fasting Iced Latte Pour',
    restaurant: 'Tomoca Coffee • Atlas',
    views: '29.1K',
    duration: '0:55',
    thumbnail: '/telegram-imports/Vanilla Fasting Iced late.jpg',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-barista-pouring-milk-in-a-coffee-cup-41554-large.mp4',
    badge: 'TELEGRAM REEL',
  },
  {
    id: 'reel-4',
    title: 'Grand Habesha Feast Platter Showcase',
    restaurant: 'Yod Abyssinia • Bole',
    views: '52.4K',
    duration: '1:12',
    thumbnail: '/telegram-imports/IFTAR PACKAGE.jpg',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-cooking-food-in-a-pan-41555-large.mp4',
    badge: 'VIRAL SPOTLIGHT',
  },
];

export default function VideoReelsCarousel() {
  const [activeVideo, setActiveVideo] = useState<typeof videoReels[0] | null>(null);

  return (
    <section className="w-full flex flex-col gap-6 py-4">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b pb-4 gap-3" style={{ borderColor: 'var(--border-subtle)' }}>
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-mono font-bold uppercase tracking-widest text-[#F59E0B] w-fit mb-1" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}>
            <Film className="w-3.5 h-3.5" />
            <span>Short Video Reviews &amp; Reels</span>
          </div>
          <h2 className="font-display font-normal text-2xl sm:text-4xl" style={{ color: 'var(--text-primary)' }}>
            Latest Short Video Reels
          </h2>
        </div>

        <Link
          href="/videos"
          className="touch-target px-4 py-2 rounded-full border text-xs font-bold transition-colors flex items-center gap-1 shadow-xs"
          style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)', color: 'var(--text-primary)' }}
        >
          <span>View All Reels</span>
          <ArrowRight className="w-4 h-4 text-[#F59E0B]" />
        </Link>
      </div>

      {/* 9:16 Vertical Reels Cards Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {videoReels.map((reel) => (
          <div
            key={reel.id}
            onClick={() => setActiveVideo(reel)}
            className="group relative aspect-[9/16] w-full rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-1 border"
            style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}
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
              <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[#F59E0B] font-mono font-bold text-[9px] uppercase border border-white/10">
                {reel.badge}
              </span>
              <span className="px-2 py-0.5 rounded-full bg-black/60 text-white font-mono font-bold text-[10px]">
                {reel.duration}
              </span>
            </div>

            {/* Center Play Button */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="w-12 h-12 rounded-full bg-[#EF4444] text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                <Play className="w-5 h-5 fill-white ml-0.5" />
              </div>
            </div>

            {/* Bottom Metadata */}
            <div className="absolute bottom-3 left-3 right-3 z-10 flex flex-col gap-1 text-white">
              <h3 className="font-display font-bold text-xs sm:text-sm line-clamp-2 leading-snug text-white group-hover:text-[#F59E0B] transition-colors">
                {reel.title}
              </h3>
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-300 pt-1 border-t border-white/10">
                <span>{reel.restaurant}</span>
                <span className="flex items-center gap-1">
                  <Eye className="w-3 h-3 text-[#F59E0B]" />
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
          <div className="relative w-full max-w-md rounded-3xl border overflow-hidden shadow-2xl flex flex-col" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}>
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-[#EF4444] transition-colors cursor-pointer"
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

            <div className="p-4 flex flex-col gap-2" style={{ backgroundColor: 'var(--bg-surface)' }}>
              <span className="text-[10px] font-mono font-bold text-[#F59E0B] uppercase">
                {activeVideo.badge} • {activeVideo.restaurant}
              </span>
              <h4 className="font-display font-bold text-base" style={{ color: 'var(--text-primary)' }}>{activeVideo.title}</h4>
              <Link
                href="/reviews"
                className="touch-target mt-2 py-2.5 rounded-full bg-[#EF4444] hover:bg-[#DC2626] text-white text-xs font-bold text-center transition-colors flex items-center justify-center gap-1"
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
