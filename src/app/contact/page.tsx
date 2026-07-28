'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageSquare, 
  CheckCircle, 
  ArrowRight,
  Clock,
  Sparkles,
  Building2
} from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MobileBottomNav from '../../components/layout/MobileBottomNav';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5] text-zinc-900 transition-colors duration-300 pb-16 sm:pb-0 max-w-full overflow-x-hidden">
      <Header />

      <main className="flex-1 site-container py-8 sm:py-12 flex flex-col gap-12 relative z-10">
        
        {/* Breadcrumb */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-zinc-500 hover:text-[#E53935] transition-colors"
          >
            <ArrowRight className="w-4 h-4 rotate-180 text-[#E53935]" />
            <span>Back to Digital Headquarters</span>
          </Link>
        </div>

        {/* HERO SECTION */}
        <section className="bg-[#111827] text-white p-8 sm:p-14 rounded-3xl flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl border border-white/10">
          <div className="flex flex-col gap-4 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E53935]/20 border border-[#E53935]/40 text-xs font-mono font-bold uppercase tracking-widest text-[#FF8C00] w-fit">
              <MessageSquare className="w-4 h-4 text-[#FF8C00]" />
              <span>Get In Touch</span>
            </div>

            <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-none">
              Contact <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF8C00] via-amber-300 to-[#E53935]">Addis Foodies</span>
            </h1>

            <p className="text-stone-300 font-medium text-sm sm:text-lg leading-relaxed">
              Have questions, feedback, or want to invite us to review your restaurant? Reach out directly to our editorial & media team.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-16 h-16 rounded-2xl bg-[#E53935] flex items-center justify-center text-white shadow-xl">
              <Mail className="w-8 h-8" />
            </div>
          </div>
        </section>

        {/* CONTACT GRID (Form & Office Details) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-stone-200 shadow-xs flex flex-col gap-6">
            <div>
              <h2 className="font-display font-black text-2xl text-zinc-950">
                Send Us a Message
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 font-medium pt-1">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl text-center flex flex-col items-center gap-3">
                <CheckCircle className="w-10 h-10 text-emerald-600" />
                <h3 className="font-display font-black text-lg text-emerald-950">Message Sent Successfully!</h3>
                <p className="text-xs text-emerald-800 font-medium max-w-md">
                  Thank you for reaching out to Addis Foodies. We have received your inquiry and will contact you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 px-5 py-2 rounded-xl bg-[#E53935] text-white text-xs font-bold shadow-md hover:bg-[#B71C1C]"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-mono font-bold uppercase text-stone-700">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Abebe Bikila"
                      className="bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-zinc-950 focus:outline-none focus:border-[#E53935] font-medium"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-mono font-bold uppercase text-stone-700">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. abebe@example.com"
                      className="bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-zinc-950 focus:outline-none focus:border-[#E53935] font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-mono font-bold uppercase text-stone-700">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 0911 00 00 00"
                      className="bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-zinc-950 focus:outline-none focus:border-[#E53935] font-medium"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-mono font-bold uppercase text-stone-700">Topic</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-zinc-950 focus:outline-none focus:border-[#E53935] font-medium"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Restaurant Review Request">Restaurant Review Request</option>
                      <option value="Event Partnership & Festival">Event Partnership & Festival</option>
                      <option value="Commercial Advertising">Commercial Advertising</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-mono font-bold uppercase text-stone-700">Message *</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your inquiry or restaurant spot..."
                    className="bg-stone-50 border border-stone-200 rounded-xl p-4 text-xs sm:text-sm text-zinc-950 focus:outline-none focus:border-[#E53935] font-medium"
                  />
                </div>

                <button
                  type="submit"
                  className="touch-target bg-[#E53935] hover:bg-[#B71C1C] text-white font-extrabold text-xs uppercase tracking-wider py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Office & Media Info */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            <div className="bg-[#111827] text-white p-6 sm:p-8 rounded-3xl border border-white/10 shadow-xl flex flex-col gap-6">
              <h3 className="font-display font-black text-xl border-b border-white/10 pb-3">
                Media HQ Information
              </h3>

              <div className="flex flex-col gap-4 text-xs sm:text-sm font-medium">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#E53935]/20 text-[#E53935] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">Headquarters:</span>
                    <span className="text-stone-300">Bole Atlas, Near Edna Mall, Addis Ababa, Ethiopia</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FF8C00]/20 text-[#FF8C00] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">Hotline & Reservations:</span>
                    <span className="text-stone-300">0966-55-00-00 / 0911-23-92-70</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">Official Email:</span>
                    <span className="text-stone-300">contact@addisfoodies.com</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">Working Hours:</span>
                    <span className="text-stone-300">Monday - Saturday (9:00 AM - 7:00 PM EAT)</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-stone-400">
                <span>Telegram: @AddisFoodies</span>
                <span className="text-[#FF8C00] font-bold">@addisfoodiess</span>
              </div>
            </div>

            {/* Quick Partnership Callout */}
            <div className="bg-gradient-to-r from-[#E53935] to-[#FF8C00] text-white p-6 rounded-3xl shadow-lg flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-amber-200" />
                <h4 className="font-display font-black text-lg">Restaurant Owners</h4>
              </div>
              <p className="text-xs font-medium text-amber-50 leading-relaxed">
                Want to host a festival booth or schedule an editorial food review? Explore our commercial portal for rates.
              </p>
              <Link
                href="/collaborate"
                className="touch-target text-xs font-black bg-[#111827] text-white px-4 py-2.5 rounded-xl w-fit flex items-center gap-1.5 hover:bg-black transition-colors"
              >
                <span>Explore Commercial Services</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FF8C00]" />
              </Link>
            </div>

          </div>

        </div>

      </main>

      <Footer />
      <MobileBottomNav />
    </div>
  );
}
