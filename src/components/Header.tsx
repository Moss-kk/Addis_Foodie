'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Menu, X, Globe, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import AddisFoodieLogo from './ui/AddisFoodieLogo';

interface HeaderProps {
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
}

export default function Header({ searchQuery = '', onSearchChange }: HeaderProps) {
  const { lang, toggleLang, t } = useLanguage();
  const { theme, toggleTheme, isDark } = useTheme();
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
    <header className="sticky top-0 z-40 w-full bg-white/90 dark:bg-[#181110]/95 backdrop-blur-lg border-b border-zinc-200 dark:border-[#3D2622]/80 shadow-xs max-w-full overflow-hidden transition-colors duration-300">
      <div className="site-container py-2.5 flex items-center justify-between gap-2 max-w-full">
        
        {/* Brand Logo Rectangular Block */}
        <AddisFoodieLogo diluted={true} />

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-bold">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-zinc-700 dark:text-zinc-300 hover:text-[#E53935] dark:hover:text-white transition-colors relative py-2 group focus-ring"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E53935] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-1.5 sm:gap-3 flex-shrink-0">
          {/* Mobile Search Toggle Button */}
          <button
            onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
            className="md:hidden p-2 rounded-xl bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-800 focus-ring cursor-pointer"
            aria-label="Toggle Search"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Day & Night Mood Switcher Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-800 transition-all focus-ring cursor-pointer flex items-center justify-center shadow-xs"
            title={isDark ? 'Switch to Day Light Mode' : 'Switch to Night Flame Mode'}
            aria-label="Toggle theme mode"
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-[#FF8C00] animate-pulse" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-600" />
            )}
          </button>

          {/* Language Switcher Button */}
          <button
            onClick={toggleLang}
            className="px-2 sm:px-3 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-[11px] sm:text-xs font-mono font-bold border border-zinc-200 dark:border-zinc-800 transition-colors focus-ring cursor-pointer flex items-center gap-1 shadow-xs"
            title="Switch Language"
            aria-label="Toggle language English or Amharic"
          >
            <Globe className="w-3.5 h-3.5 text-[#E53935]" />
            <span>{lang === 'EN' ? 'EN|አማ' : 'አማ|EN'}</span>
          </button>

          {/* Work With Us CTA (Desktop Only) */}
          <Link
            href="/collaborate"
            className="hidden sm:inline-flex items-center justify-center gap-1 px-4 py-2 rounded-xl bg-[#E53935] hover:bg-[#B71C1C] text-white text-xs font-extrabold shadow-md hover:shadow-lg transition-all cursor-pointer focus-ring hover:scale-102"
          >
            <span>{t('workWithUs')}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors focus-ring cursor-pointer border border-zinc-200 dark:border-zinc-800"
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
            className="md:hidden bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 px-4 py-3"
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
                className="w-full bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white placeholder-zinc-400 text-xs pl-9 pr-3 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 focus:border-[#E53935] outline-none"
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
            className="lg:hidden bg-white/98 dark:bg-zinc-950/98 text-zinc-900 dark:text-white border-b border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-xl"
          >
            <div className="site-container py-4 flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 text-xs font-extrabold text-zinc-900 dark:text-white transition-colors flex items-center justify-between border border-zinc-200/60 dark:border-zinc-800/60"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#E53935]" />
                </Link>
              ))}

              <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800 flex flex-col gap-2">
                <Link
                  href="/collaborate"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full bg-[#E53935] hover:bg-[#B71C1C] text-white font-extrabold text-xs uppercase tracking-wider py-3 rounded-xl text-center shadow-lg transition-colors flex items-center justify-center gap-1.5"
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
