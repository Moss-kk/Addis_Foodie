'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  Compass, 
  MapPin as MapPinIcon, 
  ArrowRight, 
  Star,
  Map as MapIcon,
  List as ListIcon,
  Utensils,
  Soup,
  Sandwich,
  Coffee,
  Flame
} from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MobileBottomNav from '../../components/layout/MobileBottomNav';
import PostDetailModal from '../../components/PostDetailModal';
import ReviewCard from '../../components/ReviewCard';
import AddisMap from '../../components/AddisMap';
import { mockPosts } from '../../data/mockPosts';
import { FoodPost } from '../../types/post';

const neighborhoodFilters = ['All Locations', 'Bole', 'Kazanchis', 'Sarbet', 'Piassa'];
const categoryFilters = ['All Categories', 'Burgers', 'Traditional', 'Fasting', 'Coffee', 'Fine Dining'];

export default function MapPage() {
  const [selectedNeighborhood, setSelectedNeighborhood] = useState('All Locations');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [activeSpot, setActiveSpot] = useState<FoodPost>(mockPosts[0]);
  const [modalPost, setModalPost] = useState<FoodPost | null>(null);
  
  // Mobile Floating Toggle State ('list' or 'map')
  const [mobileView, setMobileView] = useState<'list' | 'map'>('list');

  const filteredSpots = useMemo(() => {
    return mockPosts.filter((spot) => {
      if (selectedNeighborhood !== 'All Locations' && spot.neighborhood !== selectedNeighborhood) {
        return false;
      }
      if (selectedCategory !== 'All Categories' && spot.category !== selectedCategory) {
        return false;
      }
      return true;
    });
  }, [selectedNeighborhood, selectedCategory]);

  return (
    <div
      className="flex flex-col min-h-screen transition-colors duration-300 pb-20 sm:pb-0 max-w-full overflow-x-hidden"
      style={{ backgroundColor: 'var(--bg-app)', color: 'var(--text-primary)' }}
    >
      <Header />

      <main className="flex-1 site-container py-6 flex flex-col gap-6">
        
        {/* Page Title & Filter Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b pb-4 gap-4" style={{ borderColor: 'var(--border-subtle)' }}>
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-sm text-xs font-label uppercase tracking-wider mb-2 border text-[#B8422E] bg-[#B8422E]/10 border-[#B8422E]/20 font-bold"
            >
              <Compass className="w-4 h-4 text-[#B8422E]" />
              <span>Split-Screen Interactive Map</span>
            </div>
            <h1 className="font-display font-medium text-3xl sm:text-5xl text-[var(--text-primary)]">
              Addis Ababa Food Map
            </h1>
            <p className="text-xs sm:text-sm font-body pt-1 text-[var(--text-secondary)] leading-relaxed">
              Interactive split layout: browse scrollable restaurant cards on the left, live pinned map with GPS Near Me on the right.
            </p>
          </div>

          <div className="flex items-center gap-2 font-label text-xs text-white font-bold border border-white/10 px-3.5 py-2 rounded-sm bg-[#1A1C1E]">
            <MapPinIcon className="w-4 h-4 text-[#B8422E]" />
            <span>{filteredSpots.length} Pinned Venues</span>
          </div>
        </div>

        {/* Filter Chip Strip */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            <span className="text-xs font-label uppercase text-[var(--text-secondary)] shrink-0 mr-1">Locations:</span>
            {neighborhoodFilters.map((loc) => (
              <button
                key={loc}
                type="button"
                onClick={() => setSelectedNeighborhood(loc)}
                className={`px-3 py-1.5 rounded-sm text-xs font-label font-bold uppercase transition-all shrink-0 cursor-pointer border ${
                  selectedNeighborhood === loc
                    ? 'bg-[#1A1C1E] text-white border-[#1A1C1E]'
                    : 'bg-[var(--bg-surface)] text-[var(--text-primary)] border-[var(--border-subtle)] hover:border-[#B8422E]'
                }`}
              >
                {loc}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            <span className="text-xs font-label uppercase text-[var(--text-secondary)] shrink-0 mr-1">Category:</span>
            {categoryFilters.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-sm text-xs font-label font-bold uppercase transition-all shrink-0 cursor-pointer border ${
                  selectedCategory === cat
                    ? 'bg-[#1A1C1E] text-white border-[#1A1C1E]'
                    : 'bg-[var(--bg-surface)] text-[var(--text-primary)] border-[var(--border-subtle)] hover:border-[#B8422E]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* SPLIT-SCREEN 60/40 CONTAINER (DESKTOP) + MOBILE TOGGLE */}
        <div className="relative w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* LEFT 60%: Scrollable List of Interactive Cards */}
          <div className={`lg:col-span-7 flex flex-col gap-4 ${mobileView === 'map' ? 'hidden lg:flex' : 'flex'}`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredSpots.map((spot) => (
                <div
                  key={spot.id}
                  onMouseEnter={() => setActiveSpot(spot)}
                  className={`transition-all duration-300 ${
                    activeSpot?.id === spot.id ? 'ring-2 ring-[#B8422E] rounded-lg' : ''
                  }`}
                >
                  <ReviewCard
                    post={spot}
                    onClick={() => setModalPost(spot)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT 40%: Sticky Map View */}
          <div className={`lg:col-span-5 lg:sticky lg:top-20 h-[550px] rounded-lg overflow-hidden border shadow-sm relative flex flex-col justify-end ${mobileView === 'list' ? 'hidden lg:flex' : 'flex'}`} style={{ backgroundColor: 'var(--bg-app)', borderColor: 'var(--border-subtle)' }}>
            <AddisMap posts={filteredSpots} activePost={activeSpot} onSelectPost={setActiveSpot} />
          </div>

        </div>

      </main>

      {/* MOBILE FLOATING TOGGLE BUTTON */}
      <div className="lg:hidden fixed bottom-16 left-0 right-0 z-40 flex justify-center pointer-events-none pb-2">
        <button
          type="button"
          onClick={() => setMobileView(mobileView === 'list' ? 'map' : 'list')}
          className="pointer-events-auto button-primary px-5 py-2.5 rounded-full text-white font-label text-xs uppercase tracking-wider shadow-lg flex items-center gap-2"
        >
          {mobileView === 'list' ? (
            <>
              <MapIcon className="w-4 h-4 text-white" />
              <span>Map View</span>
            </>
          ) : (
            <>
              <ListIcon className="w-4 h-4 text-white" />
              <span>List View</span>
            </>
          )}
        </button>
      </div>

      <Footer />
      <MobileBottomNav />

      {modalPost && (
        <PostDetailModal
          post={modalPost}
          onClose={() => setModalPost(null)}
        />
      )}
    </div>
  );
}
