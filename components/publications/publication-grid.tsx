import type { PublicationCard } from '@/types/publication'
import { PublicationCard as PublicationCardComponent } from './publication-card'

interface PublicationGridProps {
  publications: PublicationCard[]
  variant?: 'grid' | 'list' | 'compact'
  showBookmark?: boolean
  isLoading?: boolean
  onBookmark?: (id: string) => void
  bookmarkedIds?: string[]
}

export function PublicationGrid({
  publications,
  variant = 'grid',
  showBookmark = false,
  isLoading = false,
  onBookmark,
  bookmarkedIds = [],
}: PublicationGridProps) {
  if (isLoading) {
    return (
      <div
        className={`grid gap-4 ${
          variant === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : ''
        }`}
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="animate-pulse rounded-lg border border-border bg-muted h-64"
          />
        ))}
      </div>
    )
  }

  if (publications.length === 0) {
    return (
      <div className="flex items-center justify-center rounded-lg border border-dashed border-border bg-muted/50 py-12">
        <div className="text-center">
          <p className="text-lg font-medium text-foreground">
            No publications found
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Try adjusting your search or filters
          </p>
        </div>
      </div>
    )
  }

  if (variant === 'list' || variant === 'compact') {
    return (
      <div className="overflow-hidden rounded-lg border border-border bg-card">
        {publications.map((pub, index) => (
          <div
            key={pub.id}
            className={index !== publications.length - 1 ? '' : ''}
          >
            <PublicationCardComponent
              publication={pub}
              variant={variant}
              showBookmark={showBookmark}
              onBookmark={onBookmark}
              isBookmarked={bookmarkedIds.includes(pub.id)}
            />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {publications.map((pub) => (
        <PublicationCardComponent
          key={pub.id}
          publication={pub}
          variant={variant}
          showBookmark={showBookmark}
          onBookmark={onBookmark}
          isBookmarked={bookmarkedIds.includes(pub.id)}
        />
      ))}
    </div>
  )
}
