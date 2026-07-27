'use client';

import { useState, useMemo } from 'react';
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
  ArrowRight,
  X 
} from 'lucide-react';
import Header from '../components/Header';
import EventBanner from '../components/EventBanner';
import VideoReelsCarousel from '../components/VideoReelsCarousel';
import ReviewCard from '../components/ReviewCard';
import PostDetailModal from '../components/PostDetailModal';
import AiCravingFinder from '../components/AiCravingFinder';
import Footer from '../components/Footer';
import MobileBottomNav from '../components/layout/MobileBottomNav';
import { useLanguage } from '../context/LanguageContext';
import { mockPosts } from '../data/mockPosts';
import { FoodPost } from '../types/post';

export default function HomePage() {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [activePost, setActivePost] = useState<FoodPost | null>(null);

  // Quick tags for instant hero search
  const quickTags = ['Bole', 'Burgers', 'Doro Wot', 'Shiro Tegabino', 'Fasting', 'Macchiato'];

  // Show top 4 featured spots on homepage as per v4.0 SRS rules
  const topFourSpots = useMemo(() => mockPosts.slice(0, 4), []);

  const handleAiPrompt = (query: string) => {
    if (query) setSearchQuery(query);
    const el = document.getElementById('featured-spots');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToGrid = () => {
    const el = document.getElementById('featured-spots');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5] text-zinc-900 transition-colors duration-300 selection:bg-[#E53935]/20 selection:text-[#E53935] pb-16 sm:pb-0 max-w-full overflow-x-hidden">
      {/* HEADER NAVIGATION WITH LOGO & PRIMARY CTA */}
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      {/* SECTION 1: IMMERSIVE LIGHT RESPONSIVE HERO WITH HABESHA CULINARY ART */}
      <section className="w-full relative min-h-[500px] sm:min-h-[580px] flex items-center py-10 sm:py-16 overflow-hidden border-b border-stone-200/80 bg-gradient-to-br from-red-50/80 via-[#FAF8F5] to-amber-50/60 transition-colors duration-300">
        
        {/* Subtle Background Glows */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#E53935]/10 dark:bg-[#E53935]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-amber-500/10 dark:bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="site-container relative z-10 flex flex-col gap-6">
          
          {/* Main Hero Header Content */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            
            <div className="flex flex-col gap-4 max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-red-500/20 w-fit text-[11px] font-mono font-bold uppercase tracking-widest text-[#E53935] backdrop-blur-md shadow-sm"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t('tagline')}</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-syne font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.15] text-zinc-950"
              >
                Discover Addis Ababa <br className="hidden sm:inline" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#E53935] via-amber-500 to-[#E53935]">
                  One Bite at a Time
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-zinc-600 font-medium text-xs sm:text-base leading-relaxed max-w-2xl"
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
                  className="touch-target bg-[#E53935] hover:bg-[#B71C1C] text-white font-bold text-xs sm:text-sm py-3.5 px-7 rounded-xl shadow-md transition-all cursor-pointer hover:scale-102 flex items-center gap-2 focus-ring"
                >
                  <Search className="w-4 h-4" />
                  <span>{t('exploreReviews')}</span>
                </button>

                <Link
                  href="/collaborate"
                  className="touch-target bg-white hover:bg-stone-100 text-zinc-900 font-semibold text-xs sm:text-sm py-3.5 px-7 rounded-xl border border-stone-200 shadow-sm transition-all cursor-pointer hover:scale-102 flex items-center gap-2 focus-ring backdrop-blur-md"
                >
                  <Handshake className="w-4 h-4 text-[#E53935]" />
                  <span>{t('workWithAddisFoodies')}</span>
                </Link>
              </motion.div>
            </div>

            {/* 2 Key Floating Highlight Cards */}
            <div className="hidden lg:flex flex-col gap-4 flex-shrink-0 w-72">
              <div className="bg-white p-4 rounded-2xl border border-stone-200/80 flex items-center gap-3.5 shadow-sm hover:border-[#E53935]/40 transition-all">
                <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center flex-shrink-0">
                  <Utensils className="w-5 h-5 text-[#E53935]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-syne font-bold text-xs text-zinc-900">Special Kitfo Platter</span>
                  <span className="text-[11px] font-mono text-[#E53935] font-bold">850 Br • Bole</span>
                </div>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-stone-200/80 flex items-center gap-3.5 shadow-sm hover:border-amber-500/40 transition-all">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center flex-shrink-0">
                  <Coffee className="w-5 h-5 text-[#FF8C00]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-syne font-bold text-xs text-zinc-900">Double Macchiato</span>
                  <span className="text-[11px] font-mono text-[#E53935] font-bold">150 Br • Sarbet</span>
                </div>
              </div>
            </div>

          </div>

          {/* Prominent Search Bar */}
          <div className="relative w-full max-w-3xl shadow-md rounded-2xl overflow-hidden border border-stone-200 bg-white">
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
            <span className="text-xs font-mono font-bold uppercase text-zinc-500 tracking-wider flex-shrink-0">{t('trending')}:</span>
            {quickTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSearchQuery(tag)}
                className="touch-target px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white hover:bg-[#E53935] hover:text-white text-zinc-800 border border-stone-200 shadow-xs transition-all cursor-pointer flex-shrink-0 focus-ring"
              >
                #{tag}
              </button>
            ))}
          </div>

          {/* Micro-Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-wider text-zinc-600 border-t border-stone-200 pt-4">
            <div className="flex items-center gap-1.5">
              <Flame className="w-4 h-4 text-[#FF8C00]" />
              <span>{t('monthlyFoodies')}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#E53935]" />
              <span>{t('curatedSpots')}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-sky-500" />
              <span>{t('neighborhoodHubs')}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#10B981]" />
              <span>{t('authorVerified')}</span>
            </div>
          </div>

        </div>
      </section>

      {/* MAIN HOMEPAGE STREAMLINED FEED */}
      <main className="site-container py-10 flex flex-col gap-12">
        
        {/* Real-time Festival Banner Alert */}
        <EventBanner />

        {/* SECTION 2: 9:16 SHORT-FORM VIDEO REELS FEED */}
        <VideoReelsCarousel />

        {/* SECTION 3: TOP 4 CURATED SPOTS THIS WEEK */}
        <section id="featured-spots" className="flex flex-col gap-6 pt-2">
          <div className="flex items-center justify-between border-b border-stone-200 pb-3">
            <div>
              <h2 className="font-syne font-black text-xl sm:text-3xl text-zinc-900 flex items-center gap-2">
                <Star className="w-6 h-6 text-[#FF8C00]" />
                <span>Top Curated Spots This Week</span>
              </h2>
              <p className="text-xs text-zinc-600 font-medium pt-1">
                Hand-picked culinary highlights across Addis Ababa
              </p>
            </div>

            <Link
              href="/reviews"
              className="touch-target px-4 py-2 rounded-xl bg-[#E53935] hover:bg-[#B71C1C] text-white text-xs font-extrabold transition-all shadow-md flex items-center gap-1.5"
            >
              <span>Explore All Reviews</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topFourSpots.map((post) => (
              <ReviewCard
                key={post.id}
                post={post}
                onClick={() => setActivePost(post)}
              />
            ))}
          </div>
        </section>

        {/* SECTION 4: INTERACTIVE PILL-BASED AI CRAVING FINDER */}
        <AiCravingFinder onSelectPrompt={handleAiPrompt} />

      </main>

      <Footer />
      <MobileBottomNav />

      {activePost && (
        <PostDetailModal
          post={activePost}
          onClose={() => setActivePost(null)}
        />
      )}
    </div>
  );
}
