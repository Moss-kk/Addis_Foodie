'use client';

import React, { useState, useMemo, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { 
  Compass, 
  MapPin as MapPinIcon, 
  Trophy, 
  Filter, 
  Map as MapIcon, 
  List as ListIcon,
  Tag,
  DollarSign
} from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MobileBottomNav from '../../components/layout/MobileBottomNav';
import PostDetailModal from '../../components/PostDetailModal';
import ReviewCard from '../../components/ReviewCard';
import GoogleAddisMap from '../../components/GoogleAddisMap';
import { CUISINE_CATEGORIES } from '../../lib/categories';
import { mockPosts } from '../../data/mockPosts';
import { FoodPost } from '../../types/post';

function ReviewsMapContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [activeSpot, setActiveSpot] = useState<FoodPost>(mockPosts[0]);
  const [modalPost, setModalPost] = useState<FoodPost | null>(null);
  
  // Mobile Floating Toggle State ('list' or 'map')
  const [mobileView, setMobileView] = useState<'list' | 'map'>('list');

  // Sync Filtered Posts
  const filteredSpots = useMemo(() => {
    return mockPosts.filter((spot) => {
      // Category filter
      if (selectedCategory !== 'all') {
        const catMatch = spot.category.toLowerCase() === selectedCategory.toLowerCase();
        if (!catMatch) return false;
      }

      // Price filter
      if (selectedPriceRange !== 'all') {
        if (selectedPriceRange === 'under-300' && spot.price >= 300) return false;
        if (selectedPriceRange === '300-700' && (spot.price < 300 || spot.price > 700)) return false;
        if (selectedPriceRange === '700-plus' && spot.price <= 700) return false;
      }

      return true;
    });
  }, [selectedCategory, selectedPriceRange]);

  return (
    <div
      className="flex flex-col min-h-screen transition-colors duration-300 pb-20 sm:pb-0 max-w-full overflow-x-hidden"
      style={{ backgroundColor: 'var(--bg-app)', color: 'var(--text-primary)' }}
    >
      <Header />

      <main className="flex-1 site-container py-6 flex flex-col gap-6">
        
        {/* Page Title & Filter Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b pb-4 gap-4" style={{ borderColor: 'var(--border-subtle)' }}>
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-label uppercase tracking-wider mb-2 border text-[#B8422E] bg-[#B8422E]/10 border-[#B8422E]/20 font-bold"
            >
              <Compass className="w-4 h-4 text-[#B8422E]" />
              <span>Interactive Categorized Food Map</span>
            </div>
            <h1 className="font-syne font-bold text-3xl sm:text-5xl text-[var(--text-primary)]">
              Addis Ababa Food Map & Reviews
            </h1>
            <p className="text-xs sm:text-sm font-body pt-1 text-[var(--text-secondary)] leading-relaxed max-w-2xl">
              Browse pinned venues by cuisine category, inspect price breakdowns, and directly cast votes in the Addis Foodies Awards.
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-white font-bold border border-white/10 px-4 py-2 rounded-xl bg-[#1A1C1E] shadow-sm">
            <MapPinIcon className="w-4 h-4 text-[#F59E0B]" />
            <span>{filteredSpots.length} Pinned Venues</span>
          </div>
        </div>

        {/* Filter Bar Strip (Categories + Price Ranges) */}
        <div className="flex flex-col gap-3 p-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-xs">
          
          {/* Cuisine Categories Row */}
          <div className="flex flex-col gap-2">
            <span className="text-[11px] font-label uppercase font-bold text-[var(--text-secondary)]">
              Cuisine Category:
            </span>
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
              <button
                type="button"
                onClick={() => setSelectedCategory('all')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-label font-bold uppercase transition-all shrink-0 cursor-pointer border ${
                  selectedCategory === 'all'
                    ? 'bg-[#1A1C1E] text-white border-[#B8422E]'
                    : 'bg-[var(--bg-app)] text-[var(--text-primary)] border-[var(--border-subtle)] hover:border-[#B8422E]'
                }`}
              >
                All Categories ⭐
              </button>

              {CUISINE_CATEGORIES.map((cat) => {
                const isSelected = selectedCategory.toLowerCase() === cat.slug.toLowerCase();
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.slug)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-label font-bold uppercase transition-all flex items-center gap-1.5 shrink-0 cursor-pointer border ${
                      isSelected
                        ? 'bg-[#1A1C1E] text-white border-[#B8422E]'
                        : 'bg-[var(--bg-app)] text-[var(--text-primary)] border-[var(--border-subtle)] hover:border-[#B8422E]'
                    }`}
                  >
                    <span>{cat.emoji}</span>
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Price Range Filter Row */}
          <div className="flex items-center gap-3 pt-2 border-t border-[var(--border-subtle)]">
            <span className="text-[11px] font-label uppercase font-bold text-[var(--text-secondary)] shrink-0">
              Price Level (ETB):
            </span>
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
              {[
                { id: 'all', label: 'Any Price' },
                { id: 'under-300', label: 'Under 300 Br' },
                { id: '300-700', label: '300 – 700 Br' },
                { id: '700-plus', label: '700+ Br' },
              ].map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setSelectedPriceRange(p.id)}
                  className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all shrink-0 cursor-pointer border ${
                    selectedPriceRange === p.id
                      ? 'bg-[#F59E0B] text-zinc-950 border-[#F59E0B]'
                      : 'bg-[var(--bg-app)] text-[var(--text-primary)] border-[var(--border-subtle)] hover:border-[#F59E0B]'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* SPLIT-SCREEN 60/40 CONTAINER (DESKTOP) + MOBILE TOGGLE */}
        <div className="relative w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* LEFT 60%: Scrollable List of Interactive Cards */}
          <div className={`lg:col-span-7 flex flex-col gap-4 ${mobileView === 'map' ? 'hidden lg:flex' : 'flex'}`}>
            
            {filteredSpots.length === 0 ? (
              <div className="p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-center flex flex-col items-center gap-3">
                <Tag className="w-8 h-8 text-amber-500" />
                <h3 className="font-syne font-bold text-lg text-[var(--text-primary)]">
                  No spots found in this category &amp; price range
                </h3>
                <p className="text-xs text-[var(--text-secondary)]">
                  Nominate a restaurant to be featured on Addis Foodie!
                </p>
                <Link
                  href="/suggestions"
                  className="mt-2 button-primary px-4 py-2 rounded-xl text-xs font-label uppercase text-white font-bold"
                >
                  Suggest a Restaurant →
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filteredSpots.map((spot) => (
                  <div
                    key={spot.id}
                    onMouseEnter={() => setActiveSpot(spot)}
                    className={`flex flex-col gap-2 transition-all duration-300 ${
                      activeSpot?.id === spot.id ? 'ring-2 ring-[#B8422E] rounded-2xl' : ''
                    }`}
                  >
                    <ReviewCard
                      post={spot}
                      onClick={() => setModalPost(spot)}
                    />

                    {/* Deep-link CTA to Awards Page */}
                    <Link
                      href={`/awards?category=${spot.category.toLowerCase()}`}
                      className="inline-flex items-center justify-between px-3.5 py-2 rounded-xl bg-stone-900 text-stone-200 text-[11px] font-label font-bold uppercase tracking-wider border border-white/10 hover:border-[#F59E0B] hover:text-[#F59E0B] transition-all"
                    >
                      <span className="flex items-center gap-1.5">
                        <Trophy className="w-3.5 h-3.5 text-[#F59E0B]" />
                        <span>Vote in Awards</span>
                      </span>
                      <span>→</span>
                    </Link>
                  </div>
                ))}
              </div>
            )}

          </div>

          {/* RIGHT 40%: Sticky Map View */}
          <div className={`lg:col-span-5 lg:sticky lg:top-20 h-[520px] sm:h-[550px] rounded-2xl overflow-hidden border shadow-md relative flex flex-col p-1 bg-stone-900 ${mobileView === 'list' ? 'hidden lg:flex' : 'flex'}`} style={{ borderColor: 'var(--border-subtle)' }}>
            
            {/* Mobile Touch Gesture Header Bar */}
            <div className="lg:hidden bg-stone-900 text-stone-200 px-3 py-2 text-xs flex items-center justify-between z-20 border-b border-stone-800">
              <span className="font-mono text-[11px] text-amber-400 font-bold">📍 Interactive Map Mode</span>
              <button 
                type="button" 
                onClick={() => setMobileView('list')}
                className="text-[10px] font-label font-bold uppercase bg-[#B8422E] text-white px-2.5 py-1 rounded-sm shadow-xs"
              >
                Back to List
              </button>
            </div>

            <div className="relative w-full flex-1 rounded-xl overflow-hidden">
              <GoogleAddisMap posts={filteredSpots} activePost={activeSpot} onSelectPost={setActiveSpot} />
            </div>
          </div>

        </div>

      </main>

      {/* MOBILE FLOATING TOGGLE BUTTON */}
      <div className="lg:hidden fixed bottom-16 left-0 right-0 z-40 flex justify-center pointer-events-none pb-2">
        <button
          type="button"
          onClick={() => setMobileView(mobileView === 'list' ? 'map' : 'list')}
          className="pointer-events-auto button-primary px-5 py-2.5 rounded-full text-white font-label text-xs uppercase tracking-wider shadow-lg flex items-center gap-2"
        >
          {mobileView === 'list' ? (
            <>
              <MapIcon className="w-4 h-4 text-white" />
              <span>Map View</span>
            </>
          ) : (
            <>
              <ListIcon className="w-4 h-4 text-white" />
              <span>List View</span>
            </>
          )}
        </button>
      </div>

      <Footer />
      <MobileBottomNav />

      {modalPost && (
        <PostDetailModal
          post={modalPost}
          onClose={() => setModalPost(null)}
        />
      )}
    </div>
  );
}

export default function ReviewsMapPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#1A1C1E] text-white p-8">Loading Food Map & Reviews...</div>}>
      <ReviewsMapContent />
    </Suspense>
  );
}
