'use client'

import { useState } from 'react'
import { Section, SectionHeader } from '@/components/ui/section'
import { Card } from '@/components/ui/card'

interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  faqs: FAQItem[]
}

export function FAQSection({ faqs }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <Section>
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          subtitle="Common Questions"
          title="Frequently Asked Questions"
          description="Find answers to common questions about submitting and publishing with IJLJ"
        />

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              variant="outline"
              className="cursor-pointer hover:shadow-card transition-shadow"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="p-component">
                <button
                  className="w-full flex items-center justify-between text-left"
                  aria-expanded={openIndex === index}
                >
                  <h3 className="text-heading font-semibold text-foreground pr-4">
                    {faq.question}
                  </h3>
                  <span className="text-primary flex-shrink-0 text-2xl">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>

                {openIndex === index && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-body text-muted-foreground">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  )
}
