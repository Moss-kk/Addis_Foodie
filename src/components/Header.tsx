'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Menu, X, Globe, ArrowUpRight, Sun, Moon, Handshake } from 'lucide-react';
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
  const { toggleTheme, isDark } = useTheme();
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

  // Step 4: Streamlined to 5 primary links on desktop
  const primaryNavLinks = [
    { href: '/', label: 'Home' },
    { href: '/reviews', label: t('exploreReviews') },
    { href: '/map', label: 'Food Map' },
    { href: '/events', label: t('events') },
    { href: '/services', label: t('services') },
  ];

  const allNavLinks = [
    ...primaryNavLinks,
    { href: '/videos', label: 'Videos & Reels' },
    { href: '/about', label: t('about') },
    { href: '/collaborate', label: 'Work With Us' },
  ];

  return (
    <header
      className="sticky top-0 z-50 w-full backdrop-blur-xl border-b transition-colors duration-300"
      style={{
        backgroundColor: 'rgba(11, 15, 23, 0.92)',
        borderColor: 'var(--border-subtle)',
      }}
    >
      <div className="site-container py-3 flex items-center justify-between gap-3 max-w-full">

        {/* Brand Logo Block */}
        <AddisFoodieLogo diluted={true} />

        {/* Streamlined Desktop Navigation Links (5 Primary Links) */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-black tracking-tight">
          {primaryNavLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="transition-all relative py-1.5 flex items-center gap-1 focus-ring"
                style={{
                  color: isActive
                    ? 'var(--accent-gold)'
                    : 'var(--text-primary)',
                }}
              >
                <span>{link.label}</span>
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                    style={{ backgroundColor: 'var(--accent-gold)' }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">

          {/* Search Trigger */}
          <button
            onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
            className="touch-target p-2 rounded-xl border focus-ring cursor-pointer flex items-center gap-1.5 text-xs font-mono font-bold shadow-xs transition-colors"
            style={{
              backgroundColor: 'var(--bg-surface)',
              borderColor: 'var(--border-subtle)',
              color: 'var(--text-primary)',
            }}
            aria-label="Toggle Search"
          >
            <Search className="w-4 h-4" style={{ color: 'var(--accent-gold)' }} />
            <span className="hidden md:inline text-slate-400">Search</span>
          </button>

          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            className="touch-target p-2 rounded-xl border transition-all focus-ring cursor-pointer flex items-center justify-center shadow-xs"
            style={{
              backgroundColor: 'var(--bg-surface)',
              borderColor: 'var(--border-subtle)',
              color: 'var(--text-primary)',
            }}
            title={isDark ? 'Switch to Day Mode' : 'Switch to Night Mode'}
            aria-label="Toggle theme mode"
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-[#F59E0B]" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-400" />
            )}
          </button>

          {/* Language Switcher */}
          <button
            onClick={toggleLang}
            className="touch-target px-2.5 sm:px-3 py-1.5 rounded-xl border text-[11px] sm:text-xs font-mono font-bold transition-colors focus-ring cursor-pointer flex items-center gap-1 shadow-xs"
            style={{
              backgroundColor: 'var(--bg-surface)',
              borderColor: 'var(--border-subtle)',
              color: 'var(--text-primary)',
            }}
            aria-label="Toggle language English or Amharic"
          >
            <Globe className="w-3.5 h-3.5" style={{ color: 'var(--accent-gold)' }} />
            <span>{lang === 'EN' ? 'EN|አማ' : 'አማ|EN'}</span>
          </button>

          {/* Work With Us CTA */}
          <Link
            href="/collaborate"
            className="touch-target hidden sm:inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-white text-xs font-extrabold shadow-md hover:shadow-lg transition-all cursor-pointer focus-ring hover:scale-105"
            style={{ backgroundColor: 'var(--accent-brand)' }}
          >
            <Handshake className="w-3.5 h-3.5" style={{ color: 'var(--accent-gold)' }} />
            <span>Work With Us</span>
          </Link>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="touch-target lg:hidden p-2 rounded-xl border transition-colors focus-ring cursor-pointer"
            style={{
              backgroundColor: 'var(--bg-surface)',
              borderColor: 'var(--border-subtle)',
              color: 'var(--text-primary)',
            }}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Expandable Search Bar */}
      <AnimatePresence>
        {mobileSearchOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b px-4 py-3"
            style={{
              backgroundColor: 'var(--bg-surface)',
              borderColor: 'var(--border-subtle)',
            }}
          >
            <form onSubmit={handleSearchSubmit} className="site-container relative flex items-center w-full">
              <Search className="absolute left-3 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={onSearchChange ? searchQuery : localSearch}
                onChange={(e) => {
                  setLocalSearch(e.target.value);
                  if (onSearchChange) onSearchChange(e.target.value);
                }}
                placeholder="Search food, restaurants, Bole, Kitfo, Doro Wat..."
                className="w-full text-xs sm:text-sm pl-9 pr-4 py-3 rounded-xl border outline-none font-semibold shadow-inner"
                style={{
                  backgroundColor: 'var(--bg-app)',
                  color: 'var(--text-primary)',
                  borderColor: 'var(--border-subtle)',
                }}
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
            className="lg:hidden border-b overflow-hidden shadow-xl"
            style={{
              backgroundColor: 'var(--bg-surface)',
              borderColor: 'var(--border-subtle)',
            }}
          >
            <div className="site-container py-4 flex flex-col gap-2.5">
              {allNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-xs font-black transition-colors flex items-center justify-between border"
                  style={{
                    color: 'var(--text-primary)',
                    borderColor: 'var(--border-subtle)',
                    backgroundColor: 'var(--bg-app)',
                  }}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4" style={{ color: 'var(--accent-gold)' }} />
                </Link>
              ))}

              <div className="pt-2 border-t flex flex-col gap-2" style={{ borderColor: 'var(--border-subtle)' }}>
                <Link
                  href="/collaborate"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-white font-black text-xs uppercase tracking-wider py-3.5 rounded-xl text-center shadow-lg transition-colors flex items-center justify-center gap-2"
                  style={{ backgroundColor: 'var(--accent-brand)' }}
                >
                  <Handshake className="w-4 h-4" style={{ color: 'var(--accent-gold)' }} />
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
