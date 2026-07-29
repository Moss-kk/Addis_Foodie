'use client';

import React from 'react';
import Image from 'next/image';
import { Star, MapPin, Heart } from 'lucide-react';
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
  const reviewCount = post.reviewCount || 120;
  const priceDisplay = post.price ? `${post.price} Br` : 'Price on Menu';
  const neighborhoodDisplay = post.neighborhood || 'Bole';
  const isOpen = post.isOpenNow ?? true;

  const handleBookmark = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleSave(post.id);
  };

  return (
    <article
      onClick={onClick}
      className="food-card cursor-pointer group flex flex-col justify-between overflow-hidden rounded-2xl border shadow-card transition-all duration-300 hover:border-amber-500/50"
      style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}
    >
      {/* 16:9 Image Thumbnail Container */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
        <Image
          src={post.image}
          alt={post.restaurantName}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Overlay Badges */}
        {/* Top-Left: Status Badge */}
        <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold flex items-center gap-1.5 backdrop-blur-md bg-black/70 text-white border border-white/20 shadow-md">
          <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-slate-400'}`} />
          <span>{isOpen ? 'Open Now' : 'Closed'}</span>
        </div>

        {/* Top-Right: Quick Bookmark Overlay Button */}
        <button
          type="button"
          onClick={handleBookmark}
          aria-label="Save Spot"
          className={`touch-target absolute top-2.5 right-2.5 p-2 rounded-full backdrop-blur-md border shadow-md transition-transform active:scale-90 cursor-pointer ${
            saved
              ? 'bg-red-500 text-white border-red-400'
              : 'bg-black/60 text-white hover:bg-red-500/80 border-white/20'
          }`}
        >
          <Heart className={`w-3.5 h-3.5 ${saved ? 'fill-current' : ''}`} />
        </button>
      </div>

      {/* Card Content (Anti-Clutter Layout) */}
      <div className="p-4 flex flex-col justify-between gap-2.5 flex-1">
        {/* Title Line (Bold White text-base) */}
        <div className="flex items-start justify-between gap-2">
          <h3
            className="font-bold text-base line-clamp-1 group-hover:text-amber-500 transition-colors"
            style={{ color: 'var(--text-primary)' }}
          >
            {post.restaurantName}
          </h3>

          {/* Prominent Gold/Green Price Highlight */}
          <span className="font-mono font-extrabold text-sm px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 shrink-0">
            {priceDisplay}
          </span>
        </div>

        {/* Metadata Line: ⭐ 4.9 (120) • 📍 Bole Atlas • 🥩 Category */}
        <div className="flex items-center flex-wrap gap-x-2 gap-y-1 text-xs font-mono" style={{ color: 'var(--text-secondary)' }}>
          <div className="flex items-center gap-1 text-amber-400 font-bold">
            <Star className="w-3.5 h-3.5 fill-current text-amber-400" />
            <span>{ratingValue}</span>
            <span className="text-[10px] text-slate-400">({reviewCount})</span>
          </div>

          <span className="text-slate-500">•</span>

          <div className="flex items-center gap-1">
            <MapPin className="w-3 h-3 text-red-400 shrink-0" />
            <span>{neighborhoodDisplay}</span>
          </div>

          <span className="text-slate-500">•</span>

          <span className="px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 text-[10px] font-bold border border-amber-500/20">
            {post.category}
          </span>
        </div>
      </div>
    </article>
  );
}
