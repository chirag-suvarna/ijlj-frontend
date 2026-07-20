'use client'

import Link from 'next/link'
import type { PublicationCard as PublicationCardType } from '@/types/publication'

interface PublicationCardProps {
  publication: PublicationCardType
  variant?: 'grid' | 'list' | 'compact' | 'featured'
  showBookmark?: boolean
  onBookmark?: (id: string) => void
  isBookmarked?: boolean
}

export function PublicationCard({
  publication,
  variant = 'grid',
  showBookmark = false,
  onBookmark,
  isBookmarked = false,
}: PublicationCardProps) {
  const authorList = publication.authors
    .slice(0, 3)
    .map((a) => a.name)
    .join(', ')
  const hasMoreAuthors = publication.authors.length > 3
  const authorDisplay = hasMoreAuthors
    ? `${authorList} et al.`
    : authorList

  if (variant === 'featured') {
    return (
      <article className="group relative overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:shadow-lg">
        {publication.thumbnail && (
          <div className="relative h-48 overflow-hidden bg-muted">
            <img
              src={publication.thumbnail}
              alt={publication.title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {publication.featured && (
              <div className="absolute top-3 right-3 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                Featured
              </div>
            )}
          </div>
        )}
        <div className="flex flex-col gap-3 p-5">
          <div className="flex items-start justify-between gap-2">
            <h3 className="line-clamp-2 text-lg font-semibold text-foreground">
              {publication.title}
            </h3>
          </div>
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {authorDisplay}
          </p>
          <p className="line-clamp-3 text-sm leading-relaxed text-foreground/80">
            Vol. {publication.volume}, Issue {publication.issue} &bull;{' '}
            {new Date(publication.publicationDate).toLocaleDateString()}
          </p>
          <div className="flex flex-wrap gap-2">
            {publication.openAccess && (
              <span className="inline-flex items-center rounded-full bg-green-100/10 px-2 py-1 text-xs font-medium text-green-600 dark:text-green-400">
                Open Access
              </span>
            )}
            {publication.peerReviewed && (
              <span className="inline-flex items-center rounded-full bg-blue-100/10 px-2 py-1 text-xs font-medium text-blue-600 dark:text-blue-400">
                Peer Reviewed
              </span>
            )}
          </div>
          <div className="flex items-center justify-between pt-3 text-xs text-muted-foreground">
            <div className="flex gap-4">
              <span>📥 {publication.downloads}</span>
              <span>👁️ {publication.views}</span>
              <span>📚 {publication.citations}</span>
            </div>
          </div>
          <Link
            href={`/publications/${publication.slug}`}
            className="mt-2 inline-flex items-center text-sm font-semibold text-primary hover:underline"
          >
            Read Article →
          </Link>
        </div>
      </article>
    )
  }

  if (variant === 'compact') {
    return (
      <div className="border-b border-border px-4 py-3 transition-colors hover:bg-muted/50">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <Link
              href={`/publications/${publication.slug}`}
              className="group/link"
            >
              <h3 className="line-clamp-1 text-sm font-semibold text-foreground group-hover/link:text-primary">
                {publication.title}
              </h3>
            </Link>
            <p className="mt-1 line-clamp-1 text-xs text-muted-foreground">
              {authorDisplay}
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {publication.openAccess && (
                <span className="text-xs text-green-600 dark:text-green-400">
                  OA
                </span>
              )}
              {publication.peerReviewed && (
                <span className="text-xs text-blue-600 dark:text-blue-400">
                  Peer Reviewed
                </span>
              )}
            </div>
          </div>
          <div className="flex shrink-0 flex-col items-end gap-1 text-xs text-muted-foreground">
            <span>
              {new Date(publication.publicationDate).toLocaleDateString()}
            </span>
            <span>{publication.citations} citations</span>
          </div>
        </div>
      </div>
    )
  }

  if (variant === 'list') {
    return (
      <article className="border-b border-border py-5 px-4 transition-colors hover:bg-muted/30">
        <Link
          href={`/publications/${publication.slug}`}
          className="group/link block"
        >
          <h3 className="text-base font-semibold text-foreground group-hover/link:text-primary">
            {publication.title}
          </h3>
        </Link>
        <p className="mt-2 text-sm text-muted-foreground">{authorDisplay}</p>
        <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span>
            Vol. {publication.volume}, Issue {publication.issue}
          </span>
          <span>{new Date(publication.publicationDate).getFullYear()}</span>
          <span>{publication.citations} citations</span>
          <span>{publication.downloads} downloads</span>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {publication.openAccess && (
            <span className="inline-flex items-center rounded-full bg-green-100/10 px-2 py-1 text-xs font-medium text-green-600 dark:text-green-400">
              Open Access
            </span>
          )}
          {publication.peerReviewed && (
            <span className="inline-flex items-center rounded-full bg-blue-100/10 px-2 py-1 text-xs font-medium text-blue-600 dark:text-blue-400">
              Peer Reviewed
            </span>
          )}
        </div>
      </article>
    )
  }

  // Default grid view
  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:shadow-lg">
      {publication.thumbnail && (
        <div className="relative h-40 overflow-hidden bg-muted">
          <img
            src={publication.thumbnail}
            alt={publication.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="line-clamp-2 text-sm font-semibold text-foreground">
            <Link
              href={`/publications/${publication.slug}`}
              className="hover:text-primary"
            >
              {publication.title}
            </Link>
          </h3>
          {showBookmark && (
            <button
              onClick={(e) => {
                e.preventDefault()
                onBookmark?.(publication.id)
              }}
              className="shrink-0 text-lg transition-colors hover:text-primary"
              aria-label={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
            >
              {isBookmarked ? '🔖' : '📌'}
            </button>
          )}
        </div>
        <p className="line-clamp-2 text-xs text-muted-foreground">
          {authorDisplay}
        </p>
        <div className="flex flex-wrap gap-1 text-xs text-muted-foreground">
          <span>Vol. {publication.volume}</span>
          <span>•</span>
          <span>Issue {publication.issue}</span>
          <span>•</span>
          <span>
            {new Date(publication.publicationDate).toLocaleDateString('en-US', {
              month: 'short',
              year: 'numeric',
            })}
          </span>
        </div>
        <div className="mt-auto flex flex-wrap gap-1">
          {publication.openAccess && (
            <span className="rounded bg-green-100/20 px-2 py-0.5 text-xs font-medium text-green-600 dark:text-green-400">
              Open Access
            </span>
          )}
          {publication.peerReviewed && (
            <span className="rounded bg-blue-100/20 px-2 py-0.5 text-xs font-medium text-blue-600 dark:text-blue-400">
              Peer Reviewed
            </span>
          )}
        </div>
        <div className="flex items-center justify-between border-t border-border pt-3 text-xs text-muted-foreground">
          <div className="flex gap-3">
            <span title="Downloads">📥 {publication.downloads}</span>
            <span title="Views">👁️ {publication.views}</span>
          </div>
          <span title="Citations">📚 {publication.citations}</span>
        </div>
      </div>
    </article>
  )
}
