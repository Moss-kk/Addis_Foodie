'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';

export default function WorkWithUsPage() {
  const [businessName, setBusinessName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [requestCategory, setRequestCategory] = useState('Review Request');
  const [eventDate, setEventDate] = useState('');
  const [budgetRange, setBudgetRange] = useState('Flexible');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName || !contactPhone) return;

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/promotion', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          businessName,
          contactPhone,
          contactEmail,
          promoType: requestCategory,
          eventDate,
          budgetRange,
          message,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      }
    } catch (err) {
      console.error('Failed to submit collaboration request', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-brand-bg text-brand-dark selection:bg-brand-primary/10 selection:text-brand-primary">
      <Header />

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-8 flex flex-col gap-10">
        
        {/* Breadcrumb */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-zinc-500 hover:text-brand-primary transition-colors cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            <span>Back to Discovery Feed</span>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-brand-dark via-[#8B1717] to-brand-primary text-white py-12 px-8 sm:px-14 rounded-3xl flex flex-col gap-4 shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 w-fit text-[11px] font-black uppercase tracking-widest text-amber-400">
            🤝 Commercial Collaboration Hub
          </div>
          <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            Work With Addis Foodies
          </h1>
          <p className="text-white/85 font-medium text-xs sm:text-base max-w-2xl">
            Partner with Ethiopia's #1 food review brand. Request video reviews, menu launch coverage, festival stalls, catering promotions, or corporate sponsorships.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Interactive Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-zinc-200/60 shadow-xs flex flex-col gap-6">
            <div className="flex flex-col gap-1 border-b border-zinc-100 pb-4">
              <span className="text-xs font-black text-brand-primary uppercase tracking-widest">Inquiry Workflow</span>
              <h2 className="font-display font-extrabold text-2xl text-brand-dark">Submit a Collaboration Request</h2>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center flex flex-col items-center gap-3">
                <span className="text-4xl">✅</span>
                <h3 className="font-display font-extrabold text-lg text-emerald-900">Request Submitted Successfully!</h3>
                <p className="text-xs sm:text-sm text-emerald-700 max-w-md font-medium">
                  Thank you for reaching out to Addis Foodies. Our commercial team will contact you at <strong className="font-bold">{contactPhone}</strong> within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-2.5 px-6 rounded-xl text-xs"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                
                <div>
                  <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1.5">Business / Venue Name *</label>
                  <input
                    type="text"
                    required
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="e.g. Yado Kitfo / Tomoca Coffee"
                    className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl border border-zinc-300 focus:outline-none focus:border-brand-primary"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1.5">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      placeholder="0911234567"
                      className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl border border-zinc-300 focus:outline-none focus:border-brand-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1.5">Email Address</label>
                    <input
                      type="email"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder="contact@venue.com"
                      className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl border border-zinc-300 focus:outline-none focus:border-brand-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1.5">Collaboration Category *</label>
                  <select
                    value={requestCategory}
                    onChange={(e) => setRequestCategory(e.target.value)}
                    className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl border border-zinc-300 focus:outline-none focus:border-brand-primary"
                  >
                    <option value="Review Request">Request a Restaurant Review</option>
                    <option value="New Menu Launch">New Restaurant / Menu Launch Coverage</option>
                    <option value="Event Invitation">Event / Grand Opening Coverage</option>
                    <option value="Promotional Content">Book Promotional Video Reel</option>
                    <option value="Catering Promotion">Catering & Brand Showcase</option>
                    <option value="Sponsorship">Corporate Brand Sponsorship</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1.5">Target Launch / Event Date</label>
                    <input
                      type="text"
                      value={eventDate}
                      onChange={(e) => setEventDate(e.target.value)}
                      placeholder="e.g. Sep 15, 2026"
                      className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl border border-zinc-300 focus:outline-none focus:border-brand-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1.5">Budget Expectation</label>
                    <select
                      value={budgetRange}
                      onChange={(e) => setBudgetRange(e.target.value)}
                      className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl border border-zinc-300 focus:outline-none focus:border-brand-primary"
                    >
                      <option value="Flexible">Standard Package</option>
                      <option value="Premium Campaign">Premium Campaign</option>
                      <option value="Festival Sponsorship">Festival Sponsorship</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1.5">Additional Details / Notes</label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your venue, special dishes, or target campaign goals..."
                    className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl border border-zinc-300 focus:outline-none focus:border-brand-primary"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-primary hover:bg-[#8B1717] text-white font-extrabold py-3.5 rounded-xl text-xs sm:text-sm text-center transition-all duration-200 shadow-md cursor-pointer disabled:opacity-50 mt-2"
                >
                  {isSubmitting ? 'Submitting Request...' : 'Submit Collaboration Request'}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Contact & Social Grid (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Direct Contact Box */}
            <div className="bg-brand-dark text-white p-8 rounded-3xl shadow-xl flex flex-col gap-5">
              <h3 className="font-display font-black text-xl text-white">Direct Business Contact</h3>
              
              <div className="flex flex-col gap-4 text-xs">
                <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                  <span className="text-zinc-400 font-bold">📞 Phones:</span>
                  <div className="flex flex-col items-end font-mono font-bold text-amber-400">
                    <a href="tel:0966550000" className="hover:underline">0966-55-00-00</a>
                    <a href="tel:0911239270" className="hover:underline">0911-23-92-70</a>
                  </div>
                </div>

                <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                  <span className="text-zinc-400 font-bold">✉️ Email:</span>
                  <a href="mailto:hello@addisfoodies.com" className="font-mono font-bold text-amber-400 hover:underline">
                    hello@addisfoodies.com
                  </a>
                </div>

                <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                  <span className="text-zinc-400 font-bold">✈️ Telegram Direct:</span>
                  <a href="https://t.me/addisfoodies_admin" target="_blank" rel="noopener noreferrer" className="font-mono font-bold text-amber-400 hover:underline">
                    @addisfoodies_admin
                  </a>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-zinc-400 font-bold">⏰ Business Hours:</span>
                  <span className="font-semibold text-zinc-300">Mon–Sat 8:30 AM – 7:00 PM EAT</span>
                </div>
              </div>
            </div>

            {/* Social Grid Card */}
            <div className="bg-white p-8 rounded-3xl border border-zinc-200/60 shadow-xs flex flex-col gap-4">
              <h3 className="font-display font-extrabold text-base text-brand-dark">Official Social Handles</h3>
              
              <div className="grid grid-cols-2 gap-3 text-xs">
                <a
                  href="https://t.me/addisfoodies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-zinc-50 hover:bg-sky-50 border border-zinc-200/60 rounded-2xl flex flex-col gap-0.5 transition-colors"
                >
                  <span className="font-bold text-[#0088cc]">✈️ Telegram</span>
                  <span className="text-[10px] text-zinc-500 font-semibold">@AddisFoodies</span>
                </a>

                <a
                  href="https://instagram.com/addis.foodie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-zinc-50 hover:bg-pink-50 border border-zinc-200/60 rounded-2xl flex flex-col gap-0.5 transition-colors"
                >
                  <span className="font-bold text-[#e1306c]">📸 Instagram</span>
                  <span className="text-[10px] text-zinc-500 font-semibold">@addis.foodie</span>
                </a>

                <a
                  href="https://tiktok.com/@addisfoodies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-zinc-50 hover:bg-zinc-100 border border-zinc-200/60 rounded-2xl flex flex-col gap-0.5 transition-colors"
                >
                  <span className="font-bold text-zinc-900">🎵 TikTok</span>
                  <span className="text-[10px] text-zinc-500 font-semibold">@addisfoodies</span>
                </a>

                <a
                  href="https://facebook.com/addisfoodies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-zinc-50 hover:bg-blue-50 border border-zinc-200/60 rounded-2xl flex flex-col gap-0.5 transition-colors"
                >
                  <span className="font-bold text-[#1877f2]">📘 Facebook</span>
                  <span className="text-[10px] text-zinc-500 font-semibold">/addisfoodies</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </main>

      <footer className="border-t border-zinc-200/50 bg-white/50 py-6 text-center mt-12">
        <p className="text-[10px] sm:text-xs text-zinc-400 font-semibold tracking-wide uppercase font-sans">
          Addis Foodies © 2026 • Commercial Collaboration Hub
        </p>
      </footer>
    </div>
  );
}
