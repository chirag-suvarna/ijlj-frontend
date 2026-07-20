import React from 'react'
import { Section, SectionHeader, SectionGrid } from '@/components/ui/section'
import { StatisticCard } from '@/components/ui/statistic-card'
import type { StatItem } from '@/types/about'

interface StatisticsSectionProps {
  statistics: StatItem[]
}

export function StatisticsSection({ statistics }: StatisticsSectionProps) {
  return (
    <Section variant="alt">
      <SectionHeader
        title="Our Impact by Numbers"
        description="Global reach and scholarly influence at a glance"
      />
      <SectionGrid cols={3} gap="lg">
        {statistics.map((stat, idx) => (
          <StatisticCard key={idx} {...stat} animated />
        ))}
      </SectionGrid>
    </Section>
  )
}
