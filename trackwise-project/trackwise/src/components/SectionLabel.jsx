// =============================================
// TrackWise — SectionLabel Component
// =============================================
import React from 'react'

export default function SectionLabel({ label }) {
  return (
    <div style={{
      gridColumn: 'span 3',
      display: 'flex', alignItems: 'center', gap: 16,
      paddingTop: 12,
    }}>
      <span style={{
        fontSize: 10, textTransform: 'uppercase',
        letterSpacing: '2px', color: 'var(--muted)',
        whiteSpace: 'nowrap', fontFamily: 'var(--font-mono)',
      }}>
        {label}
      </span>
      <div style={{ flex: 1, height: 1, background: 'var(--border)' }}/>
    </div>
  )
}
