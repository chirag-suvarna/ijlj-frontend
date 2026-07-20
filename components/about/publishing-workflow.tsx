import React from 'react'
import { Section, SectionHeader } from '@/components/ui/section'
import { Timeline } from '@/components/ui/timeline'
import type { WorkflowStep } from '@/types/about'

interface PublishingWorkflowProps {
  title: string
  description: string
  steps: WorkflowStep[]
}

export function PublishingWorkflow({
  title,
  description,
  steps,
}: PublishingWorkflowProps) {
  return (
    <Section>
      <SectionHeader title={title} description={description} />
      <div className="max-w-3xl mx-auto">
        <Timeline items={steps} variant="vertical" />
      </div>
    </Section>
  )
}
