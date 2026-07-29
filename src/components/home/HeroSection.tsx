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
  Search
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface HeroSectionProps {
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
  onExploreClick?: () => void;
}

export default function HeroSection({ searchQuery = '', onSearchChange, onExploreClick }: HeroSectionProps) {
  const { t, lang } = useLanguage();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onExploreClick) onExploreClick();
  };

  return (
    <section className="site-container pt-4 pb-8 sm:pt-6 sm:pb-10">
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
          <div 
            className="absolute inset-0 backdrop-blur-[1px]" 
            style={{
              backgroundColor: 'rgba(26, 28, 30, 0.68)',
            }}
          />
        </div>

        {/* Hero Content Layer */}
        <div className="relative z-10 p-6 sm:p-12 lg:p-14 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          
          {/* Left Column: Brand Statement & Primary Search Bar */}
          <div className="flex flex-col gap-6 max-w-2xl text-white">
            
            {/* Journalistic Label Badge */}
            <div className="flex flex-wrap items-center gap-2">
              <div 
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm text-xs font-label uppercase tracking-widest text-white shadow-xs"
                style={{ backgroundColor: 'var(--accent-tertiary)' }}
              >
                <Sparkles className="w-3.5 h-3.5 text-white" />
                <span>{lang === 'AM' ? 'የአዲስ አበባ ይፋዊ የምግብ መሪ' : 'Addis Ababa Official Food Guide'}</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-white/10 text-slate-200 border border-white/20 text-xs font-label">
                <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                <span>{lang === 'AM' ? 'የተረጋገጡ የብር ዋጋዎች' : 'Verified ETB Audits'}</span>
              </div>
            </div>

            {/* Title: Fraunces Serif Header */}
            <div className="flex flex-col gap-3">
              <h1 className="font-display font-medium text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-white">
                {t('heroTitle')}
              </h1>
              <p className="text-slate-200 font-body text-base sm:text-lg leading-relaxed max-w-xl">
                {t('heroSubtext')}
              </p>
            </div>

            {/* PROMINENT HOMEPAGE SEARCH BAR INPUT */}
            <form onSubmit={handleSearchSubmit} className="relative w-full max-w-xl pt-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
                placeholder={t('searchPlaceholder')}
                className="w-full pl-11 pr-24 py-3.5 rounded-md bg-white/15 border border-white/30 text-white placeholder-slate-300 text-xs sm:text-sm font-medium focus:outline-none focus:border-[#B8422E] backdrop-blur-md transition-colors shadow-inner"
              />
              <button
                type="submit"
                className="button-primary absolute right-1.5 top-1/2 -translate-y-1/2 px-4 py-2 rounded-sm text-xs uppercase tracking-wider text-white font-label"
              >
                {lang === 'AM' ? 'ፈልግ' : 'Search'}
              </button>
            </form>

            {/* Key Value Indicators */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-label text-slate-300">
              <span className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-sm border border-white/15">
                <Receipt className="w-3.5 h-3.5" style={{ color: 'var(--accent-tertiary)' }} />
                <span>{lang === 'AM' ? 'ዝርዝር የብር ዋጋ ደረሰኞች' : 'Itemized Price Audits'}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-sm border border-white/15">
                <TrendingUp className="w-3.5 h-3.5" style={{ color: 'var(--accent-tertiary)' }} />
                <span>{t('monthlyFoodies')}</span>
              </span>
            </div>

            {/* Actions: Single Tertiary Accent Rule */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button
                onClick={onExploreClick}
                className="button-primary cursor-pointer hover:scale-[1.02] flex items-center gap-2"
              >
                <span>{t('exploreReviews')}</span>
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
                  {lang === 'AM' ? 'የኢትዮጵያ የምግብ ብራንድ' : 'ETHIOPIAN CULINARY BRAND'}
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
            <span className="text-[10px] sm:text-xs font-label text-slate-300">{lang === 'AM' ? 'የተረጋገጡ ግምገማዎች' : 'Verified Reviews'}</span>
          </div>
          <div>
            <span className="block font-display font-medium text-xl sm:text-2xl text-white">120+</span>
            <span className="text-[10px] sm:text-xs font-label text-slate-300">{lang === 'AM' ? 'የተጎበኙ ምግብ ቤቶች' : 'Restaurants Audited'}</span>
          </div>
          <div>
            <span className="block font-display font-medium text-xl sm:text-2xl text-white">100%</span>
            <span className="text-[10px] sm:text-xs font-label text-slate-300">{lang === 'AM' ? 'እውነተኛ የብር ዋጋዎች' : 'ETB Price Accuracy'}</span>
          </div>
          <div>
            <span className="block font-display font-medium text-xl sm:text-2xl" style={{ color: 'var(--accent-tertiary)' }}>150K+</span>
            <span className="text-[10px] sm:text-xs font-label text-slate-300">{t('monthlyFoodies')}</span>
          </div>
        </div>

      </div>
    </section>
  );
}
