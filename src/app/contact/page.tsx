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
    <div className="flex flex-col min-h-screen bg-[#0B0F17] text-[#F8FAFC] transition-colors duration-300 pb-16 sm:pb-0 max-w-full overflow-x-hidden">
      <Header />

      <main className="flex-1 site-container py-8 sm:py-12 flex flex-col gap-12 relative z-10">
        
        {/* Breadcrumb */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#94A3B8] hover:text-[#F59E0B] transition-colors"
          >
            <ArrowRight className="w-4 h-4 rotate-180 text-[#F59E0B]" />
            <span>Back to Digital Headquarters</span>
          </Link>
        </div>

        {/* HERO SECTION */}
        <section className="bg-[#161E2E] text-white p-8 sm:p-14 rounded-3xl flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl border border-[#1F293D]">
          <div className="flex flex-col gap-4 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B0F17] border border-[#F59E0B]/30 text-xs font-mono font-bold uppercase tracking-widest text-[#F59E0B] w-fit">
              <MessageSquare className="w-4 h-4 text-[#F59E0B]" />
              <span>Get In Touch</span>
            </div>

            <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-[#F8FAFC] tracking-tight leading-none">
              Contact <span className="text-[#F59E0B]">Addis Foodies</span>
            </h1>

            <p className="text-[#94A3B8] font-medium text-sm sm:text-lg leading-relaxed">
              Have questions, feedback, or want to invite us to review your restaurant? Reach out directly to our editorial &amp; media team.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-16 h-16 rounded-2xl bg-[#EF4444] flex items-center justify-center text-white shadow-xl">
              <Mail className="w-8 h-8" />
            </div>
          </div>
        </section>

        {/* CONTACT GRID (Form & Office Details) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7 bg-[#161E2E] p-6 sm:p-10 rounded-3xl border border-[#1F293D] shadow-xs flex flex-col gap-6">
            <div>
              <h2 className="font-display font-black text-2xl text-[#F8FAFC]">
                Send Us a Message
              </h2>
              <p className="text-xs sm:text-sm text-[#94A3B8] font-medium pt-1">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
            </div>

            {submitted ? (
              <div className="bg-emerald-950/80 border border-emerald-500/60 p-6 rounded-2xl text-center flex flex-col items-center gap-3 text-emerald-300">
                <CheckCircle className="w-10 h-10 text-emerald-400" />
                <h3 className="font-display font-black text-lg text-white">Message Sent Successfully!</h3>
                <p className="text-xs text-emerald-200 font-medium max-w-md">
                  Thank you for reaching out to Addis Foodies. We have received your inquiry and will contact you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 px-5 py-2 rounded-xl bg-[#EF4444] text-white text-xs font-bold shadow-md hover:bg-[#DC2626]"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-mono font-bold uppercase text-[#F59E0B]">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Abebe Bikila"
                      className="bg-[#0B0F17] border border-[#1F293D] rounded-xl px-4 py-3 text-xs sm:text-sm text-[#F8FAFC] focus:outline-none focus:border-[#F59E0B] font-medium"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-mono font-bold uppercase text-[#F59E0B]">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. abebe@example.com"
                      className="bg-[#0B0F17] border border-[#1F293D] rounded-xl px-4 py-3 text-xs sm:text-sm text-[#F8FAFC] focus:outline-none focus:border-[#F59E0B] font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-mono font-bold uppercase text-[#F59E0B]">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 0911 00 00 00"
                      className="bg-[#0B0F17] border border-[#1F293D] rounded-xl px-4 py-3 text-xs sm:text-sm text-[#F8FAFC] focus:outline-none focus:border-[#F59E0B] font-medium"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-mono font-bold uppercase text-[#F59E0B]">Topic</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="bg-[#0B0F17] border border-[#1F293D] rounded-xl px-4 py-3 text-xs sm:text-sm text-[#F8FAFC] focus:outline-none focus:border-[#F59E0B] font-medium"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Restaurant Review Request">Restaurant Review Request</option>
                      <option value="Event Partnership & Festival">Event Partnership &amp; Festival</option>
                      <option value="Commercial Advertising">Commercial Advertising</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-mono font-bold uppercase text-[#F59E0B]">Message *</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your inquiry or restaurant spot..."
                    className="bg-[#0B0F17] border border-[#1F293D] rounded-xl p-4 text-xs sm:text-sm text-[#F8FAFC] focus:outline-none focus:border-[#F59E0B] font-medium"
                  />
                </div>

                <button
                  type="submit"
                  className="touch-target bg-[#EF4444] hover:bg-[#DC2626] text-white font-extrabold text-xs uppercase tracking-wider py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Office & Media Info */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            <div className="bg-[#161E2E] text-white p-6 sm:p-8 rounded-3xl border border-[#1F293D] shadow-xl flex flex-col gap-6">
              <h3 className="font-display font-black text-xl border-b border-[#1F293D] pb-3 text-[#F8FAFC]">
                Media HQ Information
              </h3>

              <div className="flex flex-col gap-4 text-xs sm:text-sm font-medium">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#0B0F17] text-[#EF4444] flex items-center justify-center shrink-0 border border-[#1F293D]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">Headquarters:</span>
                    <span className="text-[#94A3B8]">Bole Atlas, Near Edna Mall, Addis Ababa, Ethiopia</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#0B0F17] text-[#F59E0B] flex items-center justify-center shrink-0 border border-[#1F293D]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">Hotline &amp; Reservations:</span>
                    <span className="text-[#94A3B8]">0966-55-00-00 / 0911-23-92-70</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#0B0F17] text-[#F59E0B] flex items-center justify-center shrink-0 border border-[#1F293D]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">Official Email:</span>
                    <span className="text-[#94A3B8]">contact@addisfoodies.com</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#0B0F17] text-sky-400 flex items-center justify-center shrink-0 border border-[#1F293D]">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">Working Hours:</span>
                    <span className="text-[#94A3B8]">Monday - Saturday (9:00 AM - 7:00 PM EAT)</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[#1F293D] flex items-center justify-between text-xs font-mono text-[#94A3B8]">
                <span>Telegram: @AddisFoodies</span>
                <span className="text-[#F59E0B] font-bold">@addisfoodiess</span>
              </div>
            </div>

            {/* Quick Partnership Callout */}
            <div className="bg-[#161E2E] border border-[#1F293D] text-white p-6 rounded-3xl shadow-lg flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#F59E0B]" />
                <h4 className="font-display font-black text-lg text-[#F8FAFC]">Restaurant Owners</h4>
              </div>
              <p className="text-xs font-medium text-[#94A3B8] leading-relaxed">
                Want to host a festival booth or schedule an editorial food review? Explore our commercial portal for rates.
              </p>
              <Link
                href="/collaborate"
                className="touch-target text-xs font-black bg-[#EF4444] hover:bg-[#DC2626] text-white px-4 py-2.5 rounded-xl w-fit flex items-center gap-1.5 transition-colors shadow-md"
              >
                <span>Explore Commercial Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
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
