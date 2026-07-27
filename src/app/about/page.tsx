'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Users,
  MapPin,
  Utensils,
  Sparkles,
  Phone,
  ArrowRight,
} from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MobileBottomNav from '../../components/layout/MobileBottomNav';
import { useLanguage } from '../../context/LanguageContext';

export default function AboutPage() {
  const { lang } = useLanguage();

  const stats = [
    { label: lang === 'EN' ? 'Monthly Foodies Reach' : 'ወርሃዊ ተከታታዮች', value: '150,000+', icon: Users },
    { label: lang === 'EN' ? 'Field Reviews Ingested' : 'የተደረጉ ግምገማዎች', value: '500+', icon: Utensils },
    { label: lang === 'EN' ? 'Key Districts Covered' : 'የተሸፈኑ ክፍለ ከተሞች', value: '4 Main', icon: MapPin },
    { label: lang === 'EN' ? 'Editorial Independence' : 'ገለልተኛ ግምገማ', value: '100%', icon: ShieldCheck },
  ];

  const methodologySteps = [
    {
      num: '01',
      title: lang === 'EN' ? 'Anonymous Field Inspection' : 'ድብቅ የመስክ ጉብኝት',
      desc:
        lang === 'EN'
          ? 'Our review inspectors visit dining spots unannounced to sample authentic dishes as everyday customers.'
          : 'የግምገማ ባለሙያዎቻችን እንደማንኛውም ደንበኛ ያለቅድመ ማስታወቂያ በመገኘት ምግቦችን ይመዝናሉ።',
    },
    {
      num: '02',
      title: lang === 'EN' ? 'Itemized ETB Price Audit' : 'ትክክለኛ የዋጋ ምዝገባ',
      desc:
        lang === 'EN'
          ? 'We record every dish price in Ethiopian Birr (ETB) directly on receipt logs for total price transparency.'
          : 'እያንዳንዱን የካፌና ምግብ ቤት ዋጋ በብር (ETB) በትክክል መዝግበን ይፋ እናደርጋለን።',
    },
    {
      num: '03',
      title: lang === 'EN' ? 'Cinematic 9:16 Video Capture' : 'ምርጥ ቪዲዮና ፎቶ',
      desc:
        lang === 'EN'
          ? 'Short 9:16 portrait video clips capture sizzling Kitfo, coffee roasting, and real restaurant atmosphere.'
          : 'የክትፎ፣ የቡናና የምግብ ቤቱን እውነተኛ ሁኔታ የሚያሳዩ አጫጭር ቪዲዮዎችን እንቀርጻለን።',
    },
    {
      num: '04',
      title: lang === 'EN' ? 'Independent Editorial Verdict' : 'ገለልተኛ ውሳኔና አስተያየት',
      desc:
        lang === 'EN'
          ? 'Final verdicts are published directly by Addis Foodies—no paid fake 5-star ratings allowed.'
          : 'ትክክለኛውን የአዲስ ፉዲስ አስተያየት ብቻ እናስፍራለን—በክፍያ የሚደረግ የሐሰት ደረጃ መስጠት አይፈቀድም።',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5] text-zinc-900 transition-colors duration-300 selection:bg-[#E53935]/20 selection:text-[#E53935] pb-16 sm:pb-0 max-w-full overflow-x-hidden">
      <Header />

      <main className="flex-1 site-container py-8 sm:py-12 flex flex-col gap-14 relative z-10">
        {/* Breadcrumb Navigation */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-zinc-600 hover:text-[#E53935] transition-colors cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            <span>Back to Discovery Feed</span>
          </Link>
        </div>

        {/* HERO SECTION */}
        <section className="bg-gradient-to-br from-[#111827] via-[#8B1717] to-[#E53935] text-white py-14 px-6 sm:px-12 rounded-3xl flex flex-col gap-6 shadow-xl border border-red-500/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF8C00]/10 rounded-full blur-3xl pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 w-fit text-xs font-mono font-bold uppercase tracking-widest text-[#FF8C00] backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#FF8C00]" />
            {lang === 'EN' ? 'The Voice of Addis Ababa’s Culinary Scene' : 'የአዲስ አበባ የምግብና ካፌ ባህል ታማኝ መሪ'}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-syne font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight"
          >
            {lang === 'EN' ? (
              <>
                The Voice of Addis Ababa’s <span className="text-[#FF8C00]">Culinary Scene</span>
              </>
            ) : (
              <>
                የአዲስ አበባ የምግብና ካፌ ባህል <span className="text-[#FF8C00]">ታማኝ መሪ</span>
              </>
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-zinc-200 text-base sm:text-xl max-w-3xl font-medium leading-relaxed"
          >
            {lang === 'EN'
              ? 'Addis Foodies is the premiere culinary review brand in Ethiopia. We discover, review, and showcase trusted food experiences across Bole, Kazanchis, Piassa, and Sarbet for over 150,000 food lovers.'
              : 'አዲስ ፉዲስ በኢትዮጵያ ውስጥ ተመርጠው የቀረቡ የምግብ ቤትና የካፌ ግምገማዎችን የሚያቀርብ ታዋቂ ዲጂታል መድረክ ነው። በቦሌ፣ ካዛንችስ፣ ፒያሳና ሳርቤት ያሉ ምርጥ ቦታዎችን ለ150,000+ ተከታታዮች እናስተዋውቃለን።'}
          </motion.p>
        </section>

        {/* IMPACT STATS STRIP */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white p-6 rounded-2xl text-center space-y-2 border border-stone-200 shadow-xs hover:border-amber-500/40 transition-colors"
              >
                <Icon className="w-6 h-6 text-[#E53935] mx-auto" />
                <p className="text-2xl sm:text-3xl font-black text-[#E53935] font-mono">
                  {stat.value}
                </p>
                <p className="text-xs font-bold text-zinc-600 uppercase tracking-wider font-mono">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </section>

        {/* EDITORIAL METHODOLOGY */}
        <section className="space-y-8 bg-white p-8 sm:p-12 rounded-3xl border border-stone-200 shadow-sm">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-mono font-black text-[#E53935] uppercase tracking-widest">
              {lang === 'EN' ? 'Field Methodology' : 'የግምገማ አሰራራችን'}
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-zinc-950 font-syne">
              {lang === 'EN' ? 'How We Inspect & Review' : 'የግምገማ አሰራራችን'}
            </h2>
            <p className="text-zinc-600 text-xs sm:text-sm font-medium">
              {lang === 'EN'
                ? 'Our rigorous 4-step editorial methodology guarantees authenticity and total price transparency.'
                : 'እውነተኛነቱን ያረጋገጠ ባለ 4-ደረጃ የግምገማ ሂደታችን።'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            {methodologySteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-stone-50 p-6 sm:p-8 rounded-2xl border border-stone-200 flex gap-5 items-start"
              >
                <span className="text-3xl sm:text-4xl font-black text-[#E53935] font-mono shrink-0">
                  {step.num}
                </span>
                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-zinc-900 font-syne">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-medium">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PROMOTION & PARTNERSHIP CALLOUT */}
        <section className="bg-gradient-to-br from-[#111827] via-[#8B1717] to-[#E53935] text-white p-8 sm:p-12 rounded-3xl border border-red-500/20 shadow-xl relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="px-3 py-1 bg-white/10 text-white text-[10px] font-black uppercase rounded-full tracking-widest font-mono border border-white/20">
              {lang === 'EN' ? 'Partner With Us' : 'ከእኛ ጋር ይስሩ'}
            </span>
            <h3 className="text-2xl sm:text-4xl font-black text-white font-syne">
              {lang === 'EN'
                ? 'Own a Restaurant in Addis Ababa?'
                : 'በአዲስ አበባ የምግብ ቤት ወይም ካፌ ባለቤት ነዎት?'}
            </h3>
            <p className="text-zinc-200 text-xs sm:text-sm leading-relaxed font-medium">
              {lang === 'EN'
                ? 'Request editorial reviews, festival event coverage (e.g., Kitfo Fest), or custom video media production.'
                : 'የምግብ ቤትዎን ግምገማ፣ የሁነቶች ዝግጅት ወይም ፕሮሞሽን በጥራት ለማቅረብ ያነጋግሩን።'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full md:w-auto">
            <a
              href="tel:0966550000"
              className="px-6 py-4 bg-[#E53935] hover:bg-[#B71C1C] text-white font-black text-xs uppercase rounded-xl transition-all shadow-xl flex items-center justify-center gap-2 min-h-[48px] font-mono cursor-pointer"
            >
              <Phone className="w-4 h-4 text-[#FF8C00]" />
              <span>0966-55-00-00</span>
            </a>
            <Link
              href="/collaborate"
              className="px-6 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-black text-xs uppercase rounded-xl transition-all flex items-center justify-center gap-2 min-h-[48px] font-mono cursor-pointer backdrop-blur-md"
            >
              <span>{lang === 'EN' ? 'Work With Us' : 'አብረውን ይስሩ'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <MobileBottomNav />
    </div>
  );
}
