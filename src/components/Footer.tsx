'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="w-full bg-black text-white border-t border-zinc-800 mt-16 select-none">
      <div className="site-container py-12 sm:py-16 flex flex-col gap-12">
        
        {/* Top 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Brand Positioning */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-[#F59E0B] shadow-xs flex-shrink-0 bg-black">
                <Image
                  src="/images/logo.png"
                  alt="Addis Foodies Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex items-baseline gap-1">
                <span className="font-syne font-black text-xl tracking-tight text-white">Addis</span>
                <span className="font-syne font-black text-xl tracking-tight text-[#F59E0B]">Foodies</span>
              </div>
            </Link>

            <p className="text-xs text-zinc-400 font-medium leading-relaxed">
              The Official Digital Home of Addis Foodies. Curated restaurant reviews, hidden food gems, and culinary festival coverage across Bole, Kazanchis, Piassa, and Sarbet.
            </p>

            <div className="flex items-center gap-3 text-xs font-mono font-extrabold text-[#F59E0B] pt-1">
              <span>🔥 150,000+ Monthly Foodies</span>
            </div>
          </div>

          {/* Column 2: Directory Links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-syne font-extrabold text-xs uppercase tracking-widest text-[#F59E0B]">
              Navigation
            </h4>
            <div className="flex flex-col gap-2.5 text-xs font-semibold text-zinc-400">
              <Link href="/" className="hover:text-white hover:underline transition-colors py-1">Explore Reviews</Link>
              <Link href="/about" className="hover:text-white hover:underline transition-colors py-1">About Addis Foodies</Link>
              <Link href="/services" className="hover:text-white hover:underline transition-colors py-1">Commercial Services</Link>
              <Link href="/events" className="hover:text-white hover:underline transition-colors py-1">Events & Festivals</Link>
              <Link href="/collaborate" className="hover:text-white hover:underline transition-colors py-1">Work With Us</Link>
            </div>
          </div>

          {/* Column 3: Business Collaboration */}
          <div className="flex flex-col gap-3">
            <h4 className="font-syne font-extrabold text-xs uppercase tracking-widest text-[#F59E0B]">
              For Restaurants
            </h4>
            <div className="flex flex-col gap-2.5 text-xs font-semibold text-zinc-400">
              <Link href="/collaborate" className="hover:text-white hover:underline transition-colors py-1">Request a Review</Link>
              <Link href="/collaborate" className="hover:text-white hover:underline transition-colors py-1">New Menu Launch</Link>
              <Link href="/collaborate" className="hover:text-white hover:underline transition-colors py-1">Food Photography</Link>
              <Link href="/collaborate" className="hover:text-white hover:underline transition-colors py-1">Video Reels & TikTok</Link>
              <Link href="/collaborate" className="hover:text-white hover:underline transition-colors py-1">Event Sponsorships</Link>
            </div>
          </div>

          {/* Column 4: Newsletter Subscription */}
          <div className="flex flex-col gap-3">
            <h4 className="font-syne font-extrabold text-xs uppercase tracking-widest text-[#F59E0B]">
              Weekly Foodie Digest
            </h4>
            <p className="text-xs text-zinc-400 font-medium leading-relaxed">
              Get curated reviews and secret food spot alerts delivered directly to your inbox.
            </p>

            {subscribed ? (
              <div className="bg-emerald-950/80 border border-[#10B981]/60 p-3 rounded-xl text-xs text-[#10B981] font-bold">
                ✓ Subscribed! Welcome to the Addis Foodies Digest.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2.5">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email..."
                  className="w-full px-3.5 py-3 text-xs rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B]"
                />
                <button
                  type="submit"
                  className="touch-target w-full bg-[#F59E0B] hover:bg-amber-400 text-zinc-950 font-black text-xs py-3 rounded-xl transition-all shadow-md cursor-pointer hover:scale-102 focus-ring"
                >
                  Subscribe Free
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="border-t border-zinc-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-zinc-400">
          <p>Addis Foodies © 2026 • Discovering Foods in Addis Ababa, Ethiopia</p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-zinc-200">Privacy Policy</Link>
            <Link href="/about" className="hover:text-zinc-200">Terms of Service</Link>
            <Link href="/collaborate" className="hover:text-zinc-200">Contact Us</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
