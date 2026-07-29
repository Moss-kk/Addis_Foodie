'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface SavedContextType {
  savedIds: string[];
  toggleSave: (id: string) => void;
  isSaved: (id: string) => boolean;
}

const SavedContext = createContext<SavedContextType>({
  savedIds: [],
  toggleSave: () => {},
  isSaved: () => false,
});

export function SavedProvider({ children }: { children: React.ReactNode }) {
  const [savedIds, setSavedIds] = useState<string[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('addis_foodies_saved_ids');
      if (stored) {
        setSavedIds(JSON.parse(stored));
      }
    } catch {
      // Fallback
    }
  }, []);

  const toggleSave = (id: string) => {
    setSavedIds((prev) => {
      const next = prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id];
      try {
        localStorage.setItem('addis_foodies_saved_ids', JSON.stringify(next));
      } catch {
        // Fallback
      }
      return next;
    });
  };

  const isSaved = (id: string) => savedIds.includes(id);

  return (
    <SavedContext.Provider value={{ savedIds, toggleSave, isSaved }}>
      {children}
    </SavedContext.Provider>
  );
}

export function useSaved() {
  return useContext(SavedContext);
}
