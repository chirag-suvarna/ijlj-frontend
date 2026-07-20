import React from 'react'
import { Section, SectionHeader } from '@/components/ui/section'
import { BadgeGrid } from '@/components/ui/badge-grid'
import type { IndexingPlatform } from '@/types/about'

interface IndexingPlatformsProps {
  title: string
  description: string
  platforms: IndexingPlatform[]
}

export function IndexingPlatforms({
  title,
  description,
  platforms,
}: IndexingPlatformsProps) {
  return (
    <Section>
      <SectionHeader title={title} description={description} />
      <BadgeGrid platforms={platforms} cols={6} />
    </Section>
  )
}
