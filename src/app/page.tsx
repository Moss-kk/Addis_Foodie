'use client';

import { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import EventBanner from '../components/EventBanner';
import FeaturedCarousel from '../components/FeaturedCarousel';
import FilterBar from '../components/FilterBar';
import ReviewCard from '../components/ReviewCard';
import PostDetailModal from '../components/PostDetailModal';
import AiCravingFinder from '../components/AiCravingFinder';
import VideoReelsSection from '../components/VideoReelsSection';
import AddisMap from '../components/AddisMap';
import Footer from '../components/Footer';
import { LanguageProvider, useLanguage } from '../context/LanguageContext';
import { mockPosts } from '../data/mockPosts';
import { FoodPost } from '../types/post';

function HomeContent() {
  const { t } = useLanguage();
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

  // Group 1: Featured This Week
  const featuredPosts = useMemo(() => {
    return mockPosts.slice(0, 4);
  }, []);

  // Group 2: Trending & Popular Reviews
  const trendingPosts = useMemo(() => {
    return mockPosts.slice(2, 5);
  }, []);

  // Group 3: Latest Ingested Reviews (Sorted newest-first)
  const latestPosts = useMemo(() => {
    return [...mockPosts]
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
      .slice(0, 3);
  }, []);

  // Group 4: Filtered & Sorted Archive Posts
  const filteredPosts = useMemo(() => {
    return mockPosts
      .filter((post) => {
        if (selectedLocation && post.neighborhood !== selectedLocation) {
          return false;
        }
        if (selectedCategory && post.category !== selectedCategory) {
          return false;
        }
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

  const handleAiPrompt = (query: string, cat?: string, loc?: string, price?: string) => {
    if (query) setSearchQuery(query);
    if (cat) setSelectedCategory(cat);
    if (loc) setSelectedLocation(loc);
    if (price) setSelectedPriceRange(price);

    const el = document.getElementById('archive-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToGrid = () => {
    const el = document.getElementById('archive-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen bg-brand-bg text-brand-dark selection:bg-brand-primary/10 selection:text-brand-primary">
      {/* SECTION 1: HEADER & NAVIGATION */}
      <Header />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8 flex flex-col gap-12">
        
        {/* Real-time Festival Banner */}
        <EventBanner />

        {/* SECTION 2: HERO SECTION (STITCH MCP CULINARY EXCELLENCE SPECIFICATION) */}
        <div className="bg-gradient-to-r from-[#111827] via-[#8B1717] to-[#A81D1D] text-white py-14 px-8 sm:px-14 rounded-3xl flex flex-col gap-8 shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />
          <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-[#F59E0B]/15 rounded-full blur-3xl transform group-hover:scale-110 transition-transform duration-700 pointer-events-none" />

          {/* Hero Content */}
          <div className="flex flex-col gap-4 relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 w-fit text-[11px] font-black uppercase tracking-widest text-[#F59E0B] backdrop-blur-md">
              ✨ {t('tagline')}
            </div>

            <h1 className="font-syne font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight text-white">
              {t('heroTitle')}
            </h1>

            <p className="text-white/90 font-semibold text-sm sm:text-lg leading-relaxed max-w-2xl">
              {t('heroSubtext')}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              <button
                onClick={scrollToGrid}
                className="bg-[#F59E0B] hover:bg-amber-400 text-[#111827] font-black text-xs sm:text-sm py-3.5 px-7 rounded-xl shadow-lg transition-all cursor-pointer hover:scale-102 flex items-center gap-2"
              >
                <span>🔍</span>
                <span>{t('exploreReviews')}</span>
              </button>
              <Link
                href="/collaborate"
                className="bg-white/15 hover:bg-white/25 text-white font-bold text-xs sm:text-sm py-3.5 px-7 rounded-xl border border-white/25 backdrop-blur-xs transition-all cursor-pointer hover:scale-102 flex items-center gap-2"
              >
                <span>🤝</span>
                <span>{t('workWithAddisFoodies')}</span>
              </Link>
            </div>
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
              placeholder={t('searchPlaceholder')}
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
            <span className="text-[11px] font-black uppercase text-white/70 tracking-wider mr-1">{t('trending')}:</span>
            {quickTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSearchQuery(tag)}
                className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/10 hover:bg-[#F59E0B] hover:text-[#111827] text-white border border-white/20 transition-all duration-200 cursor-pointer"
              >
                #{tag}
              </button>
            ))}
          </div>

          {/* Micro-Stats Row */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[10px] sm:text-xs font-mono font-black uppercase tracking-widest text-white/80 border-t border-white/15 pt-4 z-10">
            <div className="flex items-center gap-1.5">
              <span>🔥</span>
              <span>{t('monthlyFoodies')}</span>
            </div>
            <span className="hidden sm:inline text-white/20">|</span>
            <div className="flex items-center gap-1.5">
              <span>📍</span>
              <span>{t('curatedSpots')}</span>
            </div>
            <span className="hidden sm:inline text-white/20">|</span>
            <div className="flex items-center gap-1.5">
              <span>🏢</span>
              <span>{t('neighborhoodHubs')}</span>
            </div>
            <span className="hidden sm:inline text-white/20">|</span>
            <div className="flex items-center gap-1.5">
              <span>⚡</span>
              <span>{t('authorVerified')}</span>
            </div>
          </div>
        </div>

        {/* SECTION 3: FEATURED THIS WEEK */}
        <section className="flex flex-col gap-5">
          <div className="flex items-center justify-between border-b border-zinc-200/50 pb-3">
            <h2 className="font-syne font-black text-xl sm:text-2xl text-brand-dark flex items-center gap-2">
              <span>🌟</span>
              <span>{t('featuredThisWeek')}</span>
            </h2>
            <span className="text-xs font-bold text-brand-primary bg-red-50 px-3 py-1 rounded-full border border-red-100">
              {t('editorialSpotlights')}
            </span>
          </div>

          <FeaturedCarousel
            posts={featuredPosts}
            onSelectPost={(post) => setActivePost(post)}
          />
        </section>

        {/* SECTION 4: USEFUL AI CRAVING FINDER */}
        <AiCravingFinder onSelectPrompt={handleAiPrompt} />

        {/* SECTION 5: TIKTOK & INSTAGRAM VIDEO REELS SPOTLIGHT */}
        <VideoReelsSection posts={mockPosts} />

        {/* SECTION 5: LATEST REVIEWS */}
        <section className="flex flex-col gap-5 bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/60 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-100 pb-4">
            <div className="flex items-center gap-2.5">
              <span className="text-2xl">🕒</span>
              <div>
                <h2 className="font-syne font-black text-xl sm:text-2xl text-brand-dark">
                  {t('latestIngestedReviews')}
                </h2>
                <p className="text-xs text-zinc-500 font-medium">
                  {t('freshPostsSynced')}
                </p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-black uppercase tracking-wider border border-emerald-200 self-start sm:self-auto">
              {t('liveSyncActive')}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestPosts.map((post) => (
              <ReviewCard
                key={post.id}
                post={post}
                onClick={() => setActivePost(post)}
              />
            ))}
          </div>
        </section>

        {/* SECTION 6: INTERACTIVE ADDIS ABABA NEIGHBORHOOD MAP */}
        <AddisMap
          onSelectDistrict={(district) => {
            setSelectedLocation(district);
            scrollToGrid();
          }}
        />

        {/* SECTION 7: INTERACTIVE REVIEWS & PRICE ARCHIVE */}
        <section id="archive-section" className="flex flex-col gap-6 pt-2">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🏷️</span>
              <h2 className="font-display font-black text-xl sm:text-2xl text-brand-dark">
                Search & Filter Review Archive
              </h2>
            </div>
            <p className="text-xs text-zinc-500 font-medium">
              Filter by neighborhood, price ranges in ETB (Under 300 Br / 300–700 Br / 700+ Br), or category.
            </p>
          </div>

          {/* Interactive Filter Bar */}
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

          {/* Archive Grid Header */}
          <div className="flex items-center justify-between border-b border-zinc-200/50 pb-3">
            <span className="bg-brand-primary/10 text-brand-primary font-black text-xs px-3 py-1 rounded-full">
              Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'spot' : 'spots'}
            </span>

            {(selectedLocation || selectedCategory || selectedPriceRange || searchQuery) && (
              <button
                onClick={handleClearFilters}
                className="text-xs font-bold text-brand-primary hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>✕ Reset Filters</span>
              </button>
            )}
          </div>

          {/* Empty State */}
          {filteredPosts.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-zinc-200/60 shadow-xs flex flex-col items-center gap-4 my-4">
              <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center text-3xl">
                🔍
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-display font-extrabold text-lg text-brand-dark">No Food Discoveries Found</h3>
                <p className="text-xs sm:text-sm text-zinc-500 max-w-md font-medium">
                  We couldn't find any reviews matching your criteria. Try clearing your filters or searching another dish.
                </p>
              </div>
              <button
                onClick={handleClearFilters}
                className="mt-2 bg-brand-dark hover:bg-brand-primary text-white font-bold text-xs py-2.5 px-6 rounded-full transition-colors cursor-pointer"
              >
                Show All Reviews
              </button>
            </div>
          ) : (
            /* Paginated Review Grid */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {visiblePosts.map((post) => (
                <ReviewCard
                  key={post.id}
                  post={post}
                  onClick={() => setActivePost(post)}
                />
              ))}
            </div>
          )}

          {/* Load More Pagination Button */}
          {visibleCount < filteredPosts.length && (
            <div className="flex justify-center pt-4 pb-6">
              <button
                onClick={handleLoadMore}
                disabled={isLoadingMore}
                className="bg-brand-dark hover:bg-brand-primary text-white font-extrabold text-xs sm:text-sm py-3.5 px-10 rounded-2xl transition-all duration-200 shadow-md hover:shadow-lg hover:scale-102 flex items-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isLoadingMore ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Loading Discoveries...</span>
                  </>
                ) : (
                  <span>LOAD MORE REVIEWS ({filteredPosts.length - visibleCount} REMAINING)</span>
                )}
              </button>
            </div>
          )}
        </section>

        {/* SECTION 8: WHY TRUST ADDIS FOODIES (EDITORIAL PROCESS & IMPACT) */}
        <section className="bg-white p-8 sm:p-10 rounded-3xl border border-zinc-200/60 shadow-xs flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-black text-brand-primary uppercase tracking-widest">Our Editorial Standards</span>
            <h2 className="font-display font-extrabold text-2xl text-brand-dark">Why Trust Addis Foodies?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-medium text-zinc-600">
            <div className="bg-zinc-50 p-5 rounded-2xl border border-zinc-200/50 flex flex-col gap-2">
              <span className="text-xl">🏆</span>
              <h4 className="font-extrabold text-sm text-brand-dark">100% Curated & Author-Verified</h4>
              <p>Every review is written strictly by our editorial team. No user spam, no star manipulation.</p>
            </div>

            <div className="bg-zinc-50 p-5 rounded-2xl border border-zinc-200/50 flex flex-col gap-2">
              <span className="text-xl">💵</span>
              <h4 className="font-extrabold text-sm text-brand-dark">Itemized Pricing Transparency</h4>
              <p>We compile and verify dish pricing in ETB so local foodies have total clarity before visiting.</p>
            </div>

            <div className="bg-zinc-50 p-5 rounded-2xl border border-zinc-200/50 flex flex-col gap-2">
              <span className="text-xl">📱</span>
              <h4 className="font-extrabold text-sm text-brand-dark">Direct Social Flywheel</h4>
              <p>Deep links to our original Instagram posts and Telegram updates for authentic multi-channel proof.</p>
            </div>
          </div>
        </section>

        {/* SECTION 9: RESTAURANT COLLABORATION CTA */}
        <div className="bg-gradient-to-r from-brand-dark via-zinc-900 to-brand-primary text-white rounded-3xl p-8 sm:p-10 border border-zinc-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <span className="text-amber-400 font-extrabold text-xs uppercase tracking-widest">
              📢 Commercial Collaboration Engine
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl">
              Want Your Restaurant Featured on Addis Foodies?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 max-w-xl font-medium">
              We reach 150,000+ local food lovers every month across Instagram, Telegram, and Web. Request video reviews, menu showcases, or event coverage.
            </p>
          </div>

          <Link
            href="/collaborate"
            className="bg-amber-500 hover:bg-amber-400 text-brand-dark font-black text-xs sm:text-sm py-3.5 px-8 rounded-full transition-all shadow-md hover:scale-105 flex-shrink-0 cursor-pointer"
          >
            WORK WITH US ↗
          </Link>
        </div>

      </main>

      {/* Post Detail Modal */}
      {activePost && (
        <PostDetailModal
          post={activePost}
          onClose={() => setActivePost(null)}
        />
      )}

      {/* SECTION 10 & 11: MULTI-COLUMN BRAND FOOTER & NEWSLETTER */}
      <Footer />
    </div>
  );
}

export default function Home() {
  return <HomeContent />;
}
