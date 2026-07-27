'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MapPin, Navigation, Filter, ExternalLink, ArrowRight, ShieldCheck } from 'lucide-react';

const mapSpots = [
  { id: '1', name: 'Habesha 2000', dish: 'Kitfo Special', area: 'Bole', price: '450 ETB', rating: '4.8 ⭐', coords: 'Bole, Edna Mall' },
  { id: '2', name: 'Kakur Traditional', dish: 'Gurage Kitfo', area: 'Piassa', price: '520 ETB', rating: '4.9 ⭐', coords: 'Piassa, Tewdros Sq' },
  { id: '3', name: 'Yod Abyssinia', dish: 'Tibs Firfir', area: 'Kazanchis', price: '380 ETB', rating: '4.7 ⭐', coords: 'Kazanchis' },
  { id: '4', name: 'Tomoca Coffee', dish: 'Macchiato', area: 'Bole', price: '120 ETB', rating: '4.9 ⭐', coords: 'Atlas' },
  { id: '5', name: 'Burger House', dish: 'Beef Burger', area: 'Sarbet', price: '320 ETB', rating: '4.6 ⭐', coords: 'Sarbet Golf Club' },
];

export default function FoodMapPreview() {
  const [selectedArea, setSelectedArea] = useState<string>('All');
  const [activeSpot, setActiveSpot] = useState<typeof mapSpots[0]>(mapSpots[0]);

  const filteredSpots = selectedArea === 'All'
    ? mapSpots
    : mapSpots.filter(s => s.area === selectedArea);

  return (
    <section className="w-full flex flex-col gap-6 py-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-stone-200 dark:border-stone-800 pb-4 gap-3">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-xs font-mono font-bold uppercase tracking-widest text-[#10B981] w-fit mb-1">
            <MapPin className="w-3.5 h-3.5" />
            <span>Interactive Spatial Discovery</span>
          </div>
          <h2 className="font-display font-black text-2xl sm:text-4xl text-zinc-900 dark:text-[#FFF8F6]">
            Addis Ababa Food Map
          </h2>
        </div>

        <Link
          href="/map"
          className="touch-target px-4 py-2 rounded-xl bg-[#E53935] hover:bg-[#B71C1C] text-white text-xs font-bold transition-all shadow-md flex items-center gap-1.5"
        >
          <span>Open Fullscreen Map</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* District Filter Chips */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {['All', 'Bole', 'Kazanchis', 'Piassa', 'Sarbet'].map((area) => (
          <button
            key={area}
            onClick={() => setSelectedArea(area)}
            className={`touch-target px-4 py-2 rounded-full text-xs font-bold transition-all border cursor-pointer shrink-0 ${
              selectedArea === area
                ? 'bg-[#111827] text-white border-[#111827] dark:bg-white dark:text-zinc-900 shadow-sm'
                : 'bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 border-stone-200 dark:border-stone-800 hover:border-[#E53935]'
            }`}
          >
            {area} District
          </button>
        ))}
      </div>

      {/* Interactive Map Visual Mockup */}
      <div className="relative w-full h-80 sm:h-96 rounded-3xl overflow-hidden bg-zinc-950 border border-stone-200 dark:border-stone-800 shadow-xl flex flex-col justify-between p-6">
        
        {/* Simulated Map Styling & Grid Lines */}
        <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30 pointer-events-none" />

        {/* Top Floating Info Tag */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md text-white border border-white/10 text-xs font-mono font-bold">
            <Navigation className="w-3.5 h-3.5 text-[#FF8C00] animate-pulse" />
            <span>GPS Clustered Markers • {filteredSpots.length} Spots Active</span>
          </div>
        </div>

        {/* Map Marker Pins */}
        <div className="relative z-10 flex items-center justify-around my-auto flex-wrap gap-4">
          {filteredSpots.map((spot) => (
            <button
              key={spot.id}
              onClick={() => setActiveSpot(spot)}
              className={`group flex items-center gap-2 px-3 py-2 rounded-2xl transition-all cursor-pointer shadow-lg border ${
                activeSpot.id === spot.id
                  ? 'bg-[#E53935] text-white border-amber-300 scale-110'
                  : 'bg-black/80 backdrop-blur-md text-stone-200 border-white/20 hover:border-[#E53935]'
              }`}
            >
              <MapPin className={`w-4 h-4 ${activeSpot.id === spot.id ? 'text-amber-200' : 'text-[#FF8C00]'}`} />
              <span className="font-display font-bold text-xs">{spot.name}</span>
              <span className="text-[10px] font-mono opacity-80">({spot.price})</span>
            </button>
          ))}
        </div>

        {/* Selected Pin Detail Card (Bottom Overlay) */}
        <div className="relative z-10 bg-[#111827]/95 backdrop-blur-xl border border-white/10 p-4 rounded-2xl text-white flex items-center justify-between gap-4 shadow-2xl">
          <div className="flex flex-col gap-0.5">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-300 font-bold">
              <span>{activeSpot.rating}</span>
              <span>• {activeSpot.area} District</span>
            </div>
            <h4 className="font-display font-black text-base text-white">{activeSpot.name} ({activeSpot.dish})</h4>
            <p className="text-xs text-stone-300 font-medium">{activeSpot.coords}</p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="font-mono font-black text-base text-[#E53935]">{activeSpot.price}</span>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(activeSpot.name + ' ' + activeSpot.coords)}`}
              target="_blank"
              rel="noreferrer"
              className="touch-target p-2.5 rounded-xl bg-white/10 hover:bg-[#E53935] text-white transition-colors flex items-center justify-center"
              title="Open in Google Maps"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
