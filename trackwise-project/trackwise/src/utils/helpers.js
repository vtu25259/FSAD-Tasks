// =============================================
// TrackWise — Utility Functions
// =============================================

/**
 * Format a number as USD currency
 */
export function formatCurrency(value, compact = false) {
  if (compact && Math.abs(value) >= 1000) {
    return `$${(value / 1000).toFixed(1)}k`
  }
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: value % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(value)
}

/**
 * Format a date string to a readable label
 */
export function formatDate(dateStr, style = 'short') {
  const date = new Date(dateStr)
  if (style === 'short') {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  }
  if (style === 'full') {
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
  }
  if (style === 'month') {
    return date.toLocaleDateString('en-US', { month: 'short', year: '2-digit' })
  }
  return dateStr
}

/**
 * Calculate percentage change between two values
 */
export function pctChange(current, previous) {
  if (!previous || previous === 0) return 0
  return ((current - previous) / Math.abs(previous)) * 100
}

/**
 * Clamp a value between min and max
 */
export function clamp(val, min, max) {
  return Math.min(Math.max(val, min), max)
}

/**
 * Returns a color for a spend ratio (0..1+)
 */
export function budgetColor(ratio) {
  if (ratio >= 1)   return '#c8400f'
  if (ratio >= 0.8) return '#d4a017'
  return '#52b788'
}

/**
 * Group an array by a key
 */
export function groupBy(arr, key) {
  return arr.reduce((acc, item) => {
    const k = typeof key === 'function' ? key(item) : item[key]
    if (!acc[k]) acc[k] = []
    acc[k].push(item)
    return acc
  }, {})
}

/**
 * Sum an array of numbers (or objects by key)
 */
export function sumBy(arr, key) {
  return arr.reduce((sum, item) => {
    const v = typeof key === 'function' ? key(item) : item[key]
    return sum + (v || 0)
  }, 0)
}

/**
 * Generate staggered animation delay string
 */
export function staggerDelay(index, base = 50) {
  return `${index * base}ms`
}

/**
 * Truncate a string
 */
export function truncate(str, maxLen = 30) {
  return str.length > maxLen ? str.slice(0, maxLen) + '…' : str
}

/**
 * Get heatmap color for a spend value
 */
export function heatmapColor(value, max) {
  const ratio = value / max
  if (ratio === 0)    return '#e8ede8'
  if (ratio < 0.25)   return '#a3c4a8'
  if (ratio < 0.5)    return '#52b788'
  if (ratio < 0.75)   return '#c8400f'
  return '#8b1a00'
}

/**
 * Get all unique months from transactions
 */
export function getMonths(transactions) {
  const months = new Set(transactions.map((tx) => tx.date.slice(0, 7)))
  return [...months].sort().reverse()
}
