'use client';

import React from 'react';
import Image from 'next/image';
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogImage,
  MorphingDialogSubtitle,
  MorphingDialogClose,
  MorphingDialogDescription,
  MorphingDialogContainer,
} from '@/components/core/morphing-dialog';
import { PlusIcon, Star, MapPin, Heart, ExternalLink, Receipt, Sparkles } from 'lucide-react';
import { FoodPost } from '../types/post';
import { useSaved } from '../context/SavedContext';

interface FoodReviewMorphCardProps {
  post: FoodPost;
  width?: string;
}

export default function FoodReviewMorphCard({ post, width = 'w-[280px] sm:w-[320px]' }: FoodReviewMorphCardProps) {
  const { isSaved, toggleSave } = useSaved();
  const saved = isSaved(post.id);

  const priceDisplay = post.priceFormatted || (post.price ? `${post.price} Br` : 'Price on Menu');
  const ratingValue = post.rating || '4.9';

  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0.05,
        duration: 0.25,
      }}
    >
      {/* 1. TRIGGER CARD (COLLAPSED STATE IN INFINITE SLIDER) */}
      <MorphingDialogTrigger
        style={{
          borderRadius: '16px',
        }}
        className={`flex ${width} shrink-0 flex-col overflow-hidden border border-stone-800 bg-[#1A1C1E] text-white shadow-md transition-all duration-300 hover:border-[#B8422E] hover:shadow-xl group`}
      >
        <div className="relative h-48 w-full overflow-hidden bg-stone-900">
          <MorphingDialogImage
            src={post.image}
            alt={post.restaurantName}
            className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
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

        {/* Collapsed Details: Just Restaurant Name, Neighborhood, Price & Touch Plus Icon (Review Text Hidden) */}
        <div className="flex grow flex-row items-center justify-between p-3.5 gap-2">
          <div className="min-w-0 flex-1">
            <MorphingDialogTitle className="text-base font-display font-medium text-white truncate group-hover:text-[#B8422E] transition-colors">
              {post.restaurantName}
            </MorphingDialogTitle>
            <MorphingDialogSubtitle className="text-xs font-body text-stone-400 truncate flex items-center gap-1 pt-0.5">
              <span>{post.category || 'Culinary'}</span>
              <span>•</span>
              <span className="text-amber-400 font-medium">{post.neighborhood || 'Bole'}</span>
            </MorphingDialogSubtitle>
          </div>

          <button
            type="button"
            className="relative flex h-8 w-8 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-xl border border-white/15 bg-stone-800/80 text-stone-200 transition-colors group-hover:bg-[#B8422E] group-hover:text-white group-hover:border-[#B8422E]"
            aria-label="Open review dialog"
          >
            <PlusIcon size={16} />
          </button>
        </div>
      </MorphingDialogTrigger>

      {/* 2. EXPANDED DIALOG CONTENT (MORPHS OPEN UPON TOUCH/TAP) */}
      <MorphingDialogContainer>
        <MorphingDialogContent
          style={{
            borderRadius: '24px',
          }}
          className="pointer-events-auto relative flex max-h-[90vh] w-full max-w-[540px] flex-col overflow-y-auto border border-stone-800 bg-[#141517] text-white shadow-2xl no-scrollbar"
        >
          {/* Main Hero Header Image */}
          <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-stone-900 shrink-0">
            <MorphingDialogImage
              src={post.image}
              alt={post.restaurantName}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141517] via-transparent to-black/40" />

            {/* Price Badge on Dialog Image */}
            <div className="absolute bottom-4 left-6 bg-[#B8422E] px-4 py-1.5 rounded-full font-mono font-extrabold text-base text-white shadow-xl border border-white/20">
              {priceDisplay}
            </div>

            {/* Save Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                toggleSave(post.id);
              }}
              className={`absolute bottom-4 right-6 p-2.5 rounded-full backdrop-blur-md border transition cursor-pointer ${
                saved 
                  ? 'bg-red-500/20 text-red-500 border-red-500/50' 
                  : 'bg-black/60 text-stone-300 border-white/20 hover:text-white'
              }`}
              title="Save Spot"
            >
              <Heart className={`w-5 h-5 ${saved ? 'fill-current' : ''}`} />
            </button>

            <MorphingDialogClose className="top-4 right-4" />
          </div>

          {/* Dialog Body Content */}
          <div className="p-6 flex flex-col gap-5">
            <div>
              <div className="flex items-center gap-2 text-xs font-label font-bold text-[#B8422E] uppercase tracking-widest mb-1">
                <span>{post.category || 'FOOD INSPECTION'}</span>
                <span>•</span>
                <span className="text-amber-400">{post.neighborhood}</span>
              </div>

              <MorphingDialogTitle className="text-2xl sm:text-3xl font-display font-medium text-white">
                {post.restaurantName}
              </MorphingDialogTitle>

              <MorphingDialogSubtitle className="text-xs font-body text-stone-400 flex items-center gap-1.5 pt-1">
                <MapPin className="w-3.5 h-3.5 text-red-400 shrink-0" />
                <span>{post.location}</span>
              </MorphingDialogSubtitle>
            </div>

            {/* Ratings Summary */}
            <div className="grid grid-cols-4 gap-2 bg-stone-900/80 p-3 rounded-xl border border-stone-800 text-center">
              <div>
                <span className="block text-[10px] font-label text-stone-400 uppercase">Overall</span>
                <span className="font-mono font-bold text-sm text-amber-400">{ratingValue} ★</span>
              </div>
              <div>
                <span className="block text-[10px] font-label text-stone-400 uppercase">Taste</span>
                <span className="font-mono font-bold text-sm text-emerald-400">{post.ratings?.taste || '4.9'}</span>
              </div>
              <div>
                <span className="block text-[10px] font-label text-stone-400 uppercase">Ambiance</span>
                <span className="font-mono font-bold text-sm text-sky-400">{post.ratings?.ambiance || '4.8'}</span>
              </div>
              <div>
                <span className="block text-[10px] font-label text-stone-400 uppercase">Service</span>
                <span className="font-mono font-bold text-sm text-purple-400">{post.ratings?.service || '4.7'}</span>
              </div>
            </div>

            {/* Full Review Description (Revealed on Open) */}
            <MorphingDialogDescription
              disableLayoutAnimation
              variants={{
                initial: { opacity: 0, scale: 0.95, y: 20 },
                animate: { opacity: 1, scale: 1, y: 0 },
                exit: { opacity: 0, scale: 0.95, y: 20 },
              }}
              className="flex flex-col gap-4 text-stone-300 text-sm font-body leading-relaxed"
            >
              <div className="p-4 rounded-xl bg-stone-900/50 border border-stone-800/80">
                <div className="flex items-center gap-2 mb-2 text-xs font-label text-amber-400 font-bold uppercase">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Verified Addis Foodie™ Inspection Review:</span>
                </div>
                <p className="whitespace-pre-line text-stone-200">
                  {post.caption}
                </p>
              </div>

              {/* Itemized Menu Receipt Breakdown if available */}
              {post.menuItems && post.menuItems.length > 0 && (
                <div className="flex flex-col gap-2 p-4 rounded-xl bg-stone-950 border border-amber-500/20">
                  <div className="flex items-center justify-between border-b border-stone-800 pb-2">
                    <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold uppercase">
                      <Receipt className="w-4 h-4" />
                      <span>Itemized ETB Menu Receipt</span>
                    </div>
                    <span className="text-[10px] font-mono text-stone-400">Audited Prices</span>
                  </div>

                  <div className="flex flex-col gap-1.5 pt-1">
                    {post.menuItems.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center text-xs font-mono">
                        <span className="text-stone-300 truncate max-w-[240px]">{item.name}</span>
                        <span className="text-emerald-400 font-bold">{item.price} Br</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                {post.mapUrl ? (
                  <a
                    href={post.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 rounded-xl bg-[#B8422E] hover:bg-[#a33725] text-white font-label font-bold text-xs uppercase tracking-wider transition flex items-center justify-center gap-2"
                  >
                    <MapPin className="w-4 h-4" />
                    <span>Get Directions on Map</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(post.restaurantName + ' ' + post.location + ' Addis Ababa')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 rounded-xl bg-[#B8422E] hover:bg-[#a33725] text-white font-label font-bold text-xs uppercase tracking-wider transition flex items-center justify-center gap-2"
                  >
                    <MapPin className="w-4 h-4" />
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </MorphingDialogDescription>
          </div>
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
}
