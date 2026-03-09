// =============================================
// TrackWise — Ticker Component
// =============================================
import React from 'react'
import { CATEGORY_SPEND, CATEGORIES } from '../data/mockData'
import { formatCurrency } from '../utils/helpers'

const DELTAS = {
  housing:       { val: 0,   dir: 'flat' },
  food:          { val: 12,  dir: 'up'   },
  transport:     { val: -8,  dir: 'down' },
  subscriptions: { val: 4,   dir: 'up'   },
  health:        { val: -15, dir: 'down' },
  entertainment: { val: 22,  dir: 'up'   },
  shopping:      { val: 31,  dir: 'up'   },
  utilities:     { val: -3,  dir: 'down' },
}

function TickerItem({ cat, amount }) {
  const delta = DELTAS[cat.id] || { val: 0, dir: 'flat' }
  const color = delta.dir === 'down' ? '#52b788' : delta.dir === 'up' ? '#e8613a' : 'rgba(245,241,234,0.4)'
  const arrow = delta.dir === 'down' ? '↓' : delta.dir === 'up' ? '↑' : '→'

  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 10,
      fontSize: 10, textTransform: 'uppercase', letterSpacing: '1.5px',
      color: 'rgba(245,241,234,0.5)',
      flexShrink: 0,
    }}>
      <span style={{ marginRight: 2 }}>{cat.emoji}</span>
      <span>{cat.label}</span>
      <strong style={{ color: 'var(--paper)' }}>{formatCurrency(amount)}</strong>
      <span style={{ color, fontWeight: 500 }}>
        {arrow} {Math.abs(delta.val)}%
      </span>
    </div>
  )
}

export default function Ticker() {
  const items = CATEGORY_SPEND.map((s) => {
    const cat = CATEGORIES.find((c) => c.id === s.id)
    return { cat, amount: s.amount }
  }).filter(Boolean)

  const doubled = [...items, ...items] // seamless loop

  return (
    <div style={{
      background: 'var(--ink)',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      overflow: 'hidden',
      padding: '11px 0',
    }}>
      <div style={{
        display: 'flex',
        gap: 56,
        animation: 'ticker 28s linear infinite',
        width: 'max-content',
        alignItems: 'center',
      }}>
        {doubled.map(({ cat, amount }, i) => (
          <React.Fragment key={i}>
            <TickerItem cat={cat} amount={amount} />
            <span style={{ color: 'rgba(255,255,255,0.12)', fontSize: 12 }}>·</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}
