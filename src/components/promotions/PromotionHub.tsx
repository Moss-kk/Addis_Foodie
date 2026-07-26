'use client';

import React, { useState } from 'react';
import { Phone, Mail, Send, Camera, Sparkles, CheckCircle2 } from 'lucide-react';

export function PromotionHub() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="w-full bg-[#111827] text-white rounded-3xl p-8 md:p-12 my-12 border border-zinc-800 shadow-2xl relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#A81D1D]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F59E0B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="px-4 py-1.5 bg-[#A81D1D] text-white text-xs font-black uppercase rounded-full tracking-widest inline-flex items-center gap-2 font-mono">
            <Sparkles className="w-4 h-4 text-amber-300" /> DM for Promotion & Collaborations
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white font-syne">
            Grow Your Restaurant with Addis Foodies
          </h2>
          <p className="text-zinc-300 text-sm md:text-base max-w-2xl mx-auto font-medium">
            Get high-visibility review coverage, professional food photography, menu launches, and event media partnerships seen by thousands across Ethiopia.
          </p>
        </div>

        {/* Contact Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-zinc-950 p-6 rounded-2xl border border-zinc-800 text-center">
          <div className="space-y-1">
            <p className="text-xs text-zinc-400 font-bold uppercase tracking-wider font-mono">Direct Phone Hotline</p>
            <a
              href="tel:0966550000"
              className="text-lg font-black text-[#F59E0B] hover:underline flex items-center justify-center gap-2 font-mono cursor-pointer"
            >
              <Phone className="w-4 h-4 text-[#A81D1D]" /> 0966-55-00-00
            </a>
          </div>

          <div className="space-y-1">
            <p className="text-xs text-zinc-400 font-bold uppercase tracking-wider font-mono">Telegram Direct DM</p>
            <a
              href="https://t.me/AddisFoodies"
              target="_blank"
              rel="noreferrer"
              className="text-lg font-black text-blue-400 hover:underline flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" /> @AddisFoodies
            </a>
          </div>

          <div className="space-y-1">
            <p className="text-xs text-zinc-400 font-bold uppercase tracking-wider font-mono">Instagram & TikTok</p>
            <p className="text-sm font-black text-rose-400 flex items-center justify-center gap-2">
              <Camera className="w-4 h-4" /> @addis.foodie
            </p>
          </div>
        </div>

        {/* Form */}
        {submitted ? (
          <div className="p-8 bg-emerald-950/50 border border-emerald-500/40 rounded-2xl text-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
            <h3 className="text-xl font-black text-white font-syne">Promotion Request Submitted!</h3>
            <p className="text-sm text-zinc-300 font-medium">
              The Addis Foodies team will contact you shortly via phone or Telegram.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 bg-zinc-950/60 p-6 md:p-8 rounded-2xl border border-zinc-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-1">Restaurant / Brand Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Monarch Hotel Rooftop"
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#A81D1D]"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-1">Phone Number / Telegram Handle</label>
                <input
                  type="text"
                  required
                  placeholder="0966550000 or @username"
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#A81D1D]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-zinc-300 mb-1">Promotion Type Required</label>
              <select className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#A81D1D]">
                <option>Full Food Review & Video Coverage</option>
                <option>Event Coverage (e.g. Kitfo Fest, Burger Week)</option>
                <option>Menu Photography & Video Production</option>
                <option>Social Media Sponsored Campaign</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-zinc-300 mb-1">Project Details & Preferred Dates</label>
              <textarea
                rows={3}
                required
                placeholder="Tell us about your venue, special dishes, or event schedule..."
                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#A81D1D]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-[#A81D1D] hover:bg-[#8B1717] text-white font-black text-sm uppercase rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer font-mono tracking-wider"
            >
              <Mail className="w-4 h-4" /> Submit Promotion Request
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default PromotionHub;
