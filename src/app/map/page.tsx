'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  Compass, 
  MapPin as MapPinIcon, 
  ArrowRight, 
  Star,
  Map as MapIcon,
  List as ListIcon
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
const categoryFilters = ['All Categories', 'Burgers', 'Kitfo', 'Traditional', 'Fasting', 'Coffee'];

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
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider mb-2 border text-amber-400 bg-amber-500/10 border-amber-500/30"
            >
              <Compass className="w-4 h-4 text-amber-400" />
              <span>Split-Screen Airbnb-Style Map</span>
            </div>
            <h1 className="font-display font-normal text-3xl sm:text-5xl" style={{ color: 'var(--text-primary)' }}>
              Addis Ababa Food Map
            </h1>
            <p className="text-xs sm:text-sm font-body pt-1 text-slate-400">
              Interactive split layout: browse scrollable restaurant cards on the left, live pinned map on the right.
            </p>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs text-amber-400 font-bold border border-amber-500/30 px-4 py-2 rounded-full bg-amber-500/10">
            <MapPinIcon className="w-4 h-4 text-amber-400" />
            <span>{filteredSpots.length} Pinned Venues</span>
          </div>
        </div>

        {/* Filter Chip Strip */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            <span className="text-xs font-mono font-bold uppercase text-slate-400 shrink-0 mr-1">Locations:</span>
            {neighborhoodFilters.map((loc) => (
              <button
                key={loc}
                type="button"
                onClick={() => setSelectedNeighborhood(loc)}
                className={`touch-target px-3.5 py-1.5 rounded-full text-xs font-mono font-bold transition-all shrink-0 cursor-pointer border ${
                  selectedNeighborhood === loc
                    ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-md'
                    : 'bg-white/5 text-slate-300 border-white/10 hover:border-amber-500/40'
                }`}
              >
                {loc}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            <span className="text-xs font-mono font-bold uppercase text-slate-400 shrink-0 mr-1">Category:</span>
            {categoryFilters.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`touch-target px-3.5 py-1.5 rounded-full text-xs font-mono font-bold transition-all shrink-0 cursor-pointer border ${
                  selectedCategory === cat
                    ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-md'
                    : 'bg-white/5 text-slate-300 border-white/10 hover:border-amber-500/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* SPLIT-SCREEN 60/40 CONTAINER (DESKTOP) + MOBILE TOGGLE */}
        <div className="relative w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* LEFT 60%: Scrollable List of Interactive Cards (Visible on desktop or when mobileView === 'list') */}
          <div className={`lg:col-span-7 flex flex-col gap-4 ${mobileView === 'map' ? 'hidden lg:flex' : 'flex'}`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredSpots.map((spot) => (
                <div
                  key={spot.id}
                  onMouseEnter={() => setActiveSpot(spot)}
                  className={`transition-all duration-300 ${
                    activeSpot.id === spot.id ? 'ring-2 ring-amber-500 rounded-2xl scale-[1.02]' : ''
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

          {/* RIGHT 40%: Sticky Map View (Visible on desktop or when mobileView === 'map') */}
          <div className={`lg:col-span-5 lg:sticky lg:top-24 h-[550px] rounded-3xl overflow-hidden border shadow-2xl relative flex flex-col justify-end p-4 ${mobileView === 'list' ? 'hidden lg:flex' : 'flex'}`} style={{ backgroundColor: 'var(--bg-app)', borderColor: 'var(--border-subtle)' }}>
            <AddisMap posts={filteredSpots} activePost={activeSpot} onSelectPost={setActiveSpot} />

            {/* Active Spot Floating Card */}
            {activeSpot && (
              <div className="relative z-10 bg-slate-950/95 backdrop-blur-xl border border-slate-800 p-4 rounded-2xl text-white flex flex-col gap-3 shadow-2xl">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-500 text-slate-950 font-mono font-bold text-[10px] uppercase">
                    {activeSpot.category}
                  </span>
                  <span className="text-amber-400 font-mono font-bold text-xs flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-current text-amber-400" />
                    <span>{activeSpot.rating} ★</span>
                  </span>
                </div>

                <div className="flex flex-col">
                  <h3 className="font-bold text-base text-white">{activeSpot.restaurantName}</h3>
                  <p className="text-xs text-slate-300 font-body">{activeSpot.location}</p>
                </div>

                <div className="flex items-center justify-between border-t border-slate-800 pt-2 text-xs font-mono">
                  <span className="text-emerald-400 font-bold">{activeSpot.priceFormatted}</span>
                  <button
                    type="button"
                    onClick={() => setModalPost(activeSpot)}
                    className="touch-target px-4 py-1.5 rounded-full bg-amber-500 text-slate-950 font-extrabold text-[11px] uppercase tracking-wider transition-all hover:scale-105 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Inspect Spot</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>

      </main>

      {/* MOBILE FLOATING TOGGLE BUTTON (Airbnb Style locked above bottom nav) */}
      <div className="lg:hidden fixed bottom-16 left-0 right-0 z-40 flex justify-center pointer-events-none pb-2">
        <button
          type="button"
          onClick={() => setMobileView(mobileView === 'list' ? 'map' : 'list')}
          className="pointer-events-auto touch-target px-5 py-2.5 rounded-full bg-slate-950 text-white border border-amber-500/50 shadow-2xl font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-transform active:scale-95"
        >
          {mobileView === 'list' ? (
            <>
              <MapIcon className="w-4 h-4 text-amber-400" />
              <span>🗺️ Map View</span>
            </>
          ) : (
            <>
              <ListIcon className="w-4 h-4 text-amber-400" />
              <span>📋 List View</span>
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
