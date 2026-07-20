import React from 'react'
import { Section, SectionHeader, SectionGrid } from '@/components/ui/section'

interface AuthorBenefitsProps {
  title: string
  description: string
  benefits: Array<{
    title: string
    description: string
    icon: string
  }>
}

export function AuthorBenefits({
  title,
  description,
  benefits,
}: AuthorBenefitsProps) {
  return (
    <Section>
      <SectionHeader title={title} description={description} />
      <SectionGrid cols={3} gap="lg">
        {benefits.map((benefit, idx) => (
          <div
            key={idx}
            className="bg-muted bg-opacity-30 border border-border rounded-lg p-6 hover:border-accent transition-colors"
          >
            <div className="text-3xl mb-3">{benefit.icon}</div>
            <h3 className="text-heading font-semibold mb-2">{benefit.title}</h3>
            <p className="text-body-small text-muted-foreground">
              {benefit.description}
            </p>
          </div>
        ))}
      </SectionGrid>
    </Section>
  )
}
