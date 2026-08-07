'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Trophy, Award, ExternalLink, ArrowRight, Sparkles, Share2, UtensilsCrossed, Grid } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MobileBottomNav from '../../components/layout/MobileBottomNav';
import { AWARDS_CATEGORIES_URL, AWARDS_CATEGORY_URLS } from '../../lib/awardsLinks';
import { useLanguage } from '../../context/LanguageContext';

export default function AwardsPage() {
  const { lang } = useLanguage();

  const popularCategories = [
    {
      title: 'Cafés',
      titleAm: 'ካፌዎች እና ቡና',
      emoji: '☕',
      desc: 'Discover cozy coffee spots, macchiatos, and artisanal bakeries in Addis.',
      url: 'https://addisfoodie-awards.netlify.app/categories/cafes?sbbom=true',
    },
    {
      title: 'Chinese',
      titleAm: 'የቻይና ምግቦች',
      emoji: '🥟',
      desc: 'Enjoy classic Chinese dishes like handmade dumplings, hotpot, and stir-fry.',
      url: 'https://addisfoodie-awards.netlify.app/categories/chinese?sbbom=true',
    },
    {
      title: 'Italian',
      titleAm: 'የጣሊያን ምግቦች',
      emoji: '🍕',
      desc: 'Indulge in wood-fired sourdough pasta, pizza, and rich Italian flavors.',
      url: 'https://addisfoodie-awards.netlify.app/categories/italian?sbbom=true',
    },
    {
      title: 'Traditional',
      titleAm: 'ባህላዊ ምግቦች',
      emoji: '🍲',
      desc: 'Experience authentic Ethiopian Kitfo, Doro Wat, and cultural feasts.',
      url: 'https://addisfoodie-awards.netlify.app/categories/traditional?sbbom=true',
    },
    {
      title: 'Burgers & Fast Food',
      titleAm: 'በርገር እና ፈጣን ምግቦች',
      emoji: '🍔',
      desc: 'Savor craft beef burgers, crispy fried chicken, and loaded sides.',
      url: 'https://addisfoodie-awards.netlify.app/categories/burgers?sbbom=true',
    },
    {
      title: 'Fine Dining',
      titleAm: 'ከፍተኛ ደረጃ ምግቦች',
      emoji: '🍷',
      desc: 'Luxury multi-course gastronomy, cocktail lounges, and romantic ambiance.',
      url: 'https://addisfoodie-awards.netlify.app/categories/fine-dining?sbbom=true',
    },
  ];

  return (
    <div
      className="flex flex-col min-h-screen bg-[#0D0706] text-white transition-colors duration-300 pb-20 sm:pb-0 max-w-full overflow-x-hidden"
    >
      <Header />

      {/* Hero Section with Gold Badge & Radial Glow */}
      <section className="relative w-full py-14 sm:py-20 flex flex-col items-center justify-center text-center px-4 overflow-hidden border-b border-stone-800/60">
        
        {/* Radial Gold Aura Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center gap-5 max-w-3xl mx-auto">
          
          {/* Top Brand Sub-label */}
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-stone-400">
            <span className="w-6 h-[1px] bg-amber-500/50" />
            <span>AddisFoodie PRESENTS</span>
            <span className="w-6 h-[1px] bg-amber-500/50" />
          </div>

          {/* Golden Medal Badge Emblem */}
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-tr from-amber-600 via-amber-400 to-yellow-200 p-1 shadow-2xl shadow-amber-500/20 my-2 group hover:scale-105 transition-transform duration-500">
            <div className="w-full h-full rounded-full bg-[#120907] flex flex-col items-center justify-center p-3 border border-amber-300/30 text-center">
              <UtensilsCrossed className="w-8 h-8 sm:w-10 sm:h-10 text-amber-400 mb-1 animate-pulse" />
              <span className="font-syne font-black text-[10px] sm:text-xs text-amber-300 tracking-wider uppercase leading-none">
                ADDISFOODIE
              </span>
              <span className="font-mono text-[8px] sm:text-[9px] text-stone-300 font-bold uppercase tracking-widest mt-0.5">
                AWARDS
              </span>
            </div>
          </div>

          {/* Hero Heading */}
          <h1 className="font-syne font-black text-4xl sm:text-6xl text-white tracking-tight leading-tight">
            AddisFoodie Awards
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base font-body text-stone-300 max-w-xl leading-relaxed">
            {lang === 'AM'
              ? 'በአዲስ አበባ የሚገኙ ምርጥ የምግብ ቤቶችን ለመምረጥ እና እውቅና ለመስጠት ይምረጡ'
              : 'Vote for your favorite restaurants in Addis Ababa and help recognize the best in the industry.'}
          </p>

          {/* Main "Start Voting" Button */}
          <a
            href="https://addisfoodie-awards.netlify.app/categories"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 px-8 py-3.5 rounded-full bg-white hover:bg-stone-200 text-black font-syne font-bold text-sm tracking-wide transition-all shadow-xl hover:scale-105 flex items-center gap-2 cursor-pointer"
          >
            <span>Start Voting</span>
            <ExternalLink className="w-4 h-4 text-black" />
          </a>

        </div>
      </section>

      {/* Three Info Feature Columns */}
      <section className="w-full py-12 border-b border-stone-800/60 bg-[#120A08]">
        <div className="site-container grid grid-cols-1 md:grid-cols-3 gap-8 text-center px-4">
          
          <div className="flex flex-col items-center gap-2.5 p-6 rounded-2xl bg-stone-900/40 border border-stone-800/80">
            <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400 mb-1">
              <Grid className="w-5 h-5" />
            </div>
            <h3 className="font-syne font-bold text-lg text-white">Categories</h3>
            <p className="text-xs text-stone-400 leading-relaxed max-w-xs">
              Vote across multiple categories including Fine Dining, Cafés, Traditional, and Street Food.
            </p>
          </div>

          <div className="flex flex-col items-center gap-2.5 p-6 rounded-2xl bg-stone-900/40 border border-stone-800/80">
            <div className="w-10 h-10 rounded-full bg-[#A81D1D]/10 flex items-center justify-center text-[#A81D1D] mb-1">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-syne font-bold text-lg text-white">Nominations</h3>
            <p className="text-xs text-stone-400 leading-relaxed max-w-xs">
              Nominate your favorite restaurants or submit your establishment for official consideration.
            </p>
            <Link href="/suggestions" className="text-xs font-bold text-[#F59E0B] hover:underline pt-1">
              Nominate a Spot →
            </Link>
          </div>

          <div className="flex flex-col items-center gap-2.5 p-6 rounded-2xl bg-stone-900/40 border border-stone-800/80">
            <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 mb-1">
              <Share2 className="w-5 h-5" />
            </div>
            <h3 className="font-syne font-bold text-lg text-white">Share your favorite restaurants</h3>
            <p className="text-xs text-stone-400 leading-relaxed max-w-xs">
              Share your favorite restaurants and verified price reviews with your friends and family.
            </p>
          </div>

        </div>
      </section>

      {/* Popular Categories Grid Section */}
      <section className="site-container py-14 flex flex-col items-center gap-10">
        
        <div className="text-center flex flex-col gap-2">
          <h2 className="font-syne font-black text-2xl sm:text-4xl text-white">
            Popular Categories
          </h2>
          <p className="text-xs sm:text-sm text-stone-400">
            Select a category below to jump straight to voting on the official awards platform.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
          {popularCategories.map((cat) => (
            <div
              key={cat.title}
              className="p-6 rounded-2xl bg-[#170E0B] border border-stone-800 hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between gap-4 group shadow-lg"
            >
              <div className="flex flex-col gap-3">
                <div className="w-10 h-10 rounded-xl bg-stone-800/80 flex items-center justify-center text-xl">
                  {cat.emoji}
                </div>
                <h3 className="font-syne font-bold text-xl text-white group-hover:text-amber-400 transition-colors">
                  {cat.title}
                </h3>
                <p className="text-xs text-stone-400 leading-relaxed">
                  {cat.desc}
                </p>
              </div>

              <a
                href={cat.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono font-bold text-stone-300 group-hover:text-white flex items-center gap-1 transition-colors pt-2 border-t border-stone-800/60"
              >
                <span>Vote Now</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-amber-400" />
              </a>
            </div>
          ))}
        </div>

        {/* View All Categories Bottom Button */}
        <a
          href="https://addisfoodie-awards.netlify.app/categories"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 px-6 py-3 rounded-xl border border-stone-700 hover:border-white text-stone-300 hover:text-white font-syne font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2"
        >
          <span>View all categories</span>
          <ArrowRight className="w-4 h-4 text-amber-400" />
        </a>

      </section>

      <Footer />
      <MobileBottomNav />
    </div>
  );
}
