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
    <div className="flex flex-col min-h-screen bg-[#FAFAFA] dark:bg-[#120907] text-zinc-900 dark:text-[#FFF8F6] transition-colors duration-300 selection:bg-[#E53935]/20 selection:text-[#E53935] pb-16 sm:pb-0 max-w-full overflow-x-hidden">
      {/* HEADER NAVIGATION WITH LOGO & PRIMARY CTA */}
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      {/* SECTION 1: IMMERSIVE FLAME HERO WITH CINEMATIC DINNER OVERLAY */}
      <section className="w-full relative min-h-[520px] sm:min-[#620px] flex items-center py-10 sm:py-20 text-white overflow-hidden border-b border-zinc-800/80 bg-[#120907]">
        
        {/* Cinematic Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1541518763669-27fef04b14e8?auto=format&fit=crop&w=2000&q=90"
            alt="Authentic Habesha Ethiopian Food Feast"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-[0.7] contrast-[1.1] scale-105 transition-all duration-1000"
          />
          {/* Flame Fade Charcoal Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#120907]/95 via-[#120907]/85 to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#120907] via-transparent to-black/40" />
        </div>

        <div className="site-container relative z-10 flex flex-col gap-6">
          
          {/* Main Hero Header Content */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            
            <div className="flex flex-col gap-4 max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A100C]/80 border border-red-500/20 w-fit text-[11px] font-mono font-bold uppercase tracking-widest text-[#FF8C00] backdrop-blur-md shadow-lg"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t('tagline')}</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-syne font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.15] text-[#FFF8F6]"
              >
                Discover Addis Ababa <br className="hidden sm:inline" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF8C00] via-amber-300 to-[#E53935]">
                  One Bite at a Time
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-[#D1C2BD] font-medium text-xs sm:text-base leading-relaxed max-w-2xl"
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
                  className="touch-target bg-[#E53935] hover:bg-[#B71C1C] text-white font-bold text-xs sm:text-sm py-3.5 px-7 rounded-xl shadow-xl transition-all cursor-pointer hover:scale-102 flex items-center gap-2 focus-ring"
                >
                  <Search className="w-4 h-4" />
                  <span>{t('exploreReviews')}</span>
                </button>

                <Link
                  href="/collaborate"
                  className="touch-target bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm py-3.5 px-7 rounded-xl border border-white/20 transition-all cursor-pointer hover:scale-102 flex items-center gap-2 focus-ring backdrop-blur-md"
                >
                  <Handshake className="w-4 h-4 text-[#FF8C00]" />
                  <span>{t('workWithAddisFoodies')}</span>
                </Link>
              </motion.div>
            </div>

            {/* 2 Key Floating Highlight Cards */}
            <div className="hidden lg:flex flex-col gap-4 flex-shrink-0 w-72">
              <div className="bg-[#1A100C]/80 backdrop-blur-md p-4 rounded-2xl border border-red-500/20 flex items-center gap-3.5 shadow-xl hover:border-amber-500/30 transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#E53935]/20 border border-[#E53935]/40 flex items-center justify-center flex-shrink-0">
                  <Utensils className="w-5 h-5 text-[#FF8C00]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-syne font-bold text-xs text-white">Special Kitfo Platter</span>
                  <span className="text-[11px] font-mono text-[#FF8C00] font-bold">850 Br • Bole</span>
                </div>
              </div>

              <div className="bg-[#1A100C]/80 backdrop-blur-md p-4 rounded-2xl border border-red-500/20 flex items-center gap-3.5 shadow-xl hover:border-amber-500/30 transition-all">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center flex-shrink-0">
                  <Coffee className="w-5 h-5 text-[#FF8C00]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-syne font-bold text-xs text-white">Double Macchiato</span>
                  <span className="text-[11px] font-mono text-[#FF8C00] font-bold">150 Br • Sarbet</span>
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
            <span className="text-xs font-mono font-bold uppercase text-[#D1C2BD] tracking-wider flex-shrink-0">{t('trending')}:</span>
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-wider text-[#D1C2BD] border-t border-white/10 pt-4">
            <div className="flex items-center gap-1.5">
              <Flame className="w-4 h-4 text-[#FF8C00]" />
              <span>{t('monthlyFoodies')}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#E53935]" />
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

      {/* MAIN HOMEPAGE STREAMLINED FEED */}
      <main className="site-container py-10 flex flex-col gap-12">
        
        {/* Real-time Festival Banner Alert */}
        <EventBanner />

        {/* SECTION 2: 9:16 SHORT-FORM VIDEO REELS FEED */}
        <VideoReelsCarousel />

        {/* SECTION 3: TOP 4 CURATED SPOTS THIS WEEK */}
        <section id="featured-spots" className="flex flex-col gap-6 pt-2">
          <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3">
            <div>
              <h2 className="font-syne font-black text-xl sm:text-3xl text-zinc-900 dark:text-[#FFF8F6] flex items-center gap-2">
                <Star className="w-6 h-6 text-[#FF8C00]" />
                <span>Top Curated Spots This Week</span>
              </h2>
              <p className="text-xs text-zinc-600 dark:text-[#D1C2BD] font-medium pt-1">
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
