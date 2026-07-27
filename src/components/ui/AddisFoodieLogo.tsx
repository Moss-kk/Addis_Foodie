'use client';

import React from 'react';
import Link from 'next/link';

interface AddisFoodieLogoProps {
  size?: 'sm' | 'md' | 'lg';
  diluted?: boolean;
}

export default function AddisFoodieLogo({ size = 'md', diluted = true }: AddisFoodieLogoProps) {
  const containerClasses = diluted
    ? 'bg-zinc-900/60 hover:bg-zinc-900/90 backdrop-blur-md border border-zinc-800/80 hover:border-[#A81D1D]/70 rounded-xl px-2.5 sm:px-3 py-1.5 shadow-sm transition-all duration-300 group-hover:scale-[1.02]'
    : 'bg-black border border-zinc-800 rounded-xl px-3 py-1.5 shadow-md transition-all duration-300 group-hover:scale-[1.02]';

  return (
    <Link href="/" className="group focus-ring rounded-xl flex-shrink-0 inline-block">
      <div className={`${containerClasses} flex items-center gap-2.5`}>
        {/* Signature Boxed Brand Mark */}
        <div className="flex flex-col items-center justify-center font-sans tracking-tight">
          <div className="bg-black text-white px-2 py-0.5 rounded-xs text-[11px] sm:text-xs font-black uppercase tracking-wider border border-zinc-800 leading-none">
            ADDIS
          </div>
          <div className="w-full h-[2px] bg-[#A81D1D] my-0.5" />
          <div className="text-white text-[10px] sm:text-[11px] font-black uppercase tracking-widest leading-none">
            FOODIES
          </div>
        </div>

        {/* Tagline Sub-text */}
        <div className="hidden sm:flex flex-col -space-y-0.5 border-l border-zinc-800 pl-2">
          <span className="text-[9px] font-mono font-bold text-[#F59E0B] tracking-wider uppercase">
            Official Curation
          </span>
          <span className="text-[8px] font-bold text-zinc-400 tracking-wider uppercase font-sans">
            Discovering Foods
          </span>
        </div>
      </div>
    </Link>
  );
}
