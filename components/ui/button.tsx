import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'font-medium rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2'

  const variantStyles = {
    primary: 'bg-primary text-primary-foreground hover:opacity-90 focus-visible:outline-primary',
    secondary: 'bg-secondary text-secondary-foreground hover:opacity-90 focus-visible:outline-secondary',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground focus-visible:outline-primary',
    ghost: 'text-primary hover:bg-primary hover:bg-opacity-10 focus-visible:outline-primary',
  }

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2.5 text-base',
    lg: 'px-6 py-3.5 text-lg',
  }

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
