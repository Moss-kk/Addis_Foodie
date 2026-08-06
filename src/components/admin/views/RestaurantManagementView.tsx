'use client';

import React, { useState } from 'react';
import { 
  UtensilsCrossed, 
  CheckCircle2, 
  AlertCircle, 
  PlusCircle, 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Star, 
  Clock, 
  Edit, 
  Trash2, 
  X, 
  Activity, 
  MessageSquare,
  Check,
  Send,
  Building2,
  FileCheck
} from 'lucide-react';
import { DataTable } from '../ui/DataTable';
import { mockRestaurants, mockApprovals } from '../../../data/mockAdminData';
import { RestaurantRecord, TableColumn } from '../../../types/admin';

export const RestaurantManagementView: React.FC = () => {
  const [restaurants, setRestaurants] = useState<RestaurantRecord[]>(mockRestaurants);
  const [approvals, setApprovals] = useState(mockApprovals);
  const [selectedRestaurant, setSelectedRestaurant] = useState<RestaurantRecord | null>(null);
  const [activeTabSub, setActiveTabSub] = useState<'all' | 'verification'>('all');

  // Filter state
  const [districtFilter, setDistrictFilter] = useState('ALL');

  // Mass Approval Handler
  const handleMassApprove = (selectedIds: string[]) => {
    setRestaurants((prev) =>
      prev.map((r) =>
        selectedIds.includes(r.id) ? { ...r, verificationStatus: 'VERIFIED' } : r
      )
    );
  };

  const handleApproveSingle = (id: string) => {
    setRestaurants((prev) =>
      prev.map((r) => (r.id === id ? { ...r, verificationStatus: 'VERIFIED' } : r))
    );
    setApprovals((prev) => prev.filter((a) => a.restaurantId !== id));
  };

  const filteredRestaurants = districtFilter === 'ALL'
    ? restaurants
    : restaurants.filter((r) => r.neighborhood.toLowerCase() === districtFilter.toLowerCase());

  // Table Columns Definition
  const columns: TableColumn<RestaurantRecord>[] = [
    {
      key: 'name',
      header: 'Restaurant Name',
      sortable: true,
      render: (r) => (
        <div className="flex items-center gap-3">
          <img src={r.image} alt={r.name} className="w-9 h-9 rounded-lg object-cover border border-slate-700" />
          <div className="flex flex-col">
            <span className="font-bold text-xs text-[var(--text-primary)]">{r.name}</span>
            <span className="text-[11px] font-label text-[var(--text-secondary)]">{r.category}</span>
          </div>
        </div>
      ),
    },
    {
      key: 'neighborhood',
      header: 'District',
      sortable: true,
      render: (r) => (
        <span className="px-2 py-0.5 rounded bg-black/5 dark:bg-white/10 font-mono text-xs text-[var(--text-primary)]">
          {r.neighborhood}
        </span>
      ),
    },
    {
      key: 'healthScore',
      header: 'Health Score',
      sortable: true,
      render: (r) => (
        <div className="flex items-center gap-2">
          <div className="w-16 h-2 rounded-full bg-slate-700 overflow-hidden">
            <div
              className={`h-full ${
                r.healthScore >= 90 ? 'bg-emerald-500' : r.healthScore >= 80 ? 'bg-amber-500' : 'bg-red-500'
              }`}
              style={{ width: `${r.healthScore}%` }}
            />
          </div>
          <span className="font-mono text-xs font-bold">{r.healthScore}/100</span>
        </div>
      ),
    },
    {
      key: 'verificationStatus',
      header: 'Status',
      sortable: true,
      render: (r) => (
        <span
          className={`px-2 py-0.5 rounded text-[10px] font-label uppercase font-bold ${
            r.verificationStatus === 'VERIFIED'
              ? 'bg-emerald-500/20 text-emerald-600 border border-emerald-500/40'
              : r.verificationStatus === 'PENDING_APPROVAL'
              ? 'bg-amber-500/20 text-amber-600 border border-amber-500/40'
              : 'bg-red-500/20 text-red-600 border border-red-500/40'
          }`}
        >
          {r.verificationStatus}
        </span>
      ),
    },
    {
      key: 'rating',
      header: 'Rating',
      sortable: true,
      render: (r) => (
        <div className="flex items-center gap-1 text-amber-500 font-bold font-mono text-xs">
          <Star className="w-3.5 h-3.5 fill-amber-500" />
          <span>{r.rating}</span>
          <span className="text-slate-400 font-normal">({r.totalReviews})</span>
        </div>
      ),
    },
    {
      key: 'priceRange',
      header: 'Price Audit',
      render: (r) => <span className="font-mono text-xs text-[#B8422E] font-bold">{r.priceRange}</span>,
    },
    {
      key: 'actions',
      header: 'Manage',
      sortable: false,
      render: (r) => (
        <button
          onClick={() => setSelectedRestaurant(r)}
          className="px-2.5 py-1 rounded bg-[#1A1C1E] text-white text-[11px] font-label uppercase font-bold hover:bg-[#B8422E] transition-colors cursor-pointer"
        >
          Inspect Profile
        </button>
      ),
    },
  ];

  return (
    <div className="flex flex-col gap-6 animate-fade-in">
      {/* Top Header & Sub-Tab Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b pb-4 gap-4" style={{ borderColor: 'var(--border-subtle)' }}>
        <div>
          <span className="text-xs font-label uppercase tracking-wider text-[#B8422E] font-bold flex items-center gap-1">
            <UtensilsCrossed className="w-4 h-4" /> Restaurant Lifecycle Management
          </span>
          <h1 className="font-display font-medium text-2xl text-[var(--text-primary)]">
            Addis Ababa Restaurant Registry
          </h1>
        </div>

        <div className="flex items-center gap-2">
          {['ALL', 'Bole', 'Bole Atlas', 'Kazanchis', 'Piassa', 'Sarbet'].map((dist) => (
            <button
              key={dist}
              onClick={() => setDistrictFilter(dist)}
              className={`px-3 py-1.5 rounded-lg text-xs font-label uppercase tracking-wider transition-all cursor-pointer border ${
                districtFilter === dist
                  ? 'bg-[#1A1C1E] text-white border-[#B8422E]'
                  : 'bg-black/5 dark:bg-white/5 text-[var(--text-primary)] border-[var(--border-subtle)]'
              }`}
            >
              {dist}
            </button>
          ))}
        </div>
      </div>

      {/* Main DataTable Component */}
      <DataTable
        title={`Registered Restaurants (${filteredRestaurants.length})`}
        subtitle="Manage business profiles, health scores, ETB price audits, and sanitation certifications."
        columns={columns}
        data={filteredRestaurants}
        searchPlaceholder="Search restaurant name, district, or owner..."
        bulkActions={[
          {
            label: 'Mass Approve Selection',
            icon: <CheckCircle2 className="w-3.5 h-3.5" />,
            variant: 'primary',
            onClick: handleMassApprove,
          },
        ]}
      />

      {/* Detail Drawer Modal when inspecting a restaurant */}
      {selectedRestaurant && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end animate-fade-in">
          <div className="w-full max-w-xl bg-[#1A1C1E] text-white h-full overflow-y-auto p-6 border-l border-[#B8422E] flex flex-col gap-6 shadow-2xl animate-slide-left">
            
            {/* Drawer Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <img src={selectedRestaurant.image} alt={selectedRestaurant.name} className="w-12 h-12 rounded-xl object-cover border border-[#B8422E]" />
                <div className="flex flex-col">
                  <h3 className="font-display font-bold text-lg text-white">{selectedRestaurant.name}</h3>
                  <span className="text-xs font-label text-slate-400">{selectedRestaurant.neighborhood} • {selectedRestaurant.category}</span>
                </div>
              </div>

              <button onClick={() => setSelectedRestaurant(null)} className="p-1 text-slate-400 hover:text-white cursor-pointer">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Health Score Diagnostic Banner */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-label uppercase text-slate-400">Health &amp; Compliance Diagnostic</span>
                <span className="font-display font-bold text-xl text-emerald-400">
                  {selectedRestaurant.healthScore} / 100 Health Score
                </span>
                <span className="text-xs text-slate-300">Sanitation, TIN registration, &amp; price audit verified.</span>
              </div>

              <button
                onClick={() => handleApproveSingle(selectedRestaurant.id)}
                className="button-primary px-3 py-1.5 rounded text-xs font-label uppercase font-bold cursor-pointer"
              >
                Approve Status
              </button>
            </div>

            {/* Business Details Section */}
            <div className="grid grid-cols-2 gap-4 text-xs font-body">
              <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex flex-col gap-1">
                <span className="text-slate-400 font-label uppercase text-[10px]">Owner Name</span>
                <span className="font-bold text-white flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-[#B8422E]" /> {selectedRestaurant.ownerName}
                </span>
              </div>

              <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex flex-col gap-1">
                <span className="text-slate-400 font-label uppercase text-[10px]">Contact Phone</span>
                <span className="font-mono font-bold text-white flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-sky-400" /> {selectedRestaurant.ownerPhone}
                </span>
              </div>

              <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex flex-col gap-1">
                <span className="text-slate-400 font-label uppercase text-[10px]">Price Audit</span>
                <span className="font-mono font-bold text-[#B8422E]">{selectedRestaurant.priceRange}</span>
              </div>

              <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex flex-col gap-1">
                <span className="text-slate-400 font-label uppercase text-[10px]">Tax ID Number</span>
                <span className="font-mono text-slate-200">{selectedRestaurant.taxId || 'TIN Verified'}</span>
              </div>
            </div>

            {/* Direct Owner Communication Form */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-3">
              <span className="text-xs font-label uppercase font-bold text-slate-300 flex items-center gap-1.5">
                <MessageSquare className="w-4 h-4 text-[#B8422E]" /> Send Direct Notice to Restaurant Owner
              </span>
              <textarea
                rows={3}
                placeholder="Write official notice or audit update to owner..."
                className="w-full p-2.5 rounded-lg bg-black/40 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#B8422E]"
              />
              <button className="button-primary py-2 rounded-lg text-xs font-label uppercase font-bold flex items-center justify-center gap-2 cursor-pointer">
                <Send className="w-3.5 h-3.5" />
                <span>Send SMS / Email Notice</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
