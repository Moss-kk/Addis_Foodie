'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface AddisFoodieLogoProps {
  size?: 'sm' | 'md' | 'lg';
  diluted?: boolean;
}

export default function AddisFoodieLogo({ size = 'md' }: AddisFoodieLogoProps) {
  // Heritage design system logo container - prominent high-contrast framing
  return (
    <Link href="/" className="group focus-ring rounded-md flex-shrink-0 inline-block">
      <div className="bg-[#1A1C1E] border border-[#3A3E42] rounded-md px-3 py-1.5 shadow-sm transition-all duration-300 flex items-center gap-2.5 group-hover:border-[#B8422E]">
        {/* Preserved Authentic Circle Logo Icon */}
        <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-[#B8422E] flex-shrink-0 bg-[#1A1C1E] shadow-xs">
          <Image
            src="/images/logo.png"
            alt="Addis Foodies Logo"
            fill
            className="object-cover"
          />
        </div>

        {/* Signature Heritage Brand Mark */}
        <div className="flex flex-col items-center justify-center tracking-tight">
          <div className="bg-[#B8422E] text-white px-2 py-0.5 rounded-xs text-[10px] sm:text-[11px] font-label font-bold uppercase tracking-wider leading-none shadow-2xs">
            ADDIS
          </div>
          <div className="w-full h-[2px] bg-white/30 my-0.5" />
          <div className="text-white text-[9px] sm:text-[10px] font-label font-bold uppercase tracking-widest leading-none">
            FOODIES
          </div>
        </div>

        {/* Heritage Broad Tagline Sub-text */}
        <div className="hidden sm:flex flex-col -space-y-0.5 border-l border-white/20 pl-2 text-left">
          <span className="text-[9px] font-label font-bold text-[#B8422E] tracking-wider uppercase">
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
