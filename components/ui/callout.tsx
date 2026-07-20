import React from 'react'

interface CalloutProps {
  children: React.ReactNode
  variant?: 'default' | 'highlight' | 'success' | 'warning'
  icon?: string
  title?: string
}

export function Callout({
  children,
  variant = 'default',
  icon,
  title,
}: CalloutProps) {
  const variantStyles = {
    default: 'bg-muted/30 border-l-4 border-accent',
    highlight: 'bg-accent/5 border-l-4 border-accent',
    success: 'bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500',
    warning: 'bg-yellow-50 dark:bg-yellow-950/20 border-l-4 border-yellow-500',
  }

  return (
    <div className={`${variantStyles[variant]} rounded p-6`}>
      {(icon || title) && (
        <div className="flex items-start gap-3 mb-3">
          {icon && <span className="text-xl flex-shrink-0">{icon}</span>}
          {title && (
            <h3 className="font-semibold text-body text-foreground">{title}</h3>
          )}
        </div>
      )}
      <div className="text-body-small text-muted-foreground leading-relaxed">
        {children}
      </div>
    </div>
  )
}
