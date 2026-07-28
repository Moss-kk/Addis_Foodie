'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  Calendar,
  Truck,
  PartyPopper,
  CheckCircle2,
  Building2,
  Target,
  Award
} from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MobileBottomNav from '../../components/layout/MobileBottomNav';

const companyPillars = [
  {
    title: 'Verified Food Reviews & Price Audits',
    subtitle: 'WHAT WE ARE MOST KNOWN FOR',
    desc: 'Anonymous field inspections, itemized ETB price log transparency, and independent ratings across Bole, Kazanchis, Piassa & Sarbet.',
    icon: ShieldCheck,
  },
  {
    title: 'Festivals & Major Events',
    subtitle: 'FESTIVAL PRODUCTION',
    desc: 'Organizer of major Addis Ababa culinary gatherings including Kitfo Fest 2026 (Tsom Mefcha), Christmas Expo & Rooftop Tsom Kibela.',
    icon: Calendar,
  },
  {
    title: '@addis.foodie.delivery App',
    subtitle: 'LOCAL COURIER APP',
    desc: 'Dedicated courier delivery service connecting top-rated Kitfo joints and cafes directly to food lovers across Addis Ababa.',
    icon: Truck,
  },
  {
    title: 'Festival & Event Catering',
    subtitle: 'BANQUETS & CATERING',
    desc: 'Traditional Ethiopian and modern catering for corporate banquets, weddings, festival booths, and private dining events.',
    icon: PartyPopper,
  },
];

const partners = [
  { name: 'Tiru Kitfo', location: 'Bole Atlas' },
  { name: 'Kategna Restaurant', location: 'Bole' },
  { name: 'Yod Abyssinia', location: 'Bole' },
  { name: 'Monarch Parkview', location: 'Piassa' },
  { name: 'Tomoca Coffee', location: 'Piassa & Bole' },
  { name: 'Fin Fine Cultural', location: 'Kazanchis' },
];

export default function AboutPage() {
  return (
    <div
      className="flex flex-col min-h-screen transition-colors duration-300 pb-16 sm:pb-0 max-w-full overflow-x-hidden"
      style={{ backgroundColor: 'var(--bg-app)', color: 'var(--text-primary)' }}
    >
      <Header />

      <main className="flex-1 site-container py-8 sm:py-12 flex flex-col gap-12 relative z-10">
        
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

        {/* HERO SECTION */}
        <section className="bg-[#1A1C1E] text-white p-8 sm:p-12 rounded-lg flex flex-col items-center text-center gap-4 shadow-xs border border-[var(--border-subtle)]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-white/10 border border-white/20 text-xs font-label uppercase tracking-widest text-[#B8422E]">
            <Sparkles className="w-3.5 h-3.5 text-[#B8422E]" />
            <span>Addis Ababa Official Food Guide</span>
          </div>

          <h1 className="font-display font-medium text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-none">
            About <span className="text-[#B8422E]">Addis Foodies</span>
          </h1>

          <p className="text-slate-300 font-body text-sm sm:text-base leading-relaxed max-w-2xl">
            Architectural minimalism meets journalistic gravitas. The premier digital food platform and culinary guide celebrating authentic local food, verified pricing, and food culture in Addis Ababa.
          </p>
        </section>

        {/* 1. DESCRIPTION, PURPOSE & SPECIALITIES */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="heritage-card flex flex-col gap-3">
            <div className="w-10 h-10 rounded-md bg-[#B8422E]/10 border border-[#B8422E]/30 flex items-center justify-center text-[#B8422E]">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-display font-medium text-xl" style={{ color: 'var(--text-primary)' }}>
              Brand Description
            </h3>
            <p className="text-xs font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Addis Foodies (@addis.foodie &amp; @addis.foodie.delivery) is Ethiopia’s premier digital food platform, delivering independent restaurant inspections, price audits, and major culinary festival productions.
            </p>
          </div>

          <div className="heritage-card flex flex-col gap-3">
            <div className="w-10 h-10 rounded-md bg-[#B8422E]/10 border border-[#B8422E]/30 flex items-center justify-center text-[#B8422E]">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="font-display font-medium text-xl" style={{ color: 'var(--text-primary)' }}>
              Our Purpose
            </h3>
            <p className="text-xs font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              To empower food lovers in Addis Ababa with 100% itemized ETB price transparency, authentic culinary recommendations, and seamless local food delivery.
            </p>
          </div>

          <div className="heritage-card flex flex-col gap-3">
            <div className="w-10 h-10 rounded-md bg-[#B8422E]/10 border border-[#B8422E]/30 flex items-center justify-center text-[#B8422E]">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-display font-medium text-xl" style={{ color: 'var(--text-primary)' }}>
              Core Specialities
            </h3>
            <p className="text-xs font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Mastery in Kitfo joint inspections, Gurage cultural pairing audits, gourmet burger reviews, traditional coffee ceremonies, and large-scale festival hosting.
            </p>
          </div>
        </section>

        {/* 2. CORE SERVICES OVERVIEW */}
        <section
          className="p-8 sm:p-10 rounded-lg border shadow-xs flex flex-col gap-6"
          style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}
        >
          <div className="border-b pb-3" style={{ borderColor: 'var(--border-subtle)' }}>
            <span className="text-xs font-label uppercase tracking-wider text-[#B8422E]">
              Core Offerings
            </span>
            <h2 className="font-display font-medium text-2xl sm:text-4xl" style={{ color: 'var(--text-primary)' }}>
              Addis Foodies Core Services
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyPillars.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-md border flex flex-col justify-between gap-4"
                  style={{ backgroundColor: 'var(--bg-app)', borderColor: 'var(--border-subtle)' }}
                >
                  <div className="flex flex-col gap-2">
                    <div className="w-10 h-10 rounded-md bg-[#B8422E]/10 flex items-center justify-center text-[#B8422E] mb-1">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[9px] font-label font-bold text-[#B8422E] uppercase">
                      {srv.subtitle}
                    </span>
                    <h3 className="font-display font-medium text-base" style={{ color: 'var(--text-primary)' }}>
                      {srv.title}
                    </h3>
                    <p className="text-xs font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {srv.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-2 flex justify-center">
            <Link
              href="/services"
              className="button-primary px-6 py-3 rounded-md text-xs uppercase tracking-wider flex items-center gap-2 hover:scale-[1.01]"
            >
              <span>Explore Detailed Services Page</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </Link>
          </div>
        </section>

        {/* 3. PARTNERS */}
        <section className="flex flex-col gap-6">
          <div className="border-b pb-3" style={{ borderColor: 'var(--border-subtle)' }}>
            <h2 className="font-display font-medium text-2xl sm:text-3xl" style={{ color: 'var(--text-primary)' }}>
              Featured Restaurant Partners
            </h2>
            <p className="text-xs sm:text-sm font-body pt-1" style={{ color: 'var(--text-secondary)' }}>
              A continuous network of landmark culinary spots across Addis Ababa
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {partners.map((p, idx) => (
              <div
                key={idx}
                className="border p-4 rounded-md text-center flex flex-col justify-center items-center gap-1 shadow-xs"
                style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}
              >
                <Building2 className="w-5 h-5 mb-1 text-[#B8422E]" />
                <span className="font-display font-medium text-xs" style={{ color: 'var(--text-primary)' }}>{p.name}</span>
                <span className="text-[10px] font-label text-slate-400">{p.location}</span>
              </div>
            ))}
          </div>
        </section>

      </main>

      <Footer />
      <MobileBottomNav />
    </div>
  );
}
