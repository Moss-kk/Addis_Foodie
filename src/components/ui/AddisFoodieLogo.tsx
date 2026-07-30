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
      <div className="bg-transparent border-0 px-0 py-0 flex items-center gap-2 sm:gap-2.5 transition-all duration-300">
        {/* Circle Logo Icon */}
        <div className="relative w-7 h-7 sm:w-9 sm:h-9 rounded-full overflow-hidden border border-stone-300 dark:border-stone-700 flex-shrink-0 bg-transparent shadow-2xs group-hover:scale-105 transition-transform">
          <Image
            src="/images/logo.png"
            alt="Addis Foodie Logo"
            fill
            className="object-cover"
          />
        </div>

        {/* Signature Unboxed Brand Mark */}
        <div className="flex flex-col items-start justify-center tracking-tight">
          <div className="bg-stone-950 dark:bg-black text-white border border-stone-800 dark:border-stone-700 px-1.5 sm:px-2 py-0.5 rounded-xs text-[9px] sm:text-[10px] font-label font-bold uppercase tracking-wider leading-none shadow-2xs">
            ADDIS
          </div>
          <div className="text-[10px] sm:text-xs font-label font-black uppercase tracking-widest text-[var(--text-primary)] leading-none mt-0.5">
            FOODIE
          </div>
        </div>

        {/* Tagline Sub-text (Desktop only) */}
        <div className="hidden md:flex flex-col -space-y-0.5 border-l border-stone-300 dark:border-stone-700 pl-2 text-left">
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
