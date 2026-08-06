'use client';

import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Command, 
  ArrowRight, 
  UtensilsCrossed, 
  CheckCircle2, 
  Send, 
  Sparkles, 
  ShieldCheck, 
  FileText, 
  X,
  Zap
} from 'lucide-react';
import { AdminTab } from '../../types/admin';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTab: (tab: AdminTab) => void;
  onOpenCopilot: (prompt?: string) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onSelectTab,
  onOpenCopilot,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          setQuery('');
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const quickActions = [
    {
      title: 'Navigate to Executive Dashboard',
      category: 'NAVIGATION',
      icon: Command,
      action: () => {
        onSelectTab('dashboard');
        onClose();
      },
    },
    {
      title: 'Open Restaurant Registry & Health Scores',
      category: 'OPERATIONS',
      icon: UtensilsCrossed,
      action: () => {
        onSelectTab('restaurants');
        onClose();
      },
    },
    {
      title: 'Review Pending Approvals (7 items)',
      category: 'OPERATIONS',
      icon: CheckCircle2,
      action: () => {
        onSelectTab('verification');
        onClose();
      },
    },
    {
      title: 'Ask AI Copilot to summarize recent Kitfo reviews',
      category: 'AI ASSISTANT',
      icon: Sparkles,
      action: () => {
        onOpenCopilot('Summarize recent Kitfo reviews');
        onClose();
      },
    },
    {
      title: 'Trigger Telegram & Instagram Social Broadcast Sync',
      category: 'MARKETING',
      icon: Send,
      action: () => {
        onSelectTab('marketing');
        onClose();
      },
    },
    {
      title: 'Inspect RBAC & Security Audit Logs',
      category: 'SECURITY',
      icon: ShieldCheck,
      action: () => {
        onSelectTab('security');
        onClose();
      },
    },
  ];

  const filteredActions = query.trim()
    ? quickActions.filter((a) => a.title.toLowerCase().includes(query.toLowerCase()))
    : quickActions;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-start justify-center pt-20 p-4 animate-fade-in">
      <div className="w-full max-w-xl rounded-2xl bg-[#1A1C1E] text-white border border-[#B8422E] shadow-2xl overflow-hidden flex flex-col">
        {/* Search Header */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10">
          <Search className="w-5 h-5 text-[#B8422E]" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command, search pages, or ask AI... (Press Esc to exit)"
            className="flex-1 bg-transparent text-sm text-white placeholder-slate-400 focus:outline-none font-body"
          />
          <button onClick={onClose} className="p-1 text-slate-400 hover:text-white cursor-pointer">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Action List */}
        <div className="max-h-80 overflow-y-auto p-2 flex flex-col gap-1">
          {filteredActions.length === 0 ? (
            <div className="p-6 text-center text-xs text-slate-400 font-body">
              No matching commands. Press Enter to search AI Copilot for "{query}"...
            </div>
          ) : (
            filteredActions.map((item, idx) => {
              const Icon = item.icon;
              return (
                <button
                  key={idx}
                  onClick={item.action}
                  className="touch-target w-full p-3 rounded-xl flex items-center justify-between hover:bg-[#B8422E]/20 text-left transition-all cursor-pointer group border border-transparent hover:border-[#B8422E]/40"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#B8422E] group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-label font-bold text-white">{item.title}</span>
                      <span className="text-[10px] font-label uppercase text-slate-400">{item.category}</span>
                    </div>
                  </div>

                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#B8422E] group-hover:translate-x-1 transition-all" />
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2 bg-black/40 border-t border-white/10 flex items-center justify-between text-[11px] font-label text-slate-400">
          <div className="flex items-center gap-2">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>Protip: Press <kbd className="px-1 py-0.5 rounded bg-white/10 text-white font-mono text-[9px]">⌘K</kbd> anywhere</span>
          </div>
          <span>Addis Foodie Command Hub</span>
        </div>
      </div>
    </div>
  );
};
