import React from 'react'
import { Section, SectionHeader } from '@/components/ui/section'
import { Timeline } from '@/components/ui/timeline'
import type { TimelineItem } from '@/types/about'

interface StoryTimelineProps {
  title: string
  subtitle: string
  description: string
  timeline: TimelineItem[]
}

export function StoryTimeline({
  title,
  subtitle,
  description,
  timeline,
}: StoryTimelineProps) {
  return (
    <Section variant="alt">
      <SectionHeader title={title} subtitle={subtitle} description={description} />
      <div className="max-w-3xl mx-auto">
        <Timeline items={timeline} variant="vertical" />
      </div>
    </Section>
  )
}
