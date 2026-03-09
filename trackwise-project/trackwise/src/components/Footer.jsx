// =============================================
// TrackWise — Footer Component
// =============================================
import React from 'react'

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '22px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 12,
    }}>
      <div style={{
        fontFamily: 'var(--font-syne)',
        fontWeight: 800, fontSize: 15,
        color: 'var(--ink)',
      }}>
        Track<span style={{ color: 'var(--accent)' }}>Wise</span>
      </div>

      <div style={{ fontSize: 10, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
        Last synced: Mar 6, 2026 · 14:32
      </div>

      <div style={{ fontSize: 10, color: 'var(--muted)' }}>
        Relational Expense Analytics · v1.0.0
      </div>
    </footer>
  )
}
