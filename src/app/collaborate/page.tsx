'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Handshake, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle,
  ArrowRight,
  Send,
  MessageSquare
} from 'lucide-react';
import { FaInstagram, FaTelegramPlane, FaTiktok, FaYoutube, FaFacebookF } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MobileBottomNav from '../../components/layout/MobileBottomNav';

export default function CollaboratePage() {
  const [businessName, setBusinessName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [inquiryType, setInquiryType] = useState('Restaurant Food Review');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (businessName && (contactPhone || emailAddress)) {
      setSubmitted(true);
    }
  };

  return (
    <div
      className="flex flex-col min-h-screen transition-colors duration-300 pb-16 sm:pb-0 max-w-full overflow-x-hidden"
      style={{ backgroundColor: 'var(--bg-app)', color: 'var(--text-primary)' }}
    >
      <Header />

      <main className="flex-1 site-container py-8 sm:py-12 flex flex-col gap-12">
        
        {/* Breadcrumb */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-label uppercase text-[var(--text-secondary)] hover:text-[#B8422E] transition-colors"
          >
            <ArrowRight className="w-4 h-4 rotate-180 text-[#B8422E]" />
            <span>Back to Discovery Feed</span>
          </Link>
        </div>

        {/* Contact Us Hero Banner */}
        <section className="bg-[#1A1C1E] text-white p-8 sm:p-12 rounded-lg flex flex-col items-center text-center gap-4 shadow-xs border border-[var(--border-subtle)]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-white/10 border border-white/20 text-xs font-label uppercase tracking-widest text-[#B8422E]">
            <Handshake className="w-4 h-4 text-[#B8422E]" />
            <span>Work With Us &amp; Contact</span>
          </div>
          <h1 className="font-display font-medium text-3xl sm:text-5xl tracking-tight text-white">
            Contact <span className="text-[#B8422E]">Addis Foodies</span>
          </h1>
          <p className="text-slate-300 font-body text-sm sm:text-base leading-relaxed max-w-xl">
            Have a restaurant review request, festival collaboration, or commercial media inquiry? Get in touch directly with our team in Addis Ababa.
          </p>
        </section>

        {/* 1. PROFESSIONAL CONTACT CHANNELS & SOCIAL MEDIA ICONS */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Phone Card */}
          <div className="heritage-card flex flex-col gap-3">
            <div className="w-10 h-10 rounded-md bg-[#B8422E]/10 border border-[#B8422E]/30 flex items-center justify-center text-[#B8422E]">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-label uppercase tracking-wider text-slate-500">Direct Hotline</span>
              <a href="tel:0966550000" className="block text-lg font-label font-bold text-[#1A1C1E] hover:text-[#B8422E] transition-colors">
                0966-55-00-00
              </a>
            </div>
            <p className="text-xs font-body text-slate-500">
              Mon – Sat (8:30 AM – 6:30 PM EAT)
            </p>
          </div>

          {/* Email Card */}
          <div className="heritage-card flex flex-col gap-3">
            <div className="w-10 h-10 rounded-md bg-[#B8422E]/10 border border-[#B8422E]/30 flex items-center justify-center text-[#B8422E]">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-label uppercase tracking-wider text-slate-500">Official Email</span>
              <a href="mailto:contact@addisfoodie.com" className="block text-base font-label font-bold text-[#1A1C1E] hover:text-[#B8422E] transition-colors truncate">
                contact@addisfoodie.com
              </a>
            </div>
            <p className="text-xs font-body text-slate-500">
              Media, Partnerships &amp; General Inquiries
            </p>
          </div>

          {/* Location Card */}
          <div className="heritage-card flex flex-col gap-3">
            <div className="w-10 h-10 rounded-md bg-[#B8422E]/10 border border-[#B8422E]/30 flex items-center justify-center text-[#B8422E]">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-label uppercase tracking-wider text-slate-500">Addis Ababa HQ</span>
              <span className="block text-sm font-label font-bold text-[#1A1C1E]">
                Bole Medhaniallem
              </span>
            </div>
            <p className="text-xs font-body text-slate-500">
              Bole Atlas Commercial Area, Addis Ababa
            </p>
          </div>

        </section>

        {/* 2. OFFICIAL SOCIAL MEDIA CHANNELS BAR */}
        <section className="p-6 rounded-lg border bg-[#1A1C1E] text-white flex flex-col md:flex-row items-center justify-between gap-6 border-white/10">
          <div className="flex items-center gap-3">
            <MessageSquare className="w-6 h-6 text-[#B8422E]" />
            <div className="flex flex-col">
              <h3 className="font-display font-medium text-lg text-white">Connect Across Social Channels</h3>
              <p className="text-xs font-body text-slate-300">Join 150,000+ food lovers following @addis.foodie</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://www.instagram.com/p/CK8TFBSngx8/?igshid=1pjzbuzr55jv8"
              target="_blank" rel="noreferrer"
              className="px-4 py-2 rounded-md bg-white/10 hover:bg-[#B8422E] border border-white/20 text-xs font-label flex items-center gap-2 transition-all"
            >
              <FaInstagram className="w-4 h-4 text-pink-400" />
              <span>Instagram</span>
            </a>

            <a
              href="https://t.me/addisfoodies"
              target="_blank" rel="noreferrer"
              className="px-4 py-2 rounded-md bg-white/10 hover:bg-sky-500 border border-white/20 text-xs font-label flex items-center gap-2 transition-all"
            >
              <FaTelegramPlane className="w-4 h-4 text-sky-400" />
              <span>Telegram</span>
            </a>

            <a
              href="https://www.tiktok.com"
              target="_blank" rel="noreferrer"
              className="px-4 py-2 rounded-md bg-white/10 hover:bg-black border border-white/20 text-xs font-label flex items-center gap-2 transition-all"
            >
              <FaTiktok className="w-4 h-4 text-white" />
              <span>TikTok</span>
            </a>

            <a
              href="https://www.youtube.com"
              target="_blank" rel="noreferrer"
              className="px-4 py-2 rounded-md bg-white/10 hover:bg-red-600 border border-white/20 text-xs font-label flex items-center gap-2 transition-all"
            >
              <FaYoutube className="w-4 h-4 text-red-400" />
              <span>YouTube</span>
            </a>

            <a
              href="https://facebook.com"
              target="_blank" rel="noreferrer"
              className="px-4 py-2 rounded-md bg-white/10 hover:bg-blue-600 border border-white/20 text-xs font-label flex items-center gap-2 transition-all"
            >
              <FaFacebookF className="w-4 h-4 text-blue-400" />
              <span>Facebook</span>
            </a>
          </div>
        </section>

        {/* 3. SUBMIT COMMERCIAL / GENERAL INQUIRY FORM */}
        <section
          className="p-8 sm:p-10 rounded-lg border shadow-xs flex flex-col gap-6"
          style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}
        >
          <div className="flex items-center gap-2 border-b pb-4" style={{ borderColor: 'var(--border-subtle)' }}>
            <Send className="w-5 h-5 text-[#B8422E]" />
            <h3 className="font-display font-medium text-2xl" style={{ color: 'var(--text-primary)' }}>
              Submit Contact &amp; Business Inquiry
            </h3>
          </div>

          {submitted ? (
            <div className="p-6 rounded-md bg-emerald-500/10 border border-emerald-500/40 text-emerald-800 text-center flex flex-col gap-2">
              <CheckCircle className="w-8 h-8 text-emerald-600 mx-auto" />
              <h4 className="font-display font-medium text-lg">Inquiry Received!</h4>
              <p className="text-xs font-body text-emerald-700">
                Thank you for reaching out. Our team will contact you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-label uppercase tracking-wider text-[#B8422E]">
                  Your Name / Business Name
                </label>
                <input
                  type="text"
                  required
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="e.g. Kategna Restaurant / Abel Tesfaye"
                  className="w-full border rounded-md px-4 py-3 text-xs sm:text-sm font-medium focus:outline-none"
                  style={{ backgroundColor: 'var(--bg-app)', color: 'var(--text-primary)', borderColor: 'var(--border-subtle)' }}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-label uppercase tracking-wider text-[#B8422E]">
                  Contact Phone Number
                </label>
                <input
                  type="tel"
                  required
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                  placeholder="e.g. 0911-00-00-00"
                  className="w-full border rounded-md px-4 py-3 text-xs sm:text-sm font-medium focus:outline-none"
                  style={{ backgroundColor: 'var(--bg-app)', color: 'var(--text-primary)', borderColor: 'var(--border-subtle)' }}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-label uppercase tracking-wider text-[#B8422E]">
                  Email Address
                </label>
                <input
                  type="email"
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
                  placeholder="e.g. name@example.com"
                  className="w-full border rounded-md px-4 py-3 text-xs sm:text-sm font-medium focus:outline-none"
                  style={{ backgroundColor: 'var(--bg-app)', color: 'var(--text-primary)', borderColor: 'var(--border-subtle)' }}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-label uppercase tracking-wider text-[#B8422E]">
                  Inquiry Topic
                </label>
                <select
                  value={inquiryType}
                  onChange={(e) => setInquiryType(e.target.value)}
                  className="w-full border rounded-md px-4 py-3 text-xs sm:text-sm font-medium focus:outline-none"
                  style={{ backgroundColor: 'var(--bg-app)', color: 'var(--text-primary)', borderColor: 'var(--border-subtle)' }}
                >
                  <option value="Restaurant Food Review">Restaurant Food Review Inspection</option>
                  <option value="Festival Collaboration">Festival &amp; Event Collaboration</option>
                  <option value="Delivery Onboarding">@addis.foodie.delivery Courier Listing</option>
                  <option value="Catering Service">Event Catering &amp; Banquet Services</option>
                  <option value="General Inquiry">General Question / Feedback</option>
                </select>
              </div>

              <div className="sm:col-span-2 flex flex-col gap-2">
                <label className="text-xs font-label uppercase tracking-wider text-[#B8422E]">
                  Message Details
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your restaurant location (Bole, Kazanchis, Piassa) or project details."
                  className="w-full border rounded-md px-4 py-3 text-xs sm:text-sm font-medium focus:outline-none"
                  style={{ backgroundColor: 'var(--bg-app)', color: 'var(--text-primary)', borderColor: 'var(--border-subtle)' }}
                />
              </div>

              <div className="sm:col-span-2 pt-2">
                <button
                  type="submit"
                  className="button-primary w-full py-3.5 text-xs uppercase tracking-wider rounded-md shadow-xs cursor-pointer flex items-center justify-center gap-2 hover:scale-[1.01]"
                >
                  <span>Submit Inquiry</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </form>
          )}
        </section>

      </main>

      <Footer />
      <MobileBottomNav />
    </div>
  );
}
