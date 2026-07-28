'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Menu, X, Globe, Sun, Moon, Handshake } from 'lucide-react';
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

  const primaryNavLinks = [
    { href: '/', label: 'Explore' },
    { href: '/map', label: 'Food Map' },
    { href: '/videos', label: 'Reels' },
    { href: '/events', label: 'Events' },
    { href: '/about', label: 'About' },
  ];

  const secondaryNavLinks = [
    { href: '/reviews', label: 'All Reviews' },
    { href: '/services', label: 'Services' },
    { href: '/collaborate', label: 'Work With Us' },
  ];

  return (
    <header className="sticky top-[16px] z-50 w-full px-3 sm:px-6 pointer-events-none mb-6">
      {/* Floating Mastercard Pill Bar */}
      <div
        className="pointer-events-auto site-container mx-auto py-2.5 px-4 sm:px-6 rounded-full border shadow-floating backdrop-blur-xl transition-all duration-300 flex items-center justify-between gap-3"
        style={{
          backgroundColor: 'color-mix(in srgb, var(--bg-surface) 92%, transparent)',
          borderColor: 'var(--border-subtle)',
        }}
      >
        {/* Brand Logo */}
        <div className="flex items-center gap-2">
          <AddisFoodieLogo diluted={true} />
        </div>

        {/* Desktop 5 Primary Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-bold font-body">
          {primaryNavLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors relative py-1 flex items-center gap-1 focus-ring"
                style={{
                  color: isActive ? 'var(--accent-gold)' : 'var(--text-primary)',
                  fontWeight: isActive ? 600 : 400,
                }}
              >
                <span>{link.label}</span>
                {isActive && (
                  <motion.span
                    layoutId="activePillNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                    style={{ backgroundColor: 'var(--accent-gold)' }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          
          {/* Search Toggle Button */}
          <button
            onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
            className="touch-target p-2.5 rounded-full border focus-ring cursor-pointer flex items-center gap-1.5 text-xs font-mono font-bold transition-all hover:scale-105"
            style={{
              backgroundColor: 'var(--bg-app)',
              borderColor: 'var(--border-subtle)',
              color: 'var(--text-primary)',
            }}
            aria-label="Toggle Search"
          >
            <Search className="w-4 h-4" style={{ color: 'var(--accent-gold)' }} />
            <span className="hidden lg:inline text-[11px]" style={{ color: 'var(--text-muted)' }}>Search</span>
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="touch-target p-2.5 rounded-full border transition-all focus-ring cursor-pointer flex items-center justify-center hover:scale-105"
            style={{
              backgroundColor: 'var(--bg-app)',
              borderColor: 'var(--border-subtle)',
              color: 'var(--text-primary)',
            }}
            title={isDark ? 'Switch to Day Mode' : 'Switch to Night Mode'}
            aria-label="Toggle Theme Mode"
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-amber-400 animate-pulse" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          {/* Language Switcher */}
          <button
            onClick={toggleLang}
            className="touch-target px-3 py-1.5 rounded-full border text-[11px] font-mono font-bold transition-all focus-ring cursor-pointer flex items-center gap-1 shadow-xs hover:scale-105"
            style={{
              backgroundColor: 'var(--bg-app)',
              borderColor: 'var(--border-subtle)',
              color: 'var(--text-primary)',
            }}
            aria-label="Toggle Language"
          >
            <Globe className="w-3.5 h-3.5" style={{ color: 'var(--accent-gold)' }} />
            <span>{lang === 'EN' ? 'EN|አማ' : 'አማ|EN'}</span>
          </button>

          {/* Primary Work With Us CTA Button */}
          <Link
            href="/collaborate"
            className="touch-target hidden sm:inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full text-white text-xs font-bold shadow-md hover:shadow-lg transition-all cursor-pointer focus-ring hover:scale-105"
            style={{ backgroundColor: 'var(--accent-gold)' }}
          >
            <Handshake className="w-3.5 h-3.5" />
            <span>Work With Us</span>
          </Link>

          {/* Mobile Hamburger (48px Touch Target) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="touch-target md:hidden p-2.5 rounded-full border transition-colors focus-ring cursor-pointer"
            style={{
              backgroundColor: 'var(--bg-app)',
              borderColor: 'var(--border-subtle)',
              color: 'var(--text-primary)',
            }}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>
      </div>

      {/* Expandable Search Input */}
      <AnimatePresence>
        {mobileSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="pointer-events-auto site-container mx-auto mt-2 p-3 rounded-2xl border shadow-floating"
            style={{
              backgroundColor: 'var(--bg-surface)',
              borderColor: 'var(--border-subtle)',
            }}
          >
            <form onSubmit={handleSearchSubmit} className="relative flex items-center w-full">
              <Search className="absolute left-3.5 w-4 h-4" style={{ color: 'var(--text-muted)' }} />
              <input
                type="text"
                value={onSearchChange ? searchQuery : localSearch}
                onChange={(e) => {
                  setLocalSearch(e.target.value);
                  if (onSearchChange) onSearchChange(e.target.value);
                }}
                placeholder="Search food, restaurants, Bole, Kitfo, Doro Wat..."
                className="w-full text-xs sm:text-sm pl-10 pr-4 py-3 rounded-xl border outline-none font-medium shadow-inner"
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

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="pointer-events-auto fixed inset-0 z-50 flex flex-col p-6 shadow-2xl overflow-y-auto"
            style={{ backgroundColor: 'var(--bg-app)' }}
          >
            <div className="flex items-center justify-between border-b pb-4" style={{ borderColor: 'var(--border-subtle)' }}>
              <AddisFoodieLogo diluted={false} />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="touch-target p-2 rounded-full border cursor-pointer"
                style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}
              >
                <X className="w-6 h-6" style={{ color: 'var(--text-primary)' }} />
              </button>
            </div>

            <div className="flex flex-col gap-3 py-8 flex-1">
              {[...primaryNavLinks, ...secondaryNavLinks].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-5 py-4 rounded-2xl text-base font-display font-bold border transition-colors flex items-center justify-between"
                  style={{
                    backgroundColor: 'var(--bg-surface)',
                    color: 'var(--text-primary)',
                    borderColor: 'var(--border-subtle)',
                  }}
                >
                  <span>{link.label}</span>
                  <span style={{ color: 'var(--accent-gold)' }}>→</span>
                </Link>
              ))}
            </div>

            <div className="pt-4 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
              <Link
                href="/collaborate"
                onClick={() => setMobileMenuOpen(false)}
                className="touch-target w-full py-4 rounded-full text-white font-extrabold text-sm uppercase tracking-wider text-center shadow-lg cursor-pointer"
                style={{ backgroundColor: 'var(--accent-gold)' }}
              >
                Work With Addis Foodies
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
