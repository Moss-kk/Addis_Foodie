'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Globe, Sun, Moon, Handshake } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import AddisFoodieLogo from './ui/AddisFoodieLogo';

export default function Header() {
  const pathname = usePathname();
  const { lang, toggleLang, t } = useLanguage();
  const { toggleTheme, isDark } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[var(--bg-surface)]/95 backdrop-blur-md border-b border-[var(--border-subtle)] px-4 md:px-8 py-3 transition-all max-w-full overflow-x-hidden shadow-xs">
      <div className="site-container mx-auto flex items-center justify-between gap-3">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-2">
          <AddisFoodieLogo size="md" />
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-label uppercase tracking-wider text-[var(--text-secondary)]">
          <Link href="/" className={`transition hover:text-[#B8422E] ${pathname === '/' ? 'text-[#B8422E] font-bold' : ''}`}>
            {t('explore')}
          </Link>
          <Link href="/reviews" className={`transition hover:text-[#B8422E] ${pathname === '/reviews' ? 'text-[#B8422E] font-bold' : ''}`}>
            {t('reviews')}
          </Link>
          <Link href="/events" className={`transition hover:text-[#B8422E] ${pathname === '/events' ? 'text-[#B8422E] font-bold' : ''}`}>
            {t('events')}
          </Link>
          <Link href="/services" className={`transition hover:text-[#B8422E] ${pathname === '/services' ? 'text-[#B8422E] font-bold' : ''}`}>
            {t('services')}
          </Link>
          <Link href="/saved" className={`transition hover:text-[#B8422E] ${pathname === '/saved' ? 'text-[#B8422E] font-bold' : ''}`}>
            {lang === 'AM' ? 'ተወዳጆች' : 'Saved'}
          </Link>
          <Link href="/about" className={`transition hover:text-[#B8422E] ${pathname === '/about' ? 'text-[#B8422E] font-bold' : ''}`}>
            {t('about')}
          </Link>
        </nav>

        {/* Right Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          
          {/* Theme Switcher */}
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-app)] text-[var(--text-primary)] hover:border-[#B8422E] transition cursor-pointer"
            title={isDark ? 'Day Mode' : 'Night Mode'}
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          {/* Language Switcher */}
          <button
            type="button"
            onClick={toggleLang}
            className="px-2.5 py-1.5 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-app)] text-[11px] font-label font-bold text-[#B8422E] hover:border-[#B8422E] transition cursor-pointer flex items-center gap-1"
          >
            <Globe className="w-3.5 h-3.5 text-[#B8422E]" />
            <span>{lang === 'EN' ? 'EN | አማ' : 'አማ | EN'}</span>
          </button>

          {/* CTA Button (Desktop) */}
          <Link 
            href="/collaborate" 
            className="hidden md:inline-flex items-center justify-center button-primary px-4 py-2 text-xs font-label uppercase tracking-wider rounded-md text-white transition cursor-pointer shadow-xs"
          >
            {t('workWithUs')}
          </Link>

          {/* Mobile Hamburger Toggle Button */}
          <button 
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-[var(--text-primary)] hover:text-[#B8422E] focus:outline-none cursor-pointer"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Slide-down Menu Drawer */}
      {menuOpen && (
        <div className="md:hidden mt-3 pt-3 border-t border-[var(--border-subtle)] flex flex-col gap-2 pb-2 animate-fadeIn bg-[var(--bg-surface)] px-2 rounded-b-lg shadow-md">
          <Link href="/" onClick={() => setMenuOpen(false)} className="px-3 py-2 text-[var(--text-primary)] hover:text-[#B8422E] font-label text-xs uppercase tracking-wider rounded-md hover:bg-[var(--bg-app)]">
            {t('explore')}
          </Link>
          <Link href="/reviews" onClick={() => setMenuOpen(false)} className="px-3 py-2 text-[var(--text-primary)] hover:text-[#B8422E] font-label text-xs uppercase tracking-wider rounded-md hover:bg-[var(--bg-app)]">
            {t('reviews')}
          </Link>
          <Link href="/events" onClick={() => setMenuOpen(false)} className="px-3 py-2 text-[var(--text-primary)] hover:text-[#B8422E] font-label text-xs uppercase tracking-wider rounded-md hover:bg-[var(--bg-app)]">
            {t('events')}
          </Link>
          <Link href="/services" onClick={() => setMenuOpen(false)} className="px-3 py-2 text-[var(--text-primary)] hover:text-[#B8422E] font-label text-xs uppercase tracking-wider rounded-md hover:bg-[var(--bg-app)]">
            {t('services')}
          </Link>
          <Link href="/saved" onClick={() => setMenuOpen(false)} className="px-3 py-2 text-[var(--text-primary)] hover:text-[#B8422E] font-label text-xs uppercase tracking-wider rounded-md hover:bg-[var(--bg-app)]">
            {lang === 'AM' ? 'ተወዳጆች' : 'Saved Foods'}
          </Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="px-3 py-2 text-[var(--text-primary)] hover:text-[#B8422E] font-label text-xs uppercase tracking-wider rounded-md hover:bg-[var(--bg-app)]">
            {t('about')}
          </Link>
          <Link href="/collaborate" onClick={() => setMenuOpen(false)} className="mt-2 text-center button-primary py-2.5 rounded-md text-white font-label text-xs uppercase tracking-wider shadow-xs">
            {t('workWithUs')}
          </Link>
        </div>
      )}
    </header>
  );
}
