'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [showAbout, setShowAbout] = useState(false);
  const [showPromo, setShowPromo] = useState(false);
  const [businessName, setBusinessName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [promoType, setPromoType] = useState('Video Review');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitInquiry = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName || !contactPhone) return;

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/promotion', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ businessName, contactPhone, promoType, message }),
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } catch (err) {
      console.error('Failed to submit promotion request', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 h-16 border-b border-zinc-200/50 glass-panel flex items-center justify-between px-4 sm:px-6 shadow-2xs transition-all duration-300">
      {/* Brand Logo & Wordmark */}
      <Link href="/" className="flex items-center gap-3 group">
        <div className="relative w-10 h-10 rounded-full overflow-hidden border border-zinc-200 shadow-xs group-hover:scale-105 transition-transform duration-200 flex-shrink-0">
          <Image
            src="/images/logo.png"
            alt="Addis Foodies Logo"
            fill
            sizes="40px"
            priority
            className="object-cover"
          />
        </div>
        <div className="flex flex-col -space-y-0.5">
          <div className="flex items-baseline gap-0.5">
            <span className="font-display font-black text-base sm:text-lg tracking-tight text-[#111827]">Addis</span>
            <span className="font-display font-black text-base sm:text-lg tracking-tight text-[#A81D1D]">Foodies</span>
          </div>
          <span className="text-[9px] font-extrabold text-zinc-500 font-sans tracking-widest uppercase">
            Discovering Foods in Addis
          </span>
        </div>
      </Link>

      {/* Center Actions / Live Syncing badge */}
      <div className="flex items-center gap-3 sm:gap-4">
        {/* Live Syncing Indicator */}
        <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50/90 border border-emerald-200/60 shadow-2xs">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[10px] font-black text-emerald-800 tracking-wider uppercase font-sans">
            Live Feed Sync
          </span>
        </div>

        {/* Promote Spot CTA Button */}
        <button
          onClick={() => {
            setSubmitted(false);
            setShowPromo(true);
          }}
          className="bg-gradient-to-r from-[#A81D1D] to-rose-700 hover:from-[#8B1717] hover:to-[#A81D1D] text-white font-extrabold text-xs py-1.5 px-3.5 sm:px-4 rounded-full transition-all duration-200 shadow-xs hover:shadow-md hover:scale-102 flex items-center gap-1.5 cursor-pointer"
        >
          <span>🚀 Promote Spot</span>
        </button>

        {/* Info & Socials Group */}
        <div className="flex items-center gap-1 sm:gap-2 border-l border-zinc-200 pl-3">
          {/* About Button */}
          <button
            onClick={() => setShowAbout(true)}
            className="p-2 text-zinc-500 hover:text-[#A81D1D] hover:bg-zinc-100 rounded-full transition-colors duration-200 cursor-pointer"
            title="About Addis Foodies"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 111.083.984l-.04.02-1.083-.984zm.67-4.2a.75.75 0 100-1.5.75.75 0 000 1.5zM22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.201 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12z" />
            </svg>
          </button>

          <a
            href="https://t.me/addisfoodies"
            target="_blank"
            rel="noopener noreferrer"
            title="Join our Telegram Channel"
            className="p-2 text-zinc-500 hover:text-[#0088cc] hover:bg-zinc-100 rounded-full transition-colors duration-200"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-1-.65-.35-1 .22-1.6 1.5-1.55 2.75-2.92 2.75-2.92.3-.34.36-.5-.22-.52-.37-.02-1.92.95-4.82 2.9-.45.31-.86.46-1.22.45-.4-.01-1.17-.23-1.74-.41-.7-.22-1.25-.34-1.2-.72.03-.2.3-.41.82-.62 3.2-1.4 5.34-2.32 6.42-2.77 3.07-1.28 3.7-.15 3.7.37z" />
            </svg>
          </a>

          <a
            href="https://instagram.com/addisfoodies"
            target="_blank"
            rel="noopener noreferrer"
            title="Follow us on Instagram"
            className="p-2 text-zinc-500 hover:text-[#e1306c] hover:bg-zinc-100 rounded-full transition-colors duration-200"
          >
            <svg
              className="w-5 h-5 stroke-current fill-none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
        </div>
      </div>

      {/* Promote Spot Dialog / Collaboration Modal */}
      {showPromo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            onClick={() => setShowPromo(false)}
            className="absolute inset-0 bg-black/65 backdrop-blur-xs transition-opacity duration-300"
          />
          <div className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-7 shadow-2xl z-10 border border-zinc-200 flex flex-col gap-4 animate-slide-up">
            <div className="flex items-center justify-between">
              <div className="w-11 h-11 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center text-xl font-black">
                📢
              </div>
              <button
                onClick={() => setShowPromo(false)}
                className="p-1 rounded-full text-zinc-400 hover:text-zinc-800 hover:bg-zinc-100 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex flex-col gap-1">
              <h3 className="font-display font-black text-xl text-[#111827]">Promote Your Restaurant</h3>
              <p className="text-xs text-zinc-600 font-medium leading-relaxed">
                Reach 150,000+ food lovers in Addis Ababa. Submit your details or DM us directly.
              </p>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 text-center flex flex-col gap-2">
                <span className="text-2xl">✅</span>
                <h4 className="font-display font-extrabold text-sm text-emerald-900">Request Submitted!</h4>
                <p className="text-xs text-emerald-700">The Addis Foodies team will contact you at {contactPhone} within 24 hours.</p>
                <button
                  onClick={() => setShowPromo(false)}
                  className="mt-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-2 rounded-xl text-xs"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmitInquiry} className="flex flex-col gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-zinc-700 uppercase tracking-wider mb-1">Business / Venue Name</label>
                  <input
                    type="text"
                    required
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="e.g. Yado Kitfo"
                    className="w-full px-3 py-2 text-xs rounded-xl border border-zinc-300 focus:outline-none focus:border-[#A81D1D]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-zinc-700 uppercase tracking-wider mb-1">Contact Phone</label>
                  <input
                    type="tel"
                    required
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    placeholder="0911234567"
                    className="w-full px-3 py-2 text-xs rounded-xl border border-zinc-300 focus:outline-none focus:border-[#A81D1D]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-zinc-700 uppercase tracking-wider mb-1">Promotion Type</label>
                  <select
                    value={promoType}
                    onChange={(e) => setPromoType(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-zinc-300 focus:outline-none focus:border-[#A81D1D]"
                  >
                    <option value="Video Review">Video Review Coverage</option>
                    <option value="Festival Slot">Kitfo Fest / Event Stall</option>
                    <option value="Banner Slot">Homepage Banner Sponsorship</option>
                    <option value="Photography">Food Photography & Reels</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-zinc-700 uppercase tracking-wider mb-1">Notes (Optional)</label>
                  <textarea
                    rows={2}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Special requests or target launch date..."
                    className="w-full px-3 py-2 text-xs rounded-xl border border-zinc-300 focus:outline-none focus:border-[#A81D1D]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#A81D1D] hover:bg-[#8B1717] text-white font-bold py-2.5 rounded-xl text-xs sm:text-sm text-center transition-all duration-200 shadow-md cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting Request...' : 'Submit Collaboration Request'}
                </button>
              </form>
            )}

            <div className="border-t border-zinc-200 pt-3 flex items-center justify-between text-xs">
              <span className="font-bold text-zinc-600">Telegram Direct:</span>
              <a href="https://t.me/addisfoodies_admin" target="_blank" rel="noopener noreferrer" className="text-[#A81D1D] hover:underline font-mono font-bold">
                @addisfoodies_admin
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Brand Info Overlay Dialog */}
      {showAbout && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            onClick={() => setShowAbout(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
          />
          <div className="relative w-full max-w-sm bg-white rounded-3xl p-6 shadow-2xl z-10 border border-zinc-200 flex flex-col gap-4 animate-slide-up">
            <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-[#A81D1D]">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 111.083.984l-.04.02-1.083-.984zm.67-4.2a.75.75 0 100-1.5.75.75 0 000 1.5zM22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.201 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12z" />
              </svg>
            </div>
            <div className="flex flex-col gap-1.5">
              <h3 className="font-display font-extrabold text-base text-zinc-950">About Addis Foodies</h3>
              <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed font-semibold">
                Addis Ababa's zero-login culinary platform auto-syncing live reviews from Instagram & Telegram. Explore restaurants in Bole, Kazanchis, Piassa, and Sarbet.
              </p>
            </div>
            <button
              onClick={() => setShowAbout(false)}
              className="w-full bg-[#111827] hover:bg-[#A81D1D] text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-colors duration-200 cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
