'use client';

interface FilterBarProps {
  selectedLocation: string | null;
  selectedCategory: string | null;
  onLocationChange: (location: string | null) => void;
  onCategoryChange: (category: string | null) => void;
}

export default function FilterBar({
  selectedLocation,
  selectedCategory,
  onLocationChange,
  onCategoryChange,
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

  const isAllActive = !selectedLocation && !selectedCategory;

  const handleReset = () => {
    onLocationChange(null);
    onCategoryChange(null);
  };

  return (
    <div className="sticky top-14 z-40 bg-brand-bg/90 backdrop-blur-md border-b border-zinc-200/40 py-3 px-4 sm:px-6 shadow-2xs">
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth">
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
                    ? 'bg-brand-accent text-brand-dark border-brand-accent shadow-xs scale-102'
                    : 'bg-white text-zinc-600 border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
