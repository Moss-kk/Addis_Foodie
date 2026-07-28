'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, Calendar, ArrowRight, X, Flame } from 'lucide-react';

export default function EventBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) {
    return null;
  }

  return (
    <aside 
      className="relative w-full rounded-md px-4 py-2.5 transition-all duration-300 border shadow-xs flex items-center justify-between gap-3 text-white"
      style={{
        backgroundColor: '#1A1C1E',
        borderColor: 'var(--border-subtle)',
      }}
      aria-label="Event Spotlight Notification"
    >
      <div className="flex items-center gap-3 min-w-0 flex-1">
        {/* Event Spotlight Badge */}
        <div 
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm text-[10px] sm:text-xs font-label uppercase tracking-widest text-white shrink-0"
          style={{ backgroundColor: 'var(--accent-tertiary)' }}
        >
          <Flame className="w-3.5 h-3.5 text-white fill-current" />
          <span>MAJOR EVENT</span>
        </div>

        {/* Compact Event Title & Info */}
        <div className="flex items-center gap-2 text-xs sm:text-sm font-label min-w-0 truncate">
          <span className="font-bold text-[#F7F5F2] truncate">
            Addis Kitfo Fest 2026 (Tsom Mefcha)
          </span>
          <span className="hidden md:inline text-[#6C7278]">•</span>
          <span className="hidden md:inline text-slate-300 font-body text-xs truncate">
            Addis Foodies with Tiru Kitfo • Oct 03–05 @ Monarch Rooftop
          </span>
        </div>
      </div>

      {/* Action CTA & Dismiss X Button */}
      <div className="flex items-center gap-3 shrink-0">
        <Link
          href="/events"
          className="button-primary text-[11px] uppercase tracking-wider py-1.5 px-3 rounded-sm text-white flex items-center gap-1 hover:scale-[1.02] transition-transform"
        >
          <span>View Schedule</span>
          <ArrowRight className="w-3.5 h-3.5 text-white" />
        </Link>

        {/* Dismissable Close X Button */}
        <button
          onClick={() => setDismissed(true)}
          className="touch-target p-1.5 rounded-sm hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
          title="Dismiss Event Spotlight Notification"
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </aside>
  );
}
