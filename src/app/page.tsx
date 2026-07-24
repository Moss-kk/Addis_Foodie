'use client';

import { useState, useMemo, useEffect } from 'react';
import Header from '../components/Header';
import EventBanner from '../components/EventBanner';
import FeaturedCarousel from '../components/FeaturedCarousel';
import FilterBar from '../components/FilterBar';
import ReviewCard from '../components/ReviewCard';
import PostDetailModal from '../components/PostDetailModal';
import { mockPosts } from '../data/mockPosts';
import { FoodPost } from '../types/post';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState<string | null>(null);
  const [selectedSort, setSelectedSort] = useState<string>('newest');
  const [visibleCount, setVisibleCount] = useState<number>(9);
  const [activePost, setActivePost] = useState<FoodPost | null>(null);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // Quick tags for instant hero search
  const quickTags = ['Bole', 'Burgers', 'Doro Wot', 'Shiro Tegabino', 'Fasting', 'Macchiato'];

  // Reset pagination when filters, search, or sort change
  useEffect(() => {
    setVisibleCount(9);
  }, [searchQuery, selectedLocation, selectedCategory, selectedPriceRange, selectedSort]);

  // Filter and sort posts
  const filteredPosts = useMemo(() => {
    return mockPosts
      .filter((post) => {
        // Location filter (matches neighborhood property)
        if (selectedLocation && post.neighborhood !== selectedLocation) {
          return false;
        }

        // Category filter
        if (selectedCategory && post.category !== selectedCategory) {
          return false;
        }

        // Price Range filter
        if (selectedPriceRange) {
          if (selectedPriceRange === 'under-300' && post.price >= 300) {
            return false;
          }
          if (selectedPriceRange === '300-700' && (post.price < 300 || post.price > 700)) {
            return false;
          }
          if (selectedPriceRange === '700-plus' && post.price <= 700) {
            return false;
          }
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
      .sort((a, b) => {
        if (selectedSort === 'price-asc') {
          return a.price - b.price;
        }
        if (selectedSort === 'price-desc') {
          return b.price - a.price;
        }
        // Default: newest first
        return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
      });
  }, [searchQuery, selectedLocation, selectedCategory, selectedPriceRange, selectedSort]);

  const visiblePosts = useMemo(() => {
    return filteredPosts.slice(0, visibleCount);
  }, [filteredPosts, visibleCount]);

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedLocation(null);
    setSelectedCategory(null);
    setSelectedPriceRange(null);
    setSelectedSort('newest');
  };

  const handleLoadMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 9);
      setIsLoadingMore(false);
    }, 250);
  };

  return (
    <div className="flex flex-col min-h-screen bg-brand-bg text-brand-dark selection:bg-brand-primary/10 selection:text-brand-primary">
      {/* Sticky Glass Header */}
      <Header />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8 flex flex-col gap-8">
        
        {/* Real-time Festival & Event Banner */}
        <EventBanner />

        {/* High-Impact Animated Hero Section */}
        <div className="bg-gradient-to-r from-[#111827] via-[#8B1717] to-[#A81D1D] text-white py-12 px-8 sm:px-14 rounded-3xl flex flex-col gap-7 shadow-2xl relative overflow-hidden group">
          {/* Subtle glowing lights & vector grid */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl transform group-hover:scale-110 transition-transform duration-700 pointer-events-none" />

          {/* Hero Headline & Subtitle */}
          <div className="flex flex-col gap-3 relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 w-fit text-[11px] font-black uppercase tracking-widest text-amber-400 backdrop-blur-md">
              ✨ Addis Ababa's Culinary Pulse
            </div>
            <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
              Discover the Best Food in Addis Ababa
            </h1>
            <p className="text-white/85 font-semibold text-xs sm:text-base leading-relaxed">
              Auto-updated reviews straight from our official Instagram & Telegram channels — 0 login, 100% foodie culture.
            </p>
          </div>

          {/* Prominent Search Bar */}
          <div className="relative w-full max-w-2xl z-10 shadow-xl rounded-2xl overflow-hidden border border-white/20">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by restaurant, area (Bole, Kazanchis...), dish, or keywords..."
              className="block w-full pl-12 pr-10 py-3.5 sm:py-4 border-0 bg-white text-zinc-950 placeholder-zinc-400 text-xs sm:text-sm font-semibold focus:outline-hidden"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-zinc-400 hover:text-zinc-600 transition-colors"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Quick Filter Tags Row */}
          <div className="flex flex-wrap items-center gap-2 z-10">
            <span className="text-[11px] font-black uppercase text-white/70 tracking-wider mr-1">Trending:</span>
            {quickTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSearchQuery(tag)}
                className="px-3 py-1 rounded-full text-xs font-bold bg-white/10 hover:bg-amber-500 hover:text-brand-dark text-white border border-white/15 transition-all duration-200 cursor-pointer"
              >
                #{tag}
              </button>
            ))}
          </div>

          {/* Micro-Stats Row */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[10px] sm:text-xs font-black uppercase tracking-widest text-white/80 border-t border-white/10 pt-4 z-10">
            <div className="flex items-center gap-1.5">
              <span>🔥</span>
              <span>950+ Reviews Ingested</span>
            </div>
            <span className="hidden sm:inline text-white/20">|</span>
            <div className="flex items-center gap-1.5">
              <span>📍</span>
              <span>320+ Spots Curated</span>
            </div>
            <span className="hidden sm:inline text-white/20">|</span>
            <div className="flex items-center gap-1.5">
              <span>🏢</span>
              <span>4 Major Neighborhoods</span>
            </div>
            <span className="hidden sm:inline text-white/20">|</span>
            <div className="flex items-center gap-1.5">
              <span>⚡</span>
              <span>100% Zero-Login</span>
            </div>
          </div>
        </div>

        {/* Weekly Spotlights Carousel */}
        <FeaturedCarousel
          posts={mockPosts}
          onSelectPost={(post) => setActivePost(post)}
        />

        {/* Sticky Filter Bar */}
        <FilterBar
          selectedLocation={selectedLocation}
          selectedCategory={selectedCategory}
          selectedPriceRange={selectedPriceRange}
          selectedSort={selectedSort}
          onLocationChange={setSelectedLocation}
          onCategoryChange={setSelectedCategory}
          onPriceRangeChange={setSelectedPriceRange}
          onSortChange={setSelectedSort}
        />

        {/* Status Count / Active Filters Info */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs sm:text-sm text-zinc-500 font-semibold border-b border-zinc-200/50 pb-3">
          <div>
            {filteredPosts.length === mockPosts.length ? (
              <span>Showing {visiblePosts.length} of {mockPosts.length} reviews</span>
            ) : (
              <span>
                Found {filteredPosts.length} {filteredPosts.length === 1 ? 'review' : 'reviews'}{' '}
                {(selectedLocation || selectedCategory || selectedPriceRange || searchQuery) && 'matching filters'}
                {filteredPosts.length > visiblePosts.length && ` (showing ${visiblePosts.length})`}
              </span>
            )}
          </div>
          {(selectedLocation || selectedCategory || selectedPriceRange || searchQuery || selectedSort !== 'newest') && (
            <button
              onClick={handleClearFilters}
              className="text-brand-primary hover:underline self-start sm:self-auto cursor-pointer font-bold"
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* Review Cards Grid */}
        {visiblePosts.length > 0 ? (
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {visiblePosts.map((post) => (
                <ReviewCard
                  key={post.id}
                  post={post}
                  onClick={() => setActivePost(post)}
                />
              ))}
            </div>

            {/* Load More Button */}
            {visibleCount < filteredPosts.length && (
              <div className="flex justify-center pt-4 pb-2">
                <button
                  onClick={handleLoadMore}
                  disabled={isLoadingMore}
                  className="w-full sm:w-auto bg-brand-dark hover:bg-brand-primary text-white font-bold rounded-xl py-3 px-8 transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer text-sm flex items-center justify-center gap-2 group disabled:opacity-75"
                >
                  {isLoadingMore ? (
                    <span className="inline-flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Appending Next Batch...
                    </span>
                  ) : (
                    <>
                      <span>Load More Reviews</span>
                      <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Empty State */
          <div className="flex flex-col items-center justify-center text-center py-16 sm:py-24 px-4 bg-white rounded-3xl border border-zinc-200/50 shadow-2xs gap-4 max-w-lg mx-auto w-full mt-4">
            <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center text-brand-primary">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-display font-extrabold text-base sm:text-lg text-brand-dark">No Food Reviews Found</h3>
              <p className="text-xs sm:text-sm text-zinc-500 max-w-xs leading-relaxed font-medium">
                We couldn't find any reviews matching your criteria. Try adjusting your search term or selecting another category.
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

      {/* Ultra-Sleek Modern Footer */}
      <footer className="border-t border-zinc-200/60 bg-white py-12 px-6 mt-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex flex-col gap-1">
            <div className="flex items-baseline justify-center md:justify-start gap-1">
              <span className="font-display font-black text-lg text-brand-dark">Addis</span>
              <span className="font-display font-black text-lg text-brand-primary">Foodies</span>
            </div>
            <p className="text-xs font-medium text-zinc-500 max-w-sm">
              Addis Ababa's premiere visual food discovery engine — zero login, live social sync, real prices.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-xs font-bold text-zinc-600">
            <a href="https://t.me/addisfoodies" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors">
              Telegram Channel
            </a>
            <a href="https://instagram.com/addisfoodies" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors">
              Instagram Feed
            </a>
            <a href="tel:0966550000" className="hover:text-brand-primary transition-colors font-mono">
              Hotline: 0966-55-00-00
            </a>
          </div>

          <p className="text-[11px] text-zinc-400 font-semibold uppercase tracking-wider font-sans">
            Addis Foodies © 2026 • Discovering Foods in Addis
          </p>
        </div>
      </footer>
    </div>
  );
}
