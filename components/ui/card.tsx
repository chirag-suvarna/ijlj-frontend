import React from 'react'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  variant?: 'default' | 'elevated' | 'outline'
}

export function Card({ children, variant = 'default', className = '', ...props }: CardProps) {
  const variantStyles: Record<string, string> = {
    default: 'bg-background border border-border shadow-card hover:shadow-card-hover',
    elevated: 'bg-background border border-border shadow-elevated',
    outline: 'bg-background border-2 border-border',
  }

  const { key, ...rest } = props as any

  return (
    <div
      className={`rounded-lg p-component ${variantStyles[variant]} transition-shadow duration-200 ${className}`}
      {...rest}
    >
      {children}
    </div>
  )
}

export function CardHeader({ children, className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`pb-component border-b border-border ${className}`} {...props}>
      {children}
    </div>
  )
}

export function CardTitle({ children, className = '', ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={`text-heading font-semibold ${className}`} {...props}>
      {children}
    </h3>
  )
}

export function CardDescription({ children, className = '', ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={`text-body-small text-muted-foreground ${className}`} {...props}>
      {children}
    </p>
  )
}

export function CardContent({ children, className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`pt-component ${className}`} {...props}>
      {children}
    </div>
  )
}

export function CardFooter({ children, className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`pt-component border-t border-border flex gap-2 ${className}`} {...props}>
      {children}
    </div>
  )
}
