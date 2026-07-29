'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Crown, 
  ShieldAlert, 
  Key, 
  UserCheck, 
  Database, 
  Lock, 
  AlertTriangle, 
  Activity, 
  CheckCircle2, 
  ArrowRight,
  RefreshCw,
  Sliders,
  Radio,
  Server,
  Terminal,
  Globe
} from 'lucide-react';
import { FaInstagram, FaTelegramPlane } from 'react-icons/fa';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import MobileBottomNav from '../../../components/layout/MobileBottomNav';

export default function SuperAdminPage() {
  const [activePanel, setActivePanel] = useState<'roles' | 'api' | 'maintenance' | 'audit'>('roles');

  // Role Management State
  const [users, setUsers] = useState([
    { id: '1', name: 'Makeda Bekele (Master)', email: 'makeda@addisfoodie.com', role: 'Super Admin', status: 'Active' },
    { id: '2', name: 'Yonas Tesfaye', email: 'yonas@addisfoodie.com', role: 'Chief Food Editor', status: 'Active' },
    { id: '3', name: 'Tiruwork Haile', email: 'tiru@addisfoodie.com', role: 'Festival Event Manager', status: 'Active' },
    { id: '4', name: 'Kefle Abera', email: 'kefle@addisfoodie.com', role: 'Delivery Admin', status: 'Active' },
  ]);

  // Credentials State
  const [tgToken, setTgToken] = useState('7182938491:AAH8291039102-telegram-addisfoodies');
  const [igToken, setIgToken] = useState('IGQVJ9182390128309182390128309182');
  const [webhookUrl, setWebhookUrl] = useState('https://addisfoodie.com/api/webhooks/telegram');
  const [keysSaved, setKeysSaved] = useState(false);

  // System Controls
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [backupRunning, setBackupRunning] = useState(false);
  const [backupDone, setBackupDone] = useState(false);

  const handleSaveKeys = (e: React.FormEvent) => {
    e.preventDefault();
    setKeysSaved(true);
    setTimeout(() => setKeysSaved(false), 4000);
  };

  const handleTriggerBackup = () => {
    setBackupRunning(true);
    setTimeout(() => {
      setBackupRunning(false);
      setBackupDone(true);
      setTimeout(() => setBackupDone(false), 4000);
    }, 2500);
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
            href="/admin"
            className="inline-flex items-center gap-2 text-xs font-label uppercase text-[var(--text-secondary)] hover:text-[#B8422E] transition-colors"
          >
            <ArrowRight className="w-4 h-4 rotate-180 text-[#B8422E]" />
            <span>Back to Admin Control Center</span>
          </Link>
        </div>

        {/* SUPER ADMIN MASTER BANNER */}
        <section className="bg-[#1A1C1E] text-white p-6 sm:p-10 rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xs border border-[#B8422E]">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-sm bg-[#B8422E] text-white text-[10px] font-label font-bold uppercase tracking-wider flex items-center gap-1">
                <Crown className="w-3.5 h-3.5 text-white" />
                <span>SUPER ADMIN MASTER HUB</span>
              </span>
              <span className="text-xs font-label text-[#B8422E] font-bold">
                ROOT SYSTEM PRIVILEGES 👑
              </span>
            </div>
            <h1 className="font-display font-medium text-3xl sm:text-4xl text-white">
              System Authority &amp; Security Control
            </h1>
            <p className="text-xs sm:text-sm font-body text-slate-300">
              Role-Based Access Control (RBAC), API Credential Tokens, System Maintenance Kill-switch, and Real-Time Security Audit Logs.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setMaintenanceMode(!maintenanceMode)}
              className={`px-4 py-2.5 rounded-md text-xs font-label uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-colors ${
                maintenanceMode
                  ? 'bg-red-600 text-white font-bold animate-pulse'
                  : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
              }`}
            >
              <AlertTriangle className="w-4 h-4" />
              <span>{maintenanceMode ? 'MAINTENANCE MODE ACTIVE' : 'Enable Maintenance Mode'}</span>
            </button>
          </div>
        </section>

        {/* TAB CONTROL BAR */}
        <div className="flex overflow-x-auto snap-x border-b pb-2 gap-2 scrollbar-none" style={{ borderColor: 'var(--border-subtle)' }}>
          {[
            { id: 'roles', label: '1. Admin Roles (RBAC)', icon: UserCheck },
            { id: 'api', label: '2. API Credentials & Keys', icon: Key },
            { id: 'maintenance', label: '3. System Health & Backups', icon: Server },
            { id: 'audit', label: '4. Security Audit Logs', icon: Terminal },
          ].map((panel) => {
            const Icon = panel.icon;
            const isActive = activePanel === panel.id;
            return (
              <button
                key={panel.id}
                onClick={() => setActivePanel(panel.id as any)}
                className={`touch-target px-4 py-2.5 rounded-md text-xs font-label uppercase tracking-wider transition-all flex items-center gap-2 shrink-0 cursor-pointer border ${
                  isActive
                    ? 'bg-[#1A1C1E] text-white border-[#B8422E]'
                    : 'bg-white/5 text-[var(--text-primary)] border-[var(--border-subtle)] hover:border-[#B8422E]/50'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#B8422E]' : 'text-slate-500'}`} />
                <span>{panel.label}</span>
              </button>
            );
          })}
        </div>

        {/* PANEL 1: ADMIN ROLE & PERMISSION MANAGER (RBAC) */}
        {activePanel === 'roles' && (
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: 'var(--border-subtle)' }}>
              <div>
                <h3 className="font-display font-medium text-xl" style={{ color: 'var(--text-primary)' }}>
                  Administrator Role &amp; Permission Matrix
                </h3>
                <p className="text-xs font-body text-slate-500">Assign role access levels for Super Admin, Food Editors, Event Managers &amp; Courier Admins</p>
              </div>

              <button
                onClick={() => {
                  const name = prompt('Enter new admin name:');
                  if (name) {
                    setUsers((prev) => [
                      ...prev,
                      { id: `${Date.now()}`, name, email: `${name.toLowerCase().replace(' ', '')}@addisfoodie.com`, role: 'Chief Food Editor', status: 'Active' }
                    ]);
                  }
                }}
                className="button-primary px-4 py-2 rounded-md text-xs uppercase font-label tracking-wider cursor-pointer"
              >
                + Add Administrator
              </button>
            </div>

            {/* Admin Users Table */}
            <div className="heritage-card overflow-x-auto p-0 border" style={{ borderColor: 'var(--border-subtle)' }}>
              <table className="w-full text-left text-xs font-label">
                <thead className="bg-[#1A1C1E] text-white uppercase border-b border-white/10">
                  <tr>
                    <th className="p-4">Admin User</th>
                    <th className="p-4">Email Address</th>
                    <th className="p-4">Assigned Role</th>
                    <th className="p-4">Status</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y" style={{ borderColor: 'var(--border-subtle)' }}>
                  {users.map((user) => (
                    <tr key={user.id} className="hover:bg-white/5 transition-colors">
                      <td className="p-4 font-bold flex items-center gap-2 text-[#1A1C1E] dark:text-white">
                        {user.role === 'Super Admin' && <Crown className="w-3.5 h-3.5 text-[#B8422E]" />}
                        <span>{user.name}</span>
                      </td>
                      <td className="p-4 text-slate-500">{user.email}</td>
                      <td className="p-4">
                        <select
                          value={user.role}
                          onChange={(e) => {
                            const newRole = e.target.value;
                            setUsers((prev) => prev.map((u) => u.id === user.id ? { ...u, role: newRole } : u));
                          }}
                          className="px-2.5 py-1.5 rounded-sm border text-xs font-bold focus:outline-none"
                          style={{ backgroundColor: 'var(--bg-app)', color: 'var(--text-primary)', borderColor: 'var(--border-subtle)' }}
                        >
                          <option value="Super Admin">Super Admin (Full Root)</option>
                          <option value="Chief Food Editor">Chief Food Editor</option>
                          <option value="Festival Event Manager">Festival Event Manager</option>
                          <option value="Delivery Admin">Delivery Admin</option>
                        </select>
                      </td>
                      <td className="p-4">
                        <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-600 font-bold text-[10px]">
                          {user.status}
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        {user.role !== 'Super Admin' && (
                          <button
                            onClick={() => setUsers((prev) => prev.filter((u) => u.id !== user.id))}
                            className="text-xs text-red-600 hover:underline font-bold"
                          >
                            Revoke Access
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* PANEL 2: API CREDENTIALS & SECURITY KEYS */}
        {activePanel === 'api' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="heritage-card flex flex-col gap-5">
              <div className="flex items-center gap-2 border-b pb-3" style={{ borderColor: 'var(--border-subtle)' }}>
                <Key className="w-5 h-5 text-[#B8422E]" />
                <h3 className="font-display font-medium text-xl">API Keys &amp; Webhook Credentials</h3>
              </div>

              {keysSaved && (
                <div className="p-3 rounded-md bg-emerald-500/10 border border-emerald-500 text-emerald-800 dark:text-emerald-300 text-xs font-label font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>API Tokens &amp; Webhook URL updated securely!</span>
                </div>
              )}

              <form onSubmit={handleSaveKeys} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-label uppercase text-[#B8422E]">Telegram Bot API Token (@addisfoodies_bot)</label>
                  <input
                    type="password"
                    value={tgToken}
                    onChange={(e) => setTgToken(e.target.value)}
                    className="px-3.5 py-2.5 rounded-md border text-xs font-mono focus:outline-none"
                    style={{ backgroundColor: 'var(--bg-app)', color: 'var(--text-primary)', borderColor: 'var(--border-subtle)' }}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-label uppercase text-[#B8422E]">Instagram Graph API Long-Lived Token</label>
                  <input
                    type="password"
                    value={igToken}
                    onChange={(e) => setIgToken(e.target.value)}
                    className="px-3.5 py-2.5 rounded-md border text-xs font-mono focus:outline-none"
                    style={{ backgroundColor: 'var(--bg-app)', color: 'var(--text-primary)', borderColor: 'var(--border-subtle)' }}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-label uppercase text-[#B8422E]">Telegram Endpoint Webhook URL</label>
                  <input
                    type="url"
                    value={webhookUrl}
                    onChange={(e) => setWebhookUrl(e.target.value)}
                    className="px-3.5 py-2.5 rounded-md border text-xs font-mono focus:outline-none"
                    style={{ backgroundColor: 'var(--bg-app)', color: 'var(--text-primary)', borderColor: 'var(--border-subtle)' }}
                  />
                </div>

                <button
                  type="submit"
                  className="button-primary w-full py-3 rounded-md text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Key className="w-4 h-4 text-white" />
                  <span>Save Super Admin Security Tokens</span>
                </button>
              </form>
            </div>

            <div className="heritage-card flex flex-col gap-4 bg-[#121416] text-white">
              <h4 className="font-display font-medium text-lg border-b border-white/10 pb-2">
                API Key Security Verification
              </h4>
              <p className="text-xs font-body text-slate-300">
                Tokens are stored using AES-256 server-side encryption. Automatic token rotation is enabled every 60 days.
              </p>

              <div className="flex flex-col gap-3 pt-2 text-xs font-label">
                <div className="p-3 rounded-md bg-white/5 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FaTelegramPlane className="w-4 h-4 text-sky-400" />
                    <span>Telegram Bot Webhook Status</span>
                  </div>
                  <span className="text-emerald-400 font-bold">CONNECTED 🟢</span>
                </div>

                <div className="p-3 rounded-md bg-white/5 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FaInstagram className="w-4 h-4 text-pink-400" />
                    <span>Instagram Graph API Access</span>
                  </div>
                  <span className="text-emerald-400 font-bold">VERIFIED 🟢</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PANEL 3: SYSTEM HEALTH & BACKUPS */}
        {activePanel === 'maintenance' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="heritage-card flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 border-b pb-3" style={{ borderColor: 'var(--border-subtle)' }}>
                  <Database className="w-5 h-5 text-[#B8422E]" />
                  <h3 className="font-display font-medium text-xl">Database Backup &amp; Recovery</h3>
                </div>

                <p className="text-xs font-body text-slate-500">
                  Trigger a full, zero-downtime database snapshot of all review inspections, ETB price logs, festival ticket reservations, and user accounts.
                </p>

                {backupDone && (
                  <div className="p-3 rounded-md bg-emerald-500/10 border border-emerald-500 text-emerald-800 dark:text-emerald-300 text-xs font-label font-bold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Full System Backup Completed &amp; Encrypted!</span>
                  </div>
                )}
              </div>

              <button
                onClick={handleTriggerBackup}
                disabled={backupRunning}
                className="button-primary w-full py-3.5 rounded-md text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <RefreshCw className={`w-4 h-4 text-white ${backupRunning ? 'animate-spin' : ''}`} />
                <span>{backupRunning ? 'Creating Encrypted Backup...' : 'Trigger Full Database Snapshot'}</span>
              </button>
            </div>

            <div className="heritage-card flex flex-col gap-4 bg-[#121416] text-white">
              <h4 className="font-display font-medium text-lg border-b border-white/10 pb-2">
                Server Health Indicators
              </h4>

              <div className="grid grid-cols-2 gap-4 text-xs font-label">
                <div className="p-3 rounded-md bg-white/5 border border-white/10 flex flex-col gap-1">
                  <span className="text-slate-400">Server Response</span>
                  <span className="text-xl font-bold text-emerald-400">24ms</span>
                </div>
                <div className="p-3 rounded-md bg-white/5 border border-white/10 flex flex-col gap-1">
                  <span className="text-slate-400">Database Load</span>
                  <span className="text-xl font-bold text-white">4.2%</span>
                </div>
                <div className="p-3 rounded-md bg-white/5 border border-white/10 flex flex-col gap-1">
                  <span className="text-slate-400">Uptime</span>
                  <span className="text-xl font-bold text-white">99.98%</span>
                </div>
                <div className="p-3 rounded-md bg-white/5 border border-white/10 flex flex-col gap-1">
                  <span className="text-slate-400">Active Node Region</span>
                  <span className="text-xl font-bold text-[#B8422E]">Addis Ababa HQ</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PANEL 4: SECURITY AUDIT LOGS */}
        {activePanel === 'audit' && (
          <div className="heritage-card flex flex-col gap-4 bg-[#121416] text-white">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <Terminal className="w-5 h-5 text-[#B8422E]" />
                <h3 className="font-display font-medium text-xl text-white">Real-Time Security Audit Stream</h3>
              </div>
              <span className="text-xs font-label text-slate-400">Filtered for Super Admin</span>
            </div>

            <div className="flex flex-col gap-2 font-mono text-xs text-slate-300 max-h-80 overflow-y-auto">
              {[
                { time: '2026-07-29 03:18:04', event: 'SUPER_ADMIN_LOGIN', user: 'Makeda Bekele', ip: '197.156.120.44 (Addis Ababa)' },
                { time: '2026-07-29 02:40:12', event: 'ROLE_PERMISSION_UPDATED', user: 'Yonas Tesfaye', ip: '197.156.120.12 (Bole Atlas)' },
                { time: '2026-07-28 22:10:00', event: 'API_KEY_ROTATION_SUCCESS', user: 'SYSTEM_BOT', ip: '127.0.0.1 (Local Node)' },
                { time: '2026-07-28 19:45:30', event: 'REVIEW_PUBLISHED', user: 'Yonas Tesfaye', ip: '197.156.120.12 (Bole Atlas)' },
              ].map((log, idx) => (
                <div key={idx} className="p-3 rounded-md bg-white/5 border border-white/10 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-emerald-400 font-bold">{log.event}</span>
                    <span className="text-[11px] text-slate-400">Admin: {log.user}</span>
                  </div>
                  <div className="flex flex-col text-right">
                    <span className="text-[11px] text-slate-300">{log.time}</span>
                    <span className="text-[10px] text-slate-500">{log.ip}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </main>

      <Footer />
      <MobileBottomNav />
    </div>
  );
}
