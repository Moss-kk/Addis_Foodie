'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function TemplateShowcase() {
  const templates = [
    {
      id: 'vendor-promo',
      title: 'Restaurant Promotion Template',
      category: 'Vendor Kit',
      description: 'Ready-to-use social media promo template & itemized menu receipt layout for Addis food spots.',
      badge: 'POPULAR',
      icon: '🏪',
      actionText: 'Use Template',
      link: '/collaborate',
    },
    {
      id: 'event-fest',
      title: 'Culinary Event & Festival Kit',
      category: 'Event Organizer',
      description: 'Comprehensive event booking, ticket registration & live status integration template.',
      badge: 'FEATURED',
      icon: '🎪',
      actionText: 'Launch Event',
      link: '/events',
    },
    {
      id: 'foodie-guide',
      title: 'Addis Hidden Gems Guide',
      category: 'Curator Download',
      description: 'Curated PDF & interactive map guide template for food lovers exploring Bole, Piassa & Kazanchis.',
      badge: 'FREE GUIDE',
      icon: '🗺️',
      actionText: 'Download Guide',
      link: '/about',
    },
  ];

  return (
    <section className="w-full py-16 bg-[#111827] text-white border-t border-b border-zinc-800">
      <div className="site-container flex flex-col gap-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#F59E0B]">
              ⚡ Ready-to-Use Templates
            </span>
            <h2 className="font-syne font-black text-2xl sm:text-4xl text-white">
              Food Curation & Event Templates
            </h2>
            <p className="text-zinc-400 text-sm max-w-2xl font-medium">
              Accelerate your restaurant marketing or event launch with our battle-tested Addis Foodies design system templates.
            </p>
          </div>

          <Link
            href="/collaborate"
            className="touch-target px-5 py-2.5 rounded-xl bg-[#A81D1D] hover:bg-[#8B1717] text-white text-xs font-extrabold shadow-md hover:shadow-lg transition-all focus-ring hover:scale-102 flex-shrink-0 w-fit"
          >
            Request Custom Template ↗
          </Link>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {templates.map((template) => (
            <motion.div
              key={template.id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-zinc-900/90 rounded-3xl p-6 border border-zinc-800 hover:border-[#F59E0B]/50 transition-all flex flex-col justify-between gap-6 shadow-xl relative overflow-hidden group"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-4xl p-3 bg-zinc-800/80 rounded-2xl border border-zinc-700/60">
                    {template.icon}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/30 text-[#F59E0B] text-[10px] font-mono font-black uppercase tracking-wider">
                    {template.badge}
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">
                    {template.category}
                  </span>
                  <h3 className="font-syne font-bold text-xl text-white group-hover:text-[#F59E0B] transition-colors">
                    {template.title}
                  </h3>
                </div>

                <p className="text-xs text-zinc-300 font-medium leading-relaxed">
                  {template.description}
                </p>
              </div>

              <Link
                href={template.link}
                className="touch-target w-full py-3 rounded-xl bg-zinc-800 hover:bg-[#A81D1D] text-white text-xs font-bold text-center border border-zinc-700/80 hover:border-[#A81D1D] transition-all flex items-center justify-center gap-2 focus-ring"
              >
                <span>{template.actionText}</span>
                <span>→</span>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
