'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  Calendar,
  Truck,
  PartyPopper,
  CheckCircle2
} from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MobileBottomNav from '../../components/layout/MobileBottomNav';
import DeliveryTeaserCard from '../../components/home/DeliveryTeaserCard';

const coreServicesPillars = [
  {
    id: 'food-reviews',
    title: 'Verified Food Reviews & Price Audits',
    subtitle: 'MOST KNOWN FOR',
    icon: ShieldCheck,
    description: 'Anonymous field inspections, high-definition dish galleries, itemized ETB price receipts, and independent ratings across Bole, Kazanchis, Piassa & Sarbet.',
    highlights: ['Anonymous Field Audits', 'Itemized ETB Price Receipt Logs', 'Independent Unbiased Ratings'],
    badge: 'Core Media Service',
    link: '/reviews',
    btnLabel: 'Explore Reviews Feed',
  },
  {
    id: 'festivals-events',
    title: 'Festivals & Major Culinary Events',
    subtitle: 'FESTIVAL PRODUCTION',
    icon: Calendar,
    description: 'Organizing and hosting Addis Ababa’s premier food festivals including Kitfo Fest 2026 (Tsom Mefcha), Christmas Expo, and Rooftop Tsom Kibela.',
    highlights: ['Kitfo Fest 2026 (Tsom Mefcha)', 'Christmas Mefthecha Food Expo', 'Rooftop Tsom Kibela Event'],
    badge: 'Major Festivals',
    link: '/events',
    btnLabel: 'View Festival Calendar',
  },
  {
    id: 'delivery-app',
    title: '@addis.foodie.delivery App',
    subtitle: 'COURIER SERVICE',
    icon: Truck,
    description: 'Official local food delivery app bringing top-rated Kitfo joints, gourmet smash burgers, and cafes directly to your doorstep with ETB receipts.',
    highlights: ['Bole, Kazanchis & Piassa Coverage', '100% Itemized Receipt Guarantee', 'Real-Time Dispatch'],
    badge: 'Courier Service',
    link: '/services#delivery-showcase',
    btnLabel: 'Download Delivery App',
  },
  {
    id: 'event-catering',
    title: 'Festival & Event Catering',
    subtitle: 'CATERING & BANQUETS',
    icon: PartyPopper,
    description: 'Bespoke traditional Ethiopian and modern international catering for corporate banquets, weddings, festival booths, and private VIP gatherings.',
    highlights: ['Live Butcher & Kitfo Stations', 'Authentic Ayeb & Gomen Pairings', 'Corporate Banquet Setup'],
    badge: 'Event Catering',
    link: '/collaborate',
    btnLabel: 'Inquire Catering Services',
  },
];

export default function ServicesPage() {
  return (
    <div
      className="flex flex-col min-h-screen transition-colors duration-300 pb-16 sm:pb-0 max-w-full overflow-x-hidden"
      style={{ backgroundColor: 'var(--bg-app)', color: 'var(--text-[#1A1C1E])' }}
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

        {/* HERO SECTION */}
        <section className="bg-[#1A1C1E] text-white p-8 sm:p-12 rounded-lg flex flex-col items-center text-center gap-4 shadow-xs border border-[var(--border-subtle)]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-white/10 border border-white/20 text-xs font-label uppercase tracking-widest text-[#B8422E]">
            <Sparkles className="w-4 h-4 text-[#B8422E]" />
            <span>Addis Foodies Core Services</span>
          </div>
          <h1 className="font-display font-medium text-3xl sm:text-5xl tracking-tight text-white">
            Our Services &amp; <span className="text-[#B8422E]">Specialities</span>
          </h1>
          <p className="text-slate-300 font-body text-sm sm:text-base leading-relaxed max-w-xl">
            From verified food reviews and price audits to major festivals, delivery courier app, and festival catering across Addis Ababa.
          </p>
        </section>

        {/* 4 CORE SERVICE PILLARS GRID (SIDE-SCROLLABLE HORIZONTAL CAROUSEL ON MOBILE) */}
        <section className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 sm:grid sm:grid-cols-2 sm:overflow-visible scrollbar-none">
          {coreServicesPillars.map((srv) => {
            const Icon = srv.icon;
            return (
              <div key={srv.id} className="shrink-0 w-[85vw] sm:w-auto snap-center">
                <div
                  className="heritage-card flex flex-col justify-between gap-6 h-full"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-md bg-[#B8422E]/10 border border-[#B8422E]/30 flex items-center justify-center text-[#B8422E]">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="px-3 py-1 rounded-sm bg-[#1A1C1E] text-white font-label text-[10px] uppercase border border-white/10">
                        {srv.badge}
                      </span>
                    </div>

                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-label uppercase tracking-widest text-[#B8422E]">
                        {srv.subtitle}
                      </span>
                      <h2 className="font-display font-medium text-2xl" style={{ color: 'var(--text-primary)' }}>
                        {srv.title}
                      </h2>
                    </div>

                    <p className="text-xs sm:text-sm font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {srv.description}
                    </p>

                    <div className="flex flex-col gap-2 pt-2 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
                      {srv.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs font-label text-slate-600 dark:text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#B8422E] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
                    <Link
                      href={srv.link}
                      className="button-primary w-full py-3 text-xs uppercase tracking-wider rounded-md flex items-center justify-center gap-1.5 cursor-pointer hover:scale-[1.01]"
                    >
                      <span>{srv.btnLabel}</span>
                      <ArrowRight className="w-4 h-4 text-white" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        {/* DELIVERY APP SHOWCASE CONTAINER */}
        <div id="delivery-showcase" className="pt-4">
          <DeliveryTeaserCard />
        </div>

      </main>

      <Footer />
      <MobileBottomNav />
    </div>
  );
}
