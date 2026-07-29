'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, Sun, Moon, Handshake } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import AddisFoodieLogo from './ui/AddisFoodieLogo';

export default function Header() {
  const pathname = usePathname();
  const { lang, toggleLang, t } = useLanguage();
  const { toggleTheme, isDark } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const primaryNavLinks = [
    { href: '/', label: t('explore') },
    { href: '/reviews', label: t('reviews') },
    { href: '/events', label: t('events') },
    { href: '/services', label: t('services') },
    { href: '/about', label: t('about') },
  ];

  const secondaryNavLinks = [
    { href: '/collaborate', label: t('workWithUs') },
  ];

  return (
    <header className="sticky top-[16px] z-50 w-full px-3 sm:px-6 pointer-events-none mb-6">
      {/* Floating Heritage Pill Bar */}
      <div
        className="pointer-events-auto site-container mx-auto py-2.5 px-4 sm:px-6 rounded-md border shadow-xs backdrop-blur-xl transition-all duration-300 flex items-center justify-between gap-3"
        style={{
          backgroundColor: 'color-mix(in srgb, var(--bg-surface) 95%, transparent)',
          borderColor: 'var(--border-subtle)',
        }}
      >
        {/* Brand Logo */}
        <div className="flex items-center gap-2">
          <AddisFoodieLogo diluted={true} />
        </div>

        {/* Desktop Primary Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-label uppercase">
          {primaryNavLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors relative py-1 flex items-center gap-1 focus-ring"
                style={{
                  color: isActive ? 'var(--accent-tertiary)' : 'var(--text-primary)',
                  fontWeight: isActive ? 600 : 400,
                }}
              >
                <span>{link.label}</span>
                {isActive && (
                  <motion.span
                    layoutId="activePillNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                    style={{ backgroundColor: 'var(--accent-tertiary)' }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="touch-target p-2 rounded-sm border transition-all focus-ring cursor-pointer flex items-center justify-center hover:scale-105"
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
            className="touch-target px-2.5 py-1.5 rounded-sm border text-[11px] font-label font-bold transition-all focus-ring cursor-pointer flex items-center gap-1 shadow-2xs hover:scale-105"
            style={{
              backgroundColor: 'var(--bg-app)',
              borderColor: 'var(--border-subtle)',
              color: 'var(--text-primary)',
            }}
            aria-label="Toggle Language"
          >
            <Globe className="w-3.5 h-3.5 text-[#B8422E]" />
            <span>{lang === 'EN' ? 'EN | አማርኛ' : 'አማርኛ | EN'}</span>
          </button>

          {/* Primary Work With Us CTA Button */}
          <Link
            href="/collaborate"
            className="button-primary hidden sm:inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs uppercase tracking-wider rounded-sm shadow-xs cursor-pointer hover:scale-105"
          >
            <Handshake className="w-3.5 h-3.5 text-white" />
            <span>{t('workWithUs')}</span>
          </Link>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="touch-target md:hidden p-2 rounded-sm border transition-colors focus-ring cursor-pointer"
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
                className="touch-target p-2 rounded-sm border cursor-pointer"
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
                  className="px-4 py-3.5 rounded-md text-base font-display font-medium border transition-colors flex items-center justify-between"
                  style={{
                    backgroundColor: 'var(--bg-surface)',
                    color: 'var(--text-primary)',
                    borderColor: 'var(--border-subtle)',
                  }}
                >
                  <span>{link.label}</span>
                  <span className="text-[#B8422E]">→</span>
                </Link>
              ))}
            </div>

            <div className="pt-4 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
              <Link
                href="/collaborate"
                onClick={() => setMobileMenuOpen(false)}
                className="button-primary touch-target w-full py-4 text-white font-label text-sm uppercase tracking-wider text-center shadow-xs cursor-pointer"
              >
                {t('workWithUs')}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
