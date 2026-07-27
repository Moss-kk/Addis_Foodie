'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Flame, Camera, Send, Phone, ArrowUpRight } from 'lucide-react';
import AddisFoodieLogo from './ui/AddisFoodieLogo';

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
    <footer className="w-full bg-[#120907] text-white border-t border-red-500/20 mt-16 select-none transition-colors duration-300">
      <div className="site-container py-12 sm:py-16 flex flex-col gap-12">
        
        {/* Top 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Brand Positioning & Social Links */}
          <div className="flex flex-col gap-4">
            <AddisFoodieLogo diluted={false} />

            <p className="text-xs text-zinc-400 font-medium leading-relaxed">
              The Official Digital Home of Addis Foodies. Curated Habesha restaurant reviews, hidden food gems, and culinary festival coverage across Bole, Kazanchis, Piassa, and Sarbet.
            </p>

            <div className="flex flex-col gap-2 pt-1">
              <div className="flex items-center gap-2 text-xs font-mono font-extrabold text-[#FF8C00]">
                <Flame className="w-4 h-4 text-[#FF8C00]" />
                <span>150,000+ Monthly Foodies</span>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://www.instagram.com/p/CK8TFBSngx8/?igshid=1pjzbuzr55jv8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-white/10 hover:bg-pink-600/30 text-white transition-all border border-white/10 flex items-center justify-center"
                  title="Follow @addisfoodiess on Instagram"
                >
                  <Camera className="w-4 h-4 text-pink-400" />
                </a>

                <a
                  href="https://t.me/addisfoodies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-white/10 hover:bg-sky-600/30 text-white transition-all border border-white/10 flex items-center justify-center"
                  title="Join Addis Foodies Telegram Channel"
                >
                  <Send className="w-4 h-4 text-sky-400" />
                </a>

                <a
                  href="tel:0966550000"
                  className="p-2 rounded-xl bg-white/10 hover:bg-amber-500/30 text-white transition-all border border-white/10 flex items-center justify-center"
                  title="Call Addis Foodies Hotline: 0966-55-00-00"
                >
                  <Phone className="w-4 h-4 text-[#FF8C00]" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Directory Links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-syne font-extrabold text-xs uppercase tracking-widest text-[#FF8C00]">
              Navigation
            </h4>
            <div className="flex flex-col gap-2.5 text-xs font-semibold text-zinc-400">
              <Link href="/" className="hover:text-white hover:underline transition-colors py-1 flex items-center justify-between">
                <span>Explore Reviews</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#E53935]" />
              </Link>
              <Link href="/about" className="hover:text-white hover:underline transition-colors py-1 flex items-center justify-between">
                <span>About Addis Foodies</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#E53935]" />
              </Link>
              <Link href="/services" className="hover:text-white hover:underline transition-colors py-1 flex items-center justify-between">
                <span>Commercial Services</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#E53935]" />
              </Link>
              <Link href="/events" className="hover:text-white hover:underline transition-colors py-1 flex items-center justify-between">
                <span>Events & Festivals</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#E53935]" />
              </Link>
              <Link href="/collaborate" className="hover:text-white hover:underline transition-colors py-1 flex items-center justify-between">
                <span>Work With Us</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#E53935]" />
              </Link>
            </div>
          </div>

          {/* Column 3: Business Collaboration */}
          <div className="flex flex-col gap-3">
            <h4 className="font-syne font-extrabold text-xs uppercase tracking-widest text-[#FF8C00]">
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
            <h4 className="font-syne font-extrabold text-xs uppercase tracking-widest text-[#FF8C00]">
              Weekly Foodie Digest
            </h4>
            <p className="text-xs text-zinc-400 font-medium leading-relaxed">
              Get curated reviews, ETB price alerts, and secret food spot recommendations delivered directly to your inbox.
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
                  className="w-full px-3.5 py-3 text-xs rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-[#FF8C00] focus:ring-1 focus:ring-[#FF8C00]"
                />
                <button
                  type="submit"
                  className="touch-target w-full bg-[#FF8C00] hover:bg-amber-400 text-zinc-950 font-black text-xs py-3 rounded-xl transition-all shadow-md cursor-pointer hover:scale-102 focus-ring"
                >
                  Subscribe Free
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="border-t border-zinc-800/80 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-zinc-400">
          <p>Addis Foodies © 2026 • Discovering Foods in Addis Ababa, Ethiopia (@addisfoodiess)</p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-white">Privacy Policy</Link>
            <Link href="/about" className="hover:text-white">Terms of Service</Link>
            <Link href="/collaborate" className="hover:text-white">Contact Us</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
