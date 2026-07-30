'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, Heart } from 'lucide-react';
import { FoodPost } from '../types/post';
import { useSaved } from '../context/SavedContext';

interface ReviewCardProps {
  post: FoodPost;
  onClick?: () => void;
}

export default function ReviewCard({ post, onClick }: ReviewCardProps) {
  const { isSaved, toggleSave } = useSaved();
  const saved = isSaved(post.id);

  const ratingValue = post.rating || '4.9';
  const priceDisplay = post.price ? `${post.price} Br` : 'Price on Menu';
  const neighborhoodDisplay = post.neighborhood || 'Bole';

  const handleBookmark = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleSave(post.id);
  };

  return (
    <article
      onClick={onClick}
      className="heritage-card p-0 rounded-lg overflow-hidden flex flex-col transition duration-300 cursor-pointer group hover:border-[#1A1C1E] dark:hover:border-slate-500 shadow-xs"
    >
      {/* Image Container with Responsive Aspect Ratio & Watermark Overlay */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
        <Image 
          src={post.image} 
          alt={post.restaurantName}
          fill
          className="object-cover group-hover:scale-105 transition duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Rating Overlay Badge */}
        <div className="absolute top-2.5 left-2.5 bg-[#1A1C1E]/90 backdrop-blur-md px-2.5 py-1 rounded-sm text-xs font-label font-bold text-white border border-white/10 flex items-center gap-1">
          <Star className="w-3.5 h-3.5 fill-[#B8422E] text-[#B8422E]" />
          <span>{ratingValue}</span>
        </div>

        {/* Price & Bookmark Overlay */}
        <div className="absolute top-2.5 right-2.5 bg-[#1A1C1E]/90 backdrop-blur-md px-2.5 py-1 rounded-sm text-xs font-label font-bold text-white border border-white/10 flex items-center gap-2">
          <span className="text-[#B8422E] font-bold">{priceDisplay}</span>
          <button
            type="button"
            onClick={handleBookmark}
            className={`p-1 rounded-sm transition cursor-pointer ${saved ? 'text-red-500' : 'text-slate-400 hover:text-white'}`}
            title="Save Spot"
          >
            <Heart className={`w-3.5 h-3.5 ${saved ? 'fill-current text-red-500' : ''}`} />
          </button>
        </div>

        {/* Automatic Addis Foodie™ Watermark Stamp Overlay */}
        <div className="absolute bottom-2.5 left-2.5 bg-white/95 backdrop-blur-xs px-2 py-0.5 rounded-xs border border-stone-300 flex items-center gap-1.5 pointer-events-none shadow-xs">
          <div className="w-3.5 h-3.5 rounded-full overflow-hidden relative border border-[#B8422E] bg-white">
            <Image src="/images/logo.png" alt="Addis Foodie Logo" fill className="object-cover" />
          </div>
          <span className="text-[9px] font-label font-bold text-stone-900 uppercase tracking-wider">
            Addis Foodie™
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col flex-grow justify-between gap-3 bg-[var(--bg-surface)]">
        <div>
          <div className="flex items-center gap-2 text-[10px] font-label font-bold text-[#B8422E] uppercase tracking-widest mb-1">
            <span>{post.category || 'CULINARY'}</span>
            <span>•</span>
            <span className="text-[var(--text-secondary)]">{neighborhoodDisplay}</span>
          </div>

          <h3 className="text-base font-display font-medium text-[var(--text-primary)] line-clamp-1 mb-1.5 group-hover:text-[#B8422E] transition-colors">
            {post.restaurantName}
          </h3>

          <p className="text-xs text-[var(--text-secondary)] line-clamp-2 leading-relaxed font-body">
            {post.caption}
          </p>
        </div>

        {/* Action Trigger Button */}
        <div 
          className="button-primary w-full py-2 px-3 rounded-md text-xs font-label uppercase tracking-wider text-white transition duration-200 flex items-center justify-center gap-1 cursor-pointer"
        >
          <span>Read Full Review</span>
          <span>→</span>
        </div>
      </div>
    </article>
  );
}
