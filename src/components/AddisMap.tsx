'use client';

import React, { useState } from 'react';

interface MapPin {
  id: string;
  name: string;
  district: 'Bole' | 'Kazanchis' | 'Piassa' | 'Sarbet';
  topDish: string;
  priceETB: number;
  x: number; // percentage X position on map canvas
  y: number; // percentage Y position on map canvas
}

interface AddisMapProps {
  onSelectDistrict: (district: string) => void;
}

export default function AddisMap({ onSelectDistrict }: AddisMapProps) {
  const [activePin, setActivePin] = useState<MapPin | null>(null);

  const pins: MapPin[] = [
    { id: '1', name: 'Roadrunner Burger', district: 'Bole', topDish: 'Double Smash Burger', priceETB: 580, x: 75, y: 35 },
    { id: '2', name: 'Tomoca Coffee', district: 'Kazanchis', topDish: 'Single Macchiato', priceETB: 110, x: 55, y: 45 },
    { id: '3', name: 'Kakur Traditional', district: 'Piassa', topDish: 'Special Kitfo', priceETB: 720, x: 30, y: 25 },
    { id: '4', name: 'Sarbet Bakery & Fasting', district: 'Sarbet', topDish: 'Beyaynetu Platter', priceETB: 280, x: 25, y: 70 },
  ];

  return (
    <div className="bg-[#121215] text-white p-6 sm:p-8 rounded-3xl border border-zinc-800 shadow-xl flex flex-col gap-6 relative overflow-hidden">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#F59E0B]/20 text-[#F59E0B] border border-[#F59E0B]/40 flex items-center justify-center font-black text-xl">
            📍
          </div>
          <div>
            <h3 className="font-syne font-black text-xl text-white">
              Addis Ababa Interactive Culinary Map
            </h3>
            <p className="text-xs text-zinc-400 font-medium">
              Explore key dining districts (Bole, Kazanchis, Piassa, Sarbet) with live ETB price tooltips.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {['Bole', 'Kazanchis', 'Piassa', 'Sarbet'].map((d) => (
            <button
              key={d}
              onClick={() => onSelectDistrict(d)}
              className="px-3 py-1 rounded-full text-xs font-extrabold bg-zinc-900 hover:bg-[#F59E0B] hover:text-[#111827] text-white border border-zinc-800 transition-all cursor-pointer"
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      {/* Map Canvas Visual Box */}
      <div className="relative w-full h-80 sm:h-96 rounded-2xl bg-zinc-950 border border-zinc-800 overflow-hidden shadow-inner flex items-center justify-center">
        
        {/* Subtle grid background map graphics */}
        <div className="absolute inset-0 bg-[radial-gradient(#374151_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />

        {/* District Labels Overlay */}
        <div className="absolute top-6 left-8 text-xs font-mono font-black text-zinc-600 uppercase tracking-widest pointer-events-none">
          🏛️ Piassa District
        </div>
        <div className="absolute top-12 right-12 text-xs font-mono font-black text-zinc-600 uppercase tracking-widest pointer-events-none">
          ✈️ Bole Hub
        </div>
        <div className="absolute bottom-16 right-24 text-xs font-mono font-black text-zinc-600 uppercase tracking-widest pointer-events-none">
          ☕ Kazanchis
        </div>
        <div className="absolute bottom-8 left-12 text-xs font-mono font-black text-zinc-600 uppercase tracking-widest pointer-events-none">
          🌱 Sarbet Hub
        </div>

        {/* Map Pins */}
        {pins.map((pin) => (
          <div
            key={pin.id}
            style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
            className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
          >
            <button
              onClick={() => {
                setActivePin(pin);
                onSelectDistrict(pin.district);
              }}
              className="relative group cursor-pointer"
            >
              {/* Pulse Ring */}
              <span className="absolute -inset-2 rounded-full bg-[#F59E0B]/40 animate-ping" />

              {/* Pin Icon */}
              <div className="relative px-3 py-1.5 rounded-full bg-[#F59E0B] hover:bg-amber-400 text-zinc-950 font-mono font-black text-xs border border-white/40 shadow-lg transition-all duration-200 flex items-center gap-1">
                <span>📍</span>
                <span>{pin.priceETB} Br</span>
              </div>
            </button>
          </div>
        ))}

        {/* Active Pin Tooltip Overlay */}
        {activePin && (
          <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 z-30 bg-[#111827] border-2 border-[#F59E0B] rounded-2xl p-4 shadow-2xl flex items-center justify-between gap-4 max-w-sm animate-slide-up">
            <div className="flex flex-col gap-0.5">
              <span className="text-[10px] font-mono font-black text-[#F59E0B] uppercase tracking-wider">
                {activePin.district} District Spot
              </span>
              <h4 className="font-syne font-black text-sm text-white">
                {activePin.name}
              </h4>
              <p className="text-xs text-zinc-300 font-medium">
                Featured Dish: <span className="font-bold text-white">{activePin.topDish}</span>
              </p>
            </div>

            <button
              onClick={() => setActivePin(null)}
              className="p-1 rounded-full text-zinc-400 hover:text-white"
            >
              ✕
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
