'use client';

import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Key, 
  Lock, 
  AlertTriangle, 
  Terminal, 
  UserCheck, 
  Server, 
  CheckCircle2, 
  RefreshCw, 
  Crown,
  Database,
  Radio
} from 'lucide-react';
import { DataTable } from '../ui/DataTable';
import { mockAuditLogs, mockUserRoles } from '../../../data/mockAdminData';
import { AuditLogRecord, TableColumn } from '../../../types/admin';

export const SecurityView: React.FC = () => {
  const [userRoles, setUserRoles] = useState(mockUserRoles);
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [backupRunning, setBackupRunning] = useState(false);
  const [backupDone, setBackupDone] = useState(false);

  const handleTriggerBackup = () => {
    setBackupRunning(true);
    setTimeout(() => {
      setBackupRunning(false);
      setBackupDone(true);
      setTimeout(() => setBackupDone(false), 4000);
    }, 2500);
  };

  const columns: TableColumn<AuditLogRecord>[] = [
    {
      key: 'timestamp',
      header: 'Timestamp',
      sortable: true,
      render: (log) => <span className="font-mono text-xs text-slate-300">{log.timestamp}</span>,
    },
    {
      key: 'user',
      header: 'Admin User',
      sortable: true,
      render: (log) => (
        <div className="flex flex-col">
          <span className="font-bold text-xs text-[var(--text-primary)]">{log.user}</span>
          <span className="text-[10px] font-label text-slate-400">{log.role}</span>
        </div>
      ),
    },
    {
      key: 'action',
      header: 'Action Performed',
      sortable: true,
      render: (log) => <span className="font-medium text-xs text-[var(--text-primary)]">{log.action}</span>,
    },
    {
      key: 'target',
      header: 'Target Resource',
      render: (log) => <span className="font-mono text-xs text-slate-400">{log.target}</span>,
    },
    {
      key: 'ipAddress',
      header: 'IP & Origin',
      render: (log) => <span className="font-mono text-xs text-slate-400">{log.ipAddress}</span>,
    },
    {
      key: 'status',
      header: 'Result',
      sortable: true,
      render: (log) => (
        <span
          className={`px-2 py-0.5 rounded text-[10px] font-label uppercase font-bold ${
            log.status === 'SUCCESS'
              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
              : log.status === 'WARNING'
              ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
              : 'bg-red-500/20 text-red-400 border border-red-500/40'
          }`}
        >
          {log.status}
        </span>
      ),
    },
  ];

  return (
    <div className="flex flex-col gap-8 animate-fade-in">
      {/* Super Admin Master Banner */}
      <section className="bg-[#1A1C1E] text-white p-6 sm:p-8 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-md border border-[#B8422E]">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-sm bg-[#B8422E] text-white text-[10px] font-label font-bold uppercase tracking-wider flex items-center gap-1">
              <Crown className="w-3.5 h-3.5 text-white" />
              <span>SUPER ADMIN SECURITY HUB</span>
            </span>
            <span className="text-xs font-label text-[#B8422E] font-bold">
              ROOT SYSTEM PRIVILEGES 👑
            </span>
          </div>
          <h1 className="font-display font-medium text-2xl sm:text-3xl text-white">
            System Governance, RBAC &amp; Security Controls
          </h1>
          <p className="text-xs sm:text-sm font-body text-slate-300">
            Manage admin permissions, enforce 2FA verification, inspect real-time security audit trails, and trigger database backups.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <button
            onClick={() => setMaintenanceMode(!maintenanceMode)}
            className={`px-4 py-2.5 rounded-lg text-xs font-label uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-all ${
              maintenanceMode
                ? 'bg-red-600 text-white font-bold animate-pulse shadow-lg'
                : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
            }`}
          >
            <AlertTriangle className="w-4 h-4" />
            <span>{maintenanceMode ? 'MAINTENANCE MODE ACTIVE' : 'Enable Maintenance Mode'}</span>
          </button>

          <button
            onClick={handleTriggerBackup}
            disabled={backupRunning}
            className="button-primary px-4 py-2.5 rounded-lg text-xs font-label uppercase tracking-wider flex items-center gap-2 cursor-pointer disabled:opacity-40"
          >
            <Database className="w-4 h-4" />
            <span>{backupRunning ? 'Backing Up...' : 'Trigger Cloud Backup'}</span>
          </button>
        </div>
      </section>

      {backupDone && (
        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/40 text-emerald-600 text-xs font-label font-bold flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>PostgreSQL &amp; Redis database snapshot created and saved to GCS cold storage!</span>
        </div>
      )}

      {/* RBAC Admin User Roles Grid */}
      <div className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex flex-col gap-5 shadow-xs">
        <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: 'var(--border-subtle)' }}>
          <div className="flex items-center gap-2">
            <UserCheck className="w-5 h-5 text-[#B8422E]" />
            <h3 className="font-display font-medium text-xl text-[var(--text-primary)]">
              Role-Based Access Control (RBAC) Matrix
            </h3>
          </div>
          <span className="text-xs font-label text-slate-400">4 Active Admins</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {userRoles.map((usr) => (
            <div key={usr.id} className="p-4 rounded-xl border border-[var(--border-subtle)] bg-black/5 dark:bg-white/5 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#1A1C1E] text-white flex items-center justify-center font-bold text-xs">
                    {usr.name.charAt(0)}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-xs text-[var(--text-primary)]">{usr.name}</span>
                    <span className="text-[11px] font-mono text-slate-400">{usr.email}</span>
                  </div>
                </div>

                <span className="px-2.5 py-0.5 rounded text-[10px] font-label uppercase font-bold bg-[#B8422E]/20 text-[#B8422E]">
                  {usr.role}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-black/5 dark:border-white/5 text-[11px] font-mono">
                <span className="text-slate-400">2FA Status: <strong className="text-emerald-500">ENFORCED</strong></span>
                <span className="text-slate-400">Last Active: <strong>{usr.lastLogin}</strong></span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Real-time Security Audit Trail Table */}
      <DataTable
        title="Real-Time Security Audit Logs"
        subtitle="Immutable audit log of all admin logins, license approvals, system configuration updates, and external API requests."
        columns={columns}
        data={mockAuditLogs}
        searchPlaceholder="Search admin user, IP address, or action..."
      />
    </div>
  );
};
