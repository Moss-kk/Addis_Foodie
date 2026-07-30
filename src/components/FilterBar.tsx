import React from 'react';
import { Search, Zap, Flame, Coffee, MapPin, Utensils, Soup, Sandwich, Banknote, X } from 'lucide-react';

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
    { label: 'Kitfo', category: 'Traditional', query: 'Kitfo', icon: Utensils },
    { label: 'Fasting Latte', category: 'Coffee', query: 'Latte', icon: Coffee },
    { label: 'Beyaynetu', category: 'Fasting', query: 'Beyaynetu', icon: Soup },
    { label: 'Burgers', category: 'Burgers', query: 'Burger', icon: Sandwich },
    { label: 'Bole Atlas', location: 'Bole', icon: MapPin },
    { label: '<500 Br', price: 'under-500', icon: Banknote },
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
      className="sticky top-[64px] z-30 backdrop-blur-md border-b py-3 px-4 sm:px-6 transition-all flex flex-col gap-2.5"
      style={{
        backgroundColor: 'var(--bg-app)',
        borderColor: 'var(--border-subtle)',
      }}
    >
      <div className="flex items-center gap-3">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#B8422E]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchQueryChange?.(e.target.value)}
            placeholder="Search dishes (Kitfo, Shiro, Fasting Latte)..."
            className="w-full pl-9 pr-4 py-2 rounded-md text-xs font-body border focus:outline-none focus:border-[#B8422E] transition-colors shadow-xs"
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
          className="text-xs font-label font-bold py-2 px-3 rounded-md border shadow-xs cursor-pointer focus:outline-none shrink-0"
          style={{
            backgroundColor: 'var(--bg-surface)',
            color: 'var(--text-primary)',
            borderColor: 'var(--border-subtle)',
          }}
        >
          <option value="newest">Newest First</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>

      {/* Horizontally Scrollable Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth pb-0.5">
        {/* Open Now Toggle Pill */}
        <button
          type="button"
          onClick={onToggleOpenNow}
          className={`flex-shrink-0 px-3 py-1.5 rounded-sm text-xs font-label font-bold transition-all border flex items-center gap-1.5 cursor-pointer ${
            openNowOnly
              ? 'bg-[#B8422E] text-white border-[#B8422E]'
              : 'bg-[var(--bg-surface)] text-[var(--text-primary)] border-[var(--border-subtle)] hover:border-[#B8422E]'
          }`}
        >
          <Zap className="w-3.5 h-3.5" />
          <span>Open Now</span>
        </button>

        <div className="h-4 w-px flex-shrink-0 bg-[var(--border-subtle)] mx-0.5" />

        {/* Preset Category Pills */}
        {presetPills.map((pill, idx) => {
          const Icon = pill.icon;
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
              className={`flex-shrink-0 px-3 py-1.5 rounded-sm text-xs font-label font-bold transition-all border flex items-center gap-1.5 cursor-pointer ${
                isActive
                  ? 'bg-[#1A1C1E] text-white border-[#1A1C1E]'
                  : 'bg-[var(--bg-surface)] text-[var(--text-primary)] border-[var(--border-subtle)] hover:border-[#B8422E]'
              }`}
            >
              <Icon className="w-3.5 h-3.5 text-[#B8422E]" />
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
            className="flex-shrink-0 px-3 py-1.5 rounded-sm text-xs font-label font-bold text-[#B8422E] hover:underline border border-[#B8422E]/30 bg-[#B8422E]/10 cursor-pointer flex items-center gap-1"
          >
            <X className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        )}
      </div>
    </div>
  );
}
