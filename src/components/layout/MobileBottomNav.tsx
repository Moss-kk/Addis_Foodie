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
    { href: '/', label: t('home'), icon: Home },
    { href: '/reviews', label: t('reviews'), icon: Star },
    { href: '/events', label: t('events'), icon: Calendar },
    { href: '/services', label: t('services'), icon: Briefcase },
    { href: '/collaborate', label: t('contact'), icon: MessageSquare },
  ];

  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#1A1C1E] text-white border-t border-[#2A2E33] py-1.5 px-2 flex justify-around items-center shadow-xl transition-colors duration-300">
      {navItems.map((item) => {
        const IconComponent = item.icon;
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`touch-target flex flex-col items-center justify-center px-2 py-1 rounded-sm transition-all ${
              isActive
                ? 'text-[#B8422E] font-bold scale-105'
                : 'text-slate-300 hover:text-white font-medium'
            }`}
          >
            <IconComponent className="w-5 h-5" />
            <span className="text-[10px] font-label tracking-tight mt-1">{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
