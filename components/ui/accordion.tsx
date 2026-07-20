'use client'

import React, { useState } from 'react'

interface AccordionItem {
  question: string
  answer: string
}

interface AccordionProps {
  items: AccordionItem[]
  defaultOpen?: number
}

export function Accordion({ items, defaultOpen = -1 }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(
    defaultOpen >= 0 ? defaultOpen : null
  )

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-border rounded-lg overflow-hidden hover:border-accent/50 transition-colors"
        >
          <button
            onClick={() => toggleItem(index)}
            className="w-full px-6 py-4 flex items-center justify-between bg-muted bg-opacity-20 hover:bg-opacity-40 transition-colors text-left"
            aria-expanded={openIndex === index}
          >
            <span className="font-semibold text-body text-foreground">
              {item.question}
            </span>
            <span
              className={`flex-shrink-0 w-6 h-6 flex items-center justify-center text-accent font-bold transition-transform ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            >
              ▼
            </span>
          </button>

          {/* Expanded content */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? 'max-h-96' : 'max-h-0'
            }`}
          >
            <div className="px-6 py-4 bg-background border-t border-border">
              <p className="text-body-small text-muted-foreground leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
