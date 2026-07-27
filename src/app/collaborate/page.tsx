'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MobileBottomNav from '../../components/layout/MobileBottomNav';

export default function CollaboratePage() {
  const [businessName, setBusinessName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [promoType, setPromoType] = useState('Video Review');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (businessName && contactPhone) {
      setSubmitted(true);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5] text-zinc-900 transition-colors duration-300 selection:bg-[#E53935]/20 selection:text-[#E53935] pb-16 sm:pb-0 max-w-full overflow-x-hidden">
      <Header />

      <main className="flex-1 site-container py-8 sm:py-12 flex flex-col gap-10">
        
        {/* Breadcrumb */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-zinc-600 hover:text-[#E53935] transition-colors cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            <span>Back to Discovery Feed</span>
          </Link>
        </div>

        {/* Hero Banner */}
        <div className="bg-gradient-to-br from-[#111827] via-[#8B1717] to-[#E53935] text-white py-14 px-8 sm:px-14 rounded-3xl flex flex-col gap-4 shadow-xl border border-red-500/20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 w-fit text-[11px] font-mono font-bold uppercase tracking-widest text-[#FF8C00]">
            🤝 Commercial Collaboration Engine
          </div>
          <h1 className="font-syne font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            Work With Addis Foodies
          </h1>
          <p className="text-zinc-200 font-medium text-sm sm:text-lg max-w-3xl">
            Promote your restaurant, new menu launch, food photography, or festival booth to 150,000+ local food lovers.
          </p>
        </div>

        {/* Form & Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Form Side */}
          <div className="lg:col-span-2 bg-white p-8 sm:p-12 rounded-3xl border border-stone-200 shadow-xs flex flex-col gap-6">
            <h2 className="font-syne font-black text-2xl text-[#111827]">Submit Collaboration Request</h2>
            
            {submitted ? (
              <div className="p-8 bg-[#10B981]/15 border border-[#10B981]/40 text-[#10B981] rounded-2xl text-center flex flex-col gap-2">
                <span className="text-3xl">🎉</span>
                <h3 className="font-black text-lg">Request Received Successfully!</h3>
                <p className="text-xs font-semibold">Our media manager will contact your phone ({contactPhone}) within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-zinc-700 uppercase tracking-wider">Restaurant / Brand Name</label>
                  <input
                    type="text"
                    required
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="e.g. Kakur Traditional Restaurant"
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-zinc-900 focus:outline-none focus:border-[#E53935]"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-zinc-700 uppercase tracking-wider">Contact Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    placeholder="e.g. 0911-00-00-00"
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-zinc-900 focus:outline-none focus:border-[#E53935]"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-zinc-700 uppercase tracking-wider">Campaign Type</label>
                  <select
                    value={promoType}
                    onChange={(e) => setPromoType(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-zinc-900 focus:outline-none focus:border-[#E53935]"
                  >
                    <option value="Video Review">Dedicated Video Reel (TikTok & Reels)</option>
                    <option value="Review Spotlight">Editorial Review Spotlight</option>
                    <option value="Festival Sponsorship">Kitfo Fest / Event Sponsorship</option>
                    <option value="Photography">Food Photography & Menu Digitization</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-zinc-700 uppercase tracking-wider">Additional Details or Location</label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your restaurant location (Bole, Kazanchis...) and campaign goals."
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-zinc-900 focus:outline-none focus:border-[#E53935]"
                  />
                </div>

                <button
                  type="submit"
                  className="touch-target w-full py-3.5 bg-[#E53935] hover:bg-[#B71C1C] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md cursor-pointer"
                >
                  Submit Partnership Inquiry ↗
                </button>
              </form>
            )}
          </div>

          {/* Contact Details */}
          <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-xs flex flex-col gap-6 self-start">
            <h3 className="font-syne font-black text-xl text-[#111827]">Direct Media Contacts</h3>
            
            <div className="flex flex-col gap-4 text-xs font-semibold text-zinc-700">
              <div>
                <span className="block text-[10px] font-mono text-[#E53935] font-bold uppercase tracking-wider">Direct Hotline</span>
                <a href="tel:0966550000" className="text-sm font-bold text-zinc-900 hover:text-[#E53935]">0966-55-00-00</a>
              </div>

              <div>
                <span className="block text-[10px] font-mono text-[#E53935] font-bold uppercase tracking-wider">Official Telegram</span>
                <a href="https://t.me/Addisfoodies" target="_blank" rel="noreferrer" className="text-sm font-bold text-sky-600 hover:underline">@Addisfoodies</a>
              </div>

              <div>
                <span className="block text-[10px] font-mono text-[#E53935] font-bold uppercase tracking-wider">Office Location</span>
                <span className="text-xs text-zinc-600">Bole Atlas & Monarch Hotel Rooftop Hub, Addis Ababa</span>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
      <MobileBottomNav />
    </div>
  );
}
