import { Section, SectionGrid } from '@/components/ui/section'

interface StatProps {
  label: string
  value: string
}

interface StatsSectionProps {
  stats: StatProps[]
}

export function StatsSection({ stats }: StatsSectionProps) {
  return (
    <Section variant="alt">
      <SectionGrid cols={2} gap="lg" className="lg:grid-cols-4">
        {stats.map((stat, index) => (
          <div key={index} className="text-center py-4">
            <div className="text-4xl font-bold text-primary mb-2">
              {stat.value}
            </div>
            <p className="text-body text-muted-foreground">
              {stat.label}
            </p>
          </div>
        ))}
      </SectionGrid>
    </Section>
  )
}
