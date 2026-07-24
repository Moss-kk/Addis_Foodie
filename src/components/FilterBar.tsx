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
    <div className="sticky top-14 z-40 bg-brand-bg/90 backdrop-blur-md border-b border-zinc-200/40 py-3 px-4 sm:px-6 shadow-2xs">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
        {/* Scrollable Chip Row */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth flex-1 pb-1 md:pb-0">
          {/* All Chip */}
          <button
            onClick={handleReset}
            className={`flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 border cursor-pointer ${
              isAllActive
                ? 'bg-brand-primary text-white border-brand-primary shadow-xs scale-102'
                : 'bg-white text-zinc-600 border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50'
            }`}
          >
            All
          </button>

          {/* Vertical Divider */}
          <div className="h-5 w-px bg-zinc-300/60 flex-shrink-0 mx-1"></div>

          {/* Location Chips */}
          <div className="flex items-center gap-2">
            {locations.map((loc) => {
              const isActive = selectedLocation === loc.value;
              return (
                <button
                  key={loc.value}
                  onClick={() => onLocationChange(isActive ? null : loc.value)}
                  className={`flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 border cursor-pointer ${
                    isActive
                      ? 'bg-brand-primary text-white border-brand-primary shadow-xs scale-102'
                      : 'bg-white text-zinc-600 border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50'
                  }`}
                >
                  {loc.label}
                </button>
              );
            })}
          </div>

          {/* Vertical Divider */}
          <div className="h-5 w-px bg-zinc-300/60 flex-shrink-0 mx-1"></div>

          {/* Category Chips */}
          <div className="flex items-center gap-2">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => onCategoryChange(isActive ? null : cat.value)}
                  className={`flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 border cursor-pointer ${
                    isActive
                      ? 'bg-brand-accent text-brand-dark border-brand-accent shadow-xs scale-102 font-bold'
                      : 'bg-white text-zinc-600 border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Vertical Divider */}
          <div className="h-5 w-px bg-zinc-300/60 flex-shrink-0 mx-1"></div>

          {/* Price Range Chips */}
          <div className="flex items-center gap-2">
            {priceRanges.map((price) => {
              const isActive = selectedPriceRange === price.value;
              return (
                <button
                  key={price.value}
                  onClick={() => onPriceRangeChange(isActive ? null : price.value)}
                  className={`flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 border cursor-pointer ${
                    isActive
                      ? 'bg-brand-accent text-brand-dark border-brand-accent shadow-xs scale-102 font-bold'
                      : 'bg-white text-zinc-600 border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50'
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
          <label htmlFor="sort-select" className="text-xs font-bold text-zinc-500 whitespace-nowrap">
            Sort:
          </label>
          <select
            id="sort-select"
            value={selectedSort}
            onChange={(e) => onSortChange(e.target.value)}
            className="bg-white text-brand-dark text-xs font-bold py-1.5 px-3 rounded-full border border-zinc-200 focus:outline-hidden focus:border-brand-primary shadow-2xs cursor-pointer"
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

