'use client'

import { useEffect, useState } from 'react'
import type { PublicationStatistics } from '@/types/publication'

interface StatisticsProps {
  stats: PublicationStatistics
  animated?: boolean
}

function AnimatedCounter({
  value,
  duration = 2000,
}: {
  value: number
  duration?: number
}) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    const steps = 60
    const stepValue = value / steps
    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      setDisplayValue(Math.floor(stepValue * currentStep))

      if (currentStep >= steps) {
        setDisplayValue(value)
        clearInterval(timer)
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [value, duration])

  return <span>{displayValue.toLocaleString()}</span>
}

export function Statistics({ stats, animated = true }: StatisticsProps) {
  const statisticsData = [
    { label: 'Volumes', value: stats.totalVolumes },
    { label: 'Issues', value: stats.totalIssues },
    { label: 'Articles', value: stats.totalArticles },
    { label: 'Authors', value: stats.totalAuthors },
    { label: 'Countries', value: stats.totalCountries },
    { label: 'Institutions', value: stats.totalInstitutions },
    { label: 'Downloads', value: stats.totalDownloads },
    { label: 'Views', value: stats.totalViews },
  ]

  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Publication Statistics</h2>
        <p className="mt-2 text-muted-foreground">
          IJLJ by the numbers
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {statisticsData.map((stat) => (
          <div
            key={stat.label}
            className="rounded-lg border border-border bg-card p-6 text-center"
          >
            <div className="text-3xl font-bold text-primary sm:text-4xl">
              {animated ? (
                <AnimatedCounter value={stat.value} />
              ) : (
                stat.value.toLocaleString()
              )}
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Additional Metrics */}
      <div className="rounded-lg border border-border bg-card p-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <p className="text-sm text-muted-foreground">
              Average Citations per Article
            </p>
            <p className="mt-2 text-3xl font-bold text-primary">
              {animated ? (
                <AnimatedCounter value={Math.round(stats.averageCitationsPerArticle)} />
              ) : (
                stats.averageCitationsPerArticle.toLocaleString()
              )}
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">
              Peer Reviewers
            </p>
            <p className="mt-2 text-3xl font-bold text-primary">
              {animated ? (
                <AnimatedCounter value={stats.totalPeerReviewers} />
              ) : (
                stats.totalPeerReviewers.toLocaleString()
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
