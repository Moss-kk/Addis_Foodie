'use client';

import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Download, 
  FileSpreadsheet, 
  FileText, 
  PieChart, 
  Clock, 
  MapPin, 
  Smile, 
  Zap,
  CheckCircle2
} from 'lucide-react';

export const AnalyticsView: React.FC = () => {
  const [exportedFormat, setExportedFormat] = useState<string | null>(null);

  const handleExport = (format: 'PDF' | 'EXCEL') => {
    setExportedFormat(format);
    setTimeout(() => setExportedFormat(null), 3000);
  };

  return (
    <div className="flex flex-col gap-8 animate-fade-in">
      {/* View Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b pb-4 gap-4" style={{ borderColor: 'var(--border-subtle)' }}>
        <div>
          <span className="text-xs font-label uppercase tracking-wider text-[#B8422E] font-bold flex items-center gap-1">
            <BarChart3 className="w-4 h-4" /> Business Intelligence Studio
          </span>
          <h1 className="font-display font-medium text-2xl text-[var(--text-primary)]">
            Platform Analytics, Revenue &amp; Forecasting
          </h1>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => handleExport('PDF')}
            className="px-3.5 py-2 rounded-lg bg-[#1A1C1E] text-white text-xs font-label uppercase font-bold flex items-center gap-1.5 hover:bg-[#B8422E] transition-colors cursor-pointer"
          >
            <FileText className="w-4 h-4" />
            <span>Export PDF</span>
          </button>

          <button
            onClick={() => handleExport('EXCEL')}
            className="px-3.5 py-2 rounded-lg bg-emerald-700 text-white text-xs font-label uppercase font-bold flex items-center gap-1.5 hover:bg-emerald-600 transition-colors cursor-pointer"
          >
            <FileSpreadsheet className="w-4 h-4" />
            <span>Export Excel</span>
          </button>
        </div>
      </div>

      {exportedFormat && (
        <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/40 text-emerald-600 text-xs font-label font-bold flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>Full Analytics Report successfully exported in {exportedFormat} format!</span>
        </div>
      )}

      {/* Grid of Analytical Deep Dives */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* District Popularity Breakdown */}
        <div className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col gap-4 shadow-xs">
          <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: 'var(--border-subtle)' }}>
            <span className="text-xs font-label uppercase font-bold text-[var(--text-primary)] flex items-center gap-1">
              <MapPin className="w-4 h-4 text-[#B8422E]" /> District Traffic Share
            </span>
            <span className="text-[10px] font-mono text-slate-400">Addis Ababa</span>
          </div>

          <div className="flex flex-col gap-3">
            {[
              { district: 'Bole Atlas', share: '38%', count: '58.8K views' },
              { district: 'Bole Medhanialem', share: '29%', count: '44.8K views' },
              { district: 'Kazanchis UNECA', share: '18%', count: '27.8K views' },
              { district: 'Piassa & Sarbet', share: '15%', count: '23.4K views' },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col gap-1">
                <div className="flex justify-between text-xs font-body">
                  <span className="font-bold text-[var(--text-primary)]">{item.district}</span>
                  <span className="font-mono text-slate-400">{item.share} ({item.count})</span>
                </div>
                <div className="w-full h-2 rounded-full bg-black/10 dark:bg-white/10 overflow-hidden">
                  <div className="h-full bg-[#B8422E] rounded-full" style={{ width: item.share }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Peak Reservation Hours Heatmap */}
        <div className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col gap-4 shadow-xs">
          <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: 'var(--border-subtle)' }}>
            <span className="text-xs font-label uppercase font-bold text-[var(--text-primary)] flex items-center gap-1">
              <Clock className="w-4 h-4 text-amber-500" /> Peak Hour Demand Heatmap
            </span>
            <span className="text-[10px] font-mono text-emerald-600 font-bold">Live Traffic</span>
          </div>

          <div className="grid grid-cols-4 gap-2 pt-1 text-center font-mono text-xs">
            {[
              { time: '12:00 PM', level: 'HIGH', color: 'bg-amber-500/20 text-amber-600 border-amber-500/40' },
              { time: '1:30 PM', level: 'PEAK 🔥', color: 'bg-red-500/20 text-red-600 border-red-500/40' },
              { time: '5:00 PM', level: 'MOD', color: 'bg-sky-500/20 text-sky-600 border-sky-500/40' },
              { time: '7:30 PM', level: 'PEAK 🔥', color: 'bg-red-500/20 text-red-600 border-red-500/40' },
            ].map((slot, idx) => (
              <div key={idx} className={`p-2.5 rounded-xl border flex flex-col gap-1 ${slot.color}`}>
                <span className="text-[10px] font-bold">{slot.time}</span>
                <span className="text-[9px] font-bold uppercase">{slot.level}</span>
              </div>
            ))}
          </div>

          <p className="text-xs font-body text-[var(--text-secondary)]">
            1:30 PM and 7:30 PM generate 68% of total daily restaurant table reservations across Bole &amp; Kazanchis.
          </p>
        </div>

        {/* Sentiment Analysis Breakdown */}
        <div className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col gap-4 shadow-xs">
          <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: 'var(--border-subtle)' }}>
            <span className="text-xs font-label uppercase font-bold text-[var(--text-primary)] flex items-center gap-1">
              <Smile className="w-4 h-4 text-emerald-500" /> Review Sentiment Analysis
            </span>
            <span className="text-[10px] font-mono text-slate-400">4,920 Reviews</span>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-emerald-500/10 text-emerald-600 font-mono text-xs font-bold">
              <span>92% Positive Sentiment</span>
              <span>4,526 Reviews</span>
            </div>

            <div className="flex items-center justify-between p-2.5 rounded-lg bg-amber-500/10 text-amber-600 font-mono text-xs font-bold">
              <span>6% Constructive Feedback</span>
              <span>295 Reviews</span>
            </div>

            <div className="flex items-center justify-between p-2.5 rounded-lg bg-red-500/10 text-red-600 font-mono text-xs font-bold">
              <span>2% Flagged Anomalies</span>
              <span>99 Reviews</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
