import React from 'react'
import Link from 'next/link'
import type { IndexingPlatform } from '@/types/about'

interface BadgeGridProps {
  platforms: IndexingPlatform[]
  cols?: 2 | 3 | 4 | 6
}

export function BadgeGrid({ platforms, cols = 3 }: BadgeGridProps) {
  const colStyles = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    6: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6',
  }

  return (
    <div className={`grid ${colStyles[cols]} gap-6`}>
      {platforms.map((platform) => (
        <Link
          key={platform.name}
          href={platform.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-6 bg-muted bg-opacity-30 border border-border rounded-lg hover:border-accent hover:shadow-lg transition-all group"
        >
          <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
            {platform.logo}
          </div>
          <h3 className="text-body-small font-semibold text-center mb-1 group-hover:text-accent transition-colors">
            {platform.name}
          </h3>
          {platform.badge && (
            <span className="text-xs font-semibold text-accent bg-accent/10 px-2 py-1 rounded">
              {platform.badge}
            </span>
          )}
        </Link>
      ))}
    </div>
  )
}
