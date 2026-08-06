'use client';

import React, { useState } from 'react';
import { TrendingUp, TrendingDown, Info, ArrowUpRight, X } from 'lucide-react';
import { KpiMetric } from '../../../types/admin';

interface StatCardProps {
  metric: KpiMetric;
}

export const StatCard: React.FC<StatCardProps> = ({ metric }) => {
  const [showDrilldown, setShowDrilldown] = useState(false);

  // SVG Sparkline calculation
  const points = metric.sparkline;
  const min = Math.min(...points);
  const max = Math.max(...points) || 1;
  const height = 30;
  const width = 100;
  
  const pathD = points.reduce((acc, val, i) => {
    const x = (i / (points.length - 1)) * width;
    const y = height - ((val - min) / (max - min || 1)) * (height - 6) - 3;
    return i === 0 ? `M ${x} ${y}` : `${acc} L ${x} ${y}`;
  }, '');

  return (
    <>
      <div
        onClick={() => setShowDrilldown(true)}
        className="heritage-card group relative flex flex-col justify-between gap-3 p-5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[#B8422E] hover:shadow-md transition-all duration-200 cursor-pointer overflow-hidden"
      >
        {/* Top Header */}
        <div className="flex items-center justify-between">
          <span className="text-xs font-label text-[var(--text-secondary)] uppercase tracking-wider">
            {metric.title}
          </span>
          <div className="flex items-center gap-1.5">
            <span
              className={`w-2 h-2 rounded-full ${
                metric.status === 'healthy'
                  ? 'bg-emerald-500 animate-pulse'
                  : metric.status === 'warning'
                  ? 'bg-amber-500'
                  : 'bg-red-500'
              }`}
            />
            <ArrowUpRight className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 group-hover:text-[#B8422E] transition-all" />
          </div>
        </div>

        {/* Value & Sparkline */}
        <div className="flex items-baseline justify-between gap-2 my-1">
          <span className="font-display font-bold text-2xl sm:text-3xl text-[var(--text-primary)]">
            {metric.value}
          </span>

          {/* SVG Sparkline */}
          <div className="w-24 h-8 shrink-0">
            <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full overflow-visible">
              <path
                d={pathD}
                fill="none"
                stroke={metric.isPositive ? '#10B981' : '#EF4444'}
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Footer Trend & Period */}
        <div className="flex items-center justify-between text-[11px] font-label border-t pt-2" style={{ borderColor: 'var(--border-subtle)' }}>
          <span
            className={`font-bold flex items-center gap-1 ${
              metric.isPositive ? 'text-emerald-600 dark:text-emerald-400' : 'text-amber-600 dark:text-amber-400'
            }`}
          >
            {metric.isPositive ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
            <span>{metric.change}</span>
          </span>

          <span className="text-[var(--text-secondary)]">{metric.period}</span>
        </div>
      </div>

      {/* Drill-down Modal Drawer */}
      {showDrilldown && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
          <div className="w-full max-w-lg rounded-2xl bg-[#1A1C1E] text-white border border-[#B8422E] p-6 flex flex-col gap-5 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <Info className="w-5 h-5 text-[#B8422E]" />
                <h3 className="font-display font-medium text-xl text-white">{metric.title} Breakdown</h3>
              </div>
              <button
                onClick={() => setShowDrilldown(false)}
                className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-white/10 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-col gap-3 text-xs font-body">
              <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
                <span className="text-slate-400 font-label uppercase">Current Value</span>
                <span className="font-mono font-bold text-lg text-emerald-400">{metric.value}</span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
                <span className="text-slate-400 font-label uppercase">Monthly Trend</span>
                <span className="font-mono font-bold text-sky-400">{metric.change} ({metric.period})</span>
              </div>

              <div className="flex flex-col gap-2 p-3 rounded-lg bg-white/5 border border-white/10">
                <span className="text-slate-400 font-label uppercase">7-Day Trailing Graph</span>
                <div className="flex items-end justify-between gap-1 h-20 pt-4">
                  {metric.sparkline.map((val, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                      <div
                        className="w-full bg-[#B8422E] rounded-t-sm transition-all"
                        style={{ height: `${(val / max) * 100}%` }}
                      />
                      <span className="text-[9px] font-mono text-slate-400">D{idx + 1}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-2 border-t border-white/10">
              <button
                onClick={() => setShowDrilldown(false)}
                className="button-primary px-4 py-2 rounded-md text-xs font-label uppercase tracking-wider cursor-pointer"
              >
                Close Drilldown
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
