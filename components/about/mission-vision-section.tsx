import React from 'react'
import { Section, SectionGrid } from '@/components/ui/section'
import { Callout } from '@/components/ui/callout'

interface MissionVisionSectionProps {
  mission: string
  vision: string
  values: Array<{
    title: string
    description: string
    icon: string
  }>
}

export function MissionVisionSection({
  mission,
  vision,
  values,
}: MissionVisionSectionProps) {
  return (
    <Section>
      <div className="max-w-5xl mx-auto">
        {/* Mission and Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Callout icon="🎯" title="Our Mission">
            {mission}
          </Callout>
          <Callout icon="🚀" title="Our Vision">
            {vision}
          </Callout>
        </div>

        {/* Values */}
        <div className="mb-4">
          <h3 className="text-title font-bold text-center mb-8">Our Values</h3>
          <SectionGrid cols={4} gap="md">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="bg-muted bg-opacity-30 border border-border rounded-lg p-6 text-center"
              >
                <div className="text-3xl mb-3">{value.icon}</div>
                <h4 className="text-heading font-semibold mb-2">{value.title}</h4>
                <p className="text-body-small text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </SectionGrid>
        </div>
      </div>
    </Section>
  )
}
