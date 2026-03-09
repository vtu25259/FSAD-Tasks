// =============================================
// TrackWise — Mock Data & Seed Data
// =============================================

// --- CATEGORIES ---
export const CATEGORIES = [
  { id: 'housing',       label: 'Housing',       emoji: '🏠', color: '#0d0d0d', budget: 1850 },
  { id: 'food',          label: 'Food & Dining',  emoji: '🍽', color: '#c8400f', budget: 800  },
  { id: 'transport',     label: 'Transport',      emoji: '🚌', color: '#d4a017', budget: 500  },
  { id: 'subscriptions', label: 'Subscriptions',  emoji: '📱', color: '#2a4a5e', budget: 250  },
  { id: 'health',        label: 'Health',         emoji: '💊', color: '#52b788', budget: 400  },
  { id: 'entertainment', label: 'Entertainment',  emoji: '🎬', color: '#3d6b85', budget: 350  },
  { id: 'shopping',      label: 'Shopping',       emoji: '🛍', color: '#8a7f72', budget: 600  },
  { id: 'utilities',     label: 'Utilities',      emoji: '⚡', color: '#d4a017', budget: 200  },
  { id: 'income',        label: 'Income',         emoji: '💼', color: '#2d6a4f', budget: null },
]

// --- TRANSACTIONS (last 60 days) ---
export const TRANSACTIONS = [
  // March 2026
  { id: 't001', date: '2026-03-06', merchant: 'Eataly Market',        category: 'food',          amount: -124,   note: '' },
  { id: 't002', date: '2026-03-05', merchant: 'Spotify',              category: 'subscriptions', amount: -9.99,  note: 'Monthly' },
  { id: 't003', date: '2026-03-05', merchant: 'Freelance Invoice #45', category: 'income',       amount: 2200,   note: 'Client: Novo Design' },
  { id: 't004', date: '2026-03-04', merchant: 'Metro Card Reload',    category: 'transport',     amount: -50,    note: '' },
  { id: 't005', date: '2026-03-04', merchant: 'CVS Pharmacy',         category: 'health',        amount: -34,    note: '' },
  { id: 't006', date: '2026-03-03', merchant: 'Freelance Invoice #44', category: 'income',       amount: 3500,   note: 'Client: Verve Studio' },
  { id: 't007', date: '2026-03-03', merchant: 'Electric Bill',        category: 'utilities',     amount: -86,    note: 'Con Edison' },
  { id: 't008', date: '2026-03-02', merchant: 'Adobe Creative Suite', category: 'subscriptions', amount: -54,    note: 'Annual / 12' },
  { id: 't009', date: '2026-03-02', merchant: 'Amazon',               category: 'shopping',      amount: -218,   note: 'Desk lamp + cables' },
  { id: 't010', date: '2026-03-01', merchant: 'Apartment Rent',       category: 'housing',       amount: -1850,  note: 'March 2026' },
  { id: 't011', date: '2026-03-01', merchant: 'Metro Monthly Pass',   category: 'transport',     amount: -132,   note: '' },
  // Late Feb
  { id: 't012', date: '2026-02-28', merchant: 'Trader Joe\'s',        category: 'food',          amount: -78,    note: '' },
  { id: 't013', date: '2026-02-27', merchant: 'Netflix',              category: 'subscriptions', amount: -15.49, note: '' },
  { id: 't014', date: '2026-02-27', merchant: 'SoulCycle',            category: 'health',        amount: -34,    note: '' },
  { id: 't015', date: '2026-02-26', merchant: 'AMC Theaters',         category: 'entertainment', amount: -29,    note: '2 tickets' },
  { id: 't016', date: '2026-02-25', merchant: 'Sweetgreen',           category: 'food',          amount: -18,    note: '' },
  { id: 't017', date: '2026-02-24', merchant: 'Zara',                 category: 'shopping',      amount: -142,   note: '' },
  { id: 't018', date: '2026-02-23', merchant: 'Whole Foods',          category: 'food',          amount: -94,    note: '' },
  { id: 't019', date: '2026-02-22', merchant: 'GitHub Copilot',       category: 'subscriptions', amount: -10,    note: '' },
  { id: 't020', date: '2026-02-21', merchant: 'Doctor Visit Copay',   category: 'health',        amount: -45,    note: 'Dr. Kim' },
  { id: 't021', date: '2026-02-20', merchant: 'Lyft',                 category: 'transport',     amount: -24,    note: '' },
  { id: 't022', date: '2026-02-19', merchant: 'Airbnb Booking',       category: 'entertainment', amount: -280,   note: 'Weekend trip' },
  { id: 't023', date: '2026-02-18', merchant: 'Freelance Invoice #43', category: 'income',       amount: 1800,   note: 'Client: Arc Labs' },
  { id: 't024', date: '2026-02-17', merchant: 'IKEA',                 category: 'shopping',      amount: -320,   note: 'Shelving unit' },
  { id: 't025', date: '2026-02-16', merchant: 'Duane Reade',          category: 'health',        amount: -22,    note: '' },
  { id: 't026', date: '2026-02-15', merchant: 'Internet Bill',        category: 'utilities',     amount: -79,    note: 'Xfinity' },
  { id: 't027', date: '2026-02-14', merchant: 'Dinner — Valentine\'s', category: 'food',         amount: -168,   note: 'Babbo' },
  { id: 't028', date: '2026-02-13', merchant: 'Figma Pro',            category: 'subscriptions', amount: -15,    note: '' },
  { id: 't029', date: '2026-02-12', merchant: 'Starbucks',            category: 'food',          amount: -8.5,   note: '' },
  { id: 't030', date: '2026-02-11', merchant: 'Uber',                 category: 'transport',     amount: -18,    note: '' },
  { id: 't031', date: '2026-02-10', merchant: 'Book Club Order',      category: 'entertainment', amount: -42,    note: '' },
  { id: 't032', date: '2026-02-09', merchant: 'Target',               category: 'shopping',      amount: -88,    note: '' },
  { id: 't033', date: '2026-02-08', merchant: 'Gas Station',          category: 'transport',     amount: -55,    note: '' },
  { id: 't034', date: '2026-02-07', merchant: 'Pharmacy',             category: 'health',        amount: -28,    note: '' },
  { id: 't035', date: '2026-02-06', merchant: 'Chipotle',             category: 'food',          amount: -14,    note: '' },
  { id: 't036', date: '2026-02-01', merchant: 'Apartment Rent',       category: 'housing',       amount: -1850,  note: 'Feb 2026' },
]

// --- MONTHLY TOTALS (last 12 months) ---
export const MONTHLY_TOTALS = [
  { month: 'Mar 25', spend: 5620, income: 7100, savings: 1480 },
  { month: 'Apr 25', spend: 5820, income: 7400, savings: 1580 },
  { month: 'May 25', spend: 5490, income: 7200, savings: 1710 },
  { month: 'Jun 25', spend: 6100, income: 7800, savings: 1700 },
  { month: 'Jul 25', spend: 5950, income: 7500, savings: 1550 },
  { month: 'Aug 25', spend: 5700, income: 7300, savings: 1600 },
  { month: 'Sep 25', spend: 5550, income: 7600, savings: 2050 },
  { month: 'Oct 25', spend: 5800, income: 7900, savings: 2100 },
  { month: 'Nov 25', spend: 6300, income: 8200, savings: 1900 },
  { month: 'Dec 25', spend: 6900, income: 8500, savings: 1600 },
  { month: 'Jan 26', spend: 5755, income: 7200, savings: 1445 },
  { month: 'Feb 26', spend: 5980, income: 7500, savings: 1520 },
  { month: 'Mar 26', spend: 6240, income: 7398, savings: 1158 },
]

// --- PRIOR YEAR MONTHLY TOTALS ---
export const PRIOR_YEAR_TOTALS = [
  { month: 'Mar 24', spend: 5100 },
  { month: 'Apr 24', spend: 5300 },
  { month: 'May 24', spend: 4980 },
  { month: 'Jun 24', spend: 5600 },
  { month: 'Jul 24', spend: 5450 },
  { month: 'Aug 24', spend: 5200 },
  { month: 'Sep 24', spend: 5050 },
  { month: 'Oct 24', spend: 5300 },
  { month: 'Nov 24', spend: 5800 },
  { month: 'Dec 24', spend: 6400 },
  { month: 'Jan 25', spend: 5200 },
  { month: 'Feb 25', spend: 5450 },
]

// --- CATEGORY SPEND CURRENT MONTH ---
export const CATEGORY_SPEND = [
  { id: 'housing',       amount: 1850 },
  { id: 'food',          amount: 920  },
  { id: 'shopping',      amount: 680  },
  { id: 'transport',     amount: 430  },
  { id: 'health',        amount: 340  },
  { id: 'entertainment', amount: 290  },
  { id: 'subscriptions', amount: 218  },
  { id: 'utilities',     amount: 165  },
]

// --- BUDGET STATUS ---
export const BUDGETS = [
  { id: 'housing',       spent: 1850, limit: 1850 },
  { id: 'food',          spent: 920,  limit: 800  },
  { id: 'transport',     spent: 430,  limit: 500  },
  { id: 'shopping',      spent: 680,  limit: 600  },
  { id: 'health',        spent: 340,  limit: 400  },
  { id: 'entertainment', spent: 290,  limit: 350  },
  { id: 'subscriptions', spent: 218,  limit: 250  },
  { id: 'utilities',     spent: 165,  limit: 200  },
]

// --- AI INSIGHTS ---
export const INSIGHTS = [
  {
    id: 'i1',
    icon: '🔥',
    type: 'warning',
    title: 'Food Over Budget',
    text: 'Food spending is 15% above budget for a 3rd consecutive month. Consider meal planning or cooking at home.',
  },
  {
    id: 'i2',
    icon: '📈',
    type: 'positive',
    title: 'Savings Trend',
    text: 'Your savings rate has grown 4.2% over 6 months. On track to hit your $15k emergency fund goal by August.',
  },
  {
    id: 'i3',
    icon: '🔁',
    type: 'opportunity',
    title: 'Unused Subscriptions',
    text: '3 services haven\'t been accessed in 30+ days — potential $64/mo savings if cancelled.',
  },
  {
    id: 'i4',
    icon: '⚡',
    type: 'info',
    title: 'Weekend Spending',
    text: 'Weekends account for 61% of discretionary spend. Friday evenings average $84 — highest of any time slot.',
  },
]

// --- KPI SUMMARY ---
export const KPI = {
  totalSpendYTD:   24831,
  spendThisMonth:  6240,
  incomeThisMonth: 7398,
  savingsRate:     16.2,
  netCashFlow:     1158,
  transactionCount: 147,
  activeCategoryCount: 8,
  savingsGoal: 15000,
  savingsCurrent: 9840,
  deltaVsLastMonth: 8.4,
}

// --- DAILY SPEND (Feb 2026 for heatmap) ---
export const DAILY_SPEND_FEB = [
   42,   0,  18,  86, 132, 142,   0,
   28,  22,  15, 168,   0,  55,  42,
   88,   8,  50, 280,  45,  94,  34,
   10,  18,  29,  78,  15,   0,  35,
]

// --- RELATIONS (co-occurrence weights for graph) ---
export const RELATIONS = [
  { source: 'housing',       target: 'utilities',     weight: 0.9 },
  { source: 'food',          target: 'entertainment',  weight: 0.7 },
  { source: 'food',          target: 'transport',      weight: 0.5 },
  { source: 'transport',     target: 'entertainment',  weight: 0.4 },
  { source: 'shopping',      target: 'entertainment',  weight: 0.6 },
  { source: 'health',        target: 'subscriptions',  weight: 0.3 },
  { source: 'subscriptions', target: 'entertainment',  weight: 0.8 },
]
