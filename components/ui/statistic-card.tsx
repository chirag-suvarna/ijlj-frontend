'use client'

import React, { useEffect, useState } from 'react'
import type { StatItem } from '@/types/about'

interface StatisticCardProps extends StatItem {
  animated?: boolean
}

export function StatisticCard({
  value,
  label,
  suffix,
  animated = true,
}: StatisticCardProps) {
  const [displayValue, setDisplayValue] = useState(animated ? '0' : value)

  useEffect(() => {
    if (!animated) return

    // Extract numeric part
    const numericPart = value.replace(/[^0-9.]/g, '')
    const isDecimal = numericPart.includes('.')
    const numValue = parseFloat(numericPart)
    const prefix = value.match(/[^\d.]/)?.[0] ?? ''

    if (isNaN(numValue)) {
      setDisplayValue(value)
      return
    }

    let current = 0
    const increment = numValue / 50 // Animate over 50 frames
    const duration = 2000 // 2 seconds
    const frameTime = duration / 50

    const timer = setInterval(() => {
      current += increment
      if (current >= numValue) {
        setDisplayValue(value)
        clearInterval(timer)
      } else {
        const formatted = isDecimal
          ? current.toFixed(1)
          : Math.floor(current).toString()
        setDisplayValue(prefix + formatted)
      }
    }, frameTime)

    return () => clearInterval(timer)
  }, [value, animated])

  return (
    <div className="text-center py-8">
      <div className="text-display font-bold text-accent mb-2">
        {displayValue}
      </div>
      <p className="text-body font-semibold text-foreground">{label}</p>
      {suffix && (
        <p className="text-body-small text-muted-foreground mt-1">{suffix}</p>
      )}
    </div>
  )
}
