'use client';

import React from 'react';
import { 
  BarChart3, 
  Users, 
  Eye, 
  Bookmark, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Star, 
  PlusCircle, 
  Sparkles,
  Award,
  Globe
} from 'lucide-react';
import { StatCard } from '../ui/StatCard';
import { mockAdminKpis, mockApprovals, mockRestaurants } from '../../../data/mockAdminData';
import { AdminTab } from '../../../types/admin';

interface DashboardViewProps {
  onNavigateTab: (tab: AdminTab) => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({ onNavigateTab }) => {
  return (
    <div className="flex flex-col gap-8 animate-fade-in">
      {/* Top Welcome Banner */}
      <section className="bg-[#1A1C1E] text-white p-6 sm:p-8 rounded-2xl flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-md border border-[#B8422E]/40">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-sm bg-[#B8422E] text-white text-[10px] font-label font-bold uppercase tracking-wider">
              EXECUTIVE DASHBOARD
            </span>
            <span className="flex items-center gap-1.5 text-xs font-label text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Automations &amp; Social Feeds Active 🟢
            </span>
          </div>
          <h1 className="font-display font-medium text-2xl sm:text-3xl text-white">
            Addis Foodie Operations &amp; Business Intelligence
          </h1>
          <p className="text-xs sm:text-sm font-body text-slate-300">
            Real-time monitoring across 184 restaurants, 154.8K monthly foodies, ETB price audits, and automated channel broadcasts.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <button
            onClick={() => onNavigateTab('posts')}
            className="button-primary px-4 py-2.5 rounded-lg text-xs font-label uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-sm hover:scale-105 transition-all"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Add Review Post</span>
          </button>

          <button
            onClick={() => onNavigateTab('verification')}
            className="px-4 py-2.5 rounded-lg bg-white/10 text-white font-label text-xs uppercase border border-white/20 hover:bg-white/20 transition-all flex items-center gap-2 cursor-pointer"
          >
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            <span>Approval Queue (7)</span>
          </button>
        </div>
      </section>

      {/* 8 High-Impact KPI Cards Grid */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-display font-medium text-lg text-[var(--text-primary)]">
            Key Performance Indicators
          </h2>
          <span className="text-xs font-label text-[var(--text-secondary)]">Updated 1 min ago</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {mockAdminKpis.map((kpi) => (
            <StatCard key={kpi.id} metric={kpi} />
          ))}
        </div>
      </div>

      {/* Two Column Layout: Analytics Chart & Pending Approvals Queue */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Weekly Traffic & Revenue Chart Card */}
        <div className="lg:col-span-2 p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col justify-between gap-6 shadow-xs">
          <div className="flex items-center justify-between border-b pb-4" style={{ borderColor: 'var(--border-subtle)' }}>
            <div>
              <span className="text-xs font-label text-slate-400 uppercase tracking-wider">Growth Trends</span>
              <h3 className="font-display font-medium text-xl text-[var(--text-primary)]">
                Weekly Traffic &amp; Reader Engagement
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-600 font-mono text-xs font-bold">
                +18.4% Traffic Growth
              </span>
            </div>
          </div>

          {/* Bar Chart Simulation */}
          <div className="flex items-end justify-between gap-2 h-44 pt-4 px-2">
            {[
              { day: 'Mon', views: '48K', height: '50%' },
              { day: 'Tue', views: '54K', height: '60%' },
              { day: 'Wed', views: '62K', height: '70%' },
              { day: 'Thu', views: '71K', height: '80%' },
              { day: 'Fri', views: '89K', height: '95%' },
              { day: 'Sat', views: '95K', height: '100%' },
              { day: 'Sun', views: '82K', height: '88%' },
            ].map((bar, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center gap-2 group cursor-pointer">
                <span className="text-[10px] font-mono text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity font-bold">
                  {bar.views}
                </span>
                <div className="w-full bg-[#1A1C1E] dark:bg-white/10 group-hover:bg-[#B8422E] rounded-t-md transition-all duration-300" style={{ height: bar.height }} />
                <span className="text-xs font-label font-bold text-[var(--text-primary)]">{bar.day}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between border-t pt-3 text-xs font-label text-[var(--text-secondary)]" style={{ borderColor: 'var(--border-subtle)' }}>
            <span>Peak Day: Saturday (95,000 views)</span>
            <button
              onClick={() => onNavigateTab('analytics')}
              className="text-[#B8422E] font-bold hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>Full Analytics Report</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Pending Approvals Quick Queue */}
        <div className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col justify-between gap-4 shadow-xs">
          <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: 'var(--border-subtle)' }}>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-500" />
              <h3 className="font-display font-medium text-lg text-[var(--text-primary)]">Pending Approvals</h3>
            </div>
            <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-600 font-mono text-xs font-bold">
              {mockApprovals.length} Pending
            </span>
          </div>

          <div className="flex flex-col gap-3">
            {mockApprovals.map((app) => (
              <div key={app.id} className="p-3 rounded-xl border border-[var(--border-subtle)] bg-black/5 dark:bg-white/5 flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs text-[var(--text-primary)]">{app.restaurantName}</span>
                  <span className="text-[10px] font-mono text-slate-400">{app.neighborhood}</span>
                </div>
                <p className="text-[11px] font-body text-[var(--text-secondary)] line-clamp-1">{app.notes}</p>
                <div className="flex items-center justify-between pt-1 border-t border-black/5 dark:border-white/5">
                  <span className="text-[9px] font-label text-slate-400 uppercase">{app.documentType}</span>
                  <button
                    onClick={() => onNavigateTab('verification')}
                    className="text-[11px] font-label uppercase font-bold text-[#B8422E] hover:underline cursor-pointer"
                  >
                    Review Document &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => onNavigateTab('verification')}
            className="w-full py-2 rounded-lg border border-[var(--border-subtle)] hover:border-[#B8422E] text-xs font-label uppercase font-bold text-center cursor-pointer transition-colors"
          >
            View All Approvals
          </button>
        </div>
      </div>

      {/* Top Saved Foods Audit Leaderboard */}
      <div className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col gap-5 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b pb-4 gap-2" style={{ borderColor: 'var(--border-subtle)' }}>
          <div>
            <span className="text-xs font-label uppercase tracking-wider text-amber-500 font-bold flex items-center gap-1">
              <Bookmark className="w-3.5 h-3.5 fill-amber-500" /> Bookmarks Leaderboard
            </span>
            <h3 className="font-display font-medium text-xl text-[var(--text-primary)]">
              Most Saved Foods &amp; Price Audits
            </h3>
          </div>
          <button
            onClick={() => onNavigateTab('restaurants')}
            className="text-xs font-label uppercase text-[#B8422E] font-bold hover:underline flex items-center gap-1 cursor-pointer"
          >
            <span>Manage All Restaurants</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {mockRestaurants.slice(0, 3).map((r, idx) => (
            <div key={r.id} className="p-4 rounded-xl border border-[var(--border-subtle)] bg-black/5 dark:bg-white/5 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#1A1C1E] text-white font-mono text-sm font-bold flex items-center justify-center shrink-0">
                #{idx + 1}
              </span>
              <div className="flex flex-col gap-0.5 overflow-hidden">
                <span className="font-bold text-xs text-[var(--text-primary)] truncate">{r.name}</span>
                <span className="text-[11px] font-label text-[var(--text-secondary)]">{r.neighborhood} • {r.priceRange}</span>
                <span className="text-[10px] font-mono text-emerald-600 font-bold">Health Score: {r.healthScore}/100</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
