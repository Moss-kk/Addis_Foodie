'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Handshake, 
  Camera, 
  Video, 
  Utensils, 
  Sparkles, 
  Send, 
  Phone, 
  Download, 
  CheckCircle,
  Megaphone,
  Ticket,
  ArrowRight
} from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MobileBottomNav from '../../components/layout/MobileBottomNav';

const commercialServices = [
  {
    id: 'reviews',
    icon: Utensils,
    title: 'Restaurant Reviews',
    description: 'Comprehensive editorial inspection, high-res photo gallery, itemized ETB price receipt breakdown, and publication direct to @addisfoodiess.',
    tag: 'Core Offering',
  },
  {
    id: 'photography',
    icon: Camera,
    title: 'Food Photography',
    description: 'High-definition culinary photography for menus, social media campaigns, delivery apps, and billboard promotion across Addis Ababa.',
    tag: 'High Impact',
  },
  {
    id: 'videography',
    icon: Video,
    title: 'Reels & TikTok Production',
    description: 'Short-form cinematic video production optimized for viral reach on Instagram Reels, TikTok, and YouTube Shorts.',
    tag: 'Trending',
  },
  {
    id: 'campaigns',
    icon: Megaphone,
    title: 'Brand Campaigns',
    description: 'End-to-end promotional campaigns for beverage launches, food brands, restaurant openings, and special festive menus.',
    tag: 'Strategic',
  },
  {
    id: 'events',
    icon: Ticket,
    title: 'Event Coverage',
    description: 'Official festival hosting, vendor booth management, and live event coverage for Kitfo Fest, Burger Battle, and Food Expos.',
    tag: 'Live Event',
  },
  {
    id: 'consultation',
    icon: Sparkles,
    title: 'Menu Consultation',
    description: 'Expert feedback on menu pricing (ETB benchmarks), dish presentation, customer experience, and restaurant branding.',
    tag: 'Advisory',
  },
];

export default function CollaboratePage() {
  const [businessName, setBusinessName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [promoType, setPromoType] = useState('Restaurant Reviews');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (businessName && contactPhone) {
      setSubmitted(true);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5] dark:bg-[#120907] text-zinc-900 dark:text-[#FFF8F6] transition-colors duration-300 selection:bg-[#E53935]/20 selection:text-[#E53935] pb-16 sm:pb-0 max-w-full overflow-x-hidden">
      <Header />

      <main className="flex-1 site-container py-8 sm:py-12 flex flex-col gap-12">
        
        {/* Breadcrumb */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-zinc-500 hover:text-[#E53935] transition-colors"
          >
            <ArrowRight className="w-4 h-4 rotate-180 text-[#E53935]" />
            <span>Back to Digital Headquarters</span>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="bg-[#111827] text-white p-8 sm:p-14 rounded-3xl flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl border border-white/10">
          <div className="flex flex-col gap-4 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E53935]/20 border border-[#E53935]/40 text-xs font-mono font-bold uppercase tracking-widest text-[#FF8C00] w-fit">
              <Handshake className="w-4 h-4 text-[#FF8C00]" />
              <span>Commercial & Media Services Portal</span>
            </div>
            <h1 className="font-display font-black text-3xl sm:text-5xl tracking-tight leading-tight text-white">
              Work With Addis Foodies
            </h1>
            <p className="text-stone-300 font-medium text-sm sm:text-base leading-relaxed">
              Partner with Ethiopia's premier food media brand. Reach 150,000+ monthly food lovers, boost restaurant foot traffic, and launch viral culinary campaigns.
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 flex-shrink-0 w-full sm:w-auto">
            <a
              href="/docs/ADDIS_FOODIES_MEDIA_KIT_2026.pdf"
              download
              onClick={(e) => {
                e.preventDefault();
                alert('Downloading Addis Foodies Official 2026 Media Kit (PDF)...');
              }}
              className="touch-target w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#E53935] hover:bg-[#B71C1C] text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2 hover:scale-105 cursor-pointer"
            >
              <Download className="w-4 h-4 text-amber-200" />
              <span>Download Media Kit (PDF)</span>
            </a>
            <span className="text-[11px] font-mono text-stone-400">Updated for 2026 Season</span>
          </div>
        </div>

        {/* 6 Professional Commercial Cards */}
        <section className="flex flex-col gap-6">
          <div className="border-b border-stone-200 pb-3">
            <h2 className="font-display font-black text-2xl sm:text-3xl text-zinc-900">
              Our Media & Promotional Packages
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 font-medium pt-1">
              Tailored marketing and content production solutions for restaurants, cafes, and food brands
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {commercialServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="bg-white border border-stone-200/80 rounded-3xl p-6 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:border-[#E53935]/40"
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-[#E53935]/10 border border-[#E53935]/30 flex items-center justify-center text-[#E53935]">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-amber-500/10 text-[#FF8C00] font-mono font-bold text-[10px] uppercase border border-amber-500/30">
                        {service.tag}
                      </span>
                    </div>

                    <h3 className="font-display font-black text-xl text-zinc-900">
                      {service.title}
                    </h3>

                    <p className="text-xs text-stone-600 leading-relaxed font-medium">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stone-100 mt-4 flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#E53935]">Available Now</span>
                    <button
                      onClick={() => setPromoType(service.title)}
                      className="text-xs font-bold text-stone-500 hover:text-zinc-900 transition-colors"
                    >
                      Select →
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Partnership Form & Direct Media Contacts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 pt-4">
          
          {/* Form */}
          <div className="lg:col-span-2 bg-white p-8 sm:p-12 rounded-3xl border border-stone-200/80 shadow-xs flex flex-col gap-6">
            <h2 className="font-display font-black text-2xl text-zinc-900">
              Submit Partnership Inquiry
            </h2>

            {submitted ? (
              <div className="p-8 bg-emerald-950/80 border border-emerald-500/60 text-emerald-300 rounded-2xl text-center flex flex-col gap-3">
                <CheckCircle className="w-10 h-10 text-emerald-400 mx-auto" />
                <h3 className="font-display font-black text-xl text-white">Inquiry Received Successfully!</h3>
                <p className="text-xs font-medium text-emerald-200">
                  Our commercial manager will reach out to phone ({contactPhone}) within 24 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono font-bold text-[#FF8C00] uppercase tracking-wider">
                    Restaurant / Brand Name
                  </label>
                  <input
                    type="text"
                    required
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="e.g. Kategna Traditional Restaurant"
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-zinc-900 focus:outline-none focus:border-[#E53935] font-medium"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono font-bold text-[#FF8C00] uppercase tracking-wider">
                    Contact Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    placeholder="e.g. 0911-00-00-00"
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-zinc-900 focus:outline-none focus:border-[#E53935] font-medium"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono font-bold text-[#FF8C00] uppercase tracking-wider">
                    Package Selection
                  </label>
                  <select
                    value={promoType}
                    onChange={(e) => setPromoType(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-zinc-900 focus:outline-none focus:border-[#E53935] font-medium"
                  >
                    {commercialServices.map(s => (
                      <option key={s.id} value={s.title}>{s.title}</option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono font-bold text-[#FF8C00] uppercase tracking-wider">
                    Campaign Details & Location
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your restaurant location (Bole, Kazanchis, Piassa) and campaign goals."
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-zinc-900 focus:outline-none focus:border-[#E53935] font-medium"
                  />
                </div>

                <button
                  type="submit"
                  className="touch-target w-full py-4 bg-[#E53935] hover:bg-[#B71C1C] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Submit Partnership Inquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* Direct Media Contacts */}
          <div className="bg-white p-8 rounded-3xl border border-stone-200/80 shadow-xs flex flex-col gap-6 self-start">
            <h3 className="font-display font-black text-xl text-zinc-900">
              Direct Contacts
            </h3>
            
            <div className="flex flex-col gap-4 text-xs font-medium text-stone-600">
              <div>
                <span className="block text-[11px] font-mono text-[#FF8C00] font-bold uppercase tracking-wider">Direct Hotline</span>
                <a href="tel:0966550000" className="text-base font-bold text-zinc-900 hover:text-[#E53935] font-mono">0966-55-00-00</a>
              </div>

              <div>
                <span className="block text-[11px] font-mono text-[#FF8C00] font-bold uppercase tracking-wider">Official Telegram</span>
                <a href="https://t.me/addisfoodies" target="_blank" rel="noreferrer" className="text-sm font-bold text-sky-600 hover:underline">t.me/addisfoodies</a>
              </div>

              <div>
                <span className="block text-[11px] font-mono text-[#FF8C00] font-bold uppercase tracking-wider">Media Hub HQ</span>
                <span className="text-xs text-stone-500">Edna Mall Commercial Tower, Bole Medhaniallem, Addis Ababa</span>
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
