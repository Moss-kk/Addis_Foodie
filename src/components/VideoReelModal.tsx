'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FoodPost } from '../types/post';

interface VideoReelModalProps {
  post: FoodPost;
  onClose: () => void;
}

export default function VideoReelModal({ post, onClose }: VideoReelModalProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Dark backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/85 backdrop-blur-md transition-opacity"
      />

      {/* 9:16 Portrait Reel Container */}
      <div className="relative w-full max-w-sm aspect-[9/16] bg-black rounded-3xl overflow-hidden shadow-2xl z-10 border-2 border-zinc-800 flex flex-col justify-between animate-slide-up">
        
        {/* Visual Poster / Image background simulating video frame */}
        <Image
          src={post.image}
          alt={post.restaurantName}
          fill
          priority
          className="object-cover opacity-90"
        />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/60 pointer-events-none" />

        {/* Top Controls Header */}
        <div className="relative z-10 p-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="bg-[#A81D1D] text-white text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full animate-pulse">
              🎥 REEL REVIEW
            </span>
            <span className="text-xs font-mono font-bold text-[#F59E0B]">
              {post.priceFormatted}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="p-2 rounded-full bg-black/50 text-white hover:bg-black transition-colors"
            >
              {isMuted ? '🔇' : '🔊'}
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-black/50 text-white hover:bg-black transition-colors"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Center Play / Pause Indicator */}
        <div
          onClick={() => setIsPlaying(!isPlaying)}
          className="relative z-10 flex-1 flex items-center justify-center cursor-pointer"
        >
          {!isPlaying && (
            <div className="w-16 h-16 rounded-full bg-black/60 text-white flex items-center justify-center text-2xl border border-white/30 backdrop-blur-xs">
              ▶️
            </div>
          )}
        </div>

        {/* Bottom Details & Social Link */}
        <div className="relative z-10 p-5 flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-mono font-bold text-[#F59E0B]">
              📍 {post.location}
            </span>
            <h3 className="font-syne font-black text-xl text-white">
              {post.restaurantName}
            </h3>
            <p className="text-xs text-white/90 line-clamp-2 font-medium">
              {post.caption}
            </p>
          </div>

          {/* Social Platform Link Trigger */}
          <a
            href={post.originalPostUrl || 'https://instagram.com/addis.foodie'}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#A81D1D] hover:bg-[#8B1717] text-white font-black py-2.5 rounded-xl text-xs uppercase tracking-wider text-center transition-colors shadow-md cursor-pointer flex items-center justify-center gap-1.5"
          >
            <span>Watch Full Reel on Socials ↗</span>
          </a>
        </div>

      </div>
    </div>
  );
}
