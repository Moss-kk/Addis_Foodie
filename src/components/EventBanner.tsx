'use client';

import { useState } from 'react';
import { Flame, Phone, X, Radio } from 'lucide-react';

export default function EventBanner() {
  const [closed, setClosed] = useState(false);

  if (closed) return null;

  return (
    <div
      className="w-full py-3.5 px-5 sm:px-8 rounded-2xl shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4 relative overflow-hidden transition-all duration-300 text-white"
      style={{
        background: 'linear-gradient(90deg, var(--accent-brand), #b45309, var(--accent-brand))',
        border: '1px solid rgba(230,57,70,0.4)',
      }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-0 right-0 -mr-10 -mt-10 w-48 h-48 rounded-full blur-2xl pointer-events-none"
        style={{ backgroundColor: 'rgba(244,162,97,0.2)' }}
      />

      {/* Event Details */}
      <div className="flex items-center gap-3.5 z-10">
        <div
          className="w-10 h-10 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center flex-shrink-0"
        >
          <Flame className="w-5 h-5" style={{ color: 'var(--accent-amber)' }} />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span
              className="text-[9px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full shadow-xs flex items-center gap-1"
              style={{ backgroundColor: 'white', color: 'var(--accent-brand)' }}
            >
              <Radio className="w-3 h-3 animate-pulse" />
              <span>LIVE NOW</span>
            </span>
            <span
              className="text-xs font-black tracking-wider uppercase"
              style={{ color: 'var(--accent-amber)' }}
            >
              KITFO FEST #5 • MONARCH HOTEL ROOFTOP
            </span>
          </div>
          <p className="text-xs font-medium text-white/95">
            Unlimited traditional delicacies, live cultural music &amp; honey wine tastings this weekend!
          </p>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex items-center gap-2.5 z-10 flex-shrink-0 w-full sm:w-auto justify-end">
        <a
          href="tel:0966550000"
          className="text-zinc-950 text-xs font-black py-2 px-4 rounded-xl transition-all shadow-md flex items-center gap-1.5 cursor-pointer hover:scale-105"
          style={{ backgroundColor: 'var(--accent-amber)' }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Reserve: 0966-55-00-00</span>
        </a>
        <button
          onClick={() => setClosed(true)}
          className="p-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          title="Dismiss banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
