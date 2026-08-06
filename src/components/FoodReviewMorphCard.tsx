'use client';

import React from 'react';
import Image from 'next/image';
import { Star, Heart } from 'lucide-react';
import { FoodPost } from '../types/post';
import { useSaved } from '../context/SavedContext';

interface FoodReviewMorphCardProps {
  post: FoodPost;
  width?: string;
  onClick?: () => void;
}

export default function FoodReviewMorphCard({
  post,
  width = 'w-[280px] sm:w-[320px]',
  onClick,
}: FoodReviewMorphCardProps) {
  const { isSaved, toggleSave } = useSaved();
  const saved = isSaved(post.id);

  const priceDisplay = post.priceFormatted || (post.price ? `${post.price} Br` : 'Price on Menu');
  const ratingValue = post.rating || '4.9';

  return (
    <div
      onClick={onClick}
      style={{ borderRadius: '16px' }}
      className={`flex ${width} shrink-0 flex-col overflow-hidden border border-stone-800 bg-[#1A1C1E] text-white shadow-sm transition-colors duration-200 hover:border-[#B8422E] group cursor-pointer`}
    >
      {/* 1. CLEAN CARD IMAGE (NO POP-OUT HOVER SCALE TRANSFORMS) */}
      <div className="relative h-48 w-full overflow-hidden bg-stone-900">
        <Image
          src={post.image}
          alt={post.restaurantName}
          fill
          sizes="(max-width: 640px) 280px, 320px"
          className="h-48 w-full object-cover transition-opacity duration-300 group-hover:opacity-90"
        />

        {/* Rating Overlay */}
        <div className="absolute top-2.5 left-2.5 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-md text-xs font-label font-bold text-white border border-white/10 flex items-center gap-1">
          <Star className="w-3.5 h-3.5 fill-[#B8422E] text-[#B8422E]" />
          <span>{ratingValue}</span>
        </div>

        {/* Prominent Price Tag Overlay */}
        <div className="absolute top-2.5 right-2.5 bg-[#B8422E] backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono font-extrabold text-white shadow-lg border border-white/20">
          {priceDisplay}
        </div>

        {/* Watermark badge */}
        <div className="absolute bottom-2 left-2.5 bg-black/75 backdrop-blur-xs px-2 py-0.5 rounded-sm border border-white/10 flex items-center gap-1.5 pointer-events-none">
          <span className="text-[9px] font-label font-bold text-amber-400 uppercase tracking-wider">
            Addis Foodie™ Curation
          </span>
        </div>
      </div>

      {/* 2. CARD DETAILS HEADER */}
      <div className="flex grow flex-row items-center justify-between p-3.5 gap-2">
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-display font-medium text-white truncate group-hover:text-[#B8422E] transition-colors">
            {post.restaurantName}
          </h3>
          <p className="text-xs font-body text-stone-400 truncate flex items-center gap-1 pt-0.5">
            <span>{post.category || 'Culinary'}</span>
            <span>•</span>
            <span className="text-amber-400 font-medium">{post.neighborhood || 'Bole'}</span>
          </p>
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            toggleSave(post.id);
          }}
          className={`relative flex h-8 w-8 shrink-0 select-none appearance-none items-center justify-center rounded-xl border border-white/15 bg-stone-800/80 transition-colors ${
            saved 
              ? 'bg-red-500/20 text-red-500 border-red-500/40' 
              : 'text-stone-200 group-hover:bg-[#B8422E] group-hover:text-white group-hover:border-[#B8422E]'
          }`}
          aria-label="Save venue"
          title="Save Spot"
        >
          <Heart className={`w-4 h-4 ${saved ? 'fill-current' : ''}`} />
        </button>
      </div>
    </div>
  );
}
