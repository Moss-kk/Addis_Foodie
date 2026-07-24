'use client';

import { useState, useMemo } from 'react';
import Header from '../components/Header';
import FilterBar from '../components/FilterBar';
import ReviewCard from '../components/ReviewCard';
import PostDetailModal from '../components/PostDetailModal';
import { mockPosts } from '../data/mockPosts';
import { FoodPost } from '../types/post';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [activePost, setActivePost] = useState<FoodPost | null>(null);

  // Filter and sort posts (newest first)
  const filteredPosts = useMemo(() => {
    return mockPosts
      .filter((post) => {
        // Location filter
        if (selectedLocation && post.location !== selectedLocation) {
          return false;
        }

        // Category filter
        if (selectedCategory && post.category !== selectedCategory) {
          return false;
        }

        // Search query filter
        if (searchQuery.trim() !== '') {
          const query = searchQuery.toLowerCase().trim();
          const matchRestaurant = post.restaurantName.toLowerCase().includes(query);
          const matchLocation = post.location.toLowerCase().includes(query);
          const matchCategory = post.category.toLowerCase().includes(query);
          const matchCaption = post.caption.toLowerCase().includes(query);

          if (!matchRestaurant && !matchLocation && !matchCategory && !matchCaption) {
            return false;
          }
        }

        return true;
      })
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
  }, [searchQuery, selectedLocation, selectedCategory]);

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedLocation(null);
    setSelectedCategory(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-brand-bg text-brand-dark selection:bg-brand-primary/10 selection:text-brand-primary">
      {/* Sticky Glass Header */}
      <Header />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8 flex flex-col gap-6">
        
        {/* Compact Hero Banner */}
        <div className="bg-brand-primary text-white py-6 px-6 rounded-3xl flex flex-col gap-1 shadow-md relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-500" />
          <h2 className="font-display font-black text-lg sm:text-xl lg:text-2xl tracking-tight flex items-center gap-1.5">
            Discovering Foods in Addis 🇪🇹
          </h2>
          <p className="text-white/85 font-semibold text-[11px] sm:text-xs max-w-xl leading-relaxed">
            Latest reviews & food spots aggregated live from Telegram & Instagram. Click any card to view detailed reviews inside the app.
          </p>
        </div>

        {/* Interactive Search Bar */}
        <div className="relative w-full max-w-2xl">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-4 sm:h-5 w-4 sm:w-5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by restaurant, category, area, or keywords..."
            className="block w-full pl-9 pr-10 py-2.5 sm:py-3 border border-zinc-200 rounded-2xl bg-white text-zinc-800 placeholder-zinc-400 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all duration-200 shadow-2xs"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-zinc-400 hover:text-zinc-600 transition-colors"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Sticky Filter Bar */}
        <FilterBar
          selectedLocation={selectedLocation}
          selectedCategory={selectedCategory}
          onLocationChange={setSelectedLocation}
          onCategoryChange={setSelectedCategory}
        />

        {/* Status Count / Active Filters Info */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs sm:text-sm text-zinc-500 font-semibold border-b border-zinc-200/50 pb-3">
          <div>
            {filteredPosts.length === mockPosts.length ? (
              <span>Showing all {mockPosts.length} reviews</span>
            ) : (
              <span>
                Found {filteredPosts.length} {filteredPosts.length === 1 ? 'review' : 'reviews'}{' '}
                {(selectedLocation || selectedCategory || searchQuery) && 'matching filters'}
              </span>
            )}
          </div>
          {(selectedLocation || selectedCategory || searchQuery) && (
            <button
              onClick={handleClearFilters}
              className="text-brand-primary hover:underline self-start sm:self-auto cursor-pointer"
            >
              Clear filters
            </button>
          )}
        </div>

        {/* Review Cards Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredPosts.map((post) => (
              <ReviewCard
                key={post.id}
                post={post}
                onClick={() => setActivePost(post)}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="flex flex-col items-center justify-center text-center py-16 sm:py-24 px-4 bg-white rounded-3xl border border-zinc-200/50 shadow-2xs gap-4 max-w-lg mx-auto w-full mt-4">
            <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-brand-primary">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-display font-extrabold text-base sm:text-lg text-brand-dark">No Food Reviews Found</h3>
              <p className="text-xs sm:text-sm text-zinc-500 max-w-xs leading-relaxed">
                We couldn't find any reviews matching "{searchQuery || selectedLocation || selectedCategory}". Try checking your spelling or selecting another category.
              </p>
            </div>
            <button
              onClick={handleClearFilters}
              className="bg-brand-dark hover:bg-brand-primary text-white text-xs font-bold py-2.5 px-6 rounded-xl transition-all duration-200 shadow-xs cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </main>

      {/* In-App Slide-Over / Centered Detail Modal */}
      {activePost && (
        <PostDetailModal
          post={activePost}
          onClose={() => setActivePost(null)}
        />
      )}

      {/* Footer */}
      <footer className="border-t border-zinc-200/50 bg-white/50 py-6 text-center mt-12">
        <p className="text-[10px] sm:text-xs text-zinc-400 font-semibold tracking-wide uppercase font-sans">
          Addis Foodies © 2026 • Discovering Foods in Addis
        </p>
      </footer>
    </div>
  );
}
