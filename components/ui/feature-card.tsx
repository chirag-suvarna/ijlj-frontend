import React from 'react'
import Link from 'next/link'
import type { Feature } from '@/types/about'

interface FeatureCardProps extends Feature {
  variant?: 'default' | 'compact'
}

export function FeatureCard({
  title,
  description,
  icon,
  link,
  variant = 'default',
}: FeatureCardProps) {
  const content = (
    <div className="h-full flex flex-col">
      <div className={`${variant === 'compact' ? 'text-2xl' : 'text-3xl'} mb-3`}>
        {icon}
      </div>
      <h3 className={`${variant === 'compact' ? 'text-body' : 'text-heading'} font-semibold mb-2`}>
        {title}
      </h3>
      <p className="text-body-small text-muted-foreground flex-grow">
        {description}
      </p>
      {link && (
        <div className="mt-4">
          <span className="text-accent font-semibold text-sm hover:underline inline-flex items-center gap-1">
            {link.label}
            <span>→</span>
          </span>
        </div>
      )}
    </div>
  )

  return link ? (
    <Link
      href={link.href}
      className="bg-muted bg-opacity-30 border border-border rounded-lg p-6 hover:border-accent transition-all hover:shadow-lg"
    >
      {content}
    </Link>
  ) : (
    <div className="bg-muted bg-opacity-30 border border-border rounded-lg p-6">
      {content}
    </div>
  )
}
