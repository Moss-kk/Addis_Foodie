import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../../components/Header';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-bg text-brand-dark selection:bg-brand-primary/10 selection:text-brand-primary">
      <Header />

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 py-8 flex flex-col gap-10">
        
        {/* Navigation Breadcrumb */}
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
        <div className="bg-gradient-to-r from-brand-dark via-[#8B1717] to-brand-primary text-white py-12 px-8 sm:px-14 rounded-3xl flex flex-col gap-5 shadow-2xl relative overflow-hidden">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/30">
              <Image src="/images/logo.png" alt="Addis Foodies" fill className="object-cover" />
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] font-black uppercase tracking-widest text-amber-400">
              About Addis Foodies
            </div>
          </div>
          
          <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight max-w-2xl">
            Ethiopia's Premier Digital Food & Media Institution
          </h1>
          <p className="text-white/85 font-medium text-xs sm:text-base leading-relaxed max-w-3xl">
            We transform local culinary exploration into a trusted, visual-first discovery platform. Zero login, zero user review noise — just honest, authentic food verdicts from Addis Ababa.
          </p>
        </div>

        {/* 1. The Addis Foodies Story */}
        <section className="bg-white p-8 sm:p-10 rounded-3xl border border-zinc-200/60 shadow-xs flex flex-col gap-4">
          <span className="text-xs font-black text-brand-primary uppercase tracking-widest">Our Journey</span>
          <h2 className="font-display font-extrabold text-2xl text-brand-dark">The Addis Foodies Story</h2>
          <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-medium">
            Founded with a passion for celebrating the rich culinary tapestry of Addis Ababa, Addis Foodies grew from a local social media page into Ethiopia’s most influential food review brand. From traditional Gurage Kitfo houses in Piassa to third-wave espresso roasters in Kazanchis and gourmet burger joints in Bole, we bring diners closer to the best flavors the city has to offer.
          </p>
        </section>

        {/* 2. Mission & Core Values */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-zinc-200/60 shadow-xs flex flex-col gap-3">
            <div className="w-10 h-10 rounded-2xl bg-red-50 text-brand-primary flex items-center justify-center font-black text-xl">
              🎯
            </div>
            <h3 className="font-display font-extrabold text-base text-brand-dark">Editorial Integrity</h3>
            <p className="text-xs text-zinc-500 leading-relaxed font-medium">
              Every review is authored solely by Addis Foodies. We maintain strict independence and transparency in pricing and verdicts.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-zinc-200/60 shadow-xs flex flex-col gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-black text-xl">
              💵
            </div>
            <h3 className="font-display font-extrabold text-base text-brand-dark">Price Transparency</h3>
            <p className="text-xs text-zinc-500 leading-relaxed font-medium">
              We extract and display exact dish prices in Ethiopian Birr (ETB) so diners know what to expect before stepping through the door.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-zinc-200/60 shadow-xs flex flex-col gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-black text-xl">
              ⚡
            </div>
            <h3 className="font-display font-extrabold text-base text-brand-dark">Zero-Friction Access</h3>
            <p className="text-xs text-zinc-500 leading-relaxed font-medium">
              No account creation, sign-up forms, or paywalls required to explore reviews, menus, and locations.
            </p>
          </div>
        </section>

        {/* 3. Review Methodology */}
        <section className="bg-white p-8 sm:p-10 rounded-3xl border border-zinc-200/60 shadow-xs flex flex-col gap-5">
          <span className="text-xs font-black text-amber-600 uppercase tracking-widest">Our Standard</span>
          <h2 className="font-display font-extrabold text-2xl text-brand-dark">Review Methodology</h2>
          <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-medium">
            How does a restaurant end up on Addis Foodies? We combine organic community recommendations with our own editorial scouting team:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="bg-zinc-50 p-4 rounded-2xl border border-zinc-200/50 flex flex-col gap-1.5">
              <span className="text-xs font-black text-brand-primary">1. Selection & Scouting</span>
              <p className="text-xs text-zinc-500 font-medium">We scout neighborhood staples, newly opened venues, and trending spots across Bole, Kazanchis, Piassa, and Sarbet.</p>
            </div>

            <div className="bg-zinc-50 p-4 rounded-2xl border border-zinc-200/50 flex flex-col gap-1.5">
              <span className="text-xs font-black text-brand-primary">2. Food Photography & Taste</span>
              <p className="text-xs text-zinc-500 font-medium">We evaluate dish presentation, portion sizing, authentic taste profiles, hygiene, and hospitality.</p>
            </div>

            <div className="bg-zinc-50 p-4 rounded-2xl border border-zinc-200/50 flex flex-col gap-1.5">
              <span className="text-xs font-black text-brand-primary">3. Verified Menu & Pricing</span>
              <p className="text-xs text-zinc-500 font-medium">Prices are compiled in ETB and republished to our digital archive with direct social links.</p>
            </div>
          </div>
        </section>

        {/* 4. Social Growth Metrics */}
        <section className="bg-brand-dark text-white p-8 sm:p-10 rounded-3xl shadow-xl flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <span className="text-amber-400 font-extrabold text-xs uppercase tracking-widest">Community Reach</span>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-white">Social Reach & Audience Growth</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center border-t border-white/10 pt-6">
            <div className="flex flex-col gap-1">
              <span className="font-display font-black text-3xl text-amber-400">150,000+</span>
              <span className="text-[11px] font-bold text-zinc-300 uppercase tracking-wider">Monthly Foodies</span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="font-display font-black text-3xl text-amber-400">950+</span>
              <span className="text-[11px] font-bold text-zinc-300 uppercase tracking-wider">Reviews Published</span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="font-display font-black text-3xl text-amber-400">320+</span>
              <span className="text-[11px] font-bold text-zinc-300 uppercase tracking-wider">Venues Curated</span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="font-display font-black text-3xl text-amber-400">4</span>
              <span className="text-[11px] font-bold text-zinc-300 uppercase tracking-wider">Major Hubs</span>
            </div>
          </div>
        </section>

        {/* 5. Why Restaurants Work With Us & Press */}
        <section className="bg-white p-8 sm:p-10 rounded-3xl border border-zinc-200/60 shadow-xs flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-black text-brand-primary uppercase tracking-widest">Business Partnerships</span>
            <h2 className="font-display font-extrabold text-2xl text-brand-dark">Why Restaurants Work With Addis Foodies</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-zinc-600 font-medium leading-relaxed">
            <div className="flex flex-col gap-2">
              <h4 className="font-extrabold text-sm text-brand-dark flex items-center gap-2">
                <span>📈</span> Instant Foot Traffic Boost
              </h4>
              <p>Features on Addis Foodies directly drive targeted local diners and food lovers to new menu launches and restaurant openings.</p>
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="font-extrabold text-sm text-brand-dark flex items-center gap-2">
                <span>🎥</span> Professional Media Production
              </h4>
              <p>High-definition photography and short-form video reels that highlight your signature dishes in their best light.</p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="border-t border-zinc-100 pt-6 flex flex-wrap items-center gap-4">
            <Link
              href="/collaborate"
              className="bg-brand-primary hover:bg-[#8B1717] text-white font-extrabold text-xs py-3 px-6 rounded-full transition-all shadow-md cursor-pointer"
            >
              Work With Addis Foodies ↗
            </Link>
          </div>
        </section>

      </main>

      <footer className="border-t border-zinc-200/50 bg-white/50 py-6 text-center mt-12">
        <p className="text-[10px] sm:text-xs text-zinc-400 font-semibold tracking-wide uppercase font-sans">
          Addis Foodies © 2026 • Discovering Foods in Addis
        </p>
      </footer>
    </div>
  );
}
