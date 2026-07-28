'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface AddisFoodieLogoProps {
  size?: 'sm' | 'md' | 'lg';
  diluted?: boolean;
}

export default function AddisFoodieLogo({ size = 'md', diluted = true }: AddisFoodieLogoProps) {
  // Heritage design system logo container - seamless integration into limestone/deep ink header
  const containerClasses = diluted
    ? 'bg-transparent hover:bg-[#1A1C1E]/5 transition-all duration-300 rounded-md px-2 sm:px-2.5 py-1 flex items-center gap-2.5 group-hover:scale-[1.02]'
    : 'bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-md px-3 py-1.5 shadow-xs transition-all duration-300 flex items-center gap-2.5 group-hover:scale-[1.02]';

  return (
    <Link href="/" className="group focus-ring rounded-md flex-shrink-0 inline-block">
      <div className={containerClasses}>
        {/* Preserved Authentic Circle Logo Icon */}
        <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden border-2 border-[#B8422E] flex-shrink-0 bg-[#1A1C1E] shadow-xs">
          <Image
            src="/images/logo.png"
            alt="Addis Foodies Logo"
            fill
            className="object-cover"
          />
        </div>

        {/* Signature Heritage Brand Mark */}
        <div className="flex flex-col items-center justify-center tracking-tight">
          <div className="bg-[#1A1C1E] text-white px-2 py-0.5 rounded-xs text-[10px] sm:text-[11px] font-label font-bold uppercase tracking-wider leading-none shadow-2xs">
            ADDIS
          </div>
          <div className="w-full h-[2px] bg-[#B8422E] my-0.5" />
          <div className="text-[var(--text-primary)] text-[9px] sm:text-[10px] font-label font-bold uppercase tracking-widest leading-none">
            FOODIES
          </div>
        </div>

        {/* Heritage Broad Tagline Sub-text */}
        <div className="hidden sm:flex flex-col -space-y-0.5 border-l border-[var(--border-subtle)] pl-2 text-left">
          <span className="text-[9px] font-label font-bold text-[#B8422E] tracking-wider uppercase">
            Official Curation
          </span>
          <span className="text-[8px] font-label text-[var(--text-secondary)] tracking-wider uppercase">
            Discovering Foods
          </span>
        </div>
      </div>
    </Link>
  );
}
