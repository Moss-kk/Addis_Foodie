'use client';

import React, { useState } from 'react';
import { MapPin as MapPinIcon, Building2, Navigation, Coffee, Leaf, X } from 'lucide-react';

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
    <div
      className="rounded-3xl p-6 sm:p-8 flex flex-col gap-6 relative overflow-hidden shadow-xl"
      style={{
        backgroundColor: 'var(--bg-surface)',
        border: '1px solid var(--border-subtle)',
        color: 'var(--text-primary)',
      }}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-2xl flex items-center justify-center font-black text-xl shadow-xs"
            style={{
              backgroundColor: 'color-mix(in srgb, var(--accent-gold) 15%, transparent)',
              border: '1px solid color-mix(in srgb, var(--accent-gold) 35%, transparent)',
              color: 'var(--accent-gold)',
            }}
          >
            <MapPinIcon className="w-5 h-5" style={{ color: 'var(--accent-gold)' }} />
          </div>
          <div>
            <h3 className="font-display font-black text-xl text-[#F8FAFC]">
              Addis Ababa Interactive Culinary Map
            </h3>
            <p className="text-xs font-medium text-[#94A3B8]">
              Explore key dining districts (Bole, Kazanchis, Piassa, Sarbet) with live ETB price tooltips.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {['Bole', 'Kazanchis', 'Piassa', 'Sarbet'].map((d) => (
            <button
              key={d}
              onClick={() => onSelectDistrict(d)}
              className="px-3.5 py-1.5 rounded-full text-xs font-extrabold transition-all cursor-pointer border"
              style={{
                backgroundColor: 'var(--bg-app)',
                borderColor: 'var(--border-subtle)',
                color: 'var(--text-primary)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--accent-gold)';
                e.currentTarget.style.color = '#0B0F17';
                e.currentTarget.style.borderColor = 'var(--accent-gold)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--bg-app)';
                e.currentTarget.style.color = 'var(--text-primary)';
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
              }}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      {/* Dark Map Canvas Container (#0B0F17 Tile Style) */}
      <div
        className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden shadow-inner flex items-center justify-center"
        style={{
          backgroundColor: '#0B0F17',
          border: '1px solid var(--border-subtle)',
        }}
      >
        {/* Dark Grid Background Map Graphics */}
        <div className="absolute inset-0 bg-[radial-gradient(#1F293D_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-70" />

        {/* District Labels Overlay */}
        <div className="absolute top-6 left-8 text-xs font-mono font-black text-[#64748B] uppercase tracking-widest pointer-events-none flex items-center gap-1.5">
          <Building2 className="w-3.5 h-3.5" style={{ color: 'var(--accent-gold)' }} />
          <span>Piassa District</span>
        </div>
        <div className="absolute top-12 right-12 text-xs font-mono font-black text-[#64748B] uppercase tracking-widest pointer-events-none flex items-center gap-1.5">
          <Navigation className="w-3.5 h-3.5 text-amber-400" />
          <span>Bole Hub</span>
        </div>
        <div className="absolute bottom-16 right-24 text-xs font-mono font-black text-[#64748B] uppercase tracking-widest pointer-events-none flex items-center gap-1.5">
          <Coffee className="w-3.5 h-3.5 text-amber-300" />
          <span>Kazanchis</span>
        </div>
        <div className="absolute bottom-8 left-12 text-xs font-mono font-black text-[#64748B] uppercase tracking-widest pointer-events-none flex items-center gap-1.5">
          <Leaf className="w-3.5 h-3.5 text-emerald-400" />
          <span>Sarbet Hub</span>
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
              <span className="absolute -inset-2 rounded-full bg-[#F59E0B]/30 animate-ping" />

              {/* Pin Icon with Ethiopian Gold Accent */}
              <div
                className="relative px-3 py-1.5 rounded-full font-mono font-black text-xs border shadow-lg transition-all duration-200 flex items-center gap-1 hover:scale-105"
                style={{
                  backgroundColor: 'var(--accent-gold)',
                  color: '#0B0F17',
                  borderColor: '#F5D78A',
                }}
              >
                <MapPinIcon className="w-3 h-3 text-[#0B0F17]" />
                <span>{pin.priceETB} ETB</span>
              </div>
            </button>
          </div>
        ))}

        {/* Active Pin Tooltip Overlay */}
        {activePin && (
          <div
            className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 z-30 rounded-2xl p-4 shadow-2xl flex items-center justify-between gap-4 max-w-sm"
            style={{
              backgroundColor: '#161E2E',
              border: '2px solid var(--accent-gold)',
              color: '#F8FAFC',
            }}
          >
            <div className="flex flex-col gap-0.5">
              <span className="text-[10px] font-mono font-black uppercase tracking-wider text-[#F59E0B]">
                {activePin.district} District Spot
              </span>
              <h4 className="font-display font-black text-sm text-[#F8FAFC]">
                {activePin.name}
              </h4>
              <p className="text-xs text-[#94A3B8] font-medium">
                Featured Dish: <span className="font-bold text-[#F8FAFC]">{activePin.topDish}</span>
              </p>
            </div>

            <button
              onClick={() => setActivePin(null)}
              className="p-1 rounded-full text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
