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
import FoodReviewsInfiniteSlider from '../components/FoodReviewsInfiniteSlider';
import { InfiniteSlider } from '../components/core/infinite-slider';
import AiCravingFinder from '../components/AiCravingFinder';
import PostDetailModal from '../components/PostDetailModal';
import PriceReceiptModal from '../components/PriceReceiptModal';
import VideoReelModal, { ReelItem } from '../components/VideoReelModal';
import Footer from '../components/Footer';
import MobileBottomNav from '../components/layout/MobileBottomNav';

import { mockPosts } from '../data/mockPosts';
import { FoodPost } from '../types/post';

const videoReels: ReelItem[] = [
  {
    id: 'reel-1',
    dishName: 'Authentic Gurage Kitfo Sizzle',
    restaurantName: 'Yado Kitfo • Kazanchis',
    priceFormatted: '650 Br',
    location: 'Kazanchis Total',
    views: '148.5K',
    thumbnail: '/telegram-imports/Yado kitfo.jpg',
    badge: 'TIKTOK TRENDING',
    sourcePlatform: 'tiktok',
  },
  {
    id: 'reel-2',
    dishName: 'Sishu Cheese Burger Gourmet Stack',
    restaurantName: 'Sishu Burger • Bole Atlas',
    priceFormatted: '710 Br',
    location: 'Bole Atlas',
    views: '194.2K',
    thumbnail: '/telegram-imports/Queen Burger.jpg',
    badge: 'INSTAGRAM REEL',
    sourcePlatform: 'instagram',
  },
  {
    id: 'reel-3',
    dishName: 'Pan-seared Garlic Butter Shrimp',
    restaurantName: 'Skylight Hotel • Bole',
    priceFormatted: '1,250 Br',
    location: 'Bole Airport Road',
    views: '104.1K',
    thumbnail: '/telegram-imports/SHRIMP sky light.jpg',
    badge: 'INSTAGRAM REEL',
    sourcePlatform: 'instagram',
  },
  {
    id: 'reel-4',
    dishName: 'Oat Milk Vanilla Fasting Iced Latte',
    restaurantName: 'Green Bean Roasters • Sarbet',
    priceFormatted: '210 Br',
    location: 'Old Airport',
    views: '84.8K',
    thumbnail: '/telegram-imports/Vanilla Fasting Iced late.jpg',
    badge: 'TELEGRAM REEL',
    sourcePlatform: 'telegram',
  },
  {
    id: 'reel-5',
    dishName: 'Prime Tomahawk Lava Stone Steak',
    restaurantName: 'Hyatt Regency Grill • Meskel Sq',
    priceFormatted: '1,850 Br',
    location: 'Hyatt Regency',
    views: '162.3K',
    thumbnail: '/telegram-imports/thomawak.jpg',
    badge: 'TIKTOK TRENDING',
    sourcePlatform: 'tiktok',
  },
  {
    id: 'reel-6',
    dishName: 'Tire Siga Raw Beef Meat Feast',
    restaurantName: 'Kera Prime Meat House',
    priceFormatted: '950 Br',
    location: 'Kera District',
    views: '210.4K',
    thumbnail: '/telegram-imports/Tire siga.jpg',
    badge: 'INSTAGRAM REEL',
    sourcePlatform: 'instagram',
  },
  {
    id: 'reel-7',
    dishName: 'Mamma Mia Handmade Meat Lasagna',
    restaurantName: 'Mamma Mia • Piassa',
    priceFormatted: '540 Br',
    location: 'Piassa Churchill Ave',
    views: '92.6K',
    thumbnail: '/telegram-imports/LASAGNA.jpg',
    badge: 'TELEGRAM REEL',
    sourcePlatform: 'telegram',
  },
  {
    id: 'reel-8',
    dishName: 'Loaded Pepperoni & Mushroom Pizza',
    restaurantName: 'Sarbet Slice Pizzeria',
    priceFormatted: '640 Br',
    location: 'Sarbet',
    views: '115.8K',
    thumbnail: '/telegram-imports/pitza1.jpg',
    badge: 'INSTAGRAM REEL',
    sourcePlatform: 'instagram',
  },
  {
    id: 'reel-9',
    dishName: 'Royal Agelgil Ethiopian Cultural Feast',
    restaurantName: 'Entoto Park Lodge',
    priceFormatted: '920 Br',
    location: 'Entoto Natural Park',
    views: '185.0K',
    thumbnail: '/telegram-imports/food.jpg',
    badge: 'TIKTOK TRENDING',
    sourcePlatform: 'tiktok',
  },
  {
    id: 'reel-10',
    dishName: 'Pistachio Layer Cake & Caramel Macchiato',
    restaurantName: 'Velvet Pastry House • Sarbet',
    priceFormatted: '380 Br',
    location: 'Sarbet AU Gate',
    views: '78.2K',
    thumbnail: '/telegram-imports/CAKE.jpg',
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

          {/* LATEST OFFICIAL REVIEWS CAROUSEL STRIP */}
          <section id="latest-reviews-section" className="flex flex-col gap-4">
            <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: 'var(--border-subtle)' }}>
              <div className="flex items-center gap-2">
                <Compass className="w-5 h-5 text-[#B8422E]" />
                <h2 className="font-display font-medium text-xl sm:text-2xl text-[var(--text-primary)]">
                  Latest Official Reviews
                </h2>
              </div>
              <Link 
                href="/reviews" 
                className="text-xs font-label uppercase text-[#B8422E] hover:underline font-bold"
              >
                Explore All Reviews →
              </Link>
            </div>

            {/* Clean Category Filter Buttons */}
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

            {/* Automatic Infinite Side-Scroll Review Cards */}
            <FoodReviewsInfiniteSlider
              posts={filteredOfficialReviews}
              gap={20}
              speed={35}
              isPaused={Boolean(activePost)}
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

            <InfiniteSlider gap={16} speed={35} reverse={true} isPaused={Boolean(activeReelId)}>
              {videoReels.map((reel) => (
                <div key={reel.id} className="shrink-0 w-[200px] sm:w-[220px] lg:w-[240px]">
                  <div
                    onClick={() => setActiveReelId(reel.id)}
                    className="group relative aspect-[9/16] w-full rounded-md overflow-hidden bg-[#1A1C1E] border border-[var(--border-subtle)] shadow-xs transition-colors duration-200 cursor-pointer hover:border-[#B8422E]"
                  >
                    <Image
                      src={reel.thumbnail}
                      alt={reel.dishName}
                      fill
                      sizes="(max-width: 768px) 65vw, 25vw"
                      className="object-cover transition-opacity duration-300 group-hover:opacity-90 brightness-90"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent" />

                    <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between z-10">
                      <span className="px-2 py-0.5 rounded-sm bg-[#1A1C1E]/90 text-white font-mono font-bold text-[9px] uppercase border border-white/10">
                        {reel.badge}
                      </span>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <div className="w-11 h-11 rounded-full bg-[#B8422E] text-white flex items-center justify-center shadow-md">
                        <Play className="w-5 h-5 fill-white ml-0.5" />
                      </div>
                    </div>

                    <div className="absolute bottom-2.5 left-2.5 right-2.5 z-10 flex flex-col gap-1 text-white">
                      <h4 className="font-display font-medium text-xs line-clamp-2 leading-snug text-white">
                        {reel.dishName}
                      </h4>
                      <span className="text-[10px] font-mono text-stone-300 truncate">{reel.restaurantName}</span>
                    </div>
                  </div>
                </div>
              ))}
            </InfiniteSlider>

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
