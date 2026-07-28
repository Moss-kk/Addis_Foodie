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
        whileHover={{ y: -6 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-3xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
        style={{
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border-hairline)',
          color: 'var(--text-primary)',
        }}
      >
        <div className="flex flex-col">

          {/* LEVEL 1: DOMINANT HIGH-IMPACT PHOTOGRAPHY (4:3) */}
          {/* Design.md: "images sit inside clean card wrappers with 100% opacity,
              completely free of dark gradient overlays or obscure masks." */}
          <div
            onClick={onClick}
            className="relative w-full aspect-[4/3] bg-stone-900 overflow-hidden cursor-pointer"
          >
            <Image
              src={post.image}
              alt={post.restaurantName}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              loading="lazy"
            />

            {/* Source Platform Badge — real brand icons */}
            <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase text-white tracking-wider border border-white/20 flex items-center gap-1.5 shadow-md">
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

            {/* Rating Pill */}
            <div
              className="absolute top-3 right-3 bg-black/80 backdrop-blur-md border px-3 py-1 rounded-full font-mono font-black text-xs flex items-center gap-1 shadow-md"
              style={{ borderColor: 'color-mix(in srgb, var(--accent-amber) 40%, transparent)', color: 'var(--accent-amber)' }}
            >
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>{post.rating ? `${post.rating}/5.0` : '4.8/5.0'}</span>
            </div>

            {/* Addis Foodies Watermark */}
            <div className="absolute bottom-3 right-3 bg-black/85 backdrop-blur-md border border-white/20 px-2.5 py-1 rounded flex flex-col items-center justify-center font-sans tracking-tight z-10 shadow-lg group-hover:border-[color:var(--accent-amber)]/60 transition-colors">
              <div className="bg-white text-black px-1.5 py-0.5 rounded-sm text-[9px] font-black uppercase tracking-wider leading-none">
                ADDIS
              </div>
              <div className="w-full h-[1.5px] my-0.5" style={{ backgroundColor: 'var(--accent-brand)' }} />
              <div className="text-white text-[8px] font-black uppercase tracking-widest leading-none">
                FOODIES
              </div>
            </div>
          </div>

          {/* CARD CONTENT BODY */}
          <div className="p-6 flex flex-col gap-3">

            {/* Reviewer Tag */}
            {post.reviewer && (
              <div className="flex items-center gap-2 pb-2.5" style={{ borderBottom: '1px solid var(--border-hairline)' }}>
                <div className="relative w-6 h-6 rounded-full overflow-hidden flex-shrink-0" style={{ border: '1px solid var(--border-hairline)' }}>
                  <Image
                    src={post.reviewer.avatar}
                    alt={post.reviewer.name}
                    fill
                    sizes="24px"
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center gap-1.5 overflow-hidden">
                  <span className="text-xs font-bold truncate" style={{ color: 'var(--text-primary)' }}>
                    {post.reviewer.name}
                  </span>
                  {/* Design.md: verified badge uses --accent-verified (#2A9D8F) */}
                  <span
                    className="text-[10px] font-extrabold px-1.5 py-0.5 rounded-full uppercase tracking-wider flex-shrink-0 text-white"
                    style={{ backgroundColor: 'var(--accent-verified)' }}
                  >
                    Verified
                  </span>
                </div>
              </div>
            )}

            {/* LEVEL 1: RESTAURANT NAME */}
            <h3
              onClick={onClick}
              className="font-display font-black text-[22px] leading-snug line-clamp-1 cursor-pointer transition-colors"
              style={{ color: 'var(--text-primary)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-brand)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
            >
              {post.restaurantName}
            </h3>

            {/* LEVEL 2: LOCATION & NEIGHBORHOOD */}
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--accent-brand)' }} />
              <span className="text-[15px] font-semibold" style={{ color: 'var(--accent-amber)' }}>
                {post.location}
              </span>
              <span className="text-xs" style={{ color: 'var(--border-hairline)' }}>•</span>
              <span className="text-xs font-mono font-bold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                {post.category}
              </span>
            </div>

            {/* LEVEL 3: PRICE RANGE */}
            <div className="flex items-center justify-between">
              {/* Design.md: JetBrains Mono for pricing */}
              <div className="text-[17px] font-mono font-black" style={{ color: 'var(--accent-verified)' }}>
                {post.priceFormatted}
              </div>
              {post.ratings && (
                <div
                  className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded-md"
                  style={{ backgroundColor: 'var(--bg-inset)', color: 'var(--text-muted)' }}
                >
                  Taste: <span className="font-bold" style={{ color: 'var(--text-primary)' }}>{post.ratings.taste}/5</span>
                </div>
              )}
            </div>

            {/* LEVEL 4: REVIEW SNIPPET */}
            <p
              className="text-[14px] font-medium leading-relaxed line-clamp-2 pt-1"
              style={{ color: 'var(--text-body)' }}
            >
              {post.caption}
            </p>
          </div>
        </div>

        {/* LEVEL 5: ACTIONS BAR */}
        <div
          className="px-6 pb-5 pt-3 flex items-center justify-between gap-2"
          style={{ borderTop: '1px solid var(--border-hairline)' }}
        >
          {post.menuItems && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowReceipt(true);
              }}
              className="touch-target px-3 py-1.5 rounded-xl text-xs font-bold font-mono transition-all flex items-center gap-1.5 border cursor-pointer"
              style={{
                backgroundColor: 'color-mix(in srgb, var(--accent-amber) 10%, transparent)',
                borderColor: 'color-mix(in srgb, var(--accent-amber) 30%, transparent)',
                color: 'var(--accent-amber)',
              }}
            >
              <Receipt className="w-3.5 h-3.5" />
              <span>Receipt</span>
            </button>
          )}

          <button
            onClick={onClick}
            className="touch-target px-5 py-2.5 rounded-xl text-white text-xs font-extrabold transition-all shadow-md cursor-pointer focus-ring flex items-center gap-1.5 ml-auto group-hover:scale-105"
            style={{ backgroundColor: 'var(--accent-brand)' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent-brand-hover)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent-brand)')}
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
