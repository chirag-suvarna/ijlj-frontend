import React from 'react'
import { Section, SectionHeader, SectionGrid } from '@/components/ui/section'
import type { EthicsCard } from '@/types/about'

interface EthicsSectionProps {
  title: string
  description: string
  cards: EthicsCard[]
}

export function EthicsSection({
  title,
  description,
  cards,
}: EthicsSectionProps) {
  return (
    <Section variant="alt">
      <SectionHeader title={title} description={description} />
      <SectionGrid cols={3} gap="lg">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-muted bg-opacity-30 border border-border rounded-lg p-6"
          >
            <div className="text-3xl mb-3">{card.icon}</div>
            <h3 className="text-heading font-semibold mb-2">{card.title}</h3>
            <p className="text-body-small text-muted-foreground">
              {card.description}
            </p>
          </div>
        ))}
      </SectionGrid>
    </Section>
  )
}
