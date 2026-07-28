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
  Tag
} from 'lucide-react';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import MobileBottomNav from '../../../components/layout/MobileBottomNav';
import PriceReceiptModal from '../../../components/PriceReceiptModal';
import { mockPosts } from '../../../data/mockPosts';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function RestaurantDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
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

  return (
    <div
      className="flex flex-col min-h-screen transition-colors duration-300 pb-16 sm:pb-0 max-w-full overflow-x-hidden"
      style={{ backgroundColor: 'var(--bg-app)', color: 'var(--text-primary)' }}
    >
      <Header />

      <main className="flex-1 site-container py-6 sm:py-10 flex flex-col gap-8">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center justify-between">
          <Link
            href="/reviews"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-500 hover:text-amber-500 transition-colors"
          >
            <ArrowRight className="w-4 h-4 rotate-180" style={{ color: 'var(--accent-gold)' }} />
            <span>Back to Reviews &amp; Reels</span>
          </Link>

          <button
            onClick={handleShare}
            className="touch-target px-4 py-2 rounded-full border text-xs font-mono font-bold transition-all flex items-center gap-1.5 cursor-pointer"
            style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)', color: 'var(--text-primary)' }}
          >
            <Share2 className="w-3.5 h-3.5" style={{ color: 'var(--accent-gold)' }} />
            <span>{copied ? 'Link Copied!' : 'Share Review'}</span>
          </button>
        </div>

        {/* 1. HERO COVER & GALLERY */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl border" style={{ borderColor: 'var(--border-subtle)' }}>
          <Image
            src={post.image}
            alt={post.restaurantName}
            fill
            priority
            sizes="100vw"
            className="object-cover brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

          {/* Floating Pill Badges */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
            <span className="px-3.5 py-1.5 rounded-full bg-slate-950/80 border border-amber-500/40 text-amber-400 font-mono font-bold text-xs uppercase shadow-md">
              {post.category}
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-amber-500 text-slate-950 font-mono font-bold text-xs shadow-md">
              {post.rating} ★ Rating
            </span>
          </div>

          {/* Title Overlay */}
          <div className="absolute bottom-6 left-6 right-6 z-10 flex flex-col gap-1 text-white">
            <h1 className="font-display font-normal text-3xl sm:text-5xl text-white">
              {post.restaurantName}
            </h1>
            <p className="text-xs sm:text-sm font-mono text-slate-300 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>{post.location}</span>
            </p>
          </div>
        </div>

        {/* 2. KEY METRICS & RATING BREAKDOWN */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Inspection Notes */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            
            <section
              className="p-6 sm:p-8 rounded-3xl border shadow-card flex flex-col gap-4"
              style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}
            >
              <div className="flex items-center gap-2 border-b pb-3" style={{ borderColor: 'var(--border-subtle)' }}>
                <Tag className="w-5 h-5" style={{ color: 'var(--accent-gold)' }} />
                <h2 className="font-display font-bold text-xl" style={{ color: 'var(--text-primary)' }}>
                  Verified Field Inspection Summary
                </h2>
              </div>

              <p className="text-sm font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {post.caption}
              </p>

              {post.reviewerNotes && (
                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-xs font-mono font-semibold text-amber-400 flex items-start gap-2">
                  <ShieldCheck className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block uppercase text-amber-300">Curator Inspector Note:</span>
                    <span>{post.reviewerNotes}</span>
                  </div>
                </div>
              )}
            </section>

            {/* Menu & Itemized ETB Prices */}
            {post.menuItems && post.menuItems.length > 0 && (
              <section
                className="p-6 sm:p-8 rounded-3xl border shadow-card flex flex-col gap-4"
                style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}
              >
                <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: 'var(--border-subtle)' }}>
                  <div className="flex items-center gap-2">
                    <Receipt className="w-5 h-5" style={{ color: 'var(--accent-gold)' }} />
                    <h3 className="font-display font-bold text-xl" style={{ color: 'var(--text-primary)' }}>
                      Itemized ETB Menu Pricing
                    </h3>
                  </div>
                  
                  <button
                    onClick={() => setShowReceipt(true)}
                    className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-amber-500/15 border border-amber-500/40 text-amber-400 hover:bg-amber-500/25 transition-colors cursor-pointer"
                  >
                    View Official Receipt →
                  </button>
                </div>

                <div className="flex flex-col gap-2.5">
                  {post.menuItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl border flex items-center justify-between text-xs sm:text-sm font-medium"
                      style={{ backgroundColor: 'var(--bg-app)', borderColor: 'var(--border-subtle)' }}
                    >
                      <span style={{ color: 'var(--text-primary)' }}>{item.name}</span>
                      <span className="font-mono font-bold" style={{ color: 'var(--accent-gold)' }}>{item.price} Br</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

          </div>

          {/* Sidebar Metadata */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div
              className="p-6 rounded-3xl border shadow-card flex flex-col gap-4"
              style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}
            >
              <h3 className="font-display font-bold text-lg border-b pb-2" style={{ color: 'var(--text-primary)' }}>
                Restaurant Quick Overview
              </h3>

              <div className="flex flex-col gap-3 text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>
                <div>
                  <span className="block text-[10px] font-mono uppercase text-slate-400">Neighborhood</span>
                  <span className="font-bold text-sm" style={{ color: 'var(--text-primary)' }}>{post.neighborhood}</span>
                </div>

                <div>
                  <span className="block text-[10px] font-mono uppercase text-slate-400">Average Cost</span>
                  <span className="font-mono font-bold text-base" style={{ color: 'var(--accent-gold)' }}>{post.priceFormatted}</span>
                </div>

                <div>
                  <span className="block text-[10px] font-mono uppercase text-slate-400">Inspector Rating</span>
                  <span className="font-mono font-bold text-sm text-emerald-400">{post.rating} / 5.0 ★</span>
                </div>
              </div>

              {post.mapUrl && (
                <a
                  href={post.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="touch-target w-full mt-2 py-3 rounded-full text-slate-950 font-extrabold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer hover:scale-105"
                  style={{ backgroundColor: 'var(--accent-gold)' }}
                >
                  <MapPin className="w-4 h-4 text-slate-950" />
                  <span>Open in Google Maps</span>
                </a>
              )}
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
