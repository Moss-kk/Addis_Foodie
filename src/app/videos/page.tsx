'use client';

import React from 'react';
import Link from 'next/link';
import { Film, ArrowRight } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MobileBottomNav from '../../components/layout/MobileBottomNav';
import VideoReelsCarousel from '../../components/home/VideoReelsCarousel';

export default function VideosPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5] dark:bg-[#120907] text-zinc-900 dark:text-[#FFF8F6] transition-colors duration-300 pb-16 sm:pb-0 max-w-full overflow-x-hidden">
      <Header />

      <main className="flex-1 site-container py-8 sm:py-12 flex flex-col gap-8">
        
        {/* Breadcrumb */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-stone-500 hover:text-[#E53935] transition-colors"
          >
            <ArrowRight className="w-4 h-4 rotate-180 text-[#E53935]" />
            <span>Back to Digital Headquarters</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="flex flex-col gap-2 border-b border-stone-200 dark:border-stone-800 pb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-800 text-xs font-mono font-bold uppercase tracking-widest text-[#E53935] w-fit">
            <Film className="w-3.5 h-3.5" />
            <span>Short Video Reviews &amp; Reels Feed</span>
          </div>
          <h1 className="font-display font-black text-3xl sm:text-5xl text-zinc-950 dark:text-white">
            Addis Foodies Video Reels Archive
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-medium">
            Watch 9:16 vertical video reviews, kitchen preparation, sizzle shots, and street food vlogs across Addis Ababa.
          </p>
        </div>

        {/* Video Reels Section Component */}
        <VideoReelsCarousel />

      </main>

      <Footer />
      <MobileBottomNav />
    </div>
  );
}
