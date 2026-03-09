// =============================================
// TrackWise — Global State Store (Zustand)
// =============================================
import { create } from 'zustand'
import { TRANSACTIONS, BUDGETS, CATEGORIES, KPI } from '../data/mockData'

export const useStore = create((set, get) => ({
  // ---- UI State ----
  activePeriod: '30D',
  activeView: 'overview',
  sidebarOpen: false,

  setActivePeriod: (period) => set({ activePeriod: period }),
  setActiveView:   (view)   => set({ activeView: view }),
  toggleSidebar:   ()       => set((s) => ({ sidebarOpen: !s.sidebarOpen })),

  // ---- Data ----
  transactions: TRANSACTIONS,
  budgets:      BUDGETS,
  categories:   CATEGORIES,
  kpi:          KPI,

  // ---- Filters ----
  filterCategory: null,
  filterType:     'all', // 'all' | 'expense' | 'income'
  searchQuery:    '',

  setFilterCategory: (cat)   => set({ filterCategory: cat }),
  setFilterType:     (type)  => set({ filterType: type }),
  setSearchQuery:    (query) => set({ searchQuery: query }),

  // ---- Derived Selectors ----
  getFilteredTransactions: () => {
    const { transactions, filterCategory, filterType, searchQuery } = get()
    return transactions.filter((tx) => {
      if (filterCategory && tx.category !== filterCategory) return false
      if (filterType === 'expense' && tx.amount > 0) return false
      if (filterType === 'income'  && tx.amount < 0) return false
      if (searchQuery && !tx.merchant.toLowerCase().includes(searchQuery.toLowerCase())) return false
      return true
    })
  },

  getCategoryById: (id) => get().categories.find((c) => c.id === id),

  getTotalSpend: () =>
    get().transactions
      .filter((tx) => tx.amount < 0)
      .reduce((sum, tx) => sum + Math.abs(tx.amount), 0),

  // ---- Add Transaction ----
  addTransaction: (tx) =>
    set((s) => ({ transactions: [tx, ...s.transactions] })),

  // ---- Update Budget ----
  updateBudget: (id, limit) =>
    set((s) => ({
      budgets: s.budgets.map((b) => (b.id === id ? { ...b, limit } : b)),
    })),
}))
