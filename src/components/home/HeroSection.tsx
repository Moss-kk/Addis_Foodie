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

interface HeroSectionProps {
  onSearch?: () => void;
  onExploreClick?: () => void;
}

export default function HeroSection({ onSearch, onExploreClick }: HeroSectionProps) {
  return (
    <section className="site-container pt-4 pb-8 sm:pt-6 sm:pb-10">
      {/* 
        HERITAGE FRAME CONTAINER 
        Radius: rounded-lg (8px)
        Background: Flat Warm Limestone (#F7F5F2) with vivid visible background image
        Border: 1px Hairline (#6C7278 / #E2DDD5)
      */}
      <div 
        className="relative w-full rounded-lg overflow-hidden transition-all duration-300 border shadow-sm"
        style={{
          backgroundColor: '#1A1C1E',
          borderColor: 'var(--border-subtle)',
        }}
      >
        {/* Background Atmosphere Image - Fully Visible Ethiopian Feast Image */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <Image
            src="/images/ethiopian_feast_hero.png"
            alt="Ethiopian Culinary Heritage Background"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-85 brightness-90 transition-all duration-700 hover:scale-105"
          />
          {/* Flat Translucent Contrast Layer to ensure broadsheet typography legibility */}
          <div 
            className="absolute inset-0 backdrop-blur-[1px]" 
            style={{
              backgroundColor: 'rgba(26, 28, 30, 0.65)',
            }}
          />
        </div>

        {/* Hero Content Layer */}
        <div className="relative z-10 p-6 sm:p-12 lg:p-14 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          
          {/* Left Column: Brand Statement & Primary Actions */}
          <div className="flex flex-col gap-6 max-w-2xl text-white">
            
            {/* Journalistic Label Badge */}
            <div className="flex flex-wrap items-center gap-2">
              <div 
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm text-xs font-label uppercase tracking-widest text-white shadow-xs"
                style={{ backgroundColor: 'var(--accent-tertiary)' }}
              >
                <Sparkles className="w-3.5 h-3.5 text-white" />
                <span>Addis Ababa Official Food Guide</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-white/10 text-slate-200 border border-white/20 text-xs font-label">
                <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                <span>Verified ETB Audits</span>
              </div>
            </div>

            {/* Title: Fraunces Serif Header */}
            <div className="flex flex-col gap-3">
              <h1 className="font-display font-medium text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-white">
                Discover &amp; Order <br className="hidden sm:inline" />
                <span className="text-[#F7F5F2] underline decoration-[#B8422E] underline-offset-8">Authentic Food</span> in Addis
              </h1>
              <p className="text-slate-200 font-body text-base sm:text-lg leading-relaxed max-w-xl">
                Journalistic gravitas meets culinary excellence. Explore top Kitfo joints, gourmet burgers, and local cafes with verified ETB price breakdowns across Bole, Kazanchis, Piassa, and Sarbet.
              </p>
            </div>

            {/* Key Value Indicators */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-label text-slate-300">
              <span className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-sm border border-white/15">
                <Receipt className="w-3.5 h-3.5" style={{ color: 'var(--accent-tertiary)' }} />
                <span>Itemized Price Audits</span>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-sm border border-white/15">
                <TrendingUp className="w-3.5 h-3.5" style={{ color: 'var(--accent-tertiary)' }} />
                <span>94.2K Monthly Readers</span>
              </span>
            </div>

            {/* Actions: Single Tertiary Accent Rule */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* Single Load-bearing Tertiary Accent Action per Screen Rule */}
              <button
                onClick={onExploreClick}
                className="button-primary cursor-pointer hover:scale-[1.02] flex items-center gap-2"
              >
                <span>EXPLORE VERIFIED REVIEWS</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>

              <button
                onClick={onSearch}
                className="touch-target bg-white/10 hover:bg-white/20 text-white font-label text-xs uppercase px-5 py-3 rounded-md border border-white/20 transition-all flex items-center gap-2 cursor-pointer focus-ring"
              >
                <MapPin className="w-4 h-4 text-slate-200" />
                <span>VIEW FOOD MAP</span>
              </button>
            </div>

          </div>

          {/* Right Column: High-contrast Featured Portrait Showcase */}
          <div className="relative flex items-center justify-center shrink-0">
            <div 
              className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-lg overflow-hidden border-2 shadow-xl"
              style={{ borderColor: 'var(--border-subtle)' }}
            >
              <Image
                src="/images/ethiopian_kitfo_hero.png"
                alt="Spotlight Kitfo Gourmet"
                fill
                sizes="(max-width: 640px) 256px, 320px"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              
              {/* Top Floating Badge */}
              <div 
                className="absolute top-3 left-3 bg-[#1A1C1E]/90 text-white px-3 py-1 rounded-sm text-[11px] font-label shadow-md flex items-center gap-1.5 backdrop-blur-md border border-white/10"
              >
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span>4.9 ★ SPOTLIGHT GOURMET</span>
              </div>

              {/* Bottom Floating Price Badge */}
              <div 
                className="absolute bottom-3 right-3 bg-[#1A1C1E]/95 text-white px-3.5 py-1.5 rounded-sm text-xs font-label shadow-lg flex items-center gap-2 backdrop-blur-md border border-white/10"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Yado Kitfo Special • 850 Br</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Statistics Strip inside Heritage Container */}
        <div className="relative z-10 border-t border-white/15 px-6 sm:px-12 py-4 bg-[#1A1C1E]/90 backdrop-blur-md grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-white">
          <div>
            <span className="block font-display font-medium text-xl sm:text-2xl" style={{ color: 'var(--accent-tertiary)' }}>500+</span>
            <span className="text-[10px] sm:text-xs font-label text-slate-300">Verified Reviews</span>
          </div>
          <div>
            <span className="block font-display font-medium text-xl sm:text-2xl text-white">120+</span>
            <span className="text-[10px] sm:text-xs font-label text-slate-300">Restaurants Mapped</span>
          </div>
          <div>
            <span className="block font-display font-medium text-xl sm:text-2xl text-white">100%</span>
            <span className="text-[10px] sm:text-xs font-label text-slate-300">ETB Price Accuracy</span>
          </div>
          <div>
            <span className="block font-display font-medium text-xl sm:text-2xl" style={{ color: 'var(--accent-tertiary)' }}>150K+</span>
            <span className="text-[10px] sm:text-xs font-label text-slate-300">Monthly Foodies</span>
          </div>
        </div>

      </div>
    </section>
  );
}
