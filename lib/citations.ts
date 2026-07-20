/**
 * Citations Generator - IJLJ
 * Generates citations in multiple citation styles for publications
 */

import type { Publication, Citation } from '@/types/publication'

/**
 * Generate APA citation
 * Format: Author(s). (Year). Title of article. Journal Title, Volume(Issue), pages.
 */
export function generateAPACitation(publication: Publication): string {
  const authors = publication.authors
    .map((a) => a.name)
    .join(', ')
  const year = new Date(publication.publicationDate).getFullYear()
  const pages = publication.pages ? `pp. ${publication.pages.start}-${publication.pages.end}` : ''
  const doi = publication.doi ? `https://doi.org/${publication.doi}` : ''

  return `${authors} (${year}). ${publication.title}. International Journal of Legal Jurisprudence, ${publication.volume}(${publication.issue}), ${pages}. ${doi}`
}

/**
 * Generate MLA citation
 * Format: Author(s). "Title of Article." Journal Title, vol. #, issue #, Year, pages. DOI.
 */
export function generateMLACitation(publication: Publication): string {
  const authors = publication.authors
    .map((a) => a.name)
    .join(', and ')
  const year = new Date(publication.publicationDate).getFullYear()
  const pages = publication.pages ? `${publication.pages.start}-${publication.pages.end}` : ''
  const doi = publication.doi ? `doi: ${publication.doi}` : ''

  return `${authors}. "${publication.title}." International Journal of Legal Jurisprudence, vol. ${publication.volume}, no. ${publication.issue}, ${year}, pp. ${pages}. ${doi}`
}

/**
 * Generate Chicago citation (notes and bibliography)
 */
export function generateChicagoCitation(publication: Publication): string {
  const authors = publication.authors
    .map((a) => a.name)
    .join(', ')
  const year = new Date(publication.publicationDate).getFullYear()
  const pages = publication.pages ? `${publication.pages.start}-${publication.pages.end}` : ''

  return `${authors}. "${publication.title}." International Journal of Legal Jurisprudence ${publication.volume}, no. ${publication.issue} (${year}): ${pages}.`
}

/**
 * Generate Harvard citation
 */
export function generateHarvardCitation(publication: Publication): string {
  const authors = publication.authors
    .map((a) => a.name)
    .join(', ')
  const year = new Date(publication.publicationDate).getFullYear()
  const pages = publication.pages ? `pp.${publication.pages.start}-${publication.pages.end}` : ''

  return `${authors}, ${year}. ${publication.title}. International Journal of Legal Jurisprudence, ${publication.volume}(${publication.issue}), ${pages}.`
}

/**
 * Generate IEEE citation
 */
export function generateIEEECitation(publication: Publication): string {
  const authorInitials = publication.authors
    .map((a) => {
      const parts = a.name.split(' ')
      return `${parts[parts.length - 1]}, ${parts[0]?.[0] || ''}`.trim()
    })
    .join(', ')
  const year = new Date(publication.publicationDate).getFullYear()
  const pages = publication.pages ? `pp. ${publication.pages.start}-${publication.pages.end}` : ''

  return `[${publication.volume}] ${authorInitials}, "${publication.title}," International Journal of Legal Jurisprudence, vol. ${publication.volume}, no. ${publication.issue}, ${pages}, ${year}.`
}

/**
 * Generate Bluebook citation (law review)
 */
export function generateBlueBookCitation(publication: Publication): string {
  const authors = publication.authors
    .map((a) => a.name)
    .join(' & ')
  const year = new Date(publication.publicationDate).getFullYear()
  const pages = publication.pages ? `${publication.pages.start}-${publication.pages.end}` : ''
  const doi = publication.doi ? `, https://doi.org/${publication.doi}` : ''

  return `${authors}, ${publication.title}, ${publication.volume} INT'L J.L. JURIS. ${publication.pages?.start} (${year})${doi}.`
}

/**
 * Generate BibTeX citation
 */
export function generateBibTeXCitation(publication: Publication): string {
  const key = publication.slug.toUpperCase().replace(/-/g, '')
  const authors = publication.authors
    .map((a) => a.name)
    .join(' and ')
  const year = new Date(publication.publicationDate).getFullYear()
  const pages = publication.pages ? `${publication.pages.start}--${publication.pages.end}` : ''

  return `@article{${key},
  author = {${authors}},
  title = {${publication.title}},
  journal = {International Journal of Legal Jurisprudence},
  volume = {${publication.volume}},
  issue = {${publication.issue}},
  pages = {${pages}},
  year = {${year}}${publication.doi ? `,\n  doi = {${publication.doi}}` : ''}
}`
}

/**
 * Generate RIS citation
 */
export function generateRISCitation(publication: Publication): string {
  const year = new Date(publication.publicationDate).getFullYear()
  const authors = publication.authors.map((a) => `AU  - ${a.name}`).join('\n')

  let ris = `TY  - JOUR
${authors}
TI  - ${publication.title}
JF  - International Journal of Legal Jurisprudence
VL  - ${publication.volume}
IS  - ${publication.issue}
PY  - ${year}`

  if (publication.pages) {
    ris += `\nSP  - ${publication.pages.start}
EP  - ${publication.pages.end}`
  }

  if (publication.doi) {
    ris += `\nDO  - ${publication.doi}`
  }

  ris += '\nER  -'

  return ris
}

/**
 * Generate EndNote citation
 */
export function generateEndNoteCitation(publication: Publication): string {
  const year = new Date(publication.publicationDate).getFullYear()
  const authors = publication.authors.map((a) => a.name).join('; ')

  return `%0 Journal Article
%A ${authors}
%T ${publication.title}
%J International Journal of Legal Jurisprudence
%V ${publication.volume}
%N ${publication.issue}
%D ${year}${publication.pages ? `\n%P ${publication.pages.start}-${publication.pages.end}` : ''}${publication.doi ? `\n%R ${publication.doi}` : ''}`
}

/**
 * Generate citation in specified format
 */
export function generateCitation(
  publication: Publication,
  style: 'apa' | 'mla' | 'chicago' | 'harvard' | 'ieee' | 'bluebook' | 'bibtex' | 'ris' | 'endnote'
): string {
  switch (style) {
    case 'apa':
      return generateAPACitation(publication)
    case 'mla':
      return generateMLACitation(publication)
    case 'chicago':
      return generateChicagoCitation(publication)
    case 'harvard':
      return generateHarvardCitation(publication)
    case 'ieee':
      return generateIEEECitation(publication)
    case 'bluebook':
      return generateBlueBookCitation(publication)
    case 'bibtex':
      return generateBibTeXCitation(publication)
    case 'ris':
      return generateRISCitation(publication)
    case 'endnote':
      return generateEndNoteCitation(publication)
    default:
      return generateAPACitation(publication)
  }
}

/**
 * Generate all citations for a publication
 */
export function generateAllCitations(publication: Publication): Citation[] {
  const styles: Array<'apa' | 'mla' | 'chicago' | 'harvard' | 'ieee' | 'bluebook' | 'bibtex' | 'ris' | 'endnote'> = [
    'apa',
    'mla',
    'chicago',
    'harvard',
    'ieee',
    'bluebook',
    'bibtex',
    'ris',
    'endnote',
  ]

  return styles.map((style) => ({
    style,
    text: generateCitation(publication, style),
  }))
}

/**
 * Copy citation to clipboard
 */
export async function copyCitationToClipboard(citation: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(citation)
    return true
  } catch {
    return false
  }
}

/**
 * Download citation as file
 */
export function downloadCitation(
  citation: string,
  filename: string,
  format: 'txt' | 'bibtex' | 'ris' | 'endnote' = 'txt'
): void {
  const element = document.createElement('a')
  element.setAttribute(
    'href',
    `data:text/plain;charset=utf-8,${encodeURIComponent(citation)}`
  )
  element.setAttribute('download', `${filename}.${format}`)
  element.style.display = 'none'
  document.body.appendChild(element)
  element.click()
  document.body.removeChild(element)
}
