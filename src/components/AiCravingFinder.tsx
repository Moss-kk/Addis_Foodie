'use client';

import React from 'react';
import { Sparkles, Utensils, Coffee, Leaf, Banknote, Flame, MapPin } from 'lucide-react';

interface AiCravingFinderProps {
  onSelectPrompt: (prompt: string, category?: string, location?: string, priceRange?: string) => void;
}

export default function AiCravingFinder({ onSelectPrompt }: AiCravingFinderProps) {
  const cravingPrompts = [
    { label: 'Special Kitfo Platter',  query: 'Kitfo',  category: 'Traditional', icon: Utensils },
    { label: 'Coffee in Bole',         query: 'Coffee', location: 'Bole', category: 'Coffee', icon: Coffee },
    { label: 'Fasting Delicacies',     query: 'Fasting', category: 'Fasting', icon: Leaf },
    { label: 'Lunch Under 300 ETB',    query: 'Lunch',  priceRange: 'under-300', icon: Banknote },
    { label: 'Flame Burgers',          query: 'Burger', category: 'Burgers', icon: Flame },
    { label: 'Piassa Spots',           query: 'Piassa', location: 'Piassa', icon: MapPin },
  ];

  return (
    <div
      className="w-full p-6 sm:p-7 rounded-3xl flex flex-col gap-4 relative overflow-hidden group transition-colors shadow-md"
      style={{
        backgroundColor: 'var(--bg-surface)',
        border: '1px solid var(--border-hairline)',
      }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-0 right-0 -mr-12 -mt-12 w-40 h-40 rounded-full blur-2xl pointer-events-none transition-all"
        style={{ backgroundColor: 'color-mix(in srgb, var(--accent-amber) 10%, transparent)' }}
      />

      <div className="flex items-center justify-between z-10">
        <div className="flex items-center gap-3">
          {/* Icon badge */}
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 shadow-xs"
            style={{
              backgroundColor: 'color-mix(in srgb, var(--accent-amber) 18%, transparent)',
              border: '1px solid color-mix(in srgb, var(--accent-amber) 30%, transparent)',
            }}
          >
            <Sparkles className="w-4 h-4" style={{ color: 'var(--accent-amber)' }} />
          </div>

          <div>
            <h3
              className="font-display font-black text-base sm:text-lg flex items-center gap-2"
              style={{ color: 'var(--text-primary)' }}
            >
              <span>What are you craving?</span>
            </h3>
            <p className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>
              Tap any craving pill below for instant smart recommendations across Addis Ababa.
            </p>
          </div>
        </div>

        {/* AI badge */}
        <span
          className="hidden sm:inline-flex text-[10px] font-mono font-bold px-3 py-1 rounded-full border uppercase tracking-widest"
          style={{
            color: 'var(--accent-amber)',
            backgroundColor: 'color-mix(in srgb, var(--accent-amber) 10%, transparent)',
            borderColor: 'color-mix(in srgb, var(--accent-amber) 30%, transparent)',
          }}
        >
          AI Smart Search
        </span>
      </div>

      {/* Craving chips */}
      <div className="flex flex-wrap gap-2.5 pt-1 z-10">
        {cravingPrompts.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <button
              key={idx}
              onClick={() => onSelectPrompt(item.query, item.category, item.location, item.priceRange)}
              className="touch-target px-4 py-2.5 rounded-full text-xs font-semibold border transition-all duration-200 cursor-pointer flex items-center gap-2 shadow-xs hover:scale-105 hover:text-white"
              style={{
                backgroundColor: 'var(--bg-inset)',
                color: 'var(--text-body)',
                borderColor: 'var(--border-hairline)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--accent-brand)';
                e.currentTarget.style.borderColor = 'var(--accent-brand)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--bg-inset)';
                e.currentTarget.style.borderColor = 'var(--border-hairline)';
                e.currentTarget.style.color = 'var(--text-body)';
              }}
            >
              <IconComponent className="w-3.5 h-3.5" style={{ color: 'var(--accent-amber)' }} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
