import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../../components/Header';

export default function BrandKitPage() {
  const brandColors = [
    { name: 'Warm Crimson', hex: '#A81D1D', usage: 'Primary Brand Color, Active Badges, CTAs' },
    { name: 'Amber Gold', hex: '#F59E0B', usage: 'Price Tags (ETB), Ratings, Highlights' },
    { name: 'Deep Charcoal', hex: '#111827', usage: 'Headings, Dark Surfaces, Primary Text' },
    { name: 'Soft Cream', hex: '#FAFAFA', usage: 'Page Canvas Background Surface' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-brand-bg text-brand-dark selection:bg-brand-primary/10 selection:text-brand-primary">
      <Header />

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 py-8 flex flex-col gap-10">
        
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
            🎨 Brand Kit & Press Assets
          </div>
          <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            Official Brand Assets & Guidelines
          </h1>
          <p className="text-white/85 font-medium text-xs sm:text-base max-w-2xl">
            Official logos, brand colors, editorial standards, and media inquiry guidelines for partners, event organizers, and journalists.
          </p>
        </div>

        {/* 1. Official Logo Section */}
        <section className="bg-white p-8 sm:p-10 rounded-3xl border border-zinc-200/60 shadow-xs flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-black text-brand-primary uppercase tracking-widest">Visual Identity</span>
            <h2 className="font-display font-extrabold text-2xl text-brand-dark">Official Brand Badge & Logo</h2>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-8 bg-zinc-50 p-8 rounded-2xl border border-zinc-200/50">
            <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md flex-shrink-0">
              <Image src="/images/logo.png" alt="Addis Foodies Logo" fill className="object-cover" />
            </div>

            <div className="flex flex-col gap-2 text-center sm:text-left">
              <h3 className="font-display font-black text-xl text-brand-dark">Addis Foodies Cutlery Mark</h3>
              <p className="text-xs text-zinc-500 font-medium max-w-md">
                Circular dark badge featuring clean white cutlery silhouettes (fork, knife, spoon) with bold brand typography. Tagline: <em>"Discovering Foods in Addis"</em>.
              </p>
              <span className="text-[10px] font-mono text-zinc-400">Path: /public/images/logo.png</span>
            </div>
          </div>
        </section>

        {/* 2. Color Palette Section */}
        <section className="bg-white p-8 sm:p-10 rounded-3xl border border-zinc-200/60 shadow-xs flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-black text-amber-600 uppercase tracking-widest">Design System</span>
            <h2 className="font-display font-extrabold text-2xl text-brand-dark">Official Brand Color Tokens</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {brandColors.map((color, idx) => (
              <div key={idx} className="p-4 rounded-2xl border border-zinc-200/60 flex flex-col gap-3">
                <div
                  className="h-16 rounded-xl shadow-inner border border-black/10"
                  style={{ backgroundColor: color.hex }}
                />
                <div className="flex flex-col gap-0.5">
                  <span className="font-display font-extrabold text-sm text-brand-dark">{color.name}</span>
                  <span className="font-mono text-xs text-brand-primary font-bold">{color.hex}</span>
                  <span className="text-[10px] text-zinc-500 font-medium mt-1">{color.usage}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Typography Stack */}
        <section className="bg-white p-8 sm:p-10 rounded-3xl border border-zinc-200/60 shadow-xs flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-black text-brand-primary uppercase tracking-widest">Typography</span>
            <h2 className="font-display font-extrabold text-2xl text-brand-dark">Font Stack Standards</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
            <div className="bg-zinc-50 p-5 rounded-2xl border border-zinc-200/50 flex flex-col gap-2">
              <span className="font-bold text-zinc-400 uppercase tracking-wider text-[10px]">Display Font</span>
              <span className="font-display font-black text-xl text-brand-dark">Syne</span>
              <p className="text-[11px] text-zinc-500 font-medium">Used for major headlines, hero banners, and restaurant profile titles.</p>
            </div>

            <div className="bg-zinc-50 p-5 rounded-2xl border border-zinc-200/50 flex flex-col gap-2">
              <span className="font-bold text-zinc-400 uppercase tracking-wider text-[10px]">Primary Body</span>
              <span className="font-sans font-bold text-xl text-brand-dark">Plus Jakarta Sans</span>
              <p className="text-[11px] text-zinc-500 font-medium">Used for body text, navigation elements, inputs, and button labels.</p>
            </div>

            <div className="bg-zinc-50 p-5 rounded-2xl border border-zinc-200/50 flex flex-col gap-2">
              <span className="font-bold text-zinc-400 uppercase tracking-wider text-[10px]">Monospace / Prices</span>
              <span className="font-mono font-bold text-xl text-brand-dark">JetBrains Mono</span>
              <p className="text-[11px] text-zinc-500 font-medium">Used for price tags in ETB, timestamps, phone numbers, and coordinates.</p>
            </div>
          </div>
        </section>

        {/* 4. Press & Media Inquiries Card */}
        <section className="bg-brand-dark text-white p-8 sm:p-10 rounded-3xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-amber-400 font-extrabold text-xs uppercase tracking-widest">Media Contacts</span>
            <h3 className="font-display font-black text-2xl text-white">Press & Editorial Inquiries</h3>
            <p className="text-xs sm:text-sm text-zinc-400 font-medium max-w-md">
              For interviews, media accreditation, or brand asset requests, contact our press relations team directly.
            </p>
          </div>

          <a
            href="mailto:press@addisfoodies.com"
            className="bg-brand-primary hover:bg-[#8B1717] text-white font-extrabold text-xs py-3.5 px-8 rounded-full transition-all shadow-md flex-shrink-0 cursor-pointer"
          >
            press@addisfoodies.com ✉️
          </a>
        </section>

      </main>

      <footer className="border-t border-zinc-200/50 bg-white/50 py-6 text-center mt-12">
        <p className="text-[10px] sm:text-xs text-zinc-400 font-semibold tracking-wide uppercase font-sans">
          Addis Foodies © 2026 • Official Brand Kit & Press Assets
        </p>
      </footer>
    </div>
  );
}
