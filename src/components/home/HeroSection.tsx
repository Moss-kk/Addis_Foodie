'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Search, 
  MapPin, 
  Utensils, 
  DollarSign, 
  Sparkles, 
  Handshake, 
  Flame, 
  ArrowRight,
  ChevronDown
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface HeroSectionProps {
  onSearch: (filters: { query: string; location: string; price: string; cuisine: string }) => void;
  onExploreClick: () => void;
}

// Floating spice & food particles definition
const particles = [
  { icon: '🍔', size: 'text-2xl', top: '15%', left: '10%', duration: 7, delay: 0 },
  { icon: '☕', size: 'text-3xl', top: '25%', left: '82%', duration: 6, delay: 1 },
  { icon: '🍕', size: 'text-2xl', top: '65%', left: '8%', duration: 8, delay: 0.5 },
  { icon: '🥩', size: 'text-3xl', top: '75%', left: '88%', duration: 9, delay: 1.5 },
  { icon: '🌶️', size: 'text-xl', top: '40%', left: '92%', duration: 7.5, delay: 2 },
  { icon: '🥗', size: 'text-xl', top: '18%', left: '70%', duration: 8.5, delay: 1.2 },
];

export default function HeroSection({ onSearch, onExploreClick }: HeroSectionProps) {
  const { t, lang } = useLanguage();

  const [foodQuery, setFoodQuery] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [cuisine, setCuisine] = useState('');

  const trendingTags = ['Bole', 'Kitfo', 'Burgers', 'Fasting', 'Macchiato', 'Piassa'];

  const stats = [
    { value: '150,000+', label: 'Monthly Foodies' },
    { value: '500+', label: 'Verified Reviews' },
    { value: '4 Key', label: 'Districts Covered' },
    { value: '100%', label: 'Editorial Integrity' },
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ query: foodQuery, location, price, cuisine });
    onExploreClick();
  };

  const handleTagClick = (tag: string) => {
    setFoodQuery(tag);
    onSearch({ query: tag, location, price, cuisine });
    onExploreClick();
  };

  return (
    <section className="w-full relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center py-20 sm:py-28 text-white overflow-hidden bg-[#111827]">
      {/* 1. Cinematic Full-Bleed Photography Canvas with Ken Burns Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1541518763669-27fef04b14e8?auto=format&fit=crop&w=2400&q=90"
          alt="Authentic Habesha Traditional Kitfo Feast - Addis Foodies Media Headquarters"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.45] contrast-[1.2] animate-kenburns"
        />
        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/70 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/85" />
        
        {/* Soft Warm Ember Light Radial Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-b from-[#E53935]/25 via-[#FF8C00]/15 to-transparent blur-3xl pointer-events-none rounded-full" />
      </div>

      {/* 2. Floating Ambient Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden hidden sm:block">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className={`absolute ${p.size} opacity-35 select-none filter drop-shadow-lg`}
            style={{ top: p.top, left: p.left }}
            animate={{
              y: [0, -22, 0],
              rotate: [0, 10, -10, 0],
              opacity: [0.25, 0.55, 0.25],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: 'easeInOut',
            }}
          >
            {p.icon}
          </motion.div>
        ))}
      </div>

      <div className="site-container relative z-10 flex flex-col items-center text-center gap-10">
        
        {/* 3. Hero Content */}
        <div className="flex flex-col items-center gap-5 max-w-4xl">
          
          {/* Prominent Logo Emblem */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative flex items-center justify-center mb-1"
          >
            <div className="absolute w-24 h-24 rounded-full bg-gradient-to-tr from-[#E53935] to-[#FF8C00] opacity-40 blur-xl animate-pulse" />
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-[#E53935] via-red-600 to-[#FF8C00] p-1 shadow-2xl flex items-center justify-center border border-amber-300/40 hover:scale-105 transition-transform">
              <div className="w-full h-full rounded-xl bg-[#111827] flex items-center justify-center text-white font-display font-black text-xl sm:text-2xl tracking-tighter">
                <span className="text-[#FF8C00]">A</span>
                <span className="text-[#E53935]">F</span>
              </div>
            </div>
          </motion.div>

          {/* Small Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-mono font-bold uppercase tracking-widest text-[#FF8C00] backdrop-blur-md shadow-lg"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#FF8C00]" />
            <span>✨ Verified Ethiopian Culinary Curation & Editorial Magazine</span>
          </motion.div>

          {/* New Editorial Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.12] text-white"
          >
            The Definitive Guide to <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF8C00] via-amber-300 to-[#E53935]">
              Ethiopia’s Food Culture
            </span>
          </motion.h1>

          {/* Supporting Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-stone-300 font-medium text-base sm:text-xl leading-relaxed max-w-2xl"
          >
            Ethiopia's premiere editorial media brand and food review destination. Discover authentic dining spots, street food gems, and price audits across Addis Ababa.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-2"
          >
            <button
              onClick={onExploreClick}
              className="touch-target bg-[#E53935] hover:bg-[#B71C1C] text-white font-extrabold text-sm py-3.5 px-8 rounded-xl shadow-xl transition-all cursor-pointer hover:scale-105 flex items-center gap-2 focus-ring"
            >
              <Utensils className="w-4 h-4 text-amber-200" />
              <span>Explore Reviews</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <Link
              href="/collaborate"
              className="touch-target bg-white/10 hover:bg-white/20 text-white font-bold text-sm py-3.5 px-8 rounded-xl border border-white/20 transition-all cursor-pointer hover:scale-105 flex items-center gap-2 focus-ring backdrop-blur-md"
            >
              <Handshake className="w-4 h-4 text-[#FF8C00]" />
              <span>Work With Addis Foodies</span>
            </Link>
          </motion.div>
        </div>

        {/* 4. Large Integrated Multi-Field Search Box */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="w-full max-w-5xl bg-[#111827]/90 backdrop-blur-2xl border border-white/20 p-5 sm:p-6 rounded-3xl shadow-2xl text-left"
        >
          <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            
            {/* Field 1: Search Food / Dish */}
            <div className="flex flex-col gap-1.5 lg:col-span-2">
              <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#FF8C00] flex items-center gap-1.5">
                <Search className="w-3.5 h-3.5" />
                <span>Search Food / Dish</span>
              </label>
              <input
                type="text"
                value={foodQuery}
                onChange={(e) => setFoodQuery(e.target.value)}
                placeholder="e.g. Kitfo, Doro Wat, Burger, Macchiato..."
                className="w-full bg-[#1F2937] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-stone-400 focus:outline-none focus:border-[#E53935] transition-all font-medium"
              />
            </div>

            {/* Field 2: Location / Neighborhood */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#FF8C00] flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>Location</span>
              </label>
              <div className="relative">
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-[#1F2937] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E53935] transition-all font-medium appearance-none cursor-pointer"
                >
                  <option value="">All Neighborhoods</option>
                  <option value="Bole">Bole</option>
                  <option value="Kazanchis">Kazanchis</option>
                  <option value="Piassa">Piassa</option>
                  <option value="Sarbet">Sarbet</option>
                  <option value="Old Airport">Old Airport</option>
                  <option value="CMC">CMC</option>
                  <option value="Megenagna">Megenagna</option>
                </select>
                <ChevronDown className="w-4 h-4 text-stone-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Field 3: Price Range */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#FF8C00] flex items-center gap-1.5">
                <DollarSign className="w-3.5 h-3.5" />
                <span>Price (ETB)</span>
              </label>
              <div className="relative">
                <select
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full bg-[#1F2937] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E53935] transition-all font-medium appearance-none cursor-pointer"
                >
                  <option value="">All Prices</option>
                  <option value="under300">Under 300 ETB</option>
                  <option value="300-600">300 - 600 ETB</option>
                  <option value="600-1200">600 - 1200 ETB</option>
                  <option value="1200+">1200+ ETB (Luxury)</option>
                </select>
                <ChevronDown className="w-4 h-4 text-stone-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Field 4: Search Action Button */}
            <div className="flex flex-col justify-end">
              <button
                type="submit"
                className="w-full bg-[#E53935] hover:bg-[#B71C1C] text-white font-extrabold text-sm py-3 px-6 rounded-xl shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2 hover:scale-102 focus-ring h-[46px]"
              >
                <Search className="w-4 h-4" />
                <span>Search Spots</span>
              </button>
            </div>

          </form>

          {/* Trending Tags Row */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-4 border-t border-white/10 mt-4">
            <span className="text-xs font-mono font-bold text-stone-400 uppercase tracking-wider flex-shrink-0 flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 text-[#FF8C00]" /> Trending:
            </span>
            {trendingTags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => handleTagClick(tag)}
                className="touch-target px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/10 hover:bg-[#E53935] hover:text-white text-white border border-white/15 transition-all cursor-pointer flex-shrink-0 focus-ring"
              >
                #{tag}
              </button>
            ))}
          </div>
        </motion.div>

        {/* 5. Animated Live Statistics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl pt-2"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 backdrop-blur-md py-3.5 px-4 rounded-2xl flex flex-col items-center justify-center">
              <span className="font-mono font-black text-xl sm:text-2xl text-[#FF8C00]">{stat.value}</span>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-stone-300">{stat.label}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
