'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface HeroSectionProps {
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
  onExploreClick?: () => void;
}

export default function HeroSection({ searchQuery = '', onSearchChange, onExploreClick }: HeroSectionProps) {
  const { lang } = useLanguage();

  const handleChipClick = (chipQuery: string) => {
    if (onSearchChange) onSearchChange(chipQuery);
    if (onExploreClick) onExploreClick();
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onExploreClick) onExploreClick();
  };

  return (
    <section className="relative overflow-hidden pt-6 pb-10 md:py-16 px-4 md:px-8 border-b border-zinc-800/80 bg-[#0d0d0d]">
      {/* Dark Ambient Background Image with Strong Gradient Overlay for Contrast */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Image 
          src="/images/ethiopian_feast_hero.png"
          alt="Ethiopian Feast Background"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d]/90 via-[#0d0d0d]/80 to-[#0d0d0d]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        
        {/* Verification Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-4 backdrop-blur-sm shadow-xs">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span>{lang === 'AM' ? 'የተረጋገጡ የብር ዋጋዎች' : 'Verified ETB Price Audits'}</span>
        </div>

        {/* Clear 3-Second Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight text-white leading-tight mb-4">
          Find the Best <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">Food Reviews</span> in Addis Ababa
        </h1>

        {/* Sub-headline */}
        <p className="text-xs sm:text-sm md:text-lg text-zinc-300 max-w-2xl font-normal leading-relaxed mb-6">
          Unbiased food audits, verified menu prices in ETB, and top restaurant reels across Bole, Kazanchis, Piassa, and Sarbet.
        </p>

        {/* Mobile-Friendly Search & Dish Pill Quick-Filters */}
        <div className="w-full max-w-xl mb-6">
          <form onSubmit={handleSearchSubmit} className="relative flex items-center">
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange?.(e.target.value)}
              placeholder="Search dishes (Kitfo, Shiro, Burger, Coffee)..."
              className="w-full bg-zinc-900/90 border border-zinc-700 focus:border-amber-400 text-white text-xs sm:text-sm rounded-full py-3.5 pl-5 pr-12 outline-none shadow-xl transition backdrop-blur-md placeholder:text-zinc-500"
            />
            <button 
              type="submit"
              className="absolute right-2 p-2 bg-amber-500 rounded-full text-black hover:bg-amber-400 transition cursor-pointer"
            >
              <Search className="w-4 h-4 text-black stroke-[2.5]" />
            </button>
          </form>

          {/* Horizontally Scrollable Dish Chips (No Wrapping / No Breaking) */}
          <div className="flex items-center gap-2 mt-3 overflow-x-auto no-scrollbar py-1 text-xs text-zinc-300">
            <span className="text-zinc-500 font-medium whitespace-nowrap shrink-0">Try:</span>
            {[
              { label: "🥩 Kitfo", query: "Kitfo" },
              { label: "🌶️ Shiro", query: "Shiro" },
              { label: "🍔 Gourmet Burgers", query: "Burger" },
              { label: "☕ Fasting Latte", query: "Latte" },
              { label: "📍 Bole Atlas", query: "Bole" }
            ].map((chip) => (
              <button 
                key={chip.label}
                type="button"
                onClick={() => handleChipClick(chip.query)}
                className="whitespace-nowrap px-3 py-1.5 rounded-full bg-zinc-800/80 hover:bg-zinc-700 border border-zinc-700/60 text-zinc-200 transition cursor-pointer text-xs font-mono font-medium shrink-0"
              >
                {chip.label}
              </button>
            ))}
          </div>
        </div>

        {/* Quick Social Proof Bar */}
        <div className="grid grid-cols-3 gap-3 w-full max-w-md border-t border-zinc-800/80 pt-4 text-center">
          <div>
            <div className="text-lg font-bold text-amber-400">500+</div>
            <div className="text-[11px] text-zinc-400">Reviews</div>
          </div>
          <div>
            <div className="text-lg font-bold text-amber-400">100%</div>
            <div className="text-[11px] text-zinc-400">ETB Price Audited</div>
          </div>
          <div>
            <div className="text-lg font-bold text-amber-400">150K+</div>
            <div className="text-[11px] text-zinc-400">Monthly Foodies</div>
          </div>
        </div>

      </div>
    </section>
  );
}
