'use client'

import React from 'react'
import type { TimelineItem, WorkflowStep } from '@/types/about'

interface TimelineProps {
  items: TimelineItem[] | WorkflowStep[]
  variant?: 'vertical' | 'horizontal'
}

export function Timeline({ items, variant = 'vertical' }: TimelineProps) {
  if (variant === 'horizontal') {
    return (
      <div className="flex overflow-x-auto pb-4 gap-4">
        {items.map((item, index) => (
          <div key={index} className="flex-shrink-0 w-64">
            <TimelineCard item={item} index={index} />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {items.map((item, index) => (
        <div key={index} className="flex gap-6">
          {/* Timeline marker */}
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-accent text-background flex items-center justify-center font-semibold flex-shrink-0">
              {('step' in item) ? item.step : index + 1}
            </div>
            {index !== items.length - 1 && (
              <div className="w-1 h-16 bg-border mt-4" />
            )}
          </div>

          {/* Content */}
          <div className="pt-1 pb-8">
            <h3 className="text-heading font-semibold mb-2">
              {('year' in item) ? item.year : item.title}
              {('title' in item) && ('year' in item) && (
                <span className="text-heading ml-2">{item.title}</span>
              )}
            </h3>
            <p className="text-body-small text-muted-foreground">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

function TimelineCard({ item, index }: { item: TimelineItem | WorkflowStep; index: number }) {
  const year = ('year' in item) ? item.year : ('step' in item) ? item.step : index + 1
  const title = ('title' in item) ? item.title : ''

  return (
    <div className="bg-muted bg-opacity-30 border border-border rounded-lg p-4 h-full flex flex-col">
      <div className="text-2xl mb-2">{'icon' in item ? item.icon : ''}</div>
      <p className="text-heading font-semibold mb-1">{year}</p>
      {title && <h4 className="text-body font-semibold mb-2">{title}</h4>}
      <p className="text-body-small text-muted-foreground">{item.description}</p>
    </div>
  )
}
