'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Tag, 
  Sparkles, 
  MapPin, 
  Film, 
  Play, 
  X,
  ExternalLink,
  Utensils,
  ChevronDown,
  ChevronUp,
  Map as MapIcon
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
  
  // Hidable / Roll-Down Interactive Food Map State
  const [showMap, setShowMap] = useState<boolean>(false);
  
  // Active Video Lightbox State
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
        className="w-full border-b py-8 transition-colors"
        style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}
      >
        <div className="site-container flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          
          <div className="flex flex-col gap-2">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border w-fit text-xs font-label uppercase tracking-widest text-[#B8422E]"
              style={{
                backgroundColor: 'var(--bg-app)',
                borderColor: 'var(--border-subtle)',
              }}
            >
              <Tag className="w-3.5 h-3.5" />
              <span>Full Reviews Archive &amp; Reels Feed</span>
            </div>

            <h1 className="font-display font-medium text-3xl sm:text-5xl" style={{ color: 'var(--text-primary)' }}>
              Addis Foodies Reviews &amp; Reels
            </h1>

            <p className="text-xs sm:text-sm font-body max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
              Explore verified food inspections, video reels, and itemized ETB price audits across Bole, Kazanchis, Piassa, and Sarbet.
            </p>
          </div>

          {/* Roll-Down Hidable Food Map Toggle Button */}
          <button
            onClick={() => setShowMap(!showMap)}
            className="touch-target px-5 py-3 rounded-md text-xs font-label uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-xs border"
            style={{
              backgroundColor: showMap ? '#1A1C1E' : 'var(--bg-app)',
              color: showMap ? '#FFFFFF' : 'var(--text-primary)',
              borderColor: 'var(--border-subtle)',
            }}
          >
            <MapIcon className="w-4 h-4 text-[#B8422E]" />
            <span>{showMap ? 'Hide Food Map ▲' : 'Show Interactive Food Map 🗺️'}</span>
            {showMap ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

        </div>
      </section>

      {/* ROLL-DOWN HIDABLE INTERACTIVE FOOD MAP */}
      <AnimatePresence>
        {showMap && (
          <motion.section
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="w-full border-b overflow-hidden"
            style={{ backgroundColor: '#1A1C1E', borderColor: 'var(--border-subtle)' }}
          >
            <div className="site-container py-6 flex flex-col gap-4 text-white">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#B8422E]" />
                  <h3 className="font-display font-medium text-xl text-white">
                    Roll-Down Category Food Map
                  </h3>
                </div>
                <span className="text-xs font-label text-slate-400">
                  Showing {filteredPosts.length} pinned venues
                </span>
              </div>

              {/* Map Box */}
              <div className="relative w-full h-[420px] rounded-md overflow-hidden border border-white/10 bg-[#121416] flex items-center justify-center">
                <div className="absolute inset-0 bg-[#121416] opacity-80 bg-[radial-gradient(#2E3236_1px,transparent_1px)] [background-size:24px_24px]" />

                <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center gap-4 max-w-md bg-[#1A1C1E]/95 border border-white/15 rounded-md shadow-xl backdrop-blur-md">
                  <MapPin className="w-8 h-8 text-[#B8422E] animate-bounce" />
                  <h4 className="font-display font-medium text-lg text-white">Addis Ababa Pinned Venues</h4>
                  <p className="text-xs text-slate-300 font-body">
                    Filtered by {selectedCategory || 'All Categories'}. Click any location pin below to open complete receipt breakdown.
                  </p>

                  <div className="grid grid-cols-2 gap-2 w-full pt-2 max-h-48 overflow-y-auto no-scrollbar">
                    {filteredPosts.map((post) => (
                      <button
                        key={post.id}
                        onClick={() => setActivePost(post)}
                        className="p-2 rounded-sm bg-white/10 hover:bg-[#B8422E]/30 border border-white/15 text-left text-xs font-label text-white transition-all flex items-center justify-between gap-1 cursor-pointer"
                      >
                        <span className="truncate">{post.restaurantName}</span>
                        <ExternalLink className="w-3 h-3 text-[#B8422E] shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

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
        
        {/* 1. REELS CAROUSEL STRIP */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: 'var(--border-subtle)' }}>
            <div className="flex items-center gap-2">
              <Film className="w-5 h-5 text-[#B8422E]" />
              <h3 className="font-display font-medium text-xl sm:text-2xl" style={{ color: 'var(--text-primary)' }}>
                Trending Food Reels &amp; Short Videos
              </h3>
            </div>
            <span className="text-xs font-label text-[#B8422E]">9:16 Vertical Clips</span>
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
        </section>

        {/* 2. FULL WRITTEN REVIEWS GRID */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center gap-2 border-b pb-3" style={{ borderColor: 'var(--border-subtle)' }}>
            <Utensils className="w-5 h-5 text-[#B8422E]" />
            <h3 className="font-display font-medium text-xl sm:text-2xl" style={{ color: 'var(--text-primary)' }}>
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
              className="border p-12 rounded-md text-center flex flex-col items-center gap-4 my-8"
              style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}
            >
              <Sparkles className="w-10 h-10 text-[#B8422E]" />
              <h3 className="font-display font-medium text-xl" style={{ color: 'var(--text-primary)' }}>
                No reviews found matching filters
              </h3>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedLocation(null);
                  setSelectedCategory(null);
                  setSelectedPriceRange(null);
                }}
                className="button-primary px-6 py-2.5 text-xs rounded-md shadow-xs cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </section>

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
  );
}
