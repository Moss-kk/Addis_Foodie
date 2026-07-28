'use client';

import React from 'react';
import Image from 'next/image';
import { 
  Sparkles, 
  MapPin, 
  ArrowRight,
  ShieldCheck,
  Star,
  CheckCircle2,
  TrendingUp,
  Receipt
} from 'lucide-react';
import AddisFoodieLogo from '../ui/AddisFoodieLogo';

interface HeroSectionProps {
  onSearch?: () => void;
  onExploreClick?: () => void;
}

export default function HeroSection({ onSearch, onExploreClick }: HeroSectionProps) {
  return (
    <section className="site-container pt-4 pb-8 sm:pt-6 sm:pb-12">
      {/* 
        MASTERCARD STADIUM CONTAINER 
        Radius: rounded-[40px] (var(--radius-stadium))
        Floor: Void Black (#000000)
        Border: 1px Hairline (#222222)
      */}
      <div 
        className="relative w-full rounded-[40px] overflow-hidden text-white shadow-2xl transition-all duration-300 border"
        style={{
          backgroundColor: '#000000',
          borderColor: '#222222',
          boxShadow: '0 20px 50px rgba(0,0,0,0.80)',
        }}
      >
        {/* Background Atmosphere Image */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <Image
            src="/telegram-imports/Yado kitfo.jpg"
            alt="Ethiopian Gourmet Background"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-20 brightness-75 scale-105 transition-all duration-1000"
          />
          {/* Subtle Void Black Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/80 via-transparent to-transparent" />
        </div>

        {/* Hero Content Layer */}
        <div className="relative z-10 p-6 sm:p-12 lg:p-16 flex flex-col lg:flex-row lg:items-center justify-between gap-12">
          
          {/* Left Column: Brand Statement & Primary Actions */}
          <div className="flex flex-col gap-6 max-w-2xl">
            
            {/* Curated Media Badge */}
            <div className="flex flex-wrap items-center gap-2">
              <div 
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-slate-950 shadow-md"
                style={{ backgroundColor: 'var(--accent-gold)' }}
              >
                <Sparkles className="w-3.5 h-3.5 fill-current text-slate-950" />
                <span>Addis Ababa Official Food Guide</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-slate-200 border border-white/15 text-xs font-mono font-semibold backdrop-blur-md">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                <span>Verified ETB Prices</span>
              </div>
            </div>

            {/* H1 Title: Claude Editorial Serif */}
            <div className="flex flex-col gap-3">
              <h1 className="font-display font-normal text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.05] text-white">
                Discover &amp; Order <br className="hidden sm:inline" />
                <span style={{ color: 'var(--accent-gold)' }}>Authentic Food</span> in Addis
              </h1>
              <p className="text-slate-300 font-body text-sm sm:text-lg leading-relaxed max-w-xl">
                Discover top Kitfo joints, gourmet burgers, and local cafes with verified ETB price breakdowns across Bole, Kazanchis, Piassa, and Sarbet.
              </p>
            </div>

            {/* Key Value Pill Indicators */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono font-bold text-slate-300">
              <span className="inline-flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                <Receipt className="w-3.5 h-3.5 text-amber-400" />
                <span>Itemized Price Audits</span>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
                <span>94.2K Monthly Foodies</span>
              </span>
            </div>

            {/* Primary Action Buttons (Full Pill Geometry) */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreClick}
                className="touch-target text-slate-950 font-extrabold text-xs uppercase tracking-wider py-4 px-8 rounded-full shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2 cursor-pointer focus-ring"
                style={{ backgroundColor: 'var(--accent-gold)' }}
              >
                <span>Explore Verified Reviews</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>

              <button
                onClick={onSearch}
                className="touch-target bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider py-4 px-6 rounded-full border border-white/20 transition-all duration-300 flex items-center gap-2 backdrop-blur-md cursor-pointer focus-ring"
              >
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>View Food Map</span>
              </button>
            </div>

          </div>

          {/* Right Column: Mastercard Satellite Circular Portrait */}
          <div className="relative flex items-center justify-center shrink-0">
            
            {/* Outer Orbital Ring */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-amber-500/30 p-3 flex items-center justify-center shadow-2xl">
              
              {/* Inner Glowing Portrait Ring */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-amber-400 shadow-2xl">
                <Image
                  src="/telegram-imports/Yado kitfo.jpg"
                  alt="Yado Kitfo Special"
                  fill
                  sizes="(max-width: 640px) 256px, 320px"
                  className="object-cover scale-105 hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Top Floating Badge Pill */}
              <div className="absolute -top-2 bg-slate-950/90 text-amber-400 border border-amber-500/50 px-3.5 py-1.5 rounded-full text-[11px] font-mono font-bold shadow-xl flex items-center gap-1.5 backdrop-blur-md">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>4.9 ★ SPOTLIGHT GOURMET</span>
              </div>

              {/* Bottom Floating Price Badge Pill */}
              <div className="absolute -bottom-3 bg-slate-950/95 text-white border border-amber-500/40 px-4 py-2 rounded-full text-xs font-mono font-bold shadow-2xl flex items-center gap-2 backdrop-blur-md">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Yado Kitfo Special • 850 Br</span>
              </div>

            </div>

          </div>

        </div>

        {/* Footer Statistics Strip inside Stadium Card */}
        <div className="relative z-10 border-t border-white/10 px-6 sm:px-12 py-4 bg-black/40 backdrop-blur-md grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <span className="block font-display font-bold text-xl sm:text-2xl text-amber-400">500+</span>
            <span className="text-[10px] sm:text-xs font-mono text-slate-400 uppercase">Verified Reviews</span>
          </div>
          <div>
            <span className="block font-display font-bold text-xl sm:text-2xl text-amber-400">120+</span>
            <span className="text-[10px] sm:text-xs font-mono text-slate-400 uppercase">Restaurants Mapped</span>
          </div>
          <div>
            <span className="block font-display font-bold text-xl sm:text-2xl text-amber-400">100%</span>
            <span className="text-[10px] sm:text-xs font-mono text-slate-400 uppercase">ETB Price Accuracy</span>
          </div>
          <div>
            <span className="block font-display font-bold text-xl sm:text-2xl text-amber-400">150K+</span>
            <span className="text-[10px] sm:text-xs font-mono text-slate-400 uppercase">Monthly Food Lovers</span>
          </div>
        </div>

      </div>
    </section>
  );
}
