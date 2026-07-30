'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Compass, 
  ArrowRight,
  Utensils,
  Film,
  Play,
  MapPin,
  Flame,
  Coffee,
  Soup,
  Sandwich
} from 'lucide-react';

import Header from '../components/Header';
import HeroSection from '../components/home/HeroSection';
import EventBanner from '../components/EventBanner';
import ReviewCard from '../components/ReviewCard';
import PostDetailModal from '../components/PostDetailModal';
import PriceReceiptModal from '../components/PriceReceiptModal';
import VideoReelModal, { ReelItem } from '../components/VideoReelModal';
import AddisMap from '../components/AddisMap';
import Footer from '../components/Footer';
import MobileBottomNav from '../components/layout/MobileBottomNav';

import { mockPosts } from '../data/mockPosts';
import { FoodPost } from '../types/post';

const videoReels: ReelItem[] = [
  {
    id: 'reel-1',
    dishName: 'Kitfo Fest #7 Live Atmosphere',
    restaurantName: 'Monarch Hotel • Bole Atlas',
    priceFormatted: '950 Br',
    location: 'Bole Atlas Road',
    views: '148.5K',
    thumbnail: '/images/ethiopian_kitfo_hero.png',
    badge: 'TIKTOK TRENDING',
    sourcePlatform: 'tiktok',
  },
  {
    id: 'reel-2',
    dishName: 'Titich Double Cheese Kitfo Burger Sizzle',
    restaurantName: 'Titich Gourmet • Bole Atlas',
    priceFormatted: '580 Br',
    location: 'Bole Atlas',
    views: '94.2K',
    thumbnail: '/telegram-imports/Queen Burger.jpg',
    badge: 'INSTAGRAM REEL',
    sourcePlatform: 'instagram',
  },
  {
    id: 'reel-3',
    dishName: 'Pan-seared Norwegian Salmon',
    restaurantName: 'Le Jardin Suspendu • Kazanchis',
    priceFormatted: '1,600 Br',
    location: 'Kazanchis',
    views: '104.1K',
    thumbnail: '/telegram-imports/SHRIMP sky light.jpg',
    badge: 'INSTAGRAM REEL',
    sourcePlatform: 'instagram',
  },
  {
    id: 'reel-4',
    dishName: 'Vanilla Fasting Iced Latte Pour',
    restaurantName: 'Tomoca Coffee • Sarbet',
    priceFormatted: '180 Br',
    location: 'Sarbet',
    views: '34.8K',
    thumbnail: '/telegram-imports/Vanilla Fasting Iced late.jpg',
    badge: 'TELEGRAM REEL',
    sourcePlatform: 'telegram',
  },
];

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [activePost, setActivePost] = useState<FoodPost | null>(null);
  const [activeReceiptPost, setActiveReceiptPost] = useState<FoodPost | null>(null);
  const [activeReelId, setActiveReelId] = useState<string | null>(null);

  // Filter homepage official reviews based on Search Bar & category buttons
  const filteredOfficialReviews = useMemo(() => {
    return mockPosts.filter((post) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || (
        post.restaurantName.toLowerCase().includes(q) ||
        post.location.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q) ||
        post.caption.toLowerCase().includes(q)
      );
      const matchesCat = !selectedCategory || post.category.toLowerCase() === selectedCategory.toLowerCase();
      return matchesSearch && matchesCat;
    });
  }, [searchQuery, selectedCategory]);

  const scrollToFeed = () => {
    const el = document.getElementById('latest-reviews-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const categoryButtons = [
    { label: 'All', value: null, icon: Utensils },
    { label: 'Traditional', value: 'Traditional', icon: Flame },
    { label: 'Burgers', value: 'Burgers', icon: Sandwich },
    { label: 'Fasting', value: 'Fasting', icon: Soup },
    { label: 'Coffee', value: 'Coffee', icon: Coffee },
  ];

  return (
    <div
      className="relative flex flex-col min-h-screen transition-colors duration-300 pb-16 sm:pb-0 max-w-full overflow-x-hidden"
      style={{ backgroundColor: 'var(--bg-app)', color: 'var(--text-primary)' }}
    >
      <div className="relative z-10 flex flex-col flex-1">
        {/* 1. FLOATING HEADER NAVIGATION */}
        <Header />

        {/* 2. DISMISSABLE EVENT SPOTLIGHT TOP NOTIFICATION BAR */}
        <div className="site-container pt-2">
          <EventBanner />
        </div>

        {/* 3. HERITAGE HERO SECTION */}
        <HeroSection
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onExploreClick={scrollToFeed}
        />

        {/* MAIN HOMEPAGE CONTENT */}
        <main className="site-container py-8 flex flex-col gap-14">

          {/* 4. LATEST OFFICIAL REVIEWS SECTION (SIDE-SCROLLABLE HORIZONTAL CAROUSEL ON MOBILE) */}
          <section id="latest-reviews-section" className="flex flex-col gap-6 pt-2">
            
            <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b pb-4 gap-4" style={{ borderColor: 'var(--border-subtle)' }}>
              <div>
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-sm text-xs font-label uppercase tracking-wider mb-2 border bg-[var(--bg-surface)] border-[var(--border-subtle)] text-[#B8422E]"
                >
                  <Compass className="w-4 h-4 text-[#B8422E]" />
                  <span>Official Addis Foodies Curation</span>
                </div>
                <h2 className="font-display font-medium text-2xl sm:text-4xl text-[var(--text-primary)]">
                  Latest Official Reviews
                </h2>
                <p className="text-xs sm:text-sm font-body pt-1 text-[var(--text-secondary)]">
                  Fresh food inspections and itemized ETB price audits (Swipe horizontally on mobile ↔)
                </p>
              </div>

              <Link
                href="/reviews"
                className="button-primary px-5 py-2.5 rounded-md text-white font-label text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 w-fit hover:scale-[1.02]"
              >
                <span>Explore All Reviews</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Clean Category Filter Buttons (No Emojis) */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
              {categoryButtons.map((btn) => {
                const Icon = btn.icon;
                const isActive = selectedCategory === btn.value;
                return (
                  <button
                    key={btn.label}
                    type="button"
                    onClick={() => setSelectedCategory(btn.value)}
                    className={`px-3.5 py-1.5 rounded-sm text-xs font-label uppercase tracking-wider font-bold transition border flex items-center gap-1.5 cursor-pointer shrink-0 ${
                      isActive 
                        ? 'bg-[#1A1C1E] text-white border-[#1A1C1E]' 
                        : 'bg-[var(--bg-surface)] text-[var(--text-primary)] border-[var(--border-subtle)] hover:border-[#B8422E]'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5 text-[#B8422E]" />
                    <span>{btn.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Side-Scrollable Horizontal Carousel on Mobile / Grid on Desktop */}
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:overflow-visible scrollbar-none">
              {filteredOfficialReviews.map((post) => (
                <div key={post.id} className="shrink-0 w-[85vw] sm:w-auto snap-center">
                  <ReviewCard
                    post={post}
                    onClick={() => setActivePost(post)}
                  />
                </div>
              ))}
            </div>

          </section>

          {/* 5. INTERACTIVE ADDIS MAP SECTION */}
          <section className="flex flex-col gap-4">
            <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: 'var(--border-subtle)' }}>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#B8422E]" />
                <h3 className="font-display font-medium text-xl sm:text-2xl text-[var(--text-primary)]">
                  Interactive Addis Food Map
                </h3>
              </div>
              <Link href="/map" className="text-xs font-label uppercase text-[#B8422E] hover:underline font-bold">
                Open Full Screen Map →
              </Link>
            </div>

            <AddisMap
              posts={mockPosts}
              activePost={activePost}
              onSelectPost={(post) => setActivePost(post)}
            />
          </section>

          {/* 6. TRENDING FOOD VIDEO REELS STRIP (TIKTOK & INSTAGRAM REELS) */}
          <section className="flex flex-col gap-4">
            <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: 'var(--border-subtle)' }}>
              <div className="flex items-center gap-2">
                <Film className="w-5 h-5 text-[#B8422E]" />
                <h3 className="font-display font-medium text-xl sm:text-2xl text-[var(--text-primary)]">
                  Latest Video Reels &amp; Sizzles
                </h3>
              </div>
              <a 
                href="https://www.tiktok.com/@addis.foodie?_r=1&_t=ZS-98Smpg1WuZg" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xs font-label uppercase text-[#B8422E] hover:underline font-bold"
              >
                TikTok @addis.foodie →
              </a>
            </div>

            <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible scrollbar-none">
              {videoReels.map((reel) => (
                <div key={reel.id} className="shrink-0 w-[65vw] sm:w-auto snap-center">
                  <div
                    onClick={() => setActiveReelId(reel.id)}
                    className="group relative aspect-[9/16] w-full rounded-md overflow-hidden bg-slate-900 border border-[var(--border-subtle)] shadow-xs transition-all duration-300 cursor-pointer hover:-translate-y-1"
                  >
                    <Image
                      src={reel.thumbnail}
                      alt={reel.dishName}
                      fill
                      sizes="(max-width: 768px) 65vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-85 group-hover:brightness-95"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                    <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between z-10">
                      <span className="px-2 py-0.5 rounded-sm bg-[#1A1C1E]/90 text-white font-label font-bold text-[9px] uppercase border border-white/10">
                        {reel.badge}
                      </span>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <div className="w-11 h-11 rounded-full bg-[#B8422E] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 fill-white ml-0.5" />
                      </div>
                    </div>

                    <div className="absolute bottom-2.5 left-2.5 right-2.5 z-10 flex flex-col gap-1 text-white">
                      <h4 className="font-display font-medium text-xs line-clamp-2 leading-snug text-white">
                        {reel.dishName}
                      </h4>
                      <span className="text-[10px] font-label text-slate-300 truncate">{reel.restaurantName}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* View All Reviews Button */}
            <div className="flex justify-center pt-4">
              <Link
                href="/reviews"
                className="button-primary px-8 py-3.5 rounded-md text-white font-label text-xs uppercase tracking-wider transition-all flex items-center gap-2 hover:scale-[1.01]"
              >
                <Utensils className="w-4 h-4" />
                <span>View Full Reviews &amp; Reels Feed</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

        </main>

        {/* 7. FOOTER & MOBILE NAVIGATION */}
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

        {/* Vertical TikTok/IG Full-Screen Swipe Reel Modal */}
        {activeReelId && (
          <VideoReelModal
            reels={videoReels}
            activeReelId={activeReelId}
            onClose={() => setActiveReelId(null)}
          />
        )}
      </div>
    </div>
  );
}
