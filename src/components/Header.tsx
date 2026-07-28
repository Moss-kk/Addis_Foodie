'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Menu, X, Globe, ArrowUpRight, Sun, Moon, Flame, Handshake } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import AddisFoodieLogo from './ui/AddisFoodieLogo';

interface HeaderProps {
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
}

export default function Header({ searchQuery = '', onSearchChange }: HeaderProps) {
  const pathname = usePathname();
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
    const el = document.getElementById('featured-spots');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/reviews', label: t('exploreReviews') },
    { href: '/map', label: 'Food Map' },
    { href: '/videos', label: 'Videos & Reels' },
    { href: '/events', label: t('events') },
    { href: '/services', label: t('services') },
    { href: '/about', label: t('about') },
    { href: '/collaborate', label: 'Work With Us' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FAF8F5]/95 dark:bg-[#111827]/95 backdrop-blur-xl border-b border-stone-200/80 dark:border-stone-800/80 shadow-xs transition-colors duration-300">
      
      <div className="site-container py-3 flex items-center justify-between gap-3 max-w-full">
        
        {/* Brand Logo Block */}
        <AddisFoodieLogo diluted={true} />

        {/* Desktop Navigation Links - Clean & Uncompressed */}
        <nav className="hidden lg:flex items-center gap-5 text-xs font-black font-display">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-all relative py-1.5 flex items-center gap-1 focus-ring ${
                  isActive
                    ? 'text-[#E53935] font-black'
                    : 'text-stone-800 dark:text-stone-200 hover:text-[#E53935] dark:hover:text-[#FF8C00]'
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#E53935] rounded-full"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          
          {/* Search Trigger Button */}
          <button
            onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
            className="touch-target p-2 rounded-xl bg-white dark:bg-stone-900 hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-800 dark:text-stone-200 border border-stone-200/80 dark:border-stone-800 focus-ring cursor-pointer flex items-center gap-1.5 text-xs font-mono font-bold shadow-xs"
            aria-label="Toggle Search"
          >
            <Search className="w-4 h-4 text-[#E53935]" />
            <span className="hidden md:inline text-stone-500 dark:text-stone-400">Search</span>
          </button>

          {/* Day & Night Mood Switcher */}
          <button
            onClick={toggleTheme}
            className="touch-target p-2 rounded-xl bg-white dark:bg-stone-900 hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-800 dark:text-stone-200 border border-stone-200/80 dark:border-stone-800 transition-all focus-ring cursor-pointer flex items-center justify-center shadow-xs"
            title={isDark ? 'Switch to Day Light Canvas' : 'Switch to Night Flame Canvas'}
            aria-label="Toggle theme mode"
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-[#FF8C00] animate-pulse" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-600" />
            )}
          </button>

          {/* Language Switcher */}
          <button
            onClick={toggleLang}
            className="touch-target px-2.5 sm:px-3 py-1.5 rounded-xl bg-white dark:bg-stone-900 hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-900 dark:text-stone-200 text-[11px] sm:text-xs font-mono font-bold border border-stone-200/80 dark:border-stone-800 transition-colors focus-ring cursor-pointer flex items-center gap-1 shadow-xs"
            aria-label="Toggle language English or Amharic"
          >
            <Globe className="w-3.5 h-3.5 text-[#E53935]" />
            <span>{lang === 'EN' ? 'EN|አማ' : 'አማ|EN'}</span>
          </button>

          {/* Work With Us Primary CTA (Desktop) */}
          <Link
            href="/collaborate"
            className="touch-target hidden sm:inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-[#E53935] hover:bg-[#B71C1C] text-white text-xs font-extrabold shadow-md hover:shadow-lg transition-all cursor-pointer focus-ring hover:scale-102"
          >
            <Handshake className="w-3.5 h-3.5 text-amber-200" />
            <span>Work With Us</span>
          </Link>

          {/* Mobile Navigation Drawer Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="touch-target lg:hidden p-2 rounded-xl text-stone-800 bg-white hover:bg-stone-100 transition-colors focus-ring cursor-pointer border border-stone-200/80"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Expandable Search Input Bar */}
      <AnimatePresence>
        {mobileSearchOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-zinc-50 dark:bg-[#1A100C] border-b border-zinc-200 dark:border-zinc-800 px-4 py-3"
          >
            <form onSubmit={handleSearchSubmit} className="site-container relative flex items-center w-full">
              <Search className="absolute left-3 w-4 h-4 text-zinc-400" />
              <input
                type="text"
                value={onSearchChange ? searchQuery : localSearch}
                onChange={(e) => {
                  setLocalSearch(e.target.value);
                  if (onSearchChange) onSearchChange(e.target.value);
                }}
                placeholder="Search food, restaurants, Bole, Kitfo, Doro Wat..."
                className="w-full bg-white dark:bg-zinc-900 text-zinc-950 dark:text-white placeholder-zinc-400 text-xs sm:text-sm pl-9 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 focus:border-[#E53935] outline-none font-semibold shadow-inner"
                autoFocus
              />
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="lg:hidden bg-white/98 dark:bg-[#120907]/98 text-zinc-900 dark:text-white border-b border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-xl"
          >
            <div className="site-container py-4 flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 text-xs font-black text-zinc-900 dark:text-white transition-colors flex items-center justify-between border border-zinc-200/80 dark:border-zinc-800/80"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#E53935]" />
                </Link>
              ))}

              <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800 flex flex-col gap-2">
                <Link
                  href="/collaborate"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full bg-[#E53935] hover:bg-[#B71C1C] text-white font-black text-xs uppercase tracking-wider py-3.5 rounded-xl text-center shadow-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Handshake className="w-4 h-4 text-amber-200" />
                  <span>Work With Addis Foodies</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
