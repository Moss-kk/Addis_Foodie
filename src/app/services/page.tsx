'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

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

  const capabilities = [
    {
      title: 'High-Resolution Culinary Photography',
      icon: '📷',
      desc: 'Professional lighting and composition capturing texture, sizzle, and freshness of signature dishes.'
    },
    {
      title: '9:16 Vertical Video Reels (TikTok & Reels)',
      icon: '🎥',
      desc: 'Engaging short-form video stories showcasing kitchen prep, ambiance, and authentic tasting reactions.'
    },
    {
      title: 'Menu Digitization & Price Itemization',
      icon: '🧾',
      desc: 'Digitizing physical menus into verifiable itemized ETB price receipts for foodie transparency.'
    },
    {
      title: 'Neighborhood Location Tagging',
      icon: '📍',
      desc: 'Exact Google Maps landmark guidance for Bole, Kazanchis, Piassa, and Sarbet food lovers.'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAFA] text-[#111827] selection:bg-[#A81D1D]/10 selection:text-[#A81D1D]">
      <Header />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-8 flex flex-col gap-12">
        
        {/* Breadcrumb Navigation */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-zinc-600 hover:text-[#A81D1D] transition-colors cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            <span>Back to Discovery Feed</span>
          </Link>
        </div>

        {/* Commercial Hero Section */}
        <div className="bg-gradient-to-br from-[#111827] via-[#8B1717] to-[#A81D1D] text-white py-14 px-8 sm:px-14 rounded-3xl flex flex-col gap-6 shadow-2xl relative overflow-hidden border border-zinc-800">
          <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-[#F59E0B]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 w-fit text-[11px] font-black uppercase tracking-widest text-[#F59E0B]">
            💼 Commercial Rate Card & Services Catalog (v5.0)
          </div>

          <div className="flex flex-col gap-3 max-w-3xl">
            <h1 className="font-syne font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              Promote Your Restaurant to 150,000+ Active Foodies
            </h1>
            <p className="text-zinc-200 font-semibold text-sm sm:text-lg leading-relaxed">
              Transparent rate cards, verified food reviews, professional video reels, and festival media partnerships tailored for Addis Ababa’s dining scene.
            </p>
          </div>

          {/* Micro Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/15 pt-6 mt-2 font-mono text-xs font-bold text-zinc-200">
            <div>
              <span className="block text-[#F59E0B] text-lg font-black font-syne">150,000+</span>
              <span>Monthly Reach</span>
            </div>
            <div>
              <span className="block text-[#F59E0B] text-lg font-black font-syne">320+</span>
              <span>Curated Venues</span>
            </div>
            <div>
              <span className="block text-[#F59E0B] text-lg font-black font-syne">4 Hubs</span>
              <span>Bole, Kazanchis...</span>
            </div>
            <div>
              <span className="block text-[#F59E0B] text-lg font-black font-syne">48 Hours</span>
              <span>Fast Turnaround</span>
            </div>
          </div>
        </div>

        {/* Commercial Service Tier Rate Cards */}
        <section className="flex flex-col gap-6">
          <div className="text-center flex flex-col gap-2 max-w-2xl mx-auto">
            <span className="text-xs font-mono font-black text-[#A81D1D] uppercase tracking-widest">Transparent Packages</span>
            <h2 className="font-syne font-black text-2xl sm:text-3xl text-[#111827]">
              Commercial Service Packages & Pricing
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 font-medium">
              Choose the ideal promotion package for your restaurant launch, menu update, or food festival.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  pkg.featured
                    ? 'bg-[#111827] text-white shadow-2xl border-2 border-[#A81D1D] transform md:-translate-y-2'
                    : 'bg-white text-[#111827] border border-zinc-200 shadow-sm hover:shadow-xl hover:border-zinc-300'
                }`}
              >
                {pkg.featured && (
                  <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-[#A81D1D] text-white text-[10px] font-mono font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-md">
                    ⚡ MOST POPULAR PACKAGE
                  </div>
                )}

                <div className="flex flex-col gap-4">
                  <span className={`text-[10px] font-mono font-black uppercase tracking-wider px-3 py-1 rounded-full w-fit ${
                    pkg.featured ? 'bg-zinc-800 text-[#F59E0B]' : 'bg-zinc-100 text-[#111827] border border-zinc-200'
                  }`}>
                    {pkg.badge}
                  </span>

                  <div>
                    <h3 className="font-syne font-black text-xl mb-1">{pkg.name}</h3>
                    <p className={`text-xs font-medium ${pkg.featured ? 'text-zinc-300' : 'text-zinc-600'}`}>
                      {pkg.description}
                    </p>
                  </div>

                  <div className={`border-t border-b py-4 my-2 ${pkg.featured ? 'border-zinc-800' : 'border-zinc-200'}`}>
                    <span className="font-mono font-black text-3xl text-[#A81D1D]">{pkg.price}</span>
                    <span className={`text-xs font-semibold block mt-1 ${pkg.featured ? 'text-zinc-400' : 'text-zinc-500'}`}>
                      {pkg.duration}
                    </span>
                  </div>

                  <ul className="flex flex-col gap-2.5 text-xs font-medium">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <span className="text-[#10B981] font-bold">✓</span>
                        <span className={pkg.featured ? 'text-zinc-200' : 'text-zinc-700'}>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8">
                  <Link
                    href={`/collaborate?package=${encodeURIComponent(pkg.name)}`}
                    className={`w-full text-center block py-3.5 rounded-xl font-extrabold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer ${
                      pkg.featured
                        ? 'bg-[#A81D1D] hover:bg-[#8B1717] text-white font-black'
                        : 'bg-[#111827] hover:bg-[#A81D1D] text-white'
                    }`}
                  >
                    {pkg.ctaText} ↗
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Deliverables & Production Capabilities */}
        <section className="bg-white p-8 sm:p-12 rounded-3xl border border-zinc-200 shadow-sm flex flex-col gap-8">
          <div className="flex flex-col gap-1 border-b border-zinc-100 pb-4">
            <span className="text-xs font-mono font-black text-[#A81D1D] uppercase tracking-widest">Production Standards</span>
            <h2 className="font-syne font-black text-2xl text-[#111827]">
              What Makes Addis Foodies Reviews Unique?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, idx) => (
              <div key={idx} className="bg-zinc-50 p-6 rounded-2xl border border-zinc-200/80 flex flex-col gap-3">
                <span className="text-3xl">{cap.icon}</span>
                <h3 className="font-syne font-bold text-base text-[#111827]">{cap.title}</h3>
                <p className="text-xs text-zinc-600 font-medium leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Direct Booking Banner */}
        <div className="bg-[#111827] text-white rounded-3xl p-8 sm:p-12 border border-zinc-800 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <span className="text-[#F59E0B] font-mono font-black text-xs uppercase tracking-widest">
              📢 Fast Track Collaboration
            </span>
            <h3 className="font-syne font-black text-2xl sm:text-3xl text-white">
              Need a Custom Campaign or Urgent Launch Coverage?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 max-w-xl font-medium">
              Submit your venue details directly through our commercial intake form or chat with our team on Telegram.
            </p>
          </div>

          <Link
            href="/collaborate"
            className="bg-[#A81D1D] hover:bg-[#8B1717] text-white font-extrabold text-xs sm:text-sm py-4 px-8 rounded-full transition-all shadow-lg hover:scale-105 flex-shrink-0 cursor-pointer"
          >
            START COLLABORATION INQUIRY ↗
          </Link>
        </div>

      </main>

      <Footer />
    </div>
  );
}
