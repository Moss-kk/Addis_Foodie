'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
      className="relative flex flex-col min-h-screen transition-colors duration-300 pb-16 sm:pb-0 max-w-full overflow-x-hidden"
      style={{ backgroundColor: 'var(--bg-app)', color: 'var(--text-primary)' }}
    >
      {/* Subtle Visible Homepage Ambient Background Image */}
      <div className="absolute top-0 left-0 right-0 h-[600px] pointer-events-none overflow-hidden z-0 opacity-10">
        <Image
          src="/images/ethiopian_feast_hero.png"
          alt="Ambient Background Pattern"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top filter grayscale contrast-125 mix-blend-multiply"
        />
      </div>

      <div className="relative z-10 flex flex-col flex-1">
        {/* 1. FLOATING HEADER NAVIGATION */}
        <Header />

        {/* 2. HERITAGE HERO SECTION WITH VISIBLE BACKGROUND IMAGE */}
        <HeroSection
          onSearch={handleHeroSearch}
          onExploreClick={scrollToFeed}
        />

        {/* MAIN HOMEPAGE CONTENT */}
        <main className="site-container py-8 flex flex-col gap-12">
          
          {/* 3. EVENT SPOTLIGHT BANNER */}
          <section className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-xs font-label uppercase tracking-wider" style={{ color: 'var(--accent-tertiary)' }}>
              <Sparkles className="w-4 h-4 text-[#B8422E]" />
              <span>EVENT SPOTLIGHT — MAJOR FESTIVAL CALENDAR</span>
            </div>
            <EventBanner />
          </section>

          {/* 4. ADDIS FOODIE DELIVERY TEASER CARD */}
          <DeliveryTeaserCard />

          {/* 5. LATEST OFFICIAL REVIEWS SECTION */}
          <section id="latest-reviews-section" className="flex flex-col gap-6 pt-4">
            
            <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b pb-4 gap-4" style={{ borderColor: 'var(--border-subtle)' }}>
              <div>
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-sm text-xs font-label uppercase tracking-wider mb-2 border"
                  style={{
                    backgroundColor: 'var(--bg-surface)',
                    borderColor: 'var(--border-subtle)',
                    color: 'var(--accent-tertiary)',
                  }}
                >
                  <Compass className="w-4 h-4 text-[#B8422E]" />
                  <span>Official Addis Foodies Curation</span>
                </div>
                <h2 className="font-display font-medium text-2xl sm:text-4xl" style={{ color: 'var(--text-primary)' }}>
                  Latest Official Reviews
                </h2>
                <p className="text-xs sm:text-sm font-body pt-1" style={{ color: 'var(--text-secondary)' }}>
                  Fresh food inspections and itemized ETB price audits published by @addis.foodie.
                </p>
              </div>

              <Link
                href="/reviews"
                className="button-primary px-5 py-2.5 rounded-md text-white font-label text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 w-fit hover:scale-105"
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
                className="button-primary px-8 py-3.5 rounded-md text-white font-label text-xs uppercase tracking-wider transition-all flex items-center gap-2 hover:scale-[1.02]"
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
    </div>
  );
}
