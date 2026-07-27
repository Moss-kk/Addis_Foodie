'use client';

import React from 'react';
import { Sparkles, Utensils, Coffee, Leaf, Banknote, Flame, MapPin } from 'lucide-react';

interface AiCravingFinderProps {
  onSelectPrompt: (prompt: string, category?: string, location?: string, priceRange?: string) => void;
}

export default function AiCravingFinder({ onSelectPrompt }: AiCravingFinderProps) {
  const cravingPrompts = [
    { label: "Special Kitfo Platter", query: 'Kitfo', category: 'Traditional', icon: Utensils },
    { label: "Coffee in Bole", query: 'Coffee', location: 'Bole', category: 'Coffee', icon: Coffee },
    { label: "Fasting Delicacies", query: 'Fasting', category: 'Fasting', icon: Leaf },
    { label: "Lunch Under 300 ETB", query: 'Lunch', priceRange: 'under-300', icon: Banknote },
    { label: "Flame Burgers", query: 'Burger', category: 'Burgers', icon: Flame },
    { label: "Piassa Spots", query: 'Piassa', location: 'Piassa', icon: MapPin },
  ];

  return (
    <div className="w-full bg-white dark:bg-[#1A100C] backdrop-blur-md p-6 sm:p-7 rounded-3xl border border-zinc-200 dark:border-red-500/20 shadow-xl flex flex-col gap-4 relative overflow-hidden group transition-colors">
      {/* Subtle Ambient Glow */}
      <div className="absolute top-0 right-0 -mr-12 -mt-12 w-40 h-40 bg-[#FF8C00]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#FF8C00]/20 transition-all" />

      <div className="flex items-center justify-between z-10">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#FF8C00]/20 text-[#FF8C00] flex items-center justify-center border border-[#FF8C00]/30 flex-shrink-0 shadow-xs">
            <Sparkles className="w-4 h-4 text-[#FF8C00]" />
          </div>
          <div>
            <h3 className="font-syne font-black text-base sm:text-lg text-zinc-950 dark:text-[#FFF8F6] flex items-center gap-2">
              <span>What are you craving?</span>
            </h3>
            <p className="text-xs text-zinc-600 dark:text-[#D1C2BD] font-medium">
              Tap any craving pill below for instant smart recommendations across Addis Ababa.
            </p>
          </div>
        </div>

        <span className="hidden sm:inline-flex text-[10px] font-mono font-bold text-[#FF8C00] bg-[#FF8C00]/10 px-3 py-1 rounded-full border border-[#FF8C00]/30 uppercase tracking-widest">
          AI Smart Search
        </span>
      </div>

      {/* Modern Rounded Chip Pills */}
      <div className="flex flex-wrap gap-2.5 pt-1 z-10">
        {cravingPrompts.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <button
              key={idx}
              onClick={() => onSelectPrompt(item.query, item.category, item.location, item.priceRange)}
              className="touch-target px-4 py-2.5 rounded-full bg-zinc-100 dark:bg-[#120907] hover:bg-[#FF8C00] hover:text-zinc-950 text-zinc-800 dark:text-[#D1C2BD] text-xs font-semibold border border-zinc-200 dark:border-zinc-800 hover:border-[#FF8C00] transition-all duration-200 cursor-pointer flex items-center gap-2 shadow-xs hover:scale-102"
            >
              <IconComponent className="w-3.5 h-3.5 text-[#FF8C00] group-hover:text-zinc-950" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
