'use client'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

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
    <section className="relative w-full min-h-screen flex items-center justify-center px-4 pt-20 pb-16">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary opacity-5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent opacity-5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="mb-6 flex justify-center">
          <Badge variant="muted" size="md">
            ⚖️ Premier Legal Journal
          </Badge>
        </div>

        {/* Main headline */}
        <h1 className="text-display font-bold mb-4 leading-tight text-foreground">
          {headline}
        </h1>

        {/* Subheadline */}
        <p className="text-subheading text-muted-foreground mb-6 font-medium">
          {subheadline}
        </p>

        {/* Description */}
        <p className="text-body text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          {description}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="primary"
            size="lg"
            className="sm:px-8"
            onClick={() => (window.location.href = ctaPrimary.href)}
          >
            {ctaPrimary.label}
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="sm:px-8"
            onClick={() => (window.location.href = ctaSecondary.href)}
          >
            {ctaSecondary.label}
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 pt-16 border-t border-border">
          <p className="text-body-small text-muted-foreground mb-4">
            Trusted by leading institutions worldwide
          </p>
          <div className="flex flex-wrap gap-8 justify-center items-center opacity-60">
            <span className="font-semibold text-muted-foreground">Oxford University</span>
            <span className="font-semibold text-muted-foreground">Harvard Law</span>
            <span className="font-semibold text-muted-foreground">Cambridge</span>
            <span className="font-semibold text-muted-foreground">Yale Law</span>
          </div>
        </div>
      </div>
    </section>
  )
}
