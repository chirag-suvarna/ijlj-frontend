import React from 'react'
import { Section, SectionHeader } from '@/components/ui/section'
import { Accordion } from '@/components/ui/accordion'
import type { FAQItem } from '@/types/about'

interface FAQSectionProps {
  title: string
  description: string
  items: FAQItem[]
}

export function FAQSection({
  title,
  description,
  items,
}: FAQSectionProps) {
  return (
    <Section variant="alt">
      <div className="max-w-2xl mx-auto">
        <SectionHeader title={title} description={description} />
        <Accordion
          items={items.map((item) => ({
            question: item.question,
            answer: item.answer,
          }))}
        />
      </div>
    </Section>
  )
}
