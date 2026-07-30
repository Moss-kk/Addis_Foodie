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
  ArrowRight 
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
  },
  {
    id: 'romantic-dining',
    title: 'Romantic Dining',
    description: 'Candlelight rooftop ambience, fine dining & wine pairings.',
    count: '12 Spots',
    image: '/telegram-imports/SHRIMP sky light.jpg',
    query: 'Skylight',
    icon: Heart,
  },
  {
    id: 'family-restaurants',
    title: 'Family Restaurants',
    description: 'Large Agelgil platters, garden seating & group dining.',
    count: '24 Spots',
    image: '/telegram-imports/food.jpg',
    query: 'Traditional',
    icon: Users,
  },
  {
    id: 'rooftop-views',
    title: 'Rooftop Views',
    description: 'Panoramic skyline vistas over Bole, Kazanchis & Entoto.',
    count: '15 Spots',
    image: '/telegram-imports/kito fest.jpg',
    query: 'Rooftop',
    icon: Building2,
  },
  {
    id: 'traditional-ethiopian',
    title: 'Traditional Ethiopian Food',
    description: 'Gurage Kitfo, Tire Siga raw beef, Doro Wot & cultural feasts.',
    count: '32 Spots',
    image: '/telegram-imports/Yado kitfo.jpg',
    query: 'Kitfo',
    icon: Flame,
  },
  {
    id: 'trending-this-week',
    title: 'Trending This Week',
    description: 'Viral food reels and most visited spots in Addis Ababa.',
    count: '10 Spots',
    image: '/telegram-imports/Queen Burger.jpg',
    query: 'Burger',
    icon: TrendingUp,
  },
  {
    id: 'newly-added',
    title: 'Newly Added',
    description: 'Fresh restaurant inaugurations logged by @addis.foodie.',
    count: '8 Spots',
    image: '/telegram-imports/burguriiza.jpg',
    query: 'Burgueriza',
    icon: Sparkles,
  },
  {
    id: 'hidden-gems',
    title: 'Hidden Gems',
    description: 'Secret neighborhood joints in Piassa, Kazanchis & Sarbet.',
    count: '14 Spots',
    image: '/telegram-imports/LASAGNA.jpg',
    query: 'Mamma Mia',
    icon: Compass,
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
            People browse collections, not just lists. Explore curated dining guides by occasion and vibe.
          </p>
        </div>
      </div>

      {/* Grid of 8 Curated Collection Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {collectionsList.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelectCollection?.(item.query)}
              className="group relative rounded-xl overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[#B8422E] transition-all duration-300 flex flex-col text-left cursor-pointer shadow-xs hover:shadow-md hover:-translate-y-1"
            >
              {/* Image Banner */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                
                {/* Count Badge */}
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-mono font-bold text-white uppercase border border-white/20">
                  {item.count}
                </div>

                {/* Icon Badge */}
                <div className="absolute bottom-3 left-3 w-8 h-8 rounded-lg bg-[#1A1C1E]/90 border border-white/20 flex items-center justify-center text-white shadow-xs">
                  <Icon className="w-4 h-4 text-[#B8422E]" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 flex flex-col gap-1.5 flex-1 justify-between">
                <div>
                  <h3 className="font-display font-medium text-base sm:text-lg text-[var(--text-primary)] group-hover:text-[#B8422E] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-body text-[var(--text-secondary)] line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2 flex items-center gap-1 text-[11px] font-label font-bold uppercase tracking-wider text-[#B8422E]">
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
