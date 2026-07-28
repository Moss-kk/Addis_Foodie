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
    <div
      className="flex flex-col min-h-screen transition-colors duration-300 pb-16 sm:pb-0 max-w-full overflow-x-hidden"
      style={{ backgroundColor: 'var(--bg-app)', color: 'var(--text-primary)' }}
    >
      <Header />

      <main className="flex-1 site-container py-8 sm:py-12 flex flex-col gap-8">
        
        {/* Breadcrumb */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-500 hover:text-amber-500 transition-colors"
          >
            <ArrowRight className="w-4 h-4 rotate-180" style={{ color: 'var(--accent-gold)' }} />
            <span>Back to Discovery Feed</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="flex flex-col gap-2 border-b pb-4" style={{ borderColor: 'var(--border-subtle)' }}>
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border text-xs font-mono font-bold uppercase tracking-widest w-fit"
            style={{
              backgroundColor: 'var(--accent-gold-glow)',
              borderColor: 'var(--border-subtle)',
              color: 'var(--accent-gold)',
            }}
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Interactive Spatial Discovery Engine</span>
          </div>
          <h1 className="font-display font-normal text-3xl sm:text-5xl" style={{ color: 'var(--text-primary)' }}>
            Addis Ababa Interactive Food Map
          </h1>
          <p className="text-xs sm:text-sm font-body" style={{ color: 'var(--text-secondary)' }}>
            Explore verified restaurant locations, street food spots, and itemized ETB prices across Bole, Kazanchis, Piassa, and Sarbet.
          </p>
        </div>

        {/* Filters Bar (Mastercard Pill Chips) */}
        <div
          className="flex flex-wrap items-center gap-3 p-4 rounded-2xl border shadow-card"
          style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}
        >
          <span className="text-xs font-mono font-bold flex items-center gap-1" style={{ color: 'var(--accent-gold)' }}>
            <Filter className="w-4 h-4" />
            <span>District:</span>
          </span>
          {['All', 'Bole', 'Kazanchis', 'Piassa', 'Sarbet'].map(area => (
            <button
              key={area}
              onClick={() => setSelectedArea(area)}
              className="touch-target px-4 py-1.5 rounded-full text-xs font-bold transition-all border cursor-pointer"
              style={{
                backgroundColor: selectedArea === area ? 'var(--accent-gold)' : 'var(--bg-app)',
                color: selectedArea === area ? '#ffffff' : 'var(--text-primary)',
                borderColor: selectedArea === area ? 'var(--accent-gold)' : 'var(--border-subtle)',
              }}
            >
              {area}
            </button>
          ))}
        </div>

        {/* Map Container Frame (Dark Depth matching var(--bg-app) #0B0F17) */}
        <div
          className="relative w-full h-[520px] rounded-[32px] overflow-hidden border shadow-2xl flex flex-col justify-between p-6"
          style={{ backgroundColor: '#0B0F17', borderColor: 'var(--border-subtle)' }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(#1E293B_1px,transparent_1px)] [background-size:18px_18px] opacity-40 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17]/95 via-transparent to-[#0B0F17]/40 pointer-events-none" />

          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 text-white text-xs font-mono font-bold border border-slate-700">
              <Navigation className="w-4 h-4 text-amber-400 animate-pulse" />
              <span>Showing {filteredSpots.length} verified spots</span>
            </div>
          </div>

          {/* Pin Markers Pill Buttons */}
          <div className="relative z-10 flex items-center justify-around my-auto flex-wrap gap-4">
            {filteredSpots.map(spot => (
              <button
                key={spot.id}
                onClick={() => setActiveSpot(spot)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full transition-all cursor-pointer shadow-lg border"
                style={{
                  backgroundColor: activeSpot.id === spot.id ? 'var(--accent-gold)' : 'rgba(15, 23, 42, 0.85)',
                  color: activeSpot.id === spot.id ? '#0B0F17' : '#F8FAFC',
                  borderColor: activeSpot.id === spot.id ? '#F59E0B' : 'rgba(255, 255, 255, 0.15)',
                  fontWeight: activeSpot.id === spot.id ? 800 : 600,
                  transform: activeSpot.id === spot.id ? 'scale(1.08)' : 'scale(1)',
                }}
              >
                <MapPin className={`w-4 h-4 ${activeSpot.id === spot.id ? 'text-slate-950' : 'text-amber-400'}`} />
                <span className="font-display font-bold text-xs">{spot.name}</span>
                <span className="text-[10px] font-mono opacity-80">({spot.price})</span>
              </button>
            ))}
          </div>

          {/* Active Spot Detail Strip */}
          <div className="relative z-10 bg-[#161E2E]/95 backdrop-blur-xl border border-slate-700/80 p-5 rounded-2xl text-white flex items-center justify-between gap-4 shadow-2xl">
            <div>
              <span className="text-xs font-mono text-amber-400 font-bold block">{activeSpot.rating} • {activeSpot.area}</span>
              <h3 className="font-display font-bold text-lg text-white">{activeSpot.name} ({activeSpot.dish})</h3>
              <p className="text-xs text-slate-300 font-medium">{activeSpot.coords}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-mono font-black text-lg text-amber-400">{activeSpot.price}</span>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(activeSpot.name + ' ' + activeSpot.coords)}`}
                target="_blank"
                rel="noreferrer"
                className="touch-target px-5 py-2.5 rounded-full text-slate-950 text-xs font-bold transition-all flex items-center gap-1.5 shadow-md cursor-pointer hover:scale-105"
                style={{ backgroundColor: 'var(--accent-gold)' }}
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
