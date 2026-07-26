'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
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
        className="bg-white rounded-3xl overflow-hidden border border-zinc-200 shadow-sm hover:shadow-xl hover:border-zinc-300 transition-all duration-300 flex flex-col justify-between group"
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
            <div className="absolute top-3 right-3 bg-[#111827]/90 backdrop-blur-md border border-[#F59E0B]/40 text-[#F59E0B] px-3.5 py-1.5 rounded-full font-mono font-black text-xs sm:text-sm shadow-md">
              {post.priceFormatted}
            </div>

            {/* Source Platform Badge */}
            <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-black uppercase text-white tracking-wider border border-white/20">
              {post.sourcePlatform === 'telegram' ? '✈️ Telegram' : '📸 Instagram'}
            </div>

            {/* Transparent Location Overlay Pill on Picture (Stitch Design) */}
            <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#111827] flex items-center gap-1 shadow-sm border border-white/40">
              📍 {post.location}
            </div>
          </div>

          {/* CARD BODY CONTENT */}
          <div className="p-5 sm:p-6 flex flex-col gap-3">
            
            {/* LEVEL 2: RESTAURANT NAME */}
            <h3
              onClick={onClick}
              className="font-syne font-black text-lg sm:text-xl text-[#111827] group-hover:text-[#A81D1D] transition-colors line-clamp-1 cursor-pointer"
            >
              {post.restaurantName}
            </h3>

            {/* LEVEL 3: LOCATION & LANDMARK PILL */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 text-zinc-800 text-[11px] font-bold border border-zinc-200">
                <span>📍</span>
                <span>{post.location}</span>
              </span>
              <span className="px-2.5 py-1 rounded-full bg-zinc-100 text-[#111827] text-[10px] font-black uppercase tracking-wider border border-zinc-200">
                {post.category}
              </span>
            </div>

            {/* LEVEL 5: REVIEW CAPTION SNIPPET */}
            <p className="text-xs text-zinc-600 font-medium leading-relaxed line-clamp-2 pt-1">
              {renderCaption(post.caption)}
            </p>
          </div>

        </div>

        {/* LEVEL 6: ACTIONS BAR */}
        <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-zinc-100 flex items-center justify-between gap-3">
          {/* Itemized Price Receipt Trigger Button */}
          <button
            onClick={() => setShowReceipt(true)}
            className="touch-target px-3.5 py-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-xs font-mono font-bold transition-all cursor-pointer border border-zinc-200 flex items-center gap-1.5 focus-ring"
          >
            <span>🧾 Itemized Receipt</span>
          </button>

          {/* Read Full Review Modal Trigger */}
          <button
            onClick={onClick}
            className="touch-target px-4 py-2 rounded-xl bg-[#A81D1D] hover:bg-[#8B1717] text-white text-xs font-black transition-all shadow-xs hover:shadow-md cursor-pointer focus-ring"
          >
            Review ↗
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
