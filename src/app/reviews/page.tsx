'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Tag, Sparkles } from 'lucide-react';
import Header from '../../components/Header';
import FilterBar from '../../components/FilterBar';
import ReviewCard from '../../components/ReviewCard';
import PostDetailModal from '../../components/PostDetailModal';
import Footer from '../../components/Footer';
import MobileBottomNav from '../../components/layout/MobileBottomNav';
import { useLanguage } from '../../context/LanguageContext';
import { mockPosts } from '../../data/mockPosts';
import { FoodPost } from '../../types/post';

export default function ReviewsPage() {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState<string | null>(null);
  const [selectedSort, setSelectedSort] = useState<string>('newest');
  const [activePost, setActivePost] = useState<FoodPost | null>(null);

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
    <div className="flex flex-col min-h-screen bg-[#0B0F17] text-[#F8FAFC] transition-colors duration-300 pb-16 sm:pb-0 max-w-full overflow-x-hidden">
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      {/* Page Header */}
      <section className="w-full bg-[#0B0F17] border-b border-[#1F293D] py-10 sm:py-14 transition-colors">
        <div className="site-container flex flex-col gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161E2E] border border-[#F59E0B]/30 w-fit text-xs font-mono font-bold uppercase tracking-widest text-[#F59E0B]">
            <Tag className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>Curated Review Archive</span>
          </div>

          <h1 className="font-display font-black text-3xl sm:text-5xl text-[#F8FAFC]">
            Foodie Reviews &amp; Itemized Price Audits
          </h1>

          <p className="text-sm text-[#94A3B8] font-medium max-w-2xl">
            Explore verified restaurant reviews, street food gems, and price breakdowns across Bole, Kazanchis, Piassa, and Sarbet.
          </p>
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

      {/* Main Review Grid */}
      <main className="site-container py-10 flex flex-col gap-8 flex-1">
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
          <div className="bg-[#161E2E] border border-[#1F293D] p-12 rounded-3xl text-center flex flex-col items-center gap-4 my-8 shadow-xs">
            <Sparkles className="w-10 h-10 text-[#F59E0B]" />
            <h3 className="font-display font-black text-xl text-[#F8FAFC]">No reviews found matching your search</h3>
            <p className="text-xs text-[#94A3B8]">Try clearing filters or searching for different food items</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedLocation(null);
                setSelectedCategory(null);
                setSelectedPriceRange(null);
              }}
              className="px-5 py-2.5 rounded-xl bg-[#EF4444] text-white text-xs font-bold shadow-md hover:bg-[#DC2626]"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </main>

      <Footer />
      <MobileBottomNav />

      {activePost && (
        <PostDetailModal
          post={activePost}
          onClose={() => setActivePost(null)}
        />
      )}
    </div>
  );
}
