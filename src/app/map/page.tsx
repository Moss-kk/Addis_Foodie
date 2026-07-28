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
    <div className="flex flex-col min-h-screen bg-[#0B0F17] text-[#F8FAFC] transition-colors duration-300 pb-16 sm:pb-0 max-w-full overflow-x-hidden">
      <Header />

      <main className="flex-1 site-container py-8 sm:py-12 flex flex-col gap-8">
        
        {/* Breadcrumb */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#94A3B8] hover:text-[#F59E0B] transition-colors"
          >
            <ArrowRight className="w-4 h-4 rotate-180 text-[#F59E0B]" />
            <span>Back to Digital Headquarters</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="flex flex-col gap-2 border-b border-[#1F293D] pb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161E2E] border border-[#F59E0B]/30 text-xs font-mono font-bold uppercase tracking-widest text-[#F59E0B] w-fit">
            <MapPin className="w-3.5 h-3.5" />
            <span>Interactive Spatial Discovery Engine</span>
          </div>
          <h1 className="font-display font-black text-3xl sm:text-5xl text-[#F8FAFC]">
            Addis Ababa Interactive Food Map
          </h1>
          <p className="text-xs sm:text-sm text-[#94A3B8] font-medium">
            Explore verified restaurant locations, street food spots, and itemized ETB prices across Bole, Kazanchis, Piassa, and Sarbet.
          </p>
        </div>

        {/* Filters Bar */}
        <div className="flex flex-wrap items-center gap-3 bg-[#161E2E] p-4 rounded-2xl border border-[#1F293D] shadow-xs">
          <span className="text-xs font-mono font-bold text-[#F59E0B] flex items-center gap-1">
            <Filter className="w-4 h-4" />
            <span>District:</span>
          </span>
          {['All', 'Bole', 'Kazanchis', 'Piassa', 'Sarbet'].map(area => (
            <button
              key={area}
              onClick={() => setSelectedArea(area)}
              className={`touch-target px-3.5 py-1.5 rounded-full text-xs font-bold transition-all border cursor-pointer ${
                selectedArea === area
                  ? 'bg-[#F59E0B] text-[#0B0F17] border-[#F59E0B] font-black'
                  : 'bg-[#0B0F17] text-[#94A3B8] border-[#1F293D] hover:border-[#F59E0B]'
              }`}
            >
              {area}
            </button>
          ))}
        </div>

        {/* Dark Map Container Matching #0B0F17 */}
        <div className="relative w-full h-[500px] rounded-3xl overflow-hidden bg-[#0B0F17] border border-[#1F293D] shadow-2xl flex flex-col justify-between p-6">
          <div className="absolute inset-0 bg-[radial-gradient(#1F293D_1.5px,transparent_1.5px)] [background-size:20px_20px] opacity-70 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17]/95 via-transparent to-[#0B0F17]/40 pointer-events-none" />

          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161E2E]/90 text-white text-xs font-mono font-bold border border-[#1F293D]">
              <Navigation className="w-4 h-4 text-[#F59E0B] animate-pulse" />
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
                    ? 'bg-[#F59E0B] text-[#0B0F17] border-[#F5D78A] scale-110 font-black'
                    : 'bg-[#161E2E]/90 backdrop-blur-md text-[#F8FAFC] border-[#1F293D] hover:border-[#F59E0B]'
                }`}
              >
                <MapPin className={`w-4 h-4 ${activeSpot.id === spot.id ? 'text-[#0B0F17]' : 'text-[#F59E0B]'}`} />
                <span className="font-display font-bold text-xs">{spot.name}</span>
                <span className="text-[10px] font-mono opacity-80">({spot.price})</span>
              </button>
            ))}
          </div>

          <div className="relative z-10 bg-[#161E2E]/95 backdrop-blur-xl border border-[#1F293D] p-5 rounded-2xl text-white flex items-center justify-between gap-4 shadow-2xl">
            <div>
              <span className="text-xs font-mono text-[#F59E0B] font-bold block">{activeSpot.rating} • {activeSpot.area}</span>
              <h3 className="font-display font-black text-lg text-[#F8FAFC]">{activeSpot.name} ({activeSpot.dish})</h3>
              <p className="text-xs text-[#94A3B8] font-medium">{activeSpot.coords}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-mono font-black text-lg text-[#F59E0B]">{activeSpot.price}</span>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(activeSpot.name + ' ' + activeSpot.coords)}`}
                target="_blank"
                rel="noreferrer"
                className="touch-target px-4 py-2.5 rounded-xl bg-[#EF4444] hover:bg-[#DC2626] text-white text-xs font-bold transition-colors flex items-center gap-1.5 shadow-md"
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
