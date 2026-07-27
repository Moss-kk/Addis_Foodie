'use client';

import { useState } from 'react';
import { Flame, Phone, X, Radio } from 'lucide-react';

export default function EventBanner() {
  const [closed, setClosed] = useState(false);

  if (closed) return null;

  return (
    <div className="w-full bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 text-white py-3.5 px-5 sm:px-8 rounded-2xl shadow-xl border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 relative overflow-hidden">
      {/* Background Accent glow */}
      <div className="absolute top-0 right-0 -mr-10 -mt-10 w-48 h-48 bg-[#F59E0B]/10 rounded-full blur-2xl pointer-events-none" />

      {/* Event Details */}
      <div className="flex items-center gap-3.5 z-10">
        <div className="w-10 h-10 rounded-2xl bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/40 flex items-center justify-center flex-shrink-0">
          <Flame className="w-5 h-5 text-[#F59E0B]" />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="bg-[#10B981] text-white text-[9px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full shadow-xs flex items-center gap-1">
              <Radio className="w-3 h-3 animate-pulse" />
              <span>LIVE NOW</span>
            </span>
            <span className="text-xs font-black tracking-wider uppercase text-[#F59E0B]">
              KITFO FEST #5 • MONARCH HOTEL ROOFTOP
            </span>
          </div>
          <p className="text-xs font-medium text-white/90">
            Unlimited traditional delicacies, live cultural music & honey wine tastings this weekend!
          </p>
        </div>
      </div>

      {/* Reservation CTA buttons */}
      <div className="flex items-center gap-2.5 z-10 flex-shrink-0 w-full sm:w-auto justify-end">
        <a
          href="tel:0966550000"
          className="bg-[#F59E0B] hover:bg-amber-400 text-[#111827] text-xs font-black py-2 px-4 rounded-xl transition-all shadow-md flex items-center gap-1.5 cursor-pointer hover:scale-102"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Reserve: 0966-55-00-00</span>
        </a>
        <button
          onClick={() => setClosed(true)}
          className="p-1.5 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors"
          title="Dismiss banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

