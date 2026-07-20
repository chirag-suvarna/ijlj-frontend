import Link from 'next/link'
import type { PublicationCard } from '@/types/publication'
import { SAMPLE_PUBLICATIONS } from '@/config/publications-config'

interface TrendingProps {
  type?: 'downloads' | 'views' | 'citations'
  limit?: number
}

export function Trending({
  type = 'downloads',
  limit = 5,
}: TrendingProps) {
  // Get trending publications based on metric
  const trending = [...SAMPLE_PUBLICATIONS]
    .sort((a, b) => {
      switch (type) {
        case 'downloads':
          return b.downloads - a.downloads
        case 'views':
          return b.views - a.views
        case 'citations':
          return b.citations - a.citations
        default:
          return 0
      }
    })
    .slice(0, limit)
    .map((pub) => ({
      id: pub.id,
      slug: pub.slug,
      title: pub.title,
      authors: pub.authors,
      abstract: pub.abstract,
      thumbnail: pub.thumbnail,
      volume: pub.volume,
      issue: pub.issue,
      publicationDate: pub.publicationDate,
      featured: pub.featured,
      peerReviewed: pub.peerReviewed,
      openAccess: pub.openAccess,
      citations: pub.citations,
      downloads: pub.downloads,
      views: pub.views,
    } as PublicationCard & { views: number }))

  const metricLabel = {
    downloads: 'Most Downloaded',
    views: 'Most Viewed',
    citations: 'Most Cited',
  }

  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">
          {metricLabel[type]}
        </h2>
        <p className="mt-2 text-muted-foreground">
          Trending research this month
        </p>
      </div>

      <div className="space-y-3">
        {trending.map((pub, index) => (
          <Link
            key={pub.id}
            href={`/publications/${pub.slug}`}
            className="group flex gap-4 rounded-lg border border-border bg-card p-4 transition-all hover:border-primary hover:shadow-md"
          >
            {/* Rank Badge */}
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 font-bold text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              #{index + 1}
            </div>

            {/* Content */}
            <div className="min-w-0 flex-1">
              <h3 className="line-clamp-2 font-semibold text-foreground group-hover:text-primary transition-colors">
                {pub.title}
              </h3>
              <p className="mt-1 line-clamp-1 text-sm text-muted-foreground">
                {pub.authors.map((a) => a.name).join(', ')}
              </p>
              <div className="mt-2 flex flex-wrap gap-2 text-xs text-muted-foreground">
                <span>Vol. {pub.volume}</span>
                <span>•</span>
                <span>
                  {type === 'downloads' && `${pub.downloads} downloads`}
                  {type === 'views' && `${pub.views} views`}
                  {type === 'citations' && `${pub.citations} citations`}
                </span>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex shrink-0 items-center text-muted-foreground group-hover:text-primary transition-colors">
              →
            </div>
          </Link>
        ))}
      </div>

      {/* View All Link */}
      <div className="flex justify-center pt-4">
        <Link
          href={`/publications?sort=${
            type === 'downloads'
              ? 'mostDownloaded'
              : type === 'views'
                ? 'mostViewed'
                : 'mostCited'
          }`}
          className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 font-medium text-foreground transition-colors hover:bg-muted"
        >
          View All →
        </Link>
      </div>
    </section>
  )
}
