'use client';

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
    { label: '📍 Bole', value: 'Bole' },
    { label: '📍 Kazanchis', value: 'Kazanchis' },
    { label: '📍 Piassa', value: 'Piassa' },
    { label: '📍 Sarbet', value: 'Sarbet' },
  ];

  const categories = [
    { label: '🍔 Burgers', value: 'Burgers' },
    { label: '☕ Coffee', value: 'Coffee' },
    { label: '🌱 Fasting', value: 'Fasting' },
    { label: '🇪🇹 Traditional', value: 'Traditional' },
  ];

  const priceRanges = [
    { label: '💵 Under 300 Br', value: 'under-300' },
    { label: '💵 300–700 Br', value: '300-700' },
    { label: '💵 700+ Br', value: '700-plus' },
  ];

  const isAllActive = !selectedLocation && !selectedCategory && !selectedPriceRange;

  const handleReset = () => {
    onLocationChange(null);
    onCategoryChange(null);
    onPriceRangeChange(null);
  };

  return (
    <div className="sticky top-14 z-40 bg-[#09090B]/90 backdrop-blur-md border-b border-zinc-800/80 py-3 px-4 sm:px-6 shadow-md">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
        {/* Scrollable Chip Row */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth flex-1 pb-1 md:pb-0">
          {/* All Chip */}
          <button
            onClick={handleReset}
            className={`flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all duration-200 border cursor-pointer ${
              isAllActive
                ? 'bg-[#F59E0B] text-zinc-950 border-[#F59E0B] shadow-xs scale-102 font-black'
                : 'bg-zinc-900 text-zinc-300 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800'
            }`}
          >
            All
          </button>

          {/* Vertical Divider */}
          <div className="h-5 w-px bg-zinc-800 flex-shrink-0 mx-1"></div>

          {/* Location Chips */}
          <div className="flex items-center gap-2">
            {locations.map((loc) => {
              const isActive = selectedLocation === loc.value;
              return (
                <button
                  key={loc.value}
                  onClick={() => onLocationChange(isActive ? null : loc.value)}
                  className={`flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all duration-200 border cursor-pointer ${
                    isActive
                      ? 'bg-[#F59E0B] text-zinc-950 border-[#F59E0B] shadow-xs scale-102 font-black'
                      : 'bg-zinc-900 text-zinc-300 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800'
                  }`}
                >
                  {loc.label}
                </button>
              );
            })}
          </div>

          {/* Vertical Divider */}
          <div className="h-5 w-px bg-zinc-800 flex-shrink-0 mx-1"></div>

          {/* Category Chips */}
          <div className="flex items-center gap-2">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => onCategoryChange(isActive ? null : cat.value)}
                  className={`flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all duration-200 border cursor-pointer ${
                    isActive
                      ? 'bg-[#F59E0B] text-zinc-950 border-[#F59E0B] shadow-xs scale-102 font-black'
                      : 'bg-zinc-900 text-zinc-300 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Vertical Divider */}
          <div className="h-5 w-px bg-zinc-800 flex-shrink-0 mx-1"></div>

          {/* Price Range Chips */}
          <div className="flex items-center gap-2">
            {priceRanges.map((price) => {
              const isActive = selectedPriceRange === price.value;
              return (
                <button
                  key={price.value}
                  onClick={() => onPriceRangeChange(isActive ? null : price.value)}
                  className={`flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all duration-200 border cursor-pointer ${
                    isActive
                      ? 'bg-[#F59E0B] text-zinc-950 border-[#F59E0B] shadow-xs scale-102 font-black'
                      : 'bg-zinc-900 text-zinc-300 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800'
                  }`}
                >
                  {price.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Sort Dropdown Pinned Right */}
        <div className="flex items-center gap-2 flex-shrink-0 self-end md:self-auto">
          <label htmlFor="sort-select" className="text-xs font-mono font-bold text-zinc-400 whitespace-nowrap">
            Sort:
          </label>
          <select
            id="sort-select"
            value={selectedSort}
            onChange={(e) => onSortChange(e.target.value)}
            className="bg-zinc-900 text-zinc-200 text-xs font-bold py-1.5 px-3 rounded-full border border-zinc-800 focus:outline-none focus:border-[#F59E0B] shadow-xs cursor-pointer"
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

