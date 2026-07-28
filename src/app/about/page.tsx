'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight,
  Building2,
} from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MobileBottomNav from '../../components/layout/MobileBottomNav';

const timelineEvents = [
  {
    year: '2021',
    title: 'Founded @addisfoodiess',
    description: 'Started as a passionate Instagram account documenting authentic local food gems in Bole & Piassa.',
  },
  {
    year: '2023',
    title: 'Kitfo Fest Inauguration',
    description: 'Launched Kitfo Fest #1 at Monarch Rooftop, gathering over 2,500 food lovers in a single weekend.',
  },
  {
    year: '2024',
    title: 'Itemized Price Receipt Transparency',
    description: 'Introduced verified ETB price logs to give food lovers 100% pricing clarity across Addis restaurants.',
  },
  {
    year: '2026',
    title: 'Premier Digital Food Platform',
    description: 'Elevated into Ethiopia’s premier food media guide and multi-festival production hub.',
  },
];

const achievements = [
  { metric: '150,000+', label: 'Active Monthly Food Lovers', sub: 'Across Instagram & Telegram' },
  { metric: '500+', label: 'Verified Restaurant Reviews', sub: 'Bole, Kazanchis, Piassa, Sarbet' },
  { metric: '20+', label: 'Culinary Festivals Hosted', sub: 'Kitfo Fest, Burger Battle, Coffee Week' },
  { metric: '100+', label: 'Partner Restaurants', sub: 'Authentic Habesha & Modern Dining' },
];

const partners = [
  { name: 'Kategna Restaurant', location: 'Bole' },
  { name: 'Yod Abyssinia', location: 'Bole' },
  { name: 'Monarch Parkview', location: 'Piassa' },
  { name: 'Tomoca Coffee', location: 'Piassa & Bole' },
  { name: 'Fin Fine Cultural', location: 'Kazanchis' },
  { name: 'Makush Art Gallery & Cafe', location: 'Bole' },
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
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-500 hover:text-amber-500 transition-colors"
          >
            <ArrowRight className="w-4 h-4 rotate-180" style={{ color: 'var(--accent-gold)' }} />
            <span>Back to Discovery Feed</span>
          </Link>
        </div>

        {/* HERO SECTION (Cleaned up, no corporate boilerplate or PDF buttons) */}
        <section className="bg-slate-950 text-white p-8 sm:p-14 rounded-[40px] flex flex-col items-center text-center gap-4 shadow-2xl border border-slate-800">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-mono font-bold uppercase tracking-widest text-amber-400"
            style={{ backgroundColor: 'var(--accent-gold-glow)', borderColor: 'var(--border-subtle)' }}
          >
            <Sparkles className="w-4 h-4" />
            <span>Addis Ababa Culinary Guide</span>
          </div>

          <h1 className="font-display font-normal text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-none">
            About <span className="text-amber-400">Addis Foodies</span>
          </h1>

          <p className="text-slate-300 font-body text-sm sm:text-lg leading-relaxed max-w-2xl">
            The premier digital food platform and culinary guide celebrating authentic local food, verified pricing, and food culture in Addis Ababa.
          </p>
        </section>

        {/* 1. NUMBERS & KEY ACHIEVEMENTS STRIP */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-3xl border shadow-card text-center flex flex-col gap-2"
              style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}
            >
              <span className="font-display font-bold text-3xl sm:text-4xl" style={{ color: 'var(--accent-gold)' }}>
                {item.metric}
              </span>
              <span className="font-display font-bold text-xs sm:text-sm" style={{ color: 'var(--text-primary)' }}>
                {item.label}
              </span>
              <span className="text-[11px] font-mono" style={{ color: 'var(--text-muted)' }}>
                {item.sub}
              </span>
            </motion.div>
          ))}
        </section>

        {/* 2. BRAND TIMELINE */}
        <section
          className="flex flex-col gap-8 p-8 sm:p-12 rounded-3xl border shadow-card"
          style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}
        >
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider" style={{ color: 'var(--accent-gold)' }}>
              Chronological Journey
            </span>
            <h2 className="font-display font-normal text-2xl sm:text-4xl" style={{ color: 'var(--text-primary)' }}>
              Addis Foodies Journey
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timelineEvents.map((ev, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border flex flex-col gap-3"
                style={{ backgroundColor: 'var(--bg-app)', borderColor: 'var(--border-subtle)' }}
              >
                <span className="font-mono font-bold text-3xl" style={{ color: 'var(--accent-gold)' }}>
                  {ev.year}
                </span>
                <h3 className="font-display font-bold text-base" style={{ color: 'var(--text-primary)' }}>
                  {ev.title}
                </h3>
                <p className="text-xs font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {ev.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. EDITORIAL METHODOLOGY */}
        <section className="flex flex-col gap-8 bg-slate-950 text-white p-8 sm:p-12 rounded-3xl border border-slate-800 shadow-xl">
          <div>
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
              Verification Standards
            </span>
            <h2 className="font-display font-normal text-2xl sm:text-4xl text-white">
              4-Step Review Inspection Process
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'Anonymous Field Visit', desc: 'Inspectors visit dining spots unannounced as ordinary paying customers.' },
              { num: '02', title: 'Itemized ETB Audit', desc: 'Every price is logged in ETB directly from official receipts for total transparency.' },
              { num: '03', title: 'Authentic Photography', desc: 'Capturing real Kitfo, coffee roasting, and dining atmosphere.' },
              { num: '04', title: 'Independent Review', desc: 'Final ratings published directly by Addis Foodies team—no paid fake reviews.' },
            ].map((step, i) => (
              <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/10 flex flex-col gap-2">
                <span className="font-mono font-black text-2xl text-amber-400">{step.num}</span>
                <h4 className="font-display font-bold text-sm text-white">{step.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed font-body">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. PARTNERS & COMMUNITY */}
        <section className="flex flex-col gap-6">
          <div className="border-b pb-3" style={{ borderColor: 'var(--border-subtle)' }}>
            <h2 className="font-display font-normal text-2xl sm:text-3xl" style={{ color: 'var(--text-primary)' }}>
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
                className="border p-4 rounded-2xl text-center flex flex-col justify-center items-center gap-1 shadow-card"
                style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}
              >
                <Building2 className="w-5 h-5 mb-1" style={{ color: 'var(--accent-gold)' }} />
                <span className="font-display font-bold text-xs" style={{ color: 'var(--text-primary)' }}>{p.name}</span>
                <span className="text-[10px] font-mono" style={{ color: 'var(--text-muted)' }}>{p.location}</span>
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
