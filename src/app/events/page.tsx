'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { mockEvents } from '../../data/mockEvents';

export default function EventsPage() {
  const [selectedStatus, setSelectedStatus] = useState<string>('ALL');

  const filteredEvents = mockEvents.filter((ev) => {
    if (selectedStatus === 'ALL') return true;
    return ev.status === selectedStatus;
  });

  return (
    <div className="flex flex-col min-h-screen bg-[#09090B] text-zinc-100 selection:bg-[#F59E0B]/20 selection:text-[#F59E0B]">
      <Header />

      <main className="flex-1 site-container py-8 sm:py-12 flex flex-col gap-10">
        
        {/* Breadcrumb */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-zinc-400 hover:text-[#F59E0B] transition-colors cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            <span>Back to Discovery Feed</span>
          </Link>
        </div>

        {/* Hero Banner */}
        <div className="bg-gradient-to-br from-[#121215] via-[#18181C] to-black text-white py-14 px-8 sm:px-14 rounded-3xl flex flex-col gap-4 shadow-2xl border border-zinc-800">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 w-fit text-[11px] font-mono font-bold uppercase tracking-widest text-[#F59E0B]">
            🎪 Signature Food Festivals & Events Hub
          </div>
          <h1 className="font-syne font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            Culinary Festivals in Addis Ababa
          </h1>
          <p className="text-zinc-300 font-medium text-sm sm:text-lg max-w-3xl">
            Live coverage, vendor booth lineups, ticket info, and venue maps for Addis Ababa’s premier food festivals.
          </p>
        </div>

        {/* Status Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
          {['ALL', 'LIVE_TODAY', 'UPCOMING', 'COMPLETED'].map((status) => (
            <button
              key={status}
              onClick={() => setSelectedStatus(status)}
              className={`touch-target px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                selectedStatus === status
                  ? 'bg-[#F59E0B] text-zinc-950 shadow-md font-black'
                  : 'bg-zinc-900 text-zinc-300 border border-zinc-800 hover:bg-zinc-800'
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
              className="bg-zinc-900/90 rounded-3xl overflow-hidden border border-zinc-800 shadow-xl hover:shadow-2xl hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="flex flex-col">
                <div className="relative w-full aspect-[16/9] bg-zinc-950 overflow-hidden">
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
                  <h3 className="font-syne font-black text-xl sm:text-2xl text-zinc-100 group-hover:text-[#F59E0B] transition-colors">
                    {event.title}
                  </h3>

                  <div className="flex flex-col gap-2 text-xs font-medium text-zinc-400">
                    <div className="flex items-center gap-2">
                      <span>📅</span>
                      <span className="font-bold text-zinc-200">{event.gregorianDates}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>📍</span>
                      <span className="text-zinc-300">{event.locationName} ({event.landmark})</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>🎟️</span>
                      <span className="font-mono font-bold text-[#F59E0B]">{event.entranceFee}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {event.offeringTags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-full bg-zinc-950 text-amber-400 text-[10px] font-bold uppercase tracking-wider border border-zinc-800">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between border-t border-zinc-800/80 mt-2">
                <span className="text-xs font-mono font-bold text-zinc-400">
                  📞 {event.phones[0]}
                </span>
                <Link
                  href="/collaborate"
                  className="touch-target px-4 py-2 rounded-xl bg-[#F59E0B] hover:bg-amber-400 text-zinc-950 text-xs font-black transition-all cursor-pointer"
                >
                  Sponsor Slot ↗
                </Link>
              </div>
            </div>
          ))}
        </div>

      </main>

      <Footer />
    </div>
  );
}
