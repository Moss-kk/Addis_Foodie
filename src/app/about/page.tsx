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
            className="inline-flex items-center gap-2 text-xs font-label uppercase text-[var(--text-secondary)] hover:text-[#B8422E] transition-colors"
          >
            <ArrowRight className="w-4 h-4 rotate-180 text-[#B8422E]" />
            <span>Back to Discovery Feed</span>
          </Link>
        </div>

        {/* HERO SECTION */}
        <section className="bg-[#1A1C1E] text-white p-8 sm:p-12 rounded-lg flex flex-col items-center text-center gap-4 shadow-xs border border-[var(--border-subtle)]">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border text-xs font-label uppercase tracking-widest text-[#B8422E]"
            style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)' }}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#B8422E]" />
            <span>Addis Ababa Culinary Guide</span>
          </div>

          <h1 className="font-display font-medium text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-none">
            About <span className="text-[#B8422E]">Addis Foodies</span>
          </h1>

          <p className="text-slate-300 font-body text-sm sm:text-base leading-relaxed max-w-2xl">
            Architectural minimalism meets journalistic gravitas. The premier digital food platform and culinary guide celebrating authentic local food, verified pricing, and food culture in Addis Ababa.
          </p>
        </section>

        {/* 1. NUMBERS & KEY ACHIEVEMENTS STRIP */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              className="heritage-card text-center flex flex-col gap-2"
            >
              <span className="font-display font-medium text-3xl sm:text-4xl text-[#B8422E]">
                {item.metric}
              </span>
              <span className="font-display font-medium text-xs sm:text-sm" style={{ color: 'var(--text-primary)' }}>
                {item.label}
              </span>
              <span className="text-[11px] font-label" style={{ color: 'var(--text-muted)' }}>
                {item.sub}
              </span>
            </motion.div>
          ))}
        </section>

        {/* 2. BRAND TIMELINE */}
        <section
          className="flex flex-col gap-8 p-8 sm:p-10 rounded-lg border shadow-xs"
          style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}
        >
          <div>
            <span className="text-xs font-label uppercase tracking-wider text-[#B8422E]">
              Chronological Journey
            </span>
            <h2 className="font-display font-medium text-2xl sm:text-4xl" style={{ color: 'var(--text-primary)' }}>
              Addis Foodies Journey
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timelineEvents.map((ev, idx) => (
              <div
                key={idx}
                className="p-6 rounded-md border flex flex-col gap-3"
                style={{ backgroundColor: 'var(--bg-app)', borderColor: 'var(--border-subtle)' }}
              >
                <span className="font-label font-bold text-2xl text-[#B8422E]">
                  {ev.year}
                </span>
                <h3 className="font-display font-medium text-base" style={{ color: 'var(--text-primary)' }}>
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
        <section className="flex flex-col gap-8 bg-[#1A1C1E] text-white p-8 sm:p-10 rounded-lg border border-white/10 shadow-xs">
          <div>
            <span className="text-xs font-label text-[#B8422E] uppercase tracking-wider">
              Verification Standards
            </span>
            <h2 className="font-display font-medium text-2xl sm:text-4xl text-white">
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
              <div key={i} className="bg-white/5 p-5 rounded-md border border-white/10 flex flex-col gap-2">
                <span className="font-label font-bold text-2xl text-[#B8422E]">{step.num}</span>
                <h4 className="font-display font-medium text-sm text-white">{step.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed font-body">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. PARTNERS & COMMUNITY */}
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
