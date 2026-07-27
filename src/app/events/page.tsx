'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MobileBottomNav from '../../components/layout/MobileBottomNav';
import EventShowcaseCard from '../../components/events/EventShowcaseCard';
import { mockEvents } from '../../data/mockEvents';

export default function EventsPage() {
  const [selectedStatus, setSelectedStatus] = useState<string>('ALL');

  const filteredEvents = mockEvents.filter((ev) => {
    if (selectedStatus === 'ALL') return true;
    return ev.status === selectedStatus;
  });

  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAFA] dark:bg-[#120907] text-zinc-900 dark:text-[#FFF8F6] transition-colors duration-300 selection:bg-[#E53935]/20 selection:text-[#E53935] pb-16 sm:pb-0 max-w-full overflow-x-hidden">
      <Header />

      <main className="flex-1 site-container py-8 sm:py-12 flex flex-col gap-10">
        
        {/* Breadcrumb */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-zinc-600 dark:text-[#D1C2BD] hover:text-[#FF8C00] transition-colors cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            <span>Back to Discovery Feed</span>
          </Link>
        </div>

        {/* Hero Banner */}
        <div className="bg-gradient-to-br from-[#1A100C] via-[#8B1717] to-[#E53935] text-white py-14 px-8 sm:px-14 rounded-3xl flex flex-col gap-4 shadow-2xl border border-red-500/20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 w-fit text-[11px] font-mono font-bold uppercase tracking-widest text-[#FF8C00]">
            🎪 Signature Food Festivals & Events Hub
          </div>
          <h1 className="font-syne font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            Culinary Festivals in Addis Ababa
          </h1>
          <p className="text-zinc-200 font-medium text-sm sm:text-lg max-w-3xl">
            Live coverage, vendor booth lineups, ticket info, and venue maps for Addis Ababa’s premier food festivals.
          </p>
        </div>

        {/* Landmark Featured Festival (Kitfo Fest #5 Engine) */}
        <EventShowcaseCard />

        {/* Status Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
          {['ALL', 'LIVE_TODAY', 'UPCOMING', 'COMPLETED'].map((status) => (
            <button
              key={status}
              onClick={() => setSelectedStatus(status)}
              className={`touch-target px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                selectedStatus === status
                  ? 'bg-[#E53935] text-white shadow-md font-black'
                  : 'bg-white dark:bg-[#1A100C] text-zinc-700 dark:text-[#D1C2BD] border border-zinc-200 dark:border-zinc-800 hover:border-[#FF8C00]'
              }`}
            >
              {status === 'ALL' && 'All Festivals'}
              {status === 'LIVE_TODAY' && '🚨 Live Today'}
              {status === 'UPCOMING' && '📅 Upcoming'}
              {status === 'COMPLETED' && '✓ Past Events'}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white dark:bg-[#1A100C] rounded-3xl overflow-hidden border border-zinc-200 dark:border-red-500/20 shadow-sm hover:shadow-xl dark:hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="flex flex-col">
                <div className="relative w-full aspect-[16/9] bg-zinc-100 dark:bg-[#120907] overflow-hidden">
                  <Image
                    src={event.posterImage}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {event.status === 'LIVE_TODAY' && (
                    <div className="absolute top-4 left-4 bg-[#10B981] text-white font-mono font-black text-xs px-3.5 py-1 rounded-full animate-pulse shadow-md">
                      🚨 TODAY!! LIVE NOW
                    </div>
                  )}
                </div>

                <div className="p-6 sm:p-8 flex flex-col gap-4">
                  <h3 className="font-syne font-black text-xl sm:text-2xl text-[#111827] dark:text-[#FFF8F6] group-hover:text-[#E53935] transition-colors">
                    {event.title}
                  </h3>

                  <div className="flex flex-col gap-2 text-xs font-semibold text-zinc-600 dark:text-[#D1C2BD]">
                    <div className="flex items-center gap-2">
                      <span>📅 {event.gregorianDates} ({event.ethiopianDates})</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>📍 {event.locationName} ({event.landmark})</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#FF8C00] font-mono font-bold">
                      <span>🎫 {event.entranceFee}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {event.offeringTags.map((h, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 bg-zinc-100 dark:bg-[#120907] text-zinc-700 dark:text-zinc-300 text-[10px] font-bold rounded-lg border border-zinc-200 dark:border-zinc-800"
                      >
                        🐂 {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0 flex items-center justify-between border-t border-zinc-100 dark:border-zinc-800/80 gap-3">
                <a
                  href={`tel:${event.phones[0]?.replace(/-/g, '')}`}
                  className="text-xs font-mono font-bold text-zinc-600 dark:text-[#D1C2BD] hover:text-[#E53935] transition-colors"
                >
                  📞 {event.phones[0]}
                </a>

                <Link
                  href="/collaborate"
                  className="touch-target px-5 py-2.5 rounded-xl bg-[#E53935] hover:bg-[#B71C1C] text-white text-xs font-extrabold transition-all shadow-sm hover:shadow-md cursor-pointer focus-ring flex items-center gap-1"
                >
                  <span>Sponsor Spot</span>
                  <span>↗</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
      <MobileBottomNav />
    </div>
  );
}
