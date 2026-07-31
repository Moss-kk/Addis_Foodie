'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Calendar, 
  MapPin, 
  Ticket, 
  ArrowRight,
  Trophy,
  Flame,
  Film,
  Play,
  X,
  UtensilsCrossed,
  Sparkles
} from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MobileBottomNav from '../../components/layout/MobileBottomNav';
import AddisFoodieAwards from '../../components/home/AddisFoodieAwards';

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
    btnLabel: 'Reserve Free Pass',
    actionType: 'reserve',
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
    btnLabel: 'Reserve Free Pass',
    actionType: 'reserve',
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
    btnLabel: 'Reserve Free Pass',
    actionType: 'reserve',
  },
  {
    id: 'addis-foodie-awards-2026',
    title: 'ADDIS FOODIE AWARDS 2026',
    dates: 'Voting Open Now',
    location: 'Official Online Ballot',
    status: 'ANNUAL CULINARY POLL',
    organizer: 'Addis Foodie Curation',
    image: '/telegram-imports/Addis Foodie Award.jpg',
    description: 'Cast your official vote for the best restaurants, kitfo joints, gourmet burgers, cafes, and street food in Addis Ababa.',
    btnLabel: 'Vote Now',
    actionType: 'vote',
  },
];

const newSpotOpenings = [
  {
    id: 'spot-1',
    name: 'Burgueriza Gourmet Lounge',
    location: 'Bole Atlas • Ground Floor Kelsam Building',
    type: 'Gourmet Cheese Burgers & Waffle Fries',
    openingDate: 'Grand Opening Spotlight',
    desc: 'Flame-grilled prime beef patties with melted cheddar, jalapeño glaze, and seasoned waffle fries.',
    image: '/telegram-imports/burguriiza.jpg',
  },
  {
    id: 'spot-2',
    name: 'Capital Hotel & Spa Fine Dining',
    location: 'Haile Gebreselassie Ave • Near 22 Mazoria',
    type: 'International Culinary & Fine Ethiopian Feasts',
    openingDate: 'Now Open • Flagship Dining',
    desc: 'Luxury buffet and fine dining experience featuring authentic Kitfo, steak cuts, and gourmet desserts.',
    image: '/telegram-imports/capital.jpg',
  },
];

const eventReels = [
  {
    id: 'reel-1',
    title: 'Kitfo Preparation Behind The Scenes',
    restaurant: 'Tiru Kitfo • Monarch Rooftop',
    views: '45.2K',
    thumbnail: '/telegram-imports/Yado kitfo.jpg',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-cooking-food-in-a-pan-41555-large.mp4',
    badge: 'KITFO FEST REEL',
  },
  {
    id: 'reel-2',
    title: 'Classic Queen Beef Burger Sizzle',
    restaurant: 'Titich Gourmet • Bole',
    views: '38.9K',
    thumbnail: '/telegram-imports/Queen Burger.jpg',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-chef-preparing-a-dish-41553-large.mp4',
    badge: 'BURGER BATTLE REEL',
  },
  {
    id: 'reel-3',
    title: 'Vanilla Fasting Iced Latte Pour',
    restaurant: 'Tomoca Coffee • Atlas',
    views: '29.1K',
    thumbnail: '/telegram-imports/Vanilla Fasting Iced late.jpg',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-barista-pouring-milk-in-a-coffee-cup-41554-large.mp4',
    badge: 'COFFEE WEEK REEL',
  },
  {
    id: 'reel-4',
    title: 'Grand Habesha Feast Platter Showcase',
    restaurant: 'Yod Abyssinia • Bole',
    views: '52.4K',
    thumbnail: '/telegram-imports/IFTAR PACKAGE.jpg',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-cooking-food-in-a-pan-41555-large.mp4',
    badge: 'FESTIVAL REEL',
  },
];

export default function EventsPage() {
  const [reservedEvent, setReservedEvent] = useState<string | null>(null);
  const [activeVideo, setActiveVideo] = useState<typeof eventReels[0] | null>(null);

  const handleAction = (title: string, actionType: string) => {
    if (actionType === 'details') {
      window.location.href = '/collaborate';
    } else {
      setReservedEvent(title);
    }
  };

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

        {/* 1. MAJOR FESTIVALS & AWARDS CARDS (SIDE-SCROLLABLE HORIZONTAL CAROUSEL ON MOBILE) */}
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
                <span>Major Festivals &amp; Awards</span>
              </div>
              <h1 className="font-display font-medium text-3xl sm:text-5xl" style={{ color: 'var(--text-primary)' }}>
                Official Festival &amp; Event Calendar
              </h1>
            </div>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible scrollbar-none">
            {festivalHighlights.map((ev) => (
              <div key={ev.id} className="shrink-0 w-[80vw] sm:w-auto snap-center">
                <div
                  className="group border rounded-lg overflow-hidden transition-all duration-300 flex flex-col justify-between h-full"
                  style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                    <Image
                      src={ev.image}
                      alt={ev.title}
                      fill
                      sizes="(max-width: 768px) 80vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-90"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-sm bg-[#1A1C1E]/90 text-white font-label text-[10px] uppercase border border-white/10">
                      {ev.status}
                    </span>
                  </div>

                  <div className="p-5 flex flex-col gap-3 flex-1 justify-between">
                    <div className="flex flex-col gap-2">
                      <h3 className="font-display font-medium text-lg transition-colors group-hover:text-[#B8422E]" style={{ color: 'var(--text-primary)' }}>
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

                    <div className="pt-3 border-t flex flex-col gap-2" style={{ borderColor: 'var(--border-subtle)' }}>
                      <button
                        onClick={() => handleAction(ev.title, ev.actionType)}
                        className="button-primary w-full py-2.5 rounded-md text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer hover:scale-[1.01]"
                      >
                        {ev.actionType === 'details' ? <Trophy className="w-4 h-4 text-white" /> : <Ticket className="w-4 h-4 text-white" />}
                        <span>{ev.btnLabel}</span>
                      </button>

                      {reservedEvent === ev.title && (
                        <div className="p-2 rounded-md bg-emerald-500/10 border border-emerald-500 text-emerald-800 text-[11px] font-label font-bold flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>Pass Reserved! Confirmation logged.</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. EVENT VIDEO REELS CAROUSEL STRIP (SIDE-SCROLLABLE HORIZONTAL CAROUSEL ON MOBILE) */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: 'var(--border-subtle)' }}>
            <div className="flex items-center gap-2">
              <Film className="w-5 h-5 text-[#B8422E]" />
              <h3 className="font-display font-medium text-xl sm:text-2xl" style={{ color: 'var(--text-primary)' }}>
                Festival Video Reels &amp; Highlights
              </h3>
            </div>
            <span className="text-xs font-label text-[#B8422E]">9:16 Festival Clips</span>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible scrollbar-none">
            {eventReels.map((reel) => (
              <div key={reel.id} className="shrink-0 w-[60vw] sm:w-auto snap-center">
                <div
                  onClick={() => setActiveVideo(reel)}
                  className="group relative aspect-[9/16] w-full rounded-md overflow-hidden bg-slate-900 border border-[var(--border-subtle)] shadow-xs transition-all duration-300 cursor-pointer hover:-translate-y-1"
                >
                  <Image
                    src={reel.thumbnail}
                    alt={reel.title}
                    fill
                    sizes="(max-width: 768px) 60vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-85 group-hover:brightness-95"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between z-10">
                    <span className="px-2 py-0.5 rounded-sm bg-[#1A1C1E]/90 text-white font-label font-bold text-[9px]">
                      {reel.badge}
                    </span>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="w-10 h-10 rounded-full bg-[#B8422E] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <Play className="w-4 h-4 fill-white ml-0.5" />
                    </div>
                  </div>

                  <div className="absolute bottom-2.5 left-2.5 right-2.5 z-10 flex flex-col gap-1 text-white">
                    <h4 className="font-display font-medium text-xs line-clamp-2 leading-snug text-white">
                      {reel.title}
                    </h4>
                    <span className="text-[10px] font-label text-slate-300">{reel.restaurant}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. NEW RESTAURANT OPENINGS & SPOTLIGHT SPOTS (SIDE-SCROLLABLE HORIZONTAL CAROUSEL ON MOBILE) */}
        <section className="flex flex-col gap-6">
          <div className="border-b pb-3" style={{ borderColor: 'var(--border-subtle)' }}>
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-sm text-xs font-label uppercase tracking-widest text-[#B8422E] mb-1 border"
              style={{
                backgroundColor: 'var(--bg-surface)',
                borderColor: 'var(--border-subtle)',
              }}
            >
              <UtensilsCrossed className="w-3.5 h-3.5 text-[#B8422E]" />
              <span>Inauguration News</span>
            </div>
            <h2 className="font-display font-medium text-2xl sm:text-3xl" style={{ color: 'var(--text-primary)' }}>
              New Restaurant Openings &amp; Spotlights
            </h2>
            <p className="text-xs sm:text-sm font-body pt-1" style={{ color: 'var(--text-secondary)' }}>
              Fresh food spot inaugurations logged by @addis.foodie inspectors across Bole, Kazanchis &amp; Piassa.
            </p>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 sm:grid sm:grid-cols-2 sm:overflow-visible scrollbar-none">
            {newSpotOpenings.map((spot) => (
              <div key={spot.id} className="shrink-0 w-[85vw] sm:w-auto snap-center">
                <div
                  className="p-6 rounded-lg border flex flex-col sm:flex-row gap-5 items-center shadow-xs h-full"
                  style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}
                >
                  <div className="relative w-full sm:w-36 h-36 rounded-md overflow-hidden shrink-0 bg-slate-900">
                    <Image
                      src={spot.image}
                      alt={spot.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-col gap-2 flex-1">
                    <span className="text-[10px] font-label text-[#B8422E] uppercase font-bold">
                      {spot.openingDate}
                    </span>
                    <h3 className="font-display font-medium text-lg" style={{ color: 'var(--text-primary)' }}>
                      {spot.name}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs font-label text-slate-500">
                      <MapPin className="w-3.5 h-3.5 text-[#B8422E]" />
                      <span>{spot.location}</span>
                    </div>
                    <p className="text-xs font-body leading-relaxed pt-1" style={{ color: 'var(--text-secondary)' }}>
                      {spot.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      <Footer />
      <MobileBottomNav />

      {/* Video Lightbox Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-md bg-[#1A1C1E] rounded-md border border-white/10 overflow-hidden shadow-xl flex flex-col">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-3 right-3 z-20 w-8 h-8 rounded-sm bg-black/70 text-white flex items-center justify-center hover:bg-[#B8422E] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative aspect-[9/16] w-full bg-black">
              <video
                src={activeVideo.videoUrl}
                controls
                autoPlay
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-4 bg-[#1A1C1E] text-white flex flex-col gap-1">
              <span className="text-[10px] font-label font-bold text-[#B8422E] uppercase">
                {activeVideo.badge} • {activeVideo.restaurant}
              </span>
              <h4 className="font-display font-medium text-sm text-white">{activeVideo.title}</h4>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
