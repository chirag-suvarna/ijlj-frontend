/**
 * Publications Configuration - IJLJ
 * Comprehensive configuration for all publication-related content and display settings
 * This file is CMS-ready: replace with API calls as needed
 */

import type {
  Publication,
  Volume,
  Subject,
  PublicationStatistics,
} from '@/types/publication'

/**
 * Sample Publications Data
 * In production, this would be fetched from Supabase, CMS, or API
 */
export const SAMPLE_PUBLICATIONS: Publication[] = [
  {
    id: 'pub-2024-001',
    slug: 'artificial-intelligence-legal-framework',
    title: 'Regulatory Framework for Artificial Intelligence in Legal Services',
    subtitle: 'A Comprehensive Analysis of Global AI Governance',
    abstract:
      'This article examines the evolving regulatory landscape for artificial intelligence applications in legal services. We analyze existing frameworks across jurisdictions and propose a harmonized approach for responsible AI adoption in legal practice.',
    keywords: [
      'artificial intelligence',
      'legal tech',
      'regulation',
      'governance',
      'compliance',
    ],
    authors: [
      {
        id: 'auth-001',
        name: 'Dr. Sarah Mitchell',
        institution: 'Harvard Law School',
        country: 'United States',
        email: 's.mitchell@harvard.edu',
      },
      {
        id: 'auth-002',
        name: 'Prof. Jean Claude',
        institution: 'University of Strasbourg',
        country: 'France',
        email: 'j.claude@unistra.fr',
      },
    ],
    institutions: ['Harvard Law School', 'University of Strasbourg'],
    country: 'International',
    volume: 1,
    issue: 1,
    pages: {
      start: 1,
      end: 45,
    },
    doi: '10.1234/ijlj.2024.001',
    issn: '2024-1234',
    language: 'en',
    publicationDate: '2024-01-15',
    acceptedDate: '2023-12-10',
    receivedDate: '2023-10-01',
    pdf: {
      url: '/publications/ai-legal-framework.pdf',
      size: 2500000, // 2.5MB
    },
    thumbnail:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop',
    citations: 156,
    downloads: 2847,
    views: 12450,
    featured: true,
    peerReviewed: true,
    openAccess: true,
    license: 'CC-BY',
    subjects: [
      'Artificial Intelligence',
      'Legal Technology',
      'Regulatory Law',
    ],
    categories: ['Technology & Law', 'Governance', 'Comparative Law'],
    readingTime: 18,
    updatedAt: '2024-01-15T10:30:00Z',
    createdAt: '2024-01-15T10:30:00Z',
  },
  {
    id: 'pub-2024-002',
    slug: 'blockchain-smart-contracts-enforcement',
    title: 'Enforceability of Smart Contracts Under Traditional Contract Law',
    abstract:
      'This paper explores the legal enforceability of blockchain-based smart contracts within existing contract law frameworks. We analyze judicial precedents and propose legislative amendments for clarity.',
    keywords: [
      'blockchain',
      'smart contracts',
      'contract law',
      'enforcement',
      'technology law',
    ],
    authors: [
      {
        id: 'auth-003',
        name: 'Dr. Alex Kumar',
        institution: 'Oxford University',
        country: 'United Kingdom',
        email: 'a.kumar@oxford.ac.uk',
      },
    ],
    institutions: ['Oxford University'],
    country: 'United Kingdom',
    volume: 1,
    issue: 1,
    pages: {
      start: 46,
      end: 89,
    },
    doi: '10.1234/ijlj.2024.002',
    issn: '2024-1234',
    language: 'en',
    publicationDate: '2024-01-15',
    acceptedDate: '2023-11-20',
    receivedDate: '2023-09-15',
    pdf: {
      url: '/publications/smart-contracts.pdf',
      size: 1800000,
    },
    citations: 89,
    downloads: 1654,
    views: 8923,
    peerReviewed: true,
    openAccess: true,
    license: 'CC-BY-SA',
    subjects: ['Blockchain', 'Technology Law', 'Contract Enforcement'],
    categories: ['Commercial Law', 'Technology & Law'],
    readingTime: 22,
    updatedAt: '2024-01-15T10:30:00Z',
    createdAt: '2024-01-15T10:30:00Z',
  },
  {
    id: 'pub-2024-003',
    slug: 'data-privacy-gdpr-compliance',
    title: 'GDPR Compliance and Data Privacy Rights: A Practical Guide',
    abstract:
      'This comprehensive review examines the practical implementation of GDPR requirements and privacy rights across member states. Case studies demonstrate effective compliance strategies.',
    keywords: [
      'GDPR',
      'data privacy',
      'compliance',
      'personal data',
      'EU law',
    ],
    authors: [
      {
        id: 'auth-004',
        name: 'Prof. Maria Schmidt',
        institution: 'University of Munich',
        country: 'Germany',
      },
      {
        id: 'auth-005',
        name: 'Dr. Isabella Romano',
        institution: 'University of Rome',
        country: 'Italy',
      },
      {
        id: 'auth-006',
        name: 'Dr. Elena Kowalski',
        institution: 'University of Warsaw',
        country: 'Poland',
      },
    ],
    institutions: [
      'University of Munich',
      'University of Rome',
      'University of Warsaw',
    ],
    country: 'European Union',
    volume: 1,
    issue: 1,
    pages: {
      start: 90,
      end: 142,
    },
    doi: '10.1234/ijlj.2024.003',
    issn: '2024-1234',
    language: 'en',
    publicationDate: '2024-01-15',
    acceptedDate: '2023-12-05',
    receivedDate: '2023-08-20',
    pdf: {
      url: '/publications/gdpr-compliance.pdf',
      size: 3200000,
    },
    citations: 234,
    downloads: 3456,
    views: 15670,
    featured: true,
    peerReviewed: true,
    openAccess: true,
    license: 'CC-BY',
    subjects: ['Data Privacy', 'GDPR', 'EU Law'],
    categories: ['Privacy Law', 'Regulatory Law', 'Comparative Law'],
    readingTime: 25,
    updatedAt: '2024-01-15T10:30:00Z',
    createdAt: '2024-01-15T10:30:00Z',
  },
]

/**
 * Publication Volumes
 */
export const VOLUMES: Volume[] = [
  {
    number: 1,
    year: 2024,
    issueCount: 2,
    articleCount: 12,
    publishedDate: '2024-01-15',
    featured: true,
  },
  {
    number: 2,
    year: 2024,
    issueCount: 2,
    articleCount: 11,
    publishedDate: '2024-07-15',
  },
]

/**
 * Subject Categories
 */
export const SUBJECTS: Subject[] = [
  {
    id: 'subj-001',
    name: 'Constitutional Law',
    slug: 'constitutional-law',
    description:
      'Research on constitutional structures, rights, and governance',
    articleCount: 45,
  },
  {
    id: 'subj-002',
    name: 'Corporate Law',
    slug: 'corporate-law',
    description: 'Company formation, governance, M&A, and compliance',
    articleCount: 67,
  },
  {
    id: 'subj-003',
    name: 'Criminal Law',
    slug: 'criminal-law',
    description: 'Criminal procedure, substantive law, and sentencing',
    articleCount: 54,
  },
  {
    id: 'subj-004',
    name: 'Cyber Law',
    slug: 'cyber-law',
    description: 'Data protection, cybersecurity, and digital rights',
    articleCount: 38,
  },
  {
    id: 'subj-005',
    name: 'Artificial Intelligence & Law',
    slug: 'ai-law',
    description:
      'Legal aspects of AI, machine learning, and algorithmic governance',
    articleCount: 32,
  },
  {
    id: 'subj-006',
    name: 'International Law',
    slug: 'international-law',
    description: 'Treaties, international relations, and global governance',
    articleCount: 71,
  },
  {
    id: 'subj-007',
    name: 'Human Rights',
    slug: 'human-rights',
    description: 'Fundamental rights, freedoms, and dignity',
    articleCount: 52,
  },
  {
    id: 'subj-008',
    name: 'Environmental Law',
    slug: 'environmental-law',
    description: 'Climate, conservation, pollution, and sustainability',
    articleCount: 48,
  },
  {
    id: 'subj-009',
    name: 'Family Law',
    slug: 'family-law',
    description: 'Marriage, divorce, custody, and succession',
    articleCount: 41,
  },
  {
    id: 'subj-010',
    name: 'Intellectual Property',
    slug: 'intellectual-property',
    description: 'Patents, copyrights, trademarks, and trade secrets',
    articleCount: 59,
  },
  {
    id: 'subj-011',
    name: 'Taxation',
    slug: 'taxation',
    description: 'Tax law, regulation, and policy',
    articleCount: 36,
  },
  {
    id: 'subj-012',
    name: 'Labour Law',
    slug: 'labour-law',
    description: 'Employment, wages, benefits, and worker rights',
    articleCount: 43,
  },
  {
    id: 'subj-013',
    name: 'Consumer Protection',
    slug: 'consumer-protection',
    description: 'Consumer rights, safety, and fair trading',
    articleCount: 27,
  },
  {
    id: 'subj-014',
    name: 'Alternative Dispute Resolution',
    slug: 'alternative-dispute-resolution',
    description: 'Arbitration, mediation, and alternative methods',
    articleCount: 31,
  },
  {
    id: 'subj-015',
    name: 'Commercial Law',
    slug: 'commercial-law',
    description: 'Trade, commerce, contracts, and business law',
    articleCount: 62,
  },
  {
    id: 'subj-016',
    name: 'Banking Law',
    slug: 'banking-law',
    description: 'Financial institutions, credit, and banking regulation',
    articleCount: 35,
  },
]

/**
 * Publication Statistics
 */
export const PUBLICATION_STATISTICS: PublicationStatistics = {
  totalVolumes: 2,
  totalIssues: 4,
  totalArticles: 23,
  totalAuthors: 156,
  totalCountries: 52,
  totalInstitutions: 89,
  totalDownloads: 28567,
  totalViews: 145230,
  totalDOIs: 23,
  totalPeerReviewers: 234,
  averageCitationsPerArticle: 12.5,
}

/**
 * Featured Publications for Homepage
 */
export const FEATURED_PUBLICATIONS = SAMPLE_PUBLICATIONS.filter(
  (pub) => pub.featured,
)

/**
 * Search Configuration
 */
export const SEARCH_CONFIG = {
  // Debounce delay for search input (ms)
  debounceDelay: 300,

  // Minimum characters required to trigger search
  minChars: 2,

  // Maximum results per page
  maxResults: 50,

  // Default page size
  defaultPageSize: 15,

  // Search fields to index
  searchFields: [
    'title',
    'abstract',
    'keywords',
    'authors.name',
    'institutions',
    'country',
    'doi',
    'subjects',
    'categories',
  ],

  // Facets for filtering
  facets: {
    volume: { type: 'select', label: 'Volume' },
    issue: { type: 'select', label: 'Issue' },
    year: { type: 'range', label: 'Year', min: 2020, max: 2024 },
    subjects: { type: 'multiselect', label: 'Subject' },
    categories: { type: 'multiselect', label: 'Category' },
    country: { type: 'multiselect', label: 'Country' },
    institution: { type: 'multiselect', label: 'Institution' },
    language: { type: 'multiselect', label: 'Language' },
    openAccess: { type: 'checkbox', label: 'Open Access Only' },
    peerReviewed: { type: 'checkbox', label: 'Peer Reviewed' },
  },
}

/**
 * Sort Options
 */
export const SORT_OPTIONS = [
  { value: 'newest', label: 'Newest First' },
  { value: 'oldest', label: 'Oldest First' },
  { value: 'mostViewed', label: 'Most Viewed' },
  { value: 'mostDownloaded', label: 'Most Downloaded' },
  { value: 'mostCited', label: 'Most Cited' },
  { value: 'alphabetical', label: 'Alphabetical A-Z' },
  { value: 'recentlyUpdated', label: 'Recently Updated' },
]

/**
 * View Options
 */
export const VIEW_OPTIONS = [
  { value: 'grid', label: 'Grid View', icon: '⊞' },
  { value: 'list', label: 'List View', icon: '≡' },
  { value: 'compact', label: 'Compact View', icon: '|' },
]

/**
 * Citation Styles
 */
export const CITATION_STYLES = [
  { value: 'apa', label: 'APA (7th Edition)' },
  { value: 'mla', label: 'MLA (9th Edition)' },
  { value: 'chicago', label: 'Chicago (17th Edition)' },
  { value: 'harvard', label: 'Harvard' },
  { value: 'ieee', label: 'IEEE' },
  { value: 'bluebook', label: 'Bluebook (21st Edition)' },
  { value: 'bibtex', label: 'BibTeX' },
  { value: 'ris', label: 'RIS' },
  { value: 'endnote', label: 'EndNote' },
]

/**
 * Indexing Platforms
 */
export const INDEXING_PLATFORMS = [
  {
    name: 'Google Scholar',
    url: 'https://scholar.google.com',
    logo: '🔍',
  },
  {
    name: 'CrossRef',
    url: 'https://www.crossref.org',
    logo: '✓',
  },
  {
    name: 'ROAD',
    url: 'https://road.issn.org',
    logo: '🛣',
  },
  {
    name: 'OpenAlex',
    url: 'https://openalex.org',
    logo: 'O',
  },
  {
    name: 'Semantic Scholar',
    url: 'https://www.semanticscholar.org',
    logo: 'S',
  },
  {
    name: 'DOAJ',
    url: 'https://doaj.org',
    logo: 'D',
  },
]

/**
 * Hero Section Content
 */
export const HERO_CONTENT = {
  title: 'Publications',
  subtitle:
    'Explore cutting-edge legal research from scholars, practitioners, and thought leaders worldwide',
  searchPlaceholder:
    'Search by title, author, DOI, keywords, or institution...',
  stats: [
    { label: 'Publications', value: PUBLICATION_STATISTICS.totalArticles },
    { label: 'Authors', value: PUBLICATION_STATISTICS.totalAuthors },
    { label: 'Countries', value: PUBLICATION_STATISTICS.totalCountries },
  ],
}

/**
 * Filter Sidebar Content
 */
export const FILTER_SIDEBAR_CONTENT = {
  title: 'Filters',
  clearAllLabel: 'Clear All Filters',
  applyLabel: 'Apply Filters',
  resetLabel: 'Reset',
}

/**
 * Pagination Content
 */
export const PAGINATION_CONTENT = {
  previousLabel: 'Previous',
  nextLabel: 'Next',
  pageLabel: 'Page',
  ofLabel: 'of',
  resultsPerPageLabel: 'Results per page',
}

/**
 * Newsletter Content
 */
export const NEWSLETTER_CONTENT = {
  title: 'Stay Updated with IJLJ',
  description: 'Subscribe to receive the latest publications and research insights delivered to your inbox.',
  placeholder: 'Enter your email address',
  buttonLabel: 'Subscribe',
  successMessage: 'Thank you for subscribing!',
  errorMessage: 'An error occurred. Please try again.',
}

/**
 * CTA Content
 */
export const CTA_CONTENT = {
  title: 'Ready to Share Your Research?',
  description:
    'Submit your manuscript to IJLJ and join thousands of researchers advancing legal knowledge globally.',
  primaryButtonLabel: 'Submit Manuscript',
  primaryButtonUrl: '/submit',
  secondaryButtonLabel: 'Learn About Publishing',
  secondaryButtonUrl: '/about#publishing-process',
}

/**
 * Empty State Content
 */
export const EMPTY_STATE_CONTENT = {
  title: 'No publications found',
  description:
    'Try adjusting your search or filters to find what you are looking for.',
  actionLabel: 'Clear Filters',
}
