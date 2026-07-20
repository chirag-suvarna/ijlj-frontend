/**
 * Publication Types - IJLJ Publishing Platform
 * Comprehensive TypeScript interfaces for all publication-related data structures
 */

export interface Author {
  id: string
  name: string
  email?: string
  institution?: string
  country?: string
  orcid?: string
  avatar?: string
}

export interface Publication {
  id: string
  slug: string
  title: string
  subtitle?: string
  abstract: string
  keywords: string[]
  authors: Author[]
  institutions?: string[]
  country?: string
  volume: number
  issue: number
  pages?: {
    start: number
    end: number
  }
  doi?: string
  issn?: string
  language: 'en' | 'es' | 'fr' | 'de' | 'pt' | 'ar'
  publicationDate: string
  acceptedDate?: string
  receivedDate?: string
  publishedDate?: string
  pdf?: {
    url: string
    size: number // in bytes
  }
  coverImage?: string
  thumbnail?: string
  citations: number
  downloads: number
  views: number
  featured?: boolean
  peerReviewed: boolean
  openAccess: boolean
  license?: 'CC-BY' | 'CC-BY-SA' | 'CC-BY-NC' | 'CC-BY-ND' | 'CC-BY-NC-SA' | 'CC-BY-NC-ND' | 'CC-0'
  subjects: string[]
  categories: string[]
  references?: string[]
  readingTime: number // in minutes
  updatedAt: string
  createdAt: string
}

export interface PublicationCard {
  id: string
  slug: string
  title: string
  authors: Author[]
  abstract: string
  thumbnail?: string
  volume: number
  issue: number
  publicationDate: string
  featured?: boolean
  peerReviewed: boolean
  openAccess: boolean
  citations: number
  downloads: number
}

export interface SearchFilters {
  volume?: number
  issue?: number
  year?: number
  authors?: string[]
  subjects?: string[]
  categories?: string[]
  country?: string
  institution?: string
  publicationType?: 'article' | 'review' | 'commentary'
  openAccess?: boolean
  peerReviewed?: boolean
  citationRange?: {
    min: number
    max: number
  }
  doiAvailable?: boolean
  language?: string[]
  sortBy?: 'newest' | 'oldest' | 'mostViewed' | 'mostDownloaded' | 'mostCited' | 'alphabetical' | 'recentlyUpdated'
  pageSize?: number
  page?: number
}

export interface Volume {
  number: number
  year: number
  issueCount: number
  articleCount: number
  publishedDate: string
  featured?: boolean
}

export interface Subject {
  id: string
  name: string
  slug: string
  description?: string
  articleCount: number
  icon?: string
}

export interface TrendingPublication {
  publication: PublicationCard
  metric: 'downloads' | 'views' | 'citations'
  value: number
  trend?: 'up' | 'down' | 'stable'
  change?: number // percentage change
}

export interface PaginationMeta {
  total: number
  page: number
  pageSize: number
  pages: number
  hasNextPage: boolean
  hasPreviousPage: boolean
}

export interface PublicationSearchResult {
  publications: PublicationCard[]
  pagination: PaginationMeta
  filters: SearchFilters
  totalTime?: number
}

export interface Citation {
  style: 'apa' | 'mla' | 'chicago' | 'harvard' | 'ieee' | 'bluebook' | 'bibtex' | 'ris'
  text: string
}

export interface PublicationStatistics {
  totalVolumes: number
  totalIssues: number
  totalArticles: number
  totalAuthors: number
  totalCountries: number
  totalInstitutions: number
  totalDownloads: number
  totalViews: number
  totalDOIs: number
  totalPeerReviewers: number
  averageCitationsPerArticle: number
}

export interface PublicationMetadata {
  volume: number
  issue: number
  pages?: string
  doi?: string
  issn?: string
  eissn?: string
  language: string
  publicationDate: string
  receivedDate?: string
  acceptedDate?: string
  publishedDate?: string
}

export interface HighwirePressTags {
  citation_title: string
  citation_author: string[]
  citation_publication_date: string
  citation_pdf_url?: string
  citation_journal_title: string
  citation_doi?: string
  citation_volume: string
  citation_issue: string
  citation_issn: string
  citation_firstpage?: string
  citation_lastpage?: string
  citation_language: string
  citation_keywords: string[]
  citation_publisher: string
  citation_abstract_html_url: string
  citation_fulltext_html_url?: string
}

export interface DublinCoreMetadata {
  title: string
  creator: string[]
  subject: string[]
  description: string
  publisher: string
  contributor?: string[]
  date: string
  type: string
  format: string
  identifier: string
  source: string
  language: string
  coverage?: string
  rights: string
}

export interface ScholarArticleSchema {
  '@context': string
  '@type': 'ScholarlyArticle'
  headline: string
  description: string
  image?: string
  datePublished: string
  dateModified: string
  author: Array<{
    '@type': 'Person'
    name: string
    email?: string
    affiliation?: {
      '@type': 'Organization'
      name: string
      url?: string
    }
  }>
  publisher: {
    '@type': 'Organization'
    name: string
    logo?: {
      '@type': 'ImageObject'
      url: string
    }
  }
  mainEntity?: {
    '@type': 'Article'
    name: string
    url: string
  }
  isAccessibleForFree?: boolean
  keywords: string[]
  inLanguage: string
  isPartOf?: {
    '@type': 'PublicationVolume'
    name: string
    volumeNumber: number
    issueNumber?: number
  }
  identifier?: {
    '@type': 'PropertyValue'
    propertyID: 'DOI'
    value: string
  }
}
