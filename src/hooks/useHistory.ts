import { useEffect, useState } from 'react';
import { Brand } from '../types';

export interface HistoryItem {
  id: string;
  brandId: Brand;
  description: string;
  result: string;
  timestamp: number;
}

const STORAGE_KEY = 'sotay-ky-thuat:history';
const MAX_ITEMS = 50;

function loadHistory(): HistoryItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function useHistory() {
  const [history, setHistory] = useState<HistoryItem[]>(() => loadHistory());

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
    } catch {
      // Quota exceeded or storage unavailable — history stays in-memory only.
    }
  }, [history]);

  const addHistoryItem = (item: Omit<HistoryItem, 'id' | 'timestamp'>) => {
    setHistory((prev) =>
      [
        {
          ...item,
          id: Math.random().toString(36).substr(2, 9),
          timestamp: Date.now(),
        },
        ...prev,
      ].slice(0, MAX_ITEMS)
    );
  };

  const removeHistoryItem = (id: string) => {
    setHistory((prev) => prev.filter((h) => h.id !== id));
  };

  const clearHistory = () => setHistory([]);

  return { history, addHistoryItem, removeHistoryItem, clearHistory };
}
