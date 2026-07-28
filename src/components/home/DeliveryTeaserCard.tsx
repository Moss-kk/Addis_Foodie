'use client';

import React from 'react';
import Link from 'next/link';
import { Smartphone, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

export default function DeliveryTeaserCard() {
  return (
    <section className="w-full">
      <div
        className="relative w-full rounded-lg overflow-hidden text-white shadow-xs border p-8 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8"
        style={{
          backgroundColor: '#1A1C1E',
          borderColor: 'var(--border-subtle)',
        }}
      >
        {/* Left Content */}
        <div className="relative z-10 flex flex-col gap-4 max-w-xl">
          
          {/* Logo Brand Header */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-sm bg-[#B8422E] text-white flex items-center justify-center font-label font-bold text-lg shadow-xs">
              <MapPin className="w-5 h-5 text-white fill-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-medium text-xl tracking-tight leading-none text-white">
                addisfoodie
              </span>
              <span className="font-label font-bold text-xs uppercase tracking-widest text-slate-400">
                Delivery App
              </span>
            </div>

            <span className="ml-auto sm:ml-2 px-2.5 py-0.5 rounded-sm bg-white/10 text-white font-label text-[10px] uppercase border border-white/15">
              OFFICIAL SERVICE
            </span>
          </div>

          <div className="flex flex-col gap-1.5">
            <span className="text-xs font-label uppercase tracking-widest text-[#B8422E]">
              ADDIS ABABA COURIER SERVICE
            </span>
            <h2 className="font-display font-medium text-2xl sm:text-4xl text-white leading-tight">
              Get Your Favorite Meals Right Where You Are
            </h2>
          </div>

          <p className="text-slate-300 font-body text-xs sm:text-sm leading-relaxed">
            Order directly from verified culinary spots across Bole, Kazanchis, Piassa, and Sarbet with itemized ETB price transparency.
          </p>

          {/* Store App Badges & Order Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noreferrer"
              className="touch-target px-4 py-2.5 rounded-sm bg-white text-[#1A1C1E] font-label font-bold text-xs transition-all flex items-center gap-2 hover:bg-slate-100 cursor-pointer shadow-xs"
            >
              <FaGooglePlay className="w-4 h-4 text-[#1A1C1E]" />
              <div className="flex flex-col text-left leading-none">
                <span className="text-[8px] font-label uppercase text-slate-600">GET IT ON</span>
                <span className="text-xs font-label">Google Play</span>
              </div>
            </a>

            <a
              href="https://apple.com"
              target="_blank"
              rel="noreferrer"
              className="touch-target px-4 py-2.5 rounded-sm bg-white/10 hover:bg-white/20 text-white font-label font-bold text-xs border border-white/20 transition-all flex items-center gap-2 cursor-pointer backdrop-blur-md"
            >
              <FaApple className="w-4 h-4 text-white" />
              <div className="flex flex-col text-left leading-none">
                <span className="text-[8px] font-label uppercase text-slate-400">Download on the</span>
                <span className="text-xs font-label">App Store</span>
              </div>
            </a>

            <Link
              href="/services"
              className="button-primary text-xs uppercase tracking-wider py-2.5 px-5 rounded-sm flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </Link>
          </div>

        </div>

        {/* Right Info Graphic */}
        <div className="relative z-10 bg-white/5 border border-white/10 rounded-md p-5 flex flex-col items-center justify-center text-center gap-3 max-w-sm w-full backdrop-blur-md">
          <div className="w-12 h-12 rounded-sm bg-[#B8422E] text-white flex items-center justify-center shadow-xs">
            <Smartphone className="w-6 h-6 text-white" />
          </div>

          <h3 className="font-display font-medium text-base text-white">
            @addis.foodie.delivery
          </h3>

          <p className="text-xs text-slate-300 font-body leading-relaxed">
            Fast local courier delivery from Addis Ababa’s top rated Kitfo joints, gourmet burger spots, and cafes.
          </p>

          <div className="w-full bg-white/5 p-2.5 rounded-sm border border-white/10 flex items-center justify-center gap-2 text-xs font-label text-slate-300">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>100% Itemized ETB Receipt Guarantee</span>
          </div>
        </div>

      </div>
    </section>
  );
}
