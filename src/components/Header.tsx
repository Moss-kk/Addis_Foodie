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
    <header className="sticky top-0 z-40 bg-[#0d0d0d]/90 backdrop-blur-md border-b border-amber-500/10 px-4 md:px-8 py-3 transition-all max-w-full overflow-x-hidden">
      <div className="site-container mx-auto flex items-center justify-between gap-3">
        
        {/* Brand Logo & Subtitle */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="relative w-9 h-9 md:w-10 md:h-10 rounded-full overflow-hidden border border-amber-500/30 group-hover:border-amber-400 transition shadow-sm bg-slate-900 flex items-center justify-center">
            <Image 
              src="/images/logo.png" 
              alt="Addis Foodies Logo" 
              fill 
              className="object-cover"
              sizes="40px"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold tracking-wider text-amber-400 text-sm md:text-base block leading-none">
              ADDIS FOODIES
            </span>
            <span className="text-[10px] text-zinc-400 font-medium tracking-tight mt-0.5">
              Verified ETB Price Audits
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-300">
          <Link href="/" className={`transition hover:text-amber-400 ${pathname === '/' ? 'text-amber-400 font-bold' : ''}`}>
            Explore
          </Link>
          <Link href="/reviews" className={`transition hover:text-amber-400 ${pathname === '/reviews' ? 'text-amber-400 font-bold' : ''}`}>
            Reviews &amp; Reels
          </Link>
          <Link href="/events" className={`transition hover:text-amber-400 ${pathname === '/events' ? 'text-amber-400 font-bold' : ''}`}>
            Events
          </Link>
          <Link href="/services" className={`transition hover:text-amber-400 ${pathname === '/services' ? 'text-amber-400 font-bold' : ''}`}>
            Services
          </Link>
          <Link href="/about" className={`transition hover:text-amber-400 ${pathname === '/about' ? 'text-amber-400 font-bold' : ''}`}>
            About
          </Link>
        </nav>

        {/* Right Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          
          {/* Theme Switcher */}
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 rounded-full border border-zinc-800 bg-zinc-900/80 text-zinc-300 hover:text-white hover:border-amber-500/40 transition cursor-pointer"
            title={isDark ? 'Day Mode' : 'Night Mode'}
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400 animate-pulse" /> : <Moon className="w-4 h-4 text-slate-300" />}
          </button>

          {/* Language Switcher */}
          <button
            type="button"
            onClick={toggleLang}
            className="px-2.5 py-1 rounded-full border border-zinc-800 bg-zinc-900/80 text-[11px] font-mono font-bold text-amber-400 hover:border-amber-500/40 transition cursor-pointer flex items-center gap-1"
          >
            <Globe className="w-3 h-3 text-amber-400" />
            <span>{lang === 'EN' ? 'EN | አማ' : 'አማ | EN'}</span>
          </button>

          {/* CTA Button (Desktop) */}
          <Link 
            href="/collaborate" 
            className="hidden md:inline-flex items-center justify-center px-4 py-2 text-xs font-bold rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-black hover:brightness-110 transition shadow-lg shadow-amber-500/10 cursor-pointer"
          >
            Work With Us
          </Link>

          {/* Mobile Hamburger Toggle Button */}
          <button 
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-zinc-300 hover:text-amber-400 focus:outline-none cursor-pointer"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Slide-down Menu Drawer */}
      {menuOpen && (
        <div className="md:hidden mt-3 pt-3 border-t border-zinc-800 flex flex-col gap-2 pb-2 animate-fadeIn bg-[#0d0d0d] px-2 rounded-b-xl shadow-2xl">
          <Link href="/" onClick={() => setMenuOpen(false)} className="px-3 py-2 text-zinc-200 hover:text-amber-400 font-medium text-sm rounded-lg hover:bg-zinc-900">
            Explore
          </Link>
          <Link href="/reviews" onClick={() => setMenuOpen(false)} className="px-3 py-2 text-zinc-200 hover:text-amber-400 font-medium text-sm rounded-lg hover:bg-zinc-900">
            Reviews &amp; Reels
          </Link>
          <Link href="/events" onClick={() => setMenuOpen(false)} className="px-3 py-2 text-zinc-200 hover:text-amber-400 font-medium text-sm rounded-lg hover:bg-zinc-900">
            Events &amp; Festivals
          </Link>
          <Link href="/services" onClick={() => setMenuOpen(false)} className="px-3 py-2 text-zinc-200 hover:text-amber-400 font-medium text-sm rounded-lg hover:bg-zinc-900">
            Services &amp; Catering
          </Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="px-3 py-2 text-zinc-200 hover:text-amber-400 font-medium text-sm rounded-lg hover:bg-zinc-900">
            About Addis Foodies
          </Link>
          <Link href="/collaborate" onClick={() => setMenuOpen(false)} className="mt-2 text-center py-2.5 rounded-xl bg-amber-500 text-black font-bold text-sm shadow-md">
            Work With Us
          </Link>
        </div>
      )}
    </header>
  );
}
