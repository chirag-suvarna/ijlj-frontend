'use client'

import { useState } from 'react'
import { Section } from '@/components/ui/section'
import { Button } from '@/components/ui/button'

interface NewsletterSectionProps {
  title: string
  description: string
  placeholder: string
  buttonLabel: string
}

export function NewsletterSection({
  title,
  description,
  placeholder,
  buttonLabel,
}: NewsletterSectionProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      // Simulate API call - replace with actual endpoint
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setStatus('success')
      setEmail('')
      setTimeout(() => setStatus('idle'), 3000)
    } catch (error) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  return (
    <Section variant="alt">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-title font-bold mb-3">{title}</h2>
        <p className="text-body text-muted-foreground mb-8">
          {description}
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholder}
            required
            className="flex-1 px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            aria-label="Email address for newsletter"
          />
          <Button
            variant="primary"
            size="md"
            type="submit"
            disabled={status === 'loading'}
            className="px-6"
          >
            {status === 'loading' ? 'Subscribing...' : buttonLabel}
          </Button>
        </form>

        {status === 'success' && (
          <p className="text-body-small text-secondary mt-4">
            ✓ Thank you! Check your email to confirm your subscription.
          </p>
        )}
        {status === 'error' && (
          <p className="text-body-small text-accent mt-4">
            Something went wrong. Please try again.
          </p>
        )}

        <p className="text-body-small text-muted-foreground mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </Section>
  )
}
