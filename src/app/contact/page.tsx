'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Send, CheckCircle, ArrowRight } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MobileBottomNav from '../../components/layout/MobileBottomNav';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="flex flex-col min-h-screen transition-colors duration-300 pb-16 sm:pb-0 max-w-full overflow-x-hidden"
      style={{ backgroundColor: 'var(--bg-app)', color: 'var(--text-primary)' }}
    >
      <Header />

      <main className="flex-1 site-container py-8 sm:py-12 flex flex-col gap-10">
        
        {/* Breadcrumb */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-500 hover:text-amber-500 transition-colors"
          >
            <ArrowRight className="w-4 h-4 rotate-180" style={{ color: 'var(--accent-gold)' }} />
            <span>Back to Discovery Feed</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="flex flex-col gap-2 border-b pb-4" style={{ borderColor: 'var(--border-subtle)' }}>
          <h1 className="font-display font-normal text-3xl sm:text-5xl" style={{ color: 'var(--text-primary)' }}>
            Contact Addis Foodies
          </h1>
          <p className="text-xs sm:text-sm font-body" style={{ color: 'var(--text-secondary)' }}>
            Get in touch with our editorial curation team or customer support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Form */}
          <div
            className="lg:col-span-7 p-6 sm:p-10 rounded-3xl border shadow-card flex flex-col gap-6"
            style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}
          >
            <h2 className="font-display font-bold text-xl" style={{ color: 'var(--text-primary)' }}>
              Send Message
            </h2>

            {submitted ? (
              <div className="p-8 bg-emerald-950/80 border border-emerald-500/60 text-emerald-300 rounded-2xl text-center flex flex-col gap-3">
                <CheckCircle className="w-10 h-10 text-emerald-400 mx-auto" />
                <h3 className="font-display font-bold text-xl text-white">Message Sent!</h3>
                <p className="text-xs font-medium text-emerald-200">
                  Thank you for reaching out. We will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider" style={{ color: 'var(--accent-gold)' }}>Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name..."
                    className="w-full border rounded-xl px-4 py-3 text-xs sm:text-sm font-medium focus:outline-none"
                    style={{ backgroundColor: 'var(--bg-app)', color: 'var(--text-primary)', borderColor: 'var(--border-subtle)' }}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider" style={{ color: 'var(--accent-gold)' }}>Phone / Email</label>
                  <input
                    type="text"
                    required
                    placeholder="0911-00-00-00 or name@domain.com"
                    className="w-full border rounded-xl px-4 py-3 text-xs sm:text-sm font-medium focus:outline-none"
                    style={{ backgroundColor: 'var(--bg-app)', color: 'var(--text-primary)', borderColor: 'var(--border-subtle)' }}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider" style={{ color: 'var(--accent-gold)' }}>Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Write your message here..."
                    className="w-full border rounded-xl px-4 py-3 text-xs sm:text-sm font-medium focus:outline-none"
                    style={{ backgroundColor: 'var(--bg-app)', color: 'var(--text-primary)', borderColor: 'var(--border-subtle)' }}
                  />
                </div>

                <button
                  type="submit"
                  className="touch-target w-full py-4 text-slate-950 font-extrabold text-xs uppercase tracking-wider rounded-full transition-all shadow-md cursor-pointer flex items-center justify-center gap-2 hover:scale-105"
                  style={{ backgroundColor: 'var(--accent-gold)' }}
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

          {/* Direct Details */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div
              className="p-6 sm:p-8 rounded-3xl border shadow-card flex flex-col gap-6"
              style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}
            >
              <h3 className="font-display font-bold text-xl" style={{ color: 'var(--text-primary)' }}>
                Direct Hotline &amp; Office
              </h3>

              <div className="flex flex-col gap-4 text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block" style={{ color: 'var(--text-primary)' }}>Hotline Call Center</span>
                    <a href="tel:0966550000" className="text-sm font-mono font-bold hover:underline" style={{ color: 'var(--accent-gold)' }}>0966-55-00-00</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block" style={{ color: 'var(--text-primary)' }}>Email Inquiry</span>
                    <span className="text-xs font-mono">contact@addisfoodie.com</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block" style={{ color: 'var(--text-primary)' }}>Addis Ababa Office</span>
                    <span>Bole Medhaniallem, Bole Atlas Commercial Area</span>
                  </div>
                </div>
              </div>

              {/* Official Social Media Channel Links */}
              <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-col gap-3">
                <span className="font-display font-bold text-sm uppercase tracking-wider text-[var(--text-primary)]">
                  Official Social Channels
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs font-label font-bold">
                  <a 
                    href="https://t.me/addisfoodies" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2.5 rounded-lg bg-sky-500/10 text-sky-500 hover:bg-sky-500/20 border border-sky-500/20 transition-all"
                  >
                    <Send className="w-4 h-4 text-sky-400" />
                    <span>@addisfoodies</span>
                  </a>
                  <a 
                    href="https://instagram.com/addis.foodie" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2.5 rounded-lg bg-purple-500/10 text-purple-500 hover:bg-purple-500/20 border border-purple-500/20 transition-all"
                  >
                    <span className="w-4 h-4 rounded-full bg-purple-500 flex items-center justify-center text-[10px] text-white font-black">IG</span>
                    <span>@addis.foodie</span>
                  </a>
                  <a 
                    href="https://tiktok.com/@addis.foodie" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2.5 rounded-lg bg-pink-500/10 text-pink-500 hover:bg-pink-500/20 border border-pink-500/20 transition-all"
                  >
                    <span className="w-4 h-4 rounded-full bg-pink-500 flex items-center justify-center text-[10px] text-white font-black">TT</span>
                    <span>@addis.foodie</span>
                  </a>
                  <a 
                    href="https://youtube.com/@addisfoodie" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2.5 rounded-lg bg-red-500/10 text-red-500 hover:bg-red-500/20 border border-red-500/20 transition-all"
                  >
                    <span className="w-4 h-4 rounded-full bg-red-500 flex items-center justify-center text-[10px] text-white font-black">YT</span>
                    <span>Addis Foodie</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </main>

      <Footer />
      <MobileBottomNav />
    </div>
  );
}
