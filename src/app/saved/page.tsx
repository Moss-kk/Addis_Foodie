'use client';

import React from 'react';
import Link from 'next/link';
import { Heart, ArrowLeft, Utensils } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MobileBottomNav from '../../components/layout/MobileBottomNav';
import ReviewCard from '../../components/ReviewCard';
import { useSaved } from '../../context/SavedContext';
import { mockPosts } from '../../data/mockPosts';
import { FoodPost } from '../../types/post';

export default function SavedPage() {
  const { savedIds } = useSaved();

  const savedPosts: FoodPost[] = mockPosts.filter((p) => savedIds.includes(p.id));

  return (
    <div
      className="flex flex-col min-h-screen transition-colors duration-300 pb-20 sm:pb-0 max-w-full overflow-x-hidden"
      style={{ backgroundColor: 'var(--bg-app)', color: 'var(--text-primary)' }}
    >
      <Header />

      <main className="flex-1 site-container py-6 sm:py-10 flex flex-col gap-6">
        {/* Header Breadcrumb */}
        <div className="flex items-center justify-between border-b pb-4" style={{ borderColor: 'var(--border-subtle)' }}>
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider mb-2 border"
              style={{
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                borderColor: 'rgba(239, 68, 68, 0.3)',
                color: '#EF4444',
              }}
            >
              <Heart className="w-4 h-4 fill-current" />
              <span>Personal Saved Collection</span>
            </div>
            <h1 className="font-display font-bold text-3xl sm:text-4xl" style={{ color: 'var(--text-primary)' }}>
              Saved Spots &amp; Favorite Dishes
            </h1>
            <p className="text-xs sm:text-sm font-body pt-1" style={{ color: 'var(--text-secondary)' }}>
              Quick access to bookmarked Kitfo spots, cafes, and gourmet dishes in Addis.
            </p>
          </div>

          <Link
            href="/reviews"
            className="hidden sm:inline-flex items-center gap-2 text-xs font-mono font-bold text-slate-400 hover:text-amber-500 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Explore More</span>
          </Link>
        </div>

        {/* Content Feed */}
        {savedPosts.length === 0 ? (
          <div
            className="p-12 text-center rounded-3xl border flex flex-col items-center justify-center gap-4 my-8"
            style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}
          >
            <div className="w-16 h-16 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-500">
              <Heart className="w-8 h-8" />
            </div>
            <h3 className="font-display font-bold text-xl" style={{ color: 'var(--text-primary)' }}>
              No Saved Items Yet
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md font-body">
              Tap the heart icon (♥️) on any restaurant or dish card across Addis Foodies to save it here for offline access!
            </p>
            <Link
              href="/reviews"
              className="button-primary px-6 py-3 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-white mt-2 cursor-pointer hover:scale-105"
            >
              Browse Discovery Feed →
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedPosts.map((post) => (
              <ReviewCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </main>

      <Footer />
      <MobileBottomNav />
    </div>
  );
}
