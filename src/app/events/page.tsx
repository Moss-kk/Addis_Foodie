'use client';

import React, { useState, useEffect, useRef } from 'react';
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
  Trophy,
  Star,
  ThumbsUp
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
          className="bg-[#161E2E] backdrop-blur-md border border-[#1F293D] rounded-2xl p-2.5 sm:p-3 text-center flex flex-col items-center justify-center shadow-lg"
        >
          <span className="font-display font-black text-2xl sm:text-4xl text-[#F59E0B] font-mono">
            {String(item.value).padStart(2, '0')}
          </span>
          <span className="text-[9px] sm:text-[10px] font-mono font-bold text-[#94A3B8] tracking-wider">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}

// Additional Festivals Roster using Telegram imported images
const festivalsLineup = [
  {
    id: 'kitfo-fest-2026',
    title: 'KITFO FEST 2026 (Edition #5)',
    dates: 'Oct 03 - Oct 05, 2026',
    location: 'Monarch Rooftop • Piassa',
    status: 'FEATURED MEGA HUB',
    image: '/telegram-imports/Yado kitfo.jpg',
    description: "Ethiopia's flagship Kitfo celebration featuring 15+ premier Kitfo spots, Gurage cultural dancers, and craft Areke tasting.",
  },
  {
    id: 'burger-battle',
    title: 'BURGER BATTLE ADDIS 2026',
    dates: 'Nov 14 - Nov 16, 2026',
    location: 'Bole Medhaniallem Park',
    status: 'UPCOMING',
    image: '/telegram-imports/Queen Burger.jpg',
    description: 'Top 12 gourmet burger joints compete for the Crown of Addis Ababa. Live DJ sets and craft beer pairings.',
  },
  {
    id: 'coffee-week',
    title: 'ETHIOPIAN COFFEE WEEK & CUPPING',
    dates: 'Dec 05 - Dec 07, 2026',
    location: 'Ghion Hotel Gardens • Kazanchis',
    status: 'UPCOMING',
    image: '/telegram-imports/Vanilla Fasting Iced late.jpg',
    description: 'Celebrate Yirgacheffe, Sidama, and Harar beans with master baristas, latte art battles, and traditional Buna ceremonies.',
  },
  {
    id: 'pizza-fest',
    title: 'GRAND ETHIOPIAN CULINARY FESTIVAL',
    dates: 'Jan 20 - Jan 22, 2027',
    location: 'Sarbet Golf Club',
    status: 'UPCOMING',
    image: '/telegram-imports/IFTAR PACKAGE.jpg',
    description: 'Artisanal Ethiopian stews, slow-cooked feasts, traditional honey wine, and live cultural jazz performances.',
  },
];

// Award categories for voting
const awardCategories = [
  { id: 'fine-dining',    label: 'Best Fine Dining',      icon: '🍽️',  nominees: ['Yod Abyssinia', 'Monarch Rooftop', 'Habesha 2000'] },
  { id: 'street-food',   label: 'Best Street Food',      icon: '🌮',  nominees: ['Piassa Tibs Corner', 'Merkato Sambusa', 'Shiro Mado Stall'] },
  { id: 'coffee',        label: 'Best Coffee & Café',     icon: '☕',  nominees: ['Tomoca Coffee', 'Galani Café', 'Kaldi\'s Coffee'] },
  { id: 'traditional',   label: 'Best Traditional Spot',  icon: '🍲',  nominees: ['Kategna Restaurant', 'Fin Fine Cultural', 'Yod Abyssinia'] },
  { id: 'burgers',       label: 'Best Burger Joint',      icon: '🍔',  nominees: ['Titich Gourmet', 'RoadRunner Burger', 'Slam Burger'] },
  { id: 'pastry',        label: 'Best Pastry & Sweets',   icon: '🧁',  nominees: ['Keremet Pastry', 'Enrico Pastry', 'Fornaio Café'] },
];

export default function EventsPage() {
  const [reserved, setReserved] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [votedCategory, setVotedCategory] = useState<Record<string, string>>({});
  const [voteCount, setVoteCount] = useState(4712);
  const awardsRef = useRef<HTMLElement | null>(null);

  const faqs = [
    { q: 'Is there an entrance fee for Kitfo Fest 2026?', a: 'General admission is completely FREE! VIP tasting passes with complimentary drinks can be reserved online.' },
    { q: 'What food will be available?', a: 'Over 15 varieties of Kitfo (Tire, Lebleb, Yebessela), Tibs, Ayib, Gomen, Tej, and local craft beverages.' },
    { q: 'Where is the venue located?', a: 'Monarch Hotel Rooftop in Piassa, opposite Tewdros Square and Friendship Park.' },
    { q: 'Is it family friendly?', a: 'Yes! Family hours are from 11:00 AM to 6:00 PM with children games, followed by evening cultural music.' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#0B0F17] text-[#F8FAFC] transition-colors duration-300 pb-16 sm:pb-0 max-w-full overflow-x-hidden">
      <Header />

      <main className="flex-1 site-container py-8 sm:py-12 flex flex-col gap-12">
        
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

        {/* 1. KITFO FEST 2026 MEGA HERO HUB */}
        <section className="relative w-full rounded-3xl overflow-hidden bg-[#161E2E] border border-[#1F293D] text-white shadow-2xl p-6 sm:p-12 flex flex-col gap-8">
          
          {/* Background Photography & Overlay */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <Image
              src="/telegram-imports/Yado kitfo.jpg"
              alt="Kitfo Fest 2026 Showcase"
              fill
              className="object-cover opacity-30 brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F17] via-[#161E2E]/90 to-transparent" />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            
            <div className="flex flex-col gap-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EF4444] text-white font-mono font-black text-xs uppercase tracking-widest w-fit shadow-md">
                <Ticket className="w-4 h-4 text-amber-200 animate-bounce" />
                <span>OFFICIAL FLAGSHIP FESTIVAL 2026</span>
              </div>

              <h1 className="font-display font-black text-4xl sm:text-6xl tracking-tight leading-none text-[#F8FAFC]">
                KITFO FEST 2026
              </h1>

              <div className="flex items-center gap-2 text-[#F59E0B] font-display font-bold text-lg">
                <MapPin className="w-5 h-5 text-[#EF4444]" />
                <span>Monarch Hotel Rooftop • Piassa, Tewdros Square</span>
              </div>

              <p className="text-[#94A3B8] font-medium text-sm sm:text-base leading-relaxed">
                Join 10,000+ food lovers for Ethiopia's largest celebration of Kitfo, authentic Habesha spices, craft Areke, and live cultural entertainment.
              </p>

              {/* Countdown Timer */}
              <div className="pt-2">
                <span className="text-xs font-mono font-bold text-[#F59E0B] uppercase tracking-wider block mb-1">
                  ⏳ EVENT COUNTDOWN TIMER:
                </span>
                <CountdownTimer />
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => setReserved(true)}
                  className="touch-target bg-[#EF4444] hover:bg-[#DC2626] text-white font-extrabold text-sm py-4 px-8 rounded-xl shadow-xl transition-all hover:scale-105 flex items-center gap-2 focus-ring cursor-pointer"
                >
                  <Ticket className="w-4 h-4 text-amber-200" />
                  <span>Reserve Free Pass</span>
                </button>

                <a
                  href="tel:0966550000"
                  className="touch-target bg-[#1F293D] hover:bg-slate-700 text-white font-bold text-sm py-4 px-6 rounded-xl border border-slate-700 transition-all flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#F59E0B]" />
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
            <div className="bg-[#0B0F17]/80 backdrop-blur-xl border border-[#1F293D] rounded-3xl p-6 flex flex-col gap-4 max-w-md w-full shadow-2xl">
              <h3 className="font-display font-bold text-lg text-[#F8FAFC] border-b border-[#1F293D] pb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#F59E0B]" />
                <span>Festival Schedule & Details</span>
              </h3>

              <div className="flex flex-col gap-3 text-xs font-medium text-[#94A3B8]">
                <div className="flex items-start gap-2.5">
                  <Calendar className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Dates & Season:</span>
                    <span>Meskerem 19 & 20 | Sep 30 & Oct 01</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Operating Hours:</span>
                    <span>11:00 AM till 11:00 PM Daily</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <UtensilsCrossed className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Featured Vendors:</span>
                    <span>Kategna, Yod Abyssinia, Monarch Rooftop, Fin Fine</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Music className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Live Entertainment:</span>
                    <span>Gurage Cultural Dancers, Masinko Solo, DJ Lineup</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-[#1F293D] flex items-center justify-between text-xs font-mono font-bold text-[#F59E0B]">
                <span>Entrance: FREE</span>
                <span>Organized by @addisfoodiess</span>
              </div>
            </div>

          </div>
        </section>

        {/* 2. FAQ ACCORDION FOR KITFO FEST */}
        <section className="flex flex-col gap-6 bg-[#161E2E] p-8 rounded-3xl border border-[#1F293D] shadow-xs">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-[#EF4444]" />
            <h2 className="font-display font-black text-2xl text-[#F8FAFC]">
              Kitfo Fest 2026 FAQ
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="cursor-pointer border border-[#1F293D] bg-[#0B0F17] rounded-2xl p-4 transition-all hover:border-[#F59E0B]/40"
              >
                <div className="flex items-center justify-between font-display font-bold text-sm text-[#F8FAFC]">
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-[#F59E0B] transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </div>
                {activeFaq === idx && (
                  <p className="text-xs text-[#94A3B8] leading-relaxed pt-2 font-medium">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 3. ADDISFOODIE AWARDS — VOTING CHALLENGE */}
        <section
          id="awards"
          ref={awardsRef}
          className="relative rounded-3xl overflow-hidden text-white shadow-2xl"
          style={{ background: 'linear-gradient(145deg, #0B0F17, #161E2E, #0B0F17)', border: '1px solid #1F293D' }}
        >
          {/* Gold shimmer top border */}
          <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl" style={{ background: 'linear-gradient(90deg, transparent, #F59E0B, #F5D78A, #F59E0B, transparent)' }} />

          <div className="p-6 sm:p-10 flex flex-col gap-8">

            {/* Header */}
            <div className="flex flex-col items-center text-center gap-3">
              {/* Medal icon matching the awards image */}
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center shadow-2xl border-4"
                style={{ background: 'linear-gradient(145deg, #8B6914, #F59E0B, #F5D78A, #F59E0B, #8B6914)', borderColor: '#F59E0B' }}
              >
                <div
                  className="w-14 h-14 rounded-full flex flex-col items-center justify-center"
                  style={{ backgroundColor: '#0B0F17' }}
                >
                  <Trophy className="w-7 h-7" style={{ color: '#F5D78A' }} />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span
                    className="text-[10px] font-mono font-black px-3 py-1 rounded-full uppercase tracking-widest"
                    style={{ backgroundColor: 'rgba(245,158,11,0.15)', color: '#F59E0B', border: '1px solid rgba(245,158,11,0.4)' }}
                  >
                    🏆 LIVE VOTING OPEN
                  </span>
                </div>
                <h2 className="font-display font-black text-3xl sm:text-5xl tracking-tight text-white">
                  AddisFoodie <span style={{ color: '#F59E0B' }}>Awards</span> 2026
                </h2>
                <p className="text-[#94A3B8] font-medium text-sm sm:text-base mt-2 max-w-lg mx-auto">
                  Vote for your favorite restaurants in Addis Ababa and help recognize the best in the industry. Voting closes <strong className="text-white">Sept 28, 2026</strong>.
                </p>
              </div>

              {/* Live vote counter */}
              <div
                className="flex items-center gap-2 px-5 py-2.5 rounded-full font-mono font-black text-sm border"
                style={{ backgroundColor: 'rgba(245,158,11,0.12)', borderColor: 'rgba(245,158,11,0.35)', color: '#F59E0B' }}
              >
                <Users className="w-4 h-4" />
                <span>{voteCount.toLocaleString()} votes cast</span>
              </div>
            </div>

            {/* Category label */}
            <div className="text-center">
              <h3 className="font-display font-bold text-lg text-white mb-1">Categories</h3>
              <p className="text-xs text-[#94A3B8]">Vote across multiple categories including Fine Dining, Cafés, and Street Food.</p>
            </div>

            {/* Voting Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {awardCategories.map((cat) => {
                const hasVoted = !!votedCategory[cat.id];
                return (
                  <div
                    key={cat.id}
                    className="rounded-2xl p-5 flex flex-col gap-4 transition-all"
                    style={{
                      backgroundColor: '#161E2E',
                      border: hasVoted ? '1px solid rgba(245,158,11,0.6)' : '1px solid #1F293D',
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{cat.icon}</span>
                      <h4 className="font-display font-black text-sm text-[#F8FAFC]">{cat.label}</h4>
                    </div>

                    <div className="flex flex-col gap-2">
                      {cat.nominees.map((nominee) => {
                        const isSelected = votedCategory[cat.id] === nominee;
                        return (
                          <button
                            key={nominee}
                            onClick={() => {
                              if (!hasVoted) {
                                setVotedCategory((prev) => ({ ...prev, [cat.id]: nominee }));
                                setVoteCount((c) => c + 1);
                              }
                            }}
                            disabled={hasVoted && !isSelected}
                            className="w-full text-left px-3 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-between gap-2 cursor-pointer"
                            style={{
                              backgroundColor: isSelected
                                ? 'rgba(245,158,11,0.25)'
                                : hasVoted
                                ? 'rgba(255,255,255,0.03)'
                                : '#0B0F17',
                              border: isSelected
                                ? '1px solid rgba(245,158,11,0.7)'
                                : '1px solid #1F293D',
                              color: isSelected ? '#F59E0B' : '#94A3B8',
                              opacity: hasVoted && !isSelected ? 0.45 : 1,
                              cursor: hasVoted && !isSelected ? 'not-allowed' : 'pointer',
                            }}
                          >
                            <span>{nominee}</span>
                            {isSelected ? (
                              <Star className="w-3.5 h-3.5 fill-current shrink-0 text-[#F59E0B]" />
                            ) : !hasVoted ? (
                              <ThumbsUp className="w-3.5 h-3.5 shrink-0 opacity-50 text-[#94A3B8]" />
                            ) : null}
                          </button>
                        );
                      })}
                    </div>

                    {hasVoted && (
                      <div
                        className="flex items-center gap-1.5 text-[11px] font-mono font-bold px-2 py-1.5 rounded-lg"
                        style={{ backgroundColor: 'rgba(245,158,11,0.15)', color: '#F59E0B' }}
                      >
                        <CheckCircle className="w-3.5 h-3.5" />
                        <span>Vote recorded for {votedCategory[cat.id]}</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="text-center flex flex-col items-center gap-3">
              <p className="text-xs text-[#94A3B8] font-mono">
                Winners announced at Kitfo Fest 2026 — Monarch Hotel Rooftop
              </p>
              <Link
                href="/collaborate"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-extrabold text-sm transition-all hover:scale-105 shadow-xl"
                style={{ background: 'linear-gradient(90deg, #8B6914, #F59E0B)', color: '#0B0F17' }}
              >
                <Award className="w-4 h-4" />
                <span>Nominate a Restaurant</span>
              </Link>
            </div>

          </div>
        </section>

        {/* 4. UPCOMING FOOD FESTIVALS ROSTER */}
        <section className="flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#1F293D] pb-3 gap-2">
            <div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-[#F8FAFC]">
                2026 - 2027 Food Festival Calendar
              </h2>
              <p className="text-xs text-[#94A3B8] font-medium pt-1">
                Annual gastronomic gatherings organized by Addis Foodies Media Hub
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {festivalsLineup.map((item) => (
              <div
                key={item.id}
                className="group bg-[#161E2E] border border-[#1F293D] rounded-3xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-[0.95]"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#0B0F17]/90 text-[#F59E0B] font-mono font-bold text-[10px] uppercase border border-[#F59E0B]/30">
                    {item.status}
                  </span>
                </div>

                <div className="p-6 flex flex-col gap-3 flex-1 justify-between">
                  <div>
                    <h3 className="font-display font-black text-xl text-[#F8FAFC] group-hover:text-[#F59E0B] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#F59E0B] font-mono font-bold pt-1">
                      {item.dates} • {item.location}
                    </p>
                    <p className="text-xs text-[#94A3B8] leading-relaxed pt-2 font-medium">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#1F293D] flex items-center justify-between">
                    <span className="text-xs font-mono text-[#64748B]">Addis Foodies Official</span>
                    <Link
                      href="/collaborate"
                      className="touch-target px-4 py-2 rounded-xl bg-[#EF4444] hover:bg-[#DC2626] text-white text-xs font-bold transition-all shadow-sm flex items-center gap-1"
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
