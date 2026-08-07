'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  X, 
  Globe, 
  Sun, 
  Moon, 
  PhoneCall, 
  ChevronDown, 
  Sparkles,
  Trophy,
  MapPin,
  Calendar,
  Layers,
  Info,
  ArrowUpRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import AddisFoodieLogo from './ui/AddisFoodieLogo';

export default function Header() {
  const pathname = usePathname();
  const { lang, toggleLang, t } = useLanguage();
  const { toggleTheme, isDark } = useTheme();
  
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 w-full py-3.5 px-4 pointer-events-none">
      <header className="mx-auto max-w-7xl flex items-center justify-center pointer-events-auto">
        
        {/* Floating Navbar Pill Container */}
        <div className="flex h-14 sm:h-16 w-full max-w-5xl items-center justify-between gap-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)]/95 backdrop-blur-md px-3 sm:px-5 shadow-2xl transition-all">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 shrink-0 group">
            <AddisFoodieLogo size="md" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className={`rounded-full px-3.5 py-1.5 text-xs font-label uppercase tracking-wider transition-colors ${
                pathname === '/'
                  ? 'bg-[#A81D1D] text-white font-bold shadow-xs'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-app)]'
              }`}
            >
              {t('home')}
            </Link>

            <Link
              href="/reviews-map"
              className={`rounded-full px-3.5 py-1.5 text-xs font-label uppercase tracking-wider transition-colors flex items-center gap-1 ${
                pathname === '/reviews-map'
                  ? 'bg-[#A81D1D] text-white font-bold shadow-xs'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-app)]'
              }`}
            >
              <span>{t('reviewsMap')}</span>
            </Link>

            <Link
              href="/awards"
              className={`rounded-full px-3.5 py-1.5 text-xs font-label uppercase tracking-wider transition-colors flex items-center gap-1.5 ${
                pathname === '/awards'
                  ? 'bg-[#F59E0B] text-zinc-950 font-bold shadow-xs'
                  : 'text-amber-400 hover:text-amber-300 hover:bg-amber-500/10'
              }`}
            >
              <span>{t('awards')}</span>
              <span className="text-xs">🏆</span>
            </Link>

            <Link
              href="/suggestions"
              className={`rounded-full px-3.5 py-1.5 text-xs font-label uppercase tracking-wider transition-colors ${
                pathname === '/suggestions'
                  ? 'bg-[#A81D1D] text-white font-bold shadow-xs'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-app)]'
              }`}
            >
              {t('suggestions')}
            </Link>

            {/* Solutions / More Options Dropdown */}
            <div className="relative group/dropdown">
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1 rounded-full px-3.5 py-1.5 text-xs font-label uppercase tracking-wider text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-app)] transition cursor-pointer"
              >
                <span>More</span>
                <ChevronDown className="w-3 h-3 text-stone-400 group-hover/dropdown:rotate-180 transition-transform" />
              </button>

              {/* Dropdown Menu Island */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-2 shadow-2xl opacity-0 translate-y-2 pointer-events-none group-hover/dropdown:opacity-100 group-hover/dropdown:translate-y-0 group-hover/dropdown:pointer-events-auto transition-all duration-200 flex flex-col gap-1">
                <Link
                  href="/events"
                  className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-label uppercase text-[var(--text-primary)] hover:bg-[var(--bg-app)] hover:text-[#A81D1D] transition"
                >
                  <Calendar className="w-4 h-4 text-amber-500" />
                  <span>{t('events')}</span>
                </Link>

                <Link
                  href="/services"
                  className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-label uppercase text-[var(--text-primary)] hover:bg-[var(--bg-app)] hover:text-[#A81D1D] transition"
                >
                  <Layers className="w-4 h-4 text-blue-500" />
                  <span>{t('services')}</span>
                </Link>

                <Link
                  href="/about"
                  className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-label uppercase text-[var(--text-primary)] hover:bg-[var(--bg-app)] hover:text-[#A81D1D] transition"
                >
                  <Info className="w-4 h-4 text-emerald-500" />
                  <span>{t('about')}</span>
                </Link>

                <Link
                  href="/contact"
                  className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-label uppercase text-[var(--text-primary)] hover:bg-[var(--bg-app)] hover:text-[#A81D1D] transition"
                >
                  <PhoneCall className="w-4 h-4 text-[#A81D1D]" />
                  <span>{lang === 'AM' ? 'ግንኙነት' : 'Contact Us'}</span>
                </Link>
              </div>
            </div>
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            
            {/* Theme Switcher */}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-app)] text-[var(--text-primary)] hover:border-[#A81D1D] transition cursor-pointer"
              title={isDark ? 'Day Mode' : 'Night Mode'}
            >
              {isDark ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-slate-700" />}
            </button>

            {/* Language Switcher */}
            <button
              type="button"
              onClick={toggleLang}
              className="px-2.5 py-1 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-app)] text-[10px] font-mono font-bold text-[#A81D1D] hover:border-[#A81D1D] transition cursor-pointer flex items-center gap-1"
            >
              <Globe className="w-3 h-3 text-[#A81D1D]" />
              <span>{lang === 'EN' ? 'EN | አማ' : 'አማ | EN'}</span>
            </button>

            {/* Work With Us / Collaborate Button */}
            <Link
              href="/collaborate"
              className="hidden xl:inline-flex items-center gap-1.5 button-primary px-4 py-1.5 rounded-full text-xs font-label uppercase tracking-wider text-white font-bold shadow-md hover:scale-105 transition-transform"
            >
              <span>{lang === 'AM' ? 'አብረውን ይስሩ' : 'Work With Us'}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </Link>

            {/* Mobile Hamburger Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-app)] text-[var(--text-primary)] hover:text-[#A81D1D] transition cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-[#A81D1D]" />}
            </button>
          </div>

        </div>

      </header>

      {/* Mobile Slide-out Menu Drawer Sheet */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-x-4 top-20 z-50 p-6 rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-surface)]/98 backdrop-blur-xl shadow-2xl flex flex-col gap-4 animate-fadeIn pointer-events-auto max-h-[80vh] overflow-y-auto">
          <div className="flex items-center justify-between border-b pb-3 border-[var(--border-subtle)]">
            <AddisFoodieLogo size="sm" />
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="p-1 rounded-full text-stone-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-col gap-2 font-label text-xs uppercase tracking-wider">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 rounded-2xl bg-[var(--bg-app)] text-[var(--text-primary)] font-bold hover:text-[#A81D1D]"
            >
              {t('home')}
            </Link>

            <Link
              href="/reviews-map"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 rounded-2xl bg-[var(--bg-app)] text-[var(--text-primary)] font-bold hover:text-[#A81D1D]"
            >
              {t('reviewsMap')}
            </Link>

            <Link
              href="/awards"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 rounded-2xl bg-amber-500/10 text-amber-400 font-bold flex items-center justify-between"
            >
              <span>{t('awards')}</span>
              <span>🏆</span>
            </Link>

            <Link
              href="/suggestions"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 rounded-2xl bg-[var(--bg-app)] text-[var(--text-primary)] font-bold hover:text-[#A81D1D]"
            >
              {t('suggestions')}
            </Link>

            <Link
              href="/events"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            >
              {t('events')}
            </Link>

            <Link
              href="/services"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            >
              {t('services')}
            </Link>

            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            >
              {t('about')}
            </Link>

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            >
              {lang === 'AM' ? 'ግንኙነት' : 'Contact Us'}
            </Link>
          </div>

          <Link
            href="/collaborate"
            onClick={() => setMenuOpen(false)}
            className="mt-2 button-primary py-3 rounded-2xl text-center text-xs font-label font-bold uppercase tracking-wider text-white shadow-lg flex items-center justify-center gap-2"
          >
            <span>{t('workWithUs')}</span>
            <ArrowUpRight className="w-4 h-4 text-white" />
          </Link>
        </div>
      )}
    </div>
  );
}
