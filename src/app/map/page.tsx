'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MapPin, Navigation, ArrowRight, ExternalLink, Filter } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MobileBottomNav from '../../components/layout/MobileBottomNav';

const allMapSpots = [
  { id: '1', name: 'Habesha 2000', dish: 'Kitfo Special & Ayib', area: 'Bole', category: 'Traditional', price: '450 ETB', rating: '4.8 ⭐', coords: 'Bole, Edna Mall' },
  { id: '2', name: 'Kakur Traditional', dish: 'Special Gurage Kitfo', area: 'Piassa', category: 'Traditional', price: '520 ETB', rating: '4.9 ⭐', coords: 'Piassa, Tewdros Sq' },
  { id: '3', name: 'Yod Abyssinia', dish: 'Tibs Firfir Platter', area: 'Kazanchis', category: 'Traditional', price: '380 ETB', rating: '4.7 ⭐', coords: 'Kazanchis' },
  { id: '4', name: 'Tomoca Coffee', dish: 'Ethiopian Macchiato', area: 'Bole', category: 'Coffee', price: '120 ETB', rating: '4.9 ⭐', coords: 'Atlas' },
  { id: '5', name: 'Burger House', dish: 'Flame Beef Burger', area: 'Sarbet', category: 'Burgers', price: '320 ETB', rating: '4.6 ⭐', coords: 'Sarbet Golf Club' },
  { id: '6', name: 'Kategna Restaurant', dish: 'Beyaynetu Fasting Platter', area: 'Bole', category: 'Fasting', price: '280 ETB', rating: '4.8 ⭐', coords: 'Bole Medhaniallem' },
];

export default function MapPage() {
  const [selectedArea, setSelectedArea] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeSpot, setActiveSpot] = useState(allMapSpots[0]);

  const filteredSpots = allMapSpots.filter(spot => {
    if (selectedArea !== 'All' && spot.area !== selectedArea) return false;
    if (selectedCategory !== 'All' && spot.category !== selectedCategory) return false;
    return true;
  });

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5] dark:bg-[#120907] text-zinc-900 dark:text-[#FFF8F6] transition-colors duration-300 pb-16 sm:pb-0 max-w-full overflow-x-hidden">
      <Header />

      <main className="flex-1 site-container py-8 sm:py-12 flex flex-col gap-8">
        
        {/* Breadcrumb */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-stone-500 hover:text-[#E53935] transition-colors"
          >
            <ArrowRight className="w-4 h-4 rotate-180 text-[#E53935]" />
            <span>Back to Digital Headquarters</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="flex flex-col gap-2 border-b border-stone-200 dark:border-stone-800 pb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-xs font-mono font-bold uppercase tracking-widest text-[#10B981] w-fit">
            <MapPin className="w-3.5 h-3.5" />
            <span>Interactive Spatial Discovery Engine</span>
          </div>
          <h1 className="font-display font-black text-3xl sm:text-5xl text-zinc-950 dark:text-white">
            Addis Ababa Interactive Food Map
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-medium">
            Explore verified restaurant locations, street food spots, and itemized ETB prices across Bole, Kazanchis, Piassa, and Sarbet.
          </p>
        </div>

        {/* Filters Bar */}
        <div className="flex flex-wrap items-center gap-3 bg-white dark:bg-[#161E2E] p-4 rounded-2xl border border-stone-200/80 dark:border-stone-800 shadow-xs">
          <span className="text-xs font-mono font-bold text-[#E53935] dark:text-[#FF8C00] flex items-center gap-1">
            <Filter className="w-4 h-4" />
            <span>District:</span>
          </span>
          {['All', 'Bole', 'Kazanchis', 'Piassa', 'Sarbet'].map(area => (
            <button
              key={area}
              onClick={() => setSelectedArea(area)}
              className={`touch-target px-3.5 py-1.5 rounded-full text-xs font-bold transition-all border cursor-pointer ${
                selectedArea === area
                  ? 'bg-[#E53935] text-white border-[#E53935] font-black'
                  : 'bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 border-stone-200 dark:border-stone-700 hover:border-[#E53935]'
              }`}
            >
              {area}
            </button>
          ))}
        </div>

        {/* Map Container Frame */}
        <div className="relative w-full h-[500px] rounded-3xl overflow-hidden bg-zinc-950 border border-stone-200 dark:border-stone-800 shadow-2xl flex flex-col justify-between p-6">
          <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30 pointer-events-none" />

          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/80 text-white text-xs font-mono font-bold border border-white/10">
              <Navigation className="w-4 h-4 text-[#FF8C00] animate-pulse" />
              <span>Showing {filteredSpots.length} verified spots</span>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-around my-auto flex-wrap gap-4">
            {filteredSpots.map(spot => (
              <button
                key={spot.id}
                onClick={() => setActiveSpot(spot)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl transition-all cursor-pointer shadow-lg border ${
                  activeSpot.id === spot.id
                    ? 'bg-[#E53935] text-white border-amber-300 scale-110 font-black'
                    : 'bg-black/80 backdrop-blur-md text-stone-200 border-white/20 hover:border-[#E53935]'
                }`}
              >
                <MapPin className={`w-4 h-4 ${activeSpot.id === spot.id ? 'text-amber-200' : 'text-[#FF8C00]'}`} />
                <span className="font-display font-bold text-xs">{spot.name}</span>
                <span className="text-[10px] font-mono opacity-80">({spot.price})</span>
              </button>
            ))}
          </div>

          <div className="relative z-10 bg-[#111827]/95 backdrop-blur-xl border border-white/10 p-5 rounded-2xl text-white flex items-center justify-between gap-4 shadow-2xl">
            <div>
              <span className="text-xs font-mono text-amber-300 font-bold block">{activeSpot.rating} • {activeSpot.area}</span>
              <h3 className="font-display font-black text-lg text-white">{activeSpot.name} ({activeSpot.dish})</h3>
              <p className="text-xs text-stone-300 font-medium">{activeSpot.coords}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-mono font-black text-lg text-[#E53935]">{activeSpot.price}</span>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(activeSpot.name + ' ' + activeSpot.coords)}`}
                target="_blank"
                rel="noreferrer"
                className="touch-target px-4 py-2.5 rounded-xl bg-[#E53935] hover:bg-[#B71C1C] text-white text-xs font-bold transition-colors flex items-center gap-1.5 shadow-md"
              >
                <span>Navigate</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </main>

      <Footer />
      <MobileBottomNav />
    </div>
  );
}
