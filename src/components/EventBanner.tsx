'use client';

import { useState } from 'react';

export default function EventBanner() {
  const [closed, setClosed] = useState(false);

  if (closed) return null;

  return (
    <div className="w-full bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 text-brand-dark py-3 px-4 sm:px-6 rounded-2xl shadow-lg border border-amber-400/50 flex flex-col sm:flex-row items-center justify-between gap-3 relative overflow-hidden">
      {/* Background Accent glow */}
      <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-white/20 rounded-full blur-2xl pointer-events-none" />

      {/* Event Details */}
      <div className="flex items-center gap-3 z-10">
        <div className="w-10 h-10 rounded-full bg-brand-dark/10 flex items-center justify-center text-xl flex-shrink-0">
          🥩
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="bg-brand-dark text-amber-400 text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full">
              LIVE FESTIVAL
            </span>
            <span className="text-xs font-black tracking-wide uppercase">
              KITFO FEST #5 • MONARCH HOTEL ROOFTOP
            </span>
          </div>
          <p className="text-xs font-bold text-brand-dark/85">
            Unlimited traditional delicacies, live cultural music & honey wine tastings this weekend!
          </p>
        </div>
      </div>

      {/* Reservation CTA buttons */}
      <div className="flex items-center gap-2 z-10 flex-shrink-0 w-full sm:w-auto justify-end">
        <a
          href="tel:0966550000"
          className="bg-brand-dark hover:bg-black text-white text-xs font-black py-2 px-3.5 rounded-xl transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
        >
          <span>📞 Reserve: 0966-55-00-00</span>
        </a>
        <button
          onClick={() => setClosed(true)}
          className="p-1 rounded-full text-brand-dark/60 hover:text-brand-dark hover:bg-amber-600/30 transition-colors"
          title="Dismiss banner"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
