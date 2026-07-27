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
  Camera,
  Send,
  Phone,
  Compass,
  Award,
  Video
} from 'lucide-react';

import Header from '../components/Header';
import HeroSection from '../components/home/HeroSection';
import AddisAiAssistant from '../components/home/AddisAiAssistant';
import VideoReelsCarousel from '../components/home/VideoReelsCarousel';
import MagazineFeatured from '../components/home/MagazineFeatured';
import FoodMapPreview from '../components/home/FoodMapPreview';
import EventBanner from '../components/EventBanner';
import TraditionalFoodSpotlight from '../components/home/TraditionalFoodSpotlight';
import SrsOverviewSection from '../components/home/SrsOverviewSection';
import SocialHubSection from '../components/home/SocialHubSection';
import TrustSection from '../components/home/TrustSection';
import ReviewCard from '../components/ReviewCard';
import PostDetailModal from '../components/PostDetailModal';
import PriceReceiptModal from '../components/PriceReceiptModal';
import AiCravingFinder from '../components/AiCravingFinder';
import Footer from '../components/Footer';
import MobileBottomNav from '../components/layout/MobileBottomNav';

import { useLanguage } from '../context/LanguageContext';
import { mockPosts } from '../data/mockPosts';
import { FoodPost } from '../types/post';

export default function HomePage() {
  const { t } = useLanguage();
  
  // Search state from Hero multi-field engine
  const [searchFilters, setSearchFilters] = useState({
    query: '',
    location: '',
    price: '',
    cuisine: '',
  });

  const [activePost, setActivePost] = useState<FoodPost | null>(null);
  const [activeReceiptPost, setActiveReceiptPost] = useState<FoodPost | null>(null);

  // Filter posts based on multi-field search engine
  const filteredPosts = useMemo(() => {
    return mockPosts.filter((post) => {
      // 1. Text Query Filter
      if (searchFilters.query) {
        const q = searchFilters.query.toLowerCase();
        const matchTitle = post.restaurantName.toLowerCase().includes(q);
        const matchCaption = post.caption.toLowerCase().includes(q);
        const matchLocation = post.location.toLowerCase().includes(q);
        const matchCategory = post.category.toLowerCase().includes(q);
        if (!matchTitle && !matchCaption && !matchLocation && !matchCategory) return false;
      }

      // 2. Location Filter
      if (searchFilters.location) {
        if (!post.location.toLowerCase().includes(searchFilters.location.toLowerCase())) return false;
      }

      // 3. Category / Cuisine Filter
      if (searchFilters.cuisine) {
        if (!post.category.toLowerCase().includes(searchFilters.cuisine.toLowerCase())) return false;
      }

      return true;
    });
  }, [searchFilters]);

  // Lead featured post for magazine spotlight
  const leadFeaturedPost = useMemo(() => mockPosts[0], []);
  const secondaryFeaturedPosts = useMemo(() => mockPosts.slice(1, 4), []);

  const handleHeroSearch = (filters: { query: string; location: string; price: string; cuisine: string }) => {
    setSearchFilters(filters);
    const el = document.getElementById('reviews-feed');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleAiPrompt = (query: string) => {
    if (query) setSearchFilters(prev => ({ ...prev, query }));
    const el = document.getElementById('reviews-feed');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFeed = () => {
    const el = document.getElementById('reviews-feed');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5] text-zinc-900 transition-colors duration-300 selection:bg-[#E53935]/20 selection:text-[#E53935] pb-16 sm:pb-0 max-w-full overflow-x-hidden">
      
      {/* 1. HEADER NAVIGATION */}
      <Header
        searchQuery={searchFilters.query}
        onSearchChange={(q) => setSearchFilters(prev => ({ ...prev, query: q }))}
      />

      {/* 2. HERO SECTION — CINEMATIC KEN BURNS ZOOM, TRUST BADGE, STATS */}
      <HeroSection
        onSearch={handleHeroSearch}
        onExploreClick={scrollToFeed}
      />

      {/* MAIN HOMEPAGE MAGAZINE FLOW */}
      <main className="site-container py-12 flex flex-col gap-16">
        
        {/* 3. ADDIS AI ASSISTANT WIDGET (Matching Image 2 Mockup) */}
        <AddisAiAssistant />

        {/* 4. FEATURED VIDEO & REELS CAROUSEL */}
        <VideoReelsCarousel />

        {/* 5. MAGAZINE FEATURED REVIEW LAYOUT (1 Lead Spotlight + 3 Secondary) */}
        <MagazineFeatured
          leadPost={leadFeaturedPost}
          secondaryPosts={secondaryFeaturedPosts}
          onPostClick={setActivePost}
          onReceiptClick={setActiveReceiptPost}
        />

        {/* 6. INTERACTIVE FOOD MAP PREVIEW */}
        <FoodMapPreview />

        {/* 7. UPCOMING EVENTS & KITFO FEST 2026 SPOTLIGHT BANNER */}
        <EventBanner />

        {/* 8. TRADITIONAL ETHIOPIAN FOODS SPOTLIGHT */}
        <TraditionalFoodSpotlight
          onSelectDish={(dish) => handleAiPrompt(dish)}
        />

        {/* 9. REVIEWS ARCHIVE & GRID SECTION */}
        <section id="reviews-feed" className="flex flex-col gap-8 pt-4">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-stone-200 dark:border-stone-800 pb-4 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E53935]/10 border border-[#E53935]/20 text-xs font-mono font-bold text-[#E53935] uppercase tracking-wider mb-2">
                <Compass className="w-4 h-4" />
                <span>Curated Review Archive</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-4xl text-zinc-950 dark:text-white">
                Explore Verified Food Reviews
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-medium pt-1">
                Showing {filteredPosts.length} verified culinary reviews in Bole, Kazanchis, Piassa & Sarbet
              </p>
            </div>

            <Link
              href="/reviews"
              className="touch-target px-5 py-2.5 rounded-xl bg-[#E53935] hover:bg-[#B71C1C] text-white font-extrabold text-xs transition-all shadow-md flex items-center gap-1.5 w-fit"
            >
              <span>View All Archive</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Grid of Review Cards (1 Card Per Row on Mobile, 2 on SM, 3 on LG) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <ReviewCard
                key={post.id}
                post={post}
                onClick={() => setActivePost(post)}
              />
            ))}
          </div>

        </section>

        {/* 10. INTERACTIVE PILL-BASED AI CRAVING FINDER */}
        <AiCravingFinder onSelectPrompt={handleAiPrompt} />

        {/* 11. SRS OVERVIEW & TECH STACK SECTION (Matching Image 2 Mockup) */}
        <SrsOverviewSection />

        {/* 12. SOCIAL HUB SECTION (@addisfoodiess Instagram & Telegram) */}
        <SocialHubSection />

        {/* 13. COMMUNITY TRUST & NUMBERS SECTION */}
        <TrustSection />

        {/* 14. B2B & WORK WITH ADDIS FOODIES COMMERCIAL CALLOUT */}
        <section className="w-full py-12 px-8 rounded-3xl bg-gradient-to-r from-[#E53935] via-red-600 to-[#FF8C00] text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="relative z-10 flex flex-col gap-3 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/30 border border-white/20 text-xs font-mono font-bold text-amber-200 uppercase tracking-wider w-fit">
              <Handshake className="w-4 h-4 text-amber-300" />
              <span>For Restaurants & Brands</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl leading-tight">
              Work With Addis Foodies
            </h2>
            <p className="text-sm sm:text-base text-amber-50 font-medium leading-relaxed">
              Elevate your restaurant with multi-platform food reviews, cinematic video reels, event partnerships, and custom brand campaigns.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap items-center gap-4 flex-shrink-0">
            <Link
              href="/collaborate"
              className="touch-target bg-[#111827] hover:bg-black text-white font-extrabold text-sm py-4 px-8 rounded-2xl shadow-xl transition-all hover:scale-105 flex items-center gap-2 focus-ring"
            >
              <span>Explore Business Portal</span>
              <ArrowRight className="w-4 h-4 text-[#FF8C00]" />
            </Link>
          </div>
        </section>

      </main>

      {/* 12. RICH FOOTER */}
      <Footer />
      <MobileBottomNav />

      {/* MODALS */}
      {activePost && (
        <PostDetailModal
          post={activePost}
          onClose={() => setActivePost(null)}
        />
      )}

      {activeReceiptPost && (
        <PriceReceiptModal
          post={activeReceiptPost}
          onClose={() => setActiveReceiptPost(null)}
        />
      )}
    </div>
  );
}
