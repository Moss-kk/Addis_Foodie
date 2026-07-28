'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Flame, ArrowRight } from 'lucide-react';

interface TraditionalItem {
  id: string;
  name: string;
  amharicName: string;
  description: string;
  imageUrl: string;
  tag: string;
  highlightSpot: string;
}

const traditionalDishes: TraditionalItem[] = [
  {
    id: 'kitfo',
    name: 'Special Kitfo Platter',
    amharicName: 'ክትፎ',
    description: 'Minced prime lean beef seasoned with niter kibbeh (clarified spiced butter) and mitmita chili, served with ayib (cottage cheese) and gomen (collard greens).',
    imageUrl: '/telegram-imports/Yado kitfo.jpg',
    tag: 'National Pride',
    highlightSpot: 'Kategna Restaurant • Bole',
  },
  {
    id: 'doro-wat',
    name: 'Royal Doro Wat Feast',
    amharicName: 'ዶሮ ወጥ',
    description: 'Slow-simmered rich berbere chicken stew with hard-boiled eggs, infused with garlic, ginger, and cardamom, served atop fresh sourdough Injera.',
    imageUrl: '/telegram-imports/IFTAR PACKAGE.jpg',
    tag: 'Holiday Classic',
    highlightSpot: 'Yod Abyssinia • Bole',
  },
  {
    id: 'beyaynetu',
    name: 'Fasting Beyaynetu Platter',
    amharicName: 'የጾም በያይነቱ',
    description: 'A colorful vegetarian rainbow feast featuring Shiro, spiced red lentils (Misir Wat), yellow split peas (Kik Alicha), and braised cabbage.',
    imageUrl: '/telegram-imports/fasting burger.jpg',
    tag: 'Vegan & Fasting',
    highlightSpot: 'Fin fine Cultural Restaurant • Kazanchis',
  },
  {
    id: 'coffee-ceremony',
    name: 'Traditional Buna Ceremony',
    amharicName: 'የቡና ሥነ-ሥርዓት',
    description: 'Freshly pan-roasted Ethiopian coffee beans brewed in a clay Jabena pot, served alongside frankincense smoke, popcorn, and rue leaves.',
    imageUrl: '/telegram-imports/Vanilla Fasting Iced late.jpg',
    tag: 'Cultural Heritage',
    highlightSpot: 'Tomoca Coffee • Piassa',
  },
];

interface TraditionalFoodSpotlightProps {
  onSelectDish?: (dishName: string) => void;
}

export default function TraditionalFoodSpotlight({ onSelectDish }: TraditionalFoodSpotlightProps) {
  return (
    <section
      className="w-full py-12 px-6 sm:px-8 rounded-[32px] border shadow-card"
      style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider mb-2 border"
            style={{
              backgroundColor: 'var(--accent-gold-glow)',
              borderColor: 'var(--border-subtle)',
              color: 'var(--accent-gold)',
            }}
          >
            <Flame className="w-4 h-4" />
            <span>Ethiopian Culinary Heritage</span>
          </div>
          <h2 className="font-display font-normal text-2xl sm:text-4xl" style={{ color: 'var(--text-primary)' }}>
            Traditional Ethiopian Delicacies
          </h2>
          <p className="text-xs sm:text-sm font-body max-w-xl" style={{ color: 'var(--text-secondary)' }}>
            Explore authentic Habesha flavors, signature spices, and iconic dishes that define Addis Ababa's food culture.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {traditionalDishes.map((dish, idx) => (
          <motion.div
            key={dish.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            onClick={() => onSelectDish && onSelectDish(dish.name)}
            className="group cursor-pointer border rounded-2xl overflow-hidden shadow-card hover:shadow-floating transition-all duration-300 flex flex-col justify-between"
            style={{ backgroundColor: 'var(--bg-app)', borderColor: 'var(--border-subtle)' }}
          >
            {/* Image Box */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
              <Image
                src={dish.imageUrl}
                alt={dish.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-[0.95]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

              <span
                className="absolute top-3 left-3 px-3 py-1 rounded-full text-slate-950 font-mono font-bold text-[10px] uppercase tracking-wider shadow-md"
                style={{ backgroundColor: 'var(--accent-gold)' }}
              >
                {dish.tag}
              </span>

              <span className="absolute bottom-2 right-3 font-display font-bold text-lg text-amber-300 drop-shadow-md">
                {dish.amharicName}
              </span>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col gap-3 flex-1 justify-between">
              <div>
                <h3 className="font-display font-bold text-lg line-clamp-1 transition-colors group-hover:text-amber-500" style={{ color: 'var(--text-primary)' }}>
                  {dish.name}
                </h3>
                <p className="text-xs font-body leading-relaxed line-clamp-3 mt-1.5" style={{ color: 'var(--text-secondary)' }}>
                  {dish.description}
                </p>
              </div>

              <div className="pt-3 border-t flex items-center justify-between" style={{ borderColor: 'var(--border-subtle)' }}>
                <span className="text-[11px] font-mono font-bold truncate max-w-[170px]" style={{ color: 'var(--accent-gold)' }}>
                  {dish.highlightSpot}
                </span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" style={{ color: 'var(--accent-gold)' }} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
