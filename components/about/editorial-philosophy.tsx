import React from 'react'
import { Section, SectionHeader } from '@/components/ui/section'
import { Callout } from '@/components/ui/callout'

interface EditorialPhilosophyProps {
  title: string
  content: string
  highlights: string[]
}

export function EditorialPhilosophy({
  title,
  content,
  highlights,
}: EditorialPhilosophyProps) {
  return (
    <Section>
      <div className="max-w-3xl mx-auto">
        <SectionHeader title={title} />

        <div className="prose prose-invert max-w-none mb-8">
          <p className="text-body leading-relaxed text-muted-foreground mb-6">
            {content}
          </p>
        </div>

        {/* Highlights */}
        <div className="space-y-3">
          <h3 className="text-heading font-semibold mb-4">Key Principles</h3>
          {highlights.map((highlight, idx) => (
            <Callout key={idx} icon="✓" variant="highlight">
              {highlight}
            </Callout>
          ))}
        </div>
      </div>
    </Section>
  )
}
