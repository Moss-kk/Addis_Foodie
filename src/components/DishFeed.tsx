'use client';

import React from 'react';
import Image from 'next/image';
import { Star, MapPin, ExternalLink, Utensils } from 'lucide-react';

export interface DishItem {
  id: string;
  dishName: string;
  price: number;
  restaurantName: string;
  neighborhood: string;
  location: string;
  rating: string;
  image: string;
  isOpenNow: boolean;
  mapUrl?: string;
}

interface DishFeedProps {
  dishes: DishItem[];
  onSelectDish?: (dish: DishItem) => void;
}

export default function DishFeed({ dishes, onSelectDish }: DishFeedProps) {
  if (!dishes || dishes.length === 0) {
    return (
      <div className="p-8 text-center rounded-2xl border text-slate-400 font-mono text-xs" style={{ borderColor: 'var(--border-subtle)' }}>
        No dish matches found for your filter. Try adjusting your query or category pill!
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {dishes.map((dish) => (
        <div
          key={dish.id}
          onClick={() => onSelectDish?.(dish)}
          className="group cursor-pointer rounded-2xl border p-3 flex gap-3.5 items-center transition-all duration-300 hover:border-amber-500/50 shadow-xs"
          style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}
        >
          {/* Dish Image Thumbnail */}
          <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-slate-900">
            <Image
              src={dish.image}
              alt={dish.dishName}
              fill
              sizes="80px"
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <span className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded-md bg-black/80 text-amber-400 font-mono font-bold text-[9px] border border-amber-500/30">
              {dish.rating} ★
            </span>
          </div>

          {/* Dish Information */}
          <div className="flex flex-col justify-between flex-1 min-w-0">
            <div className="flex flex-col">
              <h4 className="font-bold text-sm line-clamp-1 group-hover:text-amber-500 transition-colors" style={{ color: 'var(--text-primary)' }}>
                {dish.dishName}
              </h4>
              <p className="text-xs text-slate-400 line-clamp-1 font-body">
                @ {dish.restaurantName}
              </p>
            </div>

            <div className="flex items-center justify-between pt-1 mt-1 border-t border-white/5">
              <div className="flex items-center gap-1 text-[11px] font-mono text-slate-400">
                <MapPin className="w-3 h-3 text-red-400 shrink-0" />
                <span className="truncate">{dish.neighborhood}</span>
              </div>

              <span className="font-mono font-extrabold text-xs text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/30">
                {dish.price} Br
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
