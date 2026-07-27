'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Users, UtensilsCrossed, Building2, Calendar, Award } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '150K+',
    label: 'Food Lovers',
    subtext: 'Active monthly community reach',
    color: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
  },
  {
    icon: UtensilsCrossed,
    value: '500+',
    label: 'Curated Reviews',
    subtext: 'Verified culinary inspections',
    color: 'text-[#E53935] bg-[#E53935]/10 border-[#E53935]/20',
  },
  {
    icon: Building2,
    value: '100+',
    label: 'Restaurants',
    subtext: 'Across Bole, Kazanchis & Piassa',
    color: 'text-sky-500 bg-sky-500/10 border-sky-500/20',
  },
  {
    icon: Calendar,
    value: '20+',
    label: 'Food Festivals',
    subtext: 'Including Kitfo Fest & Burger Battle',
    color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
  },
  {
    icon: Award,
    value: '5+',
    label: 'Years Experience',
    subtext: "Ethiopia's #1 food review brand",
    color: 'text-purple-500 bg-purple-500/10 border-purple-500/20',
  },
];

export default function TrustSection() {
  return (
    <section className="w-full py-12 px-6 sm:px-10 rounded-3xl bg-[#111827] text-white border border-white/10 shadow-2xl relative overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF8C00]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E53935]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col gap-8">
        
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-2 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E53935]/20 border border-[#E53935]/40 text-xs font-mono font-bold uppercase tracking-widest text-[#FF8C00]">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Trusted Media Brand</span>
          </div>
          <h2 className="font-display font-black text-2xl sm:text-4xl tracking-tight text-white">
            Trusted by Food Lovers & Industry Leaders
          </h2>
          <p className="text-xs sm:text-base text-stone-300 font-medium">
            Building Ethiopia's most influential food community with uncompromised integrity and passion.
          </p>
        </div>

        {/* 5 Stat Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col items-center text-center gap-2 hover:border-[#E53935]/40 transition-all hover:-translate-y-1 shadow-lg"
              >
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${item.color}`}>
                  <Icon className="w-6 h-6" />
                </div>

                <span className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight pt-1">
                  {item.value}
                </span>

                <span className="font-display font-bold text-xs sm:text-sm text-[#FF8C00]">
                  {item.label}
                </span>

                <span className="text-[11px] font-mono text-stone-400 leading-tight">
                  {item.subtext}
                </span>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
