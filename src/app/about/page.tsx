'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Users, 
  MapPin, 
  Utensils, 
  Sparkles, 
  Phone, 
  ArrowRight,
  Award,
  Calendar,
  Download,
  Building2,
  CheckCircle,
  Heart
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
    description: 'Launched Kitfo Fest #1 at Monarch Rooftop, gathering over 2,500 food enthusiasts in a single weekend.',
  },
  {
    year: '2024',
    title: 'Itemized Price Receipt Transparency',
    description: 'Introduced verified ETB price logs to give food lovers 100% pricing clarity across Addis restaurants.',
  },
  {
    year: '2026',
    title: 'Official Digital Headquarters',
    description: 'Elevated into Ethiopia’s premier food media brand, digital magazine, and multi-festival production hub.',
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
    <div className="flex flex-col min-h-screen bg-[#FAF8F5] dark:bg-[#120907] text-zinc-900 dark:text-[#FFF8F6] transition-colors duration-300 selection:bg-[#E53935]/20 selection:text-[#E53935] pb-16 sm:pb-0 max-w-full overflow-x-hidden">
      <Header />

      <main className="flex-1 site-container py-8 sm:py-12 flex flex-col gap-16 relative z-10">
        
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

        {/* HERO SECTION */}
        <section className="bg-[#111827] text-white p-8 sm:p-14 rounded-3xl flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl border border-white/10">
          <div className="flex flex-col gap-4 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E53935]/20 border border-[#E53935]/40 text-xs font-mono font-bold uppercase tracking-widest text-[#FF8C00] w-fit">
              <Sparkles className="w-4 h-4 text-[#FF8C00]" />
              <span>Brand Story & Editorial Heritage</span>
            </div>

            <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-none">
              Welcome to <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF8C00] via-amber-300 to-[#E53935]">Addis Foodies</span>
            </h1>

            <p className="text-stone-300 font-medium text-sm sm:text-lg leading-relaxed">
              The official digital media headquarters, culinary magazine, and event hub celebrating the vibrant flavors and culture of Addis Ababa, Ethiopia.
            </p>
          </div>

          <div className="flex flex-col gap-3 w-full sm:w-auto">
            <a
              href="/docs/ADDIS_FOODIES_MEDIA_KIT_2026.pdf"
              download
              onClick={(e) => {
                e.preventDefault();
                alert('Downloading Addis Foodies 2026 Media Kit (PDF)...');
              }}
              className="touch-target px-6 py-3.5 rounded-xl bg-[#E53935] hover:bg-[#B71C1C] text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2 hover:scale-105 cursor-pointer"
            >
              <Download className="w-4 h-4 text-amber-200" />
              <span>Download Media Kit (PDF)</span>
            </a>
          </div>
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
              className="bg-white p-6 rounded-3xl border border-stone-200/80 shadow-xs text-center flex flex-col gap-2 hover:border-[#E53935]/40 transition-colors"
            >
              <span className="font-display font-black text-3xl sm:text-4xl text-[#E53935]">
                {item.metric}
              </span>
              <span className="font-display font-bold text-xs sm:text-sm text-zinc-900">
                {item.label}
              </span>
              <span className="text-[11px] font-mono text-stone-500">
                {item.sub}
              </span>
            </motion.div>
          ))}
        </section>

        {/* 2. BRAND TIMELINE */}
        <section className="flex flex-col gap-8 bg-white p-8 sm:p-12 rounded-3xl border border-stone-200/80 shadow-xs">
          <div>
            <span className="text-xs font-mono font-bold text-[#FF8C00] uppercase tracking-wider">
              Chronological Journey
            </span>
            <h2 className="font-display font-black text-2xl sm:text-4xl text-zinc-900">
              Addis Foodies Timeline
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {timelineEvents.map((ev, idx) => (
              <div
                key={idx}
                className="bg-stone-50 p-6 rounded-2xl border border-stone-200/80 flex flex-col gap-3 relative"
              >
                <span className="font-mono font-black text-3xl text-[#E53935]">
                  {ev.year}
                </span>
                <h3 className="font-display font-bold text-base text-zinc-900">
                  {ev.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed font-medium">
                  {ev.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. EDITORIAL METHODOLOGY */}
        <section className="flex flex-col gap-8 bg-[#111827] text-white p-8 sm:p-12 rounded-3xl border border-white/10 shadow-xl">
          <div>
            <span className="text-xs font-mono font-bold text-[#FF8C00] uppercase tracking-wider">
              Verification Standards
            </span>
            <h2 className="font-display font-black text-2xl sm:text-4xl text-white">
              4-Step Review Inspection Methodology
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'Anonymous Field Visit', desc: 'Inspectors visit dining spots unannounced as ordinary paying customers.' },
              { num: '02', title: 'Itemized ETB Audit', desc: 'Every price is logged in ETB directly from official receipts for total transparency.' },
              { num: '03', title: 'Cinematic Visuals', desc: 'Capturing sizzling Kitfo, coffee roasting, and real dining atmosphere.' },
              { num: '04', title: 'Independent Verdict', desc: 'Final ratings published directly by Addis Foodies editorial staff—no paid fake reviews.' },
            ].map((step, i) => (
              <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/10 flex flex-col gap-2">
                <span className="font-mono font-black text-2xl text-[#E53935]">{step.num}</span>
                <h4 className="font-display font-bold text-sm text-white">{step.title}</h4>
                <p className="text-xs text-stone-300 leading-relaxed font-medium">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. PARTNERS & COMMUNITY */}
        <section className="flex flex-col gap-6">
          <div className="border-b border-stone-200 pb-3">
            <h2 className="font-display font-black text-2xl sm:text-3xl text-zinc-900">
              Featured Restaurant Partners
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 font-medium pt-1">
              A continuous network of landmark culinary spots across Addis Ababa
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {partners.map((p, idx) => (
              <div
                key={idx}
                className="bg-white border border-stone-200/80 p-4 rounded-2xl text-center flex flex-col justify-center items-center gap-1 shadow-xs hover:border-[#FF8C00]/40 transition-colors"
              >
                <Building2 className="w-5 h-5 text-[#FF8C00] mb-1" />
                <span className="font-display font-bold text-xs text-zinc-900">{p.name}</span>
                <span className="text-[10px] font-mono text-stone-500">{p.location}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="bg-gradient-to-r from-[#E53935] to-[#FF8C00] text-white p-8 sm:p-12 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <h3 className="font-display font-black text-2xl sm:text-4xl">Ready to Collaborate?</h3>
            <p className="text-xs sm:text-sm font-medium text-amber-100 pt-1">
              Join 100+ partner restaurants featured on Addis Foodies.
            </p>
          </div>
          <Link
            href="/collaborate"
            className="touch-target px-8 py-4 bg-[#111827] hover:bg-black text-white font-extrabold text-xs uppercase tracking-wider rounded-2xl shadow-xl transition-all hover:scale-105 flex items-center gap-2"
          >
            <span>Work With Us</span>
            <ArrowRight className="w-4 h-4 text-[#FF8C00]" />
          </Link>
        </section>

      </main>

      <Footer />
      <MobileBottomNav />
    </div>
  );
}
