'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Search, 
  MapPin, 
  Utensils, 
  Flame, 
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface HeroSectionProps {
  onSearch: (filters: { query: string; location: string; price: string; cuisine: string }) => void;
  onExploreClick: () => void;
}

export default function HeroSection({ onSearch, onExploreClick }: HeroSectionProps) {
  const { t } = useLanguage();
  const [query, setQuery] = useState('');

  const trendingTags = [
    'Kitfo',
    'Tibs',
    'Burger',
    'Coffee',
    'Pizza',
    'Shiro',
    'Fasting Food',
    'Desserts'
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ query, location: '', price: '', cuisine: '' });
    onExploreClick();
  };

  const handleTagClick = (tag: string) => {
    setQuery(tag);
    onSearch({ query: tag, location: '', price: '', cuisine: '' });
    onExploreClick();
  };

  return (
    <section className="w-full relative min-h-[75vh] lg:min-h-[82vh] flex items-center py-16 sm:py-24 text-white overflow-hidden bg-[#111827]">
      {/* 1. Authentic Ethiopian Meal Background Photo Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/ethiopian_kitfo_hero.png"
          alt="Authentic Ethiopian Kitfo Platter Feast"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.38] contrast-[1.15]"
        />
        {/* Deep Kitfo Crimson & Ambient Dark Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-[#8B1717]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-black/60" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#A81D1D]/20 blur-3xl pointer-events-none rounded-full" />
      </div>

      <div className="site-container relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Hero Copy & Actions */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-left">
          
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-3"
          >
            <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.08] text-white">
              Discover Ethiopia <br />
              <span style={{ color: 'var(--accent-brand)' }}>
                One Bite at a Time
              </span>
            </h1>

            <p className="text-stone-300 font-medium text-base sm:text-lg leading-relaxed max-w-xl">
              Trusted food reviews, unforgettable experiences, and the best culinary stories from Addis Ababa.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-wrap items-center gap-3.5 pt-1"
          >
            <Link
              href="/reviews"
              className="touch-target text-white font-extrabold text-sm py-3.5 px-7 rounded-xl shadow-xl transition-all cursor-pointer flex items-center gap-2 focus-ring hover:scale-105"
              style={{ backgroundColor: 'var(--accent-brand)' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent-brand-hover)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent-brand)')}
            >
              <span>Explore Reviews</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/map"
              className="touch-target bg-white/10 hover:bg-white/20 text-white font-bold text-sm py-3.5 px-6 rounded-xl border border-white/20 transition-all cursor-pointer flex items-center gap-2 focus-ring backdrop-blur-md"
            >
              <MapPin className="w-4 h-4 text-amber-300" />
              <span>View Food Map</span>
            </Link>
          </motion.div>

          {/* Quick Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="w-full max-w-xl bg-black/60 backdrop-blur-md border border-white/15 p-2 rounded-2xl shadow-xl mt-2"
          >
            <form onSubmit={handleSearchSubmit} className="flex items-center gap-2">
              <div className="relative flex-1 flex items-center">
                <Search className="w-4 h-4 text-stone-400 absolute left-3.5" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search for food, restaurant..."
                  className="w-full bg-transparent text-xs sm:text-sm text-white placeholder-stone-400 pl-10 pr-3 py-2.5 outline-none font-medium"
                />
              </div>

              <button
                type="submit"
                className="text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all shadow-md flex items-center gap-1 shrink-0"
                style={{ backgroundColor: 'var(--accent-brand)' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent-brand-hover)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent-brand)')}
              >
                <span>Search</span>
              </button>
            </form>

            {/* Trending tags */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pt-2.5 pb-1 border-t border-white/10 mt-2 px-1">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider flex items-center gap-1 shrink-0" style={{ color: 'var(--accent-amber)' }}>
                <Flame className="w-3.5 h-3.5" style={{ color: 'var(--accent-brand)' }} /> Trending:
              </span>
              {trendingTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => handleTagClick(tag)}
                  className="touch-target text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/10 text-stone-200 hover:text-white transition-all shrink-0 border border-white/10"
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent-brand)')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)')}
                >
                  {tag}
                </button>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Right Column: Hero Circular Badge (Matching Image 2) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            {/* Outer Radial Glow */}
            <div className="absolute w-72 h-72 rounded-full blur-2xl animate-pulse pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(230,57,70,0.35), rgba(244,162,97,0.25))' }} />

            {/* Circular Logo Badge Frame */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full border-4 bg-[#121212]/90 p-4 shadow-2xl backdrop-blur-md flex items-center justify-center group hover:scale-105 transition-transform duration-500" style={{ borderColor: 'rgba(230,57,70,0.6)' }}>
              
              {/* Circular Text Border */}
              <div className="absolute inset-2 rounded-full border border-amber-400/30 flex items-center justify-center">
                <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                  <path
                    id="circlePath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    fill="none"
                  />
                  <text className="text-[7.5px] font-mono font-black fill-amber-300 uppercase tracking-widest">
                    <textPath href="#circlePath">
                      ADDIS FOODIES • EAT • REVIEW • INSPIRE •
                    </textPath>
                  </text>
                </svg>
              </div>

              {/* Center Emblem Visual */}
              <div
                className="w-36 h-36 sm:w-40 sm:h-40 rounded-full flex flex-col items-center justify-center p-3 text-center shadow-inner z-10"
                style={{
                  background: 'linear-gradient(135deg, #8B0000, var(--accent-brand))',
                  border: '2px solid rgba(244,162,97,0.4)',
                }}
              >
                <Utensils className="w-8 h-8 mb-1" style={{ color: '#F4A261' }} />
                <span className="font-display font-black text-lg text-white tracking-tighter leading-none">
                  ADDIS
                </span>
                <span className="font-display font-bold text-xs tracking-widest" style={{ color: '#F4A261' }}>
                  FOODIES
                </span>
                <div className="h-0.5 w-8 my-1 rounded-full" style={{ backgroundColor: 'rgba(244,162,97,0.6)' }} />
                <span className="text-[9px] font-mono font-bold text-stone-200 uppercase">
                  EST. 2026
                </span>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
