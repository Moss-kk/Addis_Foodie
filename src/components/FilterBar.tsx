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
    { label: 'Bole', value: 'Bole', icon: MapPin },
    { label: 'Kazanchis', value: 'Kazanchis', icon: MapPin },
    { label: 'Piassa', value: 'Piassa', icon: MapPin },
    { label: 'Sarbet', value: 'Sarbet', icon: MapPin },
  ];

  const categories = [
    { label: 'Burgers', value: 'Burgers', icon: Flame },
    { label: 'Coffee', value: 'Coffee', icon: Coffee },
    { label: 'Fasting', value: 'Fasting', icon: Leaf },
    { label: 'Traditional', value: 'Traditional', icon: Utensils },
  ];

  const priceRanges = [
    { label: 'Under 300 Br', value: 'under-300', icon: Banknote },
    { label: '300–700 Br', value: '300-700', icon: Banknote },
    { label: '700+ Br', value: '700-plus', icon: Banknote },
  ];

  const isAllActive = !selectedLocation && !selectedCategory && !selectedPriceRange;

  const handleReset = () => {
    onLocationChange(null);
    onCategoryChange(null);
    onPriceRangeChange(null);
  };

  return (
    <div className="sticky top-14 z-30 bg-[#FAFAFA]/95 backdrop-blur-md border-b border-zinc-200 py-2.5 px-4 sm:px-6 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
        {/* Scrollable Chip Row */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth flex-1 pb-1 md:pb-0">
          {/* All Chip */}
          <button
            onClick={handleReset}
            className={`flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all duration-200 border cursor-pointer ${
              isAllActive
                ? 'bg-[#A81D1D] text-white border-[#A81D1D] shadow-xs scale-102 font-black'
                : 'bg-white text-zinc-700 border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50'
            }`}
          >
            All
          </button>

          {/* Vertical Divider */}
          <div className="h-5 w-px bg-zinc-200 flex-shrink-0 mx-1"></div>

          {/* Location Chips */}
          <div className="flex items-center gap-2">
            {locations.map((loc) => {
              const IconComp = loc.icon;
              const isActive = selectedLocation === loc.value;
              return (
                <button
                  key={loc.value}
                  onClick={() => onLocationChange(isActive ? null : loc.value)}
                  className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all duration-200 border cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#A81D1D] text-white border-[#A81D1D] shadow-xs scale-102 font-black'
                      : 'bg-white text-zinc-700 border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50'
                  }`}
                >
                  <IconComp className="w-3 h-3 text-[#A81D1D]" />
                  <span>{loc.label}</span>
                </button>
              );
            })}
          </div>

          {/* Vertical Divider */}
          <div className="h-5 w-px bg-zinc-200 flex-shrink-0 mx-1"></div>

          {/* Category Chips */}
          <div className="flex items-center gap-2">
            {categories.map((cat) => {
              const IconComp = cat.icon;
              const isActive = selectedCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => onCategoryChange(isActive ? null : cat.value)}
                  className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all duration-200 border cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#A81D1D] text-white border-[#A81D1D] shadow-xs scale-102 font-black'
                      : 'bg-white text-zinc-700 border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50'
                  }`}
                >
                  <IconComp className="w-3 h-3 text-[#F59E0B]" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Vertical Divider */}
          <div className="h-5 w-px bg-zinc-200 flex-shrink-0 mx-1"></div>

          {/* Price Range Chips */}
          <div className="flex items-center gap-2">
            {priceRanges.map((price) => {
              const IconComp = price.icon;
              const isActive = selectedPriceRange === price.value;
              return (
                <button
                  key={price.value}
                  onClick={() => onPriceRangeChange(isActive ? null : price.value)}
                  className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all duration-200 border cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#A81D1D] text-white border-[#A81D1D] shadow-xs scale-102 font-black'
                      : 'bg-white text-zinc-700 border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50'
                  }`}
                >
                  <IconComp className="w-3 h-3 text-[#10B981]" />
                  <span>{price.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center gap-2 flex-shrink-0 self-end md:self-auto">
          <label htmlFor="sort-select" className="text-xs font-mono font-bold text-zinc-400 whitespace-nowrap">
            Sort:
          </label>
          <select
            id="sort-select"
            value={selectedSort}
            onChange={(e) => onSortChange(e.target.value)}
            className="bg-white text-zinc-700 text-xs font-bold py-1.5 px-3 rounded-full border border-zinc-200 focus:outline-none focus:border-[#A81D1D] shadow-xs cursor-pointer"
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


