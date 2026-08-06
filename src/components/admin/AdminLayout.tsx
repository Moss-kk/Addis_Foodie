'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Menu, 
  X, 
  Sparkles, 
  Search, 
  Crown, 
  ArrowLeft, 
  Bell, 
  ShieldCheck, 
  User, 
  Clock, 
  AlertTriangle,
  RefreshCw
} from 'lucide-react';
import { AdminSidebar } from './AdminSidebar';
import { CommandPalette } from './CommandPalette';
import { AdminAiCopilot } from './AdminAiCopilot';
import { AdminToast, ToastMessage } from './ui/AdminToast';
import { AdminTab } from '../../types/admin';

interface AdminLayoutProps {
  children: React.ReactNode;
  activeTab: AdminTab;
  onTabChange: (tab: AdminTab) => void;
  title?: string;
  subtitle?: string;
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({
  children,
  activeTab,
  onTabChange,
  title = 'Addis Foodie Control Center',
  subtitle = 'Enterprise SaaS Administration & Analytics Platform',
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [aiCopilotOpen, setAiCopilotOpen] = useState(false);
  const [copilotInitialPrompt, setCopilotInitialPrompt] = useState('');
  const [toasts, setToasts] = useState<ToastMessage[]>([
    {
      id: 'welcome-toast',
      type: 'success',
      title: 'Enterprise Portal Active',
      message: 'System synced with 184 active restaurants across Addis Ababa.',
    },
  ]);

  // Session Timeout Countdown Warning (Phase 12 requirement)
  const [sessionSeconds, setSessionSeconds] = useState(3600);
  const [showSessionWarning, setShowSessionWarning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setSessionSeconds((prev) => {
        if (prev <= 300) setShowSessionWarning(true);
        return prev > 0 ? prev - 1 : 0;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatSessionTime = (totalSeconds: number) => {
    const m = Math.floor(totalSeconds / 60);
    const s = totalSeconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const handleDismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleOpenCopilotWithPrompt = (prompt?: string) => {
    if (prompt) setCopilotInitialPrompt(prompt);
    setAiCopilotOpen(true);
  };

  return (
    <div className="min-h-screen bg-[var(--bg-app)] text-[var(--text-primary)] font-body flex flex-col antialiased selection:bg-[#B8422E] selection:text-white">
      {/* Top Main Navigation Header */}
      <header className="sticky top-0 z-40 bg-[#1A1C1E] text-white border-b border-[#B8422E]/30 px-4 sm:px-6 py-3 flex items-center justify-between shadow-md">
        {/* Left Side: Mobile Menu Button & Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-7 h-7 rounded bg-[#B8422E] text-white font-display font-bold text-xs flex items-center justify-center group-hover:scale-105 transition-transform">
              AF
            </div>
            <span className="font-display font-medium text-base text-white tracking-wide">
              Addis Foodie <span className="text-xs font-label text-slate-400 font-normal hidden sm:inline">| Admin</span>
            </span>
          </Link>

          {/* Breadcrumb Back to Main Website */}
          <Link
            href="/"
            className="hidden lg:inline-flex items-center gap-1.5 ml-4 text-xs font-label uppercase text-slate-400 hover:text-[#B8422E] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#B8422E]" />
            <span>Public Site</span>
          </Link>
        </div>

        {/* Middle: Global Search Trigger Button */}
        <button
          onClick={() => setCommandPaletteOpen(true)}
          className="hidden md:flex items-center justify-between w-72 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-xs text-slate-400 hover:border-[#B8422E]/50 hover:bg-white/10 transition-all cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <Search className="w-3.5 h-3.5 text-[#B8422E]" />
            <span>Search or type command...</span>
          </div>
          <kbd className="px-1.5 py-0.5 rounded bg-white/10 font-mono text-[10px] text-slate-300 border border-white/10">
            ⌘K
          </kbd>
        </button>

        {/* Right Side Controls: Session Timer, AI Copilot, Super Admin Link */}
        <div className="flex items-center gap-3">
          {/* Session Timer */}
          <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>Session: {formatSessionTime(sessionSeconds)}</span>
          </div>

          {/* AI Copilot Button */}
          <button
            onClick={() => setAiCopilotOpen(true)}
            className="px-3 py-1.5 rounded-lg bg-[#B8422E] text-white font-label font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-sm hover:scale-105 transition-all cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span className="hidden sm:inline">AI Copilot</span>
          </button>

          {/* Super Admin Badge */}
          <Link
            href="/admin/super"
            className="px-3 py-1.5 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/40 text-xs font-label font-bold uppercase tracking-wider flex items-center gap-1 hover:bg-amber-500/30 transition-all"
          >
            <Crown className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Super Hub</span>
          </Link>
        </div>
      </header>

      {/* Session Timeout Warning Modal */}
      {showSessionWarning && (
        <div className="bg-amber-500 text-black px-4 py-2 text-xs font-label font-bold flex items-center justify-between shadow-md">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" />
            <span>Warning: Your admin session will expire in {formatSessionTime(sessionSeconds)}. Re-authenticate to extend.</span>
          </div>
          <button
            onClick={() => {
              setSessionSeconds(3600);
              setShowSessionWarning(false);
            }}
            className="px-2 py-0.5 bg-black text-white rounded text-[10px] uppercase cursor-pointer"
          >
            Extend Session
          </button>
        </div>
      )}

      {/* Main Body Shell: Desktop Sidebar + View Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Desktop Sidebar */}
        <div className="hidden md:block">
          <AdminSidebar activeTab={activeTab} onTabChange={onTabChange} />
        </div>

        {/* Mobile Drawer Overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex">
            <div className="w-72 bg-[#1A1C1E] h-full overflow-y-auto animate-slide-right">
              <div className="p-4 border-b border-white/10 flex items-center justify-between">
                <span className="font-display font-medium text-white text-sm">Navigation Menu</span>
                <button onClick={() => setMobileMenuOpen(false)} className="text-slate-400 hover:text-white p-1">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <AdminSidebar
                activeTab={activeTab}
                onTabChange={(tab) => {
                  onTabChange(tab);
                  setMobileMenuOpen(false);
                }}
              />
            </div>
          </div>
        )}

        {/* View Content Workspace */}
        <main className="flex-1 p-4 sm:p-8 max-w-7xl mx-auto w-full overflow-y-auto min-h-[calc(100vh-4rem)] flex flex-col gap-6">
          {children}
        </main>
      </div>

      {/* Integrated Modal Overlays */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onSelectTab={onTabChange}
        onOpenCopilot={handleOpenCopilotWithPrompt}
      />

      <AdminAiCopilot
        isOpen={aiCopilotOpen}
        onClose={() => setAiCopilotOpen(false)}
        initialPrompt={copilotInitialPrompt}
      />

      <AdminToast toasts={toasts} onDismiss={handleDismissToast} />
    </div>
  );
};
