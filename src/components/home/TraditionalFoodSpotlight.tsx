'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, Utensils, Flame, Coffee, ArrowRight } from 'lucide-react';

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
    imageUrl: 'https://images.unsplash.com/photo-1541518763669-27fef04b14e8?auto=format&fit=crop&w=1000&q=80',
    tag: 'National Pride',
    highlightSpot: 'Kategna Restaurant • Bole',
  },
  {
    id: 'doro-wat',
    name: 'Royal Doro Wat',
    amharicName: 'ዶሮ ወጥ',
    description: 'Slow-simmered rich berbere chicken stew with hard-boiled eggs, infused with garlic, ginger, and cardamom, served atop fresh sourdough Injera.',
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1000&q=80',
    tag: 'Holiday Classic',
    highlightSpot: 'Yod Abyssinia • Bole',
  },
  {
    id: 'beyaynetu',
    name: 'Fasting Beyaynetu Platter',
    amharicName: 'የጾም በያይነቱ',
    description: 'A colorful vegetarian rainbow feast featuring Shiro, spiced red lentils (Misir Wat), yellow split peas (Kik Alicha), and braised cabbage.',
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=80',
    tag: 'Vegan & Fasting',
    highlightSpot: 'Fin fine Cultural Restaurant • Kazanchis',
  },
  {
    id: 'coffee-ceremony',
    name: 'Traditional Buna Ceremony',
    amharicName: 'የቡና ሥነ-ሥርዓት',
    description: 'Freshly pan-roasted Ethiopian coffee beans brewed in a clay Jabena pot, served alongside frankincense smoke, popcorn, and rue leaves.',
    imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=80',
    tag: 'Cultural Heritage',
    highlightSpot: 'Tomoca Coffee • Piassa',
  },
];

interface TraditionalFoodSpotlightProps {
  onSelectDish?: (dishName: string) => void;
}

export default function TraditionalFoodSpotlight({ onSelectDish }: TraditionalFoodSpotlightProps) {
  return (
    <section className="w-full py-12 px-6 sm:px-8 rounded-3xl bg-white border border-stone-200/80 shadow-xs">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono font-bold text-[#FF8C00] uppercase tracking-wider mb-2">
            <Flame className="w-4 h-4 text-[#FF8C00]" />
            <span>Ethiopian Culinary Heritage</span>
          </div>
          <h2 className="font-display font-black text-2xl sm:text-4xl text-zinc-900">
            Traditional Ethiopian Delicacies
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 font-medium pt-1 max-w-xl">
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
            className="group cursor-pointer bg-white border border-stone-200/80 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            {/* Image Box */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-900">
              <Image
                src={dish.imageUrl}
                alt={dish.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-[0.94]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#E53935] text-white font-mono font-bold text-[10px] uppercase tracking-wider shadow-md">
                {dish.tag}
              </span>

              <span className="absolute bottom-2 right-3 font-display font-black text-lg text-amber-300 drop-shadow-md">
                {dish.amharicName}
              </span>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col gap-3 flex-1 justify-between">
              <div>
                <h3 className="font-display font-black text-lg text-zinc-900 group-hover:text-[#E53935] transition-colors">
                  {dish.name}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed line-clamp-3 mt-1.5 font-medium">
                  {dish.description}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold text-[#FF8C00] truncate max-w-[170px]">
                  {dish.highlightSpot}
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-[#E53935] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
