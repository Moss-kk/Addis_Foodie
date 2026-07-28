'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Receipt, ArrowUpRight, Star } from 'lucide-react';
import { FaInstagram, FaTelegramPlane } from 'react-icons/fa';
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
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="food-card rounded-2xl overflow-hidden flex flex-col justify-between group cursor-pointer"
        style={{
          backgroundColor: 'var(--bg-surface)',
          borderColor: 'var(--border-subtle)',
          color: 'var(--text-primary)',
        }}
      >
        <div className="flex flex-col">

          {/* MEDIA THUMBNAIL (4:3) — Clean 100% Opacity Image */}
          <div
            onClick={onClick}
            className="relative w-full aspect-[4/3] bg-slate-900 overflow-hidden cursor-pointer"
          >
            <Image
              src={post.image}
              alt={post.restaurantName}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              loading="lazy"
            />

            {/* Platform Tag (Top-Left) */}
            <div className="absolute top-3 left-3 bg-[#0B0F17]/85 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-mono font-bold uppercase text-white tracking-wider border border-white/10 flex items-center gap-1.5 shadow-md">
              {post.sourcePlatform === 'telegram' ? (
                <>
                  <FaTelegramPlane size={12} className="text-sky-400" />
                  <span>Telegram</span>
                </>
              ) : (
                <>
                  <FaInstagram size={12} className="text-pink-400" />
                  <span>Instagram</span>
                </>
              )}
            </div>

            {/* SINGLE Rating Pill Badge (Top-Right) — Warm Gold (#F59E0B) */}
            <div
              className="absolute top-3 right-3 bg-[#0B0F17]/90 backdrop-blur-md border border-[#F59E0B]/40 px-2.5 py-1 rounded-full font-mono font-black text-xs flex items-center gap-1 shadow-md"
              style={{ color: '#F59E0B' }}
            >
              <Star className="w-3.5 h-3.5 fill-current text-[#F59E0B]" />
              <span>{post.rating ? `${post.rating}/5.0` : '4.8/5.0'}</span>
            </div>

            {/* SINGLE Price/Location Pill Badge (Bottom-Left) */}
            <div className="absolute bottom-3 left-3 bg-[#0B0F17]/90 backdrop-blur-md border border-white/15 px-3 py-1 rounded-full text-xs font-mono font-bold text-white shadow-md flex items-center gap-1.5">
              <span className="text-[#F59E0B] font-black">{post.priceFormatted}</span>
              <span className="text-white/40">•</span>
              <span className="text-slate-300 font-semibold">{post.neighborhood || post.location.split(',')[0]}</span>
            </div>
          </div>

          {/* CARD CONTENT BODY */}
          <div className="p-5 flex flex-col gap-2.5">

            {/* Reviewer Meta */}
            {post.reviewer && (
              <div className="flex items-center gap-2 pb-2 border-b border-[#1F293D]">
                <div className="relative w-5 h-5 rounded-full overflow-hidden flex-shrink-0 border border-[#1F293D]">
                  <Image
                    src={post.reviewer.avatar}
                    alt={post.reviewer.name}
                    fill
                    sizes="20px"
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center gap-1.5 overflow-hidden">
                  <span className="text-xs font-semibold text-slate-300 truncate">
                    {post.reviewer.name}
                  </span>
                  <span
                    className="text-[9px] font-black px-1.5 py-0.2 rounded-full uppercase tracking-wider text-white"
                    style={{ backgroundColor: 'var(--accent-verified)' }}
                  >
                    Verified
                  </span>
                </div>
              </div>
            )}

            {/* RESTAURANT NAME — Clean Flex Layout, line-clamp-2 (no truncation bugs) */}
            <h3
              onClick={onClick}
              className="font-display font-bold text-lg sm:text-xl leading-snug line-clamp-2 cursor-pointer transition-colors text-[#F8FAFC] group-hover:text-[#F59E0B]"
            >
              {post.restaurantName}
            </h3>

            {/* LOCATION & CATEGORY */}
            <div className="flex items-center gap-2 text-xs text-[#94A3B8]">
              <MapPin className="w-3.5 h-3.5 flex-shrink-0 text-[#F59E0B]" />
              <span className="font-medium truncate">{post.location}</span>
              <span>•</span>
              <span className="font-mono font-semibold text-[#64748B] uppercase">{post.category}</span>
            </div>

            {/* REVIEW CAPTION */}
            <p className="text-xs font-normal leading-relaxed text-[#94A3B8] line-clamp-2 pt-0.5">
              {post.caption}
            </p>
          </div>
        </div>

        {/* ACTIONS FOOTER */}
        <div className="px-5 pb-4 pt-2 flex items-center justify-between gap-2 border-t border-[#1F293D]">
          {post.menuItems && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowReceipt(true);
              }}
              className="px-3 py-1.5 rounded-lg text-xs font-bold font-mono transition-all flex items-center gap-1.5 border border-[#F59E0B]/30 text-[#F59E0B] bg-[#F59E0B]/10 hover:bg-[#F59E0B]/20 cursor-pointer"
            >
              <Receipt className="w-3.5 h-3.5" />
              <span>Receipt</span>
            </button>
          )}

          <button
            onClick={onClick}
            className="px-4 py-2 rounded-xl text-white text-xs font-extrabold transition-all shadow-md cursor-pointer flex items-center gap-1.5 ml-auto bg-[#EF4444] hover:bg-[#DC2626] focus-ring"
          >
            <span>Read Review</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>

      {showReceipt && (
        <PriceReceiptModal
          post={post}
          onClose={() => setShowReceipt(false)}
        />
      )}
    </>
  );
}
