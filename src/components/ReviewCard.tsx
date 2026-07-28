'use client';

import React from 'react';
import Image from 'next/image';
import { Star, MapPin } from 'lucide-react';
import { FoodPost } from '../types/post';

interface ReviewCardProps {
  post: FoodPost;
  onClick?: () => void;
}

export default function ReviewCard({ post, onClick }: ReviewCardProps) {
  const ratingValue = post.rating || '4.9';
  const priceDisplay = post.price ? `${post.price} Br` : 'Price on Menu';
  const neighborhoodDisplay = post.neighborhood || 'Bole';

  return (
    <article
      onClick={onClick}
      className="food-card cursor-pointer group flex flex-col justify-between"
    >
      {/* Media Aspect Container with Overlay Badges */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
        <Image
          src={post.image}
          alt={post.restaurantName}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Top-Right Rating Pill Badge (Mastercard Pill Style) */}
        <div
          className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-mono font-bold flex items-center gap-1 shadow-md border backdrop-blur-md"
          style={{
            backgroundColor: 'var(--bg-surface)',
            borderColor: 'var(--border-subtle)',
            color: 'var(--text-primary)',
          }}
        >
          <span>{ratingValue}</span>
          <Star className="w-3.5 h-3.5 fill-current" style={{ color: 'var(--accent-gold)' }} />
        </div>

        {/* Bottom-Left Location & Price Pill Badge (Mastercard Pill Style) */}
        <div
          className="absolute bottom-3 left-3 px-3.5 py-1 rounded-full text-[11px] font-mono font-bold flex items-center gap-1.5 shadow-md border backdrop-blur-md"
          style={{
            backgroundColor: 'var(--bg-surface)',
            borderColor: 'var(--border-subtle)',
            color: 'var(--text-primary)',
          }}
        >
          <MapPin className="w-3 h-3 text-red-500" />
          <span>{neighborhoodDisplay} • {priceDisplay}</span>
        </div>
      </div>

      {/* Card Metadata & Content */}
      <div className="p-5 flex flex-col gap-2 flex-1 justify-between">
        <div className="flex flex-col gap-1.5">
          {/* Eyebrow Label */}
          <div className="flex items-center gap-1 text-[11px] font-mono font-bold tracking-wider uppercase" style={{ color: 'var(--text-muted)' }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--accent-gold)' }} />
            <span>{post.category || 'CULINARY REVIEW'}</span>
          </div>

          {/* Card Title (Serif H3, line-clamp-2) */}
          <h3
            className="font-display font-bold text-lg sm:text-xl line-clamp-2 leading-snug transition-colors group-hover:text-amber-600 dark:group-hover:text-amber-400"
            style={{ color: 'var(--text-primary)' }}
          >
            {post.restaurantName}: {post.caption.slice(0, 45)}
          </h3>

          {/* Review Description Excerpt */}
          <p className="text-xs line-clamp-2 font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {post.caption}
          </p>
        </div>

        {/* Card Footer Strip */}
        <div className="pt-3 border-t flex items-center justify-between text-[11px] font-mono" style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-muted)' }}>
          <span>{post.location}</span>
          <span className="font-bold hover:underline flex items-center gap-1" style={{ color: 'var(--accent-gold)' }}>
            <span>Read Audit</span>
            <span>→</span>
          </span>
        </div>
      </div>
    </article>
  );
}
