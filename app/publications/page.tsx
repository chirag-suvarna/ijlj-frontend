import { Suspense } from 'react'
import type { Metadata } from 'next'
import {
  PublicationsHero,
  PublicationGrid,
  Statistics,
  Trending,
  VolumeExplorer,
  SubjectExplorer,
} from '@/components/publications'
import {
  SAMPLE_PUBLICATIONS,
  FEATURED_PUBLICATIONS,
  PUBLICATION_STATISTICS,
  VOLUMES,
  SUBJECTS,
} from '@/config/publications-config'
import { metadata as publicationsMetadata, generatePublicationsSchema } from './metadata'

export const metadata: Metadata = publicationsMetadata

function PublicationsSkeleton() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="h-48 animate-pulse rounded-lg border border-border bg-muted"
        />
      ))}
    </div>
  )
}

async function PublicationsContent() {
  // In production, fetch from API/CMS
  const publications = SAMPLE_PUBLICATIONS.map((pub) => ({
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
  }))

  return (
    <div className="space-y-20">
      {/* Featured Section */}
      {FEATURED_PUBLICATIONS.length > 0 && (
        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-foreground">
              Featured Research
            </h2>
            <p className="mt-1 text-muted-foreground">
              Highlighted publications and trending research
            </p>
          </div>
          <PublicationGrid
            publications={FEATURED_PUBLICATIONS.map((pub) => ({
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
            }))}
            variant="grid"
          />
        </section>
      )}

      {/* Statistics Section */}
      <Statistics stats={PUBLICATION_STATISTICS} animated={true} />

      {/* Trending Research */}
      <div className="grid gap-8 md:grid-cols-3">
        <Trending type="downloads" limit={5} />
        <Trending type="views" limit={5} />
        <Trending type="citations" limit={5} />
      </div>

      {/* Volumes Explorer */}
      <VolumeExplorer volumes={VOLUMES} />

      {/* Subject Explorer */}
      <SubjectExplorer subjects={SUBJECTS} />

      {/* All Publications */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">
            All Publications
          </h2>
          <p className="mt-1 text-muted-foreground">
            Browse {publications.length} articles across {VOLUMES.length} volumes
          </p>
        </div>
        <PublicationGrid publications={publications} variant="grid" />
      </section>
    </div>
  )
}

export default function PublicationsPage() {
  const schema = generatePublicationsSchema()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <main className="min-h-screen">
        {/* Hero Section */}
        <PublicationsHero />

        {/* Publications Content */}
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <Suspense fallback={<PublicationsSkeleton />}>
            <PublicationsContent />
          </Suspense>
        </section>

        {/* Footer CTA */}
        <section className="border-t border-border bg-muted/50 py-12 sm:py-16">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Ready to Share Your Research?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Submit your manuscript to IJLJ and join our community of scholars
              advancing legal knowledge worldwide.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href="/submit"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Submit Manuscript
              </a>
              <a
                href="/about#publishing-process"
                className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-6 py-3 font-semibold text-foreground transition-colors hover:bg-muted"
              >
                Learn About Publishing
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
