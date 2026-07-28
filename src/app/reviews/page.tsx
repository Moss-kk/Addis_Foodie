'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Tag, 
  Sparkles, 
  MapPin, 
  LayoutGrid, 
  Map as MapIcon, 
  Film, 
  Play, 
  X,
  ExternalLink,
  Utensils
} from 'lucide-react';
import Header from '../../components/Header';
import FilterBar from '../../components/FilterBar';
import ReviewCard from '../../components/ReviewCard';
import PostDetailModal from '../../components/PostDetailModal';
import Footer from '../../components/Footer';
import MobileBottomNav from '../../components/layout/MobileBottomNav';
import { mockPosts } from '../../data/mockPosts';
import { FoodPost } from '../../types/post';

const videoReels = [
  {
    id: 'reel-1',
    title: 'Kitfo Preparation Behind The Scenes',
    restaurant: 'Habesha 2000 • Bole',
    views: '45.2K',
    duration: '0:45',
    thumbnail: '/telegram-imports/Yado kitfo.jpg',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-cooking-food-in-a-pan-41555-large.mp4',
    badge: 'INSTAGRAM REEL',
  },
  {
    id: 'reel-2',
    title: 'Classic Queen Beef Burger Sizzle',
    restaurant: 'Titich Gourmet • Bole',
    views: '38.9K',
    duration: '0:30',
    thumbnail: '/telegram-imports/Queen Burger.jpg',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-chef-preparing-a-dish-41553-large.mp4',
    badge: 'TIKTOK TRENDING',
  },
  {
    id: 'reel-3',
    title: 'Vanilla Fasting Iced Latte Pour',
    restaurant: 'Tomoca Coffee • Atlas',
    views: '29.1K',
    duration: '0:55',
    thumbnail: '/telegram-imports/Vanilla Fasting Iced late.jpg',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-barista-pouring-milk-in-a-coffee-cup-41554-large.mp4',
    badge: 'TELEGRAM REEL',
  },
  {
    id: 'reel-4',
    title: 'Grand Habesha Feast Platter Showcase',
    restaurant: 'Yod Abyssinia • Bole',
    views: '52.4K',
    duration: '1:12',
    thumbnail: '/telegram-imports/IFTAR PACKAGE.jpg',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-cooking-food-in-a-pan-41555-large.mp4',
    badge: 'VIRAL SPOTLIGHT',
  },
];

export default function ReviewsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState<string | null>(null);
  const [selectedSort, setSelectedSort] = useState<string>('newest');
  const [activePost, setActivePost] = useState<FoodPost | null>(null);
  
  // Inline View Mode: Grid View vs Inline Map View
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');
  
  // Active Video Lightbox
  const [activeVideo, setActiveVideo] = useState<typeof videoReels[0] | null>(null);

  const filteredPosts = useMemo(() => {
    return mockPosts
      .filter((post) => {
        if (selectedLocation && post.neighborhood !== selectedLocation) return false;
        if (selectedCategory && post.category !== selectedCategory) return false;
        if (selectedPriceRange) {
          if (selectedPriceRange === 'under-300' && post.price >= 300) return false;
          if (selectedPriceRange === '300-700' && (post.price < 300 || post.price > 700)) return false;
          if (selectedPriceRange === '700-plus' && post.price <= 700) return false;
        }
        if (searchQuery.trim() !== '') {
          const query = searchQuery.toLowerCase().trim();
          const matchRestaurant = post.restaurantName.toLowerCase().includes(query);
          const matchLocation = post.location.toLowerCase().includes(query);
          const matchCategory = post.category.toLowerCase().includes(query);
          const matchCaption = post.caption.toLowerCase().includes(query);

          if (!matchRestaurant && !matchLocation && !matchCategory && !matchCaption) {
            return false;
          }
        }
        return true;
      })
      .sort((a, b) => {
        if (selectedSort === 'price-asc') return a.price - b.price;
        if (selectedSort === 'price-desc') return b.price - a.price;
        return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
      });
  }, [searchQuery, selectedLocation, selectedCategory, selectedPriceRange, selectedSort]);

  return (
    <div
      className="flex flex-col min-h-screen transition-colors duration-300 pb-16 sm:pb-0 max-w-full overflow-x-hidden"
      style={{ backgroundColor: 'var(--bg-app)', color: 'var(--text-primary)' }}
    >
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      {/* Page Header */}
      <section
        className="w-full border-b py-8 sm:py-12 transition-colors"
        style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}
      >
        <div className="site-container flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          
          <div className="flex flex-col gap-2">
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border w-fit text-xs font-mono font-bold uppercase tracking-widest"
              style={{
                backgroundColor: 'var(--accent-gold-glow)',
                borderColor: 'var(--border-subtle)',
                color: 'var(--accent-gold)',
              }}
            >
              <Tag className="w-3.5 h-3.5" />
              <span>Unified Reviews &amp; Short Video Feed</span>
            </div>

            <h1 className="font-display font-normal text-3xl sm:text-5xl" style={{ color: 'var(--text-primary)' }}>
              Addis Foodies Reviews &amp; Reels
            </h1>

            <p className="text-xs sm:text-sm font-body max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
              Verified restaurant reviews, short video reels, and itemized ETB price audits across Addis Ababa.
            </p>
          </div>

          {/* Sheger Gebeta Inline View Mode Switch (Grid View | Inline Map View) */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-full border bg-slate-950/80 border-slate-800 shadow-lg shrink-0">
            <button
              onClick={() => setViewMode('grid')}
              className={`touch-target px-4 py-2 rounded-full text-xs font-mono font-bold transition-all flex items-center gap-2 cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
              <span>Grid Feed</span>
            </button>

            <button
              onClick={() => setViewMode('map')}
              className={`touch-target px-4 py-2 rounded-full text-xs font-mono font-bold transition-all flex items-center gap-2 cursor-pointer ${
                viewMode === 'map'
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <MapIcon className="w-4 h-4" />
              <span>Inline Map View</span>
            </button>
          </div>

        </div>
      </section>

      {/* Filter Bar Controls */}
      <FilterBar
        selectedLocation={selectedLocation}
        selectedCategory={selectedCategory}
        selectedPriceRange={selectedPriceRange}
        selectedSort={selectedSort}
        onLocationChange={setSelectedLocation}
        onCategoryChange={setSelectedCategory}
        onPriceRangeChange={setSelectedPriceRange}
        onSortChange={setSelectedSort}
      />

      {/* Main Unified Content Area */}
      <main className="site-container py-8 flex flex-col gap-10 flex-1">
        
        {/* INLINE MAP VIEW MODE (Sheger Gebeta Category Pins) */}
        {viewMode === 'map' ? (
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: 'var(--border-subtle)' }}>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" style={{ color: 'var(--accent-gold)' }} />
                <h3 className="font-display font-bold text-xl" style={{ color: 'var(--text-primary)' }}>
                  Interactive Category Food Map
                </h3>
              </div>
              <span className="text-xs font-mono text-slate-400">
                Showing {filteredPosts.length} pinned restaurant locations
              </span>
            </div>

            {/* Dark Styled Map Box Container */}
            <div className="relative w-full h-[500px] rounded-3xl overflow-hidden border border-slate-800 bg-[#0B0F17] shadow-2xl flex items-center justify-center">
              
              {/* Map Canvas Simulated Grid with Venue Markers */}
              <div className="absolute inset-0 bg-[#0B0F17] opacity-90 bg-[radial-gradient(#1F293D_1px,transparent_1px)] [background-size:24px_24px]" />

              <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center gap-4 max-w-md bg-slate-950/90 border border-amber-500/40 rounded-3xl backdrop-blur-xl shadow-2xl">
                <MapPin className="w-10 h-10 text-amber-500 animate-bounce" />
                <h4 className="font-display font-bold text-xl text-white">Addis Ababa Food Map Pins</h4>
                <p className="text-xs text-slate-300 font-body">
                  Filtered by category ({selectedCategory || 'All Categories'}). Click any pin to open full review &amp; receipt breakdown.
                </p>

                <div className="grid grid-cols-2 gap-2 w-full pt-2">
                  {filteredPosts.map((post) => (
                    <button
                      key={post.id}
                      onClick={() => setActivePost(post)}
                      className="p-2.5 rounded-xl bg-white/10 hover:bg-amber-500/20 border border-white/15 text-left text-xs font-bold text-white transition-all flex items-center justify-between gap-1 cursor-pointer"
                    >
                      <span className="truncate">{post.restaurantName}</span>
                      <ExternalLink className="w-3 h-3 text-amber-400 shrink-0" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* GRID VIEW MODE (Combined Reviews + Short Video Reels) */
          <div className="flex flex-col gap-12">
            
            {/* 1. REELS CAROUSEL STRIP */}
            <section className="flex flex-col gap-4">
              <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: 'var(--border-subtle)' }}>
                <div className="flex items-center gap-2">
                  <Film className="w-5 h-5" style={{ color: 'var(--accent-gold)' }} />
                  <h3 className="font-display font-bold text-xl sm:text-2xl" style={{ color: 'var(--text-primary)' }}>
                    Trending Food Reels &amp; Short Videos
                  </h3>
                </div>
                <span className="text-xs font-mono font-bold text-amber-500">9:16 Vertical Clips</span>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {videoReels.map((reel) => (
                  <div
                    key={reel.id}
                    onClick={() => setActiveVideo(reel)}
                    className="group relative aspect-[9/16] w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
                  >
                    <Image
                      src={reel.thumbnail}
                      alt={reel.title}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-75 group-hover:brightness-90"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/40" />

                    <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between z-10">
                      <span className="px-2 py-0.5 rounded-full bg-black/60 text-amber-400 font-mono font-bold text-[9px]">
                        {reel.badge}
                      </span>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                        <Play className="w-4 h-4 fill-white ml-0.5" />
                      </div>
                    </div>

                    <div className="absolute bottom-2.5 left-2.5 right-2.5 z-10 flex flex-col gap-1 text-white">
                      <h4 className="font-display font-bold text-xs line-clamp-2 leading-snug text-white">
                        {reel.title}
                      </h4>
                      <span className="text-[10px] font-mono text-slate-300">{reel.restaurant}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 2. WRITTEN REVIEWS GRID */}
            <section className="flex flex-col gap-4">
              <div className="flex items-center gap-2 border-b pb-3" style={{ borderColor: 'var(--border-subtle)' }}>
                <Utensils className="w-5 h-5" style={{ color: 'var(--accent-gold)' }} />
                <h3 className="font-display font-bold text-xl sm:text-2xl" style={{ color: 'var(--text-primary)' }}>
                  Verified Written Reviews ({filteredPosts.length})
                </h3>
              </div>

              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {filteredPosts.map((post) => (
                    <ReviewCard
                      key={post.id}
                      post={post}
                      onClick={() => setActivePost(post)}
                    />
                  ))}
                </div>
              ) : (
                <div
                  className="border p-12 rounded-3xl text-center flex flex-col items-center gap-4 my-8 shadow-card"
                  style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}
                >
                  <Sparkles className="w-10 h-10" style={{ color: 'var(--accent-gold)' }} />
                  <h3 className="font-display font-bold text-xl" style={{ color: 'var(--text-primary)' }}>
                    No reviews found matching filters
                  </h3>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedLocation(null);
                      setSelectedCategory(null);
                      setSelectedPriceRange(null);
                    }}
                    className="px-6 py-3 rounded-full text-white text-xs font-bold shadow-md cursor-pointer"
                    style={{ backgroundColor: 'var(--accent-gold)' }}
                  >
                    Reset All Filters
                  </button>
                </div>
              )}
            </section>

          </div>
        )}

      </main>

      <Footer />
      <MobileBottomNav />

      {/* MODALS */}
      {activePost && (
        <PostDetailModal
          post={activePost}
          onClose={() => setActivePost(null)}
        />
      )}

      {/* Video Lightbox Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-md bg-slate-950 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl flex flex-col">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer"
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

            <div className="p-4 bg-slate-950 text-white flex flex-col gap-1">
              <span className="text-[10px] font-mono font-bold text-amber-400 uppercase">
                {activeVideo.badge} • {activeVideo.restaurant}
              </span>
              <h4 className="font-display font-bold text-sm text-white">{activeVideo.title}</h4>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
