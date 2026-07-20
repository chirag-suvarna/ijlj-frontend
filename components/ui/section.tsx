import React from 'react'

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  variant?: 'default' | 'alt'
  fullWidth?: boolean
  noPadding?: boolean
}

export function Section({
  children,
  variant = 'default',
  fullWidth = false,
  noPadding = false,
  className = '',
  ...props
}: SectionProps) {
  const variantStyles = {
    default: 'bg-background',
    alt: 'bg-muted bg-opacity-30',
  }

  return (
    <section
      className={`${fullWidth ? 'w-full' : 'w-full'} ${!noPadding ? 'py-section px-4' : ''} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      <div className={fullWidth ? '' : 'max-w-7xl mx-auto'}>
        {children}
      </div>
    </section>
  )
}

interface SectionHeaderProps {
  title: string
  description?: string
  subtitle?: string
  children?: React.ReactNode
  className?: string
}

export function SectionHeader({
  title,
  description,
  subtitle,
  children,
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 text-center ${className}`}>
      {subtitle && (
        <p className="text-body-small text-accent font-semibold uppercase tracking-wide mb-2">
          {subtitle}
        </p>
      )}
      <h2 className="text-title font-bold mb-3">{title}</h2>
      {description && (
        <p className="text-body text-muted-foreground max-w-2xl mx-auto">{description}</p>
      )}
      {children}
    </div>
  )
}

interface SectionGridProps {
  children: React.ReactNode
  cols?: 1 | 2 | 3 | 4
  gap?: 'sm' | 'md' | 'lg'
  className?: string
}

export function SectionGrid({
  children,
  cols = 3,
  gap = 'lg',
  className = '',
}: SectionGridProps) {
  const colStyles = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  }

  const gapStyles = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
  }

  return (
    <div className={`grid ${colStyles[cols]} ${gapStyles[gap]} ${className}`}>
      {children}
    </div>
  )
}
