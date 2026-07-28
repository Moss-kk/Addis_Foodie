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
import DeliveryTeaserCard from '../components/home/DeliveryTeaserCard';
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

  // Display strictly the latest 6 official reviews on homepage
  const latestOfficialReviews = mockPosts.slice(0, 6);

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
        
        {/* 3. HIGH-CONTRAST EVENT SPOTLIGHT BANNER (KITFO FEST, TASTE OF ADDIS, CHRISTMAS EXPO) */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider" style={{ color: 'var(--accent-gold)' }}>
            <Sparkles className="w-4 h-4" />
            <span>EVENT SPOTLIGHT — MAJOR FESTIVAL CALENDAR</span>
          </div>
          <EventBanner />
        </section>

        {/* 4. ADDIS FOODIE DELIVERY TEASER CARD (@addis.foodie.delivery) */}
        <DeliveryTeaserCard />

        {/* 5. LATEST OFFICIAL REVIEWS SECTION (STRICTLY LATEST 6 REVIEWS) */}
        <section id="latest-reviews-section" className="flex flex-col gap-6 pt-4">
          
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
                <span>Official Addis Foodies Curation</span>
              </div>
              <h2 className="font-display font-normal text-2xl sm:text-4xl" style={{ color: 'var(--text-primary)' }}>
                Latest Official Reviews
              </h2>
              <p className="text-xs sm:text-sm font-body pt-1" style={{ color: 'var(--text-secondary)' }}>
                Fresh food inspections and itemized ETB price audits published by @addis.foodie.
              </p>
            </div>

            <Link
              href="/reviews"
              className="touch-target px-6 py-3 rounded-full text-slate-950 font-extrabold text-xs transition-all shadow-md flex items-center gap-1.5 w-fit hover:scale-105"
              style={{ backgroundColor: 'var(--accent-gold)' }}
            >
              <span>Explore All Reviews &amp; Reels Feed</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Grid of Latest Official Reviews (6 Items) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestOfficialReviews.map((post) => (
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
              className="touch-target px-8 py-4 rounded-full text-slate-950 font-bold text-xs uppercase tracking-wider shadow-xl transition-all flex items-center gap-2 hover:scale-105"
              style={{ backgroundColor: 'var(--accent-gold)' }}
            >
              <Utensils className="w-4 h-4" />
              <span>View Full Reviews &amp; Video Reels Feed</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </section>

      </main>

      {/* 6. FOOTER & NAVIGATION */}
      <Footer />
      <MobileBottomNav />

      {/* 7. INTERACTIVE AI FOODIE BOT */}
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
