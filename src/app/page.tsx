'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Compass, 
  ArrowRight,
  Utensils,
  Film,
  Play,
  X
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

const videoReels = [
  {
    id: 'reel-1',
    title: 'Kitfo Preparation Behind The Scenes',
    restaurant: 'Habesha 2000 • Bole',
    views: '45.2K',
    thumbnail: '/telegram-imports/Yado kitfo.jpg',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-cooking-food-in-a-pan-41555-large.mp4',
    badge: 'INSTAGRAM REEL',
  },
  {
    id: 'reel-2',
    title: 'Classic Queen Beef Burger Sizzle',
    restaurant: 'Titich Gourmet • Bole',
    views: '38.9K',
    thumbnail: '/telegram-imports/Queen Burger.jpg',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-chef-preparing-a-dish-41553-large.mp4',
    badge: 'TIKTOK TRENDING',
  },
  {
    id: 'reel-3',
    title: 'Vanilla Fasting Iced Latte Pour',
    restaurant: 'Tomoca Coffee • Atlas',
    views: '29.1K',
    thumbnail: '/telegram-imports/Vanilla Fasting Iced late.jpg',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-barista-pouring-milk-in-a-coffee-cup-41554-large.mp4',
    badge: 'TELEGRAM REEL',
  },
  {
    id: 'reel-4',
    title: 'Grand Habesha Feast Platter Showcase',
    restaurant: 'Yod Abyssinia • Bole',
    views: '52.4K',
    thumbnail: '/telegram-imports/IFTAR PACKAGE.jpg',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-cooking-food-in-a-pan-41555-large.mp4',
    badge: 'VIRAL SPOTLIGHT',
  },
];

export default function HomePage() {
  const [activePost, setActivePost] = useState<FoodPost | null>(null);
  const [activeReceiptPost, setActiveReceiptPost] = useState<FoodPost | null>(null);
  const [activeVideo, setActiveVideo] = useState<typeof videoReels[0] | null>(null);

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
      {/* Visible Homepage Ambient Background Image */}
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

        {/* 2. DISMISSABLE EVENT SPOTLIGHT TOP NOTIFICATION BAR */}
        <div className="site-container pt-2">
          <EventBanner />
        </div>

        {/* 3. HERITAGE HERO SECTION WITH VISIBLE BACKGROUND IMAGE */}
        <HeroSection
          onSearch={handleHeroSearch}
          onExploreClick={scrollToFeed}
        />

        {/* MAIN HOMEPAGE CONTENT */}
        <main className="site-container py-8 flex flex-col gap-12">

          {/* 4. LATEST OFFICIAL REVIEWS SECTION (SIDE-SCROLLABLE HORIZONTAL CAROUSEL ON MOBILE) */}
          <section id="latest-reviews-section" className="flex flex-col gap-6 pt-2">
            
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
                  Fresh food inspections and itemized ETB price audits (Swipe horizontally on mobile ↔)
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

            {/* Side-Scrollable Horizontal Carousel on Mobile Phones */}
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:overflow-visible scrollbar-none">
              {latestOfficialReviews.map((post) => (
                <div key={post.id} className="shrink-0 w-[85vw] sm:w-auto snap-center">
                  <ReviewCard
                    post={post}
                    onClick={() => setActivePost(post)}
                  />
                </div>
              ))}
            </div>

          </section>

          {/* 5. TRENDING VIDEO REELS STRIP ON HOMEPAGE */}
          <section className="flex flex-col gap-4">
            <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: 'var(--border-subtle)' }}>
              <div className="flex items-center gap-2">
                <Film className="w-5 h-5 text-[#B8422E]" />
                <h3 className="font-display font-medium text-xl sm:text-2xl" style={{ color: 'var(--text-primary)' }}>
                  Latest Food Video Reels
                </h3>
              </div>
              <Link href="/reviews" className="text-xs font-label uppercase text-[#B8422E] hover:underline">
                View All Reels →
              </Link>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {videoReels.map((reel) => (
                <div
                  key={reel.id}
                  onClick={() => setActiveVideo(reel)}
                  className="group relative aspect-[9/16] w-full rounded-md overflow-hidden bg-slate-900 border border-[var(--border-subtle)] shadow-xs transition-all duration-300 cursor-pointer hover:-translate-y-1"
                >
                  <Image
                    src={reel.thumbnail}
                    alt={reel.title}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-85 group-hover:brightness-95"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between z-10">
                    <span className="px-2 py-0.5 rounded-sm bg-[#1A1C1E]/90 text-white font-label font-bold text-[9px]">
                      {reel.badge}
                    </span>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="w-10 h-10 rounded-full bg-[#B8422E] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <Play className="w-4 h-4 fill-white ml-0.5" />
                    </div>
                  </div>

                  <div className="absolute bottom-2.5 left-2.5 right-2.5 z-10 flex flex-col gap-1 text-white">
                    <h4 className="font-display font-medium text-xs line-clamp-2 leading-snug text-white">
                      {reel.title}
                    </h4>
                    <span className="text-[10px] font-label text-slate-300">{reel.restaurant}</span>
                  </div>
                </div>
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

        {/* Video Lightbox Modal */}
        {activeVideo && (
          <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
            <div className="relative w-full max-w-md bg-[#1A1C1E] rounded-md border border-white/10 overflow-hidden shadow-xl flex flex-col">
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-3 right-3 z-20 w-8 h-8 rounded-sm bg-black/70 text-white flex items-center justify-center hover:bg-[#B8422E] transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="relative aspect-[9/16] w-full bg-black">
                <video
                  src={activeVideo.videoUrl}
                  controls
                  autoPlay
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4 bg-[#1A1C1E] text-white flex flex-col gap-1">
                <span className="text-[10px] font-label font-bold text-[#B8422E] uppercase">
                  {activeVideo.badge} • {activeVideo.restaurant}
                </span>
                <h4 className="font-display font-medium text-sm text-white">{activeVideo.title}</h4>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
