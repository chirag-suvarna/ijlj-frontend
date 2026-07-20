import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'IJLJ - International Journal of Legal Jurisprudence',
  description: 'A premier peer-reviewed open-access journal publishing cutting-edge legal research and scholarship across all domains of law.',
  keywords: [
    'legal journal',
    'jurisprudence',
    'peer review',
    'legal research',
    'open access',
    'academic publishing',
  ],
  authors: [{ name: 'IJLJ Editorial Board' }],
  creator: 'IJLJ',
  publisher: 'IJLJ Publishing',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ijlj.org',
    siteName: 'International Journal of Legal Jurisprudence',
    title: 'IJLJ - International Journal of Legal Jurisprudence',
    description: 'A premier peer-reviewed open-access journal publishing cutting-edge legal research and scholarship.',
    images: [
      {
        url: 'https://ijlj.org/og-image.png',
        width: 1200,
        height: 630,
        alt: 'IJLJ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IJLJ - International Journal of Legal Jurisprudence',
    description: 'A premier peer-reviewed open-access journal publishing cutting-edge legal research.',
    creator: '@ijljjournal',
  },
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
  alternates: {
    canonical: 'https://ijlj.org',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f0f14' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Scholar Meta Tags */}
        <meta name="google-site-verification" content="your-verification-code" />
        <meta name="citation_journal_title" content="International Journal of Legal Jurisprudence" />
        <meta name="citation_publisher" content="IJLJ Publishing" />
        <meta name="citation_fulltext_html_url" content="https://ijlj.org" />

        {/* Highwire Press Meta Tags for Indexing */}
        <meta name="citation_publication_date" content="2024/01/01" />
        <meta name="citation_online_date" content="2024/01/01" />

        {/* Dublin Core Meta Tags */}
        <meta name="DC.Title" content="International Journal of Legal Jurisprudence" />
        <meta name="DC.Creator" content="IJLJ Editorial Board" />
        <meta name="DC.Subject" content="Law; Jurisprudence; Legal Research" />
        <meta name="DC.Type" content="Journal" />
        <meta name="DC.Format" content="text/html" />
        <meta name="DC.Language" content="en" />
        <meta name="DC.Identifier" content="https://ijlj.org" />

        {/* DNS Prefetch and Preconnect */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Preload Critical Resources */}
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" />

        {/* Favicons */}
        <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='80' font-size='80' fill='%231976d2'>⚖</text></svg>" />
      </head>
      <body className="bg-background text-foreground">
        <main>{children}</main>
      </body>
    </html>
  )
}
