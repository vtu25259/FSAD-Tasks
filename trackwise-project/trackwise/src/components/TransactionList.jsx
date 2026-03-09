// =============================================
// TrackWise — TransactionList Component
// =============================================
import React, { useState } from 'react'
import { useStore } from '../store/useStore'
import { CATEGORIES } from '../data/mockData'
import { formatCurrency, formatDate, truncate, staggerDelay } from '../utils/helpers'

const TYPE_FILTERS = ['all', 'expense', 'income']

export default function TransactionList({ limit = 8, showFilters = true }) {
  const { getFilteredTransactions, filterType, setFilterType, searchQuery, setSearchQuery } = useStore()
  const txs = getFilteredTransactions().slice(0, limit)

  return (
    <div className="card" style={{ gridColumn: 'span 2', animation: 'fadeUp 0.5s 0.48s ease both' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 16 }}>
        <span style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--muted)', fontWeight: 500 }}>
          Recent Transactions
        </span>
        <button className="btn btn-ghost" style={{ padding: '4px 12px', fontSize: 10 }}>
          View All →
        </button>
      </div>

      {showFilters && (
        <div style={{ display: 'flex', gap: 8, marginBottom: 16, alignItems: 'center' }}>
          {/* Search */}
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search merchants..."
            style={{
              flex: 1, fontFamily: 'var(--font-mono)',
              fontSize: 11, padding: '6px 12px',
              border: '1px solid var(--border)',
              borderRadius: 4, background: 'var(--cream)',
              color: 'var(--ink)', outline: 'none',
            }}
          />
          {/* Type filters */}
          {TYPE_FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilterType(f)}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 10, textTransform: 'capitalize',
                padding: '6px 12px',
                border: '1px solid var(--border)',
                borderRadius: 4,
                background: filterType === f ? 'var(--ink)' : 'transparent',
                color: filterType === f ? 'var(--paper)' : 'var(--muted)',
                cursor: 'pointer',
                transition: 'all 0.15s',
              }}
            >
              {f}
            </button>
          ))}
        </div>
      )}

      {/* List */}
      <div>
        {txs.map((tx, i) => {
          const cat  = CATEGORIES.find((c) => c.id === tx.category)
          const isIncome = tx.amount > 0

          return (
            <div key={tx.id} style={{
              display: 'flex', alignItems: 'center', gap: 14,
              padding: '11px 0',
              borderBottom: i < txs.length - 1 ? '1px solid var(--border)' : 'none',
              animationDelay: staggerDelay(i, 40),
            }}>
              {/* Icon */}
              <div style={{
                width: 36, height: 36, borderRadius: 8,
                background: 'var(--cream)',
                display: 'grid', placeItems: 'center',
                fontSize: 16, flexShrink: 0,
              }}>
                {cat?.emoji || '💸'}
              </div>

              {/* Info */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--ink)' }}
                  className="truncate">
                  {tx.merchant}
                </div>
                <div style={{ fontSize: 10, color: 'var(--muted)', marginTop: 2 }}>
                  {formatDate(tx.date)} · {cat?.label}
                  {tx.note && ` · ${tx.note}`}
                </div>
              </div>

              {/* Category badge */}
              <div style={{
                fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.8px',
                padding: '2px 8px', borderRadius: 2, flexShrink: 0,
                background: isIncome ? 'rgba(45,106,79,0.08)' : `${cat?.color}14`,
                color: isIncome ? 'var(--green)' : cat?.color || 'var(--muted)',
              }}>
                {isIncome ? 'Income' : cat?.label?.slice(0, 8)}
              </div>

              {/* Amount */}
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 18,
                color: isIncome ? 'var(--green)' : 'var(--accent)',
                flexShrink: 0,
              }}>
                {isIncome ? '+' : '−'}{formatCurrency(Math.abs(tx.amount))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
