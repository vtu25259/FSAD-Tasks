// =============================================
// TrackWise — Navbar Component
// =============================================
import React, { useState, useEffect } from 'react'
import { useStore } from '../store/useStore'

const NAV_LINKS = [
  { id: 'overview',  label: 'Overview'  },
  { id: 'analytics', label: 'Analytics' },
  { id: 'relations', label: 'Relations' },
  { id: 'budget',    label: 'Budget'    },
  { id: 'transactions', label: 'Transactions' },
]

export default function Navbar() {
  const { activeView, setActiveView } = useStore()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 40px', height: 64,
      background: scrolled ? 'rgba(245,241,234,0.92)' : 'rgba(245,241,234,0.8)',
      backdropFilter: 'blur(14px)',
      borderBottom: `1px solid ${scrolled ? 'rgba(13,13,13,0.15)' : 'transparent'}`,
      transition: 'all 0.3s ease',
    }}>
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{
          width: 30, height: 30, background: 'var(--ink)',
          borderRadius: 7, display: 'grid', placeItems: 'center',
        }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <polyline points="2,12 6,7 9,10 14,3" stroke="#f5f1ea" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="14" cy="3" r="1.5" fill="#c8400f"/>
          </svg>
        </div>
        <span style={{
          fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: 18,
          letterSpacing: '-0.5px', color: 'var(--ink)',
        }}>
          Track<span style={{ color: 'var(--accent)' }}>Wise</span>
        </span>
      </div>

      {/* Nav links */}
      <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
        {NAV_LINKS.map((link) => (
          <button
            key={link.id}
            onClick={() => setActiveView(link.id)}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11, fontWeight: 500,
              textTransform: 'uppercase', letterSpacing: '1.5px',
              padding: '6px 14px', border: 'none',
              background: activeView === link.id ? 'var(--ink)' : 'transparent',
              color: activeView === link.id ? 'var(--paper)' : 'var(--muted)',
              borderRadius: 4,
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
            onMouseEnter={(e) => {
              if (activeView !== link.id) e.target.style.color = 'var(--ink)'
            }}
            onMouseLeave={(e) => {
              if (activeView !== link.id) e.target.style.color = 'var(--muted)'
            }}
          >
            {link.label}
          </button>
        ))}
      </div>

      {/* CTA */}
      <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
        <button className="btn btn-ghost" style={{ fontSize: 10 }}>
          ⟳ Sync
        </button>
        <button className="btn btn-primary" style={{ fontSize: 10 }}>
          Export ↗
        </button>
      </div>
    </nav>
  )
}
