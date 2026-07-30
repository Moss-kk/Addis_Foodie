'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, Utensils, Soup, Sandwich, Coffee, MapPin, Compass, ArrowRight } from 'lucide-react';
import { FaInstagram, FaTelegramPlane, FaTiktok } from 'react-icons/fa';
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
    { label: "Shiro", query: "Shiro", icon: Soup },
    { label: "Gourmet Burgers", query: "Burger", icon: Sandwich },
    { label: "Fasting Latte", query: "Latte", icon: Coffee },
    { label: "Bole Atlas", query: "Bole", icon: MapPin },
  ];

  return (
    <section 
      className="relative overflow-hidden py-10 md:py-16 px-4 md:px-8 border-b"
      style={{
        backgroundColor: 'var(--bg-app)',
        borderColor: 'var(--border-subtle)',
      }}
    >
      <div className="site-container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Side Content - Broadsheet Architectural Layout */}
        <div className="lg:col-span-7 flex flex-col items-start text-left gap-5">
          
          {/* Authentic Social Handle & Category Badge */}
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3 py-1 rounded-sm bg-[#1A1C1E] text-white font-label text-xs uppercase tracking-wider font-bold">
              @addis.foodie
            </span>
            <span className="px-2.5 py-1 rounded-sm bg-[#B8422E]/10 text-[#B8422E] border border-[#B8422E]/20 font-label text-xs uppercase font-bold">
              Blogger &amp; Culinary Curation
            </span>
          </div>

          {/* Fraunces Display Headline */}
          <h1 className="font-display font-medium text-3xl sm:text-5xl lg:text-6xl text-[var(--text-primary)] leading-[1.1] tracking-tight">
            {lang === 'AM' ? 'አዲስ አበባ ውስጥ ቀዳሚው የምግብ ቤት መሪ' : 'Discovering Foods in Addis'}
          </h1>

          {/* Authentic Instagram Bio Copy */}
          <p className="text-sm sm:text-base md:text-lg font-body text-[var(--text-secondary)] leading-relaxed max-w-xl">
            {lang === 'AM' 
              ? 'በአዲስ ፉዲዎች የተመረጡ የምግብ ቤት፣ የሆቴሎች እና የካፌዎች ታማኝ ግምገማዎች እና የብር ዋጋ ዝርዝሮች።'
              : 'Discovering & Reviewing Restaurant, Hotels & Cafe in Addis Ababa 🇪🇹 — Verified ETB price breakdowns and honest food inspections.'}
          </p>

          {/* Social Audience Proof Bar */}
          <div className="flex items-center gap-6 py-2 border-y border-[var(--border-subtle)] w-full max-w-lg text-xs font-label">
            <div>
              <span className="font-bold text-[var(--text-primary)] text-base block">683</span>
              <span className="text-[var(--text-secondary)] uppercase">Posts</span>
            </div>
            <div className="h-6 w-px bg-[var(--border-subtle)]" />
            <div>
              <span className="font-bold text-[#B8422E] text-base block">64.8K</span>
              <span className="text-[var(--text-secondary)] uppercase">Followers</span>
            </div>
            <div className="h-6 w-px bg-[var(--border-subtle)]" />
            <div>
              <span className="font-bold text-[var(--text-primary)] text-base block">96</span>
              <span className="text-[var(--text-secondary)] uppercase">Following</span>
            </div>
            <div className="h-6 w-px bg-[var(--border-subtle)]" />
            <div className="flex items-center gap-2 ml-auto">
              <a
                href="https://www.instagram.com/p/CK8TFBSngx8/?igshid=1pjzbuzr55jv8"
                target="_blank" rel="noopener noreferrer"
                className="p-1.5 rounded-sm bg-[#1A1C1E] text-white hover:bg-[#B8422E] transition-colors"
                title="Instagram"
              >
                <FaInstagram size={14} />
              </a>
              <a
                href="https://t.me/addisfoodies"
                target="_blank" rel="noopener noreferrer"
                className="p-1.5 rounded-sm bg-[#1A1C1E] text-white hover:bg-[#B8422E] transition-colors"
                title="Telegram"
              >
                <FaTelegramPlane size={14} />
              </a>
              <a
                href="https://www.tiktok.com/@addis.foodie?_r=1&_t=ZS-98Smpg1WuZg"
                target="_blank" rel="noopener noreferrer"
                className="p-1.5 rounded-sm bg-[#1A1C1E] text-white hover:bg-[#B8422E] transition-colors"
                title="TikTok @addis.foodie"
              >
                <FaTiktok size={14} />
              </a>
            </div>
          </div>

          {/* Clean Search Input Form */}
          <div className="w-full max-w-xl pt-1">
            <form onSubmit={handleSearchSubmit} className="relative flex items-center">
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange?.(e.target.value)}
                placeholder={lang === 'AM' ? 'ምግቦችን ይፈልጉ (ክትፎ፣ ሽሮ፣ በርገር፣ ላቴ)...' : 'Search dishes (Kitfo, Shiro, Burger, Coffee)...'}
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

            {/* Clean Category Chips (No Emojis) */}
            <div className="flex items-center gap-2 mt-3 overflow-x-auto no-scrollbar py-1">
              <span className="text-[var(--text-secondary)] font-label text-[10px] uppercase shrink-0">Filter:</span>
              {quickFilterChips.map((chip) => {
                const Icon = chip.icon;
                return (
                  <button 
                    key={chip.label}
                    type="button"
                    onClick={() => handleChipClick(chip.query)}
                    className="whitespace-nowrap px-3 py-1 rounded-sm bg-[var(--bg-surface)] hover:bg-[#1A1C1E] hover:text-white border border-[var(--border-subtle)] text-[var(--text-primary)] transition cursor-pointer text-xs font-label font-medium shrink-0 flex items-center gap-1.5"
                  >
                    <Icon className="w-3.5 h-3.5 text-[#B8422E]" />
                    <span>{chip.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Right Side Visual Framing Card */}
        <div className="lg:col-span-5 hidden lg:flex flex-col gap-4">
          <div className="heritage-card p-4 relative overflow-hidden bg-[#1A1C1E] text-white border border-[#3A3E42] rounded-lg shadow-sm">
            
            <div className="relative aspect-[4/3] w-full rounded-md overflow-hidden bg-slate-900 border border-white/10 mb-3">
              <Image 
                src="/telegram-imports/Queen Burger.jpg"
                alt="Addis Foodie Featured Review"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute top-3 left-3 bg-[#1A1C1E] px-2.5 py-1 rounded-xs text-[10px] font-label font-bold text-white uppercase tracking-wider border border-white/20">
                Official Post Stamp
              </div>
              <div className="absolute bottom-3 right-3 bg-[#B8422E] text-white px-2.5 py-1 rounded-xs text-[10px] font-label font-bold uppercase">
                580 Br
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between text-xs font-label text-slate-300">
                <span className="text-[#B8422E] font-bold">@addis.foodie</span>
                <span>Bole Atlas</span>
              </div>
              <h3 className="font-display text-lg text-white font-medium">
                Titich Double Cheese Kitfo Burger
              </h3>
              <p className="text-xs text-slate-300 font-body line-clamp-2 leading-relaxed">
                Thick beef patty seasoned with fresh mitmita, layered with melted ayeb cheese, grilled onions, and house chili aioli.
              </p>
              <button 
                onClick={onExploreClick}
                className="mt-2 button-primary py-2 text-xs uppercase tracking-wider rounded-md text-white flex items-center justify-center gap-2"
              >
                <span>Read Full Inspection</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
