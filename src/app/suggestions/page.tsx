'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Send, 
  UtensilsCrossed, 
  CheckCircle2, 
  Sparkles, 
  ChevronDown, 
  ChevronUp, 
  Compass, 
  Star, 
  MapPin, 
  PlusCircle, 
  Flame 
} from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MobileBottomNav from '../../components/layout/MobileBottomNav';
import { CUISINE_CATEGORIES } from '../../lib/categories';
import { mockPosts } from '../../data/mockPosts';
import { useLanguage } from '../../context/LanguageContext';

export default function SuggestionsPage() {
  const { lang } = useLanguage();

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    userName: '',
    contactPhone: '',
    restaurantName: '',
    neighborhood: 'Bole',
    category: 'Traditional / Habesha',
    reason: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.restaurantName.trim()) {
      setErrorMessage('Please enter the restaurant name.');
      return;
    }

    setSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch('/api/suggestions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json();
        setErrorMessage(data.error || 'Failed to submit suggestion.');
      }
    } catch {
      setErrorMessage('Network error submitting suggestion.');
    } finally {
      setSubmitting(false);
    }
  };

  // Grouped "Where To Go" Curated Highlights
  const bestKitfoSpots = mockPosts.filter((p) => p.category.includes('Siga Bet'));
  const bestBurgerSpots = mockPosts.filter((p) => p.category.includes('Burgers'));
  const bestCoffeeSpots = mockPosts.filter((p) => p.category.includes('Cafés'));
  const bestFastingSpots = mockPosts.filter((p) => p.category.includes('Fasting'));
  const bestFineDiningSpots = mockPosts.filter((p) => p.category.includes('Fine Dining'));

  return (
    <div
      className="flex flex-col min-h-screen transition-colors duration-300 pb-20 sm:pb-0 max-w-full overflow-x-hidden"
      style={{ backgroundColor: 'var(--bg-app)', color: 'var(--text-primary)' }}
    >
      <Header />

      {/* Hero Header */}
      <section
        className="w-full py-10 sm:py-14 border-b transition-colors"
        style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}
      >
        <div className="site-container flex flex-col items-center text-center gap-4">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/20">
            <Compass className="w-4 h-4 text-[#F59E0B]" />
            <span>{lang === 'AM' ? 'ወደ የት እንሂድ? የመመገቢያ ጥቆማዎች' : 'Where To Go Guide — Addis Ababa'}</span>
          </div>

          <h1 className="font-syne font-black text-3xl sm:text-5xl text-[var(--text-primary)]">
            {lang === 'AM' ? 'ምርጥ የምግብ ቦታዎች ጥቆማ' : 'Where To Go — Best Spot Guide'}
          </h1>

          <p className="text-xs sm:text-sm font-body text-[var(--text-secondary)] leading-relaxed max-w-2xl">
            {lang === 'AM' 
              ? 'በአዲስ ፉዲዎች የተመረጡ የክትፎ፣ የበርገር፣ የካፌ እና የቪገን ቦታዎች ጥቆማዎች። ድብቅ ቦታ ካለዎት ደግሞ ለቀጣይ ግምገማ ይጠቁሙን!' 
              : 'Journalistic recommendations for the finest Kitfo joints, gourmet burgers, specialty cafes, and fasting platters across Addis Ababa.'}
          </p>

          {/* COLLAPSIBLE NOMINATION FORM TOGGLE BUTTON */}
          <button
            type="button"
            onClick={() => setIsFormOpen(!isFormOpen)}
            className="mt-2 button-primary px-6 py-3 rounded-2xl text-xs font-label uppercase tracking-wider text-white font-bold flex items-center gap-2.5 shadow-lg cursor-pointer hover:scale-102 transition-transform"
          >
            <Sparkles className="w-4 h-4 text-white" />
            <span>
              {isFormOpen 
                ? (lang === 'AM' ? 'የጥቆማ ፎርሙን ዝጋ ✖' : 'Close Nomination Form ✖')
                : (lang === 'AM' ? '➕ አዲስ ድብቅ ቦታ ይጠቁሙ' : '➕ Nominate a Spot for Inspection')}
            </span>
            {isFormOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

        </div>
      </section>

      {/* COLLAPSIBLE NOMINATION FORM SECTION (Visible only when toggle clicked) */}
      {isFormOpen && (
        <section className="w-full bg-[var(--bg-surface)] border-b border-[var(--border-subtle)] py-8 animate-fadeIn">
          <div className="site-container max-w-2xl mx-auto">
            {submitted ? (
              <div className="p-8 rounded-2xl bg-[var(--bg-app)] border border-emerald-500/30 text-center flex flex-col items-center gap-4 shadow-lg">
                <CheckCircle2 className="w-12 h-12 text-emerald-500" />
                <h2 className="font-syne font-bold text-2xl text-[var(--text-primary)]">
                  {lang === 'AM' ? 'ጥቆማዎ በተሳካ ሁኔታ ተልኳል!' : 'Suggestion Submitted Successfully!'}
                </h2>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-md leading-relaxed">
                  Thank you for nominating {formData.restaurantName}. Our culinary curation team will schedule an official unannounced inspection &amp; ETB price audit!
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-2 button-primary px-6 py-2.5 rounded-xl text-xs font-label uppercase text-white font-bold"
                >
                  Nominate Another Spot
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-6 sm:p-8 rounded-2xl bg-[var(--bg-app)] border border-[var(--border-subtle)] shadow-md flex flex-col gap-5"
              >
                <div className="flex items-center justify-between border-b pb-3 border-[var(--border-subtle)]">
                  <span className="font-syne font-bold text-lg text-[var(--text-primary)]">
                    Suggest a Spot for Inspection
                  </span>
                  <span className="text-[10px] font-mono text-stone-400">100% Confidential</span>
                </div>

                {errorMessage && (
                  <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-500 text-xs font-bold font-mono">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-label font-bold uppercase text-[var(--text-secondary)]">
                      Your Name (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Henok Tadesse"
                      value={formData.userName}
                      onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
                      className="px-3.5 py-2 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] focus:outline-none focus:border-[#A81D1D]"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-label font-bold uppercase text-[var(--text-secondary)]">
                      Phone / Telegram Handle
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. +251911234567"
                      value={formData.contactPhone}
                      onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                      className="px-3.5 py-2 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] focus:outline-none focus:border-[#A81D1D]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-2 flex flex-col gap-1.5">
                    <label className="text-[11px] font-label font-bold uppercase text-[var(--text-secondary)]">
                      Restaurant Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Yado Gurage Kitfo, Sishu Burger"
                      value={formData.restaurantName}
                      onChange={(e) => setFormData({ ...formData, restaurantName: e.target.value })}
                      className="px-3.5 py-2 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] focus:outline-none focus:border-[#A81D1D]"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-label font-bold uppercase text-[var(--text-secondary)]">
                      Neighborhood
                    </label>
                    <select
                      value={formData.neighborhood}
                      onChange={(e) => setFormData({ ...formData, neighborhood: e.target.value })}
                      className="px-3 py-2 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] focus:outline-none focus:border-[#A81D1D]"
                    >
                      {['Bole', 'Kazanchis', 'Piassa', 'Sarbet', 'CMC', 'Old Airport', '22', 'Entoto', 'Gotera'].map((loc) => (
                        <option key={loc} value={loc}>
                          {loc}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-label font-bold uppercase text-[var(--text-secondary)]">
                    Cuisine Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="px-3.5 py-2 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] focus:outline-none focus:border-[#A81D1D]"
                  >
                    {CUISINE_CATEGORIES.map((cat) => (
                      <option key={cat.id} value={cat.label}>
                        {cat.emoji} {cat.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-label font-bold uppercase text-[var(--text-secondary)]">
                    Why does this spot deserve an official review?
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Mention signature dish, price range, ambiance..."
                    value={formData.reason}
                    onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                    className="px-3.5 py-2 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] focus:outline-none focus:border-[#A81D1D] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="button-primary w-full py-3 rounded-xl font-label text-xs font-bold uppercase tracking-wider text-white shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  {submitting ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-white" />
                      <span>Submit Nomination</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </section>
      )}

      {/* EDITORIAL "WHERE TO GO" CURATED RECOMMENDATIONS SECTIONS */}
      <main className="site-container py-10 flex flex-col gap-12 flex-1">
        
        {/* 1. BEST KITFO & MEAT HOUSES (SIGA BET) */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center justify-between border-b pb-3 border-[var(--border-subtle)]">
            <div className="flex items-center gap-2.5">
              <Flame className="w-5 h-5 text-[#A81D1D]" />
              <h2 className="font-syne font-bold text-xl sm:text-2xl text-[var(--text-primary)]">
                Best Gurage Kitfo &amp; Siga Bet Recommendations
              </h2>
            </div>
            <Link href="/reviews-map?category=siga-bet" className="text-xs font-mono font-bold text-[#F59E0B] hover:underline">
              View All Kitfo →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bestKitfoSpots.map((spot) => (
              <div key={spot.id} className="heritage-card p-4 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col gap-3 shadow-xs hover:shadow-lg transition-all">
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-900">
                  <Image src={spot.image} alt={spot.restaurantName} fill className="object-cover" />
                  <span className="absolute top-2 right-2 bg-black/80 text-[#F59E0B] font-mono text-xs font-bold px-2.5 py-1 rounded-full">
                    {spot.priceFormatted}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between text-xs text-[var(--text-secondary)] font-bold">
                    <span>📍 {spot.neighborhood}</span>
                    <span className="text-amber-500 font-mono">⭐ {spot.rating || '5.0'}</span>
                  </div>
                  <h3 className="font-syne font-bold text-lg text-[var(--text-primary)]">{spot.restaurantName}</h3>
                  <p className="text-xs text-[var(--text-secondary)] line-clamp-2">{spot.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. BEST GOURMET BURGERS */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center justify-between border-b pb-3 border-[var(--border-subtle)]">
            <div className="flex items-center gap-2.5">
              <span className="text-xl">🍔</span>
              <h2 className="font-syne font-bold text-xl sm:text-2xl text-[var(--text-primary)]">
                Best Gourmet Burger Joints in Addis
              </h2>
            </div>
            <Link href="/reviews-map?category=fast-food-burgers" className="text-xs font-mono font-bold text-[#F59E0B] hover:underline">
              View All Burgers →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bestBurgerSpots.map((spot) => (
              <div key={spot.id} className="heritage-card p-4 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col gap-3 shadow-xs hover:shadow-lg transition-all">
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-900">
                  <Image src={spot.image} alt={spot.restaurantName} fill className="object-cover" />
                  <span className="absolute top-2 right-2 bg-black/80 text-[#F59E0B] font-mono text-xs font-bold px-2.5 py-1 rounded-full">
                    {spot.priceFormatted}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between text-xs text-[var(--text-secondary)] font-bold">
                    <span>📍 {spot.neighborhood}</span>
                    <span className="text-amber-500 font-mono">⭐ {spot.rating || '4.8'}</span>
                  </div>
                  <h3 className="font-syne font-bold text-lg text-[var(--text-primary)]">{spot.restaurantName}</h3>
                  <p className="text-xs text-[var(--text-secondary)] line-clamp-2">{spot.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. BEST SPECIALTY COFFEE & CAFES */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center justify-between border-b pb-3 border-[var(--border-subtle)]">
            <div className="flex items-center gap-2.5">
              <span className="text-xl">☕</span>
              <h2 className="font-syne font-bold text-xl sm:text-2xl text-[var(--text-primary)]">
                Best Specialty Coffee &amp; Cafés
              </h2>
            </div>
            <Link href="/reviews-map?category=cafes-coffee" className="text-xs font-mono font-bold text-[#F59E0B] hover:underline">
              View All Cafés →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bestCoffeeSpots.map((spot) => (
              <div key={spot.id} className="heritage-card p-4 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col gap-3 shadow-xs hover:shadow-lg transition-all">
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-900">
                  <Image src={spot.image} alt={spot.restaurantName} fill className="object-cover" />
                  <span className="absolute top-2 right-2 bg-black/80 text-[#F59E0B] font-mono text-xs font-bold px-2.5 py-1 rounded-full">
                    {spot.priceFormatted}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between text-xs text-[var(--text-secondary)] font-bold">
                    <span>📍 {spot.neighborhood}</span>
                    <span className="text-amber-500 font-mono">⭐ {spot.rating || '5.0'}</span>
                  </div>
                  <h3 className="font-syne font-bold text-lg text-[var(--text-primary)]">{spot.restaurantName}</h3>
                  <p className="text-xs text-[var(--text-secondary)] line-clamp-2">{spot.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      <Footer />
      <MobileBottomNav />
    </div>
  );
}
