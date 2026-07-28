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
    <div
      className="flex flex-col min-h-screen transition-colors duration-300 pb-16 sm:pb-0 max-w-full overflow-x-hidden"
      style={{ backgroundColor: 'var(--bg-app)', color: 'var(--text-primary)' }}
    >
      <Header />

      <main className="flex-1 site-container py-8 sm:py-12 flex flex-col gap-8">
        
        {/* Breadcrumb */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-500 hover:text-amber-500 transition-colors"
          >
            <ArrowRight className="w-4 h-4 rotate-180" style={{ color: 'var(--accent-gold)' }} />
            <span>Back to Discovery Feed</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="flex flex-col gap-2 border-b pb-4" style={{ borderColor: 'var(--border-subtle)' }}>
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border text-xs font-mono font-bold uppercase tracking-widest w-fit"
            style={{
              backgroundColor: 'var(--accent-gold-glow)',
              borderColor: 'var(--border-subtle)',
              color: 'var(--accent-gold)',
            }}
          >
            <Film className="w-3.5 h-3.5" />
            <span>Short Video Reviews &amp; Reels Feed</span>
          </div>
          <h1 className="font-display font-normal text-3xl sm:text-5xl" style={{ color: 'var(--text-primary)' }}>
            Addis Foodies Video Reels Archive
          </h1>
          <p className="text-xs sm:text-sm font-body" style={{ color: 'var(--text-secondary)' }}>
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
