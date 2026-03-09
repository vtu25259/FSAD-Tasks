// =============================================
// TrackWise — BudgetTracker Component
// =============================================
import React from 'react'
import { useStore } from '../store/useStore'
import { CATEGORIES } from '../data/mockData'
import { formatCurrency, budgetColor } from '../utils/helpers'

export default function BudgetTracker() {
  const { budgets } = useStore()

  const overBudget = budgets.filter((b) => b.spent > b.limit).length

  return (
    <div className="card" style={{ animation: 'fadeUp 0.5s 0.42s ease both' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 20 }}>
        <span style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--muted)', fontWeight: 500 }}>
          Budget Status
        </span>
        {overBudget > 0 && (
          <span className="badge badge-up">{overBudget} Over</span>
        )}
      </div>

      <div>
        {budgets.map((b) => {
          const cat   = CATEGORIES.find((c) => c.id === b.id)
          const ratio = b.spent / b.limit
          const pct   = Math.min(ratio * 100, 100)
          const color = budgetColor(ratio)

          return (
            <div key={b.id} style={{
              paddingBottom: 14, marginBottom: 14,
              borderBottom: '1px solid var(--border)',
            }}>
              {/* Row */}
              <div style={{
                display: 'flex', justifyContent: 'space-between',
                alignItems: 'center', marginBottom: 7,
              }}>
                <span style={{ fontSize: 12, fontWeight: 500 }}>
                  {cat?.emoji} {cat?.label}
                </span>
                <span style={{ fontSize: 11, color: ratio > 1 ? 'var(--accent)' : 'var(--muted)' }}>
                  {formatCurrency(b.spent)} / {formatCurrency(b.limit)}
                </span>
              </div>

              {/* Progress bar */}
              <div style={{
                height: 4, background: 'var(--cream)',
                borderRadius: 2, overflow: 'hidden',
              }}>
                <div style={{
                  width: `${pct}%`,
                  height: '100%',
                  borderRadius: 2,
                  background: color,
                  transition: 'width 1.2s ease',
                }}/>
              </div>

              {/* Over budget label */}
              {ratio > 1 && (
                <div style={{ fontSize: 9, color: 'var(--accent)', marginTop: 4, letterSpacing: '0.5px' }}>
                  {formatCurrency(b.spent - b.limit)} over budget
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
