'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, ArrowUpRight, MapPin, Clock } from 'lucide-react';
import { FaInstagram, FaTelegramPlane, FaTiktok, FaYoutube, FaFacebookF } from 'react-icons/fa';
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
    <footer
      className="w-full mt-16 select-none transition-colors duration-300 border-t"
      style={{
        backgroundColor: '#0B0F17',
        color: '#F8FAFC',
        borderColor: '#1F293D',
      }}
    >
      <div className="site-container py-12 sm:py-16 flex flex-col gap-12">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Column 1: Brand & Social Hub */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <AddisFoodieLogo diluted={false} />

            <p className="text-xs sm:text-sm font-body leading-relaxed max-w-md" style={{ color: '#94A3B8' }}>
              The premier digital food platform for Addis Ababa. Discover curated dining, verified ETB price audits, and authentic food culture across Bole, Kazanchis, Piassa, and Sarbet.
            </p>

            {/* Social Icons Bar */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://www.instagram.com/p/CK8TFBSngx8/?igshid=1pjzbuzr55jv8"
                target="_blank" rel="noopener noreferrer"
                className="touch-target p-2.5 rounded-full bg-white/10 hover:bg-pink-600 text-white transition-all border border-white/10 flex items-center justify-center hover:scale-105"
                title="Instagram @addisfoodiess"
              >
                <FaInstagram size={16} className="text-pink-400" />
              </a>
              <a
                href="https://t.me/addisfoodies"
                target="_blank" rel="noopener noreferrer"
                className="touch-target p-2.5 rounded-full bg-white/10 hover:bg-sky-500 text-white transition-all border border-white/10 flex items-center justify-center hover:scale-105"
                title="Telegram t.me/addisfoodies"
              >
                <FaTelegramPlane size={16} className="text-sky-400" />
              </a>
              <a
                href="https://www.tiktok.com"
                target="_blank" rel="noopener noreferrer"
                className="touch-target p-2.5 rounded-full bg-white/10 hover:bg-black text-white transition-all border border-white/10 flex items-center justify-center hover:scale-105"
                title="TikTok @addisfoodies"
              >
                <FaTiktok size={16} className="text-white" />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank" rel="noopener noreferrer"
                className="touch-target p-2.5 rounded-full bg-white/10 hover:bg-red-600 text-white transition-all border border-white/10 flex items-center justify-center hover:scale-105"
                title="YouTube Addis Foodies Official"
              >
                <FaYoutube size={16} className="text-red-400" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank" rel="noopener noreferrer"
                className="touch-target p-2.5 rounded-full bg-white/10 hover:bg-blue-600 text-white transition-all border border-white/10 flex items-center justify-center hover:scale-105"
                title="Facebook"
              >
                <FaFacebookF size={16} className="text-blue-400" />
              </a>
            </div>

            {/* Hotline & Hours */}
            <div
              className="flex flex-col gap-2 pt-2 text-xs font-mono font-bold border-t"
              style={{ borderColor: '#1F293D', color: '#94A3B8' }}
            >
              <div className="flex items-center gap-2" style={{ color: '#F59E0B' }}>
                <Phone className="w-4 h-4" />
                <span>Hotline: 0966-55-00-00</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>Mon – Sat (8:30 AM – 6:30 PM EAT)</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Sitemap */}
          <div className="flex flex-col gap-3">
            <h4
              className="font-display font-bold text-xs uppercase tracking-widest"
              style={{ color: '#F59E0B' }}
            >
              Navigation
            </h4>
            <div className="flex flex-col gap-2.5 text-xs font-semibold" style={{ color: '#94A3B8' }}>
              {[
                { href: '/', label: 'Explore Feed' },
                { href: '/reviews', label: 'Food Reviews' },
                { href: '/map', label: 'Food Map' },
                { href: '/events', label: 'Kitfo Fest 2026' },
                { href: '/services', label: 'Services' },
                { href: '/collaborate', label: 'Work With Us' },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>{label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" style={{ color: '#F59E0B' }} />
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Location */}
          <div className="flex flex-col gap-3">
            <h4
              className="font-display font-bold text-xs uppercase tracking-widest"
              style={{ color: '#F59E0B' }}
            >
              Addis Ababa HQ
            </h4>
            <div
              className="p-3.5 rounded-2xl flex flex-col gap-2 border"
              style={{ backgroundColor: '#161E2E', borderColor: '#1F293D' }}
            >
              <div className="flex items-center gap-1.5 text-xs font-bold text-white">
                <MapPin className="w-4 h-4" style={{ color: '#F59E0B' }} />
                <span>Bole Medhaniallem, Addis Ababa</span>
              </div>
              <p className="text-[11px] leading-snug" style={{ color: '#94A3B8' }}>
                Bole Atlas Commercial Area
              </p>
              <a
                href="https://maps.google.com/?q=Bole+Medhaniallem+Addis+Ababa"
                target="_blank" rel="noopener noreferrer"
                className="mt-1 px-3 py-1.5 rounded-full text-[11px] font-mono font-bold flex items-center justify-between border transition-colors bg-amber-500/10 text-amber-400 border-amber-500/30"
              >
                <span>View Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div className="flex flex-col gap-3">
            <h4
              className="font-display font-bold text-xs uppercase tracking-widest"
              style={{ color: '#F59E0B' }}
            >
              Weekly Digest
            </h4>
            <p className="text-xs font-body leading-relaxed" style={{ color: '#94A3B8' }}>
              Get food alerts, ETB price updates, and event tickets.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-full text-xs font-bold border bg-emerald-500/15 border-emerald-500 text-emerald-400">
                ✓ Subscribed! Welcome.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2.5">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email..."
                  className="w-full px-3.5 py-3 text-xs rounded-full bg-white/10 border border-white/15 text-white placeholder-slate-400 focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="touch-target w-full text-slate-950 font-extrabold text-xs py-3 rounded-full transition-all shadow-md cursor-pointer hover:scale-105 focus-ring"
                  style={{ backgroundColor: '#F59E0B' }}
                >
                  Subscribe Free
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Credits */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold border-t"
          style={{ borderColor: '#1F293D', color: '#94A3B8' }}
        >
          <p>Addis Foodies © 2026 • Official Digital Food Guide (@addisfoodiess)</p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/about" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/collaborate" className="hover:text-white transition-colors">Work With Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
