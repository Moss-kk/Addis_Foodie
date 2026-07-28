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
      className="w-full mt-16 select-none transition-colors duration-300"
      style={{
        backgroundColor: '#0B0F17',
        color: '#F8FAFC',
        borderTop: '1px solid #1F293D',
      }}
    >
      <div className="site-container py-12 sm:py-16 flex flex-col gap-12">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Column 1: Brand & Social Hub */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <AddisFoodieLogo diluted={false} />

            <p className="text-xs sm:text-sm font-medium leading-relaxed max-w-md" style={{ color: '#94A3B8' }}>
              The official digital headquarters of Addis Foodies. Ethiopia&apos;s premier food media brand, culinary magazine, and live festival organizer.
            </p>

            {/* Social Icons Bar */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://www.instagram.com/p/CK8TFBSngx8/?igshid=1pjzbuzr55jv8"
                target="_blank" rel="noopener noreferrer"
                className="touch-target p-2.5 rounded-xl bg-[#161E2E] hover:bg-[#F59E0B] text-white hover:text-[#0B0F17] transition-all border border-[#1F293D] flex items-center justify-center hover:scale-105"
                title="Instagram @addisfoodiess"
              >
                <FaInstagram size={16} className="text-pink-400" />
              </a>
              <a
                href="https://t.me/addisfoodies"
                target="_blank" rel="noopener noreferrer"
                className="touch-target p-2.5 rounded-xl bg-[#161E2E] hover:bg-sky-500 text-white transition-all border border-[#1F293D] flex items-center justify-center hover:scale-105"
                title="Telegram t.me/addisfoodies"
              >
                <FaTelegramPlane size={16} className="text-sky-400" />
              </a>
              <a
                href="https://www.tiktok.com"
                target="_blank" rel="noopener noreferrer"
                className="touch-target p-2.5 rounded-xl bg-[#161E2E] hover:bg-black text-white transition-all border border-[#1F293D] flex items-center justify-center hover:scale-105"
                title="TikTok @addisfoodies"
              >
                <FaTiktok size={16} className="text-white" />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank" rel="noopener noreferrer"
                className="touch-target p-2.5 rounded-xl bg-[#161E2E] hover:bg-red-600 text-white transition-all border border-[#1F293D] flex items-center justify-center hover:scale-105"
                title="YouTube Addis Foodies Official"
              >
                <FaYoutube size={16} className="text-red-400" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank" rel="noopener noreferrer"
                className="touch-target p-2.5 rounded-xl bg-[#161E2E] hover:bg-blue-600 text-white transition-all border border-[#1F293D] flex items-center justify-center hover:scale-105"
                title="Facebook"
              >
                <FaFacebookF size={16} className="text-blue-400" />
              </a>
            </div>

            {/* Hotline & Hours */}
            <div
              className="flex flex-col gap-2 pt-2 text-xs font-mono font-bold"
              style={{ borderTop: '1px solid #1F293D', color: '#94A3B8' }}
            >
              <div className="flex items-center gap-2" style={{ color: '#F59E0B' }}>
                <Phone className="w-4 h-4" />
                <span>Hotline: 0966-55-00-00</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" style={{ color: '#10B981' }} />
                <span>Editorial HQ: Mon – Sat (8:30 AM – 6:30 PM EAT)</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Sitemap */}
          <div className="flex flex-col gap-3">
            <h4
              className="font-display font-extrabold text-xs uppercase tracking-widest"
              style={{ color: '#F59E0B' }}
            >
              Navigation
            </h4>
            <div className="flex flex-col gap-2.5 text-xs font-semibold" style={{ color: '#94A3B8' }}>
              {[
                { href: '/', label: 'Digital HQ' },
                { href: '/reviews', label: 'Reviews Feed' },
                { href: '/events', label: 'Kitfo Fest 2026' },
                { href: '/services', label: 'Media Services' },
                { href: '/about', label: 'Brand Story' },
                { href: '/collaborate', label: 'Work With Us' },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="hover:text-[#F59E0B] transition-colors flex items-center justify-between"
                >
                  <span>{label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" style={{ color: '#EF4444' }} />
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Location */}
          <div className="flex flex-col gap-3">
            <h4
              className="font-display font-extrabold text-xs uppercase tracking-widest"
              style={{ color: '#F59E0B' }}
            >
              Addis Ababa HQ
            </h4>
            <div
              className="p-3.5 rounded-2xl flex flex-col gap-2 shadow-inner"
              style={{ backgroundColor: '#161E2E', border: '1px solid #1F293D' }}
            >
              <div className="flex items-center gap-1.5 text-xs font-bold text-white">
                <MapPin className="w-4 h-4" style={{ color: '#EF4444' }} />
                <span>Bole Medhaniallem, Addis Ababa</span>
              </div>
              <p className="text-[11px] leading-snug" style={{ color: '#94A3B8' }}>
                Edna Mall Commercial Tower, 4th Floor
              </p>
              <a
                href="https://maps.google.com/?q=Bole+Medhaniallem+Addis+Ababa"
                target="_blank" rel="noopener noreferrer"
                className="mt-1 px-3 py-1.5 rounded-lg text-[11px] font-mono font-bold flex items-center justify-between border transition-colors"
                style={{
                  backgroundColor: 'rgba(245,158,11,0.15)',
                  color: '#F59E0B',
                  borderColor: 'rgba(245,158,11,0.35)',
                }}
              >
                <span>View Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div className="flex flex-col gap-3">
            <h4
              className="font-display font-extrabold text-xs uppercase tracking-widest"
              style={{ color: '#F59E0B' }}
            >
              Weekly Digest
            </h4>
            <p className="text-xs font-medium leading-relaxed" style={{ color: '#94A3B8' }}>
              Get secret food spot alerts, ETB price updates, and event tickets.
            </p>

            {subscribed ? (
              <div
                className="p-3 rounded-xl text-xs font-bold border"
                style={{ backgroundColor: 'rgba(16,185,129,0.15)', borderColor: '#10B981', color: '#10B981' }}
              >
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
                  className="w-full px-3.5 py-3 text-xs rounded-xl bg-[#161E2E] border border-[#1F293D] text-white placeholder-slate-400 focus:outline-none focus:border-[#F59E0B] transition-colors"
                />
                <button
                  type="submit"
                  className="touch-target w-full text-white font-extrabold text-xs py-3 rounded-xl transition-all shadow-md cursor-pointer hover:bg-[#DC2626] focus-ring"
                  style={{ backgroundColor: '#EF4444' }}
                >
                  Subscribe Free
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Credits */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold"
          style={{ borderTop: '1px solid #1F293D', color: '#94A3B8' }}
        >
          <p>Addis Foodies © 2026 • Official Food Media Headquarters (@addisfoodiess)</p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/about" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/collaborate" className="hover:text-white transition-colors">Media Kit</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
