'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

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
    <div className="flex flex-col min-h-screen bg-[#FAFAFA] text-[#111827] selection:bg-[#A81D1D]/10 selection:text-[#A81D1D]">
      <Header />

      <main className="flex-1 site-container py-8 sm:py-12 flex flex-col gap-10">
        
        {/* Breadcrumb */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-zinc-500 hover:text-[#A81D1D] transition-colors cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            <span>Back to Discovery Feed</span>
          </Link>
        </div>

        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-[#111827] via-[#8B1717] to-[#A81D1D] text-white py-14 px-8 sm:px-14 rounded-3xl flex flex-col gap-4 shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 w-fit text-[11px] font-mono font-black uppercase tracking-widest text-[#F59E0B]">
            🤝 Commercial Collaboration Engine
          </div>
          <h1 className="font-syne font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            Work With Addis Foodies
          </h1>
          <p className="text-white/90 font-medium text-sm sm:text-lg max-w-3xl">
            Promote your restaurant, new menu launch, food photography, or festival booth to 150,000+ local food lovers.
          </p>
        </div>

        {/* Form & Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Form Side */}
          <div className="lg:col-span-2 bg-white p-8 sm:p-12 rounded-3xl border border-zinc-200 shadow-sm flex flex-col gap-6">
            <h2 className="font-syne font-black text-2xl text-[#111827]">Submit Collaboration Request</h2>
            
            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl flex flex-col gap-3">
                <span className="text-3xl">🎉</span>
                <h3 className="font-syne font-black text-xl text-emerald-900">Inquiry Received!</h3>
                <p className="text-xs text-emerald-800 font-medium leading-relaxed">
                  Thank you for contacting Addis Foodies. Our commercial media team will call or message your phone number ({contactPhone}) within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono font-bold text-zinc-700 uppercase">Restaurant / Business Name *</label>
                  <input
                    type="text"
                    required
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="e.g. Roadrunner Burger Bole"
                    className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl border border-zinc-300 focus:outline-none focus:border-[#A81D1D] focus:ring-1 focus:ring-[#A81D1D]"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono font-bold text-zinc-700 uppercase">Contact Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    placeholder="e.g. +251 911 234 567"
                    className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl border border-zinc-300 focus:outline-none focus:border-[#A81D1D] focus:ring-1 focus:ring-[#A81D1D]"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono font-bold text-zinc-700 uppercase">Desired Service Package</label>
                  <select
                    value={promoType}
                    onChange={(e) => setPromoType(e.target.value)}
                    className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl border border-zinc-300 bg-white focus:outline-none focus:border-[#A81D1D] focus:ring-1 focus:ring-[#A81D1D]"
                  >
                    <option value="Video Review">Editorial Review Spotlight (8,500 ETB)</option>
                    <option value="Festival Slot">Grand Launch Video Campaign (25,000 ETB)</option>
                    <option value="Banner Slot">Signature Festival Sponsorship (45,000 ETB)</option>
                    <option value="Photography">Food Photography & Menu Digitization</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono font-bold text-zinc-700 uppercase">Additional Campaign Details</label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your dishes, location, or target launch date..."
                    className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl border border-zinc-300 focus:outline-none focus:border-[#A81D1D] focus:ring-1 focus:ring-[#A81D1D]"
                  />
                </div>

                <button
                  type="submit"
                  className="touch-target w-full bg-[#A81D1D] hover:bg-[#8B1717] text-white font-extrabold text-xs uppercase tracking-wider py-4 rounded-xl transition-all shadow-md cursor-pointer"
                >
                  Submit Collaboration Inquiry ↗
                </button>
              </form>
            )}
          </div>

          {/* Contact Info Side */}
          <div className="bg-[#111827] text-white p-8 sm:p-10 rounded-3xl flex flex-col gap-6 shadow-xl h-fit">
            <h3 className="font-syne font-black text-xl text-white">Direct Channel Contact</h3>
            <p className="text-xs text-zinc-300 font-medium leading-relaxed">
              Prefer instant messaging? Reach out directly to our commercial editor via Telegram or phone.
            </p>

            <div className="flex flex-col gap-4 border-t border-zinc-800 pt-4 text-xs font-mono">
              <div className="flex flex-col gap-1">
                <span className="text-[#F59E0B] font-bold">TELEGRAM DIRECT:</span>
                <span>@addisfoodies_official</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[#F59E0B] font-bold">COMMERCIAL PHONE:</span>
                <span>+251 911 000 111</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[#F59E0B] font-bold">OFFICE LOCATION:</span>
                <span>Bole, Addis Ababa, Ethiopia</span>
              </div>
            </div>
          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}
