'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Send, Camera, Receipt, Phone, ArrowUpRight } from 'lucide-react';
import { FoodPost } from '../types/post';
import PriceReceiptModal from './PriceReceiptModal';

interface ReviewCardProps {
  post: FoodPost;
  onClick: () => void;
}

export default function ReviewCard({ post, onClick }: ReviewCardProps) {
  const [showReceipt, setShowReceipt] = useState(false);

  // Hashtag highlighting
  const renderCaption = (text: string) => {
    const words = text.split(' ');
    return words.map((word, idx) => {
      if (word.startsWith('#')) {
        return (
          <span key={idx} className="text-[#F59E0B] font-bold hover:underline">
            {word}{' '}
          </span>
        );
      }
      return word + ' ';
    });
  };

  return (
    <>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group text-zinc-900"
      >
        <div className="flex flex-col">
          
          {/* LEVEL 1: PHOTOGRAPHY (4:3 Media Aspect Ratio) */}
          <div
            onClick={onClick}
            className="relative w-full aspect-[4/3] bg-zinc-100 overflow-hidden cursor-pointer"
          >
            <Image
              src={post.image}
              alt={post.restaurantName}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Level 4 Overlay: Monospaced Warm Amber ETB Price Badge */}
            <div className="absolute top-3 right-3 bg-[#111827]/90 backdrop-blur-md border border-[#F59E0B]/40 text-[#F59E0B] px-3 py-1.5 rounded-full font-mono font-black text-xs sm:text-sm shadow-md">
              {post.priceFormatted}
            </div>

            {/* Source Platform Badge */}
            <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-black uppercase text-white tracking-wider border border-white/20 flex items-center gap-1">
              {post.sourcePlatform === 'telegram' ? (
                <>
                  <Send className="w-3 h-3 text-sky-400" />
                  <span>Telegram</span>
                </>
              ) : (
                <>
                  <Camera className="w-3 h-3 text-pink-400" />
                  <span>Instagram</span>
                </>
              )}
            </div>

            {/* Location Overlay Pill */}
            <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#111827] flex items-center gap-1 shadow-sm border border-white/40 z-10">
              <MapPin className="w-3.5 h-3.5 text-[#A81D1D]" />
              <span>{post.location}</span>
            </div>

            {/* Authentic ADDIS FOODIE Watermark Overlay (Reference Style) */}
            <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md border border-white/20 px-2 py-1 rounded flex flex-col items-center justify-center font-sans tracking-tight z-10 shadow-lg group-hover:border-[#F59E0B]/60 transition-colors">
              <div className="bg-white text-black px-1.5 py-0.5 rounded-xs text-[9px] font-black uppercase tracking-wider leading-none">
                ADDIS
              </div>
              <div className="w-full h-[1.5px] bg-[#A81D1D] my-0.5" />
              <div className="text-white text-[8px] font-black uppercase tracking-widest leading-none">
                FOODIE
              </div>
            </div>

            {/* Sky Blue Hashtag Badge Overlay on Hover */}
            <div className="absolute inset-x-0 bottom-12 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center gap-1.5 z-10">
              <span className="bg-sky-500/90 text-white font-mono text-[10px] font-bold px-2 py-0.5 rounded backdrop-blur-xs">
                #addisfoodie
              </span>
              <span className="bg-sky-500/90 text-white font-mono text-[10px] font-bold px-2 py-0.5 rounded backdrop-blur-xs">
                #{post.location.toLowerCase().replace(/\s+/g, '')}
              </span>
            </div>
          </div>

          {/* CARD BODY CONTENT */}
          <div className="p-5 sm:p-6 flex flex-col gap-3">
            
            {/* LEVEL 2: RESTAURANT NAME */}
            <h3
              onClick={onClick}
              className="font-syne font-black text-lg sm:text-xl text-[#111827] group-hover:text-[#E53935] transition-colors line-clamp-1 cursor-pointer"
            >
              {post.restaurantName}
            </h3>

            {/* LEVEL 3: LOCATION & CATEGORY */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-stone-100 text-zinc-800 text-[11px] font-bold border border-stone-200">
                <MapPin className="w-3 h-3 text-[#E53935]" />
                <span>{post.location}</span>
              </span>
              <span className="px-2.5 py-1 rounded-full bg-amber-50 text-[#B71C1C] text-[10px] font-black uppercase tracking-wider border border-amber-200">
                {post.category}
              </span>
            </div>

            {/* LEVEL 5: CAPTION */}
            <p className="text-xs text-zinc-600 font-medium leading-relaxed line-clamp-2 pt-1">
              {renderCaption(post.caption)}
            </p>
          </div>

        </div>

        {/* LEVEL 6: ACTIONS BAR */}
        <div className="px-5 pb-4 pt-3 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-semibold">
            <Send className="w-3.5 h-3.5 text-[#A81D1D]" />
            <span>Verified Curation</span>
          </div>

          {/* Single High-Converting Primary CTA Button */}
          <button
            onClick={onClick}
            className="touch-target px-4 py-2 rounded-xl bg-[#A81D1D] hover:bg-[#8B1717] text-white text-xs font-extrabold transition-all shadow-xs hover:shadow-md cursor-pointer focus-ring flex items-center gap-1 group-hover:scale-102"
          >
            <span>Read Review</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </motion.div>

      {/* Itemized Price Receipt Modal */}
      {showReceipt && (
        <PriceReceiptModal
          post={post}
          onClose={() => setShowReceipt(false)}
        />
      )}
    </>
  );
}


