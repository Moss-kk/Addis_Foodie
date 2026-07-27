'use client';

import React from 'react';
import { BookOpen, Layers, Cpu, Code2, Globe, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function SrsOverviewSection() {
  const srsToc = [
    { num: '1.', title: 'Executive Summary & Vision' },
    { num: '2.', title: 'Business Model & KPIs' },
    { num: '3.', title: 'Editorial Philosophy & Audit Code' },
    { num: '4.', title: 'System Architecture & Data Flows' },
    { num: '5.', title: 'Prisma PostgreSQL Data Model' },
    { num: '6.', title: 'Addis AI Assistant NLU Specs' },
    { num: '7.', title: 'Social Sync Automation Pipeline' },
    { num: '8.', title: 'Short Video Reels & Shorts Engine' },
    { num: '9.', title: 'Interactive Food Map & Spatial GPS' },
    { num: '10.', title: 'Admin CMS & Content Approvals' },
    { num: '11.', title: 'Bilingual SEO (Amharic / English)' },
    { num: '12.', title: 'Security, Auth & Data Protection' },
  ];

  const mcpConnectors = [
    { name: 'GitHub MCP', desc: 'Code repository control' },
    { name: 'PostgreSQL MCP', desc: 'Prisma DB queries' },
    { name: 'Vercel MCP', desc: 'Edge deployment sync' },
    { name: 'Cloudinary MCP', desc: 'Reels & photo CDN' },
    { name: 'OpenAI / Gemini', desc: 'Addis AI Assistant NLU' },
    { name: 'Google Maps MCP', desc: 'GPS Pin clustering' },
    { name: 'Telegram Bot API', desc: 'Channel post sync' },
  ];

  return (
    <section className="w-full bg-[#111827] text-white rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl flex flex-col gap-8 relative overflow-hidden my-4">
      
      {/* Background Accent Glow */}
      <div className="absolute bottom-0 right-0 -mr-20 -mb-20 w-80 h-80 bg-[#FF8C00]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Title & Badge */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div className="flex flex-col gap-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E53935]/20 border border-[#E53935]/40 text-xs font-mono font-bold uppercase tracking-widest text-[#FF8C00] w-fit">
            <BookOpen className="w-4 h-4 text-[#FF8C00]" />
            <span>SOFTWARE REQUIREMENTS SPECIFICATION (SRS v5.0)</span>
          </div>
          <h2 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight">
            ADDIS FOODIES DIGITAL MEDIA & FOOD DISCOVERY PLATFORM (ADFP)
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 font-medium max-w-3xl">
            የሶፍትዌር መስፈርቶች መግለጫ (SRS) • System Specification, Architecture & MCP Connectors Overview
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/docs/ADDIS_FOODIES_SRS.md"
            target="_blank"
            className="touch-target px-5 py-3 rounded-xl bg-[#E53935] hover:bg-[#B71C1C] text-white text-xs font-extrabold uppercase tracking-wider transition-all shadow-lg flex items-center gap-2"
          >
            <span>Read SRS Doc (MD)</span>
          </a>
        </div>
      </div>

      {/* Main Grid: TOC + MCP Connectors */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left: SRS Table of Contents Table */}
        <div className="bg-black/40 p-6 rounded-2xl border border-white/10 flex flex-col gap-4">
          <h3 className="font-display font-bold text-lg text-amber-300 flex items-center gap-2">
            <Layers className="w-5 h-5 text-[#E53935]" />
            <span>SRS Specification Table of Contents Overview</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
            {srsToc.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/5 text-stone-200">
                <span className="text-[#E53935] font-bold">{item.num}</span>
                <span className="truncate">{item.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: MCP Connectors & Tech Stack */}
        <div className="bg-black/40 p-6 rounded-2xl border border-white/10 flex flex-col gap-4">
          <h3 className="font-display font-bold text-lg text-amber-300 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-[#FF8C00]" />
            <span>Integrated MCP Connectors & System Tools</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {mcpConnectors.map((mcp, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-0.5">
                <span className="font-display font-bold text-xs text-white flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{mcp.name}</span>
                </span>
                <span className="text-[11px] font-mono text-stone-400">{mcp.desc}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Summary Bar */}
      <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-stone-400 gap-2">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Bilingual EN / AM Platform Architecture • Version 5.0</span>
        </div>
        <div className="text-amber-300 font-bold">
          Addis Foodies Operating System • 2026 Edition
        </div>
      </div>

    </section>
  );
}
