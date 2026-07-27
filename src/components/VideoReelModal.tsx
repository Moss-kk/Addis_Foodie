'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, Volume2, VolumeX, Play, MapPin, ArrowUpRight } from 'lucide-react';
import { slugify } from '../lib/restaurants';

export interface ReelItem {
  id: string;
  restaurantName: string;
  dishName: string;
  priceFormatted: string;
  location: string;
  videoUrl?: string;
  thumbnail: string;
  sourcePlatform: 'instagram' | 'telegram' | 'tiktok';
}

interface VideoReelModalProps {
  reel: ReelItem | null;
  onClose: () => void;
}

export default function VideoReelModal({ reel, onClose }: VideoReelModalProps) {
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    if (reel) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [reel]);

  if (!reel) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 select-none">
      {/* Dark Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/85 backdrop-blur-md transition-opacity duration-300"
      />

      {/* 9:16 Vertical Video Player Box */}
      <div className="relative w-full max-w-sm aspect-[9/16] bg-[#1A100C] text-[#FFF8F6] rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col border border-red-500/20">
        
        {/* Thumbnail / Video Stream */}
        <div className="relative w-full h-full bg-black">
          <Image
            src={reel.thumbnail}
            alt={reel.dishName}
            fill
            priority
            sizes="(max-width: 640px) 100vw, 384px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#120907] via-transparent to-black/60" />

          {/* Top Bar: Close & Sound Toggle */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
            <span className="bg-black/70 backdrop-blur-md text-[#FF8C00] px-3 py-1 rounded-full font-mono text-xs font-bold border border-amber-500/30">
              {reel.priceFormatted}
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setMuted(!muted)}
                className="p-2 rounded-full bg-black/70 backdrop-blur-md text-white hover:bg-white/20 transition-all cursor-pointer border border-white/20"
                title={muted ? 'Unmute' : 'Mute'}
              >
                {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#FF8C00]" />}
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-full bg-black/70 backdrop-blur-md text-white hover:bg-white/20 transition-all cursor-pointer border border-white/20"
                title="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Center Play Indicator */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-14 h-14 rounded-full bg-[#E53935]/90 backdrop-blur-md text-white flex items-center justify-center shadow-xl border border-white/30 animate-pulse">
              <Play className="w-7 h-7 fill-white translate-x-0.5" />
            </div>
          </div>

          {/* Bottom Details Bar */}
          <div className="absolute bottom-0 inset-x-0 p-5 flex flex-col gap-2 z-20">
            <div className="flex items-center gap-1.5 text-xs text-[#D1C2BD] font-semibold">
              <MapPin className="w-3.5 h-3.5 text-[#E53935]" />
              <span>{reel.location}</span>
            </div>

            <h3 className="font-syne font-black text-xl text-white line-clamp-1">
              {reel.dishName}
            </h3>

            <p className="text-xs text-zinc-300 font-medium">
              {reel.restaurantName} • Official Foodie Sizzle Reel
            </p>

            {/* View Spot Link */}
            <Link
              href={`/restaurant/${slugify(reel.restaurantName)}`}
              onClick={onClose}
              className="touch-target w-full mt-2 bg-[#E53935] hover:bg-[#B71C1C] text-white font-extrabold text-xs py-3 rounded-xl transition-all shadow-lg flex items-center justify-center gap-1.5 focus-ring"
            >
              <span>View Restaurant & Full Menu</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
