'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

export default function Header() {
  const [showPromo, setShowPromo] = useState(false);
  const [businessName, setBusinessName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [promoType, setPromoType] = useState('Video Review');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { lang, toggleLang, t } = useLanguage();

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
    <header className="sticky top-0 z-50 h-16 border-b border-zinc-200/60 glass-panel flex items-center justify-between px-4 sm:px-8 shadow-xs transition-all duration-300">
      
      {/* Brand Logo Rectangular Badge Container */}
      <Link href="/" className="group">
        <div className="bg-[#111827] border-2 border-[#A81D1D] hover:border-[#F59E0B] rounded-xl px-3.5 py-1.5 shadow-md flex items-center gap-2.5 transition-all duration-300 group-hover:scale-[1.02]">
          <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-[#A81D1D] shadow-xs flex-shrink-0 bg-black">
            <Image
              src="/images/logo.png"
              alt="Addis Foodies Cutlery Logo"
              fill
              sizes="32px"
              priority
              className="object-cover"
            />
          </div>
          
          <div className="flex flex-col -space-y-0.5">
            <div className="flex items-baseline gap-1">
              <span className="font-syne font-black text-sm sm:text-base tracking-tight text-white">Addis</span>
              <span className="font-syne font-black text-sm sm:text-base tracking-tight text-[#A81D1D]">Foodies</span>
            </div>
            <span className="text-[8px] sm:text-[9px] font-extrabold text-[#F59E0B] font-mono tracking-wider uppercase">
              Discovering Foods in Addis
            </span>
          </div>
        </div>
      </Link>

      {/* Navigation Bar Links */}
      <nav className="hidden lg:flex items-center gap-6 text-xs font-extrabold text-zinc-700 uppercase tracking-wider">
        <Link href="/" className="hover:text-[#A81D1D] transition-colors relative py-1 group">
          <span>{t('home')}</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#A81D1D] transition-all duration-300 group-hover:w-full" />
        </Link>
        <Link href="/#archive-section" className="hover:text-[#A81D1D] transition-colors relative py-1 group">
          <span>{t('reviews')}</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#A81D1D] transition-all duration-300 group-hover:w-full" />
        </Link>
        <Link href="/about" className="hover:text-[#A81D1D] transition-colors relative py-1 group">
          <span>{t('about')}</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#A81D1D] transition-all duration-300 group-hover:w-full" />
        </Link>
        <Link href="/events" className="hover:text-[#A81D1D] transition-colors flex items-center gap-1.5 relative py-1 group">
          <span>🎪 {t('events')}</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#A81D1D] transition-all duration-300 group-hover:w-full" />
        </Link>
        <Link href="/services" className="hover:text-[#A81D1D] transition-colors relative py-1 group">
          <span>{t('services')}</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#A81D1D] transition-all duration-300 group-hover:w-full" />
        </Link>
        <Link href="/collaborate" className="hover:text-[#A81D1D] transition-colors relative py-1 group">
          <span>{t('contact')}</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#A81D1D] transition-all duration-300 group-hover:w-full" />
        </Link>
      </nav>

      {/* Center Actions & Work With Us CTA */}
      <div className="flex items-center gap-2.5 sm:gap-3.5">
        
        {/* Search Icon Trigger */}
        <Link
          href="/#archive-section"
          className="p-2 text-zinc-600 hover:text-[#A81D1D] hover:bg-zinc-100 rounded-full transition-colors"
          title="Search Reviews"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </Link>

        {/* Language Switcher Badge */}
        <button
          onClick={toggleLang}
          className="px-2.5 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-[10px] font-black text-zinc-800 hover:border-[#A81D1D] transition-colors cursor-pointer"
          title="Toggle Language"
        >
          {lang === 'EN' ? '🇬🇧 EN' : '🇪🇹 አማርኛ'}
        </button>

        {/* Work With Us Direct Button */}
        <Link
          href="/collaborate"
          className="hidden sm:inline-flex items-center gap-1 bg-[#111827] hover:bg-[#8B1717] text-white font-extrabold text-xs py-2 px-4 rounded-xl transition-all duration-200 shadow-xs cursor-pointer hover:scale-102"
        >
          <span>🤝 {t('workWithUs')}</span>
        </Link>

        {/* Promote Spot CTA Button */}
        <button
          onClick={() => {
            setSubmitted(false);
            setShowPromo(true);
          }}
          className="bg-[#A81D1D] hover:bg-[#8B1717] text-white font-extrabold text-xs py-2 px-4 rounded-xl transition-all duration-200 shadow-xs hover:shadow-md hover:scale-102 flex items-center gap-1.5 cursor-pointer"
        >
          <span>🚀 {t('promoteSpot')}</span>
        </button>
      </div>

      {/* Promote Spot Dialog / Quick Collaboration Modal */}
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
              <span className="font-bold text-zinc-600 font-mono">Full Form Portal:</span>
              <Link href="/collaborate" onClick={() => setShowPromo(false)} className="text-[#A81D1D] hover:underline font-bold">
                Open Collaboration Hub ↗
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
