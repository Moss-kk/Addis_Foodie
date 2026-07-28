'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  MapPin,
  ArrowRight,
  Trophy,
  Star,
} from 'lucide-react';

interface HeroSectionProps {
  onSearch: (filters: { query: string; location: string; price: string; cuisine: string }) => void;
  onExploreClick: () => void;
}

export default function HeroSection({ onSearch, onExploreClick }: HeroSectionProps) {
  void onSearch;
  void onExploreClick;

  const stats = [
    { value: '500+', label: 'Reviews Published' },
    { value: '120+', label: 'Restaurants Listed' },
    { value: '10K+', label: 'Monthly Readers' },
    { value: '5 Yrs', label: 'In Addis Ababa' },
  ];

  return (
    <section className="w-full site-container relative py-12 sm:py-20 my-2">
      
      {/* Stadium Container (Mastercard Stadium Geometry 40px) */}
      <div className="relative w-full rounded-[40px] overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl min-h-[75vh] flex items-end p-6 sm:p-12 lg:p-16">
        
        {/* Background Authentic Photo */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/ethiopian_feast_hero.png"
            alt="Authentic Ethiopian Feast – Kitfo, Injera, Gomen"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
            style={{ filter: 'brightness(0.72) saturate(1.15)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-[#0B0F17]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F17]/80 via-transparent to-transparent" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full flex flex-col lg:flex-row lg:items-end justify-between gap-10">

          {/* Left Column: Headline & CTAs */}
          <div className="flex flex-col gap-6 max-w-2xl">
            
            {/* Tag Pill */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-white font-mono font-bold text-xs uppercase tracking-widest shadow-lg border border-amber-400/40"
                style={{ backgroundColor: 'var(--accent-gold)' }}
              >
                <Star className="w-3.5 h-3.5 text-amber-200 fill-amber-200" />
                Ethiopia's Premier Culinary Guide
              </span>
            </motion.div>

            {/* Display Hero Title (Claude Serif Style) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col gap-3"
            >
              <h1 className="font-display font-normal text-4xl sm:text-6xl lg:text-7xl tracking-[-0.03em] leading-[1.05] text-white drop-shadow-xl">
                Discover Ethiopia <br />
                <span style={{ color: 'var(--accent-gold)' }}>One Bite</span> at a Time
              </h1>

              <p className="text-slate-300 font-body text-base sm:text-lg leading-relaxed max-w-xl">
                Trusted food reviews, verified ETB price audits, and authentic culinary stories from Addis Ababa — from Bole to Piassa.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="flex flex-wrap items-center gap-3.5"
            >
              <Link
                href="/reviews"
                className="touch-target text-slate-950 font-extrabold text-xs uppercase tracking-wider py-4 px-8 rounded-full shadow-xl transition-all cursor-pointer flex items-center gap-2 focus-ring hover:scale-105"
                style={{ backgroundColor: 'var(--accent-gold)' }}
              >
                <span>Explore Reviews</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/map"
                className="touch-target bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider py-4 px-6 rounded-full border border-white/20 transition-all cursor-pointer flex items-center gap-2 focus-ring backdrop-blur-md"
              >
                <MapPin className="w-4 h-4" style={{ color: 'var(--accent-gold)' }} />
                <span>Food Map</span>
              </Link>

              <Link
                href="/events#awards"
                className="touch-target bg-slate-900/90 hover:bg-slate-900 text-amber-400 font-extrabold text-xs uppercase tracking-wider py-4 px-6 rounded-full border border-amber-500/40 transition-all cursor-pointer flex items-center gap-2 focus-ring hover:scale-105"
              >
                <Trophy className="w-4 h-4 text-amber-400" />
                <span>Vote Awards</span>
              </Link>
            </motion.div>

            {/* Stats Strip */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-2"
            >
              {stats.map((s) => (
                <div key={s.value} className="flex flex-col">
                  <span className="font-mono font-black text-xl text-white">{s.value}</span>
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">{s.label}</span>
                </div>
              ))}
            </motion.div>

          </div>

          {/* Right Column: Mastercard Satellite Circular Portrait (Featured Venue Spotlight) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:flex flex-col items-center gap-3 relative"
          >
            <div className="relative w-52 h-52 sm:w-60 sm:h-60 rounded-full border-4 border-amber-500/30 p-1.5 bg-slate-900/60 backdrop-blur-md shadow-2xl group">
              {/* Circular Photo Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/telegram-imports/Yado kitfo.jpg"
                  alt="Spotlight Venue: Yado Kitfo Special"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Mastercard Satellite Micro-CTA (48px circular button docked bottom-right) */}
              <Link
                href="/restaurant/yado-kitfo-special"
                className="absolute bottom-0 right-0 translate-x-2 translate-y-2 w-12 h-12 rounded-full bg-white text-slate-950 flex items-center justify-center shadow-2xl border-2 border-amber-500 hover:scale-110 transition-transform cursor-pointer"
                title="View Spotlight Venue"
              >
                <ArrowRight className="w-5 h-5 text-amber-600" />
              </Link>
            </div>

            {/* Satellite Metadata Group */}
            <div className="flex flex-col items-center text-center">
              <span className="text-[11px] font-mono font-bold tracking-widest text-amber-400 uppercase">
                • SPOTLIGHT VENUE
              </span>
              <h3 className="font-display font-bold text-lg text-white">
                Yado Kitfo Special
              </h3>
              <span className="text-xs text-slate-400 font-mono">Bole Atlas • 520 ETB</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
