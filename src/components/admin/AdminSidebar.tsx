'use client';

import React, { useState, useMemo } from 'react';
import { 
  LayoutDashboard, 
  UtensilsCrossed, 
  CheckCircle2, 
  CalendarCheck, 
  MessageSquare, 
  FileText, 
  Image as ImageIcon, 
  Send, 
  BarChart3, 
  ShieldCheck, 
  Settings, 
  Search, 
  Star, 
  ChevronDown, 
  ChevronRight,
  History,
  Sparkles,
  Command,
  Crown
} from 'lucide-react';
import { AdminTab, NavGroup } from '../../types/admin';

interface AdminSidebarProps {
  activeTab: AdminTab;
  onTabChange: (tab: AdminTab) => void;
  collapsed?: boolean;
  onToggleCollapse?: () => void;
}

const navGroups: NavGroup[] = [
  {
    title: 'Operations',
    items: [
      { id: 'dashboard', label: 'Executive Dashboard', icon: 'LayoutDashboard', shortcut: '⌘1' },
      { id: 'restaurants', label: 'Restaurant Registry', icon: 'UtensilsCrossed', badge: '184', shortcut: '⌘2' },
      { id: 'verification', label: 'Approval Queue', icon: 'CheckCircle2', badge: '7', badgeColor: 'bg-amber-500', shortcut: '⌘3' },
      { id: 'reservations', label: 'Reservations & Orders', icon: 'CalendarCheck', shortcut: '⌘4' },
      { id: 'reviews', label: 'Reviews & Feedback', icon: 'MessageSquare', shortcut: '⌘5' },
    ],
  },
  {
    title: 'Content',
    items: [
      { id: 'posts', label: 'Inspection Posts', icon: 'FileText', badge: '50+', shortcut: '⌘6' },
      { id: 'media', label: 'Photo & Media Assets', icon: 'ImageIcon' },
    ],
  },
  {
    title: 'Marketing',
    items: [
      { id: 'marketing', label: 'Campaigns & Social Auto', icon: 'Send', badge: 'LIVE' },
      { id: 'analytics', label: 'Analytics & BI', icon: 'BarChart3' },
    ],
  },
  {
    title: 'Administration',
    items: [
      { id: 'security', label: 'RBAC & Security Control', icon: 'ShieldCheck', badgeColor: 'bg-red-500' },
      { id: 'settings', label: 'System Settings', icon: 'Settings' },
    ],
  },
];

const iconMap: Record<string, React.ElementType> = {
  LayoutDashboard,
  UtensilsCrossed,
  CheckCircle2,
  CalendarCheck,
  MessageSquare,
  FileText,
  ImageIcon,
  Send,
  BarChart3,
  ShieldCheck,
  Settings,
};

export const AdminSidebar: React.FC<AdminSidebarProps> = ({
  activeTab,
  onTabChange,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [collapsedGroups, setCollapsedGroups] = useState<Record<string, boolean>>({});
  const [favorites, setFavorites] = useState<AdminTab[]>(['dashboard', 'restaurants', 'verification']);
  const [recentTabs, setRecentTabs] = useState<AdminTab[]>(['dashboard', 'restaurants']);

  const toggleGroup = (title: string) => {
    setCollapsedGroups((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  const toggleFavorite = (e: React.MouseEvent, tab: AdminTab) => {
    e.stopPropagation();
    setFavorites((prev) =>
      prev.includes(tab) ? prev.filter((t) => t !== tab) : [...prev, tab]
    );
  };

  const handleSelectTab = (tab: AdminTab) => {
    onTabChange(tab);
    setRecentTabs((prev) => [tab, ...prev.filter((t) => t !== tab)].slice(0, 3));
  };

  // Filter items by search
  const filteredGroups = useMemo(() => {
    if (!searchQuery.trim()) return navGroups;
    const query = searchQuery.toLowerCase();
    return navGroups
      .map((group) => ({
        ...group,
        items: group.items.filter((item) =>
          item.label.toLowerCase().includes(query)
        ),
      }))
      .filter((group) => group.items.length > 0);
  }, [searchQuery]);

  return (
    <aside className="w-64 shrink-0 bg-[#1A1C1E] text-white border-r border-[#B8422E]/30 flex flex-col justify-between min-h-[calc(100vh-4rem)] p-4 select-none">
      <div className="flex flex-col gap-5">
        
        {/* Brand Header & Quick Status */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#B8422E] flex items-center justify-center font-display font-bold text-white shadow-md">
              AF
            </div>
            <div className="flex flex-col">
              <span className="font-display font-medium text-sm text-white tracking-wide">Addis Foodie</span>
              <span className="text-[10px] font-label text-slate-400 uppercase tracking-widest flex items-center gap-1">
                <Crown className="w-3 h-3 text-amber-400" /> Enterprise Admin
              </span>
            </div>
          </div>
        </div>

        {/* Search Navigation Bar */}
        <div className="relative">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search navigation... (⌘K)"
            className="w-full pl-8 pr-3 py-1.5 rounded-md border border-white/10 bg-white/5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#B8422E]"
          />
        </div>

        {/* Favorites Quick Strip */}
        {favorites.length > 0 && !searchQuery && (
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-label uppercase text-slate-400 font-bold px-2 flex items-center gap-1">
              <Star className="w-3 h-3 text-amber-400 fill-amber-400" /> Favorites
            </span>
            <div className="flex flex-wrap gap-1 px-1">
              {favorites.map((favId) => (
                <button
                  key={favId}
                  onClick={() => handleSelectTab(favId)}
                  className={`px-2 py-1 rounded text-[11px] font-label uppercase font-bold transition-all cursor-pointer ${
                    activeTab === favId
                      ? 'bg-[#B8422E] text-white'
                      : 'bg-white/10 text-slate-300 hover:bg-white/20'
                  }`}
                >
                  {favId}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Grouped Navigation List */}
        <div className="flex flex-col gap-4 overflow-y-auto max-h-[calc(100vh-16rem)] pr-1 scrollbar-thin">
          {filteredGroups.map((group) => {
            const isCollapsed = collapsedGroups[group.title];
            return (
              <div key={group.title} className="flex flex-col gap-1">
                {/* Group Title Accordion Header */}
                <button
                  onClick={() => toggleGroup(group.title)}
                  className="flex items-center justify-between text-[11px] font-label uppercase text-slate-400 font-bold px-2 py-1 hover:text-white cursor-pointer"
                >
                  <span>{group.title}</span>
                  {isCollapsed ? <ChevronRight className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>

                {/* Group Nav Items */}
                {!isCollapsed && (
                  <div className="flex flex-col gap-0.5 pl-1">
                    {group.items.map((item) => {
                      const Icon = (iconMap[item.icon] || LayoutDashboard) as React.ComponentType<{ className?: string }>;
                      const isActive = activeTab === item.id;
                      const isFav = favorites.includes(item.id);

                      return (
                        <button
                          key={item.id}
                          onClick={() => handleSelectTab(item.id)}
                          className={`touch-target w-full px-3 py-2 rounded-lg text-xs font-label uppercase tracking-wider transition-all flex items-center justify-between cursor-pointer ${
                            isActive
                              ? 'bg-[#B8422E] text-white shadow-sm font-bold'
                              : 'text-slate-300 hover:bg-white/10 hover:text-white'
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                            <span>{item.label}</span>
                          </div>

                          <div className="flex items-center gap-1.5">
                            {item.badge && (
                              <span
                                className={`px-1.5 py-0.5 rounded text-[9px] font-mono font-bold ${
                                  item.badgeColor || 'bg-white/20 text-white'
                                }`}
                              >
                                {item.badge}
                              </span>
                            )}
                            <button
                              onClick={(e) => toggleFavorite(e, item.id)}
                              className="opacity-0 group-hover:opacity-100 hover:scale-110 transition-opacity cursor-pointer p-0.5"
                            >
                              <Star className={`w-3 h-3 ${isFav ? 'text-amber-400 fill-amber-400' : 'text-slate-500'}`} />
                            </button>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer System Status Badge */}
      <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
        <div className="flex items-center justify-between text-xs font-label text-slate-400">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Live Sync 🟢
          </span>
          <span className="font-mono text-[10px]">v2.4.0</span>
        </div>
      </div>
    </aside>
  );
};
