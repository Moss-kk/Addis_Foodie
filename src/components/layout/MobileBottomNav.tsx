'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Compass, Utensils, Calendar, Briefcase, Heart } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function MobileBottomNav() {
  const pathname = usePathname();
  const { lang } = useLanguage();

  const navItems = [
    { href: '/', label: lang === 'AM' ? 'መዳሰሻ' : 'Explore', icon: Compass },
    { href: '/reviews', label: lang === 'AM' ? 'ግምገማዎች' : 'Reviews', icon: Utensils },
    { href: '/events', label: lang === 'AM' ? 'ሁነቶች' : 'Events', icon: Calendar },
    { href: '/services', label: lang === 'AM' ? 'አገልግሎቶች' : 'Services', icon: Briefcase },
    { href: '/saved', label: lang === 'AM' ? 'ተወዳጆች' : 'Saved', icon: Heart },
  ];

  return (
    <nav 
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 backdrop-blur-md border-t px-2 py-2 transition-all shadow-lg"
      style={{
        backgroundColor: 'var(--bg-surface)',
        borderColor: 'var(--border-subtle)',
      }}
    >
      <div className="grid grid-cols-5 text-center items-center">
        {navItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-1 transition ${
                isActive ? 'text-[#B8422E] font-bold' : 'text-[var(--text-secondary)] hover:text-[#B8422E]'
              }`}
            >
              <IconComponent className="w-4 h-4" />
              <span className="text-[10px] font-label font-bold uppercase tracking-wider">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
