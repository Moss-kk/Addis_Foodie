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
      <div className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-md px-2.5 sm:px-3 py-1 sm:py-1.5 shadow-sm transition-all duration-300 flex items-center gap-2 sm:gap-2.5 group-hover:border-[#B8422E]">
        {/* Circle Logo Icon */}
        <div className="relative w-6 h-6 sm:w-8 sm:h-8 rounded-full overflow-hidden border border-[var(--border-subtle)] flex-shrink-0 bg-white shadow-xs">
          <Image
            src="/images/logo.png"
            alt="Addis Foodies Logo"
            fill
            className="object-cover"
          />
        </div>

        {/* Full Black & White Typography Brand Mark (Pure Black/White, No Black Pill) */}
        <div className="flex flex-col items-center justify-center tracking-tight text-center">
          <div className="text-[var(--text-primary)] text-[10px] sm:text-[12px] font-label font-black uppercase tracking-wider leading-none">
            ADDIS
          </div>
          <div className="w-full h-[1.5px] bg-[var(--text-primary)] my-0.5 opacity-60" />
          <div className="text-[var(--text-primary)] text-[8px] sm:text-[10px] font-label font-bold uppercase tracking-widest leading-none">
            FOODIES
          </div>
        </div>

        {/* Tagline Sub-text (Desktop only) */}
        <div className="hidden md:flex flex-col -space-y-0.5 border-l border-[var(--border-subtle)] pl-2 text-left">
          <span className="text-[9px] font-label font-bold text-[var(--text-primary)] tracking-wider uppercase">
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
