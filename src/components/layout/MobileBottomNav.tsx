'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Star, Calendar, Briefcase, MessageSquare } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function MobileBottomNav() {
  const pathname = usePathname();
  const { t } = useLanguage();

  const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/#featured-spots', label: 'Reviews', icon: Star },
    { href: '/events', label: 'Events', icon: Calendar },
    { href: '/services', label: 'Services', icon: Briefcase },
    { href: '/collaborate', label: 'Contact', icon: MessageSquare },
  ];

  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 dark:bg-black/95 backdrop-blur-lg border-t border-zinc-200 dark:border-zinc-800 py-1.5 px-2 flex justify-around items-center shadow-xl transition-colors duration-300">
      {navItems.map((item) => {
        const IconComponent = item.icon;
        const isActive = pathname === item.href || (item.href.startsWith('/#') && pathname === '/');
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`touch-target flex flex-col items-center justify-center px-2 py-1 rounded-xl transition-all ${
              isActive
                ? 'text-[#E53935] dark:text-[#FF8C00] font-black scale-105'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 font-bold'
            }`}
          >
            <IconComponent className="w-5 h-5" />
            <span className="text-[10px] font-sans tracking-tight mt-1">{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
