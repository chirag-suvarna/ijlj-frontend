import React from 'react'
import { Section, SectionHeader, SectionGrid } from '@/components/ui/section'
import { StatisticCard } from '@/components/ui/statistic-card'

interface GlobalReachProps {
  title: string
  description: string
  stats: Array<{
    value: string
    label: string
  }>
}

export function GlobalReach({ title, description, stats }: GlobalReachProps) {
  return (
    <Section variant="alt">
      <SectionHeader title={title} description={description} />
      <SectionGrid cols={3} gap="lg">
        {stats.map((stat, idx) => (
          <StatisticCard
            key={idx}
            value={stat.value}
            label={stat.label}
            animated={false}
          />
        ))}
      </SectionGrid>
    </Section>
  )
}
