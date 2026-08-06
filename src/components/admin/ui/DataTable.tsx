'use client';

import React, { useState, useMemo } from 'react';
import { 
  ArrowUpDown, 
  ChevronDown, 
  ChevronUp, 
  Download, 
  Eye, 
  EyeOff, 
  Filter, 
  Search, 
  CheckSquare, 
  Square, 
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
  FileSpreadsheet,
  FileText
} from 'lucide-react';
import { TableColumn } from '../../../types/admin';

interface DataTableProps<T extends { id: string }> {
  title?: string;
  subtitle?: string;
  columns: TableColumn<T>[];
  data: T[];
  searchPlaceholder?: string;
  bulkActions?: {
    label: string;
    icon?: React.ReactNode;
    variant?: 'primary' | 'danger' | 'secondary';
    onClick: (selectedIds: string[]) => void;
  }[];
  onRowClick?: (item: T) => void;
}

export function DataTable<T extends { id: string }>({
  title,
  subtitle,
  columns: initialColumns,
  data,
  searchPlaceholder = 'Search records...',
  bulkActions = [],
  onRowClick,
}: DataTableProps<T>) {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortKey, setSortKey] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [hiddenColumns, setHiddenColumns] = useState<string[]>([]);
  const [showColumnPicker, setShowColumnPicker] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  // Column Visibility Toggle
  const visibleColumns = useMemo(() => {
    return initialColumns.filter((col) => !hiddenColumns.includes(String(col.key)));
  }, [initialColumns, hiddenColumns]);

  const toggleColumnVisibility = (key: string) => {
    setHiddenColumns((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  // Sorting Handler
  const handleSort = (key: string) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };

  // Filtering & Sorting Data
  const filteredData = useMemo(() => {
    let result = [...data];

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter((item) =>
        Object.values(item).some((val) =>
          String(val ?? '').toLowerCase().includes(query)
        )
      );
    }

    // Sort
    if (sortKey) {
      result.sort((a, b) => {
        const valA = (a as any)[sortKey];
        const valB = (b as any)[sortKey];
        if (valA < valB) return sortOrder === 'asc' ? -1 : 1;
        if (valA > valB) return sortOrder === 'asc' ? 1 : -1;
        return 0;
      });
    }

    return result;
  }, [data, searchQuery, sortKey, sortOrder]);

  // Pagination Slice
  const totalPages = Math.ceil(filteredData.length / pageSize) || 1;
  const paginatedData = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filteredData.slice(start, start + pageSize);
  }, [filteredData, page, pageSize]);

  // Bulk Selection Handlers
  const isAllSelected = paginatedData.length > 0 && paginatedData.every((item) => selectedIds.includes(item.id));

  const toggleSelectAll = () => {
    if (isAllSelected) {
      setSelectedIds([]);
    } else {
      setSelectedIds(paginatedData.map((item) => item.id));
    }
  };

  const toggleSelectRow = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  // Export to CSV
  const exportCSV = () => {
    if (!filteredData.length) return;
    const headers = visibleColumns.map((c) => c.header).join(',');
    const rows = filteredData.map((item) =>
      visibleColumns
        .map((col) => {
          const val = String((item as any)[col.key] ?? '').replace(/"/g, '""');
          return `"${val}"`;
        })
        .join(',')
    );
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers, ...rows].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `${title || 'export'}_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Highlight Search Text Helper
  const highlightMatch = (text: any) => {
    const str = String(text ?? '');
    if (!searchQuery.trim()) return str;
    const parts = str.split(new RegExp(`(${searchQuery})`, 'gi'));
    return (
      <>
        {parts.map((part, i) =>
          part.toLowerCase() === searchQuery.toLowerCase() ? (
            <mark key={i} className="bg-amber-300 dark:bg-amber-600 text-black dark:text-white px-0.5 rounded">
              {part}
            </mark>
          ) : (
            part
          )
        )}
      </>
    );
  };

  return (
    <div className="flex flex-col gap-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-5 shadow-xs transition-all">
      {/* Header & Controls Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-4" style={{ borderColor: 'var(--border-subtle)' }}>
        <div>
          {title && <h3 className="font-display font-medium text-xl text-[var(--text-primary)]">{title}</h3>}
          {subtitle && <p className="text-xs font-body text-[var(--text-secondary)] mt-0.5">{subtitle}</p>}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Search Box */}
          <div className="relative flex-1 min-w-[200px] sm:min-w-[260px]">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setPage(1);
              }}
              placeholder={searchPlaceholder}
              className="w-full pl-9 pr-3 py-1.5 rounded-md border text-xs font-body border-[var(--border-subtle)] bg-black/5 dark:bg-white/5 text-[var(--text-primary)] focus:outline-none focus:border-[#B8422E]"
            />
          </div>

          {/* Column Picker Trigger */}
          <div className="relative">
            <button
              onClick={() => setShowColumnPicker(!showColumnPicker)}
              className="px-3 py-1.5 rounded-md text-xs font-label uppercase tracking-wider border border-[var(--border-subtle)] bg-black/5 dark:bg-white/5 hover:bg-black/10 transition-colors flex items-center gap-1.5 text-[var(--text-primary)] cursor-pointer"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Columns</span>
            </button>

            {showColumnPicker && (
              <div className="absolute right-0 mt-2 w-48 rounded-lg border border-[var(--border-subtle)] bg-[#1A1C1E] text-white p-3 shadow-xl z-20 flex flex-col gap-2">
                <div className="text-[10px] font-label uppercase text-slate-400 font-bold border-b border-white/10 pb-1">
                  Toggle Columns
                </div>
                {initialColumns.map((col) => {
                  const isHidden = hiddenColumns.includes(String(col.key));
                  return (
                    <button
                      key={String(col.key)}
                      onClick={() => toggleColumnVisibility(String(col.key))}
                      className="flex items-center justify-between text-xs py-1 px-1.5 rounded hover:bg-white/10 text-left cursor-pointer"
                    >
                      <span className={isHidden ? 'text-slate-500 line-through' : 'text-slate-200'}>
                        {col.header}
                      </span>
                      {isHidden ? <EyeOff className="w-3.5 h-3.5 text-slate-500" /> : <Eye className="w-3.5 h-3.5 text-emerald-400" />}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* CSV Export Button */}
          <button
            onClick={exportCSV}
            className="px-3 py-1.5 rounded-md text-xs font-label uppercase tracking-wider border border-[var(--border-subtle)] bg-black/5 dark:bg-white/5 hover:bg-black/10 transition-colors flex items-center gap-1.5 text-[var(--text-primary)] cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">CSV</span>
          </button>
        </div>
      </div>

      {/* Bulk Action Bar (Visible when rows selected) */}
      {selectedIds.length > 0 && (
        <div className="flex items-center justify-between p-3 rounded-lg bg-[#1A1C1E] text-white animate-fade-in shadow-md">
          <span className="text-xs font-label font-bold flex items-center gap-2">
            <CheckSquare className="w-4 h-4 text-[#B8422E]" />
            <span>{selectedIds.length} item(s) selected</span>
          </span>

          <div className="flex items-center gap-2">
            {bulkActions.map((action, idx) => (
              <button
                key={idx}
                onClick={() => action.onClick(selectedIds)}
                className={`px-3 py-1 rounded text-xs font-label uppercase font-bold tracking-wider flex items-center gap-1.5 cursor-pointer transition-transform hover:scale-105 ${
                  action.variant === 'danger'
                    ? 'bg-red-600 text-white'
                    : action.variant === 'primary'
                    ? 'bg-[#B8422E] text-white'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                {action.icon}
                <span>{action.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Table Component for Desktop / Cards for Mobile */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left text-xs font-body border-collapse">
          <thead className="sticky top-0 bg-[var(--bg-surface)] z-10">
            <tr className="border-b text-[var(--text-secondary)] font-label uppercase tracking-wider text-[11px]" style={{ borderColor: 'var(--border-subtle)' }}>
              <th className="py-3 px-3 w-10">
                <button onClick={toggleSelectAll} className="cursor-pointer">
                  {isAllSelected ? <CheckSquare className="w-4 h-4 text-[#B8422E]" /> : <Square className="w-4 h-4 text-slate-400" />}
                </button>
              </th>
              {visibleColumns.map((col) => (
                <th
                  key={String(col.key)}
                  onClick={() => col.sortable !== false && handleSort(String(col.key))}
                  className={`py-3 px-3 select-none ${col.sortable !== false ? 'cursor-pointer hover:text-[var(--text-primary)]' : ''}`}
                  style={{ width: col.width }}
                >
                  <div className="flex items-center gap-1.5">
                    <span>{col.header}</span>
                    {col.sortable !== false && sortKey === String(col.key) && (
                      sortOrder === 'asc' ? <ChevronUp className="w-3.5 h-3.5 text-[#B8422E]" /> : <ChevronDown className="w-3.5 h-3.5 text-[#B8422E]" />
                    )}
                    {col.sortable !== false && sortKey !== String(col.key) && (
                      <ArrowUpDown className="w-3 h-3 text-slate-400 opacity-40 hover:opacity-100" />
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y" style={{ borderColor: 'var(--border-subtle)' }}>
            {paginatedData.length === 0 ? (
              <tr>
                <td colSpan={visibleColumns.length + 1} className="py-10 text-center text-slate-400 text-xs">
                  No records match your criteria.
                </td>
              </tr>
            ) : (
              paginatedData.map((item) => {
                const isSelected = selectedIds.includes(item.id);
                return (
                  <tr
                    key={item.id}
                    onClick={() => onRowClick && onRowClick(item)}
                    className={`transition-colors ${
                      isSelected ? 'bg-[#B8422E]/10' : 'hover:bg-black/5 dark:hover:bg-white/5'
                    } ${onRowClick ? 'cursor-pointer' : ''}`}
                  >
                    <td className="py-3 px-3">
                      <button onClick={(e) => toggleSelectRow(item.id, e)} className="cursor-pointer">
                        {isSelected ? <CheckSquare className="w-4 h-4 text-[#B8422E]" /> : <Square className="w-4 h-4 text-slate-400" />}
                      </button>
                    </td>
                    {visibleColumns.map((col) => (
                      <td key={String(col.key)} className="py-3 px-3 text-[var(--text-primary)]">
                        {col.render ? col.render(item) : highlightMatch((item as any)[col.key])}
                      </td>
                    ))}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Responsive Mobile Card View */}
      <div className="md:hidden flex flex-col gap-3">
        {paginatedData.map((item) => {
          const isSelected = selectedIds.includes(item.id);
          return (
            <div
              key={item.id}
              onClick={() => onRowClick && onRowClick(item)}
              className={`p-4 rounded-lg border text-xs flex flex-col gap-2 transition-all ${
                isSelected ? 'border-[#B8422E] bg-[#B8422E]/10' : 'border-[var(--border-subtle)] bg-black/5 dark:bg-white/5'
              }`}
            >
              <div className="flex items-center justify-between border-b border-black/10 dark:border-white/10 pb-2">
                <button onClick={(e) => toggleSelectRow(item.id, e)} className="cursor-pointer flex items-center gap-2 font-bold font-mono">
                  {isSelected ? <CheckSquare className="w-4 h-4 text-[#B8422E]" /> : <Square className="w-4 h-4 text-slate-400" />}
                  <span>ID: {item.id}</span>
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1">
                {visibleColumns.map((col) => (
                  <div key={String(col.key)} className="flex flex-col">
                    <span className="text-[10px] font-label uppercase text-slate-400">{col.header}</span>
                    <span className="font-medium text-[var(--text-primary)]">
                      {col.render ? col.render(item) : highlightMatch((item as any)[col.key])}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination Footer */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-t text-xs font-body text-[var(--text-secondary)]" style={{ borderColor: 'var(--border-subtle)' }}>
        <div>
          Showing <span className="font-bold text-[var(--text-primary)]">{filteredData.length > 0 ? (page - 1) * pageSize + 1 : 0}</span> to{' '}
          <span className="font-bold text-[var(--text-primary)]">{Math.min(page * pageSize, filteredData.length)}</span> of{' '}
          <span className="font-bold text-[var(--text-primary)]">{filteredData.length}</span> entries
        </div>

        <div className="flex items-center gap-2">
          {/* Rows per page selector */}
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
              setPage(1);
            }}
            className="px-2 py-1 rounded border text-xs border-[var(--border-subtle)] bg-black/5 dark:bg-white/5 text-[var(--text-primary)] focus:outline-none"
          >
            <option value={5}>5 per page</option>
            <option value={10}>10 per page</option>
            <option value={25}>25 per page</option>
            <option value={50}>50 per page</option>
          </select>

          {/* Page buttons */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="p-1 rounded border border-[var(--border-subtle)] hover:bg-black/10 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="px-2 font-mono font-bold">
              {page} / {totalPages}
            </span>
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="p-1 rounded border border-[var(--border-subtle)] hover:bg-black/10 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
