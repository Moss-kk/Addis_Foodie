'use client';

import React from 'react';
import Link from 'next/link';
import { Smartphone, Download, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

export default function DeliveryTeaserCard() {
  return (
    <section className="w-full">
      <div
        className="relative w-full rounded-[36px] overflow-hidden text-white shadow-2xl border-2 border-white/20 p-8 sm:p-12 flex flex-col lg:flex-row lg:items-center justify-between gap-8"
        style={{
          backgroundColor: '#000000', // Official monochrome delivery branding
          color: '#FFFFFF',
        }}
      >
        {/* Subtle monochrome geometric background pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

        {/* Left Content */}
        <div className="relative z-10 flex flex-col gap-5 max-w-xl">
          
          {/* Logo Brand Header */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white text-black flex items-center justify-center font-black text-xl shadow-lg">
              <MapPin className="w-6 h-6 text-black fill-black" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-2xl tracking-tight leading-none text-white">
                addisfoodie
              </span>
              <span className="font-mono font-bold text-xs uppercase tracking-widest text-slate-400">
                Delivery
              </span>
            </div>

            <span className="ml-auto sm:ml-2 px-3 py-1 rounded-full bg-white/10 text-amber-400 font-mono font-bold text-[10px] uppercase border border-white/20">
              OFFICIAL SERVICE
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
              A NEW SERVICE FROM ADDIS FOODIE
            </span>
            <h2 className="font-display font-normal text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              Get Your Favorite Meals Right Where You Are
            </h2>
          </div>

          <p className="text-slate-300 font-body text-xs sm:text-sm leading-relaxed">
            Order directly from verified culinary spots across Bole, Kazanchis, Piassa, and Sarbet with itemized ETB price transparency and real-time order tracking.
          </p>

          {/* Store App Badges & Order Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noreferrer"
              className="touch-target px-5 py-3 rounded-full bg-white text-black font-extrabold text-xs transition-all flex items-center gap-2 hover:bg-slate-200 cursor-pointer shadow-lg"
            >
              <FaGooglePlay className="w-4 h-4" />
              <div className="flex flex-col text-left leading-none">
                <span className="text-[9px] font-mono uppercase text-slate-600">GET IT ON</span>
                <span className="text-xs font-bold font-sans">Google Play</span>
              </div>
            </a>

            <a
              href="https://apple.com"
              target="_blank"
              rel="noreferrer"
              className="touch-target px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-extrabold text-xs border border-white/20 transition-all flex items-center gap-2 cursor-pointer backdrop-blur-md"
            >
              <FaApple className="w-5 h-5 text-white" />
              <div className="flex flex-col text-left leading-none">
                <span className="text-[9px] font-mono uppercase text-slate-400">Download on the</span>
                <span className="text-xs font-bold font-sans">App Store</span>
              </div>
            </a>

            <Link
              href="/services"
              className="touch-target px-6 py-3 rounded-full text-slate-950 font-extrabold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer shadow-md hover:scale-105"
              style={{ backgroundColor: 'var(--accent-gold)' }}
            >
              <span>Order Delivery Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="flex items-center gap-4 pt-2 text-[11px] font-mono text-slate-400 border-t border-white/10">
            <span>Direct Hotline: <strong className="text-amber-400">0966-55-00-00</strong></span>
            <span>•</span>
            <span>Web: <strong className="text-white">addisfoodie.com</strong></span>
          </div>

        </div>

        {/* Right Phone Mockup & App Store Graphic */}
        <div className="relative z-10 bg-white/5 border border-white/15 rounded-3xl p-6 flex flex-col items-center justify-center text-center gap-4 max-w-sm w-full backdrop-blur-xl">
          <div className="w-16 h-16 rounded-2xl bg-white text-black flex items-center justify-center shadow-2xl">
            <Smartphone className="w-8 h-8 text-black" />
          </div>

          <h3 className="font-display font-bold text-lg text-white">
            @addis.foodie.delivery
          </h3>

          <p className="text-xs text-slate-300 font-body leading-relaxed">
            Fast local courier delivery from Addis Ababa’s top rated Kitfo joints, gourmet burger spots, and cafes.
          </p>

          <div className="w-full bg-white/10 p-3 rounded-xl border border-white/10 flex items-center justify-center gap-2 text-xs font-mono font-bold text-amber-400">
            <ShieldCheck className="w-4 h-4" />
            <span>100% Itemized ETB Receipt Guarantee</span>
          </div>
        </div>

      </div>
    </section>
  );
}
