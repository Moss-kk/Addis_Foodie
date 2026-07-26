'use client';

import React from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#09090B] text-zinc-100 selection:bg-[#F59E0B]/20 selection:text-[#F59E0B]">
      <Header />

      <main className="flex-1 site-container py-8 sm:py-12 flex flex-col gap-10">
        
        {/* Breadcrumb */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-zinc-400 hover:text-[#F59E0B] transition-colors cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            <span>Back to Discovery Feed</span>
          </Link>
        </div>

        {/* Hero Banner */}
        <div className="bg-gradient-to-br from-[#121215] via-[#18181C] to-black text-white py-14 px-8 sm:px-14 rounded-3xl flex flex-col gap-4 shadow-2xl border border-zinc-800">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 w-fit text-[11px] font-mono font-bold uppercase tracking-widest text-[#F59E0B]">
            📖 Official Brand Story & Editorial Protocol
          </div>
          <h1 className="font-syne font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            About Addis Foodies
          </h1>
          <p className="text-zinc-300 font-medium text-sm sm:text-lg max-w-3xl">
            The Official Digital Home of Addis Foodies. Curating culinary experiences across Addis Ababa, Ethiopia.
          </p>
        </div>

        {/* Core Narrative Sections */}
        <section className="bg-zinc-900/90 p-8 sm:p-12 rounded-3xl border border-zinc-800 shadow-xl flex flex-col gap-8">
          
          <div className="flex flex-col gap-3">
            <h2 className="font-syne font-black text-2xl text-zinc-100">
              Our Mission: Discovering Foods in Addis Ababa
            </h2>
            <p className="text-sm text-zinc-400 font-medium leading-relaxed">
              Addis Ababa is a vibrant, rapidly evolving culinary hub where centuries-old fasting stews meet modern espresso culture and gourmet burgers. <strong className="text-zinc-200">Addis Foodies</strong> was established to document, review, and celebrate this incredible food scene.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-zinc-800">
            <div className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800/80 flex flex-col gap-2">
              <span className="text-3xl">🏆</span>
              <h3 className="font-syne font-bold text-base text-zinc-100">100% Curated & Author-Verified</h3>
              <p className="text-xs text-zinc-400 font-medium leading-relaxed">Every review is authored strictly by our editorial team. No user spam or star manipulation.</p>
            </div>

            <div className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800/80 flex flex-col gap-2">
              <span className="text-3xl">💵</span>
              <h3 className="font-syne font-bold text-base text-zinc-100">Itemized Price Transparency</h3>
              <p className="text-xs text-zinc-400 font-medium leading-relaxed">We compile and verify dish pricing in ETB so local foodies have total clarity before visiting.</p>
            </div>

            <div className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800/80 flex flex-col gap-2">
              <span className="text-3xl">📱</span>
              <h3 className="font-syne font-bold text-base text-zinc-100">Direct Social Flywheel</h3>
              <p className="text-xs text-zinc-400 font-medium leading-relaxed">Deep links to our original Instagram posts and Telegram updates for authentic multi-channel proof.</p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="border-t border-zinc-800 pt-6 flex flex-wrap items-center gap-4">
            <Link
              href="/collaborate"
              className="touch-target bg-[#F59E0B] hover:bg-amber-400 text-zinc-950 font-black text-xs py-3 px-6 rounded-full transition-all shadow-md cursor-pointer hover:scale-102"
            >
              Work With Addis Foodies ↗
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
