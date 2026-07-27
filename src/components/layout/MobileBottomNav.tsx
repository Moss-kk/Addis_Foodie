'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../../context/LanguageContext';

export default function MobileBottomNav() {
  const pathname = usePathname();
  const { t } = useLanguage();

  const navItems = [
    { href: '/', label: 'Home', icon: '🏠' },
    { href: '/#archive-section', label: 'Reviews', icon: '⭐' },
    { href: '/events', label: 'Events', icon: '🎪' },
    { href: '/services', label: 'Services', icon: '💼' },
    { href: '/collaborate', label: 'Contact', icon: '🤝' },
  ];

  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-lg border-t border-zinc-800 py-1 px-2 flex justify-around items-center shadow-2xl">
      {navItems.map((item) => {
        const isActive = pathname === item.href || (item.href.startsWith('/#') && pathname === '/');
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`touch-target flex flex-col items-center justify-center px-2 py-1 rounded-xl transition-all ${
              isActive
                ? 'text-[#F59E0B] font-extrabold scale-105'
                : 'text-zinc-400 hover:text-zinc-200 font-medium'
            }`}
          >
            <span className="text-lg leading-none">{item.icon}</span>
            <span className="text-[10px] font-sans tracking-tight mt-0.5">{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
