'use client';

import React from 'react';
import { FoodPost } from '../types/post';
import { MapPin, Navigation, Compass, ExternalLink } from 'lucide-react';

interface AddisMapProps {
  posts: FoodPost[];
  activePost?: FoodPost | null;
  onSelectPost?: (post: FoodPost) => void;
}

export default function AddisMap({ posts, activePost, onSelectPost }: AddisMapProps) {
  return (
    <div className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden bg-[#000000]">
      {/* Dark Map Canvas Pattern */}
      <div className="absolute inset-0 bg-[#000000] opacity-95 bg-[radial-gradient(#222222_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Simulated Map Road Networks Overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <path d="M-100,200 Q300,100 800,400 T1500,200" stroke="#F59E0B" strokeWidth="3" fill="none" strokeDasharray="8,8" />
        <path d="M200,-50 Q400,300 300,800" stroke="#F59E0B" strokeWidth="2" fill="none" strokeDasharray="4,4" />
        <circle cx="450" cy="250" r="180" stroke="#333333" strokeWidth="1" fill="none" />
      </svg>

      {/* Map Header Compass Overlay */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-slate-950/90 border border-slate-800 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold text-amber-400 backdrop-blur-md shadow-lg">
        <Compass className="w-4 h-4 animate-spin-slow" />
        <span>ADDIS FOOD MAP • VERIFIED LOCATIONS</span>
      </div>

      {/* Interactive Map Pin Markers */}
      <div className="relative w-full h-full flex items-center justify-center p-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 max-w-2xl w-full z-10">
          {posts.map((post) => {
            const isActive = activePost?.id === post.id;
            return (
              <button
                key={post.id}
                onClick={() => onSelectPost?.(post)}
                className={`p-3.5 rounded-2xl text-left border transition-all duration-300 flex flex-col justify-between gap-2 shadow-xl cursor-pointer ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 border-amber-400 scale-105 ring-4 ring-amber-500/20'
                    : 'bg-[#111111]/90 text-white border-[#222222] hover:border-amber-500/50 hover:bg-[#1A1A1A]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-full border ${
                    isActive ? 'bg-slate-950 text-amber-400 border-slate-950' : 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                  }`}>
                    {post.category}
                  </span>
                  <MapPin className={`w-4 h-4 ${isActive ? 'text-slate-950' : 'text-amber-400'}`} />
                </div>

                <div>
                  <h4 className="font-display font-bold text-xs sm:text-sm line-clamp-1">{post.restaurantName}</h4>
                  <p className="text-[10px] font-mono opacity-80">{post.neighborhood}</p>
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono pt-1 border-t border-current/10">
                  <span>{post.priceFormatted}</span>
                  <span className="flex items-center gap-1 font-bold">
                    <span>{post.rating} ★</span>
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
