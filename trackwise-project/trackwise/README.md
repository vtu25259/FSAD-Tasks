# TrackWise — Relational Expense Analytics Platform

A modern, production-grade expense analytics dashboard built with React, Recharts, and Zustand.

---

## ✦ Features

- **Hero Dashboard** — animated KPI stats with YTD summaries
- **Relational Network Graph** — SVG node map showing co-occurrence between expense categories
- **12-Month Trend Chart** — income vs. spend area chart (Recharts)
- **Category Donut** — interactive, clickable spend breakdown
- **Daily Activity Heatmap** — calendar-grid spend intensity for any month
- **Budget Tracker** — animated progress bars with over-budget alerts
- **Transaction List** — filterable, searchable transaction feed
- **Top Merchants** — bar chart of highest-spend merchants
- **AI Insights Panel** — dismissable insight cards
- **Scrolling Ticker** — live category spend strip
- **Period Selector** — 7D / 30D / Q1 / YTD / Annual views
- **Global State** — Zustand store with filters, period, and derived selectors

---

## 🗂 Project Structure

```
trackwise/
├── index.html
├── vite.config.js
├── package.json
├── README.md
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx              # React root
    ├── App.jsx               # Root layout component
    ├── styles/
    │   └── globals.css       # Design tokens & global styles
    ├── data/
    │   └── mockData.js       # Seed data (transactions, budgets, KPIs)
    ├── store/
    │   └── useStore.js       # Zustand global state
    ├── hooks/
    │   ├── useAnimatedValue.js  # Countup animation hook
    │   └── useWindowSize.js     # Responsive breakpoints hook
    ├── utils/
    │   └── helpers.js        # Formatters, color utils, aggregation
    └── components/
        ├── Navbar.jsx
        ├── HeroStrip.jsx
        ├── Ticker.jsx
        ├── PeriodBar.jsx
        ├── KPICards.jsx
        ├── CategoryDonut.jsx
        ├── TrendChart.jsx
        ├── RelationGraph.jsx
        ├── DailyHeatmap.jsx
        ├── BudgetTracker.jsx
        ├── TransactionList.jsx
        ├── InsightsPanel.jsx
        ├── TopMerchants.jsx
        ├── SectionLabel.jsx
        └── Footer.jsx
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 18
- npm or yarn

### Install & Run

```bash
# Install dependencies
npm install

# Start dev server (opens at http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🎨 Design System

| Token             | Value        |
|-------------------|--------------|
| `--ink`           | `#0d0d0d`    |
| `--paper`         | `#f5f1ea`    |
| `--accent`        | `#c8400f`    |
| `--green`         | `#2d6a4f`    |
| `--cool`          | `#2a4a5e`    |
| `--gold`          | `#d4a017`    |
| `--font-display`  | DM Serif Display |
| `--font-mono`     | DM Mono      |
| `--font-syne`     | Syne         |

---

## 🛠 Tech Stack

| Layer       | Technology          |
|-------------|---------------------|
| Framework   | React 18            |
| Build Tool  | Vite 5              |
| Charts      | Recharts            |
| State       | Zustand             |
| Animations  | CSS + custom hooks  |
| Styling     | Pure CSS variables  |

---

## 📦 Extending

**Add a real transaction:**
```js
import { useStore } from './store/useStore'
const { addTransaction } = useStore()

addTransaction({
  id: 'custom-01',
  date: '2026-03-06',
  merchant: 'Apple Store',
  category: 'shopping',
  amount: -999,
  note: 'MacBook Air'
})
```

**Connect to a real API:**
Replace the mock data in `src/data/mockData.js` and update the Zustand store
(`src/store/useStore.js`) to fetch from your backend instead of importing static data.

---

## 📄 License

MIT
