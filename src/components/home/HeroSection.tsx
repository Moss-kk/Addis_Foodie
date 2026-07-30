'use client';

import React from 'react';
import Image from 'next/image';
import { Search, Utensils, Soup, Sandwich, Coffee, MapPin, ArrowRight, Flame, CupSoda, Pizza } from 'lucide-react';
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

  const quickFilterChips = [
    { label: "Kitfo", query: "Kitfo", icon: Utensils },
    { label: "Burgers", query: "Burger", icon: Sandwich },
    { label: "Pizza", query: "Pizza", icon: Pizza },
    { label: "Juices", query: "Juice", icon: CupSoda },
    { label: "Fasting", query: "Fasting", icon: Soup },
    { label: "Coffee", query: "Coffee", icon: Coffee },
    { label: "Bole Atlas", query: "Bole", icon: MapPin },
  ];

  return (
    <section 
      className="relative overflow-hidden py-10 sm:py-16 md:py-20 px-4 md:px-8 border-b transition-colors"
      style={{
        backgroundColor: 'var(--bg-app)',
        borderColor: 'var(--border-subtle)',
      }}
    >
      {/* Background Hero Image with Subtle Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/telegram-imports/event Sunday Brunch at ramadea.jpg"
          alt="Addis Foodie Restaurant Background"
          fill
          priority
          className="object-cover object-center opacity-20 filter blur-[2px]"
        />
        <div 
          className="absolute inset-0 bg-gradient-to-r via-[var(--bg-app)]/85 to-black/70"
          style={{
            backgroundImage: `linear-gradient(to right, var(--bg-app) 0%, var(--bg-app) 60%, rgba(0, 0, 0, 0.7) 100%)`
          }}
        />
      </div>

      <div className="site-container relative z-10 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Side Content - Broadsheet Architectural Layout */}
        <div className="lg:col-span-7 flex flex-col items-start text-left gap-4 sm:gap-5">
          
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#1A1C1E] text-white font-label text-xs uppercase tracking-wider font-bold border border-white/10 shadow-xs">
            <Flame className="w-3.5 h-3.5 text-[#B8422E]" />
            <span>Official Culinary Guide</span>
          </div>

          {/* Fraunces Display Headline */}
          <h1 className="font-display font-medium text-3xl sm:text-5xl lg:text-6xl text-[var(--text-primary)] leading-[1.1] tracking-tight">
            {lang === 'AM' ? 'አዲስ አበባ ውስጥ ቀዳሚው የምግብ ቤት መሪ' : 'Discovering Foods in Addis'}
          </h1>

          {/* Authentic Bio Copy */}
          <p className="text-sm sm:text-base md:text-lg font-body text-[var(--text-secondary)] leading-relaxed max-w-xl">
            {lang === 'AM' 
              ? 'በአዲስ ፉዲዎች የተመረጡ የምግብ ቤት፣ የሆቴሎች እና የካፌዎች ታማኝ ግምገማዎች እና የብር ዋጋ ዝርዝሮች።'
              : 'Discovering & Reviewing Restaurant, Hotels & Cafe in Addis Ababa 🇪🇹 — Honest food inspections, menu pricing, and live video coverage.'}
          </p>

          {/* Clean Search Input Form */}
          <div className="w-full max-w-xl pt-2">
            <form onSubmit={handleSearchSubmit} className="relative flex items-center">
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange?.(e.target.value)}
                placeholder={lang === 'AM' ? 'ምግቦችን ይፈልጉ (ክትፎ፣ ሽሮ፣ በርገር፣ ፒዛ)...' : 'Search dishes (Kitfo, Burger, Pizza, Juice, Fasting)...'}
                className="w-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] focus:border-[#B8422E] text-[var(--text-primary)] text-xs sm:text-sm rounded-md py-3 pl-4 pr-12 outline-none shadow-xs transition placeholder:text-[var(--text-secondary)]"
              />
              <button 
                type="submit"
                className="absolute right-2 p-2 bg-[#B8422E] rounded-md text-white hover:bg-[#9E3523] transition cursor-pointer"
                aria-label="Search"
              >
                <Search className="w-4 h-4 text-white" />
              </button>
            </form>

            {/* Category Chips Strip */}
            <div className="flex items-center gap-2 mt-3 overflow-x-auto no-scrollbar py-1">
              <span className="text-[var(--text-secondary)] font-label text-[10px] uppercase shrink-0">Filter:</span>
              {quickFilterChips.map((chip) => {
                const Icon = chip.icon;
                return (
                  <button 
                    key={chip.label}
                    type="button"
                    onClick={() => handleChipClick(chip.query)}
                    className="whitespace-nowrap px-3 py-1 rounded-sm bg-[var(--bg-surface)] hover:bg-[#1A1C1E] hover:text-white border border-[var(--border-subtle)] text-[var(--text-primary)] transition cursor-pointer text-xs font-label font-medium shrink-0 flex items-center gap-1.5 shadow-2xs"
                  >
                    <Icon className="w-3.5 h-3.5 text-[#B8422E]" />
                    <span>{chip.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Right Side Visual Framing Card (Rooftop Kitfo Brunch spotlight) */}
        <div className="lg:col-span-5 hidden lg:flex flex-col gap-4">
          <div className="heritage-card p-4 relative overflow-hidden bg-[#1A1C1E] text-white border border-[#3A3E42] rounded-lg shadow-md">
            
            <div className="relative aspect-[4/3] w-full rounded-md overflow-hidden bg-slate-900 border border-white/10 mb-3">
              <Image 
                src="/telegram-imports/kito fest.jpg"
                alt="Rooftop Kitfo Brunch Spotlight"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute top-3 left-3 bg-[#1A1C1E] px-2.5 py-1 rounded-xs text-[10px] font-label font-bold text-white uppercase tracking-wider border border-white/20">
                ROOFTOP KITFO BRUNCH
              </div>
              <div className="absolute bottom-3 right-3 bg-[#B8422E] text-white px-2.5 py-1 rounded-xs text-[10px] font-label font-bold uppercase">
                102K Views
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between text-xs font-label text-slate-300">
                <span className="text-[#B8422E] font-bold">Kitfo Fest #7</span>
                <span>Monarch Rooftop • Bole</span>
              </div>
              <h3 className="font-display text-lg text-white font-medium">
                Rooftop Kitfo Brunch &amp; Tsom Mefcha
              </h3>
              <p className="text-xs text-slate-300 font-body line-clamp-2 leading-relaxed">
                Authentic Gurage Kitfo served with fresh Ayeb, Gomen, and clay pot Niter Kibbeh.
              </p>
              <button 
                onClick={onExploreClick}
                className="mt-2 button-primary py-2 text-xs uppercase tracking-wider rounded-md text-white flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Inspect Spot</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
