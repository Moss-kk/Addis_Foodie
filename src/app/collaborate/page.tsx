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
    description: 'Comprehensive inspection, high-res photo gallery, itemized ETB price breakdown, and publication to @addisfoodiess.',
    tag: 'Core Offering',
  },
  {
    id: 'photography',
    icon: Camera,
    title: 'Food Photography',
    description: 'High-definition culinary photography for menus, social media campaigns, and billboard promotion across Addis Ababa.',
    tag: 'High Impact',
  },
  {
    id: 'videography',
    icon: Video,
    title: 'Reels & TikTok Production',
    description: 'Short-form video production optimized for viral reach on Instagram Reels, TikTok, and YouTube Shorts.',
    tag: 'Trending',
  },
  {
    id: 'campaigns',
    icon: Megaphone,
    title: 'Brand Campaigns',
    description: 'Promotional campaigns for beverage launches, food brands, restaurant openings, and special festive menus.',
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
    description: 'Feedback on menu pricing (ETB benchmarks), dish presentation, customer experience, and restaurant branding.',
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
    <div
      className="flex flex-col min-h-screen transition-colors duration-300 pb-16 sm:pb-0 max-w-full overflow-x-hidden"
      style={{ backgroundColor: 'var(--bg-app)', color: 'var(--text-primary)' }}
    >
      <Header />

      <main className="flex-1 site-container py-8 sm:py-12 flex flex-col gap-12">
        
        {/* Breadcrumb */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-500 hover:text-amber-500 transition-colors"
          >
            <ArrowRight className="w-4 h-4 rotate-180" style={{ color: 'var(--accent-gold)' }} />
            <span>Back to Discovery Feed</span>
          </Link>
        </div>

        {/* Hero Section (Cleaned up, no corporate PDF buttons) */}
        <div className="bg-slate-950 text-white p-8 sm:p-14 rounded-[40px] flex flex-col items-center text-center gap-4 shadow-2xl border border-slate-800">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-mono font-bold uppercase tracking-widest text-amber-400">
            <Handshake className="w-4 h-4" />
            <span>Partner &amp; Collaborate</span>
          </div>
          <h1 className="font-display font-normal text-3xl sm:text-5xl tracking-tight leading-tight text-white">
            Work With <span className="text-amber-400">Addis Foodies</span>
          </h1>
          <p className="text-slate-300 font-body text-sm sm:text-base leading-relaxed max-w-xl">
            Promote your restaurant, launch a new menu feature, or sponsor a major food festival with @addisfoodiess.
          </p>
        </div>

        {/* 6 Professional Commercial Cards */}
        <section className="flex flex-col gap-6">
          <div className="border-b pb-3" style={{ borderColor: 'var(--border-subtle)' }}>
            <h2 className="font-display font-normal text-2xl sm:text-3xl" style={{ color: 'var(--text-primary)' }}>
              Promotional Packages
            </h2>
            <p className="text-xs sm:text-sm font-body pt-1" style={{ color: 'var(--text-secondary)' }}>
              Marketing and content production solutions for restaurants, cafes, and food brands
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
                  className="border rounded-3xl p-6 shadow-card hover:shadow-floating transition-all duration-300 flex flex-col justify-between"
                  style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 font-mono font-bold text-[10px] uppercase border border-amber-500/30">
                        {service.tag}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-xl" style={{ color: 'var(--text-primary)' }}>
                      {service.title}
                    </h3>

                    <p className="text-xs font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t mt-4 flex items-center justify-between" style={{ borderColor: 'var(--border-subtle)' }}>
                    <span className="text-xs font-mono font-bold" style={{ color: 'var(--accent-gold)' }}>Available</span>
                    <button
                      onClick={() => setPromoType(service.title)}
                      className="text-xs font-bold transition-colors cursor-pointer hover:underline"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      Select →
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Partnership Form & Direct Contacts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 pt-4">
          
          {/* Form */}
          <div
            className="lg:col-span-2 p-8 sm:p-12 rounded-3xl border shadow-card flex flex-col gap-6"
            style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}
          >
            <h2 className="font-display font-normal text-2xl" style={{ color: 'var(--text-primary)' }}>
              Submit Inquiry
            </h2>

            {submitted ? (
              <div className="p-8 bg-emerald-950/80 border border-emerald-500/60 text-emerald-300 rounded-2xl text-center flex flex-col gap-3">
                <CheckCircle className="w-10 h-10 text-emerald-400 mx-auto" />
                <h3 className="font-display font-bold text-xl text-white">Inquiry Received!</h3>
                <p className="text-xs font-medium text-emerald-200">
                  Our team will reach out to phone ({contactPhone}) within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider" style={{ color: 'var(--accent-gold)' }}>
                    Restaurant / Brand Name
                  </label>
                  <input
                    type="text"
                    required
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="e.g. Kategna Traditional Restaurant"
                    className="w-full border rounded-xl px-4 py-3.5 text-xs sm:text-sm font-medium focus:outline-none"
                    style={{ backgroundColor: 'var(--bg-app)', color: 'var(--text-primary)', borderColor: 'var(--border-subtle)' }}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider" style={{ color: 'var(--accent-gold)' }}>
                    Contact Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    placeholder="e.g. 0911-00-00-00"
                    className="w-full border rounded-xl px-4 py-3.5 text-xs sm:text-sm font-medium focus:outline-none"
                    style={{ backgroundColor: 'var(--bg-app)', color: 'var(--text-primary)', borderColor: 'var(--border-subtle)' }}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider" style={{ color: 'var(--accent-gold)' }}>
                    Package Selection
                  </label>
                  <select
                    value={promoType}
                    onChange={(e) => setPromoType(e.target.value)}
                    className="w-full border rounded-xl px-4 py-3.5 text-xs sm:text-sm font-medium focus:outline-none"
                    style={{ backgroundColor: 'var(--bg-app)', color: 'var(--text-primary)', borderColor: 'var(--border-subtle)' }}
                  >
                    {commercialServices.map(s => (
                      <option key={s.id} value={s.title}>{s.title}</option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider" style={{ color: 'var(--accent-gold)' }}>
                    Details
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your restaurant location (Bole, Kazanchis, Piassa) and campaign goals."
                    className="w-full border rounded-xl px-4 py-3.5 text-xs sm:text-sm font-medium focus:outline-none"
                    style={{ backgroundColor: 'var(--bg-app)', color: 'var(--text-primary)', borderColor: 'var(--border-subtle)' }}
                  />
                </div>

                <button
                  type="submit"
                  className="touch-target w-full py-4 text-slate-950 font-extrabold text-xs uppercase tracking-wider rounded-full transition-all shadow-md cursor-pointer flex items-center justify-center gap-2 hover:scale-105"
                  style={{ backgroundColor: 'var(--accent-gold)' }}
                >
                  <span>Submit Inquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* Direct Contacts */}
          <div
            className="p-8 rounded-3xl border shadow-card flex flex-col gap-6 self-start"
            style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}
          >
            <h3 className="font-display font-bold text-xl" style={{ color: 'var(--text-primary)' }}>
              Direct Contacts
            </h3>
            
            <div className="flex flex-col gap-4 text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>
              <div>
                <span className="block text-[11px] font-mono font-bold uppercase tracking-wider" style={{ color: 'var(--accent-gold)' }}>Direct Hotline</span>
                <a href="tel:0966550000" className="text-base font-bold font-mono hover:underline" style={{ color: 'var(--text-primary)' }}>0966-55-00-00</a>
              </div>

              <div>
                <span className="block text-[11px] font-mono font-bold uppercase tracking-wider" style={{ color: 'var(--accent-gold)' }}>Official Telegram</span>
                <a href="https://t.me/addisfoodies" target="_blank" rel="noreferrer" className="text-sm font-bold text-sky-500 hover:underline">t.me/addisfoodies</a>
              </div>

              <div>
                <span className="block text-[11px] font-mono font-bold uppercase tracking-wider" style={{ color: 'var(--accent-gold)' }}>Location</span>
                <span className="text-xs" style={{ color: 'var(--text-muted)' }}>Bole Medhaniallem, Addis Ababa</span>
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
