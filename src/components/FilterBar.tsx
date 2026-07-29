'use client';

import React from 'react';
import { Search, Zap, Flame, Coffee, Leaf, MapPin, Banknote } from 'lucide-react';

interface FilterBarProps {
  selectedLocation: string | null;
  selectedCategory: string | null;
  selectedPriceRange: string | null;
  selectedSort: string;
  searchQuery?: string;
  openNowOnly?: boolean;
  onLocationChange: (location: string | null) => void;
  onCategoryChange: (category: string | null) => void;
  onPriceRangeChange: (priceRange: string | null) => void;
  onSortChange: (sort: string) => void;
  onSearchQueryChange?: (query: string) => void;
  onToggleOpenNow?: () => void;
}

export default function FilterBar({
  selectedLocation,
  selectedCategory,
  selectedPriceRange,
  selectedSort,
  searchQuery = '',
  openNowOnly = false,
  onLocationChange,
  onCategoryChange,
  onPriceRangeChange,
  onSortChange,
  onSearchQueryChange,
  onToggleOpenNow,
}: FilterBarProps) {
  
  const presetPills = [
    { label: '🥩 Kitfo', category: 'Traditional', query: 'Kitfo' },
    { label: '☕ Fasting Latte', category: 'Coffee', query: 'Latte' },
    { label: '🌶️ Beyaynetu', category: 'Fasting', query: 'Beyaynetu' },
    { label: '🍔 Burgers', category: 'Burgers', query: 'Burger' },
    { label: '📍 Bole', location: 'Bole' },
    { label: '💰 <500 Br', price: 'under-500' },
  ];

  const handlePillClick = (pill: typeof presetPills[number]) => {
    if (pill.category) {
      onCategoryChange(selectedCategory === pill.category ? null : pill.category);
    }
    if (pill.location) {
      onLocationChange(selectedLocation === pill.location ? null : pill.location);
    }
    if (pill.price) {
      onPriceRangeChange(selectedPriceRange === pill.price ? null : pill.price);
    }
    if (pill.query && onSearchQueryChange) {
      onSearchQueryChange(searchQuery === pill.query ? '' : pill.query);
    }
  };

  return (
    <div
      className="sticky top-[72px] z-40 backdrop-blur-xl border-b py-3 px-4 sm:px-6 shadow-md transition-all flex flex-col gap-2.5"
      style={{
        backgroundColor: 'color-mix(in srgb, var(--bg-app) 95%, transparent)',
        borderColor: 'var(--border-subtle)',
      }}
    >
      <div className="flex items-center gap-3">
        {/* Sticky Dish-First Search Input */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-amber-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchQueryChange?.(e.target.value)}
            placeholder="Search dishes (e.g. Kitfo, Shiro, Fasting Latte)..."
            className="w-full pl-9 pr-4 py-2 rounded-full text-xs font-mono border focus:outline-none focus:border-amber-500 transition-colors shadow-inner"
            style={{
              backgroundColor: 'var(--bg-surface)',
              color: 'var(--text-primary)',
              borderColor: 'var(--border-subtle)',
            }}
          />
        </div>

        {/* Sort Selector */}
        <select
          value={selectedSort}
          onChange={(e) => onSortChange(e.target.value)}
          aria-label="Sort Reviews"
          className="text-xs font-mono font-bold py-2 px-3 rounded-full border shadow-xs cursor-pointer focus:outline-none shrink-0"
          style={{
            backgroundColor: 'var(--bg-surface)',
            color: 'var(--text-primary)',
            borderColor: 'var(--border-subtle)',
          }}
        >
          <option value="newest">Newest</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>

      {/* Horizontally Scrollable Dish-First Pill Carousel */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth pb-0.5">
        {/* Open Now Toggle Pill */}
        <button
          type="button"
          onClick={onToggleOpenNow}
          className={`flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold transition-all border flex items-center gap-1.5 cursor-pointer ${
            openNowOnly
              ? 'bg-emerald-500 text-slate-950 border-emerald-400 shadow-md scale-105'
              : 'bg-white/5 text-slate-300 border-white/10 hover:border-emerald-500/40'
          }`}
        >
          <Zap className="w-3.5 h-3.5 text-emerald-400 fill-current" />
          <span>⚡ Open Now</span>
        </button>

        <div className="h-4 w-px flex-shrink-0 bg-white/15 mx-0.5" />

        {/* Preset Dish & Neighborhood Pills */}
        {presetPills.map((pill, idx) => {
          const isActive =
            (pill.category && selectedCategory === pill.category) ||
            (pill.location && selectedLocation === pill.location) ||
            (pill.price && selectedPriceRange === pill.price) ||
            (pill.query && searchQuery === pill.query);

          return (
            <button
              key={idx}
              type="button"
              onClick={() => handlePillClick(pill)}
              className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-mono font-bold transition-all border cursor-pointer ${
                isActive
                  ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md scale-105'
                  : 'bg-white/5 text-slate-300 border-white/10 hover:border-amber-500/40'
              }`}
            >
              <span>{pill.label}</span>
            </button>
          );
        })}

        {/* Reset Filters Pill */}
        {(selectedCategory || selectedLocation || selectedPriceRange || searchQuery || openNowOnly) && (
          <button
            type="button"
            onClick={() => {
              onCategoryChange(null);
              onLocationChange(null);
              onPriceRangeChange(null);
              onSearchQueryChange?.('');
              if (openNowOnly && onToggleOpenNow) onToggleOpenNow();
            }}
            className="flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-mono font-bold text-red-400 hover:text-red-300 border border-red-500/30 bg-red-500/10 cursor-pointer"
          >
            ✕ Reset
          </button>
        )}
      </div>
    </div>
  );
}
