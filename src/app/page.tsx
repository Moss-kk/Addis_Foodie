'use client';

import { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Search, 
  Handshake, 
  Flame, 
  MapPin, 
  Building2, 
  ShieldCheck, 
  Star, 
  Utensils, 
  Coffee, 
  Leaf, 
  ArrowUpRight, 
  Tag, 
  X 
} from 'lucide-react';
import Header from '../components/Header';
import EventBanner from '../components/EventBanner';
import FeaturedCarousel from '../components/FeaturedCarousel';
import FilterBar from '../components/FilterBar';
import ReviewCard from '../components/ReviewCard';
import PostDetailModal from '../components/PostDetailModal';
import AiCravingFinder from '../components/AiCravingFinder';
import Footer from '../components/Footer';
import MobileBottomNav from '../components/layout/MobileBottomNav';
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

  useEffect(() => {
    setVisibleCount(9);
  }, [searchQuery, selectedLocation, selectedCategory, selectedPriceRange, selectedSort]);

  const featuredPosts = useMemo(() => mockPosts.slice(0, 4), []);

  const filteredPosts = useMemo(() => {
    return mockPosts
      .filter((post) => {
        if (selectedLocation && post.neighborhood !== selectedLocation) return false;
        if (selectedCategory && post.category !== selectedCategory) return false;
        if (selectedPriceRange) {
          if (selectedPriceRange === 'under-300' && post.price >= 300) return false;
          if (selectedPriceRange === '300-700' && (post.price < 300 || post.price > 700)) return false;
          if (selectedPriceRange === '700-plus' && post.price <= 700) return false;
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
        if (selectedSort === 'price-asc') return a.price - b.price;
        if (selectedSort === 'price-desc') return b.price - a.price;
        return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
      });
  }, [searchQuery, selectedLocation, selectedCategory, selectedPriceRange, selectedSort]);

  const visiblePosts = useMemo(() => filteredPosts.slice(0, visibleCount), [filteredPosts, visibleCount]);

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
    <div className="flex flex-col min-h-screen bg-[#FAFAFA] text-[#111827] selection:bg-[#A81D1D]/10 selection:text-[#A81D1D] pb-16 sm:pb-0 max-w-full overflow-x-hidden">
      {/* HEADER NAVIGATION WITH TOP SEARCH */}
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      {/* SECTION 1: IMMERSIVE STITCH HERO WITH CINEMATIC HABESHA DINNER TABLE */}
      <section className="w-full relative min-h-[560px] sm:min-h-[660px] flex items-center py-12 sm:py-24 text-white overflow-hidden border-b border-zinc-800 bg-[#111827]">
        
        {/* Stitch Cinematic Overhead Habesha Dinner Table Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1541518763669-27fef04b14e8?auto=format&fit=crop&w=2000&q=90"
            alt="Cinematic Overhead Habesha Feast Dinner Table"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-[0.75] contrast-[1.1] scale-105 transition-all duration-1000"
          />
          {/* Stitch Gradient Blending Overlay: From Deep Charcoal to Translucent */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#111827]/95 via-[#111827]/80 to-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-black/40" />
        </div>

        <div className="site-container relative z-10 flex flex-col gap-6">
          
          {/* Main Hero Header Content */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            
            <div className="flex flex-col gap-4 max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 w-fit text-[11px] font-mono font-bold uppercase tracking-widest text-[#F59E0B] backdrop-blur-md shadow-lg"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t('tagline')}</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-syne font-black text-3xl sm:text-5xl lg:text-7xl tracking-tight leading-[1.1] text-white"
              >
                Discover Addis Ababa <br className="hidden sm:inline" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F59E0B] via-amber-300 to-[#FF3B30]">
                  One Bite at a Time
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-zinc-200 font-medium text-xs sm:text-lg leading-relaxed max-w-2xl"
              >
                {t('heroSubtext')}
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap items-center gap-3 pt-2"
              >
                <button
                  onClick={scrollToGrid}
                  className="touch-target bg-[#A81D1D] hover:bg-[#8B1717] text-white font-bold text-xs sm:text-sm py-3.5 px-7 rounded-xl shadow-xl transition-all cursor-pointer hover:scale-102 flex items-center gap-2 focus-ring"
                >
                  <Search className="w-4 h-4" />
                  <span>{t('exploreReviews')}</span>
                </button>

                <Link
                  href="/collaborate"
                  className="touch-target bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm py-3.5 px-7 rounded-xl border border-white/20 transition-all cursor-pointer hover:scale-102 flex items-center gap-2 focus-ring backdrop-blur-md"
                >
                  <Handshake className="w-4 h-4 text-[#F59E0B]" />
                  <span>{t('workWithAddisFoodies')}</span>
                </Link>
              </motion.div>
            </div>

            {/* 2 Key Floating Highlight Cards (Decluttered from 4 down to 2) */}
            <div className="hidden lg:flex flex-col gap-4 flex-shrink-0 w-72">
              <div className="bg-black/60 backdrop-blur-md p-4 rounded-2xl border border-white/15 flex items-center gap-3.5 shadow-xl hover:border-white/30 transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#A81D1D]/20 border border-[#A81D1D]/40 flex items-center justify-center flex-shrink-0">
                  <Utensils className="w-5 h-5 text-[#F59E0B]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-syne font-bold text-xs text-white">Special Kitfo Platter</span>
                  <span className="text-[11px] font-mono text-[#F59E0B] font-bold">850 Br • Bole</span>
                </div>
              </div>

              <div className="bg-black/60 backdrop-blur-md p-4 rounded-2xl border border-white/15 flex items-center gap-3.5 shadow-xl hover:border-white/30 transition-all">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center flex-shrink-0">
                  <Coffee className="w-5 h-5 text-[#F59E0B]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-syne font-bold text-xs text-white">Double Macchiato</span>
                  <span className="text-[11px] font-mono text-[#F59E0B] font-bold">150 Br • Sarbet</span>
                </div>
              </div>
            </div>

          </div>

          {/* Prominent Search Bar */}
          <div className="relative w-full max-w-3xl shadow-2xl rounded-2xl overflow-hidden border border-white/20 bg-white">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-zinc-400" />
            </div>

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('searchPlaceholder')}
              className="block w-full pl-12 pr-12 py-4 border-0 bg-transparent text-zinc-950 placeholder-zinc-400 text-xs sm:text-base font-semibold focus:outline-none"
            />

            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-4 flex items-center touch-target text-zinc-400 hover:text-zinc-700 focus-ring"
                aria-label="Clear Search"
              >
                <X className="h-5 w-5 text-zinc-500" />
              </button>
            )}
          </div>

          {/* Trending Craving Chips */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth pb-1">
            <span className="text-xs font-mono font-bold uppercase text-zinc-400 tracking-wider flex-shrink-0">{t('trending')}:</span>
            {quickTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSearchQuery(tag)}
                className="touch-target px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/10 hover:bg-white text-white hover:text-zinc-950 border border-white/15 transition-all cursor-pointer flex-shrink-0 focus-ring"
              >
                #{tag}
              </button>
            ))}
          </div>

          {/* Micro-Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400 border-t border-white/10 pt-4">
            <div className="flex items-center gap-1.5">
              <Flame className="w-4 h-4 text-[#F59E0B]" />
              <span>{t('monthlyFoodies')}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#A81D1D]" />
              <span>{t('curatedSpots')}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-sky-400" />
              <span>{t('neighborhoodHubs')}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#10B981]" />
              <span>{t('authorVerified')}</span>
            </div>
          </div>

        </div>
      </section>


      {/* MAIN SITE CONTENT CONTAINER */}
      <main className="site-container py-10 flex flex-col gap-14">
        
        {/* Real-time Festival Banner Alert */}
        <EventBanner />

        {/* SECTION 2: FEATURED THIS WEEK */}
        <section className="flex flex-col gap-6">
          <div className="flex items-center justify-between border-b border-zinc-200 pb-4">
            <h2 className="font-syne font-black text-xl sm:text-3xl text-[#111827] flex items-center gap-2">
              <Star className="w-6 h-6 text-[#F59E0B]" />
              <span>{t('featuredThisWeek')}</span>
            </h2>
            <span className="text-[10px] sm:text-xs font-extrabold text-[#F59E0B] bg-[#F59E0B]/10 px-3 py-1 rounded-full border border-[#F59E0B]/20 uppercase tracking-wider">
              {t('editorialSpotlights')}
            </span>
          </div>

          <FeaturedCarousel
            posts={featuredPosts}
            onSelectPost={(post) => setActivePost(post)}
          />
        </section>

        {/* SECTION 3: USEFUL AI CRAVING FINDER */}
        <AiCravingFinder onSelectPrompt={handleAiPrompt} />

        {/* SECTION 4: INTERACTIVE REVIEWS & PRICE ARCHIVE */}
        <section id="archive-section" className="flex flex-col gap-8 pt-2">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Tag className="w-6 h-6 text-[#A81D1D]" />
              <h2 className="font-syne font-black text-2xl sm:text-4xl text-[#111827]">
                {t('searchFilterArchive')}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-zinc-600 font-medium max-w-2xl">
              {t('archiveSubtext')}
            </p>
          </div>


          {/* Filter Bar Controls */}
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

          {/* Reviews Grid */}
          {visiblePosts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {visiblePosts.map((post) => (
                <ReviewCard
                  key={post.id}
                  post={post}
                  onClick={() => setActivePost(post)}
                />
              ))}
            </div>
          ) : (
            <div className="bg-white p-12 text-center rounded-3xl border border-zinc-200 shadow-sm flex flex-col items-center justify-center gap-4 my-6">
              <span className="text-5xl">🔍</span>
              <h3 className="font-syne font-black text-xl text-[#111827]">No Matching Reviews Found</h3>
              <p className="text-xs text-zinc-500 max-w-md font-medium">
                We couldn't find any reviews matching your search filters. Try resetting your search parameters.
              </p>
              <button
                onClick={handleClearFilters}
                className="touch-target px-6 py-3 rounded-xl bg-[#A81D1D] text-white text-xs font-black uppercase tracking-wider transition-all shadow-md cursor-pointer hover:bg-[#8B1717]"
              >
                Reset All Filters
              </button>
            </div>
          )}

          {/* Load More Button */}
          {visiblePosts.length < filteredPosts.length && (
            <div className="flex justify-center pt-6">
              <button
                onClick={handleLoadMore}
                disabled={isLoadingMore}
                className="touch-target px-8 py-4 rounded-xl bg-[#111827] hover:bg-[#A81D1D] text-white border border-zinc-800 text-xs font-mono font-black uppercase tracking-widest transition-all shadow-lg hover:scale-102 cursor-pointer focus-ring"
              >
                {isLoadingMore ? 'Loading More Food Spots...' : 'Load More Reviews ⚡'}
              </button>
            </div>
          )}
        </section>

        {/* SECTION 7: RESTAURANT COLLABORATION CTA */}
        <div className="bg-[#111827] text-white rounded-3xl p-8 sm:p-12 border border-zinc-800 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-3 text-center md:text-left">
            <span className="text-[#F59E0B] font-mono font-black text-xs uppercase tracking-widest">
              📢 Commercial Collaboration Engine
            </span>
            <h3 className="font-syne font-black text-2xl sm:text-4xl text-white">
              Want Your Restaurant Featured on Addis Foodies?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 max-w-xl font-medium">
              Reach 150,000+ local food lovers every month across Instagram, Telegram, and Web. Request video reviews, menu showcases, or event coverage.
            </p>
          </div>

          <Link
            href="/collaborate"
            className="touch-target bg-[#F59E0B] hover:bg-amber-400 text-[#111827] font-black text-xs sm:text-sm py-4 px-8 rounded-full transition-all shadow-lg hover:scale-105 flex-shrink-0 cursor-pointer focus-ring"
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

      {/* MULTI-COLUMN BRAND FOOTER */}
      <Footer />

      {/* MOBILE STICKY BOTTOM NAVIGATION BAR */}
      <MobileBottomNav />
    </div>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <HomeContent />
    </LanguageProvider>
  );
}

