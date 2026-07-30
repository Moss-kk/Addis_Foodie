'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, Volume2, VolumeX, Play, MapPin, ChevronUp, ChevronDown, Heart, Share2 } from 'lucide-react';
import { FaTiktok, FaInstagram, FaTelegramPlane } from 'react-icons/fa';

export interface ReelItem {
  id: string;
  restaurantName: string;
  dishName: string;
  priceFormatted: string;
  location: string;
  videoUrl?: string;
  thumbnail: string;
  sourcePlatform: 'instagram' | 'telegram' | 'tiktok';
  badge?: string;
  views?: string;
}

interface VideoReelModalProps {
  reels: ReelItem[];
  activeReelId: string | null;
  onClose: () => void;
}

export default function VideoReelModal({ reels, activeReelId, onClose }: VideoReelModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [muted, setMuted] = useState(false);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (activeReelId && reels.length > 0) {
      const idx = reels.findIndex((r) => r.id === activeReelId);
      if (idx !== -1) setCurrentIndex(idx);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeReelId, reels]);

  if (!activeReelId || reels.length === 0) return null;

  const currentReel = reels[currentIndex] || reels[0];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reels.length);
    setLiked(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reels.length) % reels.length);
    setLiked(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 select-none">
      {/* Dark Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity duration-300"
      />

      {/* Vertical TikTok/IG Reel Player Modal Container */}
      <div className="relative w-full max-w-sm h-full sm:h-[92vh] sm:max-h-[750px] aspect-[9/16] bg-[#1A1C1E] text-white sm:rounded-xl overflow-hidden shadow-2xl z-10 flex flex-col border border-white/10">
        
        {/* Reel Video Container */}
        <div className="relative w-full h-full bg-black">
          {currentReel.videoUrl ? (
            <video
              src={currentReel.videoUrl}
              autoPlay
              loop
              muted={muted}
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <Image
              src={currentReel.thumbnail}
              alt={currentReel.dishName}
              fill
              priority
              sizes="(max-width: 640px) 100vw, 384px"
              className="object-cover"
            />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/60" />

          {/* Top Bar Header */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-20">
            <div className="flex items-center gap-2">
              <span className="bg-[#1A1C1E]/90 text-white px-2.5 py-1 rounded-sm text-[10px] font-label font-bold uppercase tracking-wider border border-white/20">
                {currentReel.badge || 'TikTok Reel'}
              </span>
              <span className="bg-[#B8422E] text-white px-2 py-1 rounded-sm text-[10px] font-label font-bold uppercase">
                {currentReel.priceFormatted}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setMuted(!muted)}
                className="p-2 rounded-full bg-black/70 text-white hover:bg-white/20 transition-all cursor-pointer border border-white/20"
                title={muted ? 'Unmute' : 'Mute'}
              >
                {muted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-white" />}
              </button>

              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-full bg-black/70 text-white hover:bg-[#B8422E] transition-all cursor-pointer border border-white/20"
                title="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Action Icons Column (TikTok Style) */}
          <div className="absolute right-3 bottom-24 z-20 flex flex-col items-center gap-4">
            <button
              type="button"
              onClick={() => setLiked(!liked)}
              className={`p-3 rounded-full bg-black/60 backdrop-blur-md border border-white/20 transition cursor-pointer flex flex-col items-center gap-1 ${
                liked ? 'text-red-500 bg-red-500/20 border-red-500/50' : 'text-white hover:scale-110'
              }`}
            >
              <Heart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
              <span className="text-[9px] font-label font-bold">14.2K</span>
            </button>

            <a
              href="https://www.tiktok.com/@addis.foodie?_r=1&_t=ZS-98Smpg1WuZg"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-black/60 backdrop-blur-md text-white hover:text-black hover:bg-white transition cursor-pointer border border-white/20 flex flex-col items-center gap-1"
              title="TikTok Profile"
            >
              <FaTiktok className="w-4 h-4" />
              <span className="text-[9px] font-label font-bold">TikTok</span>
            </a>

            <button
              type="button"
              onClick={handlePrev}
              className="p-2.5 rounded-full bg-black/60 text-white hover:bg-white/20 border border-white/20 transition cursor-pointer"
              title="Previous Reel"
            >
              <ChevronUp className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="p-2.5 rounded-full bg-black/60 text-white hover:bg-white/20 border border-white/20 transition cursor-pointer"
              title="Next Reel"
            >
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* Bottom Reel Caption & Bio Overlay */}
          <div className="absolute bottom-0 inset-x-0 p-4 flex flex-col gap-2 z-20 bg-gradient-to-t from-black via-black/80 to-transparent">
            
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full overflow-hidden relative border-2 border-[#B8422E]">
                <Image src="/images/logo.png" alt="Addis Foodie" fill className="object-cover" />
              </div>
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-1.5">
                  <span className="font-label font-bold text-xs text-white">@addis.foodie</span>
                  <span className="bg-[#B8422E] text-white px-1.5 py-0.2 text-[8px] font-label uppercase font-bold rounded-xs">
                    Official
                  </span>
                </div>
                <span className="text-[10px] font-body text-slate-300">{currentReel.restaurantName} • {currentReel.location}</span>
              </div>
            </div>

            <h3 className="font-display font-medium text-base text-white leading-snug line-clamp-2">
              {currentReel.dishName}
            </h3>

            <div className="flex items-center justify-between pt-1">
              <a
                href="https://www.tiktok.com/@addis.foodie?_r=1&_t=ZS-98Smpg1WuZg"
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary w-full py-2.5 text-xs font-label uppercase tracking-wider rounded-md text-white flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <FaTiktok className="w-4 h-4" />
                <span>Watch Full Reel on TikTok @addis.foodie</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
