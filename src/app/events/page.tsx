import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
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

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-8 flex flex-col gap-10">
        
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
        <div className="bg-gradient-to-r from-brand-dark via-[#8B1717] to-brand-primary text-white py-12 px-8 sm:px-14 rounded-3xl flex flex-col gap-4 shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 w-fit text-[11px] font-black uppercase tracking-widest text-amber-400">
            🎪 Addis Foodies Events & Festivals Ecosystem
          </div>
          <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            Culinary Experiences & Food Festivals
          </h1>
          <p className="text-white/85 font-medium text-xs sm:text-base max-w-2xl">
            Real food experiences curated by Addis Foodies: Kitfo Festival, Coffee Week roaster spotlights, Burger Battles, Tibs challenges, fasting guides, and grand restaurant openings.
          </p>
        </div>

        {/* Events Grid */}
        <section className="flex flex-col gap-6">
          <div className="flex items-center justify-between border-b border-zinc-200/50 pb-3">
            <h2 className="font-display font-extrabold text-xl sm:text-2xl text-brand-dark flex items-center gap-2">
              <span>🔥</span>
              <span>Signature Festivals & Special Promotions</span>
            </h2>
            <span className="text-xs font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Curated Experiences
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mockEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-3xl border border-zinc-200/80 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group"
              >
                {/* Poster Image & Status Badge */}
                <div className="relative h-64 w-full bg-zinc-900 overflow-hidden">
                  <Image
                    src={event.posterImage}
                    alt={event.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                    {event.status === 'LIVE_TODAY' ? (
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500 text-white font-black text-xs uppercase tracking-wider shadow-md animate-pulse">
                        🚨 TODAY!! LIVE NOW
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500 text-brand-dark font-black text-xs uppercase tracking-wider shadow-md">
                        ⏳ IN {event.countdownDays} DAYS
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

                  {/* Participating Restaurants */}
                  {event.participatingVenues && event.participatingVenues.length > 0 && (
                    <div className="flex flex-col gap-1.5">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-zinc-400">Participating Restaurants:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {event.participatingVenues.map((venue, idx) => (
                          <span key={idx} className="bg-red-50 text-brand-primary border border-red-100/60 text-[11px] font-extrabold px-2.5 py-0.5 rounded-md">
                            🏬 {venue}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Offering Tags */}
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-zinc-400">Offerings & Highlights:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {event.offeringTags.map((tag, idx) => (
                        <span key={idx} className="bg-amber-50 text-amber-900 border border-amber-200/60 text-[11px] font-bold px-2.5 py-1 rounded-full">
                          🍗 {tag}
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

      <Footer />
    </div>
  );
}
