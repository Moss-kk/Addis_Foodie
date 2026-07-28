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
    <div className="flex flex-col min-h-screen bg-[#0B0F17] text-[#F8FAFC] transition-colors duration-300 pb-16 sm:pb-0 max-w-full overflow-x-hidden">
      <Header />

      <main className="flex-1 site-container py-8 sm:py-12 flex flex-col gap-8">
        
        {/* Breadcrumb */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#94A3B8] hover:text-[#F59E0B] transition-colors"
          >
            <ArrowRight className="w-4 h-4 rotate-180 text-[#F59E0B]" />
            <span>Back to Digital Headquarters</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="flex flex-col gap-2 border-b border-[#1F293D] pb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161E2E] border border-[#F59E0B]/30 text-xs font-mono font-bold uppercase tracking-widest text-[#F59E0B] w-fit">
            <Film className="w-3.5 h-3.5" />
            <span>Short Video Reviews &amp; Reels Feed</span>
          </div>
          <h1 className="font-display font-black text-3xl sm:text-5xl text-[#F8FAFC]">
            Addis Foodies Video Reels Archive
          </h1>
          <p className="text-xs sm:text-sm text-[#94A3B8] font-medium">
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
