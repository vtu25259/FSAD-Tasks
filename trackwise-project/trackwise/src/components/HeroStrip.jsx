// =============================================
// TrackWise — HeroStrip Component
// =============================================
import React from 'react'
import { useStore } from '../store/useStore'
import { useAnimatedValue } from '../hooks/useAnimatedValue'
import { formatCurrency } from '../utils/helpers'

function AnimatedStat({ value, prefix = '$', decimals = 0, label, delay = 0 }) {
  const animated = useAnimatedValue(value, 1400, delay)
  const formatted = prefix === '$'
    ? formatCurrency(Math.round(animated))
    : `${animated.toFixed(decimals)}%`

  return (
    <div>
      <div style={{
        fontFamily: 'var(--font-syne)', fontSize: 28, fontWeight: 700,
        color: 'var(--paper)',
      }}>
        {formatted}
      </div>
      <div style={{
        fontSize: 10, textTransform: 'uppercase', letterSpacing: '1.5px',
        color: 'rgba(245,241,234,0.4)', marginTop: 3,
      }}>
        {label}
      </div>
    </div>
  )
}

export default function HeroStrip() {
  const { kpi } = useStore()

  return (
    <div style={{
      background: 'var(--ink)',
      color: 'var(--paper)',
      padding: '80px 40px 60px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Watermark */}
      <div style={{
        position: 'absolute', bottom: -20, right: -10,
        fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 140,
        letterSpacing: -8, color: 'rgba(255,255,255,0.035)',
        whiteSpace: 'nowrap', pointerEvents: 'none', lineHeight: 1,
        userSelect: 'none',
      }}>
        TRACKWISE
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
        {/* Tag */}
        <div style={{
          display: 'inline-block',
          fontSize: 10, fontWeight: 500,
          textTransform: 'uppercase', letterSpacing: '2px',
          color: 'var(--accent-light)',
          border: '1px solid var(--accent)',
          padding: '4px 12px', borderRadius: 2,
          marginBottom: 24,
        }}>
          Relational Analytics · Q1 2026
        </div>

        {/* Title */}
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(42px, 5vw, 72px)',
          lineHeight: 1.05, letterSpacing: -1,
          maxWidth: 680, marginBottom: 20,
        }}>
          Where every expense<br />
          <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>tells a story</em>
        </h1>

        <p style={{
          fontSize: 13, color: 'rgba(245,241,234,0.52)',
          maxWidth: 460, lineHeight: 1.8, marginBottom: 40,
        }}>
          Map, trace, and understand the relationships between your spending patterns,
          categories, and financial goals.
        </p>

        {/* Stats */}
        <div style={{
          display: 'flex', gap: 40, flexWrap: 'wrap',
          paddingTop: 40,
          borderTop: '1px solid rgba(255,255,255,0.1)',
        }}>
          <AnimatedStat value={kpi.totalSpendYTD}     label="Total Spent · YTD"   delay={0}   />
          <AnimatedStat value={kpi.spendThisMonth}    label="This Month"           delay={200} />
          <AnimatedStat value={kpi.transactionCount}  label="Transactions" prefix="" delay={400} />
          <AnimatedStat value={kpi.savingsRate}       label="Savings Rate" prefix="" decimals={1} delay={600} />
        </div>
      </div>
    </div>
  )
}
