'use client';

import React, { useEffect } from 'react';
import { CheckCircle2, AlertTriangle, XCircle, Info, Undo2, X } from 'lucide-react';

export interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message?: string;
  onUndo?: () => void;
}

interface AdminToastProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export const AdminToast: React.FC<AdminToastProps> = ({ toasts, onDismiss }) => {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`pointer-events-auto p-4 rounded-xl border text-white shadow-2xl flex items-start gap-3 transition-all transform translate-y-0 animate-slide-up ${
            toast.type === 'success'
              ? 'bg-[#1A1C1E] border-emerald-500/50'
              : toast.type === 'error'
              ? 'bg-[#1A1C1E] border-red-500/50'
              : toast.type === 'warning'
              ? 'bg-[#1A1C1E] border-amber-500/50'
              : 'bg-[#1A1C1E] border-sky-500/50'
          }`}
        >
          {toast.type === 'success' && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />}
          {toast.type === 'error' && <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />}
          {toast.type === 'warning' && <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />}
          {toast.type === 'info' && <Info className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />}

          <div className="flex-1 flex flex-col gap-0.5">
            <span className="font-label font-bold text-xs uppercase tracking-wider text-white">
              {toast.title}
            </span>
            {toast.message && <p className="text-xs font-body text-slate-300">{toast.message}</p>}

            {toast.onUndo && (
              <button
                onClick={() => {
                  toast.onUndo?.();
                  onDismiss(toast.id);
                }}
                className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-label uppercase font-bold text-[#B8422E] hover:underline cursor-pointer"
              >
                <Undo2 className="w-3.5 h-3.5" />
                <span>Undo Action</span>
              </button>
            )}
          </div>

          <button
            onClick={() => onDismiss(toast.id)}
            className="text-slate-400 hover:text-white p-0.5 rounded cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
};
