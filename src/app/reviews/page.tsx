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
  Map as MapIcon,
  Layers
} from 'lucide-react';
import Header from '../../components/Header';
import FilterBar from '../../components/FilterBar';
import ReviewCard from '../../components/ReviewCard';
import DishFeed, { DishItem } from '../../components/DishFeed';
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
  const [openNowOnly, setOpenNowOnly] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'dishes' | 'venues'>('dishes');

  const [activePost, setActivePost] = useState<FoodPost | null>(null);
  const [showMap, setShowMap] = useState<boolean>(false);
  const [activeVideo, setActiveVideo] = useState<typeof videoReels[0] | null>(null);

  // Filtered Restaurant Venues
  const filteredPosts = useMemo(() => {
    return mockPosts
      .filter((post) => {
        if (selectedLocation && post.neighborhood !== selectedLocation) return false;
        if (selectedCategory && post.category !== selectedCategory) return false;
        if (openNowOnly && !post.isOpenNow) return false;
        if (selectedPriceRange) {
          if (selectedPriceRange === 'under-300' && post.price >= 300) return false;
          if (selectedPriceRange === 'under-500' && post.price >= 500) return false;
          if (selectedPriceRange === '300-700' && (post.price < 300 || post.price > 700)) return false;
          if (selectedPriceRange === '700-plus' && post.price <= 700) return false;
        }
        if (searchQuery.trim() !== '') {
          const query = searchQuery.toLowerCase().trim();
          const matchRestaurant = post.restaurantName.toLowerCase().includes(query);
          const matchLocation = post.location.toLowerCase().includes(query);
          const matchCategory = post.category.toLowerCase().includes(query);
          const matchCaption = post.caption.toLowerCase().includes(query);
          const matchItems = post.menuItems?.some(m => m.name.toLowerCase().includes(query));

          if (!matchRestaurant && !matchLocation && !matchCategory && !matchCaption && !matchItems) {
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
  }, [searchQuery, selectedLocation, selectedCategory, selectedPriceRange, selectedSort, openNowOnly]);

  // Extracted Dish Items Feed
  const extractedDishes = useMemo(() => {
    const dishes: DishItem[] = [];
    filteredPosts.forEach((post) => {
      if (post.menuItems && post.menuItems.length > 0) {
        post.menuItems.forEach((item, idx) => {
          const q = searchQuery.toLowerCase().trim();
          if (!q || item.name.toLowerCase().includes(q) || post.restaurantName.toLowerCase().includes(q) || post.category.toLowerCase().includes(q)) {
            dishes.push({
              id: `${post.id}-dish-${idx}`,
              dishName: item.name,
              price: item.price,
              restaurantName: post.restaurantName,
              neighborhood: post.neighborhood,
              location: post.location,
              rating: post.rating || '4.8',
              image: post.image,
              isOpenNow: post.isOpenNow ?? true,
              mapUrl: post.mapUrl,
            });
          }
        });
      }
    });
    return dishes;
  }, [filteredPosts, searchQuery]);

  return (
    <div
      className="flex flex-col min-h-screen transition-colors duration-300 pb-20 sm:pb-0 max-w-full overflow-x-hidden"
      style={{ backgroundColor: 'var(--bg-app)', color: 'var(--text-primary)' }}
    >
      <Header />

      {/* Page Hero Header */}
      <section
        className="w-full border-b py-8 transition-colors"
        style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}
      >
        <div className="site-container flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          
          <div className="flex flex-col gap-2">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border w-fit text-xs font-mono font-bold uppercase tracking-wider text-amber-500 bg-amber-500/10 border-amber-500/30"
            >
              <Tag className="w-3.5 h-3.5" />
              <span>Dish-First Food Engine &amp; Reviews</span>
            </div>

            <h1 className="font-display font-medium text-3xl sm:text-5xl" style={{ color: 'var(--text-primary)' }}>
              Addis Foodies Reviews &amp; Dishes
            </h1>

            <p className="text-xs sm:text-sm font-body max-w-2xl text-slate-400">
              Discover exact plates, Kitfo dishes, fasting lattes, and verified restaurant inspections across Bole, Kazanchis, Piassa, and Sarbet.
            </p>
          </div>

          {/* Roll-Down Interactive Food Map Toggle */}
          <button
            type="button"
            onClick={() => setShowMap(!showMap)}
            className="touch-target px-5 py-3 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-md border bg-amber-500/15 border-amber-500/40 text-amber-400 hover:bg-amber-500/25"
          >
            <MapIcon className="w-4 h-4 text-amber-400" />
            <span>{showMap ? 'Hide Map ▲' : 'Show Interactive Map 🗺️'}</span>
            {showMap ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

        </div>
      </section>

      {/* ROLL-DOWN HIDABLE INTERACTIVE MAP */}
      <AnimatePresence>
        {showMap && (
          <motion.section
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="w-full border-b overflow-hidden bg-slate-950 border-slate-800"
          >
            <div className="site-container py-6 flex flex-col gap-4 text-white">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-amber-400" />
                  <h3 className="font-display font-medium text-xl text-white">
                    Addis Ababa Interactive Food Map
                  </h3>
                </div>
                <span className="text-xs font-mono text-slate-400">
                  Showing {filteredPosts.length} pinned spots
                </span>
              </div>

              <div className="relative w-full h-[380px] rounded-2xl overflow-hidden border border-white/10 bg-slate-900 flex items-center justify-center p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 w-full h-full overflow-y-auto no-scrollbar">
                  {filteredPosts.map((post) => (
                    <div
                      key={post.id}
                      onClick={() => setActivePost(post)}
                      className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-amber-500/50 cursor-pointer transition-all flex flex-col justify-between"
                    >
                      <div className="flex flex-col">
                        <span className="font-bold text-sm text-white">{post.restaurantName}</span>
                        <span className="text-xs text-slate-400">{post.location}</span>
                      </div>
                      <div className="flex items-center justify-between pt-2 mt-2 border-t border-white/10 text-xs font-mono">
                        <span className="text-amber-400 font-bold">{post.priceFormatted}</span>
                        <span className="text-emerald-400">{post.rating} ★</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Sticky Dish-First FilterBar */}
      <FilterBar
        selectedLocation={selectedLocation}
        selectedCategory={selectedCategory}
        selectedPriceRange={selectedPriceRange}
        selectedSort={selectedSort}
        searchQuery={searchQuery}
        openNowOnly={openNowOnly}
        onLocationChange={setSelectedLocation}
        onCategoryChange={setSelectedCategory}
        onPriceRangeChange={setSelectedPriceRange}
        onSortChange={setSelectedSort}
        onSearchQueryChange={setSearchQuery}
        onToggleOpenNow={() => setOpenNowOnly(!openNowOnly)}
      />

      {/* Main Content Feed Area */}
      <main className="site-container py-8 flex flex-col gap-10 flex-1">

        {/* 1. REELS CAROUSEL STRIP */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: 'var(--border-subtle)' }}>
            <div className="flex items-center gap-2">
              <Film className="w-5 h-5 text-amber-500" />
              <h3 className="font-display font-medium text-xl sm:text-2xl" style={{ color: 'var(--text-primary)' }}>
                Trending Food Reels &amp; Short Videos
              </h3>
            </div>
            <span className="text-xs font-mono font-bold text-amber-400">9:16 Vertical Clips</span>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible scrollbar-none">
            {videoReels.map((reel) => (
              <div key={reel.id} className="shrink-0 w-[60vw] sm:w-auto snap-center">
                <div
                  onClick={() => setActiveVideo(reel)}
                  className="group relative aspect-[9/16] w-full rounded-2xl overflow-hidden bg-slate-900 border border-[var(--border-subtle)] shadow-md transition-all duration-300 cursor-pointer hover:-translate-y-1"
                >
                  <Image
                    src={reel.thumbnail}
                    alt={reel.title}
                    fill
                    sizes="(max-width: 768px) 60vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-85 group-hover:brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between z-10">
                    <span className="px-2 py-0.5 rounded-full bg-black/80 border border-white/20 text-white font-mono font-bold text-[9px]">
                      {reel.badge}
                    </span>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="w-12 h-12 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                  </div>

                  <div className="absolute bottom-2.5 left-2.5 right-2.5 z-10 flex flex-col gap-1 text-white">
                    <h4 className="font-bold text-xs line-clamp-2 leading-snug text-white">
                      {reel.title}
                    </h4>
                    <span className="text-[10px] font-mono text-slate-300">{reel.restaurant}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. DISH-FIRST vs RESTAURANT VENUES FEED TOGGLE */}
        <section className="flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b pb-4 gap-4" style={{ borderColor: 'var(--border-subtle)' }}>
            <div className="flex items-center gap-2">
              <Utensils className="w-5 h-5 text-amber-500" />
              <h3 className="font-display font-medium text-xl sm:text-2xl" style={{ color: 'var(--text-primary)' }}>
                {viewMode === 'dishes' ? `Dish Discovery Feed (${extractedDishes.length})` : `Restaurant Venues (${filteredPosts.length})`}
              </h3>
            </div>

            {/* Switch View Mode Pill */}
            <div className="flex items-center gap-1.5 p-1 rounded-full bg-white/5 border border-white/10 shrink-0 self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setViewMode('dishes')}
                className={`touch-target px-4 py-1.5 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${
                  viewMode === 'dishes'
                    ? 'bg-amber-500 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                🥩 Exact Dishes ({extractedDishes.length})
              </button>
              <button
                type="button"
                onClick={() => setViewMode('venues')}
                className={`touch-target px-4 py-1.5 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${
                  viewMode === 'venues'
                    ? 'bg-amber-500 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                🏬 Venues ({filteredPosts.length})
              </button>
            </div>
          </div>

          {/* Render Feed Based on View Mode */}
          {viewMode === 'dishes' ? (
            <DishFeed
              dishes={extractedDishes}
              onSelectDish={(dish) => {
                const matchedPost = mockPosts.find(p => p.restaurantName === dish.restaurantName);
                if (matchedPost) setActivePost(matchedPost);
              }}
            />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <ReviewCard
                  key={post.id}
                  post={post}
                  onClick={() => setActivePost(post)}
                />
              ))}
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
          <div className="relative w-full max-w-md bg-slate-900 rounded-3xl border border-white/10 overflow-hidden shadow-2xl flex flex-col">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-red-500 transition-colors cursor-pointer"
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
              <h4 className="font-bold text-sm text-white">{activeVideo.title}</h4>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
