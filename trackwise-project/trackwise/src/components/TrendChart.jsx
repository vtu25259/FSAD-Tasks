// =============================================
// TrackWise — TrendChart Component (Recharts)
// =============================================
import React from 'react'
import {
  ResponsiveContainer, AreaChart, Area, XAxis, YAxis,
  CartesianGrid, Tooltip, Legend,
} from 'recharts'
import { MONTHLY_TOTALS } from '../data/mockData'
import { formatCurrency } from '../utils/helpers'

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null
  return (
    <div style={{
      background: 'var(--ink)', color: 'var(--paper)',
      padding: '10px 14px', borderRadius: 6,
      fontSize: 11, fontFamily: 'var(--font-mono)',
    }}>
      <div style={{ marginBottom: 6, color: 'rgba(245,241,234,0.5)', letterSpacing: 1 }}>
        {label}
      </div>
      {payload.map((p) => (
        <div key={p.dataKey} style={{ display: 'flex', gap: 10, justifyContent: 'space-between', marginBottom: 2 }}>
          <span style={{ color: p.color }}>{p.name}</span>
          <span>{formatCurrency(p.value)}</span>
        </div>
      ))}
    </div>
  )
}

export default function TrendChart() {
  // Use last 12 months
  const data = MONTHLY_TOTALS.slice(-12)

  return (
    <div className="card" style={{ gridColumn: 'span 2', animation: 'fadeUp 0.5s 0.24s ease both' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 20 }}>
        <span style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--muted)', fontWeight: 500 }}>
          12-Month Trend
        </span>
        <span className="badge badge-neutral">Income vs Spend</span>
      </div>

      <ResponsiveContainer width="100%" height={180}>
        <AreaChart data={data} margin={{ top: 4, right: 4, left: -10, bottom: 0 }}>
          <defs>
            <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%"  stopColor="#52b788" stopOpacity={0.25}/>
              <stop offset="95%" stopColor="#52b788" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorSpend" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%"  stopColor="#c8400f" stopOpacity={0.2}/>
              <stop offset="95%" stopColor="#c8400f" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(13,13,13,0.07)" vertical={false}/>
          <XAxis
            dataKey="month"
            tick={{ fontFamily: 'DM Mono', fontSize: 9, fill: '#8a7f72' }}
            axisLine={false} tickLine={false}
          />
          <YAxis
            tick={{ fontFamily: 'DM Mono', fontSize: 9, fill: '#8a7f72' }}
            axisLine={false} tickLine={false}
            tickFormatter={(v) => `$${v/1000}k`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone" dataKey="income" name="Income"
            stroke="#52b788" strokeWidth={2}
            fill="url(#colorIncome)"
          />
          <Area
            type="monotone" dataKey="spend" name="Spend"
            stroke="#c8400f" strokeWidth={2}
            fill="url(#colorSpend)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
