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
  Handshake,
  Calendar,
  Receipt
} from 'lucide-react';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MobileBottomNav from '../../components/layout/MobileBottomNav';

const mainServices = [
  {
    id: 'food-reviews-audits',
    title: 'Food Reviews & Price Audits',
    desc: 'Professional restaurant inspections, itemized ETB price audits, and high-definition video reels published across @addis.foodie channels (150K+ reach).',
    icon: Receipt,
  },
  {
    id: 'festival-collaborations',
    title: 'Festival & Event Collaborations',
    desc: 'Official media partnership, co-hosting, and promotional campaigns for major culinary festivals including Kitfo Fest and Christmas Expos.',
    icon: Calendar,
  },
  {
    id: 'catering-banquets',
    title: 'Event Catering & Banquets',
    desc: 'Full-service catering production for corporate events, festival VIP booths, wedding banquets, and traditional Habesha feast popups.',
    icon: UtensilsCrossed,
  },
  {
    id: 'delivery-onboarding',
    title: '@addis.foodie.delivery Listing',
    desc: 'Onboard your restaurant menu on Addis Ababa’s premier delivery network with instant Play Store courier fulfillment across Bole, Kazanchis, Piassa, and Sarbet.',
    icon: Smartphone,
  },
];

export default function ServicesPage() {
  const [businessName, setBusinessName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [serviceType, setServiceType] = useState('catering');
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
            className="inline-flex items-center gap-2 text-xs font-label uppercase text-[var(--text-secondary)] hover:text-[#B8422E] transition-colors"
          >
            <ArrowRight className="w-4 h-4 rotate-180 text-[#B8422E]" />
            <span>Back to Discovery Feed</span>
          </Link>
        </div>

        {/* Header Title Banner */}
        <section className="flex flex-col gap-3 border-b pb-6" style={{ borderColor: 'var(--border-subtle)' }}>
          <div 
            className="inline-flex items-center gap-2 px-3 py-1 rounded-sm text-xs font-label uppercase tracking-widest text-[#B8422E] border w-fit"
            style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Commercial &amp; Catering Solutions</span>
          </div>
          <h1 className="font-display font-medium text-3xl sm:text-5xl" style={{ color: 'var(--text-primary)' }}>
            Services by Addis Foodies
          </h1>
          <p className="text-sm font-body max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
            From food reviews and itemized price audits to festival collaborations, event catering, and courier delivery app onboarding.
          </p>
        </section>

        {/* 1. ADDIS FOODIE DELIVERY APP CARD */}
        <section
          className="relative w-full rounded-lg overflow-hidden text-white shadow-xs border p-8 sm:p-12 flex flex-col lg:flex-row lg:items-center justify-between gap-10"
          style={{
            backgroundColor: '#1A1C1E',
            borderColor: 'var(--border-subtle)',
          }}
        >
          <div className="flex flex-col gap-5 max-w-2xl relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm bg-[#B8422E] text-white flex items-center justify-center font-label font-bold text-xl shadow-xs">
                <MapPin className="w-6 h-6 text-white fill-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-medium text-2xl tracking-tight leading-none text-white">
                  addisfoodie
                </span>
                <span className="font-label font-bold text-xs uppercase tracking-widest text-slate-400">
                  Delivery App
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-xs font-label uppercase tracking-widest text-[#B8422E]">
                COMMERCIAL COURIER ONBOARDING — ACTIVE ACROSS ADDIS
              </span>
              <h2 className="font-display font-medium text-2xl sm:text-4xl text-white leading-snug">
                Get Your Favorite Meals Right Where You Are
              </h2>
            </div>

            <p className="text-slate-300 font-body text-sm leading-relaxed">
              Order directly from top rated Kitfo joints, gourmet burger lounges, and authentic cafes across Bole, Kazanchis, Piassa, and Sarbet.
            </p>

            {/* Store Download Badges */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noreferrer"
                className="touch-target px-5 py-3 rounded-md bg-white text-[#1A1C1E] font-label font-bold text-xs transition-all flex items-center gap-2 hover:bg-slate-100 cursor-pointer shadow-xs"
              >
                <FaGooglePlay className="w-4 h-4 text-[#1A1C1E]" />
                <div className="flex flex-col text-left leading-none">
                  <span className="text-[8px] font-label uppercase text-slate-600">GET IT ON</span>
                  <span className="text-xs font-label">Google Play</span>
                </div>
              </a>

              <a
                href="https://apple.com"
                target="_blank"
                rel="noreferrer"
                className="touch-target px-5 py-3 rounded-md bg-white/10 hover:bg-white/20 text-white font-label font-bold text-xs border border-white/20 transition-all flex items-center gap-2 cursor-pointer backdrop-blur-md"
              >
                <FaApple className="w-4 h-4 text-white" />
                <div className="flex flex-col text-left leading-none">
                  <span className="text-[8px] font-label uppercase text-slate-400">Download on the</span>
                  <span className="text-xs font-label">App Store</span>
                </div>
              </a>
            </div>

            <div className="flex items-center gap-4 pt-3 text-xs font-label text-slate-400 border-t border-white/10">
              <span>Hotline: <strong className="text-white">0966-55-00-00</strong></span>
              <span>•</span>
              <span>Web: <strong className="text-white">addisfoodie.com</strong></span>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-md p-6 flex flex-col items-center text-center gap-3 max-w-sm w-full backdrop-blur-md relative z-10">
            <Smartphone className="w-10 h-10 text-[#B8422E]" />
            <h3 className="font-display font-medium text-lg text-white">@addis.foodie.delivery</h3>
            <p className="text-xs text-slate-300 font-body leading-relaxed">
              Join thousands of food lovers using Addis Ababa’s premier local delivery courier network.
            </p>
          </div>
        </section>

        {/* 2. SERVICES OFFERED GRID (Reviews, Collab with Fests, Catering, Delivery) */}
        <section className="flex flex-col gap-6">
          <div className="border-b pb-3" style={{ borderColor: 'var(--border-subtle)' }}>
            <h2 className="font-display font-medium text-2xl sm:text-3xl" style={{ color: 'var(--text-primary)' }}>
              Core Commercial &amp; Catering Offerings
            </h2>
            <p className="text-xs sm:text-sm font-body pt-1" style={{ color: 'var(--text-secondary)' }}>
              Explore how we support restaurants, festival organizers, and private event banquets.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mainServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.08 }}
                  className="heritage-card flex flex-col justify-between gap-4"
                >
                  <div className="flex flex-col gap-3">
                    <div className="w-10 h-10 rounded-md bg-[#B8422E]/10 border border-[#B8422E]/30 flex items-center justify-center text-[#B8422E]">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="font-display font-medium text-lg" style={{ color: 'var(--text-primary)' }}>
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

        {/* 3. SERVICE INQUIRY FORM */}
        <section
          className="p-8 sm:p-10 rounded-lg border flex flex-col gap-6"
          style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}
        >
          <div className="flex items-center gap-2">
            <Handshake className="w-6 h-6 text-[#B8422E]" />
            <h3 className="font-display font-medium text-2xl" style={{ color: 'var(--text-primary)' }}>
              Submit Service &amp; Catering Inquiry
            </h3>
          </div>

          {submitted ? (
            <div className="p-6 rounded-md bg-emerald-500/10 border border-emerald-500/40 text-emerald-800 text-center flex flex-col gap-2">
              <CheckCircle className="w-8 h-8 text-emerald-600 mx-auto" />
              <h4 className="font-display font-medium text-lg">Inquiry Received!</h4>
              <p className="text-xs font-body text-emerald-700">
                Our team will reach out to phone ({contactPhone}) within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-label uppercase tracking-wider text-[#B8422E]">
                  Business / Event Name
                </label>
                <input
                  type="text"
                  required
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="e.g. Tiru Kitfo / Kategna Catering"
                  className="w-full border rounded-md px-4 py-3 text-xs sm:text-sm font-medium focus:outline-none"
                  style={{ backgroundColor: 'var(--bg-app)', color: 'var(--text-primary)', borderColor: 'var(--border-subtle)' }}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-label uppercase tracking-wider text-[#B8422E]">
                  Contact Phone Number
                </label>
                <input
                  type="tel"
                  required
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                  placeholder="e.g. 0966-55-00-00"
                  className="w-full border rounded-md px-4 py-3 text-xs sm:text-sm font-medium focus:outline-none"
                  style={{ backgroundColor: 'var(--bg-app)', color: 'var(--text-primary)', borderColor: 'var(--border-subtle)' }}
                />
              </div>

              <div className="sm:col-span-2 flex flex-col gap-2">
                <label className="text-xs font-label uppercase tracking-wider text-[#B8422E]">
                  Select Service Type
                </label>
                <select
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  className="w-full border rounded-md px-4 py-3 text-xs sm:text-sm font-medium focus:outline-none"
                  style={{ backgroundColor: 'var(--bg-app)', color: 'var(--text-primary)', borderColor: 'var(--border-subtle)' }}
                >
                  <option value="catering">Event Catering &amp; Banquet Services</option>
                  <option value="reviews">Food Review &amp; Price Audit Reel Production</option>
                  <option value="festivals">Festival &amp; Event Media Collaboration</option>
                  <option value="delivery">@addis.foodie.delivery Courier Listing</option>
                </select>
              </div>

              <div className="sm:col-span-2 pt-2">
                <button
                  type="submit"
                  className="button-primary w-full py-3.5 text-xs uppercase tracking-wider rounded-md shadow-xs cursor-pointer flex items-center justify-center gap-2 hover:scale-[1.01]"
                >
                  <span>Submit Inquiry</span>
                  <ArrowRight className="w-4 h-4 text-white" />
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
