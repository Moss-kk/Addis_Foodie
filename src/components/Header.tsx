'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Menu, X, Globe, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HeaderProps {
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
}

export default function Header({ searchQuery = '', onSearchChange }: HeaderProps) {
  const { lang, toggleLang, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [localSearch, setLocalSearch] = useState(searchQuery);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearchChange) {
      onSearchChange(localSearch);
    }
    setMobileSearchOpen(false);
    const el = document.getElementById('archive-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { href: '/', label: t('exploreReviews') },
    { href: '/about', label: t('about') },
    { href: '/events', label: t('events') },
    { href: '/services', label: t('services') },
    { href: '/collaborate', label: t('contact') },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-black/95 backdrop-blur-md border-b border-zinc-800 shadow-xl max-w-full overflow-hidden">
      <div className="site-container py-2.5 flex items-center justify-between gap-2 max-w-full">
        
        {/* Brand Logo Rectangular Block */}
        <Link href="/" className="group focus-ring rounded-xl flex-shrink-0">
          <div className="bg-[#111827] border border-[#A81D1D]/40 hover:border-[#A81D1D] rounded-xl px-2 sm:px-3 py-1.5 shadow-md flex items-center gap-2 transition-all duration-300 group-hover:scale-[1.02]">
            <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden border-2 border-[#A81D1D] flex-shrink-0 bg-black">
              <Image
                src="/images/logo.png"
                alt="Addis Foodies Logo"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="flex flex-col -space-y-0.5">
              <div className="flex items-baseline gap-1">
                <span className="font-syne font-black text-xs sm:text-base tracking-tight text-white">Addis</span>
                <span className="font-syne font-black text-xs sm:text-base tracking-tight text-[#A81D1D]">Foodies</span>
              </div>
              <span className="text-[8px] sm:text-[9px] font-bold text-zinc-400 tracking-wider uppercase font-sans">
                Discovering Foods
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Search Bar (Hidden on Mobile to Prevent Overflow) */}
        <form onSubmit={handleSearchSubmit} className="hidden md:flex flex-1 max-w-md mx-4">
          <div className="relative flex items-center w-full">
            <Search className="absolute left-3 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              value={onSearchChange ? searchQuery : localSearch}
              onChange={(e) => {
                setLocalSearch(e.target.value);
                if (onSearchChange) onSearchChange(e.target.value);
              }}
              placeholder="Search Bole, Kitfo, Burgers..."
              className="w-full bg-zinc-900/90 text-white placeholder-zinc-400 text-xs sm:text-sm pl-9 pr-3 py-2 rounded-xl border border-zinc-800 focus:border-[#A81D1D] focus:ring-1 focus:ring-[#A81D1D] outline-none transition-all"
            />
          </div>
        </form>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-bold text-zinc-300">
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

        {/* Right Actions */}
        <div className="flex items-center gap-1.5 sm:gap-3 flex-shrink-0">
          {/* Mobile Search Toggle Button */}
          <button
            onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
            className="md:hidden p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 focus-ring cursor-pointer"
            aria-label="Toggle Search"
          >
            <Search className="w-4 h-4 text-zinc-300" />
          </button>

          {/* Language Switcher Button */}
          <button
            onClick={toggleLang}
            className="px-2 sm:px-3.5 py-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 text-[11px] sm:text-xs font-mono font-bold border border-zinc-800 transition-colors focus-ring cursor-pointer flex items-center gap-1"
            title="Switch Language"
            aria-label="Toggle language English or Amharic"
          >
            <Globe className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>{lang === 'EN' ? 'EN|አማ' : 'አማ|EN'}</span>
          </button>

          {/* Work With Us CTA (Desktop Only) */}
          <Link
            href="/collaborate"
            className="hidden sm:inline-flex items-center justify-center gap-1 px-4 py-2 rounded-xl bg-[#A81D1D] hover:bg-[#8B1717] text-white text-xs font-extrabold shadow-md hover:shadow-lg transition-all cursor-pointer focus-ring hover:scale-102"
          >
            <span>{t('workWithUs')}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-zinc-300 hover:bg-zinc-900 transition-colors focus-ring cursor-pointer border border-zinc-800"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Search Expandable Box */}
      <AnimatePresence>
        {mobileSearchOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-950 border-b border-zinc-800 px-4 py-3"
          >
            <form onSubmit={handleSearchSubmit} className="relative flex items-center w-full">
              <Search className="absolute left-3 w-4 h-4 text-zinc-400" />
              <input
                type="text"
                value={onSearchChange ? searchQuery : localSearch}
                onChange={(e) => {
                  setLocalSearch(e.target.value);
                  if (onSearchChange) onSearchChange(e.target.value);
                }}
                placeholder="Search Bole, Kitfo, Burgers..."
                className="w-full bg-zinc-900 text-white placeholder-zinc-400 text-xs pl-9 pr-3 py-2.5 rounded-xl border border-zinc-800 focus:border-[#A81D1D] outline-none"
                autoFocus
              />
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="lg:hidden bg-zinc-950/98 text-white border-b border-zinc-800 overflow-hidden"
          >
            <div className="site-container py-4 flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl hover:bg-zinc-900 text-xs font-extrabold text-white transition-colors flex items-center justify-between border border-zinc-800/60"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#A81D1D]" />
                </Link>
              ))}

              <div className="pt-2 border-t border-zinc-800 flex flex-col gap-2">
                <Link
                  href="/collaborate"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full bg-[#A81D1D] hover:bg-[#8B1717] text-white font-extrabold text-xs uppercase tracking-wider py-3 rounded-xl text-center shadow-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>{t('workWithUs')}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}


