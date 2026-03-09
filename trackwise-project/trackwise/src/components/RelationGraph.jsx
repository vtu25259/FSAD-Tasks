// =============================================
// TrackWise — RelationGraph Component
// D3-style SVG network of expense relationships
// =============================================
import React, { useState } from 'react'
import { CATEGORY_SPEND, CATEGORIES, RELATIONS } from '../data/mockData'
import { formatCurrency } from '../utils/helpers'

// Static layout positions
const POSITIONS = {
  housing:       { x: 120, y: 60  },
  food:          { x: 440, y: 65  },
  transport:     { x: 95,  y: 195 },
  shopping:      { x: 460, y: 195 },
  entertainment: { x: 200, y: 230 },
  health:        { x: 360, y: 230 },
  subscriptions: { x: 280, y: 20  },
  utilities:     { x: 280, y: 240 },
}
const CENTER = { x: 280, y: 130 }
const TOTAL  = CATEGORY_SPEND.reduce((s, c) => s + c.amount, 0)

function nodeRadius(amount) {
  return Math.max(12, Math.min(32, (amount / TOTAL) * 180))
}

export default function RelationGraph() {
  const [hovered, setHovered] = useState(null)

  const nodes = CATEGORY_SPEND.map((s) => ({
    ...s,
    cat: CATEGORIES.find((c) => c.id === s.id),
    pos: POSITIONS[s.id] || CENTER,
    r: nodeRadius(s.amount),
  }))

  return (
    <div className="card" style={{ gridColumn: 'span 2', animation: 'fadeUp 0.5s 0.3s ease both' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 12 }}>
        <span style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--muted)', fontWeight: 500 }}>
          Expense Relationship Network
        </span>
        <span className="badge badge-neutral">
          <span style={{
            display: 'inline-block', width: 6, height: 6, borderRadius: '50%',
            background: '#52b788', marginRight: 5,
            animation: 'pulse-ring 2s ease-out infinite',
          }}/>
          Live
        </span>
      </div>

      <svg viewBox="0 0 560 270" style={{ width: '100%', height: 270 }}>
        {/* Relation edges */}
        {RELATIONS.map((rel, i) => {
          const src = POSITIONS[rel.source]
          const tgt = POSITIONS[rel.target]
          if (!src || !tgt) return null
          const isHighlighted = hovered === rel.source || hovered === rel.target
          return (
            <line key={i}
              x1={src.x} y1={src.y} x2={tgt.x} y2={tgt.y}
              stroke={isHighlighted ? 'var(--accent)' : 'var(--border-strong)'}
              strokeWidth={isHighlighted ? 1.5 : 0.8}
              opacity={isHighlighted ? 0.7 : 0.35}
              style={{ transition: 'all 0.2s' }}
            />
          )
        })}

        {/* Center-to-node spokes */}
        {nodes.map((n) => {
          const isHighlighted = hovered === n.id
          return (
            <line key={n.id}
              x1={CENTER.x} y1={CENTER.y}
              x2={n.pos.x}  y2={n.pos.y}
              stroke={isHighlighted ? 'var(--accent)' : 'var(--border)'}
              strokeWidth={isHighlighted ? 1.5 : 0.6}
              opacity={isHighlighted ? 0.8 : 0.4}
              style={{ transition: 'all 0.2s' }}
            />
          )
        })}

        {/* Animated pulse on center */}
        <circle cx={CENTER.x} cy={CENTER.y} r="36" fill="none" stroke="var(--ink)" strokeWidth="0.5" opacity="0.2">
          <animate attributeName="r" values="32;46;32" dur="3s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.25;0;0.25" dur="3s" repeatCount="indefinite"/>
        </circle>

        {/* Center node */}
        <circle cx={CENTER.x} cy={CENTER.y} r="32" fill="var(--ink)"/>
        <text x={CENTER.x} y={CENTER.y - 7} textAnchor="middle"
          fontFamily="DM Mono" fontSize="7" fill="rgba(245,241,234,0.6)" letterSpacing="1">
          TOTAL
        </text>
        <text x={CENTER.x} y={CENTER.y + 9} textAnchor="middle"
          fontFamily="DM Serif Display" fontSize="13" fill="var(--paper)">
          {formatCurrency(TOTAL)}
        </text>

        {/* Category nodes */}
        {nodes.map((n) => {
          const isActive = hovered === n.id
          return (
            <g key={n.id}
              onMouseEnter={() => setHovered(n.id)}
              onMouseLeave={() => setHovered(null)}
              style={{ cursor: 'pointer' }}>
              <circle
                cx={n.pos.x} cy={n.pos.y} r={isActive ? n.r + 3 : n.r}
                fill={n.cat?.color || '#999'}
                opacity={hovered && !isActive ? 0.45 : 0.92}
                style={{ transition: 'all 0.2s ease' }}
              />
              <text x={n.pos.x} y={n.pos.y - 4} textAnchor="middle"
                fontFamily="DM Mono" fontSize="6" fill="rgba(245,241,234,0.8)" letterSpacing="0.3">
                {n.cat?.label?.slice(0,7).toUpperCase()}
              </text>
              <text x={n.pos.x} y={n.pos.y + 8} textAnchor="middle"
                fontFamily="DM Serif Display" fontSize="9" fill="var(--paper)">
                {formatCurrency(n.amount, true)}
              </text>
            </g>
          )
        })}
      </svg>

      <p style={{ fontSize: 10, color: 'var(--muted)', marginTop: 6 }}>
        Node size reflects proportional spend. Lines show co-occurrence patterns between categories.
      </p>
    </div>
  )
}
