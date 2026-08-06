'use client';

import React, { useState } from 'react';
import { 
  Sparkles, 
  Send, 
  X, 
  Bot, 
  User, 
  ShieldAlert, 
  FileSpreadsheet, 
  Flame, 
  TrendingUp,
  CheckCircle2,
  RefreshCw
} from 'lucide-react';
import { AiCopilotMessage } from '../../types/admin';

interface AdminAiCopilotProps {
  isOpen: boolean;
  onClose: () => void;
  initialPrompt?: string;
}

export const AdminAiCopilot: React.FC<AdminAiCopilotProps> = ({
  isOpen,
  onClose,
  initialPrompt = '',
}) => {
  const [messages, setMessages] = useState<AiCopilotMessage[]>([
    {
      id: 'm-1',
      sender: 'ai',
      text: 'Salam! I am your Addis Foodie Admin AI Copilot. How can I help optimize your portal today?',
      timestamp: 'Just now',
    },
  ]);
  const [input, setInput] = useState(initialPrompt);
  const [isThinking, setIsThinking] = useState(false);

  if (!isOpen) return null;

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMsg: AiCopilotMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: 'Just now',
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsThinking(true);

    // Simulate AI response logic
    setTimeout(() => {
      let aiText = '';
      let action: any = undefined;

      const lower = query.toLowerCase();

      if (lower.includes('kitfo') || lower.includes('summarize')) {
        aiText = `**Kitfo Review Sentiment Summary (Last 30 Days)**\n\n• **Overall Score**: 4.9 / 5.0 (142 reviews)\n• **Highlights**: 94% praised Habesha 2000 & Yado Kitfo for authentic Ayeb and Gomen butter pairing accuracy.\n• **Price Sentiment**: ETB price audits (450 Br average) were reported as 100% accurate by readers.`;
        action = { type: 'SUMMARIZE_REVIEWS' };
      } else if (lower.includes('fake') || lower.includes('flag')) {
        aiText = `**Fake Review Detection Audit**\n\n🔍 Scanned 4,920 reviews.\n• **Suspicious Activity**: Flagged 3 entries with duplicate IP addresses and repeated copy-paste phrasing for a new restaurant in Kazanchis.\n• **Recommendation**: Quarantined 3 pending reviews for human approval.`;
        action = { type: 'FLAG_FAKES' };
      } else if (lower.includes('report') || lower.includes('generate')) {
        aiText = `**Monthly Performance Executive Report Generated**\n\n📈 **Total Revenue**: 3.84M Br (+22.4%)\n📍 **Top Performing District**: Bole Atlas (42% of saves)\n🍔 **Top Category**: Kitfo & Traditional Foods (31% engagement)\n\n*Draft report ready for PDF export.*`;
      } else if (lower.includes('busy') || lower.includes('hours')) {
        aiText = `**Busy Hours Predictive Forecast**\n\n⏰ **Peak Traffic Times**: 1:00 PM - 2:30 PM & 6:30 PM - 8:30 PM across Bole & Sarbet.\n💡 **Recommendation**: Schedule mobile push notifications at 11:30 AM to capture lunch bookings.`;
      } else {
        aiText = `I have analyzed the platform database for "${query}". System operations are running at 99.98% efficiency with 184 active restaurants and 154.8K monthly readers.`;
      }

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'ai',
          text: aiText,
          timestamp: 'Just now',
          actionable: action,
        },
      ]);
      setIsThinking(false);
    }, 1200);
  };

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full sm:w-96 bg-[#1A1C1E] text-white border-l border-[#B8422E] shadow-2xl flex flex-col justify-between animate-slide-left">
      {/* Drawer Header */}
      <div className="p-4 border-b border-white/10 flex items-center justify-between bg-black/40">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#B8422E] flex items-center justify-center text-white shadow-md">
            <Sparkles className="w-4 h-4 animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-medium text-sm text-white">Admin AI Copilot</span>
            <span className="text-[10px] font-label text-emerald-400">Powered by Gemini Intelligence 🟢</span>
          </div>
        </div>

        <button onClick={onClose} className="p-1 rounded-md text-slate-400 hover:text-white cursor-pointer">
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Preset Action Chips */}
      <div className="p-3 border-b border-white/10 bg-white/5 flex gap-1.5 overflow-x-auto scrollbar-none">
        {[
          { label: 'Summarize Kitfo Reviews', query: 'Summarize Kitfo reviews' },
          { label: 'Detect Fake Reviews', query: 'Detect fake reviews' },
          { label: 'Generate Weekly Report', query: 'Generate report' },
          { label: 'Predict Busy Hours', query: 'Predict busy hours' },
        ].map((chip, idx) => (
          <button
            key={idx}
            onClick={() => handleSend(chip.query)}
            className="px-2.5 py-1 rounded-full text-[10px] font-label uppercase font-bold tracking-wider bg-white/10 hover:bg-[#B8422E] text-slate-200 hover:text-white shrink-0 transition-colors cursor-pointer"
          >
            {chip.label}
          </button>
        ))}
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-start gap-2.5 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
          >
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs font-bold ${
                msg.sender === 'user' ? 'bg-[#B8422E] text-white' : 'bg-slate-800 text-sky-400 border border-sky-400/40'
              }`}
            >
              {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
            </div>

            <div
              className={`p-3 rounded-2xl max-w-[85%] text-xs font-body leading-relaxed ${
                msg.sender === 'user'
                  ? 'bg-[#B8422E] text-white rounded-tr-none'
                  : 'bg-white/10 text-slate-100 rounded-tl-none border border-white/10'
              }`}
            >
              <div className="whitespace-pre-wrap">{msg.text}</div>
              <span className="block text-[9px] font-mono text-slate-400 pt-1 text-right">{msg.timestamp}</span>
            </div>
          </div>
        ))}

        {isThinking && (
          <div className="flex items-center gap-2 text-xs text-sky-400 font-label italic p-2">
            <RefreshCw className="w-3.5 h-3.5 animate-spin" />
            <span>Analyzing Addis Foodie intelligence...</span>
          </div>
        )}
      </div>

      {/* Input Box */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        className="p-3 border-t border-white/10 bg-black/40 flex items-center gap-2"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask AI Copilot anything..."
          className="flex-1 px-3 py-2 rounded-lg border border-white/10 bg-white/5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#B8422E]"
        />
        <button
          type="submit"
          disabled={!input.trim()}
          className="p-2 rounded-lg bg-[#B8422E] text-white hover:scale-105 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-all"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};
