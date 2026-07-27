'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Send, Camera, Receipt, ArrowUpRight, Star } from 'lucide-react';
import { FoodPost } from '../types/post';
import PriceReceiptModal from './PriceReceiptModal';

interface ReviewCardProps {
  post: FoodPost;
  onClick: () => void;
}

export default function ReviewCard({ post, onClick }: ReviewCardProps) {
  const [showReceipt, setShowReceipt] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group text-zinc-900"
      >
        <div className="flex flex-col">
          
          {/* LEVEL 1: DOMINANT HIGH-IMPACT PHOTOGRAPHY (4:3 Media Aspect Ratio) */}
          <div
            onClick={onClick}
            className="relative w-full aspect-[4/3] bg-stone-900 overflow-hidden cursor-pointer"
          >
            <Image
              src={post.image}
              alt={post.restaurantName}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-[0.94]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Source Platform Badge */}
            <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase text-white tracking-wider border border-white/20 flex items-center gap-1.5 shadow-md">
              {post.sourcePlatform === 'telegram' ? (
                <>
                  <Send className="w-3.5 h-3.5 text-sky-400" />
                  <span>Telegram</span>
                </>
              ) : (
                <>
                  <Camera className="w-3.5 h-3.5 text-pink-400" />
                  <span>Instagram</span>
                </>
              )}
            </div>

            {/* Rating Pill */}
            <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md border border-amber-400/40 text-amber-400 px-3 py-1 rounded-full font-mono font-black text-xs flex items-center gap-1 shadow-md">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{post.rating ? `${post.rating}/5.0` : '4.8/5.0'}</span>
            </div>

            {/* Watermark Emblem */}
            <div className="absolute bottom-3 right-3 bg-black/85 backdrop-blur-md border border-white/20 px-2.5 py-1 rounded flex flex-col items-center justify-center font-sans tracking-tight z-10 shadow-lg group-hover:border-[#FF8C00]/60 transition-colors">
              <div className="bg-white text-black px-1.5 py-0.5 rounded-xs text-[9px] font-black uppercase tracking-wider leading-none">
                ADDIS
              </div>
              <div className="w-full h-[1.5px] bg-[#E53935] my-0.5" />
              <div className="text-white text-[8px] font-black uppercase tracking-widest leading-none">
                FOODIES
              </div>
            </div>
          </div>

          {/* CARD CONTENT BODY WITH ENHANCED TYPOGRAPHY HIERARCHY */}
          <div className="p-6 flex flex-col gap-3">
            
            {/* LEVEL 1: RESTAURANT NAME (24px) */}
            <h3
              onClick={onClick}
              className="font-display font-black text-[22px] leading-snug text-zinc-900 group-hover:text-[#E53935] transition-colors line-clamp-1 cursor-pointer"
            >
              {post.restaurantName}
            </h3>

            {/* LEVEL 2: LOCATION & NEIGHBORHOOD (16px) */}
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#E53935] flex-shrink-0" />
              <span className="text-[15px] font-semibold text-[#FF8C00]">
                {post.location}
              </span>
              <span className="text-stone-300 text-xs">•</span>
              <span className="text-xs font-mono font-bold text-stone-500 uppercase tracking-wider">
                {post.category}
              </span>
            </div>

            {/* LEVEL 3: PRICE RANGE (18px ETB) */}
            <div className="text-[17px] font-mono font-black text-emerald-600">
              {post.priceFormatted}
            </div>

            {/* LEVEL 4: REVIEW SNIPPET (15px) */}
            <p className="text-[14px] font-medium leading-relaxed text-stone-600 line-clamp-2 pt-1">
              {post.caption}
            </p>

          </div>

        </div>

        {/* LEVEL 5: ACTIONS BAR */}
        <div className="px-6 pb-5 pt-3 border-t border-stone-100 flex items-center justify-between gap-2">
          {post.menuItems && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowReceipt(true);
              }}
              className="touch-target px-3 py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-[#FF8C00] text-xs font-bold font-mono transition-all flex items-center gap-1.5 border border-amber-500/30 cursor-pointer"
            >
              <Receipt className="w-3.5 h-3.5" />
              <span>Receipt</span>
            </button>
          )}

          <button
            onClick={onClick}
            className="touch-target px-5 py-2.5 rounded-xl bg-[#E53935] hover:bg-[#B71C1C] text-white text-xs font-extrabold transition-all shadow-md cursor-pointer focus-ring flex items-center gap-1.5 group-hover:scale-102 ml-auto"
          >
            <span>Read Review</span>
            <ArrowUpRight className="w-4 h-4" />
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
