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
      className="bg-white rounded-3xl overflow-hidden border border-zinc-200/60 shadow-xs hover:shadow-xl hover:border-brand-primary/30 transition-all duration-300 flex flex-col group cursor-pointer"
    >
      {/* 1. Media container (Photography) */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-zinc-100">
        <Image
          src={post.image}
          alt={post.restaurantName}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* 3. Price Tag Overlay (Warm Amber Badge) */}
        <div className="absolute top-3.5 right-3.5 z-10">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-black text-brand-dark bg-amber-400 border border-white/30 shadow-lg tracking-wide">
            {post.priceFormatted}
          </span>
        </div>
      </div>

      {/* Card Details */}
      <div className="p-5 flex flex-col flex-1 gap-3">
        
        {/* 2. Bold Location Landmark Badge */}
        <div className="flex items-center gap-1.5 text-[11px] font-extrabold text-[#111827] bg-zinc-100/90 border border-zinc-200/40 px-3 py-1 rounded-full w-fit">
          <svg className="w-3.5 h-3.5 text-brand-primary fill-current" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
          <span className="truncate">{post.location}</span>
        </div>

        {/* 4. Restaurant Name & 5. Category */}
        <div className="flex flex-col gap-1">
          <h3 className="font-display font-extrabold text-lg text-[#111827] leading-snug group-hover:text-brand-primary transition-colors duration-200">
            <Link
              href={`/restaurant/${slugify(post.restaurantName)}`}
              onClick={(e) => e.stopPropagation()}
              className="hover:underline hover:text-brand-primary transition-colors"
            >
              {post.restaurantName}
            </Link>
          </h3>
          <span className="inline-flex items-center text-[10px] text-brand-primary font-black bg-red-50 border border-red-100/60 px-2.5 py-0.5 rounded-md w-fit uppercase tracking-wider">
            {post.category}
          </span>
        </div>

        {/* 6. Review Caption */}
        <p className="text-xs sm:text-sm text-zinc-500 line-clamp-2 leading-relaxed flex-1 font-medium">
          {renderHighlightedExcerpt(post.caption)}
        </p>

        {/* 7. Footer Actions & Social Platform Links */}
        <div className="flex items-center justify-between pt-3 border-t border-zinc-100 mt-1">
          <span className="text-[11px] font-extrabold text-brand-primary group-hover:underline flex items-center gap-1">
            Read Full Review
            <svg className="w-3 h-3 transform group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </span>

          {/* Source platform pill button */}
          <div>
            {post.sourcePlatform === 'telegram' ? (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9px] font-black text-white bg-[#0088cc] shadow-2xs uppercase tracking-wider">
                TG Link
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9px] font-black text-white bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] shadow-2xs uppercase tracking-wider">
                IG Feed
              </span>
            )}
          </div>
        </div>

      </div>
    </motion.article>
  );
}
