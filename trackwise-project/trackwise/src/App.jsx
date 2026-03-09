// =============================================
// TrackWise — App Root Component
// =============================================
import React from 'react'
import Navbar         from './components/Navbar'
import HeroStrip      from './components/HeroStrip'
import Ticker         from './components/Ticker'
import PeriodBar      from './components/PeriodBar'
import KPICards       from './components/KPICards'
import CategoryDonut  from './components/CategoryDonut'
import TrendChart     from './components/TrendChart'
import RelationGraph  from './components/RelationGraph'
import DailyHeatmap   from './components/DailyHeatmap'
import BudgetTracker  from './components/BudgetTracker'
import TransactionList from './components/TransactionList'
import InsightsPanel  from './components/InsightsPanel'
import TopMerchants   from './components/TopMerchants'
import SectionLabel   from './components/SectionLabel'
import Footer         from './components/Footer'

const GRID = {
  maxWidth: 1200,
  margin: '0 auto',
  padding: '40px 40px',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: 20,
}

export default function App() {
  return (
    <div>
      <Navbar />

      <div style={{ paddingTop: 64 }}>
        <HeroStrip />
        <Ticker />
        <PeriodBar />

        <div style={GRID}>
          {/* ── Key Metrics ─────────────────────── */}
          <SectionLabel label="Key Metrics" />
          <KPICards />

          {/* ── Category + Trend ────────────────── */}
          <SectionLabel label="Breakdown" />
          <CategoryDonut />
          <TrendChart />

          {/* ── Relational Map ──────────────────── */}
          <SectionLabel label="Relational Map" />
          <RelationGraph />
          <DailyHeatmap />

          {/* ── Budget & Transactions ───────────── */}
          <SectionLabel label="Budgets & Transactions" />
          <BudgetTracker />
          <TransactionList />

          {/* ── Deep Dive ───────────────────────── */}
          <SectionLabel label="Deep Dive" />
          <TopMerchants />
          <InsightsPanel />
        </div>

        <Footer />
      </div>
    </div>
  )
}
