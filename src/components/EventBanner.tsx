'use client';

import { useState } from 'react';
import { Flame, Phone, X, Radio } from 'lucide-react';

export default function EventBanner() {
  const [closed, setClosed] = useState(false);

  if (closed) return null;

  return (
    <div className="w-full bg-gradient-to-r from-[#E53935] via-amber-600 to-[#E53935] dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 text-white py-3.5 px-5 sm:px-8 rounded-2xl shadow-lg border border-red-400/40 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 relative overflow-hidden transition-all duration-300">
      {/* Background Accent glow */}
      <div className="absolute top-0 right-0 -mr-10 -mt-10 w-48 h-48 bg-amber-400/20 dark:bg-[#F59E0B]/10 rounded-full blur-2xl pointer-events-none" />

      {/* Event Details */}
      <div className="flex items-center gap-3.5 z-10">
        <div className="w-10 h-10 rounded-2xl bg-white/20 dark:bg-[#10B981]/20 text-white dark:text-[#10B981] border border-white/30 dark:border-[#10B981]/40 flex items-center justify-center flex-shrink-0">
          <Flame className="w-5 h-5 text-amber-300 dark:text-[#F59E0B]" />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="bg-white dark:bg-[#10B981] text-[#E53935] dark:text-white text-[9px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full shadow-xs flex items-center gap-1">
              <Radio className="w-3 h-3 animate-pulse" />
              <span>LIVE NOW</span>
            </span>
            <span className="text-xs font-black tracking-wider uppercase text-amber-200 dark:text-[#F59E0B]">
              KITFO FEST #5 • MONARCH HOTEL ROOFTOP
            </span>
          </div>
          <p className="text-xs font-medium text-white/95">
            Unlimited traditional delicacies, live cultural music & honey wine tastings this weekend!
          </p>
        </div>
      </div>

      {/* Reservation CTA buttons */}
      <div className="flex items-center gap-2.5 z-10 flex-shrink-0 w-full sm:w-auto justify-end">
        <a
          href="tel:0966550000"
          className="bg-amber-400 dark:bg-[#F59E0B] hover:bg-amber-300 dark:hover:bg-amber-400 text-zinc-950 text-xs font-black py-2 px-4 rounded-xl transition-all shadow-md flex items-center gap-1.5 cursor-pointer hover:scale-102"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Reserve: 0966-55-00-00</span>
        </a>
        <button
          onClick={() => setClosed(true)}
          className="p-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
          title="Dismiss banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
