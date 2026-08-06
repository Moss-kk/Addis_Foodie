'use client';

import React, { useState } from 'react';
import { 
  Send, 
  RefreshCw, 
  Smartphone, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  Bell, 
  Ticket, 
  Layers 
} from 'lucide-react';
import { FaInstagram, FaTelegramPlane } from 'react-icons/fa';

export const MarketingView: React.FC = () => {
  const [autoTelegram, setAutoTelegram] = useState(true);
  const [autoInstagram, setAutoInstagram] = useState(true);
  const [autoReceipts, setAutoReceipts] = useState(true);
  const [syncSuccess, setSyncSuccess] = useState(false);

  // Push Notification Form State
  const [pushTitle, setPushTitle] = useState('Kitfo Fest 2026 Free Pass Available! 🥩');
  const [pushBody, setPushBody] = useState('Reserve your free pass for Monarch Rooftop festival. Limited spots remaining!');
  const [pushSent, setPushSent] = useState(false);

  const handleSyncFeeds = () => {
    setSyncSuccess(true);
    setTimeout(() => setSyncSuccess(false), 4000);
  };

  const handleSendPush = (e: React.FormEvent) => {
    e.preventDefault();
    setPushSent(true);
    setTimeout(() => setPushSent(false), 4000);
  };

  return (
    <div className="flex flex-col gap-8 animate-fade-in">
      {/* View Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b pb-4 gap-2" style={{ borderColor: 'var(--border-subtle)' }}>
        <div>
          <span className="text-xs font-label uppercase tracking-wider text-[#B8422E] font-bold flex items-center gap-1">
            <Send className="w-4 h-4" /> Marketing &amp; Social Automation
          </span>
          <h1 className="font-display font-medium text-2xl text-[var(--text-primary)]">
            Campaigns, Coupons &amp; Auto-Publishers
          </h1>
        </div>

        <button
          onClick={handleSyncFeeds}
          className="button-primary px-4 py-2.5 rounded-lg text-xs font-label uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-sm hover:scale-105 transition-all"
        >
          <RefreshCw className="w-4 h-4" />
          <span>Sync Social Feeds Now</span>
        </button>
      </div>

      {syncSuccess && (
        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/40 text-emerald-600 text-xs font-label font-bold flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>Telegram &amp; Instagram channels successfully synchronized with latest posts!</span>
        </div>
      )}

      {/* Social Channel Auto-Publish Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Telegram Channel Card */}
        <div className="p-6 rounded-2xl bg-stone-900 text-white border border-sky-500/30 flex flex-col gap-5 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-500/40 flex items-center justify-center text-sky-400">
                <FaTelegramPlane size={22} />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-base text-white">Telegram Broadcast Engine</span>
                <span className="text-xs font-mono text-sky-400">@addisfoodies (152.4K Subscribers)</span>
              </div>
            </div>

            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={autoTelegram}
                onChange={() => setAutoTelegram(!autoTelegram)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-stone-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-sky-500"></div>
            </label>
          </div>

          <p className="text-xs font-body text-slate-300">
            Automatically formats inspection posts with ETB price badges, location map links, and broadcasts to Telegram.
          </p>

          <div className="p-3 rounded-xl bg-black/40 border border-white/10 text-xs font-mono flex items-center justify-between">
            <span className="text-slate-400">Auto Forwarding:</span>
            <span className="text-emerald-400 font-bold">{autoTelegram ? 'ACTIVE 🟢' : 'PAUSED 🔴'}</span>
          </div>
        </div>

        {/* Instagram Reels Card */}
        <div className="p-6 rounded-2xl bg-stone-900 text-white border border-pink-500/30 flex flex-col gap-5 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-pink-500/20 border border-pink-500/40 flex items-center justify-center text-pink-400">
                <FaInstagram size={22} />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-base text-white">Instagram Reels Auto-Sync</span>
                <span className="text-xs font-mono text-pink-400">@addis.foodie (98.6K Followers)</span>
              </div>
            </div>

            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={autoInstagram}
                onChange={() => setAutoInstagram(!autoInstagram)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-stone-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pink-500"></div>
            </label>
          </div>

          <p className="text-xs font-body text-slate-300">
            Syncs video reel metadata and embeds Instagram video player reels on the main website feed.
          </p>

          <div className="p-3 rounded-xl bg-black/40 border border-white/10 text-xs font-mono flex items-center justify-between">
            <span className="text-slate-400">Auto Forwarding:</span>
            <span className="text-emerald-400 font-bold">{autoInstagram ? 'ACTIVE 🟢' : 'PAUSED 🔴'}</span>
          </div>
        </div>
      </div>

      {/* Push Notification Broadcaster & Preview */}
      <div className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col gap-6 shadow-xs">
        <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: 'var(--border-subtle)' }}>
          <div className="flex items-center gap-2">
            <Bell className="w-5 h-5 text-[#B8422E]" />
            <h3 className="font-display font-medium text-xl text-[var(--text-primary)]">
              Mobile Push Notification Engine
            </h3>
          </div>
          <span className="text-xs font-label text-slate-400">Target Audience: 154.8K Foodies</span>
        </div>

        {pushSent && (
          <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/40 text-emerald-600 text-xs font-label font-bold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>Push notification broadcasted to all mobile devices!</span>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <form onSubmit={handleSendPush} className="lg:col-span-2 flex flex-col gap-4 text-xs font-body">
            <div className="flex flex-col gap-1">
              <label className="font-label uppercase text-[10px] text-slate-400 font-bold">Push Title</label>
              <input
                type="text"
                required
                value={pushTitle}
                onChange={(e) => setPushTitle(e.target.value)}
                className="w-full p-2.5 rounded-lg border border-[var(--border-subtle)] bg-black/5 dark:bg-white/5 text-[var(--text-primary)] focus:outline-none"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-label uppercase text-[10px] text-slate-400 font-bold">Push Message Body</label>
              <textarea
                rows={3}
                required
                value={pushBody}
                onChange={(e) => setPushBody(e.target.value)}
                className="w-full p-2.5 rounded-lg border border-[var(--border-subtle)] bg-black/5 dark:bg-white/5 text-[var(--text-primary)] focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="button-primary py-3 rounded-lg font-label uppercase text-xs tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:scale-102 transition-all"
            >
              <Bell className="w-4 h-4" />
              <span>Broadcast Push Notification</span>
            </button>
          </form>

          {/* Device Live Preview */}
          <div className="p-4 rounded-2xl bg-[#1A1C1E] text-white border border border-[#B8422E]/40 flex flex-col gap-3 shadow-md">
            <span className="text-[10px] font-label uppercase text-slate-400 font-bold flex items-center gap-1">
              <Smartphone className="w-3.5 h-3.5 text-amber-400" /> Device Lockscreen Preview
            </span>
            <div className="p-3 rounded-xl bg-white/10 border border-white/20 flex flex-col gap-1 shadow-inner">
              <div className="flex items-center justify-between text-[9px] font-label text-slate-300">
                <span>ADDIS FOODIE</span>
                <span>NOW</span>
              </div>
              <span className="font-bold text-xs text-white">{pushTitle}</span>
              <p className="text-[11px] text-slate-200 line-clamp-2">{pushBody}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
