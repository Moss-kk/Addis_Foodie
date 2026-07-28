'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
          className="bg-slate-950/90 backdrop-blur-md border border-amber-500/40 rounded-2xl p-2.5 sm:p-3 text-center flex flex-col items-center justify-center shadow-lg"
        >
          <span className="font-display font-bold text-2xl sm:text-4xl text-amber-400 font-mono">
            {String(item.value).padStart(2, '0')}
          </span>
          <span className="text-[9px] sm:text-[10px] font-mono font-bold text-slate-400 tracking-wider">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}

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

// Minimalist voting category link matrix
const awardCategories = [
  { id: 'best-kitfo',       label: 'Best Kitfo in Addis',       icon: '🥩', nominees: ['Yado Kitfo Special', 'Kakur Traditional', 'Kategna Restaurant'] },
  { id: 'best-burger',      label: 'Best Gourmet Burger',       icon: '🍔', nominees: ['Titich Gourmet Burger', 'Roadrunner Burger', 'Slam Burger'] },
  { id: 'best-cafe',        label: 'Best Coffee & Café',        icon: '☕', nominees: ['Tomoca Coffee', 'Galani Café', 'Kaldi\'s Coffee'] },
  { id: 'best-traditional', label: 'Best Traditional Spot',     icon: '🍲', nominees: ['Yod Abyssinia', 'Fin Fine Cultural', 'Habesha 2000'] },
  { id: 'best-street-food', label: 'Best Street Food',         icon: '🌮', nominees: ['Piassa Tibs Corner', 'Merkato Sambusa', 'Shiro Mado'] },
  { id: 'best-pastry',      label: 'Best Pastry & Sweets',      icon: '🧁', nominees: ['Enrico Pastry', 'Keremet Pastry', 'Fornaio Café'] },
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
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-500 hover:text-amber-500 transition-colors"
          >
            <ArrowRight className="w-4 h-4 rotate-180" style={{ color: 'var(--accent-gold)' }} />
            <span>Back to Discovery Feed</span>
          </Link>
        </div>

        {/* 1. KITFO FEST 2026 MEGA HERO HUB (Mastercard Stadium 40px Geometry) */}
        <section className="relative w-full rounded-[40px] overflow-hidden bg-slate-950 border-2 border-amber-500/40 text-white shadow-2xl p-6 sm:p-12 flex flex-col gap-8">
          
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <Image
              src="/telegram-imports/Yado kitfo.jpg"
              alt="Kitfo Fest 2026 Showcase"
              fill
              className="object-cover opacity-30 brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent" />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            
            <div className="flex flex-col gap-4 max-w-2xl">
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-mono font-bold text-xs uppercase tracking-widest w-fit shadow-md text-slate-950"
                style={{ backgroundColor: 'var(--accent-gold)' }}
              >
                <Ticket className="w-4 h-4 text-slate-950 animate-bounce" />
                <span>OFFICIAL FLAGSHIP FESTIVAL 2026</span>
              </div>

              <h1 className="font-display font-normal text-4xl sm:text-6xl tracking-tight leading-none text-white">
                KITFO FEST 2026
              </h1>

              <div className="flex items-center gap-2 text-amber-400 font-display font-bold text-lg">
                <MapPin className="w-5 h-5 text-amber-500" />
                <span>Monarch Hotel Rooftop • Piassa, Tewdros Square</span>
              </div>

              <p className="text-slate-300 font-body text-sm sm:text-base leading-relaxed">
                Join 10,000+ food lovers for Ethiopia's largest celebration of Kitfo, authentic Habesha spices, craft Areke, and live cultural entertainment.
              </p>

              {/* Countdown Timer */}
              <div className="pt-2">
                <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider block mb-1">
                  ⏳ EVENT COUNTDOWN TIMER:
                </span>
                <CountdownTimer />
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => setReserved(true)}
                  className="touch-target text-slate-950 font-extrabold text-xs uppercase tracking-wider py-4 px-8 rounded-full shadow-xl transition-all hover:scale-105 flex items-center gap-2 cursor-pointer"
                  style={{ backgroundColor: 'var(--accent-gold)' }}
                >
                  <Ticket className="w-4 h-4 text-slate-950" />
                  <span>Reserve Free Pass</span>
                </button>

                <a
                  href="tel:0966550000"
                  className="touch-target bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider py-4 px-6 rounded-full border border-white/20 transition-all flex items-center gap-2 backdrop-blur-md"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
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
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Festival Schedule & Details</span>
              </h3>

              <div className="flex flex-col gap-3 text-xs font-medium text-slate-300">
                <div className="flex items-start gap-2.5">
                  <Calendar className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Dates & Season:</span>
                    <span>Meskerem 19 & 20 | Sep 30 & Oct 01</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Operating Hours:</span>
                    <span>11:00 AM till 11:00 PM Daily</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <UtensilsCrossed className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Featured Vendors:</span>
                    <span>Kategna, Yod Abyssinia, Monarch Rooftop, Fin Fine</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Music className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Live Entertainment:</span>
                    <span>Gurage Cultural Dancers, Masinko Solo, DJ Lineup</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs font-mono font-bold text-amber-400">
                <span>Entrance: FREE</span>
                <span>Organized by @addisfoodiess</span>
              </div>
            </div>

          </div>
        </section>

        {/* 2. MINIMALIST VOTING LINK MATRIX — ADDIS FOODIES AWARDS 2026 */}
        <section
          id="awards"
          ref={awardsRef}
          className="relative rounded-[32px] overflow-hidden text-white shadow-2xl border border-amber-500/30"
          style={{ background: 'linear-gradient(145deg, #0B0F17, #161E2E, #0B0F17)' }}
        >
          <div className="p-6 sm:p-10 flex flex-col gap-6">
            
            {/* Clean Header Matrix Title */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-amber-500/20 border border-amber-500/50 flex items-center justify-center text-amber-400">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="font-display font-normal text-2xl sm:text-4xl text-white">
                    AddisFoodie <span className="text-amber-400">Awards</span> 2026
                  </h2>
                  <p className="text-xs text-slate-400 font-mono pt-0.5">
                    Cast your vote • {voteCount.toLocaleString()} votes cast • Closes Sept 28
                  </p>
                </div>
              </div>

              <div className="px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-300 font-mono font-bold text-xs border border-amber-500/30 w-fit">
                ⚡ LIVE VOTING LINK MATRIX
              </div>
            </div>

            {/* Voting Category Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {awardCategories.map((cat) => {
                const hasVoted = !!votedCategory[cat.id];
                return (
                  <div
                    key={cat.id}
                    className="rounded-2xl p-5 flex flex-col justify-between gap-4 transition-all border"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.03)',
                      borderColor: hasVoted ? 'var(--accent-gold)' : 'rgba(255,255,255,0.1)',
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="text-2xl">{cat.icon}</span>
                        <h3 className="font-display font-bold text-base text-white">{cat.label}</h3>
                      </div>
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
                            className="w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-between gap-2 cursor-pointer"
                            style={{
                              backgroundColor: isSelected
                                ? 'rgba(245,158,11,0.25)'
                                : 'rgba(255,255,255,0.06)',
                              border: isSelected
                                ? '1px solid var(--accent-gold)'
                                : '1px solid rgba(255,255,255,0.08)',
                              color: isSelected ? '#F59E0B' : '#F8FAFC',
                              opacity: hasVoted && !isSelected ? 0.4 : 1,
                              cursor: hasVoted && !isSelected ? 'not-allowed' : 'pointer',
                            }}
                          >
                            <span>{nominee}</span>
                            {isSelected ? (
                              <Star className="w-4 h-4 fill-current text-amber-400 shrink-0" />
                            ) : !hasVoted ? (
                              <span className="text-[11px] font-mono text-amber-400 hover:underline">Vote Now →</span>
                            ) : null}
                          </button>
                        );
                      })}
                    </div>

                    {hasVoted && (
                      <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold px-2.5 py-1.5 rounded-lg bg-amber-500/15 text-amber-300">
                        <CheckCircle className="w-3.5 h-3.5" />
                        <span>Voted: {votedCategory[cat.id]}</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* 3. FAQ ACCORDION */}
        <section
          className="flex flex-col gap-6 p-8 rounded-3xl border shadow-card"
          style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}
        >
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5" style={{ color: 'var(--accent-gold)' }} />
            <h2 className="font-display font-normal text-2xl" style={{ color: 'var(--text-primary)' }}>
              Kitfo Fest 2026 FAQ
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="cursor-pointer border rounded-2xl p-4 transition-all hover:border-amber-500/40"
                style={{ borderColor: 'var(--border-subtle)' }}
              >
                <div className="flex items-center justify-between font-display font-bold text-sm" style={{ color: 'var(--text-primary)' }}>
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-amber-500 transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </div>
                {activeFaq === idx && (
                  <p className="text-xs font-body pt-2" style={{ color: 'var(--text-secondary)' }}>
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 4. UPCOMING FOOD FESTIVALS ROSTER */}
        <section className="flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b pb-3 gap-2" style={{ borderColor: 'var(--border-subtle)' }}>
            <div>
              <h2 className="font-display font-normal text-2xl sm:text-3xl" style={{ color: 'var(--text-primary)' }}>
                2026 - 2027 Food Festival Calendar
              </h2>
              <p className="text-xs font-body pt-1" style={{ color: 'var(--text-secondary)' }}>
                Annual gastronomic gatherings organized by Addis Foodies Media Hub
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {festivalsLineup.map((item) => (
              <div
                key={item.id}
                className="group border rounded-3xl overflow-hidden shadow-card transition-all duration-300 flex flex-col justify-between"
                style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-[0.95]"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/80 text-amber-400 font-mono font-bold text-[10px] uppercase border border-amber-500/30">
                    {item.status}
                  </span>
                </div>

                <div className="p-6 flex flex-col gap-3 flex-1 justify-between">
                  <div>
                    <h3 className="font-display font-bold text-xl transition-colors group-hover:text-amber-500" style={{ color: 'var(--text-primary)' }}>
                      {item.title}
                    </h3>
                    <p className="text-xs font-mono font-bold pt-1" style={{ color: 'var(--accent-gold)' }}>
                      {item.dates} • {item.location}
                    </p>
                    <p className="text-xs font-body leading-relaxed pt-2" style={{ color: 'var(--text-secondary)' }}>
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t flex items-center justify-between" style={{ borderColor: 'var(--border-subtle)' }}>
                    <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>Addis Foodies Official</span>
                    <Link
                      href="/collaborate"
                      className="touch-target px-4 py-2 rounded-full text-slate-950 text-xs font-bold transition-all shadow-xs flex items-center gap-1 cursor-pointer"
                      style={{ backgroundColor: 'var(--accent-gold)' }}
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
