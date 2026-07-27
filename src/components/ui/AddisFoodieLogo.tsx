'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface AddisFoodieLogoProps {
  size?: 'sm' | 'md' | 'lg';
  diluted?: boolean;
}

export default function AddisFoodieLogo({ size = 'md', diluted = true }: AddisFoodieLogoProps) {
  // Soft warm dark charcoal matching authentic logo badge tones (not pitch black)
  const containerClasses = diluted
    ? 'bg-[#1C1412]/80 hover:bg-[#251A18]/90 backdrop-blur-md border border-[#3D2622]/70 hover:border-[#E53935]/70 rounded-xl px-2.5 sm:px-3 py-1.5 shadow-sm transition-all duration-300 group-hover:scale-[1.02]'
    : 'bg-[#181110] border border-[#3D2622] rounded-xl px-3 py-1.5 shadow-md transition-all duration-300 group-hover:scale-[1.02]';

  return (
    <Link href="/" className="group focus-ring rounded-xl flex-shrink-0 inline-block">
      <div className={`${containerClasses} flex items-center gap-2.5`}>
        {/* Preserved Original Circle Logo */}
        <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden border-2 border-[#E53935] flex-shrink-0 bg-[#160E0C] shadow-sm">
          <Image
            src="/images/logo.png"
            alt="Addis Foodies Logo"
            fill
            className="object-cover"
          />
        </div>

        {/* Signature Boxed Brand Mark with Diluted Warm Charcoal */}
        <div className="flex flex-col items-center justify-center font-sans tracking-tight">
          <div className="bg-[#2A1D1A] text-white px-2 py-0.5 rounded-xs text-[10px] sm:text-[11px] font-black uppercase tracking-wider border border-[#4A322C] leading-none shadow-2xs">
            ADDIS
          </div>
          <div className="w-full h-[1.5px] bg-[#E53935] my-0.5" />
          <div className="text-white text-[9px] sm:text-[10px] font-black uppercase tracking-widest leading-none">
            FOODIES
          </div>
        </div>

        {/* Tagline Sub-text */}
        <div className="hidden sm:flex flex-col -space-y-0.5 border-l border-[#3D2622] pl-2">
          <span className="text-[9px] font-mono font-bold text-[#FF8C00] tracking-wider uppercase">
            Official Curation
          </span>
          <span className="text-[8px] font-bold text-[#D1C2BD] tracking-wider uppercase font-sans">
            Discovering Foods
          </span>
        </div>
      </div>
    </Link>
  );
}
