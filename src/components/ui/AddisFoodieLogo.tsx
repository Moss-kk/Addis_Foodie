'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface AddisFoodieLogoProps {
  size?: 'sm' | 'md' | 'lg';
}

export default function AddisFoodieLogo({ size = 'md' }: AddisFoodieLogoProps) {
  return (
    <Link href="/" className="group focus-ring rounded-md flex-shrink-0 inline-block">
      <div className="bg-[#1A1C1E] border border-[#3A3E42] rounded-md px-2.5 sm:px-3 py-1 sm:py-1.5 shadow-sm transition-all duration-300 flex items-center gap-2 sm:gap-2.5 group-hover:border-white/40">
        {/* Circle Logo Icon */}
        <div className="relative w-6 h-6 sm:w-8 sm:h-8 rounded-full overflow-hidden border border-white/30 flex-shrink-0 bg-black shadow-xs">
          <Image
            src="/images/logo.png"
            alt="Addis Foodies Logo"
            fill
            className="object-cover"
          />
        </div>

        {/* Signature Black and White Brand Mark */}
        <div className="flex flex-col items-center justify-center tracking-tight">
          <div className="bg-black text-white px-1.5 sm:px-2 py-0.5 rounded-xs text-[9px] sm:text-[11px] font-label font-bold uppercase tracking-wider border border-zinc-700 leading-none">
            ADDIS
          </div>
          <div className="w-full h-[1.5px] bg-white/40 my-0.5" />
          <div className="text-white text-[8px] sm:text-[10px] font-label font-bold uppercase tracking-widest leading-none">
            FOODIES
          </div>
        </div>

        {/* Tagline Sub-text (Desktop only) */}
        <div className="hidden md:flex flex-col -space-y-0.5 border-l border-white/20 pl-2 text-left">
          <span className="text-[9px] font-label font-bold text-white tracking-wider uppercase">
            Official Curation
          </span>
          <span className="text-[8px] font-label text-slate-300 tracking-wider uppercase">
            Discovering Foods
          </span>
        </div>
      </div>
    </Link>
  );
}
