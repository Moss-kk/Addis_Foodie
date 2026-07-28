'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Flame, X, ArrowRight } from 'lucide-react';

export default function EventBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) {
    return null;
  }

  const handleDismiss = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDismissed(true);
  };

  return (
    <Link 
      href="/events"
      className="group relative w-full rounded-md px-3.5 py-2 sm:px-4 sm:py-2.5 transition-all duration-300 border shadow-xs flex items-center justify-between gap-2.5 text-white cursor-pointer hover:border-[#B8422E] block"
      style={{
        backgroundColor: '#1A1C1E',
        borderColor: 'var(--border-subtle)',
      }}
      aria-label="Major Event Notification Banner — Click to View Events"
    >
      <div className="flex items-center gap-2.5 min-w-0 flex-1">
        {/* Compact Event Spotlight Tag */}
        <div 
          className="inline-flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-sm text-[9px] sm:text-xs font-label uppercase tracking-wider text-white shrink-0"
          style={{ backgroundColor: 'var(--accent-tertiary)' }}
        >
          <Flame className="w-3 h-3 text-white fill-current" />
          <span>MAJOR EVENT</span>
        </div>

        {/* Clear Non-overlapping Event Headline */}
        <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-label min-w-0 truncate">
          <span className="font-bold text-[#F7F5F2] truncate group-hover:text-[#B8422E] transition-colors">
            Addis Kitfo Fest 2026 (Tsom Mefcha)
          </span>
          <span className="hidden sm:inline text-slate-400">•</span>
          <span className="hidden sm:inline text-slate-300 font-body text-xs truncate">
            Addis Foodies with Tiru Kitfo • Oct 03–05 @ Monarch Rooftop
          </span>
        </div>
      </div>

      {/* Right Indicator & Dismiss Button */}
      <div className="flex items-center gap-2 shrink-0">
        <span className="text-[10px] font-label text-slate-300 group-hover:text-white flex items-center gap-0.5">
          <span className="hidden xs:inline">Details</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#B8422E] group-hover:translate-x-0.5 transition-transform" />
        </span>

        {/* Dismiss X Button */}
        <button
          onClick={handleDismiss}
          className="p-1 rounded-sm hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
          title="Dismiss Notification"
          aria-label="Close notification"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </Link>
  );
}
