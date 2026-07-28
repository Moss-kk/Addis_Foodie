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
    id: 'taste-of-addis-2026',
    title: 'TASTE OF ADDIS (Edition #12)',
    dates: 'Nov 12 - Nov 14, 2026',
    location: 'Tropical Gardens • Bole',
    status: 'FEATURED MEGA FESTIVAL',
    image: '/telegram-imports/IFTAR PACKAGE.jpg',
    description: 'Addis Ababa’s largest gastronomy festival featuring 40+ premier restaurants, artisanal coffee cupping, live acoustic bands, and craft tastings.',
  },
  {
    id: 'kitfo-fest-2026',
    title: 'ADDIS KITFO FEST 2026',
    dates: 'Oct 03 - Oct 05, 2026',
    location: 'Monarch Rooftop • Piassa',
    status: 'FLAGSHIP CULINARY HUB',
    image: '/telegram-imports/Yado kitfo.jpg',
    description: '15+ legendary Kitfo houses, Gurage cultural dancers, fresh Ayeb & Gomen pairings, and craft Areke tastings.',
  },
  {
    id: 'christmas-expo-2026',
    title: 'CHRISTMAS MEFTHECHA FOOD EXPO',
    dates: 'Jan 02 - Jan 06, 2027',
    location: 'Exhibition Center • Meskel Square',
    status: 'HOLIDAY SPECIAL EXPO',
    image: '/telegram-imports/Queen Burger.jpg',
    description: 'Grand holiday food expo featuring traditional holiday baking, Doro Wot spice markets, live butcher demonstrations, and family entertainment.',
  },
];

// Simplified Awards Category Links
const awardCategories = [
  { id: 'best-kitfo',       label: 'Vote Best Kitfo 2026 →',       icon: '🥩', nominees: ['Yado Kitfo Special', 'Kakur Traditional', 'Kategna Restaurant'] },
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
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-500 hover:text-amber-500 transition-colors"
          >
            <ArrowRight className="w-4 h-4 rotate-180" style={{ color: 'var(--accent-gold)' }} />
            <span>Back to Discovery Feed</span>
          </Link>
        </div>

        {/* 1. FEATURED REAL LOCAL FESTIVALS (Taste of Addis, Kitfo Fest, Christmas Expo) */}
        <section className="flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b pb-3 gap-2" style={{ borderColor: 'var(--border-subtle)' }}>
            <div>
              <div
                className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider mb-2 border"
                style={{
                  backgroundColor: 'var(--accent-gold-glow)',
                  borderColor: 'var(--border-subtle)',
                  color: 'var(--accent-gold)',
                }}
              >
                <Flame className="w-4 h-4 fill-current" />
                <span>Real Local Food Festivals</span>
              </div>
              <h1 className="font-display font-normal text-3xl sm:text-5xl" style={{ color: 'var(--text-primary)' }}>
                Official Festival Calendar
              </h1>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {festivalHighlights.map((ev) => (
              <div
                key={ev.id}
                className="group border rounded-3xl overflow-hidden shadow-card transition-all duration-300 flex flex-col justify-between"
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
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/80 text-amber-400 font-mono font-bold text-[10px] uppercase border border-amber-500/30">
                    {ev.status}
                  </span>
                </div>

                <div className="p-6 flex flex-col gap-3 flex-1 justify-between">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-display font-bold text-xl transition-colors group-hover:text-amber-500" style={{ color: 'var(--text-primary)' }}>
                      {ev.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-amber-500">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{ev.dates}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" />
                      <span>{ev.location}</span>
                    </div>
                    <p className="text-xs font-body leading-relaxed pt-1" style={{ color: 'var(--text-secondary)' }}>
                      {ev.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t flex items-center justify-between" style={{ borderColor: 'var(--border-subtle)' }}>
                    <button
                      onClick={() => setReservedEvent(ev.title)}
                      className="touch-target w-full py-3 rounded-full text-slate-950 text-xs font-extrabold transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer hover:scale-105"
                      style={{ backgroundColor: 'var(--accent-gold)' }}
                    >
                      <Ticket className="w-4 h-4 text-slate-950" />
                      <span>Reserve Pass</span>
                    </button>
                  </div>

                  {reservedEvent === ev.title && (
                    <div className="p-2.5 rounded-xl bg-emerald-950/90 border border-emerald-500 text-emerald-300 text-[11px] font-mono font-bold flex items-center gap-1.5">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Pass Reserved! SMS confirmation sent.</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. SIMPLIFIED AWARDS VOTING LINK MATRIX */}
        <section
          id="awards"
          className="relative rounded-[32px] overflow-hidden text-white shadow-2xl border border-amber-500/30 p-6 sm:p-10"
          style={{ background: 'linear-gradient(145deg, #0B0F17, #161E2E, #0B0F17)' }}
        >
          <div className="flex flex-col gap-6">
            
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-amber-500/20 border border-amber-500/50 flex items-center justify-center text-amber-400">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="font-display font-normal text-2xl sm:text-4xl text-white">
                    AddisFoodie <span className="text-amber-400">Awards</span> 2026
                  </h2>
                  <p className="text-xs text-slate-400 font-mono pt-0.5">
                    Direct Voting Matrix • Live Public Polls
                  </p>
                </div>
              </div>

              <div className="px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-300 font-mono font-bold text-xs border border-amber-500/30 w-fit">
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
                    className="rounded-2xl p-5 flex flex-col justify-between gap-4 transition-all border"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.03)',
                      borderColor: hasVoted ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)',
                    }}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-2xl">{cat.icon}</span>
                      <h3 className="font-display font-bold text-base text-amber-400">{cat.label}</h3>
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
                            className="w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-between gap-2 cursor-pointer"
                            style={{
                              backgroundColor: isSelected
                                ? 'rgba(245,158,11,0.25)'
                                : 'rgba(255,255,255,0.06)',
                              border: isSelected
                                ? '1px solid var(--accent-gold)'
                                : '1px solid rgba(255,255,255,0.08)',
                              color: isSelected ? '#F59E0B' : '#F8FAFC',
                              opacity: hasVoted && !isSelected ? 0.4 : 1,
                              cursor: hasVoted && !isSelected ? 'not-allowed' : 'pointer',
                            }}
                          >
                            <span>{nominee}</span>
                            {isSelected ? (
                              <Star className="w-4 h-4 fill-current text-amber-400 shrink-0" />
                            ) : !hasVoted ? (
                              <span className="text-[11px] font-mono text-amber-400">Vote →</span>
                            ) : null}
                          </button>
                        );
                      })}
                    </div>

                    {hasVoted && (
                      <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold px-2.5 py-1.5 rounded-lg bg-amber-500/15 text-amber-300">
                        <Sparkles className="w-3.5 h-3.5" />
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
