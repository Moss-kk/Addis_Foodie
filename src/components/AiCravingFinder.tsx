'use client';

import React from 'react';

interface AiCravingFinderProps {
  onSelectPrompt: (prompt: string, category?: string, location?: string, priceRange?: string) => void;
}

export default function AiCravingFinder({ onSelectPrompt }: AiCravingFinderProps) {
  const cravingPrompts = [
    { label: "🥩 I'm craving Kitfo", query: 'Kitfo', category: 'Traditional' },
    { label: "☕ Coffee around Bole", query: 'Coffee', location: 'Bole', category: 'Coffee' },
    { label: "🌙 Best fasting food", query: 'Fasting', category: 'Fasting' },
    { label: "💵 Affordable lunch under 300 Br", query: 'Lunch', priceRange: 'under-300' },
    { label: "🍔 Juiciest Burgers", query: 'Burger', category: 'Burgers' },
    { label: "📍 Spots in Piassa", query: 'Piassa', location: 'Piassa' },
  ];

  return (
    <div className="bg-[#111827] text-white p-6 sm:p-8 rounded-3xl border border-zinc-800 shadow-xl flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#F59E0B]/20 text-[#F59E0B] flex items-center justify-center font-black text-lg border border-[#F59E0B]/30 shadow-xs">
            🤖
          </div>
          <div>
            <h3 className="font-syne font-black text-lg sm:text-xl text-white">
              Useful AI Craving Finder
            </h3>
            <p className="text-xs text-zinc-400 font-medium">
              Tap any craving below for instant smart recommendations across Addis Ababa.
            </p>
          </div>
        </div>
        <span className="hidden sm:inline-flex text-[10px] font-mono font-black text-[#F59E0B] bg-[#F59E0B]/10 px-3 py-1 rounded-full border border-[#F59E0B]/30 uppercase tracking-widest">
          AI Smart Search
        </span>
      </div>

      {/* Preset Craving Chips */}
      <div className="flex flex-wrap gap-2.5 pt-1">
        {cravingPrompts.map((item, idx) => (
          <button
            key={idx}
            onClick={() => onSelectPrompt(item.query, item.category, item.location, item.priceRange)}
            className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-[#A81D1D] text-white text-xs font-extrabold border border-white/20 hover:border-[#A81D1D] transition-all duration-200 cursor-pointer flex items-center gap-2 shadow-xs hover:scale-102"
          >
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
