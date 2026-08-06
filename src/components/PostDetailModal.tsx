'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Receipt, Navigation, Star, ShieldCheck, CheckCircle2, X } from 'lucide-react';
import { FoodPost } from '../types/post';
import { slugify } from '../lib/restaurants';
import PriceReceiptModal from './PriceReceiptModal';

interface PostDetailModalProps {
  post: FoodPost | null;
  onClose: () => void;
}

export default function PostDetailModal({ post, onClose }: PostDetailModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showReceipt, setShowReceipt] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (post) {
      document.body.style.overflow = 'hidden';
      setActiveImageIndex(0);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [post]);

  // Handle escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!post) return null;

  const postImages = post.images && post.images.length > 0 ? post.images : [post.image];
  const layoutId = `expandable-food-card-${post.id}`;

  // Highlight hashtags in the review text
  const renderHighlightedText = (text: string) => {
    const words = text.split(/(\s+)/);
    return words.map((word, idx) => {
      if (word.startsWith('#')) {
        return (
          <span key={idx} className="text-[#B8422E] font-bold hover:underline">
            {word}
          </span>
        );
      }
      return word;
    });
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 select-none">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Shared Layout Expanded Split Card Modal Surface */}
        <motion.div
          layoutId={layoutId}
          className="relative w-full max-w-4xl h-[88vh] max-h-[850px] bg-[#1A1C1E] text-white rounded-2xl overflow-hidden border border-[#6C7278]/30 z-10 flex flex-col md:flex-row shadow-2xl"
        >
          {/* Top Close Button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 z-30 flex h-9 w-9 items-center justify-center rounded-full bg-[#1A1C1E]/80 hover:bg-[#B8422E] text-white transition-colors border border-white/20 backdrop-blur-sm cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* LEFT HALF (md:w-1/2): Food Image & Gallery Thumbnails */}
          <div className="relative h-64 sm:h-72 w-full shrink-0 overflow-hidden md:h-full md:w-1/2 bg-stone-950 flex flex-col justify-between">
            <div className="relative w-full h-full">
              <motion.img
                layoutId={`image-${layoutId}`}
                src={postImages[activeImageIndex]}
                alt={post.restaurantName}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1C1E] via-transparent to-black/30" />

              {/* Price Tag Overlay */}
              <div className="absolute bottom-4 left-6 z-10 bg-[#B8422E] px-4 py-1.5 rounded-full font-mono font-extrabold text-sm text-white shadow-lg border border-white/20">
                {post.priceFormatted}
              </div>

              {/* Quick Call Action Button */}
              <a
                href="tel:+251911000000"
                className="absolute bottom-4 right-6 z-10 bg-[#1A1C1E]/80 hover:bg-[#B8422E] backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-mono font-bold text-white border border-white/20 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Call Venue</span>
              </a>
            </div>

            {/* Interactive Image Gallery Thumbnails */}
            {postImages.length > 1 && (
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2 overflow-x-auto no-scrollbar max-w-[80%]">
                {postImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-10 h-10 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 cursor-pointer ${
                      activeImageIndex === idx
                        ? 'border-[#B8422E] shadow-sm'
                        : 'border-white/20 opacity-65 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${post.restaurantName} photo ${idx + 1}`}
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT HALF (md:w-1/2): Scrollable Information & Review Container */}
          <div className="p-6 sm:p-8 w-full md:w-1/2 flex flex-col h-full overflow-y-auto custom-scrollbar bg-[#1A1C1E] text-white">
            
            {/* Category & Neighborhood Subtitle */}
            <motion.p
              layoutId={`subtitle-${layoutId}`}
              className="text-[#B8422E] text-xs font-mono font-bold tracking-widest uppercase mb-1 flex items-center gap-2"
            >
              <span>{post.category || 'CULINARY'}</span>
              <span>•</span>
              <span className="text-[#6C7278]">{post.neighborhood || 'BOLE'}</span>
            </motion.p>

            {/* Restaurant Title */}
            <motion.h2
              layoutId={`title-${layoutId}`}
              className="text-2xl sm:text-3xl font-display font-medium text-white mb-2 leading-tight"
            >
              <Link
                href={`/restaurant/${slugify(post.restaurantName)}`}
                onClick={onClose}
                className="hover:underline hover:text-[#B8422E] transition-colors"
              >
                {post.restaurantName}
              </Link>
            </motion.h2>

            <p className="text-xs font-body text-[#6C7278] flex items-center gap-1.5 mb-5 pb-4 border-b border-[#6C7278]/20">
              <MapPin className="w-3.5 h-3.5 text-[#B8422E] shrink-0" />
              <span>{post.location}</span>
            </p>

            {/* Animated Detailed Content Area */}
            <motion.div
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ delay: 0.15 }}
              className="flex flex-col gap-5 grow text-sm font-body text-stone-200"
            >
              {/* Reviewer Verified Badge */}
              {post.reviewer && (
                <div className="bg-[#1A1C1E] border border-[#6C7278]/30 rounded-xl p-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative w-9 h-9 rounded-full overflow-hidden border border-[#B8422E]">
                      <Image
                        src={post.reviewer.avatar}
                        alt={post.reviewer.name}
                        fill
                        sizes="36px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-xs text-white">{post.reviewer.name}</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      </div>
                      <span className="text-[10px] font-mono text-[#6C7278]">{post.reviewer.role}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-amber-400 font-mono font-bold text-xs bg-black/40 px-2.5 py-1 rounded-md border border-white/10">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{post.rating || '4.9'}</span>
                  </div>
                </div>
              )}

              {/* 4-Tier Ratings Breakdown Grid */}
              {post.ratings && (
                <div className="grid grid-cols-4 gap-2 bg-stone-900/90 p-3 rounded-xl border border-[#6C7278]/20 text-center">
                  <div>
                    <span className="block text-[9px] font-mono text-[#6C7278] uppercase">Taste</span>
                    <span className="font-mono font-bold text-xs text-[#B8422E]">{post.ratings.taste}/5.0</span>
                  </div>
                  <div>
                    <span className="block text-[9px] font-mono text-[#6C7278] uppercase">Ambiance</span>
                    <span className="font-mono font-bold text-xs text-amber-400">{post.ratings.ambiance}/5.0</span>
                  </div>
                  <div>
                    <span className="block text-[9px] font-mono text-[#6C7278] uppercase">Service</span>
                    <span className="font-mono font-bold text-xs text-stone-200">{post.ratings.service}/5.0</span>
                  </div>
                  <div>
                    <span className="block text-[9px] font-mono text-[#6C7278] uppercase">Value</span>
                    <span className="font-mono font-bold text-xs text-stone-300">{post.ratings.value}/5.0</span>
                  </div>
                </div>
              )}

              {/* Inspector Pro Tip */}
              {post.reviewerNotes && (
                <div className="bg-stone-900/60 border border-[#B8422E]/30 p-3.5 rounded-xl flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#B8422E] shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-0.5 text-xs">
                    <span className="font-mono font-bold text-[#B8422E] uppercase tracking-wider text-[9px]">Inspector Note</span>
                    <p className="text-stone-300 leading-normal">{post.reviewerNotes}</p>
                  </div>
                </div>
              )}

              {/* Full Review Text block */}
              <div className="bg-stone-900/50 p-4 rounded-xl border border-[#6C7278]/20 flex flex-col gap-2">
                <h4 className="text-[10px] font-mono font-bold text-[#B8422E] uppercase tracking-widest border-b border-[#6C7278]/20 pb-1 w-fit">
                  Verified Inspection Review
                </h4>
                <div className="text-stone-300 text-xs leading-relaxed whitespace-pre-line font-body">
                  {renderHighlightedText(post.caption)}
                </div>
              </div>

              {/* Itemized Menu Prices Breakdown */}
              {post.menuItems && post.menuItems.length > 0 && (
                <div className="bg-stone-900 p-4 rounded-xl border border-[#6C7278]/30 flex flex-col gap-2">
                  <div className="flex items-center justify-between border-b border-[#6C7278]/20 pb-2">
                    <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-amber-400 uppercase">
                      <Receipt className="w-3.5 h-3.5 text-[#B8422E]" />
                      <span>Itemized Menu Receipts (ETB)</span>
                    </div>
                    <button
                      onClick={() => setShowReceipt(true)}
                      className="text-[10px] font-mono text-[#B8422E] hover:underline font-bold"
                    >
                      Audit View →
                    </button>
                  </div>

                  <div className="divide-y divide-[#6C7278]/15">
                    {post.menuItems.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center py-1.5 text-xs font-mono">
                        <span className="text-stone-300 truncate max-w-[200px]">{item.name}</span>
                        <span className="text-amber-400 font-bold">{item.price} Br</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Integrated GPS Map Location & Directions Box */}
              <div className="bg-stone-950 p-4 rounded-xl border border-[#6C7278]/30 flex flex-col gap-3 relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-[#6C7278]/20 pb-2 z-10">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-amber-400 uppercase">
                    <MapPin className="w-3.5 h-3.5 text-[#B8422E]" />
                    <span>GPS Venue Map Location</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#6C7278] uppercase">
                    {post.neighborhood || 'Addis Ababa'}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 z-10">
                  <div className="flex flex-col gap-0.5">
                    <span className="font-display font-medium text-sm text-white">{post.restaurantName}</span>
                    <span className="text-xs text-[#6C7278] flex items-center gap-1 font-body">
                      <Navigation className="w-3 h-3 text-[#B8422E] shrink-0" />
                      <span>{post.location}</span>
                    </span>
                  </div>

                  <a
                    href={post.mapUrl || `https://maps.google.com/?q=${encodeURIComponent(post.restaurantName + ' ' + post.location + ' Addis Ababa')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-4 rounded-lg bg-[#B8422E] hover:bg-[#a33725] text-white font-mono font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-md shrink-0 cursor-pointer"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>

            </motion.div>
          </div>
        </motion.div>

        {/* Itemized Price Receipt Modal Overlay */}
        {showReceipt && (
          <PriceReceiptModal
            post={post}
            onClose={() => setShowReceipt(false)}
          />
        )}
      </div>
    </AnimatePresence>
  );
}
