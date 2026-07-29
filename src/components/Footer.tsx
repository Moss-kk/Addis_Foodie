'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, ArrowUpRight, MapPin, Clock, Smartphone, Lock } from 'lucide-react';
import { FaInstagram, FaTelegramPlane, FaTiktok, FaYoutube, FaFacebookF, FaGooglePlay, FaApple } from 'react-icons/fa';
import AddisFoodieLogo from './ui/AddisFoodieLogo';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { lang, t } = useLanguage();
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
      className="w-full mt-16 select-none border-t text-[#F7F5F2]"
      style={{
        backgroundColor: '#1A1C1E',
        color: '#F7F5F2',
        borderColor: '#2A2E33',
      }}
    >
      <div className="site-container py-12 sm:py-16 flex flex-col gap-12">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Column 1: Brand & Social Hub */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="brightness-125">
              <AddisFoodieLogo diluted={false} />
            </div>

            <p className="text-xs sm:text-sm font-body leading-relaxed max-w-md text-[#9DA3A8]">
              {t('footerSubtext')}
            </p>

            {/* Social Icons Bar */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://www.instagram.com/p/CK8TFBSngx8/?igshid=1pjzbuzr55jv8"
                target="_blank" rel="noopener noreferrer"
                className="touch-target p-2.5 rounded-md bg-white/10 hover:bg-[#B8422E] text-white transition-all border border-white/10 flex items-center justify-center hover:scale-105"
                title="Instagram @addis.foodie"
              >
                <FaInstagram size={16} className="text-white" />
              </a>
              <a
                href="https://t.me/addisfoodies"
                target="_blank" rel="noopener noreferrer"
                className="touch-target p-2.5 rounded-md bg-white/10 hover:bg-sky-500 text-white transition-all border border-white/10 flex items-center justify-center hover:scale-105"
                title="Telegram t.me/addisfoodies"
              >
                <FaTelegramPlane size={16} className="text-sky-400" />
              </a>
              <a
                href="https://www.tiktok.com"
                target="_blank" rel="noopener noreferrer"
                className="touch-target p-2.5 rounded-md bg-white/10 hover:bg-black text-white transition-all border border-white/10 flex items-center justify-center hover:scale-105"
                title="TikTok @addis.foodie"
              >
                <FaTiktok size={16} className="text-white" />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank" rel="noopener noreferrer"
                className="touch-target p-2.5 rounded-md bg-white/10 hover:bg-red-600 text-white transition-all border border-white/10 flex items-center justify-center hover:scale-105"
                title="YouTube Addis Foodies Official"
              >
                <FaYoutube size={16} className="text-red-400" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank" rel="noopener noreferrer"
                className="touch-target p-2.5 rounded-md bg-white/10 hover:bg-blue-600 text-white transition-all border border-white/10 flex items-center justify-center hover:scale-105"
                title="Facebook"
              >
                <FaFacebookF size={16} className="text-blue-400" />
              </a>
            </div>

            {/* Hotline & Hours */}
            <div className="flex flex-col gap-2 pt-2 text-xs font-label font-bold border-t border-[#2A2E33] text-[#9DA3A8]">
              <div className="flex items-center gap-2 text-[#B8422E]">
                <Phone className="w-4 h-4" />
                <span>{lang === 'AM' ? 'ስልክ: 0966-55-00-00' : 'Hotline: 0966-55-00-00'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>{lang === 'AM' ? 'ሰኞ – ቅዳሜ (2:30 ጠዋት – 12:30 ማታ)' : 'Mon – Sat (8:30 AM – 6:30 PM EAT)'}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Sitemap */}
          <div className="flex flex-col gap-3">
            <h4 className="font-label font-bold text-xs uppercase tracking-widest text-[#B8422E]">
              {lang === 'AM' ? 'የገፅ ማውጫ' : 'Navigation'}
            </h4>
            <div className="flex flex-col gap-2.5 text-xs font-semibold text-[#9DA3A8]">
              {[
                { href: '/', label: t('explore') },
                { href: '/reviews', label: t('reviews') },
                { href: '/events', label: t('events') },
                { href: '/services', label: t('services') },
                { href: '/collaborate', label: t('workWithUs') },
                { href: '/admin', label: t('adminPortal') },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>{label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#B8422E]" />
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Location */}
          <div className="flex flex-col gap-3">
            <h4 className="font-label font-bold text-xs uppercase tracking-widest text-[#B8422E]">
              {lang === 'AM' ? 'አዲስ አበባ ዋና ቢሮ' : 'Addis Ababa HQ'}
            </h4>
            <div className="p-3.5 rounded-md flex flex-col gap-2 border bg-white/5 border-[#2A2E33]">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#F7F5F2]">
                <MapPin className="w-4 h-4 text-[#B8422E]" />
                <span>{lang === 'AM' ? 'ቦሌ መድኃኔዓለም፣ አዲስ አበባ' : 'Bole Medhaniallem, Addis Ababa'}</span>
              </div>
              <p className="text-[11px] leading-snug text-[#9DA3A8]">
                {lang === 'AM' ? 'ቦሌ አትላስ የንግድ አካባቢ' : 'Bole Atlas Commercial Area'}
              </p>
              <a
                href="https://maps.google.com/?q=Bole+Medhaniallem+Addis+Ababa"
                target="_blank" rel="noopener noreferrer"
                className="mt-1 px-3 py-1.5 rounded-sm text-[11px] font-label font-bold flex items-center justify-between border transition-colors bg-[#B8422E]/10 text-[#B8422E] border-[#B8422E]/30"
              >
                <span>{lang === 'AM' ? 'በካርታ ይመልከቱ' : 'View Google Maps'}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div className="flex flex-col gap-3">
            <h4 className="font-label font-bold text-xs uppercase tracking-widest text-[#B8422E]">
              {t('weeklyDigest')}
            </h4>
            <p className="text-xs font-body leading-relaxed text-[#9DA3A8]">
              {t('newsletterSubtext')}
            </p>

            {subscribed ? (
              <div className="p-3 rounded-md text-xs font-bold border bg-emerald-500/15 border-emerald-500 text-emerald-300">
                {t('subscribedMessage')}
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2.5">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={lang === 'AM' ? 'ኢሜይልዎን ያስገቡ...' : 'Enter your email...'}
                  className="w-full px-3.5 py-3 text-xs rounded-md bg-white/10 border border-[#3A3E42] text-[#F7F5F2] placeholder-slate-400 focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="button-primary w-full text-xs py-3 rounded-md shadow-xs cursor-pointer focus-ring"
                >
                  {t('subscribeFree')}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* APP DOWNLOAD SECTION AT THE VERY BOTTOM OF THE FOOTER (BELOW ALL COLUMNS) */}
        <div className="pt-8 border-t border-[#2A2E33] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-sm bg-[#B8422E] text-white flex items-center justify-center font-label font-bold text-lg shadow-xs">
              <Smartphone className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-label font-bold text-xs uppercase tracking-wider text-[#F7F5F2]">
                {t('deliveryTitle')}
              </span>
              <span className="text-[11px] font-body text-[#9DA3A8]">
                {t('deliverySubtext')}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noreferrer"
              className="touch-target px-4 py-2.5 rounded-sm bg-white text-[#1A1C1E] font-label font-bold text-xs transition-all flex items-center gap-2 hover:bg-slate-100 cursor-pointer shadow-xs"
            >
              <FaGooglePlay className="w-4 h-4 text-[#1A1C1E]" />
              <div className="flex flex-col text-left leading-none">
                <span className="text-[8px] font-label uppercase text-slate-600">GET IT ON</span>
                <span className="text-xs font-label">Google Play</span>
              </div>
            </a>

            <a
              href="https://apple.com"
              target="_blank"
              rel="noreferrer"
              className="touch-target px-4 py-2.5 rounded-sm bg-white/10 hover:bg-white/20 text-white font-label font-bold text-xs border border-white/20 transition-all flex items-center gap-2 cursor-pointer backdrop-blur-md"
            >
              <FaApple className="w-4 h-4 text-white" />
              <div className="flex flex-col text-left leading-none">
                <span className="text-[8px] font-label uppercase text-slate-400">Download on the</span>
                <span className="text-xs font-label">App Store</span>
              </div>
            </a>
          </div>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold border-t border-[#2A2E33] text-[#9DA3A8]">
          <p>Addis Foodies © 2026 • Official Digital Food Guide (@addis.foodie &amp; @addis.foodie.delivery)</p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-white transition-colors">{lang === 'AM' ? 'የግላዊነት ፖሊሲ' : 'Privacy Policy'}</Link>
            <Link href="/about" className="hover:text-white transition-colors">{lang === 'AM' ? 'የአገልግሎት ውል' : 'Terms of Service'}</Link>
            <Link href="/collaborate" className="hover:text-white transition-colors">{t('workWithUs')}</Link>
            <Link href="/admin" className="hover:text-[#B8422E] transition-colors flex items-center gap-1">
              <Lock className="w-3 h-3 text-[#B8422E]" />
              <span>{t('adminPortal')}</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
