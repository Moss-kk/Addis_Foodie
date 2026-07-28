'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, MapPin, Ticket, Sparkles, CheckCircle, Flame } from 'lucide-react';

const featuredEvents = [
  {
    id: 'taste-of-addis-2026',
    title: 'TASTE OF ADDIS (Edition #12)',
    dates: 'Nov 12 - Nov 14, 2026',
    location: 'Tropical Gardens • Bole',
    status: 'FEATURED MEGA FESTIVAL',
    image: '/telegram-imports/IFTAR PACKAGE.jpg',
    tag: 'TASTE OF ADDIS',
    description: 'Addis Ababa’s premier open-air gastronomy festival featuring 40+ top local restaurants, artisanal coffee roasters, live music stages, and craft tastings.',
  },
  {
    id: 'kitfo-fest-2026',
    title: 'ADDIS KITFO FEST 2026',
    dates: 'Oct 03 - Oct 05, 2026',
    location: 'Monarch Rooftop • Piassa',
    status: 'FLAGSHIP CULINARY HUB',
    image: '/telegram-imports/Yado kitfo.jpg',
    tag: 'KITFO FEST 2026',
    description: '15+ legendary Kitfo houses, Gurage cultural dance troupes, fresh Ayeb & Gomen pairings, and authentic Areke tastings.',
  },
  {
    id: 'christmas-expo-2026',
    title: 'CHRISTMAS MEFTHECHA FOOD EXPO',
    dates: 'Jan 02 - Jan 06, 2027',
    location: 'Exhibition Center • Meskel Square',
    status: 'HOLIDAY SPECIAL EXPO',
    image: '/telegram-imports/Queen Burger.jpg',
    tag: 'CHRISTMAS EXPO',
    description: 'Grand holiday food expo with traditional holiday baking, Doro Wot spice markets, live butcher demonstrations, and family entertainment.',
  },
];

export default function EventBanner() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [reserved, setReserved] = useState(false);

  const currentEvent = featuredEvents[activeIdx];

  return (
    <div
      className="relative w-full rounded-[32px] overflow-hidden text-white shadow-2xl transition-all duration-300 border-2"
      style={{
        backgroundColor: '#0B0F17',
        borderColor: 'var(--accent-gold)',
        boxShadow: '0 12px 40px rgba(245, 158, 11, 0.15)',
      }}
    >
      {/* Background Graphic Image Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src={currentEvent.image}
          alt={currentEvent.title}
          fill
          className="object-cover opacity-25 brightness-75 scale-105 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F17] via-[#0B0F17]/90 to-[#0B0F17]/70" />
      </div>

      <div className="relative z-10 p-6 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
        
        {/* Left Event Content */}
        <div className="flex flex-col gap-4 max-w-2xl">
          
          <div className="flex items-center gap-3">
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-slate-950 shadow-md"
              style={{ backgroundColor: 'var(--accent-gold)' }}
            >
              <Flame className="w-3.5 h-3.5 fill-current" />
              <span>{currentEvent.tag}</span>
            </div>
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
              {currentEvent.status}
            </span>
          </div>

          <h2 className="font-display font-normal text-3xl sm:text-5xl text-white tracking-tight leading-none">
            {currentEvent.title}
          </h2>

          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-mono font-semibold text-slate-300">
            <div className="flex items-center gap-1.5" style={{ color: 'var(--accent-gold)' }}>
              <Calendar className="w-4 h-4" />
              <span>{currentEvent.dates}</span>
            </div>
            <span className="text-slate-600">•</span>
            <div className="flex items-center gap-1.5 text-slate-200">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>{currentEvent.location}</span>
            </div>
          </div>

          <p className="text-slate-300 font-body text-xs sm:text-sm leading-relaxed max-w-xl">
            {currentEvent.description}
          </p>

          {/* Event Selector Tabs */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            {featuredEvents.map((ev, i) => (
              <button
                key={ev.id}
                onClick={() => {
                  setActiveIdx(i);
                  setReserved(false);
                }}
                className={`touch-target px-3.5 py-1.5 rounded-full text-xs font-mono font-bold transition-all cursor-pointer border ${
                  activeIdx === i
                    ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-md'
                    : 'bg-white/10 text-slate-300 border-white/15 hover:bg-white/20'
                }`}
              >
                {ev.tag}
              </button>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            <button
              onClick={() => setReserved(true)}
              className="touch-target text-slate-950 font-extrabold text-xs uppercase tracking-wider py-3.5 px-7 rounded-full shadow-xl transition-all hover:scale-105 flex items-center gap-2 cursor-pointer"
              style={{ backgroundColor: 'var(--accent-gold)' }}
            >
              <Ticket className="w-4 h-4 text-slate-950" />
              <span>Reserve Free Festival Pass</span>
            </button>

            <Link
              href="/events"
              className="touch-target bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-full border border-white/20 transition-all flex items-center gap-1.5 backdrop-blur-md"
            >
              <span>View Full Festival Schedule</span>
              <span>→</span>
            </Link>
          </div>

          {reserved && (
            <div className="bg-emerald-950/90 border border-emerald-500/60 p-3.5 rounded-2xl text-emerald-300 text-xs font-bold font-mono flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Pass Reserved for {currentEvent.title}! Confirmation code sent.</span>
            </div>
          )}
        </div>

        {/* Right Event Badge Graphic */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 flex flex-col gap-3 max-w-xs w-full">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400">
            <Sparkles className="w-4 h-4" />
            <span>Official Event Organizer</span>
          </div>
          <p className="text-xs font-body text-slate-300 leading-snug">
            Produced by <strong className="text-white">@addis.foodie</strong> in collaboration with Addis Ababa Municipality &amp; local hospitality partners.
          </p>
          <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-amber-300">
            <span>Entry: FREE Admission</span>
            <span>All Ages Welcome</span>
          </div>
        </div>

      </div>
    </div>
  );
}
