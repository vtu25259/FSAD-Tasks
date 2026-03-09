// =============================================
// TrackWise — useAnimatedValue Hook
// Animates a numeric value from 0 to target
// =============================================
import { useState, useEffect, useRef } from 'react'

export function useAnimatedValue(target, duration = 1200, delay = 0) {
  const [value, setValue] = useState(0)
  const frameRef = useRef(null)

  useEffect(() => {
    const timeout = setTimeout(() => {
      const startTime = performance.now()

      function easeOutCubic(t) {
        return 1 - Math.pow(1 - t, 3)
      }

      function tick(now) {
        const elapsed = now - startTime
        const progress = Math.min(elapsed / duration, 1)
        setValue(target * easeOutCubic(progress))
        if (progress < 1) {
          frameRef.current = requestAnimationFrame(tick)
        }
      }

      frameRef.current = requestAnimationFrame(tick)
    }, delay)

    return () => {
      clearTimeout(timeout)
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [target, duration, delay])

  return value
}
