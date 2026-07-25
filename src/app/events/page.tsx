import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../../components/Header';
import { mockEvents } from '../../data/mockEvents';
import { EventJsonLd } from '../../components/JsonLd';

export default function EventsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-bg text-brand-dark selection:bg-brand-primary/10 selection:text-brand-primary">
      {/* JSON-LD for Events */}
      {mockEvents.map((event) => (
        <EventJsonLd key={event.id} event={event} />
      ))}

      <Header />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-8 flex flex-col gap-8">
        
        {/* Navigation Breadcrumb */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-zinc-500 hover:text-brand-primary transition-colors cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            <span>Back to Discovery Feed</span>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-brand-dark via-[#8B1717] to-brand-primary text-white py-10 px-8 sm:px-12 rounded-3xl flex flex-col gap-4 shadow-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 w-fit text-[11px] font-black uppercase tracking-widest text-amber-400">
            🎪 Addis Foodies Events Portal
          </div>
          <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            Food Festivals & Culinary Challenges
          </h1>
          <p className="text-white/80 font-medium text-xs sm:text-base max-w-2xl">
            Discover landmark food festivals, cultural performances, live DJ lineups, and tasting challenges across Addis Ababa. Direct one-tap phone reservations.
          </p>
        </div>

        {/* Events Grid */}
        <section className="flex flex-col gap-6">
          <h2 className="font-display font-extrabold text-xl sm:text-2xl text-brand-dark flex items-center gap-2">
            <span>🔥</span>
            <span>Featured Events & Festivals</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mockEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-3xl border border-zinc-200/80 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group"
              >
                {/* Poster Image & Status Badge */}
                <div className="relative h-60 w-full bg-zinc-900 overflow-hidden">
                  <Image
                    src={event.posterImage}
                    alt={event.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    {event.status === 'LIVE_TODAY' ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500 text-white font-black text-xs uppercase tracking-wider shadow-md animate-pulse">
                        🚨 TODAY!! LIVE NOW
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500 text-brand-dark font-black text-xs uppercase tracking-wider shadow-md">
                        📅 UPCOMING FESTIVAL
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-col gap-1">
                    <h3 className="font-display font-black text-2xl text-white tracking-tight">
                      {event.title}
                    </h3>
                    <p className="text-xs text-amber-300 font-bold flex items-center gap-1">
                      📍 {event.locationName} ({event.landmark})
                    </p>
                  </div>
                </div>

                {/* Details Body */}
                <div className="p-6 flex flex-col gap-4 flex-1 justify-between">
                  <div className="grid grid-cols-2 gap-3 bg-zinc-50 p-4 rounded-2xl border border-zinc-200/60 text-xs">
                    <div>
                      <span className="text-zinc-400 font-bold uppercase tracking-wider text-[10px] block">Dates</span>
                      <span className="font-black text-zinc-800">{event.gregorianDates}</span>
                      {event.ethiopianDates && (
                        <span className="text-[10px] text-zinc-500 block font-semibold">({event.ethiopianDates})</span>
                      )}
                    </div>

                    <div>
                      <span className="text-zinc-400 font-bold uppercase tracking-wider text-[10px] block">Schedule</span>
                      <span className="font-black text-zinc-800">{event.timeRange}</span>
                    </div>
                  </div>

                  {/* Offering Tags */}
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-zinc-400">Offerings & Menu Highlights:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {event.offeringTags.map((tag, idx) => (
                        <span key={idx} className="bg-amber-50 text-amber-900 border border-amber-200/60 text-[11px] font-bold px-2.5 py-1 rounded-full">
                          🍗 {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Activity Tags */}
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-zinc-400">Entertainment & Activities:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {event.activities.map((act, idx) => (
                        <span key={idx} className="bg-zinc-100 text-zinc-700 text-[11px] font-semibold px-2.5 py-1 rounded-full">
                          🎭 {act}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer Action Buttons */}
                  <div className="border-t border-zinc-100 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <span className="text-xs font-black text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                      💰 {event.entranceFee}
                    </span>

                    <div className="flex items-center gap-2 w-full sm:w-auto">
                      {event.phones.map((phone, idx) => (
                        <a
                          key={idx}
                          href={`tel:${phone.replace(/-/g, '')}`}
                          className="flex-1 sm:flex-initial bg-brand-primary hover:bg-[#8B1717] text-white font-bold text-xs py-2 px-3.5 rounded-xl transition-all shadow-xs text-center flex items-center justify-center gap-1"
                        >
                          📞 {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      <footer className="border-t border-zinc-200/50 bg-white/50 py-6 text-center mt-12">
        <p className="text-[10px] sm:text-xs text-zinc-400 font-semibold tracking-wide uppercase font-sans">
          Addis Foodies © 2026 • Discovering Foods in Addis
        </p>
      </footer>
    </div>
  );
}
