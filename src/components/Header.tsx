'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function Header() {
  const { lang, toggleLang, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: t('exploreReviews') },
    { href: '/about', label: t('about') },
    { href: '/events', label: `🎪 ${t('events')}` },
    { href: '/services', label: t('services') },
    { href: '/collaborate', label: t('contact') },
  ];

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-zinc-200/80 shadow-2xs transition-all">
      <div className="site-container py-3 flex items-center justify-between">
        
        {/* Brand Logo Rectangular Badge */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus-ring rounded-xl p-1"
          aria-label="Addis Foodies Home"
        >
          <div className="w-11 h-11 rounded-xl bg-[#111827] border-2 border-[#A81D1D] flex items-center justify-center text-xl shadow-md group-hover:scale-105 transition-transform duration-300">
            🍽️
          </div>
          <div className="flex flex-col">
            <span className="font-syne font-black text-lg sm:text-xl tracking-tight text-[#111827] leading-none group-hover:text-[#A81D1D] transition-colors">
              ADDIS FOODIES
            </span>
            <span className="text-[10px] font-bold text-[#F59E0B] tracking-widest uppercase font-mono mt-0.5">
              DISCOVERING FOODS IN ADDIS
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-bold text-zinc-700">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-[#A81D1D] transition-colors relative py-2 group focus-ring"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#A81D1D] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Right Actions: Language Switcher & Collaboration CTA */}
        <div className="flex items-center gap-3">
          {/* Language Switcher Button (Min 48px Target) */}
          <button
            onClick={toggleLang}
            className="touch-target px-3.5 py-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-[#111827] text-xs font-mono font-black border border-zinc-300/80 transition-colors focus-ring cursor-pointer"
            title="Switch Language"
            aria-label="Toggle language English or Amharic"
          >
            <span>{lang === 'EN' ? '🇬🇧 EN | አማርኛ' : '🇪🇹 አማርኛ | EN'}</span>
          </button>

          {/* Work With Us CTA */}
          <Link
            href="/collaborate"
            className="hidden sm:inline-flex items-center justify-center touch-target px-5 py-2.5 rounded-xl bg-[#A81D1D] hover:bg-[#8B1717] text-white text-xs font-extrabold shadow-md hover:shadow-lg transition-all cursor-pointer focus-ring"
          >
            {t('workWithUs')} ↗
          </Link>

          {/* Mobile Menu Hamburger Button (Min 48px Target) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden touch-target p-2.5 rounded-xl text-zinc-700 hover:bg-zinc-100 transition-colors focus-ring cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Glassmorphism Slide-Over Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden glass-panel-dark text-white border-b border-zinc-800 overflow-hidden"
          >
            <div className="site-container py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="touch-target px-4 py-3 rounded-xl hover:bg-white/10 text-sm font-extrabold text-white transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-zinc-400">→</span>
                </Link>
              ))}

              <div className="pt-2 border-t border-white/10 flex flex-col gap-3">
                <Link
                  href="/collaborate"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full touch-target bg-[#A81D1D] hover:bg-[#8B1717] text-white font-black text-xs uppercase tracking-wider py-3.5 rounded-xl text-center shadow-lg transition-colors"
                >
                  {t('workWithUs')} ↗
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
