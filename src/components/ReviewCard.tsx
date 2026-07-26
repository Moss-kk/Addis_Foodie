'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FoodPost } from '../types/post';
import { slugify } from '../lib/restaurants';

interface ReviewCardProps {
  post: FoodPost;
  onClick: () => void;
}

export default function ReviewCard({ post, onClick }: ReviewCardProps) {
  // Highlight hashtags in the card excerpt
  const renderHighlightedExcerpt = (captionText: string) => {
    const words = captionText.split(/(\s+)/);
    return words.map((word, idx) => {
      if (word.startsWith('#')) {
        return (
          <span key={idx} className="text-brand-primary font-bold">
            {word}
          </span>
        );
      }
      return word;
    });
  };

  return (
    <motion.article
      onClick={onClick}
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="bg-white rounded-2xl overflow-hidden border border-zinc-200/70 shadow-xs hover:shadow-xl hover:border-[#A81D1D]/40 transition-all duration-300 flex flex-col group cursor-pointer"
    >
      {/* 1. Media container (4:3 Aspect Ratio Photography) */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-zinc-900">
        <Image
          src={post.image}
          alt={post.restaurantName}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Gradient vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* 3. Price Tag Overlay (Warm Amber Badge in JetBrains Mono) */}
        <div className="absolute top-3 right-3 z-10">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-black text-[#111827] bg-[#F59E0B] border border-white/40 shadow-md tracking-tight">
            {post.priceFormatted}
          </span>
        </div>

        {/* 2. Bold Location Landmark Pill Overlay */}
        <div className="absolute bottom-3 left-3 z-10">
          <span className="inline-flex items-center gap-1 text-[11px] font-extrabold text-white bg-[#111827]/90 backdrop-blur-xs border border-white/20 px-3 py-1 rounded-full shadow-xs">
            <svg className="w-3 h-3 text-[#F59E0B] fill-current" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            <span className="truncate max-w-[160px]">{post.location}</span>
          </span>
        </div>
      </div>

      {/* Card Details */}
      <div className="p-5 flex flex-col flex-1 gap-3">
        
        {/* Restaurant Name & Category */}
        <div className="flex flex-col gap-1">
          <h3 className="font-syne font-black text-lg text-[#111827] leading-snug group-hover:text-[#A81D1D] transition-colors duration-200">
            <Link
              href={`/restaurant/${slugify(post.restaurantName)}`}
              onClick={(e) => e.stopPropagation()}
              className="hover:underline hover:text-[#A81D1D] transition-colors"
            >
              {post.restaurantName}
            </Link>
          </h3>
          <span className="inline-flex items-center text-[10px] text-[#A81D1D] font-extrabold bg-red-50 border border-red-100 px-2.5 py-0.5 rounded-md w-fit uppercase tracking-wider">
            {post.category}
          </span>
        </div>

        {/* Review Caption */}
        <p className="text-xs sm:text-sm text-zinc-600 line-clamp-2 leading-relaxed flex-1 font-medium">
          {renderHighlightedExcerpt(post.caption)}
        </p>

        {/* Footer Actions & Source Platform Link */}
        <div className="flex items-center justify-between pt-3 border-t border-zinc-100 mt-1">
          <span className="text-[11px] font-extrabold text-[#A81D1D] group-hover:underline flex items-center gap-1 uppercase tracking-wider">
            Read Full Review
            <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </span>

          {/* Action buttons */}
          <div className="flex items-center gap-1.5">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[9px] font-mono font-black text-[#111827] bg-[#F59E0B]/20 border border-[#F59E0B]/50 shadow-2xs uppercase tracking-wider">
              🧾 Receipt
            </span>
            {post.sourcePlatform === 'telegram' ? (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[9px] font-extrabold text-white bg-[#0088cc] shadow-2xs uppercase tracking-wider">
                ✈️ TG Link
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[9px] font-extrabold text-white bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] shadow-2xs uppercase tracking-wider">
                🎥 Reel
              </span>
            )}
          </div>
        </div>

      </div>
    </motion.article>
  );
}
