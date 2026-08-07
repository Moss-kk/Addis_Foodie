'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Award, 
  ExternalLink, 
  ArrowRight, 
  Sparkles, 
  Share2, 
  UtensilsCrossed, 
  Grid,
  CheckCircle,
  Trophy
} from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MobileBottomNav from '../../components/layout/MobileBottomNav';
import { CUISINE_CATEGORIES } from '../../lib/categories';
import { getAwardsUrl, AWARDS_CATEGORIES_URL } from '../../lib/awardsLinks';
import { useLanguage } from '../../context/LanguageContext';

export default function AwardsPage() {
  const { lang } = useLanguage();

  return (
    <div
      className="flex flex-col min-h-screen transition-colors duration-300 pb-20 sm:pb-0 max-w-full overflow-x-hidden"
      style={{ backgroundColor: 'var(--bg-app)', color: 'var(--text-primary)' }}
    >
      <Header />

      {/* HERO SECTION WITH OFFICIAL GOLD SEAL LOGO & RADIAL AURA */}
      <section
        className="relative w-full py-16 sm:py-24 flex flex-col items-center justify-center text-center px-4 overflow-hidden border-b transition-colors"
        style={{
          backgroundColor: 'var(--bg-surface)',
          borderColor: 'var(--border-subtle)',
        }}
      >
        {/* Soft Golden Radial Glow Aura */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#F59E0B]/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center gap-6 max-w-4xl mx-auto">
          
          {/* Official AddisFoodie Awards Seal Image Logo */}
          <div className="relative w-40 h-40 sm:w-52 sm:h-52 drop-shadow-2xl hover:scale-105 transition-transform duration-500 my-1">
            <Image
              src="/images/addisfoodie-awards-seal.png"
              alt="Official AddisFoodie Awards Seal"
              fill
              priority
              sizes="(max-width: 768px) 160px, 208px"
              className="object-contain"
            />
          </div>

          {/* Sub-Brand Tagline */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-widest bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/30 shadow-xs">
            <Trophy className="w-4 h-4 text-[#F59E0B]" />
            <span>{lang === 'AM' ? 'የ2026 ይፋዊ የምግብ ቤት ሽልማት' : 'Official 2026 Culinary Competition'}</span>
          </div>

          {/* Headline */}
          <h1 className="font-syne font-black text-4xl sm:text-6xl text-[var(--text-primary)] tracking-tight leading-tight max-w-3xl">
            {lang === 'AM' ? 'አዲስ ፉዲ ሽልማቶች 2026' : 'AddisFoodie Awards'}
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base font-body text-[var(--text-secondary)] max-w-2xl leading-relaxed">
            {lang === 'AM'
              ? 'በአዲስ አበባ ውስጥ ያሉ ምርጥ የምግብ ቤቶችን፣ የክትፎ ቦታዎችን፣ ካፌዎችን እና የቪገን ቦታዎችን ለመምረጥ እና እውቅና ለመስጠት ይምረጡ።'
              : 'Vote for your favorite restaurants in Addis Ababa and help recognize the finest Kitfo joints, cafes, burgers, and culinary destinations in the industry.'}
          </p>

          {/* Primary CTA Button (Design system Primary Crimson #A81D1D / 48px touch target) */}
          <a
            href={AWARDS_CATEGORIES_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 button-primary px-8 py-3.5 rounded-xl font-syne font-bold text-sm text-white tracking-wide transition-all shadow-xl hover:scale-105 flex items-center gap-2.5 cursor-pointer touch-target"
          >
            <span>{lang === 'AM' ? 'አሁኑኑ ድምጽ መስጠት ይጀምሩ' : 'Start Voting Now'}</span>
            <ExternalLink className="w-4 h-4 text-white" />
          </a>

        </div>
      </section>

      {/* THREE CURATED VALUE PILLARS */}
      <section className="w-full py-12 border-b border-[var(--border-subtle)] bg-[var(--bg-app)]">
        <div className="site-container grid grid-cols-1 md:grid-cols-3 gap-6 text-center px-4">
          
          <div className="heritage-card p-6 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col items-center gap-3 shadow-xs hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#F59E0B]/10 border border-[#F59E0B]/20 flex items-center justify-center text-[#F59E0B]">
              <Grid className="w-6 h-6" />
            </div>
            <h3 className="font-syne font-bold text-lg text-[var(--text-primary)]">
              {lang === 'AM' ? '10 የምግብ ዘርፎች' : '10 Cuisine Categories'}
            </h3>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed max-w-xs font-body">
              {lang === 'AM'
                ? 'ከባህላዊ የሐበሻ ምግቦች እስከ ባህር ማዶ ምግቦች፣ ካፌዎች እና የቪገን አማራጮች ይምረጡ።'
                : 'Vote across multiple categories including Traditional Habesha, Siga Bet, Cafés, Fine Dining, and Street Food.'}
            </p>
          </div>

          <div className="heritage-card p-6 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col items-center gap-3 shadow-xs hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#A81D1D]/10 border border-[#A81D1D]/20 flex items-center justify-center text-[#A81D1D]">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-syne font-bold text-lg text-[var(--text-primary)]">
              {lang === 'AM' ? 'የህዝብ ጥቆማ እና መረጣ' : 'Community Nominations'}
            </h3>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed max-w-xs font-body">
              {lang === 'AM'
                ? 'የሚወዱትን ቦታ ይጠቁሙ ወይም ለተጨማሪ ግምገማ እንዲቀርብ ያድርጉ።'
                : 'Nominate your favorite undiscovered spot or submit your establishment for official consideration.'}
            </p>
            <Link href="/suggestions" className="text-xs font-bold text-[#F59E0B] hover:underline pt-1">
              {lang === 'AM' ? 'ቦታ ይጠቁሙ →' : 'Nominate a Spot →'}
            </Link>
          </div>

          <div className="heritage-card p-6 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col items-center gap-3 shadow-xs hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
              <Share2 className="w-6 h-6" />
            </div>
            <h3 className="font-syne font-bold text-lg text-[var(--text-primary)]">
              {lang === 'AM' ? 'ለወዳጅ ዘመድ ያካፍሉ' : 'Share Favorite Spots'}
            </h3>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed max-w-xs font-body">
              {lang === 'AM'
                ? 'የተረጋገጡ የምግብ ቤት ግምገማዎችን እና የዋጋ መረጃዎችን ለጓደኛዎ ያካፍሉ።'
                : 'Share your favorite restaurants, price audits, and voting links with your friends and family.'}
            </p>
          </div>

        </div>
      </section>

      {/* POPULAR CUISINE CATEGORIES GRID */}
      <main className="site-container py-16 flex flex-col items-center gap-12 flex-1">
        
        <div className="text-center flex flex-col gap-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-[#A81D1D] bg-[#A81D1D]/10 border border-[#A81D1D]/20 mx-auto">
            <span>Browse Category Ballots</span>
          </div>

          <h2 className="font-syne font-black text-3xl sm:text-5xl text-[var(--text-primary)]">
            {lang === 'AM' ? 'የተወዳጅ ምግቦች ዘርፎች' : 'Popular Categories'}
          </h2>

          <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-lg font-body">
            Select a category below to jump straight to voting on the official AddisFoodie Awards platform.
          </p>
        </div>

        {/* 10 Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {CUISINE_CATEGORIES.map((cat) => {
            const netlifyUrl = getAwardsUrl(cat.slug);

            return (
              <div
                key={cat.id}
                className="heritage-card group relative p-6 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[#A81D1D] transition-all duration-300 flex flex-col justify-between gap-5 shadow-xs hover:shadow-xl"
              >
                <div className="flex flex-col gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--bg-app)] border border-[var(--border-subtle)] flex items-center justify-center text-2xl shadow-inner">
                    {cat.emoji}
                  </div>

                  <h3 className="font-syne font-bold text-xl text-[var(--text-primary)] group-hover:text-[#A81D1D] transition-colors">
                    {lang === 'AM' ? cat.labelAm : cat.label}
                  </h3>

                  <p className="text-xs font-body text-[var(--text-secondary)] leading-relaxed">
                    {lang === 'AM' ? cat.descriptionAm : cat.description}
                  </p>
                </div>

                <a
                  href={netlifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between pt-3 border-t border-[var(--border-subtle)] text-xs font-mono font-bold text-[var(--text-primary)] group-hover:text-[#A81D1D] transition-colors"
                >
                  <span className="flex items-center gap-1">
                    <span>{lang === 'AM' ? 'አሁኑኑ ይምረጡ' : 'Vote Now'}</span>
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#F59E0B] group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Community Nomination Banner */}
        <div className="w-full p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-stone-950 via-[#1A100C] to-stone-950 text-white border border-[#F59E0B]/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl mt-4">
          <div className="flex flex-col gap-2 max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#F59E0B] font-bold uppercase">
              <Sparkles className="w-4 h-4 text-[#F59E0B]" />
              <span>Know an Undiscovered Gem?</span>
            </div>
            <h3 className="font-syne font-black text-xl sm:text-2xl text-white">
              Nominate a Restaurant for Official Review
            </h3>
            <p className="text-xs text-stone-300 font-body leading-relaxed">
              Help our team discover hidden Kitfo spots, artisanal bakeries, and traditional kitchens across Addis Ababa.
            </p>
          </div>

          <Link
            href="/suggestions"
            className="button-primary px-6 py-3.5 rounded-xl font-label text-xs font-bold uppercase tracking-wider text-white shrink-0 shadow-lg hover:scale-105 transition-transform"
          >
            Nominate a Spot Now →
          </Link>
        </div>

        {/* View All Categories Bottom Button */}
        <a
          href={AWARDS_CATEGORIES_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 px-8 py-3.5 rounded-2xl border border-[var(--border-subtle)] hover:border-[#A81D1D] bg-[var(--bg-surface)] text-[var(--text-primary)] hover:text-[#A81D1D] font-syne font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-xs"
        >
          <span>{lang === 'AM' ? 'ሁሉንም የምግብ ዘርፎች ይመልከቱ' : 'View All Categories on Netlify'}</span>
          <ArrowRight className="w-4 h-4 text-[#F59E0B]" />
        </a>

      </main>

      <Footer />
      <MobileBottomNav />
    </div>
  );
}
