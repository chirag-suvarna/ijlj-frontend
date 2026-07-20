import React from 'react'

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'muted'
  size?: 'sm' | 'md'
  children: React.ReactNode
}

export function Badge({ variant = 'primary', size = 'sm', className = '', children, ...props }: BadgeProps) {
  const variantStyles = {
    primary: 'bg-primary text-primary-foreground',
    secondary: 'bg-secondary text-secondary-foreground',
    accent: 'bg-accent text-accent-foreground',
    muted: 'bg-muted text-muted-foreground',
  }

  const sizeStyles = {
    sm: 'px-2 py-1 text-caption rounded',
    md: 'px-3 py-1.5 text-body-small rounded-md',
  }

  return (
    <span
      className={`inline-block font-medium ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </span>
  )
}
