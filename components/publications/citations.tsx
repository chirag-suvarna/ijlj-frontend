'use client'

import { useState } from 'react'
import { CITATION_STYLES } from '@/config/publications-config'
import type { Publication } from '@/types/publication'
import { generateCitation, copyCitationToClipboard, downloadCitation } from '@/lib/citations'

interface CitationsProps {
  publication: Publication
}

export function Citations({ publication }: CitationsProps) {
  const [selectedStyle, setSelectedStyle] = useState<'apa' | 'mla' | 'chicago' | 'harvard' | 'ieee' | 'bluebook' | 'bibtex' | 'ris' | 'endnote'>('apa')
  const [copied, setCopied] = useState(false)

  const citation = generateCitation(publication, selectedStyle)

  const handleCopy = async () => {
    const success = await copyCitationToClipboard(citation)
    if (success) {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handleDownload = (format: 'txt' | 'bibtex' | 'ris' | 'endnote') => {
    downloadCitation(citation, publication.slug, format)
  }

  return (
    <div className="space-y-4 rounded-lg border border-border bg-card p-6">
      <div>
        <h3 className="text-lg font-semibold text-foreground">Cite This Article</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Use the citation below to reference this publication
        </p>
      </div>

      {/* Citation Style Selector */}
      <div className="space-y-2">
        <label htmlFor="citation-style" className="text-sm font-medium text-foreground">
          Citation Style
        </label>
        <select
          id="citation-style"
          value={selectedStyle}
          onChange={(e) => setSelectedStyle(e.target.value as typeof selectedStyle)}
          className="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10"
        >
          {CITATION_STYLES.map((style) => (
            <option key={style.value} value={style.value}>
              {style.label}
            </option>
          ))}
        </select>
      </div>

      {/* Citation Text */}
      <div className="space-y-2">
        <label htmlFor="citation-text" className="text-sm font-medium text-foreground">
          {CITATION_STYLES.find((s) => s.value === selectedStyle)?.label}
        </label>
        <div className="relative">
          <textarea
            id="citation-text"
            readOnly
            value={citation}
            className="w-full rounded-lg border border-border bg-muted/50 p-3 font-mono text-sm text-foreground"
            rows={4}
          />
          <button
            onClick={handleCopy}
            className="absolute top-2 right-2 rounded px-2 py-1 text-xs font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            title="Copy citation"
          >
            {copied ? '✓ Copied!' : 'Copy'}
          </button>
        </div>
      </div>

      {/* Download Options */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-foreground">Export Citation</p>
        <div className="flex flex-wrap gap-2">
          {[
            { format: 'txt', label: 'TXT' },
            { format: 'bibtex', label: 'BibTeX' },
            { format: 'ris', label: 'RIS' },
            { format: 'endnote', label: 'EndNote' },
          ].map((option) => (
            <button
              key={option.format}
              onClick={() => handleDownload(option.format as 'txt' | 'bibtex' | 'ris' | 'endnote')}
              className="rounded border border-border bg-background px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              title={`Download as ${option.label}`}
            >
              Download {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
