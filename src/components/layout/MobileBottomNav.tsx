'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Compass, Film, Calendar, Handshake, Bot } from 'lucide-react';

export default function MobileBottomNav() {
  const pathname = usePathname();

  const handleOpenAiBot = () => {
    window.dispatchEvent(new CustomEvent('open-ai-foodie'));
  };

  const navItems = [
    { href: '/', label: 'Explore', icon: Compass },
    { href: '/reviews', label: 'Reels', icon: Film },
    { href: '/events', label: 'Events', icon: Calendar },
    { href: '/collaborate', label: 'Partner', icon: Handshake },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0d0d0d]/95 backdrop-blur-lg border-t border-zinc-800 px-3 py-2 transition-all">
      <div className="grid grid-cols-5 text-center items-center">
        {navItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-0.5 transition ${
                isActive ? 'text-amber-400 font-bold' : 'text-zinc-400 hover:text-amber-400'
              }`}
            >
              <IconComponent className="w-5 h-5" />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          );
        })}

        {/* AI Foodie Concierge Button */}
        <button
          type="button"
          onClick={handleOpenAiBot}
          className="flex flex-col items-center gap-0.5 text-amber-400 hover:text-amber-300 transition cursor-pointer"
        >
          <div className="relative">
            <Bot className="w-5 h-5" />
            <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </div>
          <span className="text-[10px] font-medium text-amber-400">Food AI</span>
        </button>
      </div>
    </nav>
  );
}
