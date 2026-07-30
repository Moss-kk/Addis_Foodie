'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  BarChart3, 
  Users, 
  Eye, 
  PlusCircle, 
  Film, 
  Image as ImageIcon, 
  Send, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  Smartphone,
  Globe,
  RefreshCw,
  Crown,
  UploadCloud,
  Check,
  Star,
  MessageSquare,
  AlertCircle,
  ThumbsUp,
  Sliders,
  Sparkles,
  Award,
  ChevronRight
} from 'lucide-react';
import { FaInstagram, FaTelegramPlane } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MobileBottomNav from '../../components/layout/MobileBottomNav';

const weeklyTrafficData = [
  { day: 'Mon', views: 48, label: '48K' },
  { day: 'Tue', views: 54, label: '54K' },
  { day: 'Wed', views: 62, label: '62K' },
  { day: 'Thu', views: 71, label: '71K' },
  { day: 'Fri', views: 89, label: '89K' },
  { day: 'Sat', views: 95, label: '95K' },
  { day: 'Sun', views: 82, label: '82K' },
];

const feedbackLogs = [
  {
    id: 'f-1',
    user: 'Amanuel Girma',
    location: 'Bole Atlas',
    rating: 5,
    category: 'Kitfo Inspection',
    comment: 'The Tiru Kitfo price audit was 100% accurate! Found the Ayeb and Gomen pairing recommendations super helpful.',
    sentiment: 'POSITIVE',
    date: '2 hours ago',
  },
  {
    id: 'f-2',
    user: 'Selamawit Tadesse',
    location: 'Kazanchis',
    rating: 4,
    category: 'Fasting Cafes',
    comment: 'Love the detailed ETB price logs! Please add more fasting vegetarian coffee spots in Kazanchis near UNECA.',
    sentiment: 'SUGGESTION',
    date: '5 hours ago',
  },
  {
    id: 'f-3',
    user: 'Dawit Hailu',
    location: 'Piassa',
    rating: 5,
    category: 'Kitfo Fest 2026',
    comment: 'Reserved my free pass for Kitfo Fest! Super smooth registration on mobile.',
    sentiment: 'POSITIVE',
    date: '1 day ago',
  },
  {
    id: 'f-4',
    user: 'Tigist Alemayehu',
    location: 'Sarbet',
    rating: 4,
    category: 'Delivery Courier App',
    comment: 'Delivery app is great, but delivery time to Sarbet during 6 PM rush traffic could be slightly faster.',
    sentiment: 'IMPROVEMENT AREA',
    date: '2 days ago',
  },
];

const improvementAreas = [
  {
    id: 'imp-1',
    title: 'Expand Fasting Vegetarian Cafes in Kazanchis',
    priority: 'HIGH PRIORITY',
    badgeColor: 'bg-red-500/20 text-red-600 border-red-500/40',
    mentions: '42 user requests',
    status: 'IN PROGRESS',
    description: 'Community requested itemized ETB price audits for 10+ new fasting coffee and pastry spots near UNECA Kazanchis.',
  },
  {
    id: 'imp-2',
    title: 'Optimize Peak Courier Dispatch in Sarbet',
    priority: 'MEDIUM PRIORITY',
    badgeColor: 'bg-amber-500/20 text-amber-600 border-amber-500/40',
    mentions: '18 user requests',
    status: 'UNDER REVIEW',
    description: 'Partner with additional courier drivers in Sarbet and Bisrate Gabriel during 5 PM - 7 PM rush hour.',
  },
  {
    id: 'imp-3',
    title: 'Kitfo Fest 2026 Ticket Fast-Track QR Scanner',
    priority: 'LOW PRIORITY',
    badgeColor: 'bg-emerald-500/20 text-emerald-600 border-emerald-500/40',
    mentions: '9 user requests',
    status: 'PLANNED',
    description: 'Add instant offline QR scan validation for festival passes at Monarch Rooftop gate.',
  },
];

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState<'analytics' | 'content' | 'media' | 'automation'>('analytics');

  // Form State for Adding New Review
  const [newRestaurant, setNewRestaurant] = useState('');
  const [newNeighborhood, setNewNeighborhood] = useState('Bole');
  const [newCategory, setNewCategory] = useState('Kitfo & Traditional');
  const [newPrice, setNewPrice] = useState('450');
  const [newCaption, setNewCaption] = useState('');
  const [reviewPublished, setReviewPublished] = useState(false);

  // Form State for Adding New Reel
  const [reelTitle, setReelTitle] = useState('');
  const [reelPlatform, setReelPlatform] = useState('INSTAGRAM REEL');
  const [reelUrl, setReelUrl] = useState('');
  const [reelPublished, setReelPublished] = useState(false);

  // Automation Toggles State
  const [autoTelegram, setAutoTelegram] = useState(true);
  const [autoInstagram, setAutoInstagram] = useState(true);
  const [autoReceipts, setAutoReceipts] = useState(true);
  const [broadcastSent, setBroadcastSent] = useState(false);

  // Mock Photo Assets
  const [photoAssets, setPhotoAssets] = useState([
    { id: '1', title: 'Hero Background Feast', path: '/images/ethiopian_feast_hero.png', spot: 'Hero Atmosphere' },
    { id: '2', title: 'Tiru Kitfo Special', path: '/telegram-imports/Yado kitfo.jpg', spot: 'Kitfo Fest Feature' },
    { id: '3', title: 'Queen Beef Burger Sizzle', path: '/telegram-imports/Queen Burger.jpg', spot: 'Burger Battle Feature' },
    { id: '4', title: 'Vanilla Fasting Iced Latte', path: '/telegram-imports/Vanilla Fasting Iced late.jpg', spot: 'Coffee Week Feature' },
  ]);

  const handlePublishReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (newRestaurant) {
      setReviewPublished(true);
      setTimeout(() => setReviewPublished(false), 4000);
    }
  };

  const handlePublishReel = (e: React.FormEvent) => {
    e.preventDefault();
    if (reelTitle) {
      setReelPublished(true);
      setTimeout(() => setReelPublished(false), 4000);
    }
  };

  const handleTriggerBroadcast = () => {
    setBroadcastSent(true);
    setTimeout(() => setBroadcastSent(false), 4000);
  };

  return (
    <div
      className="flex flex-col min-h-screen transition-colors duration-300 pb-16 sm:pb-0 max-w-full overflow-x-hidden"
      style={{ backgroundColor: 'var(--bg-app)', color: 'var(--text-primary)' }}
    >
      <Header />

      <main className="flex-1 site-container py-8 sm:py-12 flex flex-col gap-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-label uppercase text-[var(--text-secondary)] hover:text-[#B8422E] transition-colors"
          >
            <ArrowRight className="w-4 h-4 rotate-180 text-[#B8422E]" />
            <span>Back to Main Website</span>
          </Link>

          <Link
            href="/admin/super"
            className="px-3.5 py-1.5 rounded-sm bg-[#B8422E] text-white text-xs font-label font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-xs hover:scale-105 transition-all"
          >
            <Crown className="w-3.5 h-3.5 text-white" />
            <span>Super Admin Portal 👑</span>
          </Link>
        </div>

        {/* ADMIN PORTAL HEADER */}
        <section className="bg-[#1A1C1E] text-white p-6 sm:p-10 rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xs border border-[var(--border-subtle)]">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-sm bg-[#B8422E] text-white text-[10px] font-label font-bold uppercase tracking-wider">
                ADMIN PORTAL
              </span>
              <span className="flex items-center gap-1.5 text-xs font-label text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Automations Active 🟢
              </span>
            </div>
            <h1 className="font-display font-medium text-3xl sm:text-4xl text-white">
              Addis Foodies Control Center &amp; Analytics
            </h1>
            <p className="text-xs sm:text-sm font-body text-slate-300">
              Manage website analytics, user feedback, improvement areas, add reviews &amp; reels, update photo assets, and control Telegram &amp; Instagram auto-publishing.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => setActiveTab('content')}
              className="button-primary px-4 py-2.5 rounded-md text-xs font-label uppercase tracking-wider flex items-center gap-1.5 cursor-pointer"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Add New Review</span>
            </button>

            <Link
              href="/admin/super"
              className="px-4 py-2.5 rounded-md bg-white/10 text-white font-label text-xs uppercase border border-white/20 hover:bg-white/20 transition-all flex items-center gap-1.5"
            >
              <Crown className="w-4 h-4 text-amber-400" />
              <span>Super Admin Portal</span>
            </Link>
          </div>
        </section>

        {/* TAB NAVIGATION BAR */}
        <div className="flex overflow-x-auto snap-x border-b pb-2 gap-2 scrollbar-none" style={{ borderColor: 'var(--border-subtle)' }}>
          {[
            { id: 'analytics', label: '1. Analytics & Feedback Insights', icon: BarChart3 },
            { id: 'content', label: '2. Add Reviews & Reels', icon: PlusCircle },
            { id: 'media', label: '3. Photo Asset Manager', icon: ImageIcon },
            { id: 'automation', label: '4. Telegram & Instagram Auto', icon: Send },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`touch-target px-4 py-2.5 rounded-md text-xs font-label uppercase tracking-wider transition-all flex items-center gap-2 shrink-0 cursor-pointer border ${
                  isActive
                    ? 'bg-[#1A1C1E] text-white border-[#B8422E]'
                    : 'bg-white/5 text-[var(--text-primary)] border-[var(--border-subtle)] hover:border-[#B8422E]/50'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#B8422E]' : 'text-slate-500'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* TAB 1: VISITOR ANALYTICS, FEEDBACK & IMPROVEMENT AREAS */}
        {activeTab === 'analytics' && (
          <div className="flex flex-col gap-8">
            
            {/* KPI Metrics Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="heritage-card flex flex-col gap-2">
                <div className="flex items-center justify-between text-slate-500 text-xs font-label">
                  <span>Monthly Visitors</span>
                  <Users className="w-4 h-4 text-[#B8422E]" />
                </div>
                <span className="font-display font-medium text-3xl text-[#1A1C1E] dark:text-white">154.8K</span>
                <span className="text-[10px] font-label text-emerald-600 font-bold flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" /> +18.4% vs last month
                </span>
              </div>

              <div className="heritage-card flex flex-col gap-2">
                <div className="flex items-center justify-between text-slate-500 text-xs font-label">
                  <span>Total Page Views</span>
                  <Eye className="w-4 h-4 text-[#B8422E]" />
                </div>
                <span className="font-display font-medium text-3xl text-[#1A1C1E] dark:text-white">412.6K</span>
                <span className="text-[10px] font-label text-emerald-600 font-bold flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" /> +24.1% engagement
                </span>
              </div>

              <div className="heritage-card flex flex-col gap-2">
                <div className="flex items-center justify-between text-slate-500 text-xs font-label">
                  <span>Customer Rating</span>
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                </div>
                <span className="font-display font-medium text-3xl text-[#1A1C1E] dark:text-white">4.8 / 5.0</span>
                <span className="text-[10px] font-label text-emerald-600 font-bold">
                  Based on 1,420 verified user ratings
                </span>
              </div>

              <div className="heritage-card flex flex-col gap-2">
                <div className="flex items-center justify-between text-slate-500 text-xs font-label">
                  <span>Social Reach</span>
                  <Globe className="w-4 h-4 text-[#B8422E]" />
                </div>
                <span className="font-display font-medium text-3xl text-[#1A1C1E] dark:text-white">251.0K</span>
                <span className="text-[10px] font-label text-sky-600 font-bold">Telegram &amp; Instagram</span>
              </div>
            </div>

            {/* REAL INTERACTIVE SOCIAL MEDIA ANALYTICS & CHANNEL AUDIT */}
            <div className="p-6 sm:p-8 rounded-2xl bg-stone-900 text-white border border-stone-800 flex flex-col gap-6 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-800 pb-4">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-400 font-mono text-[10px] font-bold uppercase tracking-wider border border-amber-500/30">
                      LIVE CHANNEL SYNC
                    </span>
                    <span className="text-xs text-stone-400 font-mono">Last Synced: Just now</span>
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white">
                    Telegram &amp; Instagram Channel Analytics
                  </h3>
                  <p className="text-xs text-stone-300 font-body">
                    Real-time audience reach, post forwarding metrics, and neighborhood audience breakdown for @addis.foodie.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => handleTriggerBroadcast()}
                    className="button-primary px-4 py-2 rounded-xl text-xs font-label font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-md hover:scale-105 transition-all"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Sync Social Feeds</span>
                  </button>
                </div>
              </div>

              {/* Social Channels Overview Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Telegram Channel Audit Card */}
                <div className="p-5 rounded-xl bg-stone-950 border border-sky-500/30 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-full bg-sky-500/20 border border-sky-500/40 flex items-center justify-center text-sky-400">
                        <FaTelegramPlane size={20} />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-display font-bold text-base text-white">Telegram Channel</span>
                        <span className="text-xs font-mono text-sky-400">@addisfoodies</span>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-sky-500/10 text-sky-400 font-mono font-bold text-xs">
                      152.4K Subs
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-stone-800 text-center">
                    <div className="flex flex-col p-2 rounded-lg bg-stone-900/60">
                      <span className="text-[10px] font-mono text-stone-400">Daily Views</span>
                      <span className="font-display font-bold text-lg text-white">42.8K</span>
                    </div>
                    <div className="flex flex-col p-2 rounded-lg bg-stone-900/60">
                      <span className="text-[10px] font-mono text-stone-400">Forwarding Rate</span>
                      <span className="font-display font-bold text-lg text-emerald-400">14.8%</span>
                    </div>
                    <div className="flex flex-col p-2 rounded-lg bg-stone-900/60">
                      <span className="text-[10px] font-mono text-stone-400">Monthly Growth</span>
                      <span className="font-display font-bold text-lg text-sky-400">+6.4K</span>
                    </div>
                  </div>

                  {/* Telegram Performance Bar */}
                  <div className="flex flex-col gap-1.5 pt-1">
                    <div className="flex justify-between text-[11px] font-mono text-stone-300">
                      <span>Post Reach Engagement</span>
                      <span className="text-emerald-400 font-bold">94.2% Verified</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-stone-800 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-sky-500 to-emerald-400 rounded-full w-[94%]" />
                    </div>
                  </div>
                </div>

                {/* Instagram Channel Audit Card */}
                <div className="p-5 rounded-xl bg-stone-950 border border-purple-500/30 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400">
                        <FaInstagram size={20} />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-display font-bold text-base text-white">Instagram &amp; Reels</span>
                        <span className="text-xs font-mono text-purple-400">@addis.foodie</span>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-400 font-mono font-bold text-xs">
                      98.6K Followers
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-stone-800 text-center">
                    <div className="flex flex-col p-2 rounded-lg bg-stone-900/60">
                      <span className="text-[10px] font-mono text-stone-400">Monthly Impr.</span>
                      <span className="font-display font-bold text-lg text-white">1.42M</span>
                    </div>
                    <div className="flex flex-col p-2 rounded-lg bg-stone-900/60">
                      <span className="text-[10px] font-mono text-stone-400">Reels Plays</span>
                      <span className="font-display font-bold text-lg text-amber-400">240.5K</span>
                    </div>
                    <div className="flex flex-col p-2 rounded-lg bg-stone-900/60">
                      <span className="text-[10px] font-mono text-stone-400">Profile Clicks</span>
                      <span className="font-display font-bold text-lg text-purple-400">18.2K</span>
                    </div>
                  </div>

                  {/* Instagram Performance Bar */}
                  <div className="flex flex-col gap-1.5 pt-1">
                    <div className="flex justify-between text-[11px] font-mono text-stone-300">
                      <span>Reels Viral Velocity</span>
                      <span className="text-amber-400 font-bold">88.7% Top Tier</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-stone-800 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-amber-400 rounded-full w-[88%]" />
                    </div>
                  </div>
                </div>

              </div>

              {/* Neighborhood Audience Demographic Distribution */}
              <div className="flex flex-col gap-3 pt-2">
                <span className="font-display font-bold text-sm text-stone-200 uppercase tracking-wider">
                  Audience Distribution by Addis Ababa District
                </span>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { district: 'Bole Atlas & Medhanialem', share: '42%', count: '64.0K users', color: 'bg-amber-500' },
                    { district: 'Kazanchis & ECA Area', share: '26%', count: '39.6K users', color: 'bg-sky-500' },
                    { district: 'Piassa & Churchill Ave', share: '18%', count: '27.4K users', color: 'bg-emerald-500' },
                    { district: 'Sarbet & Old Airport', share: '14%', count: '21.3K users', color: 'bg-purple-500' },
                  ].map((item, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-stone-950 border border-stone-800 flex flex-col gap-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-mono text-stone-300 font-bold">{item.district}</span>
                        <span className="font-mono text-amber-400 font-bold">{item.share}</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-stone-800 overflow-hidden my-1">
                        <div className={`h-full ${item.color} rounded-full`} style={{ width: item.share }} />
                      </div>
                      <span className="text-[10px] font-mono text-stone-400">{item.count}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* WEEKLY VISITOR TRAFFIC GRAPH & SENTIMENT BREAKDOWN */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Weekly Visitor Traffic Graph Visualizer (2 Cols) */}
              <div className="lg:col-span-2 heritage-card flex flex-col gap-5">
                <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: 'var(--border-subtle)' }}>
                  <div>
                    <h3 className="font-display font-medium text-xl" style={{ color: 'var(--text-primary)' }}>
                      Weekly Visitor Traffic Growth (Page Views)
                    </h3>
                    <p className="text-xs font-body text-slate-500">Real-time daily page view distribution mapped across Monday - Sunday</p>
                  </div>
                  <span className="text-xs font-label text-[#B8422E] font-bold">412.6K TOTAL</span>
                </div>

                {/* Graph Visualizer Bars */}
                <div className="flex items-end justify-between gap-3 h-48 pt-6 pb-2 px-2 border-b" style={{ borderColor: 'var(--border-subtle)' }}>
                  {weeklyTrafficData.map((item) => (
                    <div key={item.day} className="flex-1 flex flex-col items-center gap-2 group h-full justify-end">
                      <span className="text-[10px] font-label font-bold text-[#B8422E] opacity-0 group-hover:opacity-100 transition-opacity">
                        {item.label}
                      </span>
                      <div
                        className="w-full max-w-[36px] bg-gradient-to-t from-[#1A1C1E] to-[#B8422E] rounded-t-sm transition-all duration-500 group-hover:brightness-125"
                        style={{ height: `${(item.views / 100) * 100}%` }}
                      />
                      <span className="text-xs font-label text-slate-500">{item.day}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs font-label text-slate-500">
                  <span>Peak Day: Saturday (95,000 Views)</span>
                  <span>Average Daily: 73,400 Views</span>
                </div>
              </div>

              {/* Customer Sentiment & Rating Distribution (1 Col) */}
              <div className="heritage-card flex flex-col gap-5">
                <div className="border-b pb-3" style={{ borderColor: 'var(--border-subtle)' }}>
                  <h3 className="font-display font-medium text-xl" style={{ color: 'var(--text-primary)' }}>
                    Customer Sentiment Analysis
                  </h3>
                  <p className="text-xs font-body text-slate-500">AI analysis of 1,240 user reviews</p>
                </div>

                <div className="flex flex-col gap-3 text-xs font-label">
                  <div>
                    <div className="flex justify-between pb-1">
                      <span className="flex items-center gap-1 text-emerald-600 font-bold">
                        <ThumbsUp className="w-3.5 h-3.5" /> Positive Sentiment
                      </span>
                      <span className="font-bold text-[#1A1C1E] dark:text-white">88% (1,091 reviews)</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full w-[88%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between pb-1">
                      <span className="text-sky-600 font-bold">Suggestions &amp; Requests</span>
                      <span className="font-bold text-[#1A1C1E] dark:text-white">8% (99 reviews)</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                      <div className="h-full bg-sky-500 rounded-full w-[8%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between pb-1">
                      <span className="text-amber-600 font-bold">Improvement Areas</span>
                      <span className="font-bold text-[#1A1C1E] dark:text-white">4% (50 reviews)</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                      <div className="h-full bg-amber-500 rounded-full w-[4%]" />
                    </div>
                  </div>
                </div>

                {/* Neighborhood Satisfaction Ratings */}
                <div className="pt-3 border-t flex flex-col gap-2 text-xs font-label" style={{ borderColor: 'var(--border-subtle)' }}>
                  <span className="text-[10px] uppercase tracking-wider text-[#B8422E] font-bold">Neighborhood Satisfaction Index</span>
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <div className="p-2 rounded-md bg-white/5 border border-[var(--border-subtle)] flex flex-col gap-0.5">
                      <span className="text-[10px] text-slate-500">Bole Atlas</span>
                      <span className="font-bold text-sm text-[#B8422E]">4.9 / 5.0 ⭐</span>
                    </div>
                    <div className="p-2 rounded-md bg-white/5 border border-[var(--border-subtle)] flex flex-col gap-0.5">
                      <span className="text-[10px] text-slate-500">Piassa Heritage</span>
                      <span className="font-bold text-sm text-[#B8422E]">4.8 / 5.0 ⭐</span>
                    </div>
                    <div className="p-2 rounded-md bg-white/5 border border-[var(--border-subtle)] flex flex-col gap-0.5">
                      <span className="text-[10px] text-slate-500">Kazanchis</span>
                      <span className="font-bold text-sm text-[#B8422E]">4.7 / 5.0 ⭐</span>
                    </div>
                    <div className="p-2 rounded-md bg-white/5 border border-[var(--border-subtle)] flex flex-col gap-0.5">
                      <span className="text-[10px] text-slate-500">Sarbet</span>
                      <span className="font-bold text-sm text-[#B8422E]">4.6 / 5.0 ⭐</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* AI-EXTRACTED IMPROVEMENT AREAS SECTION */}
            <section className="flex flex-col gap-4">
              <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: 'var(--border-subtle)' }}>
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-[#B8422E]" />
                  <h3 className="font-display font-medium text-xl sm:text-2xl" style={{ color: 'var(--text-primary)' }}>
                    AI-Extracted Community Improvement Areas
                  </h3>
                </div>
                <span className="text-xs font-label text-[#B8422E] font-bold">Actionable Priority Tasks</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {improvementAreas.map((item) => (
                  <div key={item.id} className="heritage-card flex flex-col justify-between gap-4">
                    <div className="flex flex-col gap-2.5">
                      <div className="flex items-center justify-between">
                        <span className={`px-2.5 py-1 rounded-sm text-[10px] font-label font-bold uppercase border ${item.badgeColor}`}>
                          {item.priority}
                        </span>
                        <span className="text-[10px] font-label text-slate-400">{item.mentions}</span>
                      </div>

                      <h4 className="font-display font-medium text-base text-[#1A1C1E] dark:text-white leading-snug">
                        {item.title}
                      </h4>

                      <p className="text-xs font-body leading-relaxed text-slate-500">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t flex items-center justify-between text-xs font-label" style={{ borderColor: 'var(--border-subtle)' }}>
                      <span className="text-slate-400">Status: <strong className="text-[#B8422E]">{item.status}</strong></span>
                      <button
                        onClick={() => alert(`Task logged: ${item.title}`)}
                        className="text-[#B8422E] font-bold hover:underline flex items-center gap-1"
                      >
                        <span>Resolve</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* LIVE CUSTOMER FEEDBACK LOG STREAM */}
            <section className="heritage-card flex flex-col gap-5">
              <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: 'var(--border-subtle)' }}>
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-[#B8422E]" />
                  <h3 className="font-display font-medium text-xl">Recent User Feedback &amp; Review Logs</h3>
                </div>
                <span className="text-xs font-label text-slate-500">Showing latest verified feedback</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {feedbackLogs.map((fb) => (
                  <div
                    key={fb.id}
                    className="p-4 rounded-md border flex flex-col gap-2.5 bg-white/5"
                    style={{ borderColor: 'var(--border-subtle)' }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-display font-medium text-sm text-[#1A1C1E] dark:text-white">{fb.user}</span>
                        <span className="text-[10px] font-label text-slate-400">({fb.location})</span>
                      </div>
                      <span className={`px-2 py-0.5 rounded-sm text-[9px] font-label font-bold uppercase ${
                        fb.sentiment === 'POSITIVE' ? 'bg-emerald-500/20 text-emerald-600' :
                        fb.sentiment === 'SUGGESTION' ? 'bg-sky-500/20 text-sky-600' :
                        'bg-amber-500/20 text-amber-600'
                      }`}>
                        {fb.sentiment}
                      </span>
                    </div>

                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3.5 h-3.5 ${i < fb.rating ? 'text-amber-500 fill-amber-500' : 'text-slate-400'}`}
                        />
                      ))}
                      <span className="text-[11px] font-label text-slate-400 ml-1.5">• {fb.category}</span>
                    </div>

                    <p className="text-xs font-body leading-relaxed text-slate-600 dark:text-slate-300">
                      "{fb.comment}"
                    </p>

                    <span className="text-[10px] font-label text-slate-400 pt-1">{fb.date}</span>
                  </div>
                ))}
              </div>
            </section>

          </div>
        )}

        {/* TAB 2: ADD REVIEWS & REELS */}
        {activeTab === 'content' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Form 1: Add New Written Food Review */}
            <div className="heritage-card flex flex-col gap-5">
              <div className="flex items-center gap-2 border-b pb-3" style={{ borderColor: 'var(--border-subtle)' }}>
                <PlusCircle className="w-5 h-5 text-[#B8422E]" />
                <h3 className="font-display font-medium text-xl">Publish New Food Review</h3>
              </div>

              {reviewPublished && (
                <div className="p-3 rounded-md bg-emerald-500/10 border border-emerald-500 text-emerald-800 dark:text-emerald-300 text-xs font-label font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Review Published successfully! Auto-synced to Telegram &amp; Web.</span>
                </div>
              )}

              <form onSubmit={handlePublishReview} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-label uppercase text-[#B8422E]">Restaurant Name</label>
                  <input
                    type="text"
                    required
                    value={newRestaurant}
                    onChange={(e) => setNewRestaurant(e.target.value)}
                    placeholder="e.g. Tiru Kitfo Bole Special"
                    className="px-3.5 py-2.5 rounded-md border text-xs sm:text-sm font-medium focus:outline-none"
                    style={{ backgroundColor: 'var(--bg-app)', color: 'var(--text-primary)', borderColor: 'var(--border-subtle)' }}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-label uppercase text-[#B8422E]">Neighborhood</label>
                    <select
                      value={newNeighborhood}
                      onChange={(e) => setNewNeighborhood(e.target.value)}
                      className="px-3.5 py-2.5 rounded-md border text-xs font-medium focus:outline-none"
                      style={{ backgroundColor: 'var(--bg-app)', color: 'var(--text-primary)', borderColor: 'var(--border-subtle)' }}
                    >
                      <option value="Bole">Bole</option>
                      <option value="Kazanchis">Kazanchis</option>
                      <option value="Piassa">Piassa</option>
                      <option value="Sarbet">Sarbet</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-label uppercase text-[#B8422E]">Price (ETB)</label>
                    <input
                      type="number"
                      required
                      value={newPrice}
                      onChange={(e) => setNewPrice(e.target.value)}
                      placeholder="e.g. 450"
                      className="px-3.5 py-2.5 rounded-md border text-xs sm:text-sm font-medium focus:outline-none"
                      style={{ backgroundColor: 'var(--bg-app)', color: 'var(--text-primary)', borderColor: 'var(--border-subtle)' }}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-label uppercase text-[#B8422E]">Food Category</label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="px-3.5 py-2.5 rounded-md border text-xs font-medium focus:outline-none"
                    style={{ backgroundColor: 'var(--bg-app)', color: 'var(--text-primary)', borderColor: 'var(--border-subtle)' }}
                  >
                    <option value="Kitfo & Traditional">Kitfo &amp; Traditional</option>
                    <option value="Burgers & Fast Food">Burgers &amp; Fast Food</option>
                    <option value="Cafe & Coffee">Cafe &amp; Coffee</option>
                    <option value="Pastry & Desserts">Pastry &amp; Desserts</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-label uppercase text-[#B8422E]">Review Inspection Caption</label>
                  <textarea
                    rows={3}
                    value={newCaption}
                    onChange={(e) => setNewCaption(e.target.value)}
                    placeholder="Log authentic taste inspection details, butter quality, and Ayeb pairing..."
                    className="px-3.5 py-2.5 rounded-md border text-xs font-medium focus:outline-none"
                    style={{ backgroundColor: 'var(--bg-app)', color: 'var(--text-primary)', borderColor: 'var(--border-subtle)' }}
                  />
                </div>

                <button
                  type="submit"
                  className="button-primary w-full py-3 rounded-md text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                >
                  <UploadCloud className="w-4 h-4 text-white" />
                  <span>Publish Review to Web &amp; Telegram</span>
                </button>
              </form>
            </div>

            {/* Form 2: Add New 9:16 Video Reel */}
            <div className="heritage-card flex flex-col gap-5">
              <div className="flex items-center gap-2 border-b pb-3" style={{ borderColor: 'var(--border-subtle)' }}>
                <Film className="w-5 h-5 text-[#B8422E]" />
                <h3 className="font-display font-medium text-xl">Upload New 9:16 Video Reel</h3>
              </div>

              {reelPublished && (
                <div className="p-3 rounded-md bg-emerald-500/10 border border-emerald-500 text-emerald-800 dark:text-emerald-300 text-xs font-label font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Reel added to Video Reel Strip!</span>
                </div>
              )}

              <form onSubmit={handlePublishReel} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-label uppercase text-[#B8422E]">Reel Title</label>
                  <input
                    type="text"
                    required
                    value={reelTitle}
                    onChange={(e) => setReelTitle(e.target.value)}
                    placeholder="e.g. Sizzling Kitfo Butter Pour"
                    className="px-3.5 py-2.5 rounded-md border text-xs sm:text-sm font-medium focus:outline-none"
                    style={{ backgroundColor: 'var(--bg-app)', color: 'var(--text-primary)', borderColor: 'var(--border-subtle)' }}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-label uppercase text-[#B8422E]">Platform Badge</label>
                  <select
                    value={reelPlatform}
                    onChange={(e) => setReelPlatform(e.target.value)}
                    className="px-3.5 py-2.5 rounded-md border text-xs font-medium focus:outline-none"
                    style={{ backgroundColor: 'var(--bg-app)', color: 'var(--text-primary)', borderColor: 'var(--border-subtle)' }}
                  >
                    <option value="INSTAGRAM REEL">INSTAGRAM REEL</option>
                    <option value="TIKTOK TRENDING">TIKTOK TRENDING</option>
                    <option value="TELEGRAM REEL">TELEGRAM REEL</option>
                    <option value="VIRAL SPOTLIGHT">VIRAL SPOTLIGHT</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-label uppercase text-[#B8422E]">Video URL (MP4 / WebM)</label>
                  <input
                    type="url"
                    value={reelUrl}
                    onChange={(e) => setReelUrl(e.target.value)}
                    placeholder="https://assets.mixkit.co/videos/preview/mixkit-cooking..."
                    className="px-3.5 py-2.5 rounded-md border text-xs sm:text-sm font-medium focus:outline-none"
                    style={{ backgroundColor: 'var(--bg-app)', color: 'var(--text-primary)', borderColor: 'var(--border-subtle)' }}
                  />
                </div>

                <button
                  type="submit"
                  className="button-primary w-full py-3 rounded-md text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Film className="w-4 h-4 text-white" />
                  <span>Add Video Reel to Reels Strip</span>
                </button>
              </form>
            </div>

          </div>
        )}

        {/* TAB 3: PHOTO ASSET MANAGER */}
        {activeTab === 'media' && (
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: 'var(--border-subtle)' }}>
              <div>
                <h3 className="font-display font-medium text-xl" style={{ color: 'var(--text-primary)' }}>
                  Website Photo Asset Manager
                </h3>
                <p className="text-xs font-body text-slate-500">Swap out main hero photos, festival headers, and dish galleries</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {photoAssets.map((asset) => (
                <div
                  key={asset.id}
                  className="heritage-card flex flex-col justify-between gap-4"
                >
                  <div className="flex flex-col gap-2">
                    <div className="relative aspect-video w-full rounded-sm overflow-hidden bg-slate-900 border" style={{ borderColor: 'var(--border-subtle)' }}>
                      <Image
                        src={asset.path}
                        alt={asset.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-[10px] font-label text-[#B8422E] uppercase font-bold pt-1">{asset.spot}</span>
                    <h4 className="font-display font-medium text-sm text-[#1A1C1E] dark:text-white">{asset.title}</h4>
                  </div>

                  <div className="flex items-center gap-2 border-t pt-3" style={{ borderColor: 'var(--border-subtle)' }}>
                    <button
                      onClick={() => alert(`Selected ${asset.title} to replace photo.`)}
                      className="button-primary flex-1 py-2 text-[11px] uppercase tracking-wider rounded-sm flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <RefreshCw className="w-3 h-3 text-white" />
                      <span>Replace</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: TELEGRAM & INSTAGRAM AUTOMATION CONTROL CENTER */}
        {activeTab === 'automation' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left 2 Cols: Automation Toggles & Webhook Logs */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <div className="heritage-card flex flex-col gap-5">
                <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: 'var(--border-subtle)' }}>
                  <div className="flex items-center gap-2">
                    <Send className="w-5 h-5 text-[#B8422E]" />
                    <h3 className="font-display font-medium text-xl">Auto-Publishing Workflows</h3>
                  </div>
                  <span className="text-xs font-label text-emerald-600 font-bold">Bot Status: ACTIVE</span>
                </div>

                {/* Toggles */}
                <div className="flex flex-col gap-4 text-xs font-label">
                  <div className="p-3.5 rounded-md border flex items-center justify-between" style={{ borderColor: 'var(--border-subtle)' }}>
                    <div className="flex items-center gap-3">
                      <FaTelegramPlane className="w-5 h-5 text-sky-400" />
                      <div>
                        <span className="block font-bold text-sm">Telegram Channel (@addisfoodies)</span>
                        <span className="text-[10px] text-slate-500">Auto-post new reviews &amp; price receipt logs immediately</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setAutoTelegram(!autoTelegram)}
                      className={`px-3 py-1.5 rounded-full text-[11px] font-bold cursor-pointer transition-colors ${
                        autoTelegram ? 'bg-emerald-500 text-white' : 'bg-slate-700 text-slate-300'
                      }`}
                    >
                      {autoTelegram ? 'ENABLED ✓' : 'DISABLED ✗'}
                    </button>
                  </div>

                  <div className="p-3.5 rounded-md border flex items-center justify-between" style={{ borderColor: 'var(--border-subtle)' }}>
                    <div className="flex items-center gap-3">
                      <FaInstagram className="w-5 h-5 text-pink-400" />
                      <div>
                        <span className="block font-bold text-sm">Instagram Feed (@addis.foodie)</span>
                        <span className="text-[10px] text-slate-500">Sync published review photo galleries &amp; reels via Graph API</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setAutoInstagram(!autoInstagram)}
                      className={`px-3 py-1.5 rounded-full text-[11px] font-bold cursor-pointer transition-colors ${
                        autoInstagram ? 'bg-emerald-500 text-white' : 'bg-slate-700 text-slate-300'
                      }`}
                    >
                      {autoInstagram ? 'ENABLED ✓' : 'DISABLED ✗'}
                    </button>
                  </div>

                  <div className="p-3.5 rounded-md border flex items-center justify-between" style={{ borderColor: 'var(--border-subtle)' }}>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#B8422E]" />
                      <div>
                        <span className="block font-bold text-sm">Itemized ETB Price Receipt Log Sync</span>
                        <span className="text-[10px] text-slate-500">Automatically attach receipt breakdowns to posts</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setAutoReceipts(!autoReceipts)}
                      className={`px-3 py-1.5 rounded-full text-[11px] font-bold cursor-pointer transition-colors ${
                        autoReceipts ? 'bg-emerald-500 text-white' : 'bg-slate-700 text-slate-300'
                      }`}
                    >
                      {autoReceipts ? 'ENABLED ✓' : 'DISABLED ✗'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Webhook Activity Log Stream */}
              <div className="heritage-card flex flex-col gap-3 bg-[#121416] text-white">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="text-xs font-label text-[#B8422E] uppercase font-bold">Live Webhook Log Stream</span>
                  <span className="text-[10px] font-label text-slate-400">Telegram Bot API v6.2</span>
                </div>

                <div className="flex flex-col gap-2 font-mono text-[11px] text-slate-300 max-h-48 overflow-y-auto">
                  <div className="flex items-center justify-between border-b border-white/5 pb-1">
                    <span className="text-emerald-400">[2026-07-29 02:15] TELEGRAM POST SUCCESS</span>
                    <span className="text-slate-400">@addisfoodies • Message ID #4912</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/5 pb-1">
                    <span className="text-pink-400">[2026-07-29 01:40] INSTAGRAM GRAPH API SYNC</span>
                    <span className="text-slate-400">Media ID #91823091</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/5 pb-1">
                    <span className="text-emerald-400">[2026-07-28 23:10] TELEGRAM REEL PUBLISHED</span>
                    <span className="text-slate-400">Kitfo Video Clip • 45K Views</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col: Manual Broadcast Trigger */}
            <div className="heritage-card flex flex-col justify-between gap-6 self-start">
              <div className="flex flex-col gap-3">
                <h4 className="font-display font-medium text-lg border-b pb-2" style={{ borderColor: 'var(--border-subtle)' }}>
                  Manual Telegram Broadcast
                </h4>
                <p className="text-xs font-body text-slate-500">
                  Trigger an immediate instant notification broadcast to 150,000+ subscribers for major food festivals (Kitfo Fest, Food Expos).
                </p>

                {broadcastSent && (
                  <div className="p-3 rounded-md bg-emerald-500/10 border border-emerald-500 text-emerald-800 dark:text-emerald-300 text-xs font-label font-bold flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Broadcast Sent to 150,000+ Telegram Subscribers!</span>
                  </div>
                )}
              </div>

              <button
                onClick={handleTriggerBroadcast}
                className="button-primary w-full py-3.5 rounded-md text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <Send className="w-4 h-4 text-white" />
                <span>Send Immediate Broadcast</span>
              </button>
            </div>

          </div>
        )}

      </main>

      <Footer />
      <MobileBottomNav />
    </div>
  );
}
