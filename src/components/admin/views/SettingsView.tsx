'use client';

import React, { useState } from 'react';
import { Settings, Key, CheckCircle2, Save, Globe, Lock } from 'lucide-react';

export const SettingsView: React.FC = () => {
  const [tgToken, setTgToken] = useState('7182938491:AAH8291039102-telegram-addisfoodies');
  const [igToken, setIgToken] = useState('IGQVJ9182390128309182390128309182');
  const [webhookUrl, setWebhookUrl] = useState('https://addisfoodie.com/api/webhooks/telegram');
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 4000);
  };

  return (
    <div className="flex flex-col gap-8 animate-fade-in max-w-4xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b pb-4 gap-2" style={{ borderColor: 'var(--border-subtle)' }}>
        <div>
          <span className="text-xs font-label uppercase tracking-wider text-[#B8422E] font-bold flex items-center gap-1">
            <Settings className="w-4 h-4" /> System Configuration
          </span>
          <h1 className="font-display font-medium text-2xl text-[var(--text-primary)]">
            API Keys, Webhooks &amp; Platform Settings
          </h1>
        </div>
      </div>

      {saved && (
        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/40 text-emerald-600 text-xs font-label font-bold flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>API Tokens and webhook credentials saved to encrypted keyvault!</span>
        </div>
      )}

      <form onSubmit={handleSave} className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col gap-6 shadow-xs">
        <div className="flex items-center gap-2 border-b pb-3" style={{ borderColor: 'var(--border-subtle)' }}>
          <Key className="w-5 h-5 text-[#B8422E]" />
          <h3 className="font-display font-medium text-lg text-[var(--text-primary)]">Social API Integrations</h3>
        </div>

        <div className="flex flex-col gap-4 text-xs font-body">
          <div className="flex flex-col gap-1">
            <label className="font-label uppercase text-[10px] text-slate-400 font-bold">Telegram Bot API Token</label>
            <input
              type="password"
              value={tgToken}
              onChange={(e) => setTgToken(e.target.value)}
              className="w-full p-2.5 rounded-lg border border-[var(--border-subtle)] bg-black/5 dark:bg-white/5 text-[var(--text-primary)] font-mono focus:outline-none focus:border-[#B8422E]"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-label uppercase text-[10px] text-slate-400 font-bold">Instagram Graph API Access Token</label>
            <input
              type="password"
              value={igToken}
              onChange={(e) => setIgToken(e.target.value)}
              className="w-full p-2.5 rounded-lg border border-[var(--border-subtle)] bg-black/5 dark:bg-white/5 text-[var(--text-primary)] font-mono focus:outline-none focus:border-[#B8422E]"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-label uppercase text-[10px] text-slate-400 font-bold">Live Webhook Endpoint URL</label>
            <input
              type="url"
              value={webhookUrl}
              onChange={(e) => setWebhookUrl(e.target.value)}
              className="w-full p-2.5 rounded-lg border border-[var(--border-subtle)] bg-black/5 dark:bg-white/5 text-[var(--text-primary)] font-mono focus:outline-none focus:border-[#B8422E]"
            />
          </div>
        </div>

        <button
          type="submit"
          className="button-primary py-3 rounded-lg font-label uppercase text-xs tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:scale-102 transition-all"
        >
          <Save className="w-4 h-4" />
          <span>Save API Settings</span>
        </button>
      </form>
    </div>
  );
};
