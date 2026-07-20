import type { Metadata } from 'next'
import { PUBLICATION_STATISTICS } from '@/config/publications-config'

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

export const metadata: Metadata = {
  title: 'Publications | IJLJ - International Journal of Legal Jurisprudence',
  description: `Explore ${PUBLICATION_STATISTICS.totalArticles} peer-reviewed legal research articles published in IJLJ. Search by topic, author, institution, or DOI.`,
  keywords: [
    'legal publications',
    'law research',
    'peer-reviewed articles',
    'jurisprudence',
    'legal journal',
    'academic research',
    'DOI',
    'open access',
    'legal scholarship',
  ],
  authors: [{ name: 'IJLJ Editorial Board' }],
  creator: 'IJLJ Publishing',
  publisher: 'IJLJ Publishing',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `${baseUrl}/publications`,
    siteName: 'International Journal of Legal Jurisprudence',
    title: 'Publications | IJLJ',
    description: `Discover ${PUBLICATION_STATISTICS.totalArticles} peer-reviewed legal research articles from IJLJ. Open access, indexed in Google Scholar and CrossRef.`,
    images: [
      {
        url: `${baseUrl}/og-publications.png`,
        width: 1200,
        height: 630,
        alt: 'IJLJ Publications',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Publications | IJLJ',
    description: `Browse legal research across ${PUBLICATION_STATISTICS.totalCountries} countries`,
    creator: '@ijljjournal',
    images: [`${baseUrl}/og-publications.png`],
  },
  alternates: {
    canonical: `${baseUrl}/publications`,
  },
  other: {
    // Google Scholar Meta Tags
    'citation_journal_title': 'International Journal of Legal Jurisprudence',
    'citation_publisher': 'IJLJ Publishing',
    'citation_publication_date': new Date().toISOString().split('T')[0],
    'citation_online_date': new Date().toISOString().split('T')[0],

    // Dublin Core Meta Tags
    'DC.Title': 'Publications | IJLJ',
    'DC.Creator': 'IJLJ Editorial Board',
    'DC.Subject': 'Law; Jurisprudence; Legal Research; Peer Review; Open Access',
    'DC.Type': 'Journal Collection',
    'DC.Format': 'text/html',
    'DC.Language': 'en',
    'DC.Identifier': `${baseUrl}/publications`,
  },
}

/**
 * Generate JSON-LD structured data for the publications page
 */
export function generatePublicationsSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${baseUrl}/publications`,
        name: 'Publications',
        description: `Peer-reviewed legal research publications from IJLJ`,
        url: `${baseUrl}/publications`,
        mainEntity: {
          '@type': 'Periodical',
          name: 'International Journal of Legal Jurisprudence',
          alternativeName: 'IJLJ',
          issn: '2024-1234',
          publisher: {
            '@type': 'Organization',
            name: 'IJLJ Publishing',
            url: `${baseUrl}`,
            logo: {
              '@type': 'ImageObject',
              url: `${baseUrl}/logo.png`,
              width: 250,
              height: 60,
            },
          },
          description:
            'A premier peer-reviewed open-access journal publishing cutting-edge legal research',
        },
        hasPart: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: `${baseUrl}`,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Publications',
              item: `${baseUrl}/publications`,
            },
          ],
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${baseUrl}`,
        url: `${baseUrl}`,
        name: 'International Journal of Legal Jurisprudence',
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${baseUrl}/publications?search={search_term_string}`,
          },
          query: 'required name=search_term_string',
        },
      },
      {
        '@type': 'Organization',
        '@id': `${baseUrl}`,
        name: 'IJLJ - International Journal of Legal Jurisprudence',
        url: `${baseUrl}`,
        logo: {
          '@type': 'ImageObject',
          url: `${baseUrl}/logo.png`,
          width: 250,
          height: 60,
        },
        sameAs: [
          'https://scholar.google.com/citations?user=ijlj',
          'https://twitter.com/ijljjournal',
          'https://linkedin.com/company/ijlj',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'Editorial Support',
          email: 'editorial@ijlj.org',
        },
      },
    ],
  }
}
