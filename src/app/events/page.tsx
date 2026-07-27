'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Ticket, 
  UtensilsCrossed, 
  Music, 
  Phone, 
  Sparkles, 
  ArrowRight,
  ChevronDown,
  Award,
  Users,
  CheckCircle,
  HelpCircle,
  Camera
} from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MobileBottomNav from '../../components/layout/MobileBottomNav';

// Countdown calculation to Kitfo Fest 2026
function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 42,
    hours: 18,
    minutes: 35,
    seconds: 20,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-md w-full my-2">
      {[
        { label: 'DAYS', value: timeLeft.days },
        { label: 'HOURS', value: timeLeft.hours },
        { label: 'MINS', value: timeLeft.minutes },
        { label: 'SECS', value: timeLeft.seconds },
      ].map((item, i) => (
        <div
          key={i}
          className="bg-[#1A100C]/90 backdrop-blur-md border border-[#E53935]/40 rounded-2xl p-2.5 sm:p-3 text-center flex flex-col items-center justify-center shadow-lg"
        >
          <span className="font-syne font-black text-2xl sm:text-4xl text-amber-300 font-mono">
            {String(item.value).padStart(2, '0')}
          </span>
          <span className="text-[9px] sm:text-[10px] font-mono font-bold text-zinc-400 tracking-wider">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}

// Additional Festivals Roster
const festivalsLineup = [
  {
    id: 'kitfo-fest-2026',
    title: 'KITFO FEST 2026 (Edition #5)',
    dates: 'Oct 03 - Oct 05, 2026',
    location: 'Monarch Rooftop • Piassa',
    status: 'FEATURED MEGA HUB',
    image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14e8?auto=format&fit=crop&w=1000&q=80',
    description: "Ethiopia's flagship Kitfo celebration featuring 15+ premier Kitfo spots, Gurage cultural dancers, and craft Areke tasting.",
  },
  {
    id: 'burger-battle',
    title: 'BURGER BATTLE ADDIS 2026',
    dates: 'Nov 14 - Nov 16, 2026',
    location: 'Bole Medhaniallem Park',
    status: 'UPCOMING',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=80',
    description: 'Top 12 gourmet burger joints compete for the Crown of Addis Ababa. Live DJ sets and craft beer pairings.',
  },
  {
    id: 'coffee-week',
    title: 'ETHIOPIAN COFFEE WEEK & CUPPING',
    dates: 'Dec 05 - Dec 07, 2026',
    location: 'Ghion Hotel Gardens • Kazanchis',
    status: 'UPCOMING',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=80',
    description: 'Celebrate Yirgacheffe, Sidama, and Harar beans with master baristas, latte art battles, and traditional Buna ceremonies.',
  },
  {
    id: 'pizza-fest',
    title: 'PIZZA & WINE FESTIVAL',
    dates: 'Jan 20 - Jan 22, 2027',
    location: 'Sarbet Golf Club',
    status: 'UPCOMING',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1000&q=80',
    description: 'Wood-fired sourdough pizzas, artisanal Ethiopian Rift Valley wines, and live jazz performances.',
  },
];

export default function EventsPage() {
  const [reserved, setReserved] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    { q: 'Is there an entrance fee for Kitfo Fest 2026?', a: 'General admission is completely FREE! VIP tasting passes with complimentary drinks can be reserved online.' },
    { q: 'What food will be available?', a: 'Over 15 varieties of Kitfo (Tire, Lebleb, Yebessela), Tibs, Ayib, Gomen, Tej, and local craft beverages.' },
    { q: 'Where is the venue located?', a: 'Monarch Hotel Rooftop in Piassa, opposite Tewdros Square and Friendship Park.' },
    { q: 'Is it family friendly?', a: 'Yes! Family hours are from 11:00 AM to 6:00 PM with children games, followed by evening cultural music.' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5] dark:bg-[#120907] text-zinc-900 dark:text-[#FFF8F6] transition-colors duration-300 selection:bg-[#E53935]/20 selection:text-[#E53935] pb-16 sm:pb-0 max-w-full overflow-x-hidden">
      <Header />

      <main className="flex-1 site-container py-8 sm:py-12 flex flex-col gap-12">
        
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

        {/* 1. KITFO FEST 2026 MEGA HERO HUB */}
        <section className="relative w-full rounded-3xl overflow-hidden bg-[#111827] border-2 border-[#E53935] text-white shadow-2xl p-6 sm:p-12 flex flex-col gap-8">
          
          {/* Background Photography & Overlay */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <Image
              src="https://images.unsplash.com/photo-1541518763669-27fef04b14e8?auto=format&fit=crop&w=2000&q=80"
              alt="Kitfo Fest 2026 Mega Showcase"
              fill
              className="object-cover opacity-25 brightness-50"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#111827] via-[#111827]/90 to-transparent" />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            
            <div className="flex flex-col gap-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E53935] text-white font-mono font-black text-xs uppercase tracking-widest w-fit shadow-md">
                <Ticket className="w-4 h-4 text-amber-300 animate-bounce" />
                <span>OFFICIAL FLAGSHIP FESTIVAL 2026</span>
              </div>

              <h1 className="font-display font-black text-4xl sm:text-6xl tracking-tight leading-none text-white">
                KITFO FEST 2026
              </h1>

              <div className="flex items-center gap-2 text-[#FF8C00] font-display font-bold text-lg">
                <MapPin className="w-5 h-5 text-[#E53935]" />
                <span>Monarch Hotel Rooftop • Piassa, Tewdros Square</span>
              </div>

              <p className="text-stone-300 font-medium text-sm sm:text-base leading-relaxed">
                Join 10,000+ food lovers for Ethiopia's largest celebration of Kitfo, authentic Habesha spices, craft Areke, and live cultural entertainment.
              </p>

              {/* Countdown Timer */}
              <div className="pt-2">
                <span className="text-xs font-mono font-bold text-[#FF8C00] uppercase tracking-wider block mb-1">
                  ⏳ EVENT COUNTDOWN TIMER:
                </span>
                <CountdownTimer />
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => setReserved(true)}
                  className="touch-target bg-[#E53935] hover:bg-[#B71C1C] text-white font-extrabold text-sm py-4 px-8 rounded-xl shadow-xl transition-all hover:scale-105 flex items-center gap-2 focus-ring cursor-pointer"
                >
                  <Ticket className="w-4 h-4 text-amber-200" />
                  <span>Reserve Free Pass</span>
                </button>

                <a
                  href="tel:0966550000"
                  className="touch-target bg-white/10 hover:bg-white/20 text-white font-bold text-sm py-4 px-6 rounded-xl border border-white/20 transition-all flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#FF8C00]" />
                  <span>Hotline: 0966-55-00-00</span>
                </a>
              </div>

              {reserved && (
                <div className="bg-emerald-950/90 border border-emerald-500/60 p-4 rounded-2xl text-emerald-300 text-xs font-bold font-mono flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                  <span>Pass Reserved! Confirmation SMS sent to your device. See you at Monarch Rooftop!</span>
                </div>
              )}
            </div>

            {/* Event Key Details Card */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 flex flex-col gap-4 max-w-md w-full shadow-2xl">
              <h3 className="font-display font-bold text-lg text-white border-b border-white/10 pb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#FF8C00]" />
                <span>Festival Schedule & Details</span>
              </h3>

              <div className="flex flex-col gap-3 text-xs font-medium text-stone-300">
                <div className="flex items-start gap-2.5">
                  <Calendar className="w-4 h-4 text-[#FF8C00] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Dates & Season:</span>
                    <span>Meskerem 19 & 20 | Sep 30 & Oct 01</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-[#FF8C00] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Operating Hours:</span>
                    <span>11:00 AM till 11:00 PM Daily</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <UtensilsCrossed className="w-4 h-4 text-[#FF8C00] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Featured Vendors:</span>
                    <span>Kategna, Yod Abyssinia, Monarch Rooftop, Fin Fine</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Music className="w-4 h-4 text-[#FF8C00] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Live Entertainment:</span>
                    <span>Gurage Cultural Dancers, Masinko Solo, DJ Lineup</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs font-mono font-bold text-[#FF8C00]">
                <span>Entrance: FREE</span>
                <span>Organized by @addisfoodiess</span>
              </div>
            </div>

          </div>
        </section>

        {/* 2. FAQ ACCORDION FOR KITFO FEST */}
        <section className="flex flex-col gap-6 bg-white p-8 rounded-3xl border border-stone-200/80 shadow-xs">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-[#E53935]" />
            <h2 className="font-display font-black text-2xl text-zinc-900">
              Kitfo Fest 2026 FAQ
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="cursor-pointer border border-stone-200/80 rounded-2xl p-4 transition-all hover:border-[#E53935]/40"
              >
                <div className="flex items-center justify-between font-display font-bold text-sm text-zinc-900">
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-[#FF8C00] transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </div>
                {activeFaq === idx && (
                  <p className="text-xs text-stone-600 leading-relaxed pt-2 font-medium">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 3. UPCOMING FOOD FESTIVALS ROSTER */}
        <section className="flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-stone-200 pb-3 gap-2">
            <div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-zinc-900">
                2026 - 2027 Food Festival Calendar
              </h2>
              <p className="text-xs text-stone-600 font-medium pt-1">
                Annual gastronomic gatherings organized by Addis Foodies Media Hub
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {festivalsLineup.map((item) => (
              <div
                key={item.id}
                className="group bg-white border border-stone-200/80 rounded-3xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-stone-900">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-[0.94]"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/80 text-[#FF8C00] font-mono font-bold text-[10px] uppercase border border-amber-500/30">
                    {item.status}
                  </span>
                </div>

                <div className="p-6 flex flex-col gap-3 flex-1 justify-between">
                  <div>
                    <h3 className="font-display font-black text-xl text-zinc-900 group-hover:text-[#E53935] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#FF8C00] font-mono font-bold pt-1">
                      {item.dates} • {item.location}
                    </p>
                    <p className="text-xs text-stone-600 leading-relaxed pt-2 font-medium">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-xs font-mono text-stone-400">Addis Foodies Official</span>
                    <Link
                      href="/collaborate"
                      className="touch-target px-4 py-2 rounded-xl bg-[#E53935] hover:bg-[#B71C1C] text-white text-xs font-bold transition-all shadow-sm flex items-center gap-1"
                    >
                      <span>Sponsor Event</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
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
