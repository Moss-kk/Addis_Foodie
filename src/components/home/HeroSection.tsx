'use client';

import React from 'react';
import Image from 'next/image';
import { 
  Sparkles, 
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Receipt,
  Award,
  Flame,
  ShieldCheck
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
              backgroundColor: 'rgba(26, 28, 30, 0.68)',
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
              <button
                onClick={onExploreClick}
                className="button-primary cursor-pointer hover:scale-[1.02] flex items-center gap-2"
              >
                <span>EXPLORE VERIFIED REVIEWS</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>

          </div>

          {/* Right Column: TRANSPARENT ADDIS FOODIES BRAND MARK SHOWCASE */}
          <div className="relative flex items-center justify-center shrink-0">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 p-4 flex flex-col items-center justify-center text-center gap-3 bg-transparent overflow-hidden">
              
              {/* Creative Transparent Brand Circle Logo Showcase */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-[#B8422E] shadow-2xl flex-shrink-0 bg-transparent">
                <Image
                  src="/images/logo.png"
                  alt="Addis Foodies Master Brand Mark"
                  fill
                  priority
                  className="object-cover scale-105"
                />
              </div>

              {/* Signature Heritage Brand Name Badge (Transparent Background) */}
              <div className="flex flex-col items-center gap-1 z-10">
                <span className="font-display font-bold text-lg sm:text-xl text-white tracking-wider drop-shadow-md">
                  ADDIS FOODIES
                </span>
                <div className="h-[2px] w-16 bg-[#B8422E] my-0.5" />
                <span className="text-[10px] font-label text-slate-200 uppercase tracking-widest drop-shadow-xs">
                  ETHIOPIAN CULINARY BRAND
                </span>
              </div>

              {/* Live Media Stats Badge (Translucent Pill) */}
              <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-label text-white bg-white/10 px-3 py-1 rounded-full border border-white/20 backdrop-blur-md">
                <Flame className="w-3.5 h-3.5 text-[#B8422E]" />
                <span>150K+ Monthly Reach</span>
                <span className="text-slate-400">•</span>
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>#1 Food Guide</span>
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
            <span className="text-[10px] sm:text-xs font-label text-slate-300">Restaurants Audited</span>
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
