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
  // Suppress unused-param warnings — kept in interface for parent compatibility
  void onSearch;
  void onExploreClick;

  const stats = [
    { value: '500+', label: 'Reviews Published' },
    { value: '120+', label: 'Restaurants Listed' },
    { value: '10K+', label: 'Monthly Readers' },
    { value: '5 Yrs', label: 'In Addis Ababa' },
  ];

  return (
    <section className="w-full relative min-h-[80vh] lg:min-h-[88vh] flex items-end pb-12 sm:pb-20 overflow-hidden">

      {/* ── BACKGROUND: Bright Ethiopian Food Platter ───────────────── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/ethiopian_feast_hero.png"
          alt="Authentic Ethiopian Feast – Kitfo, Injera, Gomen"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          /* Design.md: no heavy dark masks — image stays visible */
          style={{ filter: 'brightness(0.78) saturate(1.1)' }}
        />
        {/* Thin bottom-to-center gradient so text is legible */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        {/* Left edge vignette for text area */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
      </div>

      {/* ── CONTENT ─────────────────────────────────────────────────── */}
      <div className="site-container relative z-10 w-full flex flex-col gap-8">

        {/* Tag pill */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-white font-mono font-black text-[11px] uppercase tracking-widest shadow-lg border border-amber-400/40"
            style={{ backgroundColor: 'var(--accent-brand)' }}
          >
            <Star className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
            Ethiopia's #1 Food Review Platform
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col gap-3 max-w-3xl"
        >
          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.05] text-white drop-shadow-xl">
            Discover Ethiopia<br />
            <span style={{ color: 'var(--accent-brand)' }}>One Bite</span>
            <span className="text-white"> at a Time</span>
          </h1>

          <p className="text-white/85 font-medium text-base sm:text-lg leading-relaxed max-w-xl drop-shadow-md">
            Trusted food reviews, unforgettable experiences, and the best culinary stories from Addis Ababa — from Bole to Piassa.
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
            className="touch-target bg-white/15 hover:bg-white/25 text-white font-bold text-sm py-3.5 px-6 rounded-xl border border-white/30 transition-all cursor-pointer flex items-center gap-2 focus-ring backdrop-blur-md"
          >
            <MapPin className="w-4 h-4" style={{ color: 'var(--accent-amber)' }} />
            <span>View Food Map</span>
          </Link>

          {/* Awards CTA */}
          <Link
            href="/events#awards"
            className="touch-target bg-amber-400/90 hover:bg-amber-300 text-zinc-950 font-extrabold text-sm py-3.5 px-6 rounded-xl shadow-xl transition-all cursor-pointer flex items-center gap-2 focus-ring hover:scale-105"
          >
            <Trophy className="w-4 h-4" />
            <span>Vote: Best Restaurant</span>
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
              <span className="font-mono font-black text-xl text-white drop-shadow-md">{s.value}</span>
              <span className="text-[11px] font-semibold text-white/65 uppercase tracking-wider">{s.label}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
