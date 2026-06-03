import { create } from "zustand";
import type { NailDesign } from "@/data/mockData";

interface User {
  id: string;
  name: string;
  avatar: string;
}

interface AppState {
  // User
  user: User | null;
  isLoggedIn: boolean;
  login: (user: User) => void;
  logout: () => void;

  // Favorites
  favorites: string[];
  toggleFavorite: (nailId: string) => void;
  isFavorite: (nailId: string) => boolean;

  // Search History
  searchHistory: string[];
  addSearchHistory: (query: string) => void;
  clearSearchHistory: () => void;
}

export const useAppStore = create<AppState>((set, get) => ({
  // User
  user: null,
  isLoggedIn: false,
  login: (user: User) => set({ user, isLoggedIn: true }),
  logout: () => set({ user: null, isLoggedIn: false }),

  // Favorites
  favorites: [],
  toggleFavorite: (nailId: string) => {
    const { favorites } = get();
    if (favorites.includes(nailId)) {
      set({ favorites: favorites.filter((id) => id !== nailId) });
    } else {
      set({ favorites: [...favorites, nailId] });
    }
  },
  isFavorite: (nailId: string) => get().favorites.includes(nailId),

  // Search History
  searchHistory: [],
  addSearchHistory: (query: string) => {
    const { searchHistory } = get();
    const filtered = searchHistory.filter((h) => h !== query);
    set({ searchHistory: [query, ...filtered].slice(0, 10) });
  },
  clearSearchHistory: () => set({ searchHistory: [] }),
}));
