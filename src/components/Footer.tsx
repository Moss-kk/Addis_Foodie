'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="bg-[#111827] text-white border-t border-zinc-800 pt-12 pb-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-12">
        
        {/* Top Multi-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Column 1: Brand Info (2 Cols wide on LG) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#A81D1D] shadow-xs">
                <Image src="/images/logo.png" alt="Addis Foodies Logo" fill className="object-cover" />
              </div>
              <div className="flex flex-col -space-y-0.5">
                <div className="flex items-baseline gap-1">
                  <span className="font-display font-black text-lg text-white">Addis</span>
                  <span className="font-display font-black text-lg text-[#A81D1D]">Foodies</span>
                </div>
                <span className="text-[9px] font-bold text-[#F59E0B] font-mono tracking-wider uppercase">
                  Discovering Foods in Addis
                </span>
              </div>
            </div>

            <p className="text-xs text-zinc-400 font-medium leading-relaxed max-w-sm">
              The Official Digital Home of Addis Foodies. Discovering authentic restaurant reviews, hidden gems, menu prices in ETB, and food festivals across Addis Ababa, Ethiopia.
            </p>

            {/* Social Grid Badges */}
            <div className="flex items-center gap-3 pt-2">
              <a href="https://instagram.com/addis.foodie" target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-white/10 hover:bg-[#e1306c] text-white transition-colors" title="Instagram">
                📸
              </a>
              <a href="https://t.me/addisfoodies" target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-white/10 hover:bg-[#0088cc] text-white transition-colors" title="Telegram">
                ✈️
              </a>
              <a href="https://tiktok.com/@addisfoodies" target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-white/10 hover:bg-zinc-800 text-white transition-colors" title="TikTok">
                🎵
              </a>
              <a href="https://facebook.com/addisfoodies" target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-white/10 hover:bg-[#1877f2] text-white transition-colors" title="Facebook">
                📘
              </a>
            </div>
          </div>

          {/* Column 2: Directory Links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-display font-black text-xs uppercase tracking-widest text-amber-400">Navigation</h4>
            <div className="flex flex-col gap-2 text-xs font-semibold text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">Explore Reviews</Link>
              <Link href="/about" className="hover:text-white transition-colors">About Addis Foodies</Link>
              <Link href="/services" className="hover:text-white transition-colors">Commercial Services</Link>
              <Link href="/events" className="hover:text-white transition-colors">Events & Festivals</Link>
              <Link href="/brand-kit" className="hover:text-white transition-colors">Brand & Media Kit</Link>
              <Link href="/collaborate" className="hover:text-white transition-colors">Work With Us</Link>
            </div>
          </div>

          {/* Column 3: Business Collaboration */}
          <div className="flex flex-col gap-3">
            <h4 className="font-display font-black text-xs uppercase tracking-widest text-amber-400">For Restaurants</h4>
            <div className="flex flex-col gap-2 text-xs font-semibold text-zinc-400">
              <Link href="/collaborate" className="hover:text-white transition-colors">Request a Review</Link>
              <Link href="/collaborate" className="hover:text-white transition-colors">New Menu Launch</Link>
              <Link href="/collaborate" className="hover:text-white transition-colors">Food Photography</Link>
              <Link href="/collaborate" className="hover:text-white transition-colors">Video Reels & TikTok</Link>
              <Link href="/collaborate" className="hover:text-white transition-colors">Event Sponsorships</Link>
            </div>
          </div>

          {/* Column 4: Newsletter Subscription */}
          <div className="flex flex-col gap-3">
            <h4 className="font-display font-black text-xs uppercase tracking-widest text-amber-400">Weekly Foodie Digest</h4>
            <p className="text-xs text-zinc-400 font-medium">Get curated reviews and secret food spot alerts delivered to your inbox.</p>
            
            {subscribed ? (
              <div className="bg-emerald-950/80 border border-emerald-700/60 p-3 rounded-xl text-xs text-emerald-300 font-bold">
                ✓ Subscribed! Welcome to the Addis Foodies Digest.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email..."
                  className="px-3.5 py-2.5 text-xs rounded-xl bg-white/10 border border-white/15 text-white placeholder-zinc-500 focus:outline-none focus:border-[#A81D1D]"
                />
                <button
                  type="submit"
                  className="bg-[#A81D1D] hover:bg-[#8B1717] text-white font-extrabold text-xs py-2.5 rounded-xl transition-all shadow-md cursor-pointer"
                >
                  Subscribe Free
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="border-t border-zinc-800/80 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-zinc-500">
          <p>Addis Foodies © 2026 • Discovering Foods in Addis Ababa, Ethiopia</p>
          <div className="flex items-center gap-6">
            <Link href="/brand-kit" className="hover:text-zinc-300">Privacy Policy</Link>
            <Link href="/brand-kit" className="hover:text-zinc-300">Terms of Service</Link>
            <Link href="/collaborate" className="hover:text-zinc-300">Contact Us</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
