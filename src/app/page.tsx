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

  // Display top 4 latest reviews on home page
  const latestReviews = mockPosts.slice(0, 4);

  const handleHeroSearch = () => {
    const el = document.getElementById('latest-reviews-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFeed = () => {
    const el = document.getElementById('latest-reviews-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className="flex flex-col min-h-screen transition-colors duration-300 pb-16 sm:pb-0 max-w-full overflow-x-hidden"
      style={{ backgroundColor: 'var(--bg-app)', color: 'var(--text-primary)' }}
    >
      
      {/* 1. FLOATING PILL HEADER NAVIGATION */}
      <Header />

      {/* 2. STADIUM HERO SECTION WITH MASTERCARD GEOMETRY */}
      <HeroSection
        onSearch={handleHeroSearch}
        onExploreClick={scrollToFeed}
      />

      {/* MAIN HOMEPAGE CONTENT */}
      <main className="site-container py-8 flex flex-col gap-12">
        
        {/* 3. LATEST FOOD REVIEWS SECTION */}
        <section id="latest-reviews-section" className="flex flex-col gap-6 pt-2">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b pb-4 gap-4" style={{ borderColor: 'var(--border-subtle)' }}>
            <div>
              <div
                className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider mb-2 border"
                style={{
                  backgroundColor: 'var(--accent-gold-glow)',
                  borderColor: 'var(--border-subtle)',
                  color: 'var(--accent-gold)',
                }}
              >
                <Compass className="w-4 h-4" />
                <span>Verified Culinary Reviews</span>
              </div>
              <h2 className="font-display font-normal text-2xl sm:text-4xl" style={{ color: 'var(--text-primary)' }}>
                Latest Food Reviews
              </h2>
              <p className="text-xs sm:text-sm font-body pt-1" style={{ color: 'var(--text-secondary)' }}>
                Fresh reviews from our community. Real food. Real experiences across Addis Ababa.
              </p>
            </div>

            <Link
              href="/reviews"
              className="touch-target px-6 py-3 rounded-full text-white font-extrabold text-xs transition-all shadow-md flex items-center gap-1.5 w-fit hover:scale-105"
              style={{ backgroundColor: 'var(--accent-gold)' }}
            >
              <span>View All Reviews</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Grid of Latest Food Reviews (Mastercard Pill Architecture) */}
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
          <div className="flex justify-center pt-4">
            <Link
              href="/reviews"
              className="touch-target px-8 py-4 rounded-full text-white font-bold text-xs uppercase tracking-wider shadow-xl transition-all flex items-center gap-2 hover:scale-105"
              style={{ backgroundColor: 'var(--accent-gold)' }}
            >
              <Utensils className="w-4 h-4 text-amber-200" />
              <span>Explore All Verified Reviews &amp; Prices</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </section>

        {/* 4. UPCOMING EVENT PROMOTION (KITFO FEST #5) */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider" style={{ color: 'var(--accent-gold)' }}>
            <Sparkles className="w-4 h-4" />
            <span>Featured Food Event &amp; Promotion</span>
          </div>
          <EventBanner />
        </section>

      </main>

      {/* 5. FOOTER & NAVIGATION */}
      <Footer />
      <MobileBottomNav />

      {/* 6. INTERACTIVE AI FOODIE BOT */}
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
