'use client';

import React from 'react';
import { MapPin, Utensils, Coffee, Leaf, Flame, Banknote } from 'lucide-react';

interface FilterBarProps {
  selectedLocation: string | null;
  selectedCategory: string | null;
  selectedPriceRange: string | null;
  selectedSort: string;
  onLocationChange: (location: string | null) => void;
  onCategoryChange: (category: string | null) => void;
  onPriceRangeChange: (priceRange: string | null) => void;
  onSortChange: (sort: string) => void;
}

export default function FilterBar({
  selectedLocation,
  selectedCategory,
  selectedPriceRange,
  selectedSort,
  onLocationChange,
  onCategoryChange,
  onPriceRangeChange,
  onSortChange,
}: FilterBarProps) {
  const locations = [
    { label: 'Bole',      value: 'Bole',      icon: MapPin },
    { label: 'Kazanchis', value: 'Kazanchis', icon: MapPin },
    { label: 'Piassa',    value: 'Piassa',    icon: MapPin },
    { label: 'Sarbet',    value: 'Sarbet',    icon: MapPin },
  ];

  const categories = [
    { label: 'Burgers',     value: 'Burgers',     icon: Flame    },
    { label: 'Coffee',      value: 'Coffee',      icon: Coffee   },
    { label: 'Fasting',     value: 'Fasting',     icon: Leaf     },
    { label: 'Traditional', value: 'Traditional', icon: Utensils },
  ];

  const priceRanges = [
    { label: 'Under 300 Br', value: 'under-300', icon: Banknote },
    { label: '300–700 Br',   value: '300-700',   icon: Banknote },
    { label: '700+ Br',      value: '700-plus',  icon: Banknote },
  ];

  const isAllActive = !selectedLocation && !selectedCategory && !selectedPriceRange;

  const handleReset = () => {
    onLocationChange(null);
    onCategoryChange(null);
    onPriceRangeChange(null);
  };

  /* Chip style helpers */
  const activeChipStyle: React.CSSProperties = {
    backgroundColor: 'var(--accent-brand)',
    color: '#ffffff',
    borderColor: 'var(--accent-brand)',
    fontWeight: '900',
    transform: 'scale(1.03)',
  };
  const idleChipStyle: React.CSSProperties = {
    backgroundColor: 'var(--bg-surface)',
    color: 'var(--text-body)',
    borderColor: 'var(--border-hairline)',
  };

  return (
    <div
      className="sticky top-14 z-30 backdrop-blur-md border-b py-2.5 px-4 sm:px-6 shadow-xs transition-colors"
      style={{
        backgroundColor: 'color-mix(in srgb, var(--bg-canvas) 95%, transparent)',
        borderColor: 'var(--border-hairline)',
      }}
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">

        {/* Scrollable Chip Row */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth flex-1 pb-1 md:pb-0">

          {/* All Chip */}
          <button
            onClick={handleReset}
            className="flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all duration-200 border cursor-pointer"
            style={isAllActive ? activeChipStyle : idleChipStyle}
            onMouseEnter={(e) => {
              if (!isAllActive) e.currentTarget.style.borderColor = 'var(--accent-amber)';
            }}
            onMouseLeave={(e) => {
              if (!isAllActive) e.currentTarget.style.borderColor = 'var(--border-hairline)';
            }}
          >
            All
          </button>

          <div className="h-5 w-px flex-shrink-0 mx-1" style={{ backgroundColor: 'var(--border-hairline)' }} />

          {/* Location Chips */}
          <div className="flex items-center gap-2">
            {locations.map((loc) => {
              const IconComp = loc.icon;
              const isActive = selectedLocation === loc.value;
              return (
                <button
                  key={loc.value}
                  onClick={() => onLocationChange(isActive ? null : loc.value)}
                  className="flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all duration-200 border cursor-pointer flex items-center gap-1.5"
                  style={isActive ? activeChipStyle : idleChipStyle}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.borderColor = 'var(--accent-amber)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.borderColor = 'var(--border-hairline)';
                  }}
                >
                  <IconComp className="w-3 h-3" style={{ color: isActive ? '#fff' : 'var(--accent-brand)' }} />
                  <span>{loc.label}</span>
                </button>
              );
            })}
          </div>

          <div className="h-5 w-px flex-shrink-0 mx-1" style={{ backgroundColor: 'var(--border-hairline)' }} />

          {/* Category Chips */}
          <div className="flex items-center gap-2">
            {categories.map((cat) => {
              const IconComp = cat.icon;
              const isActive = selectedCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => onCategoryChange(isActive ? null : cat.value)}
                  className="flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all duration-200 border cursor-pointer flex items-center gap-1.5"
                  style={isActive ? activeChipStyle : idleChipStyle}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.borderColor = 'var(--accent-amber)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.borderColor = 'var(--border-hairline)';
                  }}
                >
                  <IconComp className="w-3 h-3" style={{ color: isActive ? '#fff' : 'var(--accent-amber)' }} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          <div className="h-5 w-px flex-shrink-0 mx-1" style={{ backgroundColor: 'var(--border-hairline)' }} />

          {/* Price Range Chips */}
          <div className="flex items-center gap-2">
            {priceRanges.map((price) => {
              const IconComp = price.icon;
              const isActive = selectedPriceRange === price.value;
              return (
                <button
                  key={price.value}
                  onClick={() => onPriceRangeChange(isActive ? null : price.value)}
                  className="flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all duration-200 border cursor-pointer flex items-center gap-1.5"
                  style={isActive ? activeChipStyle : idleChipStyle}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.borderColor = 'var(--accent-amber)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.borderColor = 'var(--border-hairline)';
                  }}
                >
                  <IconComp className="w-3 h-3" style={{ color: isActive ? '#fff' : 'var(--accent-verified)' }} />
                  <span>{price.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center gap-2 flex-shrink-0 self-end md:self-auto">
          <label
            htmlFor="sort-select"
            className="text-xs font-mono font-bold whitespace-nowrap"
            style={{ color: 'var(--text-muted)' }}
          >
            Sort:
          </label>
          <select
            id="sort-select"
            value={selectedSort}
            onChange={(e) => onSortChange(e.target.value)}
            className="text-xs font-bold py-1.5 px-3 rounded-full border shadow-xs cursor-pointer focus:outline-none transition-colors"
            style={{
              backgroundColor: 'var(--bg-surface)',
              color: 'var(--text-body)',
              borderColor: 'var(--border-hairline)',
            }}
          >
            <option value="newest">Newest</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>

      </div>
    </div>
  );
}
