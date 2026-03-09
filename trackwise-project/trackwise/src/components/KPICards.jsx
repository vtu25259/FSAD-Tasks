// =============================================
// TrackWise — KPI Cards
// =============================================
import React from 'react'
import { useStore } from '../store/useStore'
import { useAnimatedValue } from '../hooks/useAnimatedValue'
import { formatCurrency, staggerDelay } from '../utils/helpers'

// Sparkline SVG
function Sparkline({ points, color, filled = true }) {
  const h = 48, w = 200
  const max = Math.max(...points)
  const min = Math.min(...points)
  const range = max - min || 1
  const step = w / (points.length - 1)

  const coords = points.map((p, i) => {
    const x = i * step
    const y = h - ((p - min) / range) * (h - 8) - 4
    return `${x},${y}`
  })

  const pathD = `M ${coords.join(' L ')}`
  const areaD = `M ${coords.join(' L ')} L ${w},${h} L 0,${h} Z`

  return (
    <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none"
      style={{ width: '100%', height: 48, marginTop: 20 }}>
      {filled && (
        <defs>
          <linearGradient id={`sg-${color.replace('#','')}`} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.25"/>
            <stop offset="100%" stopColor={color} stopOpacity="0"/>
          </linearGradient>
        </defs>
      )}
      {filled && <path d={areaD} fill={`url(#sg-${color.replace('#','')})`}/>}
      <path d={pathD} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

const SPEND_POINTS = [5620,5820,5490,6100,5950,5700,5550,5800,6300,6900,5755,5980,6240]
const SAVINGS_POINTS = [16,17,18,15,14,16,19,20,17,14,15,16,16.2]
const FLOW_POINTS_IN  = [7100,7400,7200,7800,7500,7300,7600,7900,8200,8500,7200,7500,7398]
const FLOW_POINTS_OUT = [5620,5820,5490,6100,5950,5700,5550,5800,6300,6900,5755,5980,6240]

export default function KPICards() {
  const { kpi } = useStore()

  const spendAnim = useAnimatedValue(kpi.spendThisMonth, 1200, 100)
  const savingsAnim = useAnimatedValue(kpi.savingsRate, 1200, 200)
  const flowAnim  = useAnimatedValue(kpi.netCashFlow, 1200, 300)

  const cards = [
    {
      title: 'Monthly Spend',
      badge: `↑ ${kpi.deltaVsLastMonth}%`,
      badgeClass: 'badge-up',
      value: formatCurrency(Math.round(spendAnim)),
      sub: `vs ${formatCurrency(5755)} last month`,
      sparkPoints: SPEND_POINTS,
      color: '#c8400f',
    },
    {
      title: 'Savings Rate',
      badge: '↓ 2.1%',
      badgeClass: 'badge-down',
      value: `${savingsAnim.toFixed(1)}%`,
      sub: `${formatCurrency(kpi.netCashFlow)} saved this month`,
      sparkPoints: SAVINGS_POINTS,
      color: '#2d6a4f',
    },
    {
      title: 'Net Cash Flow',
      badge: 'Balanced',
      badgeClass: 'badge-neutral',
      value: `+${formatCurrency(Math.round(flowAnim))}`,
      sub: `In: ${formatCurrency(kpi.incomeThisMonth)} · Out: ${formatCurrency(kpi.spendThisMonth)}`,
      sparkPoints: FLOW_POINTS_IN,
      color: '#2a4a5e',
      dualLine: { points: FLOW_POINTS_OUT, color: '#c8400f' },
    },
  ]

  return (
    <>
      {cards.map((card, i) => (
        <div key={card.title} className="card"
          style={{ animationDelay: staggerDelay(i, 60), animation: 'fadeUp 0.5s ease both' }}>
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 20 }}>
            <span style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--muted)', fontWeight: 500 }}>
              {card.title}
            </span>
            <span className={`badge ${card.badgeClass}`}>{card.badge}</span>
          </div>

          {/* Value */}
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 44, lineHeight: 1, letterSpacing: -2, marginBottom: 6 }}>
            {card.value}
          </div>
          <div style={{ fontSize: 11, color: 'var(--muted)' }}>{card.sub}</div>

          {/* Sparkline */}
          <Sparkline points={card.sparkPoints} color={card.color} />
        </div>
      ))}
    </>
  )
}
