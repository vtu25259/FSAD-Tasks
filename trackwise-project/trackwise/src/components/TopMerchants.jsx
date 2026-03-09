// =============================================
// TrackWise — TopMerchants Bar Chart
// =============================================
import React from 'react'
import { useStore } from '../store/useStore'
import { CATEGORIES } from '../data/mockData'
import { formatCurrency, groupBy, sumBy } from '../utils/helpers'

export default function TopMerchants() {
  const { transactions } = useStore()

  // Aggregate by merchant (expenses only)
  const expenses = transactions.filter((tx) => tx.amount < 0)
  const grouped = groupBy(expenses, 'merchant')
  const merchants = Object.entries(grouped)
    .map(([name, txs]) => ({
      name,
      total: sumBy(txs, (tx) => Math.abs(tx.amount)),
      category: txs[0].category,
    }))
    .sort((a, b) => b.total - a.total)
    .slice(0, 7)

  const max = merchants[0]?.total || 1

  return (
    <div className="card" style={{ animation: 'fadeUp 0.5s 0.6s ease both' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 20 }}>
        <span style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--muted)', fontWeight: 500 }}>
          Top Merchants
        </span>
        <span className="badge badge-neutral">This Month</span>
      </div>

      <div>
        {merchants.map((m, i) => {
          const cat   = CATEGORIES.find((c) => c.id === m.category)
          const pct   = (m.total / max) * 100

          return (
            <div key={m.name} style={{
              display: 'grid',
              gridTemplateColumns: '100px 1fr 60px',
              alignItems: 'center',
              gap: 10, marginBottom: 11,
            }}>
              <div style={{
                fontSize: 10, color: 'var(--muted)',
                textAlign: 'right',
                overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis',
              }}>
                {m.name.length > 12 ? m.name.slice(0, 12) + '…' : m.name}
              </div>

              <div style={{ height: 5, background: 'var(--cream)', borderRadius: 3, overflow: 'hidden' }}>
                <div style={{
                  height: '100%', borderRadius: 3,
                  width: `${pct}%`,
                  background: cat?.color || 'var(--ink)',
                  transition: 'width 1s ease',
                }}/>
              </div>

              <div style={{ fontSize: 11, fontWeight: 500, color: 'var(--ink)' }}>
                {formatCurrency(m.total)}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
