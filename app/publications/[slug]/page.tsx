import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { SAMPLE_PUBLICATIONS } from '@/config/publications-config'
import { Citations } from '@/components/publications/citations'
import { PublicationGrid } from '@/components/publications/publication-grid'

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

interface PublicationDetailPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata(
  { params }: PublicationDetailPageProps
): Promise<Metadata> {
  const { slug } = await params
  const publication = SAMPLE_PUBLICATIONS.find((p) => p.slug === slug)

  if (!publication) {
    return {}
  }

  const authorNames = publication.authors.map((a) => a.name).join(', ')
  const description = publication.abstract.substring(0, 155) + '...'

  return {
    title: `${publication.title} | IJLJ`,
    description,
    keywords: publication.keywords,
    authors: publication.authors.map((a) => ({ name: a.name })),
    openGraph: {
      title: publication.title,
      description,
      type: 'article',
      url: `${baseUrl}/publications/${slug}`,
      authors: publication.authors.map((a) => a.name),
      publishedTime: publication.publicationDate,
      images: publication.thumbnail
        ? [
            {
              url: publication.thumbnail,
              width: 400,
              height: 250,
              alt: publication.title,
            },
          ]
        : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: publication.title,
      description,
      creator: '@ijljjournal',
    },
    alternates: {
      canonical: `${baseUrl}/publications/${slug}`,
    },
    other: {
      'citation_title': publication.title,
      'citation_author': publication.authors.map((a) => a.name).join('; '),
      'citation_publication_date': publication.publicationDate,
      'citation_journal_title': 'International Journal of Legal Jurisprudence',
      'citation_volume': String(publication.volume),
      'citation_issue': String(publication.issue),
      'citation_issn': publication.issn || '2024-1234',
      'citation_doi': publication.doi,
      'citation_abstract_html_url': `${baseUrl}/publications/${slug}`,
      'citation_pdf_url': publication.pdf?.url,
      'citation_keywords': publication.keywords.join('; '),
      'citation_language': publication.language.toUpperCase(),
    },
  }
}

function generateArticleSchema(publication: typeof SAMPLE_PUBLICATIONS[0]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ScholarlyArticle',
    headline: publication.title,
    description: publication.abstract,
    image: publication.thumbnail,
    datePublished: publication.publicationDate,
    dateModified: publication.updatedAt,
    author: publication.authors.map((a) => ({
      '@type': 'Person',
      name: a.name,
      email: a.email,
      affiliation: a.institution
        ? {
            '@type': 'Organization',
            name: a.institution,
            url: `https://scholar.google.com/citations?q=${encodeURIComponent(a.name)}`,
          }
        : undefined,
    })),
    publisher: {
      '@type': 'Organization',
      name: 'IJLJ Publishing',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`,
      },
    },
    isAccessibleForFree: publication.openAccess,
    keywords: publication.keywords.join(', '),
    inLanguage: publication.language.toUpperCase(),
    isPartOf: {
      '@type': 'PublicationVolume',
      name: `Volume ${publication.volume}`,
      volumeNumber: publication.volume,
      issueNumber: publication.issue,
      datePublished: publication.publicationDate,
    },
    identifier: [
      {
        '@type': 'PropertyValue',
        propertyID: 'DOI',
        value: publication.doi,
      },
      {
        '@type': 'PropertyValue',
        propertyID: 'ISSN',
        value: publication.issn,
      },
    ],
  }
}

export default async function PublicationDetailPage({
  params,
}: PublicationDetailPageProps) {
  const { slug } = await params
  const publication = SAMPLE_PUBLICATIONS.find((p) => p.slug === slug)

  if (!publication) {
    notFound()
  }

  const relatedPublications = SAMPLE_PUBLICATIONS.filter(
    (p) => p.id !== publication.id && p.subjects.some((s) => publication.subjects.includes(s))
  ).slice(0, 3)

  const schema = generateArticleSchema(publication)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <main className="min-h-screen">
        {/* Header */}
        <section className="border-b border-border bg-muted/50 py-8 sm:py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="mb-4 flex flex-wrap gap-2">
              {publication.subjects.map((subject) => (
                <span
                  key={subject}
                  className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                >
                  {subject}
                </span>
              ))}
            </div>
            <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
              {publication.title}
            </h1>
            {publication.subtitle && (
              <p className="mt-2 text-lg text-muted-foreground">
                {publication.subtitle}
              </p>
            )}
          </div>
        </section>

        {/* Main Content */}
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Authors */}
              <section className="space-y-4">
                <h2 className="text-lg font-semibold text-foreground">Authors</h2>
                <div className="space-y-3">
                  {publication.authors.map((author) => (
                    <div
                      key={author.id}
                      className="rounded-lg border border-border bg-card p-4"
                    >
                      <p className="font-semibold text-foreground">
                        {author.name}
                      </p>
                      {author.institution && (
                        <p className="mt-1 text-sm text-muted-foreground">
                          {author.institution}
                          {author.country && ` • ${author.country}`}
                        </p>
                      )}
                      {author.email && (
                        <a
                          href={`mailto:${author.email}`}
                          className="mt-2 inline-text-xs text-primary hover:underline"
                        >
                          {author.email}
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* Abstract */}
              <section className="space-y-4">
                <h2 className="text-lg font-semibold text-foreground">Abstract</h2>
                <p className="leading-relaxed text-foreground/90">
                  {publication.abstract}
                </p>
              </section>

              {/* Keywords */}
              {publication.keywords.length > 0 && (
                <section className="space-y-4">
                  <h2 className="text-lg font-semibold text-foreground">
                    Keywords
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {publication.keywords.map((keyword) => (
                      <span
                        key={keyword}
                        className="rounded-full bg-muted px-3 py-1 text-sm text-foreground"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </section>
              )}

              {/* Publication Details */}
              <section className="rounded-lg border border-border bg-card p-6 space-y-4">
                <h2 className="text-lg font-semibold text-foreground">
                  Publication Details
                </h2>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Volume</p>
                    <p className="font-semibold text-foreground">
                      {publication.volume}
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Issue</p>
                    <p className="font-semibold text-foreground">
                      {publication.issue}
                    </p>
                  </div>
                  {publication.pages && (
                    <div>
                      <p className="text-muted-foreground">Pages</p>
                      <p className="font-semibold text-foreground">
                        {publication.pages.start}-{publication.pages.end}
                      </p>
                    </div>
                  )}
                  <div>
                    <p className="text-muted-foreground">Published</p>
                    <p className="font-semibold text-foreground">
                      {new Date(publication.publicationDate).toLocaleDateString()}
                    </p>
                  </div>
                  {publication.doi && (
                    <div className="col-span-2">
                      <p className="text-muted-foreground">DOI</p>
                      <a
                        href={`https://doi.org/${publication.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-primary hover:underline break-all"
                      >
                        {publication.doi}
                      </a>
                    </div>
                  )}
                </div>
              </section>

              {/* Metrics */}
              <section className="grid grid-cols-3 gap-4">
                <div className="rounded-lg border border-border bg-card p-4 text-center">
                  <p className="text-2xl font-bold text-primary">
                    {publication.downloads}
                  </p>
                  <p className="text-xs text-muted-foreground">Downloads</p>
                </div>
                <div className="rounded-lg border border-border bg-card p-4 text-center">
                  <p className="text-2xl font-bold text-primary">
                    {publication.views}
                  </p>
                  <p className="text-xs text-muted-foreground">Views</p>
                </div>
                <div className="rounded-lg border border-border bg-card p-4 text-center">
                  <p className="text-2xl font-bold text-primary">
                    {publication.citations}
                  </p>
                  <p className="text-xs text-muted-foreground">Citations</p>
                </div>
              </section>

              {/* Related Publications */}
              {relatedPublications.length > 0 && (
                <section className="space-y-4">
                  <h2 className="text-lg font-semibold text-foreground">
                    Related Research
                  </h2>
                  <PublicationGrid
                    publications={relatedPublications.map((pub) => ({
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
                    variant="list"
                  />
                </section>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* PDF Download */}
              {publication.pdf && (
                <button className="w-full rounded-lg bg-primary px-4 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
                  📄 Download PDF
                </button>
              )}

              {/* Badges */}
              <div className="space-y-2">
                {publication.openAccess && (
                  <div className="rounded-lg border border-green-500/30 bg-green-500/10 p-3 text-center text-sm font-medium text-green-700 dark:text-green-400">
                    Open Access
                  </div>
                )}
                {publication.peerReviewed && (
                  <div className="rounded-lg border border-blue-500/30 bg-blue-500/10 p-3 text-center text-sm font-medium text-blue-700 dark:text-blue-400">
                    Peer Reviewed
                  </div>
                )}
              </div>

              {/* Citation Tools */}
              <Citations publication={publication} />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
