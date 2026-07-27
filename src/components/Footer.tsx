'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Flame, Camera, Send, Phone, ArrowUpRight, MapPin, Clock, Video, Play, Globe } from 'lucide-react';
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
    <footer className="w-full bg-[#111827] text-white border-t border-white/10 mt-16 select-none transition-colors duration-300">
      <div className="site-container py-12 sm:py-16 flex flex-col gap-12">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Column 1: Brand & Social Hub */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <AddisFoodieLogo diluted={false} />

            <p className="text-xs sm:text-sm text-stone-300 font-medium leading-relaxed max-w-md">
              The official digital headquarters of Addis Foodies. Ethiopia's premier food media brand, culinary magazine, and live festival organizer.
            </p>

            {/* Social Icons Bar */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://www.instagram.com/p/CK8TFBSngx8/?igshid=1pjzbuzr55jv8"
                target="_blank"
                rel="noopener noreferrer"
                className="touch-target p-2.5 rounded-xl bg-white/10 hover:bg-pink-600/40 text-white transition-all border border-white/10 flex items-center justify-center hover:scale-105"
                title="Instagram @addisfoodiess"
              >
                <Camera className="w-4 h-4 text-pink-400" />
              </a>

              <a
                href="https://t.me/addisfoodies"
                target="_blank"
                rel="noopener noreferrer"
                className="touch-target p-2.5 rounded-xl bg-white/10 hover:bg-sky-600/40 text-white transition-all border border-white/10 flex items-center justify-center hover:scale-105"
                title="Telegram Feed t.me/addisfoodies"
              >
                <Send className="w-4 h-4 text-sky-400" />
              </a>

              <a
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="touch-target p-2.5 rounded-xl bg-white/10 hover:bg-stone-800 text-white transition-all border border-white/10 flex items-center justify-center hover:scale-105"
                title="TikTok @addisfoodies"
              >
                <Play className="w-4 h-4 text-emerald-400" />
              </a>

              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="touch-target p-2.5 rounded-xl bg-white/10 hover:bg-red-600/40 text-white transition-all border border-white/10 flex items-center justify-center hover:scale-105"
                title="YouTube Addis Foodies Official"
              >
                <Video className="w-4 h-4 text-red-400" />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="touch-target p-2.5 rounded-xl bg-white/10 hover:bg-blue-600/40 text-white transition-all border border-white/10 flex items-center justify-center hover:scale-105"
                title="Facebook"
              >
                <Globe className="w-4 h-4 text-blue-400" />
              </a>
            </div>

            {/* Hotline & Working Hours */}
            <div className="flex flex-col gap-2 pt-2 text-xs font-mono font-bold text-stone-400 border-t border-white/10">
              <div className="flex items-center gap-2 text-[#FF8C00]">
                <Phone className="w-4 h-4" />
                <span>Hotline: 0966-55-00-00</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>Editorial HQ: Mon – Sat (8:30 AM – 6:30 PM EAT)</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Sitemap */}
          <div className="flex flex-col gap-3">
            <h4 className="font-display font-extrabold text-xs uppercase tracking-widest text-[#FF8C00]">
              Navigation
            </h4>
            <div className="flex flex-col gap-2.5 text-xs font-semibold text-stone-400">
              <Link href="/" className="hover:text-white transition-colors flex items-center justify-between">
                <span>Digital HQ</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#E53935]" />
              </Link>
              <Link href="/reviews" className="hover:text-white transition-colors flex items-center justify-between">
                <span>Reviews Feed</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#E53935]" />
              </Link>
              <Link href="/events" className="hover:text-white transition-colors flex items-center justify-between">
                <span>Kitfo Fest 2026</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#E53935]" />
              </Link>
              <Link href="/services" className="hover:text-white transition-colors flex items-center justify-between">
                <span>Media Services</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#E53935]" />
              </Link>
              <Link href="/about" className="hover:text-white transition-colors flex items-center justify-between">
                <span>Brand Story</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#E53935]" />
              </Link>
              <Link href="/collaborate" className="hover:text-white transition-colors flex items-center justify-between">
                <span>Work With Us</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#E53935]" />
              </Link>
            </div>
          </div>

          {/* Column 3: Google Maps Preview & Location */}
          <div className="flex flex-col gap-3">
            <h4 className="font-display font-extrabold text-xs uppercase tracking-widest text-[#FF8C00]">
              Addis Ababa HQ
            </h4>
            
            <div className="bg-white/5 border border-white/10 p-3.5 rounded-2xl flex flex-col gap-2 shadow-inner">
              <div className="flex items-center gap-1.5 text-xs font-bold text-white">
                <MapPin className="w-4 h-4 text-[#E53935]" />
                <span>Bole Medhaniallem, Addis Ababa</span>
              </div>
              <p className="text-[11px] text-stone-400 leading-snug">
                Edna Mall Commercial Tower, 4th Floor
              </p>
              {/* Google Maps Preview Button */}
              <a
                href="https://maps.google.com/?q=Bole+Medhaniallem+Addis+Ababa"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 px-3 py-1.5 rounded-lg bg-[#E53935]/20 hover:bg-[#E53935]/30 text-[#E53935] text-[11px] font-mono font-bold flex items-center justify-between border border-[#E53935]/40 transition-colors"
              >
                <span>View Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 4: Newsletter Subscription */}
          <div className="flex flex-col gap-3">
            <h4 className="font-display font-extrabold text-xs uppercase tracking-widest text-[#FF8C00]">
              Weekly Digest
            </h4>
            <p className="text-xs text-stone-400 font-medium leading-relaxed">
              Get secret food spot alerts, ETB price updates, and event tickets.
            </p>

            {subscribed ? (
              <div className="bg-emerald-950/80 border border-[#10B981]/60 p-3 rounded-xl text-xs text-[#10B981] font-bold">
                ✓ Subscribed! Welcome to the Digest.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2.5">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email..."
                  className="w-full px-3.5 py-3 text-xs rounded-xl bg-white/10 border border-white/15 text-white placeholder-stone-400 focus:outline-none focus:border-[#FF8C00]"
                />
                <button
                  type="submit"
                  className="touch-target w-full bg-[#E53935] hover:bg-[#B71C1C] text-white font-extrabold text-xs py-3 rounded-xl transition-all shadow-md cursor-pointer hover:scale-102 focus-ring"
                >
                  Subscribe Free
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-stone-400">
          <p>Addis Foodies © 2026 • Official Food Media Headquarters (@addisfoodiess)</p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-white">Privacy Policy</Link>
            <Link href="/about" className="hover:text-white">Terms of Service</Link>
            <Link href="/collaborate" className="hover:text-white">Media Kit</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
