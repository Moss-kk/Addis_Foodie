import React from 'react';
import Link from 'next/link';
import Header from '../../components/Header';

export default function ServicesPage() {
  const services = [
    {
      title: 'Restaurant & Menu Reviews',
      icon: '🍽️',
      description: 'Editorial review coverage with high-resolution food photography, detailed itemized menu pricing in ETB, and landmark location tags.',
    },
    {
      title: 'New Restaurant Launch Coverage',
      icon: '🚀',
      description: 'Multi-channel launch campaigns designed to generate immediate buzz and foot traffic for grand openings.',
    },
    {
      title: 'Food Photography & Video Reels',
      icon: '🎥',
      description: 'Short-form vertical video reels (Instagram Reels & TikTok) crafted to showcase dish presentation, ambiance, and taste.',
    },
    {
      title: 'Social Media Promotion',
      icon: '📱',
      description: 'Dedicated featured posts and story highlights broadcast to 150,000+ local food lovers across Telegram and Instagram.',
    },
    {
      title: 'Campaign Collaborations',
      icon: '🎁',
      description: 'Custom promotional challenges, giveaway campaigns, and seasonal food guides tailored to your brand goals.',
    },
    {
      title: 'Event Coverage & Festival Hosting',
      icon: '🎪',
      description: 'Media partnership, live coverage, and festival hosting for signature culinary events like Kitfo Fest and Burger Challenges.',
    },
    {
      title: 'Catering Promotion',
      icon: '🍱',
      description: 'Targeted promotion for corporate catering services, artisanal food products, and private chef experiences.',
    },
    {
      title: 'Brand Partnerships',
      icon: '🤝',
      description: 'Long-term media sponsorships and brand ambassadorships with Ethiopia’s #1 digital food platform.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-brand-bg text-brand-dark selection:bg-brand-primary/10 selection:text-brand-primary">
      <Header />

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-8 flex flex-col gap-10">
        
        {/* Breadcrumb */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-zinc-500 hover:text-brand-primary transition-colors cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            <span>Back to Discovery Feed</span>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-brand-dark via-[#8B1717] to-brand-primary text-white py-12 px-8 sm:px-14 rounded-3xl flex flex-col gap-4 shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 w-fit text-[11px] font-black uppercase tracking-widest text-amber-400">
            💼 Commercial Services Menu
          </div>
          <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            Services & Promotional Capabilities
          </h1>
          <p className="text-white/85 font-medium text-xs sm:text-base max-w-2xl">
            Explore our suite of promotional offerings designed for restaurant owners, food brands, and event organizers in Addis Ababa.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-3xl border border-zinc-200/60 shadow-xs hover:shadow-xl hover:border-brand-primary/30 transition-all duration-300 flex flex-col gap-3 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-amber-50 group-hover:bg-red-50 text-2xl flex items-center justify-center transition-colors">
                {item.icon}
              </div>

              <h3 className="font-display font-extrabold text-base text-brand-dark group-hover:text-brand-primary transition-colors">
                {item.title}
              </h3>

              <p className="text-xs text-zinc-500 font-medium leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action Banner */}
        <div className="bg-brand-dark text-white p-8 sm:p-10 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="font-display font-black text-2xl text-white">Ready to Promote Your Venue?</h3>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-lg font-medium">
              Submit your collaboration request or direct message our commercial team on Telegram.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/collaborate"
              className="bg-brand-primary hover:bg-[#8B1717] text-white font-extrabold text-xs py-3 px-6 rounded-full transition-all shadow-md cursor-pointer"
            >
              Book Service Now ↗
            </Link>
          </div>
        </div>

      </main>

      <footer className="border-t border-zinc-200/50 bg-white/50 py-6 text-center mt-12">
        <p className="text-[10px] sm:text-xs text-zinc-400 font-semibold tracking-wide uppercase font-sans">
          Addis Foodies © 2026 • Commercial Services Catalog
        </p>
      </footer>
    </div>
  );
}
