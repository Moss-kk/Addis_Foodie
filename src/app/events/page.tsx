'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Calendar, 
  MapPin, 
  Ticket, 
  Sparkles, 
  ArrowRight,
  Trophy,
  Star,
  CheckCircle,
  Flame
} from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MobileBottomNav from '../../components/layout/MobileBottomNav';

const festivalHighlights = [
  {
    id: 'kitfo-fest-2026',
    title: 'ADDIS KITFO FEST 2026 (Tsom Mefcha)',
    dates: 'Oct 03 - Oct 05, 2026',
    location: 'Monarch Rooftop • Piassa',
    status: 'FLAGSHIP CULINARY HUB',
    organizer: 'Addis Foodies with Tiru Kitfo',
    image: '/telegram-imports/Yado kitfo.jpg',
    description: '15+ legendary Kitfo houses, Gurage cultural dance troupes, fresh Ayeb & Gomen pairings, and authentic Areke tastings. Co-hosted by Addis Foodies with Tiru Kitfo.',
  },
  {
    id: 'christmas-expo-2026',
    title: 'CHRISTMAS MEFTHECHA FOOD EXPO',
    dates: 'Jan 02 - Jan 06, 2027',
    location: 'Exhibition Center • Meskel Square',
    status: 'HOLIDAY SPECIAL EXPO',
    organizer: 'Addis Foodies & City Partners',
    image: '/telegram-imports/Queen Burger.jpg',
    description: 'Grand holiday food expo featuring traditional holiday baking, Doro Wot spice markets, live butcher demonstrations, and family entertainment.',
  },
  {
    id: 'rooftop-tsom-kibela-2027',
    title: 'ROOFTOP TSOM KIBELA EVENT',
    dates: 'Mar 12 - Mar 14, 2027',
    location: 'Sky Lounge • Bole',
    status: 'PRE-FASTING CELEBRATION',
    organizer: 'Addis Foodies Curation',
    image: '/telegram-imports/IFTAR PACKAGE.jpg',
    description: 'Exclusive pre-fasting rooftop feast celebrating Ethiopian meat culture with premium ribeye tibs, kitfo, tej pairings, and live acoustic music.',
  },
];

// Awards Category Links
const awardCategories = [
  { id: 'best-kitfo',       label: 'Vote Best Kitfo 2026 →',       icon: '🥩', nominees: ['Tiru Kitfo Special', 'Yado Kitfo', 'Kakur Traditional'] },
  { id: 'best-burger',      label: 'Vote Best Burger 2026 →',      icon: '🍔', nominees: ['Titich Gourmet Burger', 'Roadrunner Burger', 'Slam Burger'] },
  { id: 'best-cafe',        label: 'Vote Best Cafe 2026 →',        icon: '☕', nominees: ['Tomoca Coffee', 'Galani Café', 'Kaldi\'s Coffee'] },
  { id: 'best-traditional', label: 'Vote Best Traditional 2026 →', icon: '🍲', nominees: ['Yod Abyssinia', 'Fin Fine Cultural', 'Habesha 2000'] },
  { id: 'best-street-food', label: 'Vote Best Street Food 2026 →', icon: '🌮', nominees: ['Piassa Tibs Corner', 'Merkato Sambusa', 'Shiro Mado'] },
  { id: 'best-pastry',      label: 'Vote Best Pastry 2026 →',      icon: '🧁', nominees: ['Enrico Pastry', 'Keremet Pastry', 'Fornaio Café'] },
];

export default function EventsPage() {
  const [reservedEvent, setReservedEvent] = useState<string | null>(null);
  const [votedCategory, setVotedCategory] = useState<Record<string, string>>({});

  return (
    <div
      className="flex flex-col min-h-screen transition-colors duration-300 pb-16 sm:pb-0 max-w-full overflow-x-hidden"
      style={{ backgroundColor: 'var(--bg-app)', color: 'var(--text-primary)' }}
    >
      <Header />

      <main className="flex-1 site-container py-8 sm:py-12 flex flex-col gap-12">
        
        {/* Breadcrumb */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-label uppercase text-[var(--text-secondary)] hover:text-[#B8422E] transition-colors"
          >
            <ArrowRight className="w-4 h-4 rotate-180 text-[#B8422E]" />
            <span>Back to Discovery Feed</span>
          </Link>
        </div>

        {/* 1. FEATURED REAL LOCAL FESTIVALS */}
        <section className="flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b pb-3 gap-2" style={{ borderColor: 'var(--border-subtle)' }}>
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-sm text-xs font-label uppercase tracking-widest text-[#B8422E] mb-2 border"
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  borderColor: 'var(--border-subtle)',
                }}
              >
                <Flame className="w-3.5 h-3.5 fill-current text-[#B8422E]" />
                <span>Real Local Food Festivals</span>
              </div>
              <h1 className="font-display font-medium text-3xl sm:text-5xl" style={{ color: 'var(--text-primary)' }}>
                Official Festival Calendar
              </h1>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {festivalHighlights.map((ev) => (
              <div
                key={ev.id}
                className="group border rounded-lg overflow-hidden transition-all duration-300 flex flex-col justify-between"
                style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                  <Image
                    src={ev.image}
                    alt={ev.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-90"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-sm bg-[#1A1C1E]/90 text-white font-label text-[10px] uppercase border border-white/10">
                    {ev.status}
                  </span>
                </div>

                <div className="p-6 flex flex-col gap-3 flex-1 justify-between">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-display font-medium text-xl transition-colors group-hover:text-[#B8422E]" style={{ color: 'var(--text-primary)' }}>
                      {ev.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs font-label text-[#B8422E]">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{ev.dates}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-label text-slate-500">
                      <MapPin className="w-3.5 h-3.5 text-[#B8422E]" />
                      <span>{ev.location}</span>
                    </div>
                    <p className="text-xs font-body leading-relaxed pt-1" style={{ color: 'var(--text-secondary)' }}>
                      {ev.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t flex flex-col gap-2" style={{ borderColor: 'var(--border-subtle)' }}>
                    <button
                      onClick={() => setReservedEvent(ev.title)}
                      className="button-primary w-full py-2.5 rounded-md text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer hover:scale-[1.01]"
                    >
                      <Ticket className="w-4 h-4 text-white" />
                      <span>Reserve Pass</span>
                    </button>

                    {reservedEvent === ev.title && (
                      <div className="p-2.5 rounded-md bg-emerald-500/10 border border-emerald-500 text-emerald-800 text-[11px] font-label font-bold flex items-center gap-1.5">
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Pass Reserved! SMS confirmation sent.</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. AWARDS VOTING MATRIX */}
        <section
          id="awards"
          className="relative rounded-lg overflow-hidden text-white shadow-xs border p-6 sm:p-10"
          style={{ backgroundColor: '#1A1C1E', borderColor: 'var(--border-subtle)' }}
        >
          <div className="flex flex-col gap-6">
            
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-md bg-[#B8422E] flex items-center justify-center text-white">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-display font-medium text-2xl sm:text-4xl text-white">
                    AddisFoodie <span className="text-[#B8422E]">Awards</span> 2026
                  </h2>
                  <p className="text-xs text-slate-400 font-label pt-0.5">
                    Direct Voting Matrix • Live Public Polls
                  </p>
                </div>
              </div>

              <div className="px-3.5 py-1.5 rounded-sm bg-white/10 text-white font-label text-xs border border-white/20 w-fit">
                ⚡ VOTE CATEGORIES
              </div>
            </div>

            {/* Voting Category Link Matrix Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {awardCategories.map((cat) => {
                const hasVoted = !!votedCategory[cat.id];
                return (
                  <div
                    key={cat.id}
                    className="rounded-md p-5 flex flex-col justify-between gap-4 transition-all border"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.03)',
                      borderColor: hasVoted ? '#B8422E' : 'rgba(255,255,255,0.1)',
                    }}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-2xl">{cat.icon}</span>
                      <h3 className="font-display font-medium text-base text-white">{cat.label}</h3>
                    </div>

                    <div className="flex flex-col gap-2">
                      {cat.nominees.map((nominee) => {
                        const isSelected = votedCategory[cat.id] === nominee;
                        return (
                          <button
                            key={nominee}
                            onClick={() => {
                              if (!hasVoted) {
                                setVotedCategory((prev) => ({ ...prev, [cat.id]: nominee }));
                              }
                            }}
                            disabled={hasVoted && !isSelected}
                            className="w-full text-left px-3 py-2 rounded-sm text-xs font-label transition-all flex items-center justify-between gap-2 cursor-pointer"
                            style={{
                              backgroundColor: isSelected
                                ? '#B8422E'
                                : 'rgba(255,255,255,0.06)',
                              border: isSelected
                                ? '1px solid #B8422E'
                                : '1px solid rgba(255,255,255,0.08)',
                              color: '#FFFFFF',
                              opacity: hasVoted && !isSelected ? 0.4 : 1,
                              cursor: hasVoted && !isSelected ? 'not-allowed' : 'pointer',
                            }}
                          >
                            <span>{nominee}</span>
                            {isSelected ? (
                              <Star className="w-3.5 h-3.5 fill-current text-white shrink-0" />
                            ) : !hasVoted ? (
                              <span className="text-[10px] font-label text-slate-300">Vote →</span>
                            ) : null}
                          </button>
                        );
                      })}
                    </div>

                    {hasVoted && (
                      <div className="flex items-center gap-1.5 text-[11px] font-label px-2.5 py-1 rounded-sm bg-white/10 text-white">
                        <Sparkles className="w-3.5 h-3.5 text-[#B8422E]" />
                        <span>Voted: {votedCategory[cat.id]}</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </section>

      </main>

      <Footer />
      <MobileBottomNav />
    </div>
  );
}
