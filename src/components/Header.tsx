'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
    <header className="sticky top-0 z-40 w-full bg-black/95 backdrop-blur-md border-b border-zinc-800 shadow-md transition-all">
      <div className="site-container py-3 flex items-center justify-between">
        
        {/* Brand Logo Rectangular Block */}
        <Link href="/" className="group focus-ring rounded-2xl">
          <div className="bg-[#111827] border border-zinc-800 hover:border-[#A81D1D]/60 rounded-2xl px-3 py-1.5 shadow-md flex items-center gap-2.5 transition-all duration-300 group-hover:scale-[1.02]">
            <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-[#A81D1D] shadow-xs flex-shrink-0 bg-black">
              <Image
                src="/images/logo.png"
                alt="Addis Foodies Logo"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="flex flex-col -space-y-0.5">
              <div className="flex items-baseline gap-1">
                <span className="font-syne font-black text-sm sm:text-base tracking-tight text-white">Addis</span>
                <span className="font-syne font-black text-sm sm:text-base tracking-tight text-[#A81D1D]">Foodies</span>
              </div>
              <span className="text-[9px] font-bold text-zinc-400 tracking-wider uppercase font-sans">
                Discovering Foods
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-bold text-zinc-300">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-white transition-colors relative py-2 group focus-ring text-zinc-200"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#A81D1D] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Right Actions: Language Switcher & Collaboration CTA */}
        <div className="flex items-center gap-3">
          {/* Language Switcher Button */}
          <button
            onClick={toggleLang}
            className="touch-target px-3.5 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 text-xs font-mono font-bold border border-zinc-800 transition-colors focus-ring cursor-pointer"
            title="Switch Language"
            aria-label="Toggle language English or Amharic"
          >
            <span>{lang === 'EN' ? '🇬🇧 EN | አማርኛ' : '🇪🇹 አማርኛ | EN'}</span>
          </button>

          {/* Work With Us CTA */}
          <Link
            href="/collaborate"
            className="hidden sm:inline-flex items-center justify-center touch-target px-5 py-2.5 rounded-xl bg-[#A81D1D] hover:bg-[#8B1717] text-white text-xs font-extrabold shadow-md hover:shadow-lg transition-all cursor-pointer focus-ring hover:scale-102"
          >
            {t('workWithUs')} ↗
          </Link>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden touch-target p-2.5 rounded-xl text-zinc-300 hover:bg-zinc-900 transition-colors focus-ring cursor-pointer border border-zinc-800"
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
            className="lg:hidden bg-zinc-950/95 text-white border-b border-zinc-800 overflow-hidden"
          >
            <div className="site-container py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="touch-target px-4 py-3 rounded-xl hover:bg-zinc-900 text-sm font-extrabold text-white transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-[#A81D1D]">→</span>
                </Link>
              ))}

              <div className="pt-2 border-t border-zinc-800 flex flex-col gap-3">
                <Link
                  href="/collaborate"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full touch-target bg-[#A81D1D] hover:bg-[#8B1717] text-white font-extrabold text-xs uppercase tracking-wider py-3.5 rounded-xl text-center shadow-lg transition-colors"
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
