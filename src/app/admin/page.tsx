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
  Sliders,
  Trash2,
  Edit,
  UploadCloud,
  Check
} from 'lucide-react';
import { FaInstagram, FaTelegramPlane } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MobileBottomNav from '../../components/layout/MobileBottomNav';

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
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-label uppercase text-[var(--text-secondary)] hover:text-[#B8422E] transition-colors"
          >
            <ArrowRight className="w-4 h-4 rotate-180 text-[#B8422E]" />
            <span>Back to Main Website</span>
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
              Addis Foodies Control Center
            </h1>
            <p className="text-xs sm:text-sm font-body text-slate-300">
              Manage website analytics, add reviews &amp; reels, update photo assets, and control Telegram &amp; Instagram auto-publishing.
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
          </div>
        </section>

        {/* TAB NAVIGATION BAR */}
        <div className="flex overflow-x-auto snap-x border-b pb-2 gap-2 scrollbar-none" style={{ borderColor: 'var(--border-subtle)' }}>
          {[
            { id: 'analytics', label: '1. Visitor Analytics', icon: BarChart3 },
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

        {/* TAB 1: VISITOR ANALYTICS & INSIGHTS */}
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
                  <span>Mobile Phone Share</span>
                  <Smartphone className="w-4 h-4 text-[#B8422E]" />
                </div>
                <span className="font-display font-medium text-3xl text-[#1A1C1E] dark:text-white">84.2%</span>
                <span className="text-[10px] font-label text-slate-500">15.8% Desktop / Tablet</span>
              </div>

              <div className="heritage-card flex flex-col gap-2">
                <div className="flex items-center justify-between text-slate-500 text-xs font-label">
                  <span>Social Traffic Sources</span>
                  <Globe className="w-4 h-4 text-[#B8422E]" />
                </div>
                <span className="font-display font-medium text-3xl text-[#1A1C1E] dark:text-white">80%</span>
                <span className="text-[10px] font-label text-sky-600 font-bold">Telegram &amp; Instagram</span>
              </div>
            </div>

            {/* Neighborhood & Channel Analytics Breakdown */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Neighborhood Traffic Share */}
              <div className="heritage-card flex flex-col gap-4">
                <h3 className="font-display font-medium text-xl border-b pb-3" style={{ borderColor: 'var(--border-subtle)' }}>
                  Top Neighborhood Interest (Addis Ababa)
                </h3>

                <div className="flex flex-col gap-3 text-xs font-label">
                  <div>
                    <div className="flex justify-between pb-1">
                      <span>Bole (Atlas, Medhaniallem, Edna Mall)</span>
                      <span className="font-bold text-[#B8422E]">42% (65.0K visitors)</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                      <div className="h-full bg-[#B8422E] rounded-full w-[42%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between pb-1">
                      <span>Kazanchis (UNECA &amp; Commercial Hub)</span>
                      <span className="font-bold text-[#B8422E]">28% (43.3K visitors)</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                      <div className="h-full bg-[#B8422E] rounded-full w-[28%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between pb-1">
                      <span>Piassa (Tewdros Sq &amp; Heritage Cafes)</span>
                      <span className="font-bold text-[#B8422E]">18% (27.8K visitors)</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                      <div className="h-full bg-[#B8422E] rounded-full w-[18%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between pb-1">
                      <span>Sarbet &amp; Bisrate Gabriel</span>
                      <span className="font-bold text-[#B8422E]">12% (18.5K visitors)</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                      <div className="h-full bg-[#B8422E] rounded-full w-[12%]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Traffic Acquisition Sources */}
              <div className="heritage-card flex flex-col gap-4">
                <h3 className="font-display font-medium text-xl border-b pb-3" style={{ borderColor: 'var(--border-subtle)' }}>
                  Traffic Acquisition Channels
                </h3>

                <div className="flex flex-col gap-3 text-xs font-label">
                  <div className="p-3 rounded-md border flex items-center justify-between" style={{ borderColor: 'var(--border-subtle)' }}>
                    <div className="flex items-center gap-2.5">
                      <FaTelegramPlane className="w-5 h-5 text-sky-400" />
                      <div>
                        <span className="block font-bold text-sm">Telegram (@addisfoodies)</span>
                        <span className="text-[10px] text-slate-500">Direct Channel Broadcasts</span>
                      </div>
                    </div>
                    <span className="font-bold text-base text-[#B8422E]">45% Share</span>
                  </div>

                  <div className="p-3 rounded-md border flex items-center justify-between" style={{ borderColor: 'var(--border-subtle)' }}>
                    <div className="flex items-center gap-2.5">
                      <FaInstagram className="w-5 h-5 text-pink-400" />
                      <div>
                        <span className="block font-bold text-sm">Instagram (@addis.foodie)</span>
                        <span className="text-[10px] text-slate-500">Reels &amp; Story Bio Links</span>
                      </div>
                    </div>
                    <span className="font-bold text-base text-[#B8422E]">35% Share</span>
                  </div>

                  <div className="p-3 rounded-md border flex items-center justify-between" style={{ borderColor: 'var(--border-subtle)' }}>
                    <div className="flex items-center gap-2.5">
                      <Globe className="w-5 h-5 text-[#B8422E]" />
                      <div>
                        <span className="block font-bold text-sm">Direct &amp; Web Search</span>
                        <span className="text-[10px] text-slate-500">Google Search &amp; Bookmarks</span>
                      </div>
                    </div>
                    <span className="font-bold text-base text-[#B8422E]">20% Share</span>
                  </div>
                </div>
              </div>

            </div>
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
