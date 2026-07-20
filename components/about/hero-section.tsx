import React from 'react'
import Link from 'next/link'
import { Section, SectionHeader } from '@/components/ui/section'

interface HeroSectionProps {
  headline: string
  subheadline: string
  description: string
  ctaPrimary: { label: string; href: string }
  ctaSecondary: { label: string; href: string }
}

export function HeroSection({
  headline,
  subheadline,
  description,
  ctaPrimary,
  ctaSecondary,
}: HeroSectionProps) {
  return (
    <Section className="pt-20 pb-12 bg-gradient-to-b from-accent/5 to-transparent">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-accent font-semibold uppercase tracking-wide mb-2 text-body-small">
          {subheadline}
        </p>
        <h1 className="text-display font-bold mb-6 text-balance">
          {headline}
        </h1>
        <p className="text-body text-muted-foreground mb-8 text-balance max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={ctaPrimary.href}
            className="px-8 py-3 bg-accent text-background font-semibold rounded-lg hover:bg-accent/90 transition-colors text-center"
          >
            {ctaPrimary.label}
          </Link>
          <Link
            href={ctaSecondary.href}
            className="px-8 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent/5 transition-colors text-center"
          >
            {ctaSecondary.label}
          </Link>
        </div>
      </div>
    </Section>
  )
}
