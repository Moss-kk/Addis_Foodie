'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FoodPost } from '../types/post';
import { slugify } from '../lib/restaurants';
import PriceReceiptModal from './PriceReceiptModal';

interface PostDetailModalProps {
  post: FoodPost | null;
  onClose: () => void;
}

export default function PostDetailModal({ post, onClose }: PostDetailModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (post) {
      document.body.style.overflow = 'hidden';
      setActiveImageIndex(0); // Reset gallery index
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

  // Highlight hashtags in the review text
  const renderHighlightedText = (text: string) => {
    const words = text.split(/(\s+)/);
    return words.map((word, idx) => {
      if (word.startsWith('#')) {
        return (
          <span key={idx} className="text-brand-primary font-bold hover:underline">
            {word}
          </span>
        );
      }
      return word;
    });
  };

  const [showReceipt, setShowReceipt] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 select-none">
      {/* Background Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/75 backdrop-blur-xs transition-opacity duration-300 animate-fade-in"
      />

      {/* Main Modal Surface */}
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col animate-slide-up border border-zinc-200">
        {/* Sticky Modal Top Header */}
        <div className="sticky top-0 z-20 glass-panel border-b border-zinc-200/50 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="bg-[#F59E0B] text-[#111827] text-xs sm:text-sm font-mono font-black py-1 px-3.5 rounded-full shadow-2xs">
              {post.priceFormatted}
            </span>
            <button
              onClick={() => setShowReceipt(true)}
              className="bg-[#111827] hover:bg-[#A81D1D] text-white text-xs font-mono font-bold py-1 px-3 rounded-full transition-colors cursor-pointer"
            >
              🧾 View Itemized Receipt
            </button>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-full text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 transition-all cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable Container */}
        <div className="overflow-y-auto flex-1 no-scrollbar pb-6">
          
          {/* Main Media Header */}
          <div className="relative w-full aspect-video sm:aspect-[16/10] bg-zinc-100 border-b border-zinc-100">
            <Image
              src={postImages[activeImageIndex]}
              alt={post.restaurantName}
              fill
              priority
              sizes="(max-width: 640px) 100vw, 576px"
              className="object-cover transition-all duration-300"
            />
            {/* Price Tag Overlay */}
            <div className="absolute bottom-4 right-4 z-10">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-black text-brand-dark bg-brand-accent shadow-lg tracking-wide border border-white/20">
                {post.priceFormatted}
              </span>
            </div>
          </div>

          {/* Interactive Thumbnails switcher */}
          {postImages.length > 1 && (
            <div className="flex items-center gap-2 px-6 mt-4 overflow-x-auto no-scrollbar">
              {postImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-14 h-14 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 cursor-pointer ${
                    activeImageIndex === idx
                      ? 'border-brand-primary scale-102 shadow-xs'
                      : 'border-transparent opacity-65 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${post.restaurantName} view ${idx + 1}`}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Details & Information */}
          <div className="px-6 pt-5 flex flex-col gap-5">
            
            {/* Title, Neighborhood and Map action */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="flex flex-col gap-1.5">
                <h2 className="font-display font-black text-xl sm:text-2xl text-brand-dark leading-tight">
                  <Link
                    href={`/restaurant/${slugify(post.restaurantName)}`}
                    onClick={onClose}
                    className="hover:underline hover:text-brand-primary transition-colors"
                  >
                    {post.restaurantName}
                  </Link>
                </h2>
                
                {/* Location Badge (Bole, Kazanchis, etc.) */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1 text-[11px] font-extrabold text-[#111827] bg-zinc-100 px-3 py-1 rounded-full border border-zinc-200/40">
                    📍 {post.location}
                  </span>
                  <span className="inline-flex items-center text-[10px] text-zinc-500 font-extrabold bg-zinc-100 px-3 py-1 rounded-full uppercase tracking-wider border border-zinc-200/40">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Open in Maps button */}
              {post.mapUrl && (
                <a
                  href={post.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1 px-4 py-2 rounded-xl text-xs font-extrabold bg-brand-primary hover:bg-[#8B1717] text-white transition-all shadow-xs border border-brand-primary/10 w-fit self-start cursor-pointer"
                >
                  Open in Maps 📍
                </a>
              )}
            </div>

            {/* Menu Breakdown Table */}
            {post.menuItems && post.menuItems.length > 0 && (
              <div className="bg-zinc-50/50 p-4 rounded-2xl border border-zinc-200/40 flex flex-col gap-2">
                <h4 className="text-[10px] font-black text-zinc-800 uppercase tracking-widest border-b border-zinc-200/40 pb-1 w-fit">
                  Menu & Prices (ETB)
                </h4>
                <div className="divide-y divide-zinc-200/30">
                  {post.menuItems.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2 text-xs font-semibold">
                      <span className="text-zinc-600">{item.name}</span>
                      <span className="text-[#111827] font-black font-mono">{item.price} ETB</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Full Review Text block */}
            <div className="bg-zinc-50/50 p-4 rounded-2xl border border-zinc-200/40 flex flex-col gap-2">
              <h4 className="text-[10px] font-black text-zinc-800 uppercase tracking-widest border-b border-zinc-200/40 pb-1 w-fit">
                Original Review
              </h4>
              <div className="text-zinc-600 text-xs sm:text-sm leading-relaxed whitespace-pre-line font-medium pr-1">
                {renderHighlightedText(post.caption)}
              </div>
            </div>

          </div>
        </div>

      </div>
      
      {/* Itemized Price Receipt Modal Overlay */}
      {showReceipt && (
        <PriceReceiptModal
          post={post}
          onClose={() => setShowReceipt(false)}
        />
      )}
      
      {/* CSS animation definitions */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(16px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 0.2s ease-out forwards;
        }
        .animate-slide-up {
          animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
}
