import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About IJLJ | International Journal of Legal Jurisprudence',
  description: 'Discover IJLJ\'s mission, editorial philosophy, and commitment to publishing rigorous, peer-reviewed legal research that advances scholarship globally.',
  keywords: [
    'about IJLJ',
    'legal journal',
    'peer review',
    'open access publishing',
    'academic excellence',
    'legal scholarship',
    'editorial board',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ijlj.org/about',
    siteName: 'IJLJ',
    title: 'About IJLJ | International Journal of Legal Jurisprudence',
    description: 'Learn about IJLJ\'s mission, values, and commitment to advancing legal scholarship worldwide.',
    images: [
      {
        url: 'https://ijlj.org/og-about.png',
        width: 1200,
        height: 630,
        alt: 'About IJLJ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About IJLJ',
    description: 'Learn about IJLJ\'s mission, values, and commitment to advancing legal scholarship worldwide.',
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
    canonical: 'https://ijlj.org/about',
  },
}
