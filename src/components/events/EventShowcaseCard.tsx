'use client';

import React from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  Ticket,
  Music,
  UtensilsCrossed,
} from 'lucide-react';
import { FaInstagram, FaTelegramPlane } from 'react-icons/fa';

export interface EventData {
  title: string;
  tagline: string;
  venue: string;
  locationDetails: string;
  dateStr: string;
  timeStr: string;
  entranceFee: string;
  menuHighlights: string[];
  entertainment: string[];
  contacts: string[];
  telegramUrl: string;
  instagramUrl: string;
  tiktokUrl: string;
}

const defaultEvent: EventData = {
  title: 'KITFO FEST #5',
  tagline: 'TODAY!! FEATURED FOOD FESTIVAL & PROMOTION',
  venue: 'MONARCH HOTEL (ROOF TOP)',
  locationDetails: 'Piassa, Around Tewdros Square, Infront of Friendship park @monarchparkview',
  dateStr: 'Sat & Sun Meskerem 19 and 20 | Sep 30 and Oct 01',
  timeStr: '11:00 AM till 11:00 PM',
  entranceFee: 'No entrance fee',
  menuHighlights: ['Kitfo', 'Tibs', 'Tire Siga', 'Desserts', 'Cake', 'Ice Cream', 'Areke', 'Tej'],
  entertainment: ['Gurage Cultural Dancers & Singers', 'Masinko Performance', 'DJ Lineup', 'Games'],
  contacts: ['0966-55-00-00', '0911-23-92-70'],
  telegramUrl: 'https://t.me/AddisFoodies',
  instagramUrl: 'https://instagram.com/addis.foodie',
  tiktokUrl: 'https://tiktok.com/@addis.foodie',
};

export function EventShowcaseCard({ event = defaultEvent }: { event?: EventData }) {
  return (
    <div className="w-full bg-[#111827] text-white rounded-3xl overflow-hidden shadow-xl border-2 border-[#E53935] my-8">
      {/* Top Banner Alert */}
      <div className="bg-gradient-to-r from-[#E53935] via-[#B71C1C] to-[#FF8C00] px-6 py-3 flex items-center justify-between">
        <span className="font-black text-sm md:text-base tracking-widest text-white uppercase flex items-center gap-2 font-mono">
          <Ticket className="w-5 h-5 text-amber-300 animate-bounce" />
          Official Event Announcement
        </span>
        <span className="bg-black/40 text-amber-300 text-xs font-black px-3 py-1 rounded-full border border-amber-400/30 uppercase tracking-wider font-mono">
          {event.entranceFee}
        </span>
      </div>

      <div className="p-6 md:p-8 space-y-6">
        {/* Title & Venue */}
        <div>
          <p className="text-[#FF8C00] font-black text-sm tracking-wide uppercase font-mono">{event.tagline}</p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mt-1 font-syne">
            {event.title}
          </h2>
          <div className="flex items-center gap-2 text-rose-400 font-black text-lg md:text-xl mt-2">
            <MapPin className="w-6 h-6 shrink-0 text-[#E53935]" />
            <span>{event.venue}</span>
          </div>
          <p className="text-xs md:text-sm text-zinc-300 mt-1 pl-8 font-medium">{event.locationDetails}</p>
        </div>

        {/* Date & Time Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-zinc-900 p-4 rounded-2xl border border-zinc-800">
          <div className="flex items-center gap-3">
            <Calendar className="w-6 h-6 text-[#FF8C00]" />
            <div>
              <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest font-mono">Date & Days</p>
              <p className="text-sm font-extrabold text-white">{event.dateStr}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="w-6 h-6 text-[#FF8C00]" />
            <div>
              <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest font-mono">Hours</p>
              <p className="text-sm font-extrabold text-white">{event.timeStr}</p>
            </div>
          </div>
        </div>

        {/* Offerings & Entertainment */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Menu Highlights */}
          <div className="space-y-2">
            <h4 className="text-xs font-black uppercase text-[#FF8C00] tracking-wider flex items-center gap-2 font-mono">
              <UtensilsCrossed className="w-4 h-4" /> Food & Beverage Menu
            </h4>
            <div className="flex flex-wrap gap-2">
              {event.menuHighlights.map((item, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-[#120907] text-[#D1C2BD] text-xs font-bold rounded-lg border border-zinc-800 flex items-center gap-1.5"
                >
                  <UtensilsCrossed className="w-3 h-3 text-[#E53935]" />
                  <span>{item}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Entertainment */}
          <div className="space-y-2">
            <h4 className="text-xs font-black uppercase text-[#FF8C00] tracking-wider flex items-center gap-2 font-mono">
              <Music className="w-4 h-4" /> Live Performance & Shows
            </h4>
            <div className="flex flex-wrap gap-2">
              {event.entertainment.map((item, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-rose-950/60 text-rose-200 text-xs font-bold rounded-lg border border-rose-900/50 flex items-center gap-1.5"
                >
                  <Music className="w-3 h-3 text-amber-300" />
                  <span>{item}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Callouts & Reservations */}
        <div className="pt-4 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 flex-wrap">
            <Phone className="w-5 h-5 text-[#E53935]" />
            <span className="text-xs font-bold text-[#D1C2BD]">Info & Reservations:</span>
            {event.contacts.map((phone, i) => (
              <a
                key={i}
                href={`tel:${phone.replace(/-/g, '')}`}
                className="text-sm font-black text-[#FF8C00] underline hover:text-amber-300 transition-colors font-mono cursor-pointer"
              >
                {phone}
              </a>
            ))}
          </div>

          {/* Social Quick Links */}
          <div className="flex items-center gap-3">
            <a
              href={event.telegramUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 bg-blue-600/20 text-blue-400 rounded-xl hover:bg-blue-600 hover:text-white transition-all border border-blue-500/30 flex items-center gap-1.5 text-xs font-bold"
            >
              <FaTelegramPlane size={16} /> Telegram
            </a>
            <a
              href={event.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 bg-pink-600/20 text-pink-400 rounded-xl hover:bg-pink-600 hover:text-white transition-all border border-pink-500/30 flex items-center gap-1.5 text-xs font-bold"
            >
              <FaInstagram size={16} /> Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventShowcaseCard;
