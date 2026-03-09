// =============================================
// TrackWise — CategoryDonut Component
// =============================================
import React, { useState } from 'react'
import { CATEGORY_SPEND, CATEGORIES } from '../data/mockData'
import { formatCurrency } from '../utils/helpers'

function DonutSlice({ cx, cy, r, startAngle, endAngle, color, isActive, onClick }) {
  const toRad = (deg) => (deg * Math.PI) / 180
  const start = toRad(startAngle - 90)
  const end   = toRad(endAngle - 90)
  const x1 = cx + r * Math.cos(start)
  const y1 = cy + r * Math.sin(start)
  const x2 = cx + r * Math.cos(end)
  const y2 = cy + r * Math.sin(end)
  const largeArc = endAngle - startAngle > 180 ? 1 : 0
  const strokeWidth = isActive ? 20 : 15
  const rAdj = isActive ? r + 2 : r

  const circumference = 2 * Math.PI * rAdj
  const arcLength = ((endAngle - startAngle) / 360) * circumference - 2
  const dashOffset = 0

  return (
    <circle
      cx={cx} cy={cy} r={rAdj}
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeDasharray={`${arcLength} ${circumference}`}
      strokeDashoffset={-((startAngle / 360) * circumference)}
      transform={`rotate(-90 ${cx} ${cy})`}
      style={{ cursor: 'pointer', transition: 'all 0.2s ease' }}
      onClick={onClick}
      opacity={isActive ? 1 : 0.85}
    />
  )
}

export default function CategoryDonut() {
  const [activeId, setActiveId] = useState(null)
  const total = CATEGORY_SPEND.reduce((s, c) => s + c.amount, 0)

  let currentAngle = 0
  const slices = CATEGORY_SPEND.map((s) => {
    const cat = CATEGORIES.find((c) => c.id === s.id)
    const angle = (s.amount / total) * 360
    const slice = { ...s, cat, startAngle: currentAngle, endAngle: currentAngle + angle }
    currentAngle += angle
    return slice
  })

  const active = slices.find((s) => s.id === activeId) || null

  return (
    <div className="card" style={{ animation: 'fadeUp 0.5s 0.18s ease both' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 20 }}>
        <span style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--muted)', fontWeight: 500 }}>
          Spend by Category
        </span>
        <span className="badge badge-neutral">8 Active</span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
        {/* SVG Donut */}
        <svg width="130" height="130" viewBox="0 0 130 130" style={{ flexShrink: 0 }}>
          <circle cx="65" cy="65" r="42" fill="none" stroke="var(--cream)" strokeWidth="15"/>
          {slices.map((s) => (
            <DonutSlice
              key={s.id} cx={65} cy={65} r={42}
              startAngle={s.startAngle} endAngle={s.endAngle}
              color={s.cat?.color || '#999'}
              isActive={activeId === s.id}
              onClick={() => setActiveId(activeId === s.id ? null : s.id)}
            />
          ))}
          {/* Center text */}
          {active ? (
            <>
              <text x="65" y="61" textAnchor="middle" fontFamily="DM Serif Display" fontSize="13" fill="var(--ink)">
                {formatCurrency(active.amount)}
              </text>
              <text x="65" y="75" textAnchor="middle" fontFamily="DM Mono" fontSize="7" fill="var(--muted)" letterSpacing="0.5">
                {active.cat?.label?.toUpperCase().slice(0,8)}
              </text>
            </>
          ) : (
            <>
              <text x="65" y="61" textAnchor="middle" fontFamily="DM Serif Display" fontSize="14" fill="var(--ink)">
                {formatCurrency(total)}
              </text>
              <text x="65" y="75" textAnchor="middle" fontFamily="DM Mono" fontSize="7" fill="var(--muted)" letterSpacing="0.5">
                THIS MONTH
              </text>
            </>
          )}
        </svg>

        {/* Legend */}
        <div style={{ flex: 1 }}>
          {slices.map((s) => (
            <div
              key={s.id}
              onClick={() => setActiveId(activeId === s.id ? null : s.id)}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '5px 0',
                borderBottom: '1px solid var(--border)',
                cursor: 'pointer',
                opacity: activeId && activeId !== s.id ? 0.45 : 1,
                transition: 'opacity 0.15s',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                <span style={{
                  width: 8, height: 8, borderRadius: 2,
                  background: s.cat?.color, flexShrink: 0,
                  display: 'inline-block',
                }}/>
                <span style={{ fontSize: 11, color: 'var(--ink)' }}>{s.cat?.label}</span>
              </div>
              <span style={{ fontSize: 10, color: 'var(--muted)' }}>
                {formatCurrency(s.amount)} · {Math.round((s.amount / total) * 100)}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
