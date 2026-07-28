'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Compass, 
  ArrowRight,
  Sparkles,
  Utensils
} from 'lucide-react';

import Header from '../components/Header';
import HeroSection from '../components/home/HeroSection';
import EventBanner from '../components/EventBanner';
import ReviewCard from '../components/ReviewCard';
import PostDetailModal from '../components/PostDetailModal';
import PriceReceiptModal from '../components/PriceReceiptModal';
import AiFoodieBotModal from '../components/AiFoodieBotModal';
import Footer from '../components/Footer';
import MobileBottomNav from '../components/layout/MobileBottomNav';

import { mockPosts } from '../data/mockPosts';
import { FoodPost } from '../types/post';

export default function HomePage() {
  const [activePost, setActivePost] = useState<FoodPost | null>(null);
  const [activeReceiptPost, setActiveReceiptPost] = useState<FoodPost | null>(null);

  // Display top latest reviews on home page
  const latestReviews = mockPosts.slice(0, 4);

  const handleHeroSearch = (filters: { query: string; location: string; price: string; cuisine: string }) => {
    const el = document.getElementById('latest-reviews-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFeed = () => {
    const el = document.getElementById('latest-reviews-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5] text-zinc-900 transition-colors duration-300 pb-16 sm:pb-0 max-w-full overflow-x-hidden">
      
      {/* 1. HEADER NAVIGATION */}
      <Header />

      {/* 2. STREAMLINED HERO SECTION WITH AUTHENTIC KITFO BACKDROP & CIRCULAR LOGO */}
      <HeroSection
        onSearch={handleHeroSearch}
        onExploreClick={scrollToFeed}
      />

      {/* MAIN HOMEPAGE CONTENT */}
      <main className="site-container py-12 flex flex-col gap-12">
        
        {/* 3. LATEST FOOD REVIEWS SECTION */}
        <section id="latest-reviews-section" className="flex flex-col gap-6 pt-4">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-stone-200 pb-4 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E53935]/10 border border-[#E53935]/20 text-xs font-mono font-bold text-[#E53935] uppercase tracking-wider mb-2">
                <Compass className="w-4 h-4 text-[#E53935]" />
                <span>Verified Culinary Reviews</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-4xl text-zinc-950">
                Latest Food Reviews
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 font-medium pt-1">
                Fresh reviews from our community. Real food. Real experiences across Addis Ababa.
              </p>
            </div>

            <Link
              href="/reviews"
              className="touch-target px-5 py-2.5 rounded-xl bg-[#E53935] hover:bg-[#B71C1C] text-white font-extrabold text-xs transition-all shadow-md flex items-center gap-1.5 w-fit"
            >
              <span>View All Reviews</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Grid of Latest Food Reviews (Kitfo Special, Macchiato, Tibs, Burger) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestReviews.map((post) => (
              <ReviewCard
                key={post.id}
                post={post}
                onClick={() => setActivePost(post)}
              />
            ))}
          </div>

          {/* View All Reviews Button Banner */}
          <div className="flex justify-center pt-2">
            <Link
              href="/reviews"
              className="touch-target px-8 py-3.5 rounded-2xl bg-[#111827] hover:bg-[#E53935] text-white font-black text-xs uppercase tracking-wider shadow-xl transition-all flex items-center gap-2"
            >
              <Utensils className="w-4 h-4 text-amber-300" />
              <span>Explore All Verified Reviews & Prices</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </section>

        {/* 4. 1 UPCOMING EVENT PROMOTION (KITFO FEST #5) */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#E53935]">
            <Sparkles className="w-4 h-4 text-[#FF8C00]" />
            <span>Featured Food Event & Promotion</span>
          </div>
          <EventBanner />
        </section>

      </main>

      {/* 5. FOOTER & NAVIGATION */}
      <Footer />
      <MobileBottomNav />

      {/* 6. CLICKABLE INTERACTIVE AI FOODIE BOT */}
      <AiFoodieBotModal />

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
