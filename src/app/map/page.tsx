'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  Compass, 
  MapPin as MapPinIcon, 
  ArrowRight, 
  Utensils, 
  Star,
  Receipt
} from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MobileBottomNav from '../../components/layout/MobileBottomNav';
import PostDetailModal from '../../components/PostDetailModal';
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
      className="flex flex-col min-h-screen transition-colors duration-300 pb-16 sm:pb-0 max-w-full overflow-x-hidden"
      style={{ backgroundColor: 'var(--bg-app)', color: 'var(--text-primary)' }}
    >
      <Header />

      <main className="flex-1 site-container py-6 sm:py-10 flex flex-col gap-6">
        
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b pb-4 gap-4" style={{ borderColor: 'var(--border-subtle)' }}>
          <div>
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider mb-2 border"
              style={{
                backgroundColor: 'var(--accent-gold-glow)',
                borderColor: 'var(--border-subtle)',
                color: 'var(--accent-gold)',
              }}
            >
              <Compass className="w-4 h-4" />
              <span>Interactive Culinary Map</span>
            </div>
            <h1 className="font-display font-normal text-3xl sm:text-5xl" style={{ color: 'var(--text-primary)' }}>
              Addis Ababa Food Map
            </h1>
            <p className="text-xs sm:text-sm font-body pt-1" style={{ color: 'var(--text-secondary)' }}>
              Explore verified restaurant spots, Kitfo hubs, and cafes pinned by location.
            </p>
          </div>

          {/* Quick Stats Pill */}
          <div className="flex items-center gap-3 font-mono text-xs text-amber-500 font-bold border px-4 py-2 rounded-full" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}>
            <MapPinIcon className="w-4 h-4" />
            <span>{filteredSpots.length} Pinned Dining Spots</span>
          </div>
        </div>

        {/* Category & Neighborhood Filter Bar */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            <span className="text-xs font-mono font-bold uppercase text-slate-400 shrink-0 mr-1">Locations:</span>
            {neighborhoodFilters.map((loc) => (
              <button
                key={loc}
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

        {/* Map Container Frame (Void Black Floor matching var(--bg-app) #000000) */}
        <div
          className="relative w-full h-[550px] rounded-3xl overflow-hidden border shadow-2xl flex flex-col justify-end p-4 sm:p-6"
          style={{ backgroundColor: 'var(--bg-app)', borderColor: 'var(--border-subtle)' }}
        >
          <AddisMap posts={filteredSpots} activePost={activeSpot} onSelectPost={setActiveSpot} />

          {/* Active Spot Floating Panel */}
          {activeSpot && (
            <div className="relative z-10 bg-slate-950/95 backdrop-blur-xl border border-slate-800 p-5 rounded-2xl text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-2xl max-w-xl">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-500 text-slate-950 font-mono font-bold text-[10px] uppercase">
                    {activeSpot.category}
                  </span>
                  <span className="text-amber-400 font-mono font-bold text-xs flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-current text-amber-400" />
                    <span>{activeSpot.rating} ★</span>
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg text-white">{activeSpot.restaurantName}</h3>
                <p className="text-xs text-slate-300 font-body">{activeSpot.location}</p>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <div className="flex flex-col text-right hidden sm:flex">
                  <span className="text-[10px] font-mono text-slate-400 uppercase">AVG PRICE</span>
                  <span className="text-sm font-mono font-bold text-amber-400">{activeSpot.priceFormatted}</span>
                </div>

                <button
                  onClick={() => setModalPost(activeSpot)}
                  className="touch-target w-full sm:w-auto px-5 py-2.5 rounded-full text-slate-950 font-extrabold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer hover:scale-105"
                  style={{ backgroundColor: 'var(--accent-gold)' }}
                >
                  <span>View Review</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>

      </main>

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
