// =============================================
// TrackWise — PeriodBar Component
// =============================================
import React from 'react'
import { useStore } from '../store/useStore'

const PERIODS = ['7D', '30D', 'Q1', 'YTD', '2025', 'All']

export default function PeriodBar() {
  const { activePeriod, setActivePeriod } = useStore()

  return (
    <div style={{
      background: 'var(--cream)',
      borderBottom: '1px solid var(--border)',
      padding: '0 40px',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        display: 'flex', alignItems: 'center',
      }}>
        <span style={{
          fontSize: 10, textTransform: 'uppercase', letterSpacing: '1.5px',
          color: 'var(--muted)', padding: '16px 24px 16px 0',
          borderRight: '1px solid var(--border)',
          marginRight: 4, whiteSpace: 'nowrap',
        }}>
          Period
        </span>

        {PERIODS.map((p) => (
          <button
            key={p}
            onClick={() => setActivePeriod(p)}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11, padding: '16px 20px',
              border: 'none', background: 'none',
              color: activePeriod === p ? 'var(--ink)' : 'var(--muted)',
              cursor: 'pointer', letterSpacing: '0.5px',
              fontWeight: activePeriod === p ? 500 : 400,
              borderBottom: activePeriod === p ? '2px solid var(--accent)' : '2px solid transparent',
              marginBottom: -1,
              transition: 'all 0.15s ease',
              whiteSpace: 'nowrap',
            }}
          >
            {p}
          </button>
        ))}

        {/* Right side actions */}
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 10, paddingLeft: 20 }}>
          <button className="btn btn-ghost" style={{ padding: '6px 14px', fontSize: 10 }}>
            + Add Transaction
          </button>
          <button className="btn btn-ghost" style={{ padding: '6px 14px', fontSize: 10 }}>
            + New Category
          </button>
        </div>
      </div>
    </div>
  )
}
