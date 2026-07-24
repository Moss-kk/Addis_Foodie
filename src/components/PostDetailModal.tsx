'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { FoodPost } from '../types/post';

interface PostDetailModalProps {
  post: FoodPost | null;
  onClose: () => void;
}

export default function PostDetailModal({ post, onClose }: PostDetailModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (post) {
      document.body.style.overflow = 'hidden';
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Dark Translucent Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/65 backdrop-blur-xs transition-opacity duration-300 animate-fade-in"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[85vh] animate-slide-up z-10 border border-zinc-200/50">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-30 p-2 rounded-full bg-white/95 backdrop-blur-xs border border-zinc-200/50 text-zinc-500 hover:text-zinc-800 hover:scale-105 shadow-md transition-all cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Scrollable Container */}
        <div className="overflow-y-auto flex-1 no-scrollbar">
          
          {/* Media Header */}
          <div className="relative w-full aspect-video sm:aspect-[16/10] bg-zinc-100">
            <Image
              src={post.image}
              alt={post.restaurantName}
              fill
              priority
              sizes="(max-width: 640px) 100vw, 576px"
              className="object-cover"
            />
            {/* Price Tag Overlay */}
            <div className="absolute bottom-4 right-4 z-10">
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-black text-brand-dark bg-brand-accent shadow-lg tracking-wide">
                ETB {post.price}
              </span>
            </div>
            {/* Platform Tag Overlay */}
            <div className="absolute bottom-4 left-4 z-10">
              {post.sourcePlatform === 'telegram' ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-black text-white bg-[#0088cc] shadow-lg uppercase tracking-wider">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-1-.65-.35-1 .22-1.6 1.5-1.55 2.75-2.92 2.75-2.92.3-.34.36-.5-.22-.52-.37-.02-1.92.95-4.82 2.9-.45.31-.86.46-1.22.45-.4-.01-1.17-.23-1.74-.41-.7-.22-1.25-.34-1.2-.72.03-.2.3-.41.82-.62 3.2-1.4 5.34-2.32 6.42-2.77 3.07-1.28 3.7-.15 3.7.37z" />
                  </svg>
                  Telegram Feed
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-black text-white bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] shadow-lg uppercase tracking-wider">
                  <svg
                    className="w-3.5 h-3.5 stroke-current fill-none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  </svg>
                  Instagram Feed
                </span>
              )}
            </div>
          </div>

          {/* Details & Information */}
          <div className="p-6 flex flex-col gap-4">
            
            {/* Header Title & Tags */}
            <div className="flex flex-col gap-2">
              <h2 className="font-display font-black text-xl sm:text-2xl text-brand-dark leading-tight">
                {post.restaurantName}
              </h2>
              
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1 text-xs text-zinc-600 font-bold bg-zinc-100 px-3 py-1 rounded-full">
                  📍 {post.location}
                </span>
                <span className="inline-flex items-center text-xs text-zinc-600 font-bold bg-zinc-100 px-3 py-1 rounded-full uppercase tracking-wider">
                  {post.category}
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-zinc-200/60 w-full" />

            {/* Review text */}
            <div className="text-zinc-600 text-sm sm:text-base leading-relaxed whitespace-pre-line font-medium pr-1">
              {renderHighlightedText(post.caption)}
            </div>

          </div>
        </div>

        {/* Footer Outbound Redirect Button */}
        <div className="p-4 sm:p-6 bg-zinc-50 border-t border-zinc-200/50 flex flex-col gap-2">
          <a
            href={post.originalPostUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full bg-brand-primary hover:bg-brand-primary/95 text-white font-extrabold text-xs sm:text-sm py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
          >
            {post.sourcePlatform === 'telegram' ? 'Open in Telegram' : 'Open in Instagram'}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        </div>

      </div>
      
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
