'use client';

import React from 'react';
import { 
  Coffee, 
  Heart, 
  Users, 
  Building2, 
  Flame, 
  TrendingUp, 
  Sparkles, 
  Compass, 
  ArrowRight,
  UtensilsCrossed,
  Wine,
  Crown,
  Zap,
  Gem,
  Clock
} from 'lucide-react';

interface FeaturedCollectionsProps {
  onSelectCollection?: (query: string) => void;
}

export const collectionsList = [
  {
    id: 'best-breakfast',
    title: 'Best Breakfast',
    description: 'Artisanal coffee, fresh Chechebsa, Ful, and breakfast hangouts.',
    count: '18 Spots',
    image: '/telegram-imports/Vanilla Fasting Iced late.jpg',
    query: 'Coffee',
    icon: Coffee,
    badgeColor: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
  },
  {
    id: 'romantic-dining',
    title: 'Romantic Dining',
    description: 'Candlelight rooftop ambience, fine dining & wine pairings.',
    count: '12 Spots',
    image: '/telegram-imports/SHRIMP sky light.jpg',
    query: 'Skylight',
    icon: Wine,
    badgeColor: 'bg-pink-500/20 text-pink-400 border-pink-500/30',
  },
  {
    id: 'family-restaurants',
    title: 'Family Restaurants',
    description: 'Large Agelgil platters, garden seating & group dining.',
    count: '24 Spots',
    image: '/telegram-imports/food.jpg',
    query: 'Traditional',
    icon: Users,
    badgeColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  },
  {
    id: 'rooftop-views',
    title: 'Rooftop Views',
    description: 'Panoramic skyline vistas over Bole, Kazanchis & Entoto.',
    count: '15 Spots',
    image: '/telegram-imports/kito fest.jpg',
    query: 'Rooftop',
    icon: Building2,
    badgeColor: 'bg-sky-500/20 text-sky-400 border-sky-500/30',
  },
  {
    id: 'traditional-ethiopian',
    title: 'Traditional Ethiopian Food',
    description: 'Gurage Kitfo, Tire Siga raw beef, Doro Wot & cultural feasts.',
    count: '32 Spots',
    image: '/telegram-imports/Yado kitfo.jpg',
    query: 'Kitfo',
    icon: Crown,
    badgeColor: 'bg-red-500/20 text-red-400 border-red-500/30',
  },
  {
    id: 'trending-this-week',
    title: 'Trending This Week',
    description: 'Viral food reels and most visited spots in Addis Ababa.',
    count: '10 Spots',
    image: '/telegram-imports/Queen Burger.jpg',
    query: 'Burger',
    icon: Zap,
    badgeColor: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  },
  {
    id: 'newly-added',
    title: 'Newly Added',
    description: 'Fresh restaurant inaugurations logged by @addis.foodie.',
    count: '8 Spots',
    image: '/telegram-imports/burguriiza.jpg',
    query: 'Burgueriza',
    icon: Clock,
    badgeColor: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  },
  {
    id: 'hidden-gems',
    title: 'Hidden Gems',
    description: 'Secret neighborhood joints in Piassa, Kazanchis & Sarbet.',
    count: '14 Spots',
    image: '/telegram-imports/LASAGNA.jpg',
    query: 'Mamma Mia',
    icon: Gem,
    badgeColor: 'bg-teal-500/20 text-teal-400 border-teal-500/30',
  },
];

export default function FeaturedCollections({ onSelectCollection }: FeaturedCollectionsProps) {
  return (
    <section className="flex flex-col gap-6 py-4">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b pb-4 gap-4" style={{ borderColor: 'var(--border-subtle)' }}>
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm text-xs font-label uppercase tracking-wider mb-2 border bg-[var(--bg-surface)] border-[var(--border-subtle)] text-[#B8422E]">
            <Compass className="w-4 h-4 text-[#B8422E]" />
            <span>Curated Culinary Themes</span>
          </div>
          <h2 className="font-display font-medium text-2xl sm:text-4xl text-[var(--text-primary)]">
            Featured Collections
          </h2>
          <p className="text-xs sm:text-sm font-body pt-1 text-[var(--text-secondary)]">
            People browse collections, not just lists. Touch any collection to filter instantly.
          </p>
        </div>

        <span className="text-xs font-label text-[var(--text-secondary)] uppercase tracking-wider font-bold shrink-0">
          Swipe or Scroll Horizontally ↔
        </span>
      </div>

      {/* Horizontally Side-Scrollable Cards Carousel */}
      <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 scrollbar-thin scrollbar-thumb-stone-400 dark:scrollbar-thumb-stone-700 py-1">
        {collectionsList.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelectCollection?.(item.query)}
              className="group shrink-0 w-[260px] sm:w-[290px] snap-start relative rounded-2xl overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[#B8422E] transition-all duration-300 flex flex-col text-left cursor-pointer shadow-xs hover:shadow-md hover:-translate-y-1"
            >
              {/* Image Banner */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                
                {/* Count Badge */}
                <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono font-bold text-white uppercase border border-white/20">
                  {item.count}
                </div>

                {/* Professional Web Icon Badge */}
                <div className={`absolute bottom-3 left-3 w-9 h-9 rounded-xl border flex items-center justify-center shadow-md backdrop-blur-md ${item.badgeColor}`}>
                  <Icon className="w-5 h-5" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4.5 flex flex-col gap-2 flex-1 justify-between">
                <div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-[var(--text-primary)] group-hover:text-[#B8422E] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs font-body text-[var(--text-secondary)] line-clamp-2 leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2 flex items-center gap-1.5 text-[11px] font-label font-bold uppercase tracking-wider text-[#B8422E]">
                  <span>Explore Collection</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
