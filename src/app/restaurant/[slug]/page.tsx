'use client';

import React, { useState, use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { 
  Star, 
  MapPin, 
  Receipt, 
  Phone, 
  Clock, 
  CheckCircle, 
  ExternalLink,
  Utensils,
  Share2,
  ArrowRight,
  ShieldCheck,
  Tag,
  Wifi,
  Car,
  CreditCard,
  Leaf,
  MessageCircle,
  Film
} from 'lucide-react';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import MobileBottomNav from '../../../components/layout/MobileBottomNav';
import PriceReceiptModal from '../../../components/PriceReceiptModal';
import { RestaurantJsonLd, ReviewJsonLd } from '../../../components/JsonLd';
import { mockPosts } from '../../../data/mockPosts';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function RestaurantDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const [activeTab, setActiveTab] = useState<'overview' | 'menu' | 'reels' | 'map'>('overview');
  const [showReceipt, setShowReceipt] = useState(false);
  const [copied, setCopied] = useState(false);

  // Find matching restaurant by slug
  const post = mockPosts.find(p => {
    const slugName = p.restaurantName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    return slugName === resolvedParams.slug || p.id === resolvedParams.slug;
  }) || mockPosts[0];

  if (!post) {
    notFound();
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.restaurantName,
        text: `Check out ${post.restaurantName} review on Addis Foodies`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const phoneNum = post.phone || '+251911234567';
  const whatsappNum = post.whatsapp ? post.whatsapp.replace(/[^0-9]/g, '') : '251911234567';

  return (
    <div
      className="flex flex-col min-h-screen transition-colors duration-300 pb-20 sm:pb-0 max-w-full overflow-x-hidden"
      style={{ backgroundColor: 'var(--bg-app)', color: 'var(--text-primary)' }}
    >
      <Header />
      <RestaurantJsonLd post={post} />
      <ReviewJsonLd post={post} />

      <main className="flex-1 site-container py-6 sm:py-10 flex flex-col gap-6">
        
        {/* Breadcrumb & Action Strip */}
        <div className="flex items-center justify-between">
          <Link
            href="/reviews"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-bold text-slate-400 hover:text-amber-500 transition-colors"
          >
            <ArrowRight className="w-4 h-4 rotate-180 text-amber-500" />
            <span>Back to Reviews &amp; Reels</span>
          </Link>

          <button
            type="button"
            onClick={handleShare}
            className="touch-target px-4 py-2 rounded-full border text-xs font-mono font-bold transition-all flex items-center gap-1.5 cursor-pointer"
            style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)', color: 'var(--text-primary)' }}
          >
            <Share2 className="w-3.5 h-3.5 text-amber-500" />
            <span>{copied ? 'Link Copied!' : 'Share'}</span>
          </button>
        </div>

        {/* HERO COVER BANNER & FLOATING ACTION BUTTONS */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl border" style={{ borderColor: 'var(--border-subtle)' }}>
          <Image
            src={post.image}
            alt={post.restaurantName}
            fill
            priority
            sizes="100vw"
            className="object-cover brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

          {/* Top Pill Badges */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
            <span className="px-3.5 py-1.5 rounded-full bg-black/80 border border-amber-500/40 text-amber-400 font-mono font-bold text-xs uppercase shadow-md">
              {post.category}
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-amber-500 text-slate-950 font-mono font-bold text-xs shadow-md">
              {post.rating} ★ Rating ({post.reviewCount || 120})
            </span>
          </div>

          {/* Title & Floating Quick Action Buttons */}
          <div className="absolute bottom-6 left-6 right-6 z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
            <div className="flex flex-col gap-1">
              <h1 className="font-display font-medium text-3xl sm:text-5xl text-white">
                {post.restaurantName}
              </h1>
              <p className="text-xs sm:text-sm font-mono text-slate-300 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-red-500" />
                <span>{post.location}</span>
              </p>
            </div>

            {/* Quick Action Buttons Grid (📞 Call, 🗺️ Directions, 💬 WhatsApp) */}
            <div className="flex items-center gap-2 shrink-0">
              <a
                href={`tel:${phoneNum}`}
                className="touch-target px-4 py-2.5 rounded-full bg-emerald-500 text-slate-950 font-mono font-extrabold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-lg transition-transform hover:scale-105"
              >
                <Phone className="w-4 h-4" />
                <span>📞 Call</span>
              </a>

              {post.mapUrl && (
                <a
                  href={post.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="touch-target px-4 py-2.5 rounded-full bg-amber-500 text-slate-950 font-mono font-extrabold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-lg transition-transform hover:scale-105"
                >
                  <MapPin className="w-4 h-4" />
                  <span>🗺️ Directions</span>
                </a>
              )}

              <a
                href={`https://wa.me/${whatsappNum}`}
                target="_blank"
                rel="noreferrer"
                className="touch-target px-4 py-2.5 rounded-full bg-green-600 text-white font-mono font-extrabold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-lg transition-transform hover:scale-105"
              >
                <MessageCircle className="w-4 h-4" />
                <span>💬 WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* EXPLICIT TABBED BAR */}
        <div className="flex items-center gap-2 border-b overflow-x-auto no-scrollbar pb-1" style={{ borderColor: 'var(--border-subtle)' }}>
          {[
            { id: 'overview', label: 'Overview', icon: Tag },
            { id: 'menu', label: 'Itemized Menu', icon: Receipt },
            { id: 'reels', label: 'Video Reviews', icon: Film },
            { id: 'map', label: 'Map & Info', icon: MapPin },
          ].map((tab) => {
            const IconComp = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`touch-target px-5 py-2.5 rounded-full text-xs font-mono font-bold transition-all flex items-center gap-2 cursor-pointer shrink-0 border ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md scale-105'
                    : 'bg-white/5 text-slate-300 border-white/10 hover:border-amber-500/40'
                }`}
              >
                <IconComp className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* TAB CONTENT & KEY META SIDEBAR */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* MAIN TAB CONTENT (8 COLS) */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            
            {/* OVERVIEW TAB */}
            {activeTab === 'overview' && (
              <section
                className="p-6 sm:p-8 rounded-3xl border shadow-card flex flex-col gap-4"
                style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}
              >
                <div className="flex items-center gap-2 border-b pb-3" style={{ borderColor: 'var(--border-subtle)' }}>
                  <ShieldCheck className="w-5 h-5 text-amber-500" />
                  <h2 className="font-display font-bold text-xl" style={{ color: 'var(--text-primary)' }}>
                    Verified Inspector Summary
                  </h2>
                </div>

                <p className="text-sm font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {post.caption}
                </p>

                {post.reviewerNotes && (
                  <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-xs font-mono font-semibold text-amber-400 flex items-start gap-2">
                    <ShieldCheck className="w-5 h-5 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold block uppercase text-amber-300">Curator Field Note:</span>
                      <span>{post.reviewerNotes}</span>
                    </div>
                  </div>
                )}
              </section>
            )}

            {/* MENU TAB */}
            {(activeTab === 'menu' || activeTab === 'overview') && post.menuItems && post.menuItems.length > 0 && (
              <section
                className="p-6 sm:p-8 rounded-3xl border shadow-card flex flex-col gap-4"
                style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}
              >
                <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: 'var(--border-subtle)' }}>
                  <div className="flex items-center gap-2">
                    <Receipt className="w-5 h-5 text-amber-500" />
                    <h3 className="font-display font-bold text-xl" style={{ color: 'var(--text-primary)' }}>
                      Itemized ETB Menu &amp; Price Breakdown
                    </h3>
                  </div>

                  <button
                    type="button"
                    onClick={() => setShowReceipt(true)}
                    className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-amber-500/15 border border-amber-500/40 text-amber-400 hover:bg-amber-500/25 transition-colors cursor-pointer"
                  >
                    View Official Receipt →
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {post.menuItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl border flex items-center justify-between text-xs sm:text-sm font-medium"
                      style={{ backgroundColor: 'var(--bg-app)', borderColor: 'var(--border-subtle)' }}
                    >
                      <span style={{ color: 'var(--text-primary)' }}>{item.name}</span>
                      <span className="font-mono font-extrabold text-emerald-400 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                        {item.price} Br
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* VIDEO REELS TAB */}
            {activeTab === 'reels' && (
              <section
                className="p-6 rounded-3xl border shadow-card flex flex-col gap-4"
                style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}
              >
                <div className="flex items-center gap-2 border-b pb-3" style={{ borderColor: 'var(--border-subtle)' }}>
                  <Film className="w-5 h-5 text-amber-500" />
                  <h3 className="font-display font-bold text-xl" style={{ color: 'var(--text-primary)' }}>
                    Video Reviews &amp; Reels
                  </h3>
                </div>

                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-950 flex items-center justify-center border border-white/10">
                  <span className="text-xs font-mono text-slate-400">9:16 Field Reel Loaded</span>
                </div>
              </section>
            )}

            {/* MAP TAB */}
            {activeTab === 'map' && post.mapUrl && (
              <section
                className="p-6 rounded-3xl border shadow-card flex flex-col gap-4"
                style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}
              >
                <div className="flex items-center gap-2 border-b pb-3" style={{ borderColor: 'var(--border-subtle)' }}>
                  <MapPin className="w-5 h-5 text-amber-500" />
                  <h3 className="font-display font-bold text-xl" style={{ color: 'var(--text-primary)' }}>
                    Location &amp; Directions
                  </h3>
                </div>

                <p className="text-xs font-mono text-slate-400">{post.location}</p>
                <a
                  href={post.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="touch-target px-6 py-3 rounded-full bg-amber-500 text-slate-950 font-mono font-bold text-xs uppercase tracking-wider text-center cursor-pointer shadow-md hover:scale-105"
                >
                  Open in Google Maps 🗺️
                </a>
              </section>
            )}

          </div>

          {/* KEY META SIDEBAR GRID (4 COLS) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            <div
              className="p-6 rounded-3xl border shadow-card flex flex-col gap-4"
              style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}
            >
              <h3 className="font-display font-bold text-lg border-b pb-3" style={{ color: 'var(--text-primary)' }}>
                Venue Specs &amp; Amenities
              </h3>

              {/* Grid of Key Meta Icons */}
              <div className="flex flex-col gap-3.5 text-xs font-mono">
                
                {/* Wi-Fi Status */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-2">
                    <Wifi className="w-4 h-4 text-amber-400" />
                    <span>Wi-Fi Status</span>
                  </div>
                  <span className="font-bold text-emerald-400">
                    {post.amenities?.wifi ? '⚡ High-Speed' : '❌ No Wi-Fi'}
                  </span>
                </div>

                {/* Parking */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-2">
                    <Car className="w-4 h-4 text-amber-400" />
                    <span>Parking</span>
                  </div>
                  <span className="font-bold text-emerald-400">
                    {post.amenities?.parking ? '🟢 Available' : '❌ Street Only'}
                  </span>
                </div>

                {/* Fasting Options */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-2">
                    <Leaf className="w-4 h-4 text-amber-400" />
                    <span>Fasting Menu</span>
                  </div>
                  <span className="font-bold text-emerald-400">
                    {post.amenities?.fastingOptions ? '🌱 Fasting Menu' : '❌ Regular Only'}
                  </span>
                </div>

                {/* Payment Methods */}
                <div className="flex flex-col gap-1.5 p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-2 text-amber-400 font-bold">
                    <CreditCard className="w-4 h-4" />
                    <span>Payment Methods</span>
                  </div>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {(post.amenities?.paymentMethods || ['Telebirr', 'CBE Birr', 'Cash']).map((method, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded-md bg-white/10 text-[10px] text-slate-200">
                        {method}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </main>

      <Footer />
      <MobileBottomNav />

      {showReceipt && (
        <PriceReceiptModal
          post={post}
          onClose={() => setShowReceipt(false)}
        />
      )}
    </div>
  );
}
