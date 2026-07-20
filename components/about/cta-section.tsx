import React from 'react'
import Link from 'next/link'
import { Section } from '@/components/ui/section'

interface CTASectionProps {
  headline: string
  description: string
  buttonLabel: string
  buttonHref: string
}

export function CTASection({
  headline,
  description,
  buttonLabel,
  buttonHref,
}: CTASectionProps) {
  return (
    <Section className="bg-gradient-to-r from-accent/10 to-accent/5 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-title font-bold mb-4 text-balance">{headline}</h2>
        <p className="text-body text-muted-foreground mb-8 text-balance">
          {description}
        </p>
        <Link
          href={buttonHref}
          className="inline-block px-8 py-3 bg-accent text-background font-semibold rounded-lg hover:bg-accent/90 transition-colors"
        >
          {buttonLabel}
        </Link>
      </div>
    </Section>
  )
}
