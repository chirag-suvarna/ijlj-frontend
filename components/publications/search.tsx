'use client'

import { useState } from 'react'

interface PublicationSearchProps {
  onSearch?: (query: string) => void
  placeholder?: string
  isLoading?: boolean
}

export function PublicationSearch({
  onSearch,
  placeholder = 'Search by title, author, DOI, keywords...',
  isLoading = false,
}: PublicationSearchProps) {
  const [query, setQuery] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch?.(query)
  }

  const handleClear = () => {
    setQuery('')
    onSearch?.('')
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative flex items-center">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          disabled={isLoading}
          className="w-full rounded-lg border border-border bg-background px-4 py-3 pl-4 pr-12 text-foreground placeholder-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 disabled:opacity-50"
          aria-label="Search publications"
        />
        <div className="absolute right-3 flex items-center gap-2">
          {query && (
            <button
              type="button"
              onClick={handleClear}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
          <button
            type="submit"
            disabled={isLoading}
            className="text-muted-foreground hover:text-primary transition-colors disabled:opacity-50"
            aria-label="Submit search"
          >
            🔍
          </button>
        </div>
      </div>
    </form>
  )
}
