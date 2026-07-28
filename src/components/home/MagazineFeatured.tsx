'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, MapPin, Sparkles, ArrowRight, ShieldCheck, Receipt } from 'lucide-react';
import { FoodPost } from '../../types/post';

interface MagazineFeaturedProps {
  leadPost: FoodPost;
  secondaryPosts: FoodPost[];
  onPostClick: (post: FoodPost) => void;
  onReceiptClick?: (post: FoodPost) => void;
}

export default function MagazineFeatured({ 
  leadPost, 
  secondaryPosts, 
  onPostClick,
  onReceiptClick 
}: MagazineFeaturedProps) {
  if (!leadPost) return null;

  return (
    <section className="w-full flex flex-col gap-6 py-4">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-stone-200 pb-3 gap-2">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E53935]/10 border border-[#E53935]/20 text-[11px] font-mono font-bold uppercase tracking-wider text-[#E53935] mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Editor's Magazine Feature</span>
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-zinc-900">
            Featured Food Reviews
          </h2>
        </div>
        <p className="text-xs font-medium text-stone-600">
          Curated deep-dive culinary inspections by Addis Foodies editorial staff
        </p>
      </div>

      {/* Editorial Magazine Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* 1. ONE HUGE FEATURED LEAD REVIEW (Lg: 7 Columns) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onClick={() => onPostClick(leadPost)}
          className="lg:col-span-7 group cursor-pointer bg-white border border-stone-200/80 rounded-3xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col"
        >
          {/* Dominant High-Impact Photography */}
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-900">
            <Image
              src={leadPost.image}
              alt={leadPost.restaurantName}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.94]"
            />
            {/* Top Badges */}
            <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
              <span className="px-3.5 py-1.5 rounded-full bg-[#E53935] text-white font-display font-black text-xs tracking-wide shadow-lg uppercase">
                Featured Lead Review
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-md text-amber-400 font-mono font-bold text-xs flex items-center gap-1 border border-white/20">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>4.9 / 5.0</span>
              </span>
            </div>

            {/* Bottom Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

            <div className="absolute bottom-4 left-4 right-4 text-white z-10 flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-300 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#E53935]" />
                <span>{leadPost.location}</span>
              </span>
              <span className="text-sm font-mono font-black text-emerald-400 bg-black/60 px-3 py-1 rounded-lg backdrop-blur-sm border border-emerald-500/30">
                {leadPost.priceFormatted}
              </span>
            </div>
          </div>

          {/* Lead Review Content Body */}
          <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between gap-2 text-xs font-mono text-[#FF8C00] font-bold">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>VERIFIED INSPECTION REPORT</span>
                  <span className="text-stone-300">•</span>
                  <span className="text-stone-500">{leadPost.category}</span>
                </div>
                {leadPost.reviewer && (
                  <div className="flex items-center gap-1.5 text-stone-600 bg-stone-100 px-2.5 py-1 rounded-full text-[11px]">
                    <span className="font-bold text-zinc-900">{leadPost.reviewer.name}</span>
                  </div>
                )}
              </div>

              <h3 className="font-display font-black text-[24px] leading-tight text-zinc-900 group-hover:text-[#E53935] transition-colors">
                {leadPost.restaurantName}
              </h3>

              <p className="text-[15px] font-normal leading-relaxed text-stone-600 line-clamp-3">
                {leadPost.caption}
              </p>
            </div>

            <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
              {leadPost.menuItems && onReceiptClick ? (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onReceiptClick(leadPost);
                  }}
                  className="touch-target px-3.5 py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-[#FF8C00] text-xs font-bold font-mono transition-all flex items-center gap-1.5 border border-amber-500/30"
                >
                  <Receipt className="w-3.5 h-3.5" />
                  <span>Itemized Receipt</span>
                </button>
              ) : (
                <span className="text-xs font-mono text-stone-400">Addis Foodies Editorial</span>
              )}

              <span className="font-display font-extrabold text-xs text-[#E53935] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                Read Full Story
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </motion.div>

        {/* 2. THREE SECONDARY REVIEWS (Lg: 5 Columns, Stacked Cards) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {secondaryPosts.slice(0, 3).map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              onClick={() => onPostClick(post)}
              className="group cursor-pointer bg-white border border-stone-200/80 rounded-2xl p-4 shadow-xs hover:shadow-lg transition-all duration-300 flex items-center gap-4 hover:border-[#E53935]/40"
            >
              {/* Secondary Image */}
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex-shrink-0 rounded-xl overflow-hidden bg-stone-900">
                <Image
                  src={post.image}
                  alt={post.restaurantName}
                  fill
                  sizes="128px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/80 text-amber-400 font-mono font-bold text-[10px] flex items-center gap-0.5">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  <span>4.8</span>
                </span>
              </div>

              {/* Secondary Content */}
              <div className="flex flex-col justify-between flex-1 gap-1.5">
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono font-bold text-[#FF8C00] mb-0.5">
                    <span>{post.location}</span>
                    <span className="text-emerald-600 font-bold">{post.priceFormatted}</span>
                  </div>

                  <h4 className="font-display font-black text-base sm:text-lg leading-snug text-zinc-900 group-hover:text-[#E53935] transition-colors line-clamp-1">
                    {post.restaurantName}
                  </h4>

                  <p className="text-xs text-stone-600 line-clamp-2 mt-1">
                    {post.caption}
                  </p>
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono font-bold text-stone-400 pt-1">
                  <span>{post.category}</span>
                  <span className="text-[#E53935] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    Read ↗
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
