'use client';

import React, { useState } from 'react';
import { Send, UtensilsCrossed, CheckCircle2, Sparkles } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MobileBottomNav from '../../components/layout/MobileBottomNav';
import { CUISINE_CATEGORIES } from '../../lib/categories';
import { useLanguage } from '../../context/LanguageContext';

export default function SuggestionsPage() {
  const { lang } = useLanguage();

  const [formData, setFormData] = useState({
    userName: '',
    contactPhone: '',
    restaurantName: '',
    neighborhood: 'Bole',
    category: 'Traditional',
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

  return (
    <div
      className="flex flex-col min-h-screen transition-colors duration-300 pb-20 sm:pb-0 max-w-full overflow-x-hidden"
      style={{ backgroundColor: 'var(--bg-app)', color: 'var(--text-primary)' }}
    >
      <Header />

      <main className="flex-1 site-container py-10 max-w-3xl mx-auto flex flex-col gap-8">
        
        {/* Header Title Banner */}
        <div className="flex flex-col items-center text-center gap-3 border-b pb-6" style={{ borderColor: 'var(--border-subtle)' }}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#B8422E]/10 text-[#B8422E] border border-[#B8422E]/20">
            <UtensilsCrossed className="w-4 h-4 text-[#B8422E]" />
            <span>{lang === 'AM' ? 'የምግብ ቤት ጥቆማ' : 'Community Nominations'}</span>
          </div>

          <h1 className="font-syne font-bold text-3xl sm:text-5xl text-[var(--text-primary)]">
            {lang === 'AM' ? 'አዲስ የምግብ ቤት ይጠቁሙ' : 'Suggest a Spot for Inspection'}
          </h1>

          <p className="text-xs sm:text-sm font-body text-[var(--text-secondary)] leading-relaxed max-w-xl">
            {lang === 'AM' 
              ? 'በአዲስ አበባ ውስጥ ያልታወቀ ወይም ድብቅ ቦታ ያውቃሉ? ይጠቁሙን፤ የአዲስ ፉዲዎች ቡድን ሄዶ ግምገማ ያደርጋል!' 
              : 'Know an undiscovered gem or top Kitfo joint in Addis? Nominate it for an official Addis Foodie inspection and award nomination!'}
          </p>
        </div>

        {/* Suggestion Form Container */}
        {submitted ? (
          <div className="p-8 rounded-2xl bg-[var(--bg-surface)] border border-emerald-500/30 text-center flex flex-col items-center gap-4 shadow-lg animate-fadeIn">
            <CheckCircle2 className="w-12 h-12 text-emerald-500" />
            <h2 className="font-syne font-bold text-2xl text-[var(--text-primary)]">
              {lang === 'AM' ? 'ጥቆማዎ በተሳካ ሁኔታ ተልኳል!' : 'Suggestion Submitted Successfully!'}
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-md leading-relaxed">
              {lang === 'AM'
                ? `ስለ ${formData.restaurantName} ጥቆማ ስለሰጡን እናመሰግናለን። የባለሙያ ቡድናችን ቦታውን ይጎበኛል።`
                : `Thank you for nominating ${formData.restaurantName}. Our culinary team will schedule an unannounced visit and ETB price audit.`}
            </p>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  userName: '',
                  contactPhone: '',
                  restaurantName: '',
                  neighborhood: 'Bole',
                  category: 'Traditional',
                  reason: '',
                });
              }}
              className="mt-2 button-primary px-6 py-2.5 rounded-xl text-xs font-label uppercase text-white font-bold"
            >
              {lang === 'AM' ? 'ሌላ ቦታ ይጠቁሙ' : 'Nominate Another Spot'}
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="p-6 sm:p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-md flex flex-col gap-6"
          >
            {errorMessage && (
              <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-500 text-xs font-bold font-mono">
                {errorMessage}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Your Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-label font-bold uppercase text-[var(--text-secondary)]">
                  {lang === 'AM' ? 'የእርስዎ ስም (ከተፈለገ)' : 'Your Name (Optional)'}
                </label>
                <input
                  type="text"
                  placeholder="e.g. Henok Tadesse"
                  value={formData.userName}
                  onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
                  className="px-4 py-2.5 rounded-xl bg-[var(--bg-app)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] focus:outline-none focus:border-[#B8422E]"
                />
              </div>

              {/* Phone / Handle */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-label font-bold uppercase text-[var(--text-secondary)]">
                  {lang === 'AM' ? 'ስልክ / ቴሌግራም (ከተፈለገ)' : 'Phone / Telegram Handle (Optional)'}
                </label>
                <input
                  type="text"
                  placeholder="e.g. +251911234567"
                  value={formData.contactPhone}
                  onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                  className="px-4 py-2.5 rounded-xl bg-[var(--bg-app)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] focus:outline-none focus:border-[#B8422E]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Restaurant Name */}
              <div className="sm:col-span-2 flex flex-col gap-1.5">
                <label className="text-xs font-label font-bold uppercase text-[var(--text-secondary)]">
                  {lang === 'AM' ? 'የምግብ ቤቱ ስም *' : 'Restaurant Name *'}
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Yado Gurage Kitfo, Sishu Burger"
                  value={formData.restaurantName}
                  onChange={(e) => setFormData({ ...formData, restaurantName: e.target.value })}
                  className="px-4 py-2.5 rounded-xl bg-[var(--bg-app)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] focus:outline-none focus:border-[#B8422E]"
                />
              </div>

              {/* Neighborhood */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-label font-bold uppercase text-[var(--text-secondary)]">
                  {lang === 'AM' ? 'ሰፈር' : 'Neighborhood'}
                </label>
                <select
                  value={formData.neighborhood}
                  onChange={(e) => setFormData({ ...formData, neighborhood: e.target.value })}
                  className="px-3 py-2.5 rounded-xl bg-[var(--bg-app)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] focus:outline-none focus:border-[#B8422E]"
                >
                  {['Bole', 'Kazanchis', 'Piassa', 'Sarbet', 'CMC', 'Old Airport', '22', 'Entoto', 'Merkato'].map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Category Select */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-label font-bold uppercase text-[var(--text-secondary)]">
                {lang === 'AM' ? 'የምግብ አይነት' : 'Cuisine Category'}
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="px-4 py-2.5 rounded-xl bg-[var(--bg-app)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] focus:outline-none focus:border-[#B8422E]"
              >
                {CUISINE_CATEGORIES.map((cat) => (
                  <option key={cat.id} value={cat.label}>
                    {cat.emoji} {cat.label} ({cat.labelAm})
                  </option>
                ))}
              </select>
            </div>

            {/* Reason / Notes */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-label font-bold uppercase text-[var(--text-secondary)]">
                {lang === 'AM' ? 'ለምን መጎብኘት አለበት?' : 'Why does this spot deserve an official review / award nomination?'}
              </label>
              <textarea
                rows={4}
                placeholder="Mention signature dish, price range, ambiance..."
                value={formData.reason}
                onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                className="px-4 py-2.5 rounded-xl bg-[var(--bg-app)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] focus:outline-none focus:border-[#B8422E] resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={submitting}
              className="button-primary w-full py-3.5 rounded-xl font-label text-xs font-bold uppercase tracking-wider text-white shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              {submitting ? (
                <span>Submitting...</span>
              ) : (
                <>
                  <Send className="w-4 h-4 text-white" />
                  <span>{lang === 'AM' ? 'ጥቆማውን ላክ' : 'Submit Restaurant Nomination'}</span>
                </>
              )}
            </button>
          </form>
        )}

      </main>

      <Footer />
      <MobileBottomNav />
    </div>
  );
}
