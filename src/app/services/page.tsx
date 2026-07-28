'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MobileBottomNav from '../../components/layout/MobileBottomNav';
import PromotionHub from '../../components/promotions/PromotionHub';
import TemplateShowcase from '../../components/templates/TemplateShowcase';

export default function ServicesPage() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const packages = [
    {
      name: 'Editorial Review Spotlight',
      badge: 'POPULAR CHOICE',
      price: '8,500 ETB',
      duration: 'Single Spot Feature',
      description: 'Comprehensive multi-photo review published directly across our official Telegram & Instagram channels.',
      features: [
        'High-resolution food photography (4+ dishes)',
        'Itemized menu price breakdown in ETB',
        'Landmark location mapping & phone contact',
        'Multi-channel Telegram & Instagram publication',
        '48-hour content turnaround guaranteed'
      ],
      ctaText: 'Book Review Spotlight',
      featured: false
    },
    {
      name: 'Grand Launch & Video Reel Package',
      badge: 'HIGH IMPACT',
      price: '25,000 ETB',
      duration: '7-Day Multi-Post Campaign',
      description: 'Short-form vertical video reel (TikTok & Instagram Reels) + pinned featured post for grand openings.',
      features: [
        'Dedicated 9:16 vertical video reel (TikTok & Reels)',
        'Professional video editing & background music',
        'Pinned feature post on Telegram for 7 days',
        'Instagram story polls & location tag mentions',
        'Direct menu PDF download link integration'
      ],
      ctaText: 'Launch Video Campaign',
      featured: true
    },
    {
      name: 'Signature Festival Sponsorship',
      badge: 'EXCLUSIVE',
      price: '45,000 ETB',
      duration: 'Event Duration Coverage',
      description: 'Exclusive media sponsorship & live coverage for signature food festivals (Kitfo Fest, Burger Challenge).',
      features: [
        'Dedicated vendor booth promotion & banner slot',
        'Live festival event coverage & video interviews',
        'Primary sponsor badge across all festival collateral',
        'Post-event analytical impact report',
        'VIP host introduction to top local food influencers'
      ],
      ctaText: 'Sponsor Festival Event',
      featured: false
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#0B0F17] text-[#F8FAFC] transition-colors duration-300 pb-16 sm:pb-0 max-w-full overflow-x-hidden">
      <Header />

      <main className="flex-1 site-container py-8 sm:py-12 flex flex-col gap-12">
        
        {/* Breadcrumb Navigation */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#94A3B8] hover:text-[#F59E0B] transition-colors cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            <span>Back to Discovery Feed</span>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="bg-[#161E2E] text-white py-14 px-8 sm:px-14 rounded-3xl flex flex-col gap-4 shadow-xl border border-[#1F293D]">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B0F17] border border-[#F59E0B]/30 w-fit text-[11px] font-mono font-bold uppercase tracking-widest text-[#F59E0B]">
            💼 B2B Commercial Services &amp; Media Rates
          </div>
          <h1 className="font-display font-black text-3xl sm:text-5xl text-[#F8FAFC] tracking-tight leading-tight">
            Partner With Ethiopia’s Top Food Review Brand
          </h1>
          <p className="text-[#94A3B8] font-medium text-sm sm:text-lg max-w-3xl">
            Amplify your restaurant launch, menu feature, or food festival to over 150,000 active foodies across Addis Ababa.
          </p>
        </div>

        {/* Promotional Rate Packages */}
        <section className="flex flex-col gap-6">
          <div className="text-center flex flex-col items-center gap-2 max-w-2xl mx-auto">
            <span className="text-xs font-mono font-black text-[#F59E0B] uppercase tracking-widest">
              Standard Rate Cards
            </span>
            <h2 className="font-display font-black text-2xl sm:text-4xl text-[#F8FAFC]">
              Choose Your Media Campaign
            </h2>
            <p className="text-xs sm:text-sm text-[#94A3B8] font-medium">
              Transparent rate pricing in Ethiopian Birr (ETB) with clear deliverable guarantees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between gap-6 transition-all duration-300 ${
                  pkg.featured
                    ? 'bg-[#161E2E] text-white border-2 border-[#F59E0B] shadow-xl scale-[1.02]'
                    : 'bg-[#161E2E] text-[#F8FAFC] border border-[#1F293D] shadow-xs hover:border-[#F59E0B]'
                }`}
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-[10px] font-mono font-black px-3 py-1 rounded-full ${
                        pkg.featured ? 'bg-[#F59E0B] text-[#0B0F17]' : 'bg-[#0B0F17] text-[#F59E0B] border border-[#F59E0B]/30'
                      }`}
                    >
                      {pkg.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display font-black text-xl text-[#F8FAFC]">{pkg.name}</h3>
                    <p className="text-xs text-[#94A3B8] font-medium pt-1">{pkg.description}</p>
                  </div>

                  <div className="py-2 border-y border-[#1F293D]">
                    <span className="font-mono font-black text-2xl text-[#F59E0B]">{pkg.price}</span>
                    <span className="text-xs block text-[#94A3B8] font-mono">{pkg.duration}</span>
                  </div>

                  <ul className="flex flex-col gap-2 pt-2 text-xs font-semibold">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <span className="text-[#F59E0B]">✓</span>
                        <span className="text-[#94A3B8]">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/collaborate"
                  className="touch-target w-full py-3 rounded-xl bg-[#EF4444] hover:bg-[#DC2626] text-white text-xs font-black uppercase tracking-wider text-center shadow-md transition-colors"
                >
                  {pkg.ctaText}
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Promotion Engine Booking Form */}
        <PromotionHub />

        {/* Templates & Showcase */}
        <TemplateShowcase />

      </main>

      <Footer />
      <MobileBottomNav />
    </div>
  );
}
