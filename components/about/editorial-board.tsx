import React from 'react'
import Link from 'next/link'
import { Section, SectionHeader, SectionGrid } from '@/components/ui/section'
import { EditorialCard } from '@/components/ui/editorial-card'
import type { EditorialMember } from '@/types/about'

interface EditorialBoardProps {
  title: string
  description: string
  featured: EditorialMember[]
  link: { label: string; href: string }
}

export function EditorialBoard({
  title,
  description,
  featured,
  link,
}: EditorialBoardProps) {
  return (
    <Section variant="alt">
      <SectionHeader title={title} description={description} />

      <div className="mb-8">
        <SectionGrid cols={featured.length >= 4 ? 3 : 2} gap="lg">
          {featured.map((member) => (
            <EditorialCard key={member.name} {...member} showBio />
          ))}
        </SectionGrid>
      </div>

      {/* Link to full board */}
      <div className="text-center">
        <Link
          href={link.href}
          className="inline-block px-6 py-2 border-2 border-accent text-accent font-semibold rounded hover:bg-accent/10 transition-colors"
        >
          {link.label}
        </Link>
      </div>
    </Section>
  )
}
