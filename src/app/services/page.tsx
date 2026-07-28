'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  UtensilsCrossed, 
  MapPin, 
  Megaphone, 
  Smartphone, 
  Sparkles, 
  CheckCircle,
  ArrowRight,
  Handshake
} from 'lucide-react';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MobileBottomNav from '../../components/layout/MobileBottomNav';

const cateringOfferings = [
  {
    id: 'festival-catering',
    title: 'Festival & Event Catering',
    desc: 'Full-service catering production for corporate events, festival VIP booths, wedding banquets, and Habesha feast popups.',
    icon: UtensilsCrossed,
  },
  {
    id: 'restaurant-marketing',
    title: 'Restaurant Promotion & Reels',
    desc: 'High-definition video production, itemized ETB price audits, and publishing across @addis.foodie channels.',
    icon: Megaphone,
  },
  {
    id: 'delivery-partnership',
    title: '@addis.foodie.delivery Courier Listing',
    desc: 'List your restaurant menu on our high-contrast delivery platform for fast courier fulfillment across Addis.',
    icon: Smartphone,
  },
];

export default function ServicesPage() {
  const [businessName, setBusinessName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
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

        {/* 1. HIGH-CONTRAST MONOCHROME ADDIS FOODIE DELIVERY HUB CARD */}
        <section
          className="relative w-full rounded-[40px] overflow-hidden text-white shadow-2xl border-2 border-white/20 p-8 sm:p-14 flex flex-col lg:flex-row lg:items-center justify-between gap-10"
          style={{
            backgroundColor: '#000000', // Official monochrome delivery branding
            color: '#FFFFFF',
          }}
        >
          <div className="flex flex-col gap-5 max-w-2xl relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white text-black flex items-center justify-center font-black text-2xl shadow-xl">
                <MapPin className="w-7 h-7 text-black fill-black" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-3xl tracking-tight leading-none text-white">
                  addisfoodie
                </span>
                <span className="font-mono font-bold text-xs uppercase tracking-widest text-slate-400">
                  Delivery
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
                A NEW SERVICE FROM ADDIS FOODIE — COMING SOON
              </span>
              <h1 className="font-display font-normal text-3xl sm:text-5xl text-white tracking-tight leading-tight">
                Get Your Favorite Meals Right Where You Are
              </h1>
            </div>

            <p className="text-slate-300 font-body text-sm leading-relaxed">
              Order directly from top rated Kitfo joints, gourmet burger lounges, and authentic cafes across Bole, Kazanchis, Piassa, and Sarbet.
            </p>

            {/* Store Download Badges */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noreferrer"
                className="touch-target px-6 py-3.5 rounded-full bg-white text-black font-extrabold text-xs transition-all flex items-center gap-2.5 hover:bg-slate-200 cursor-pointer shadow-xl"
              >
                <FaGooglePlay className="w-4 h-4" />
                <div className="flex flex-col text-left leading-none">
                  <span className="text-[9px] font-mono uppercase text-slate-600">GET IT ON</span>
                  <span className="text-xs font-bold font-sans">Google Play</span>
                </div>
              </a>

              <a
                href="https://apple.com"
                target="_blank"
                rel="noreferrer"
                className="touch-target px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-extrabold text-xs border border-white/20 transition-all flex items-center gap-2.5 cursor-pointer backdrop-blur-md"
              >
                <FaApple className="w-5 h-5 text-white" />
                <div className="flex flex-col text-left leading-none">
                  <span className="text-[9px] font-mono uppercase text-slate-400">Download on the</span>
                  <span className="text-xs font-bold font-sans">App Store</span>
                </div>
              </a>
            </div>

            <div className="flex items-center gap-4 pt-3 text-xs font-mono text-slate-400 border-t border-white/10">
              <span>Hotline: <strong className="text-amber-400">0966-55-00-00</strong></span>
              <span>•</span>
              <span>Web: <strong className="text-white">addisfoodie.com</strong></span>
            </div>
          </div>

          <div className="bg-white/5 border border-white/15 rounded-3xl p-8 flex flex-col items-center text-center gap-4 max-w-sm w-full backdrop-blur-xl relative z-10">
            <Smartphone className="w-12 h-12 text-white" />
            <h3 className="font-display font-bold text-xl text-white">@addis.foodie.delivery</h3>
            <p className="text-xs text-slate-300 font-body leading-relaxed">
              Join thousands of food lovers using Addis Ababa’s premier local delivery courier network.
            </p>
          </div>
        </section>

        {/* 2. ADDIS FOODIES CATERING SERVICES SECTION */}
        <section className="flex flex-col gap-6">
          <div className="border-b pb-3" style={{ borderColor: 'var(--border-subtle)' }}>
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider mb-2 border"
              style={{
                backgroundColor: 'var(--accent-gold-glow)',
                borderColor: 'var(--border-subtle)',
                color: 'var(--accent-gold)',
              }}
            >
              <Sparkles className="w-4 h-4" />
              <span>Commercial &amp; Catering Solutions</span>
            </div>
            <h2 className="font-display font-normal text-2xl sm:text-4xl" style={{ color: 'var(--text-primary)' }}>
              Catering Services by Addis Foodies
            </h2>
            <p className="text-xs sm:text-sm font-body pt-1" style={{ color: 'var(--text-secondary)' }}>
              Event catering, festival hosting, and restaurant marketing Solutions across Addis Ababa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cateringOfferings.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="border rounded-3xl p-6 shadow-card flex flex-col justify-between gap-4"
                  style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}
                >
                  <div className="flex flex-col gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="font-display font-bold text-xl" style={{ color: 'var(--text-primary)' }}>
                      {service.title}
                    </h3>

                    <p className="text-xs font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {service.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* 3. PARTNERSHIP & CATERING INQUIRY FORM */}
        <section
          className="p-8 sm:p-12 rounded-3xl border shadow-card flex flex-col gap-6"
          style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}
        >
          <div className="flex items-center gap-2">
            <Handshake className="w-6 h-6" style={{ color: 'var(--accent-gold)' }} />
            <h3 className="font-display font-bold text-2xl" style={{ color: 'var(--text-primary)' }}>
              Submit Service &amp; Catering Inquiry
            </h3>
          </div>

          {submitted ? (
            <div className="p-8 bg-emerald-950/80 border border-emerald-500/60 text-emerald-300 rounded-2xl text-center flex flex-col gap-3">
              <CheckCircle className="w-10 h-10 text-emerald-400 mx-auto" />
              <h4 className="font-display font-bold text-xl text-white">Inquiry Received!</h4>
              <p className="text-xs font-medium text-emerald-200">
                Our team will reach out to phone ({contactPhone}) within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono font-bold uppercase tracking-wider" style={{ color: 'var(--accent-gold)' }}>
                  Business / Event Name
                </label>
                <input
                  type="text"
                  required
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="e.g. Taste of Addis / Kategna Catering"
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
                  placeholder="e.g. 0966-55-00-00"
                  className="w-full border rounded-xl px-4 py-3.5 text-xs sm:text-sm font-medium focus:outline-none"
                  style={{ backgroundColor: 'var(--bg-app)', color: 'var(--text-primary)', borderColor: 'var(--border-subtle)' }}
                />
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="touch-target w-full py-4 text-slate-950 font-extrabold text-xs uppercase tracking-wider rounded-full transition-all shadow-md cursor-pointer flex items-center justify-center gap-2 hover:scale-105"
                  style={{ backgroundColor: 'var(--accent-gold)' }}
                >
                  <span>Submit Inquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </section>

      </main>

      <Footer />
      <MobileBottomNav />
    </div>
  );
}
