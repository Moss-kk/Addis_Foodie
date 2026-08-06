'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Tag, 
  Film, 
  Play, 
  Utensils, 
  ChevronDown, 
  ChevronUp, 
  Map as MapIcon,
  Store
} from 'lucide-react';
import Header from '../../components/Header';
import FilterBar from '../../components/FilterBar';
import ReviewCard from '../../components/ReviewCard';
import FoodReviewsInfiniteSlider from '../../components/FoodReviewsInfiniteSlider';
import { InfiniteSlider } from '../../components/core/infinite-slider';
import FeaturedCollections, { collectionsList } from '../../components/home/FeaturedCollections';
import DishFeed, { DishItem } from '../../components/DishFeed';
import PostDetailModal from '../../components/PostDetailModal';
import VideoReelModal from '../../components/VideoReelModal';
import { recentInstagramReels } from '../../components/VideoReelsSection';
import AddisMap from '../../components/AddisMap';
import Footer from '../../components/Footer';
import MobileBottomNav from '../../components/layout/MobileBottomNav';
import { mockPosts } from '../../data/mockPosts';
import { FoodPost } from '../../types/post';

export default function ReviewsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState<string | null>(null);
  const [selectedSort, setSelectedSort] = useState<string>('newest');
  const [openNowOnly, setOpenNowOnly] = useState<boolean>(false);

  const [activePost, setActivePost] = useState<FoodPost | null>(null);
  const [showMap, setShowMap] = useState<boolean>(false);
  const [activeReelId, setActiveReelId] = useState<string | null>(null);

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
        className="w-full border-b py-6 sm:py-8 transition-colors"
        style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}
      >
        <div className="site-container flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          
          <div className="flex flex-col gap-2">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border w-fit text-xs font-label uppercase tracking-wider text-[#B8422E] bg-[#B8422E]/10 border-[#B8422E]/20 font-bold"
            >
              <Tag className="w-3.5 h-3.5" />
              <span>Official Food Inspections &amp; Reviews</span>
            </div>

            <h1 className="font-display font-medium text-3xl sm:text-5xl text-[var(--text-primary)]">
              Addis Foodies Reviews Feed
            </h1>

            <p className="text-xs sm:text-sm font-body max-w-2xl text-[var(--text-secondary)] leading-relaxed">
              Explore Rediscovered Venues first, exact culinary dishes next, followed by verified video reels across Bole, Kazanchis, Piassa, and Sarbet.
            </p>
          </div>

          {/* Hidable Interactive Food Map Toggle */}
          <button
            type="button"
            onClick={() => setShowMap(!showMap)}
            className="button-primary px-4 py-2.5 rounded-md text-xs font-label uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer text-white shadow-xs self-start sm:self-auto"
          >
            <MapIcon className="w-4 h-4 text-white" />
            <span>{showMap ? 'Hide Map' : 'Show Interactive Map'}</span>
            {showMap ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

        </div>
      </section>

      {/* ROLL-DOWN HIDABLE INTERACTIVE LEAFLET MAP */}
      <AnimatePresence>
        {showMap && (
          <motion.section
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="w-full border-b overflow-hidden bg-[var(--bg-app)] border-[var(--border-subtle)] py-4"
          >
            <div className="site-container">
              <AddisMap
                posts={filteredPosts}
                activePost={activePost}
                onSelectPost={(post) => setActivePost(post)}
              />
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
      <main className="site-container py-8 flex flex-col gap-12 flex-1">

        {/* TOP ICON-ONLY FEATURED COLLECTIONS FILTER BAR */}
        <section className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-label uppercase tracking-wider font-bold text-[var(--text-secondary)]">
              Curated Collection Quick Filters:
            </span>
            <span className="text-[10px] font-mono text-stone-400">Tap to filter</span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            {collectionsList.map((item) => {
              const Icon = item.icon;
              const isSelected = searchQuery.toLowerCase() === item.query.toLowerCase();
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSearchQuery(item.query)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-label font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shrink-0 border ${
                    isSelected
                      ? 'bg-[#1A1C1E] text-white border-[#B8422E] shadow-sm'
                      : 'bg-[var(--bg-surface)] text-[var(--text-primary)] border-[var(--border-subtle)] hover:border-[#B8422E]'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-[#B8422E]' : 'text-amber-500'}`} />
                  <span>{item.title}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* 1. FIRST: REDISCOVER VENUES FEED (Side-scrollable Horizontal Carousel on Desktop & Mobile) */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: 'var(--border-subtle)' }}>
            <div className="flex items-center gap-2">
              <Store className="w-5 h-5 text-[#B8422E]" />
              <h2 className="font-display font-medium text-xl sm:text-3xl text-[var(--text-primary)]">
                Rediscover Venues ({filteredPosts.length})
              </h2>
            </div>
            <span className="text-xs font-label text-[var(--text-secondary)] uppercase font-bold">Swipe or Scroll Horizontally ↔</span>
          </div>

          {/* Automatic Infinite Side-Scroll Review Cards */}
          <FoodReviewsInfiniteSlider
            posts={filteredPosts}
            gap={24}
            speed={40}
            isPaused={Boolean(activePost)}
            onSelectPost={(post) => setActivePost(post)}
          />
        </section>

        {/* 3. THEN BELOW IT: ALL TRENDING REELS (Rooftop Kitfo Brunch, Kitfo Fest #7, Pickles Burger, Sunday Brunch) */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: 'var(--border-subtle)' }}>
            <div className="flex items-center gap-2">
              <Film className="w-5 h-5 text-[#B8422E]" />
              <h3 className="font-display font-medium text-xl sm:text-2xl text-[var(--text-primary)]">
                Recent @addis.foodie Video Reels
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

          <InfiniteSlider gap={16} speed={35} isPaused={Boolean(activeReelId)}>
            {recentInstagramReels.map((reel) => (
              <div key={reel.id} className="shrink-0 w-[200px] sm:w-[220px] lg:w-[240px]">
                <div
                  onClick={() => setActiveReelId(reel.id)}
                  className="group relative aspect-[9/16] w-full rounded-md overflow-hidden bg-[#1A1C1E] border border-[var(--border-subtle)] shadow-xs transition-colors duration-200 cursor-pointer hover:border-[#B8422E]"
                >
                  <Image
                    src={reel.thumbnail}
                    alt={reel.dishName}
                    fill
                    sizes="(max-width: 768px) 65vw, 33vw"
                    className="object-cover transition-opacity duration-300 group-hover:opacity-90 brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent" />

                  <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between z-10">
                    <span className="px-2 py-0.5 rounded-sm bg-[#1A1C1E]/90 text-white font-mono font-bold text-[9px] uppercase border border-white/10">
                      {reel.badge}
                    </span>
                    <span className="px-2 py-0.5 rounded-sm bg-[#B8422E] text-white font-mono font-bold text-[9px] uppercase">
                      {reel.views} Views
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

      {/* Vertical TikTok/IG Full-Screen Swipe Reel Modal */}
      {activeReelId && (
        <VideoReelModal
          reels={recentInstagramReels}
          activeReelId={activeReelId}
          onClose={() => setActiveReelId(null)}
        />
      )}
    </div>
  );
}
