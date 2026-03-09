// =============================================
// TrackWise — InsightsPanel Component
// =============================================
import React, { useState } from 'react'
import { INSIGHTS } from '../data/mockData'

const TYPE_STYLES = {
  warning:     { bg: 'rgba(200,64,15,0.07)',  border: 'rgba(200,64,15,0.2)'  },
  positive:    { bg: 'rgba(45,106,79,0.07)',  border: 'rgba(45,106,79,0.2)'  },
  opportunity: { bg: 'rgba(42,74,94,0.07)',   border: 'rgba(42,74,94,0.2)'   },
  info:        { bg: 'rgba(212,160,23,0.07)', border: 'rgba(212,160,23,0.2)' },
}

export default function InsightsPanel() {
  const [dismissed, setDismissed] = useState([])
  const visible = INSIGHTS.filter((ins) => !dismissed.includes(ins.id))

  return (
    <div className="card" style={{ gridColumn: 'span 2', animation: 'fadeUp 0.5s 0.54s ease both' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 20 }}>
        <span style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--muted)', fontWeight: 500 }}>
          AI Insights
        </span>
        <span className="badge badge-down">{visible.length} New</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        {visible.map((ins) => {
          const style = TYPE_STYLES[ins.type] || TYPE_STYLES.info
          return (
            <div key={ins.id} style={{
              background: style.bg,
              border: `1px solid ${style.border}`,
              borderRadius: 6, padding: 16,
              position: 'relative',
              transition: 'opacity 0.2s',
            }}>
              {/* Dismiss */}
              <button
                onClick={() => setDismissed((d) => [...d, ins.id])}
                style={{
                  position: 'absolute', top: 8, right: 10,
                  background: 'none', border: 'none',
                  fontSize: 14, color: 'var(--muted)',
                  cursor: 'pointer', lineHeight: 1,
                  padding: 0,
                }}
              >×</button>

              <div style={{ fontSize: 20, marginBottom: 8 }}>{ins.icon}</div>
              <div style={{ fontSize: 11, fontWeight: 600, marginBottom: 4, color: 'var(--ink)' }}>
                {ins.title}
              </div>
              <div style={{ fontSize: 11, color: 'var(--ink)', lineHeight: 1.65, opacity: 0.75 }}>
                {ins.text}
              </div>
            </div>
          )
        })}

        {visible.length === 0 && (
          <div style={{
            gridColumn: 'span 2', textAlign: 'center',
            padding: '30px 0', color: 'var(--muted)', fontSize: 12,
          }}>
            All insights dismissed ✓
          </div>
        )}
      </div>
    </div>
  )
}
