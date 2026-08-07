'use client';

import React, { useState, useMemo, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { 
  Compass, 
  MapPin as MapPinIcon, 
  ExternalLink, 
  Tag,
  Filter
} from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MobileBottomNav from '../../components/layout/MobileBottomNav';
import PostDetailModal from '../../components/PostDetailModal';
import ReviewCard from '../../components/ReviewCard';
import GoogleAddisMap from '../../components/GoogleAddisMap';
import { CUISINE_CATEGORIES } from '../../lib/categories';
import { getAwardsUrl } from '../../lib/awardsLinks';
import { mockPosts } from '../../data/mockPosts';
import { FoodPost } from '../../types/post';

function ReviewsMapContent() {
  const searchParams = useSearchParams();
  const initialCategoryParam = searchParams.get('category') || 'all';

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategoryParam);
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [activeSpot, setActiveSpot] = useState<FoodPost>(mockPosts[0]);
  const [modalPost, setModalPost] = useState<FoodPost | null>(null);

  // Filter spots by category & price synchronously
  const filteredSpots = useMemo(() => {
    return mockPosts.filter((spot) => {
      // Category filter
      if (selectedCategory !== 'all') {
        const catObj = CUISINE_CATEGORIES.find(
          (c) => c.slug.toLowerCase() === selectedCategory.toLowerCase() || c.id.toLowerCase() === selectedCategory.toLowerCase()
        );
        if (catObj) {
          const matchLabel = spot.category.toLowerCase() === catObj.label.toLowerCase();
          const matchSlug = spot.category.toLowerCase().includes(catObj.slug.toLowerCase());
          if (!matchLabel && !matchSlug) return false;
        } else {
          if (spot.category.toLowerCase() !== selectedCategory.toLowerCase()) return false;
        }
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

  // Floating Category Filter Overlay bar rendered ON TOP OF the Google Map surface
  const floatingCategoryOverlay = (
    <div className="absolute top-3 left-3 right-3 z-30 flex items-center gap-2 overflow-x-auto p-2 rounded-2xl bg-black/60 backdrop-blur-md border border-zinc-800/80 shadow-2xl no-scrollbar pointer-events-auto">
      <button
        type="button"
        onClick={() => setSelectedCategory('all')}
        className={`px-3.5 py-1.5 rounded-xl text-xs font-label font-bold uppercase transition-all shrink-0 cursor-pointer border ${
          selectedCategory === 'all'
            ? 'bg-[#A81D1D] text-white border-[#A81D1D] shadow-md'
            : 'bg-black/60 text-stone-300 border-white/10 hover:border-[#A81D1D]'
        }`}
      >
        All Spots ⭐
      </button>

      {CUISINE_CATEGORIES.map((cat) => {
        const isSelected = selectedCategory.toLowerCase() === cat.slug.toLowerCase() || selectedCategory.toLowerCase() === cat.id.toLowerCase();
        return (
          <button
            key={cat.id}
            type="button"
            onClick={() => setSelectedCategory(cat.slug)}
            className={`px-3 py-1.5 rounded-xl text-xs font-label font-bold uppercase transition-all flex items-center gap-1.5 shrink-0 cursor-pointer border ${
              isSelected
                ? 'bg-[#A81D1D] text-white border-[#A81D1D] shadow-md'
                : 'bg-black/60 text-stone-300 border-white/10 hover:border-[#A81D1D]'
            }`}
          >
            <span>{cat.emoji}</span>
            <span>{cat.label}</span>
          </button>
        );
      })}
    </div>
  );

  return (
    <div
      className="flex flex-col min-h-screen transition-colors duration-300 pb-20 sm:pb-0 max-w-full overflow-x-hidden"
      style={{ backgroundColor: 'var(--bg-app)', color: 'var(--text-primary)' }}
    >
      <Header />

      {/* STICKY TOP GOOGLE MAP CONTAINER WITH FLOATING OVERLAY CHIPS */}
      <section className="sticky top-14 z-20 w-full h-[300px] sm:h-[420px] max-h-[50vh] border-b border-zinc-800 bg-[#120907] shadow-xl">
        <GoogleAddisMap
          posts={filteredSpots}
          activePost={activeSpot}
          onSelectPost={(spot) => setActiveSpot(spot)}
          overlayElement={floatingCategoryOverlay}
        />
      </section>

      {/* SCROLLABLE REVIEWS FEED UNDERNEATH THE STICKY MAP */}
      <main className="flex-1 site-container py-8 flex flex-col gap-6">
        
        {/* Controls & Price Band Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b pb-4 gap-4" style={{ borderColor: 'var(--border-subtle)' }}>
          <div>
            <h1 className="font-syne font-bold text-2xl sm:text-4xl text-[var(--text-primary)]">
              Food Inspections &amp; Reviews
            </h1>
            <p className="text-xs sm:text-sm font-body pt-1 text-[var(--text-secondary)]">
              Showing {filteredSpots.length} venue inspections matching your active map filters.
            </p>
          </div>

          {/* Price Band Filter Strip */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            <span className="text-xs font-label uppercase text-[var(--text-secondary)] font-bold shrink-0">ETB Price:</span>
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
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all shrink-0 cursor-pointer border ${
                  selectedPriceRange === p.id
                    ? 'bg-[#F59E0B] text-zinc-950 border-[#F59E0B]'
                    : 'bg-[var(--bg-surface)] text-[var(--text-primary)] border-[var(--border-subtle)] hover:border-[#F59E0B]'
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable Single-Column Grid of Review Cards */}
        {filteredSpots.length === 0 ? (
          <div className="p-10 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-center flex flex-col items-center gap-3">
            <Tag className="w-8 h-8 text-amber-500" />
            <h3 className="font-syne font-bold text-lg text-[var(--text-primary)]">
              No reviews found matching these filters
            </h3>
            <p className="text-xs text-[var(--text-secondary)]">
              Nominate a restaurant for inspection on Addis Foodie!
            </p>
            <Link
              href="/suggestions"
              className="mt-2 button-primary px-4 py-2 rounded-xl text-xs font-label uppercase text-white font-bold"
            >
              Nominate a Restaurant →
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSpots.map((spot) => (
              <div key={spot.id} className="flex flex-col gap-2">
                <ReviewCard
                  post={spot}
                  onClick={() => setModalPost(spot)}
                />

                {/* Netlify Awards Deep-Link Button */}
                <a
                  href={getAwardsUrl(spot.category)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between px-4 py-2 rounded-xl bg-zinc-900 text-stone-200 text-xs font-label font-bold uppercase tracking-wider border border-zinc-800 hover:border-[#F59E0B] hover:text-[#F59E0B] transition-all shadow-xs"
                >
                  <span className="flex items-center gap-1.5">
                    <span>Vote in Awards</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#F59E0B]" />
                </a>
              </div>
            ))}
          </div>
        )}

      </main>

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
    <Suspense fallback={<div className="min-h-screen bg-[#120907] text-white p-8">Loading Food Map &amp; Reviews...</div>}>
      <ReviewsMapContent />
    </Suspense>
  );
}
