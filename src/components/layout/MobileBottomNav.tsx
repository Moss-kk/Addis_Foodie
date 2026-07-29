'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Search, Heart, Film, Bot } from 'lucide-react';
import { useSaved } from '../../context/SavedContext';

export default function MobileBottomNav() {
  const pathname = usePathname();
  const { savedIds } = useSaved();

  const handleOpenAiBot = () => {
    window.dispatchEvent(new CustomEvent('open-ai-foodie'));
  };

  const navItems = [
    { href: '/', label: 'Home', icon: Home, isAction: false },
    { href: '/reviews', label: 'Explore', icon: Search, isAction: false },
    { href: '/saved', label: 'Saved', icon: Heart, badge: savedIds.length > 0 ? savedIds.length : null, isAction: false },
    { href: '/videos', label: 'Reels', icon: Film, isAction: false },
    { href: '#ai', label: 'Food AI', icon: Bot, isAction: true, onClick: handleOpenAiBot },
  ];

  return (
    <nav className="sm:hidden fixed bottom-0 left-0 right-0 z-50 backdrop-blur-md bg-black/80 border-t border-amber-500/20 py-2 px-1.5 grid grid-cols-5 items-center shadow-2xl transition-colors duration-300">
      {navItems.map((item) => {
        const IconComponent = item.icon;
        const isActive = !item.isAction && pathname === item.href;

        if (item.isAction) {
          return (
            <button
              key={item.label}
              onClick={item.onClick}
              className="touch-target flex flex-col items-center justify-center py-1 transition-all text-amber-400 hover:text-amber-300 cursor-pointer active:scale-95 group"
            >
              <div className="relative p-1 rounded-full bg-amber-500/10 border border-amber-500/30 group-hover:scale-110 transition-transform">
                <IconComponent className="w-5 h-5 text-amber-400" />
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <span className="text-[10px] font-mono font-bold tracking-tight mt-0.5 text-amber-400">{item.label}</span>
            </button>
          );
        }

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`touch-target flex flex-col items-center justify-center py-1 transition-all relative ${
              isActive
                ? 'text-amber-500 font-bold scale-105'
                : 'text-slate-300 hover:text-white font-medium'
            }`}
          >
            <div className="relative">
              <IconComponent className={`w-5 h-5 ${isActive ? 'text-amber-400' : 'text-slate-300'}`} />
              {item.badge && (
                <span className="absolute -top-1.5 -right-2 bg-red-500 text-white font-mono text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-black">
                  {item.badge}
                </span>
              )}
            </div>
            <span className="text-[10px] font-mono tracking-tight mt-1">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
