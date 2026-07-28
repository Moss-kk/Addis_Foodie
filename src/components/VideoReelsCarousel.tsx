'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Play, Flame, MapPin, Sparkles } from 'lucide-react';
import VideoReelModal, { ReelItem } from './VideoReelModal';

export default function VideoReelsCarousel() {
  const [selectedReel, setSelectedReel] = useState<ReelItem | null>(null);

  const reels: ReelItem[] = [
    {
      id: 'reel-1',
      restaurantName: 'Titich Gourmet Burger',
      dishName: 'Queen Flame Sizzle Cheeseburger',
      priceFormatted: '680 ETB',
      location: 'Bole Medhanealem',
      thumbnail: '/telegram-imports/Queen Burger.jpg',
      sourcePlatform: 'instagram',
    },
    {
      id: 'reel-2',
      restaurantName: 'Kakur Traditional Restaurant',
      dishName: 'Special Gourmet Kitfo Platter',
      priceFormatted: '850 ETB',
      location: 'Bole Atlas',
      thumbnail: '/telegram-imports/Yado kitfo.jpg',
      sourcePlatform: 'telegram',
    },
    {
      id: 'reel-3',
      restaurantName: 'Tomoca Coffee',
      dishName: 'Vanilla Fasting Iced Latte',
      priceFormatted: '180 ETB',
      location: 'Sarbet',
      thumbnail: '/telegram-imports/Vanilla Fasting Iced late.jpg',
      sourcePlatform: 'instagram',
    },
    {
      id: 'reel-4',
      restaurantName: 'Yod Abyssinia',
      dishName: 'Grand Habesha Feast Platter',
      priceFormatted: '850 ETB',
      location: 'Kazanchis',
      thumbnail: '/telegram-imports/IFTAR PACKAGE.jpg',
      sourcePlatform: 'telegram',
    },
  ];

  return (
    <>
      <section className="flex flex-col gap-5 py-4">
        <div className="flex items-center justify-between border-b border-[#1F293D] pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#161E2E] text-[#F59E0B] flex items-center justify-center border border-[#1F293D] shadow-xs">
              <Flame className="w-4 h-4 text-[#F59E0B]" />
            </div>
            <div>
              <h2 className="font-display font-black text-xl sm:text-2xl text-[#F8FAFC] flex items-center gap-2">
                <span>Foodie Sizzle Reels</span>
              </h2>
              <p className="text-xs text-[#94A3B8] font-medium">
                Tap to watch 9:16 short video previews of Addis Ababa's best dishes
              </p>
            </div>
          </div>

          <span className="hidden sm:inline-flex text-[10px] font-mono font-bold text-[#F59E0B] bg-[#161E2E] px-3 py-1 rounded-full border border-[#F59E0B]/30 uppercase tracking-widest flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[#F59E0B]" />
            <span>9:16 Reels</span>
          </span>
        </div>

        {/* 9:16 Horizontal Scroll Snap Container */}
        <div className="flex items-center gap-4 overflow-x-auto no-scrollbar scroll-smooth pb-3 snap-x snap-mandatory">
          {reels.map((reel) => (
            <div
              key={reel.id}
              onClick={() => setSelectedReel(reel)}
              className="snap-start flex-shrink-0 w-44 sm:w-56 aspect-[9/16] relative rounded-2xl overflow-hidden bg-[#161E2E] border border-[#1F293D] cursor-pointer group shadow-lg transition-all duration-300 transform hover:scale-[1.03]"
            >
              {/* Thumbnail Image */}
              <Image
                src={reel.thumbnail}
                alt={reel.dishName}
                fill
                sizes="(max-width: 640px) 176px, 224px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30" />

              {/* Price Tag Overlay Top-Left */}
              <div className="absolute top-3 left-3 bg-[#0B0F17]/85 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-mono font-black text-[#F59E0B] border border-[#F59E0B]/30 shadow-md">
                {reel.priceFormatted}
              </div>

              {/* Center Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-11 h-11 rounded-full bg-[#EF4444] text-white flex items-center justify-center shadow-lg border border-white/20 group-hover:scale-110 transition-transform">
                  <Play className="w-5 h-5 fill-white translate-x-0.5" />
                </div>
              </div>

              {/* Bottom Info Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-3.5 flex flex-col gap-1 z-10">
                <div className="flex items-center gap-1 text-[10px] text-slate-300 font-medium">
                  <MapPin className="w-3 h-3 text-[#F59E0B]" />
                  <span>{reel.location}</span>
                </div>
                <h3 className="font-display font-bold text-xs sm:text-sm text-white line-clamp-1 group-hover:text-[#F59E0B] transition-colors">
                  {reel.dishName}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Reel Modal */}
      <VideoReelModal
        reel={selectedReel}
        onClose={() => setSelectedReel(null)}
      />
    </>
  );
}
