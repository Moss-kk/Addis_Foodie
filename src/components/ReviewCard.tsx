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
      className="bg-zinc-900/60 border border-zinc-800 rounded-2xl overflow-hidden flex flex-col hover:border-amber-500/40 transition duration-300 shadow-md cursor-pointer group"
    >
      {/* Image Container with Badges */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-800">
        <Image 
          src={post.image} 
          alt={post.restaurantName}
          fill
          className="object-cover group-hover:scale-105 transition duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Rating Overlay Badge */}
        <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-lg text-xs font-bold text-amber-400 border border-amber-500/20 flex items-center gap-1">
          <Star className="w-3.5 h-3.5 fill-current text-amber-400" />
          <span>{ratingValue}</span>
        </div>

        {/* Price & Location Overlay */}
        <div className="absolute top-3 right-3 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-lg text-xs font-bold text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
          <span>{priceDisplay}</span>
          <button
            type="button"
            onClick={handleBookmark}
            className={`p-1 rounded-full transition cursor-pointer ${saved ? 'text-red-500' : 'text-zinc-400 hover:text-white'}`}
            title="Save Spot"
          >
            <Heart className={`w-3.5 h-3.5 ${saved ? 'fill-current' : ''}`} />
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col flex-grow justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 text-[11px] text-amber-400 font-semibold uppercase tracking-wider mb-1 font-mono">
            <span>{post.category || 'CULINARY'}</span>
            <span>•</span>
            <span className="text-zinc-400">{neighborhoodDisplay}</span>
          </div>

          <h3 className="text-base font-bold text-white line-clamp-1 mb-1.5 group-hover:text-amber-400 transition-colors">
            {post.restaurantName}
          </h3>

          <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed font-body">
            {post.caption}
          </p>
        </div>

        {/* Touch-Friendly Action Button */}
        <div 
          className="w-full text-center py-2.5 px-4 rounded-xl bg-zinc-800 group-hover:bg-amber-500 group-hover:text-black border border-zinc-700/60 text-xs font-semibold text-zinc-200 transition duration-200 flex items-center justify-center gap-1 cursor-pointer"
        >
          <span>Read Full Audit &amp; Price Breakdown</span>
          <span>→</span>
        </div>
      </div>
    </article>
  );
}
