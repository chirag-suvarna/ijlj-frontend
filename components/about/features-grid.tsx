import React from 'react'
import { Section, SectionHeader, SectionGrid } from '@/components/ui/section'
import { FeatureCard } from '@/components/ui/feature-card'
import type { Feature } from '@/types/about'

interface FeaturesGridProps {
  features: Feature[]
}

export function FeaturesGrid({ features }: FeaturesGridProps) {
  return (
    <Section variant="alt">
      <SectionHeader
        title="Why Choose IJLJ"
        description="Comprehensive features designed to support rigorous academic publishing and maximize research impact"
      />
      <SectionGrid cols={3} gap="lg">
        {features.map((feature, idx) => (
          <FeatureCard key={idx} {...feature} />
        ))}
      </SectionGrid>
    </Section>
  )
}
