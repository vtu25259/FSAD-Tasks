// =============================================
// TrackWise — DailyHeatmap Component
// =============================================
import React, { useState } from 'react'
import { DAILY_SPEND_FEB } from '../data/mockData'
import { heatmapColor, formatCurrency } from '../utils/helpers'

const DAY_LABELS = ['S','M','T','W','T','F','S']
const MAX_SPEND  = Math.max(...DAILY_SPEND_FEB)

export default function DailyHeatmap() {
  const [tooltip, setTooltip] = useState(null)

  return (
    <div className="card" style={{ animation: 'fadeUp 0.5s 0.36s ease both' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 20 }}>
        <span style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--muted)', fontWeight: 500 }}>
          Daily Activity
        </span>
        <span className="badge badge-neutral">Feb 2026</span>
      </div>

      {/* Day headers */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 3, marginBottom: 3 }}>
        {DAY_LABELS.map((d, i) => (
          <div key={i} style={{
            textAlign: 'center', fontSize: 8, color: 'var(--muted)',
            textTransform: 'uppercase', letterSpacing: '0.5px',
          }}>
            {d}
          </div>
        ))}
      </div>

      {/* Grid */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 3,
        position: 'relative',
      }}>
        {DAILY_SPEND_FEB.map((spend, i) => {
          const day = i + 1
          const color = heatmapColor(spend, MAX_SPEND)
          const isTooltipVisible = tooltip === i

          return (
            <div key={i} style={{ position: 'relative' }}>
              <div
                onMouseEnter={() => setTooltip(i)}
                onMouseLeave={() => setTooltip(null)}
                style={{
                  height: 18, borderRadius: 3,
                  background: color,
                  cursor: 'pointer',
                  transform: isTooltipVisible ? 'scale(1.25)' : 'scale(1)',
                  transition: 'transform 0.15s ease',
                }}
              />
              {isTooltipVisible && (
                <div style={{
                  position: 'absolute', bottom: '100%', left: '50%',
                  transform: 'translateX(-50%) translateY(-4px)',
                  background: 'var(--ink)', color: 'var(--paper)',
                  fontSize: 10, padding: '4px 8px', borderRadius: 4,
                  whiteSpace: 'nowrap', zIndex: 10,
                  fontFamily: 'var(--font-mono)',
                  pointerEvents: 'none',
                }}>
                  Feb {day}: {spend === 0 ? 'No spend' : formatCurrency(spend)}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Legend */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 6,
        marginTop: 12, fontSize: 9, color: 'var(--muted)',
        textTransform: 'uppercase', letterSpacing: '1px',
      }}>
        <span>Less</span>
        {['#e8ede8','#a3c4a8','#52b788','#c8400f','#8b1a00'].map((c, i) => (
          <div key={i} style={{ width: 10, height: 10, borderRadius: 2, background: c }}/>
        ))}
        <span>More</span>
      </div>
    </div>
  )
}
