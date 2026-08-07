'use client';

import React, { useState, useMemo } from 'react';
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
  ArrowRight,
  Filter,
  Utensils,
  X,
  Star,
  MapPin
} from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MobileBottomNav from '../../components/layout/MobileBottomNav';
import AutoReviewMarquee from '../../components/AutoReviewMarquee';
import PostDetailModal from '../../components/PostDetailModal';
import { CUISINE_CATEGORIES } from '../../lib/categories';
import { mockPosts } from '../../data/mockPosts';
import { FoodPost } from '../../types/post';
import { useLanguage } from '../../context/LanguageContext';

export default function SuggestionsPage() {
  const { lang } = useLanguage();

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [modalPost, setModalPost] = useState<FoodPost | null>(null);
  
  // State to dismiss/remove the hero featured Burgueriza Lounge card
  const [isHeroSpotDismissed, setIsHeroSpotDismissed] = useState(false);

  // Interactive Category Filter States for the Two Rows
  const [activeCuisineTab, setActiveCuisineTab] = useState<string>('all');
  const [activeFoodTab, setActiveFoodTab] = useState<string>('all');

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

  // Featured Burgueriza Lounge Spot Object for Modal Inspection
  const burguerizaSpot: FoodPost = {
    id: 'burgueriza-lounge-atlas',
    restaurantName: 'Burgueriza Lounge',
    location: 'Bole Atlas • Kelsam Bldg',
    neighborhood: 'Bole',
    latitude: 9.0010,
    longitude: 38.7820,
    image: '/telegram-imports/Queen Burger.jpg',
    images: ['/telegram-imports/Queen Burger.jpg'],
    caption: 'Gourmet Flame-Grilled Cheese Burgers — Handcrafted double beef patties with melted cheddar, jalapeño glaze, and seasoned waffle fries.',
    price: 740,
    priceFormatted: '740 Br',
    sourcePlatform: 'instagram',
    category: 'Fast Food & Burgers',
    timestamp: '2026-08-01T12:00:00Z',
    rating: '4.9',
    reviewCount: 210,
    isOpenNow: true,
    menuItems: [{ name: 'Gourmet Flame-Grilled Double Burger', price: 740 }],
  };

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

  // Specific Food Item Categories List
  const FOOD_ITEM_CATEGORIES = [
    { id: 'all', label: 'All Foods', emoji: '🍽️' },
    { id: 'burgers', label: 'Burgers & Fries', emoji: '🍔' },
    { id: 'pizzas', label: 'Pizzas & Pasta', emoji: '🍕' },
    { id: 'kitfo', label: 'Kitfo & Tibs', emoji: '🥩' },
    { id: 'doro-wat', label: 'Doro Wat Stew', emoji: '🍲' },
    { id: 'coffee', label: 'Coffee & Pastry', emoji: '☕' },
    { id: 'beyaynetu', label: 'Beyaynetu (Fasting)', emoji: '🥗' },
  ];

  // ROW 1: Filter Cuisine Review Posts
  const cuisineRowPosts = useMemo(() => {
    if (activeCuisineTab === 'all') return mockPosts;
    return mockPosts.filter((post) => {
      const pCat = post.category.toLowerCase();
      const tab = activeCuisineTab.toLowerCase();
      return pCat.includes(tab) || tab.includes(pCat);
    });
  }, [activeCuisineTab]);

  // ROW 2: Filter Food Item Review Posts
  const foodRowPosts = useMemo(() => {
    if (activeFoodTab === 'all') return mockPosts;
    return mockPosts.filter((post) => {
      const pCat = post.category.toLowerCase();
      if (activeFoodTab === 'burgers') return pCat.includes('burger') || pCat.includes('fast food');
      if (activeFoodTab === 'pizzas') return pCat.includes('italian');
      if (activeFoodTab === 'kitfo') return pCat.includes('siga bet') || pCat.includes('traditional');
      if (activeFoodTab === 'doro-wat') return pCat.includes('traditional');
      if (activeFoodTab === 'coffee') return pCat.includes('café') || pCat.includes('bakery');
      if (activeFoodTab === 'beyaynetu') return pCat.includes('fasting');
      return true;
    });
  }, [activeFoodTab]);

  return (
    <div
      className="flex flex-col min-h-screen transition-colors duration-300 pb-20 sm:pb-0 max-w-full overflow-x-hidden"
      style={{ backgroundColor: 'var(--bg-app)', color: 'var(--text-primary)' }}
    >
      <Header />

      {/* Hero Section */}
      <section
        className="w-full py-10 sm:py-14 border-b transition-colors"
        style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}
      >
        <div className="site-container flex flex-col items-center text-center gap-5">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/20">
            <Compass className="w-4 h-4 text-[#F59E0B]" />
            <span>{lang === 'AM' ? 'ወደ የት እንሂድ? የመመገቢያ ጥቆማዎች' : 'Where To Go Guide — Restaurant Inspections'}</span>
          </div>

          <h1 className="font-syne font-black text-3xl sm:text-5xl text-[var(--text-primary)]">
            {lang === 'AM' ? 'ምርጥ የምግብ ቦታዎች ጥቆማ' : 'Where To Go — Spot Recommendations'}
          </h1>

          {/* DISMISSIBLE HERO FEATURED SPOT CARD (Burgueriza Lounge) */}
          {!isHeroSpotDismissed && (
            <div className="relative w-full max-w-xl p-5 rounded-3xl bg-gradient-to-r from-stone-900 via-[#1E1412] to-stone-900 border border-[#F59E0B]/40 shadow-2xl text-left flex flex-col sm:flex-row items-center gap-4 my-1 animate-fadeIn">
              {/* Dismiss Button X */}
              <button
                type="button"
                onClick={() => setIsHeroSpotDismissed(true)}
                className="absolute top-3 right-3 p-1 rounded-full bg-black/60 text-stone-300 hover:text-white border border-white/20 transition cursor-pointer"
                title="Dismiss Card"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-slate-800 shrink-0 border border-white/10">
                <Image
                  src={burguerizaSpot.image}
                  alt="Burgueriza Lounge"
                  fill
                  className="object-cover"
                />
                <span className="absolute top-1.5 right-1.5 bg-black/80 text-[#F59E0B] font-mono text-[10px] font-bold px-2 py-0.5 rounded">
                  740 Br
                </span>
              </div>

              <div className="flex flex-col flex-1 min-w-0 pr-6">
                <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-[#F59E0B]">
                  <span className="flex items-center gap-1">📍 Bole Atlas • Kelsam Bldg</span>
                  <span>•</span>
                  <span className="text-amber-400">⭐ 4.9</span>
                </div>

                <h3 className="font-syne font-black text-lg text-white mt-0.5">
                  Burgueriza Lounge
                </h3>

                <p className="text-xs text-stone-300 font-body line-clamp-2 mt-1 leading-snug">
                  Gourmet Flame-Grilled Cheese Burgers — Handcrafted double beef patties with melted cheddar, jalapeño glaze, and seasoned waffle fries.
                </p>

                <button
                  type="button"
                  onClick={() => setModalPost(burguerizaSpot)}
                  className="mt-2 inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#A81D1D] hover:underline"
                >
                  <span>Inspect Spot</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          )}

          {/* COLLAPSIBLE NOMINATION FORM TOGGLE BUTTON */}
          <button
            type="button"
            onClick={() => setIsFormOpen(!isFormOpen)}
            className="mt-1 button-primary px-6 py-3 rounded-2xl text-xs font-label uppercase tracking-wider text-white font-bold flex items-center gap-2.5 shadow-lg cursor-pointer hover:scale-102 transition-transform"
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

      {/* COLLAPSIBLE NOMINATION FORM SECTION */}
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

      {/* REPOSITIONED HEADER DESCRIPTION ABOVE THE TWO ROWS */}
      <div className="w-full pt-8 pb-2 bg-[var(--bg-app)] border-b border-[var(--border-subtle)] text-center">
        <p className="text-xs sm:text-sm font-body text-[var(--text-secondary)] leading-relaxed max-w-xl mx-auto px-4">
          Explore verified restaurant reviews in two main auto side-scrolling rows. Filter by Restaurant Types or Food Craving!
        </p>
      </div>

      {/* TWO MAIN ROWS CONTENT AREA */}
      <main className="site-container py-8 flex flex-col gap-14 flex-1">
        
        {/* ROW 1: BY RESTAURANT & CUISINE TYPE */}
        <section className="flex flex-col gap-4">
          <div className="flex flex-col gap-3 border-b pb-4 border-[var(--border-subtle)]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Filter className="w-5 h-5 text-[#A81D1D]" />
                <h2 className="font-syne font-bold text-xl sm:text-3xl text-[var(--text-primary)]">
                  1. Restaurant &amp; Cuisine Types
                </h2>
              </div>
              <Link
                href="/reviews-map"
                className="text-xs font-mono font-bold text-[#F59E0B] hover:underline flex items-center gap-1"
              >
                <span>View Full Map</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Clickable Category Filter Buttons Above Row 1 */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-1">
              <button
                type="button"
                onClick={() => setActiveCuisineTab('all')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all shrink-0 cursor-pointer border ${
                  activeCuisineTab === 'all'
                    ? 'bg-[#A81D1D] text-white border-[#A81D1D] shadow-md'
                    : 'bg-[var(--bg-surface)] text-[var(--text-primary)] border-[var(--border-subtle)] hover:border-[#A81D1D]'
                }`}
              >
                All Cuisines ⭐
              </button>

              {CUISINE_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCuisineTab(cat.slug)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all shrink-0 cursor-pointer flex items-center gap-1.5 border ${
                    activeCuisineTab === cat.slug
                      ? 'bg-[#A81D1D] text-white border-[#A81D1D] shadow-md'
                      : 'bg-[var(--bg-surface)] text-[var(--text-primary)] border-[var(--border-subtle)] hover:border-[#A81D1D]'
                  }`}
                >
                  <span>{cat.emoji}</span>
                  <span>{cat.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Row 1 Home-Page Style Auto Side-Scrolling Marquee */}
          <AutoReviewMarquee
            posts={cuisineRowPosts}
            onSelectPost={(post) => setModalPost(post)}
            autoplayDuration={5000}
          />
        </section>

        {/* ROW 2: BY FOOD ITEM CATEGORY */}
        <section className="flex flex-col gap-4">
          <div className="flex flex-col gap-3 border-b pb-4 border-[var(--border-subtle)]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Utensils className="w-5 h-5 text-[#F59E0B]" />
                <h2 className="font-syne font-bold text-xl sm:text-3xl text-[var(--text-primary)]">
                  2. Food Item Categories
                </h2>
              </div>
              <Link
                href="/reviews-map"
                className="text-xs font-mono font-bold text-[#F59E0B] hover:underline flex items-center gap-1"
              >
                <span>View Full Map</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Clickable Food Item Filter Buttons Above Row 2 */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-1">
              {FOOD_ITEM_CATEGORIES.map((food) => (
                <button
                  key={food.id}
                  type="button"
                  onClick={() => setActiveFoodTab(food.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all shrink-0 cursor-pointer flex items-center gap-1.5 border ${
                    activeFoodTab === food.id
                      ? 'bg-[#F59E0B] text-zinc-950 border-[#F59E0B] shadow-md'
                      : 'bg-[var(--bg-surface)] text-[var(--text-primary)] border-[var(--border-subtle)] hover:border-[#F59E0B]'
                  }`}
                >
                  <span>{food.emoji}</span>
                  <span>{food.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Row 2 Home-Page Style Auto Side-Scrolling Marquee */}
          <AutoReviewMarquee
            posts={foodRowPosts}
            onSelectPost={(post) => setModalPost(post)}
            autoplayDuration={5000}
          />
        </section>

      </main>

      <Footer />
      <MobileBottomNav />

      {modalPost && (
        <PostDetailModal
          post={modalPost}
          onClose={() => setModalPost(null)}
        />
      )}
    </div>
  );
}
