'use client'

import { useState } from 'react'
import { SUBJECTS, SORT_OPTIONS, VIEW_OPTIONS } from '@/config/publications-config'
import type { SearchFilters } from '@/types/publication'

interface FiltersProps {
  onFilterChange?: (filters: SearchFilters) => void
  onViewChange?: (view: 'grid' | 'list' | 'compact') => void
  currentView?: 'grid' | 'list' | 'compact'
}

export function Filters({
  onFilterChange,
  onViewChange,
  currentView = 'grid',
}: FiltersProps) {
  const [filters, setFilters] = useState<SearchFilters>({})
  const [isExpanded, setIsExpanded] = useState(false)

  const handleFilterChange = (key: keyof SearchFilters, value: any) => {
    const updatedFilters = { ...filters, [key]: value }
    setFilters(updatedFilters)
    onFilterChange?.(updatedFilters)
  }

  const handleClearFilters = () => {
    setFilters({})
    onFilterChange?.({})
  }

  return (
    <div className="space-y-4">
      {/* Mobile Filter Toggle */}
      <div className="flex items-center justify-between lg:hidden">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
        >
          🔍 Filters
          <span className="ml-auto text-xs text-muted-foreground">
            {isExpanded ? '−' : '+'}
          </span>
        </button>
      </div>

      {/* Filters Sidebar */}
      <div
        className={`space-y-4 rounded-lg border border-border bg-card p-4 ${
          isExpanded ? 'block' : 'hidden lg:block'
        }`}
      >
        {/* View Options */}
        <div className="space-y-2">
          <p className="text-sm font-medium text-foreground">View</p>
          <div className="flex gap-2">
            {VIEW_OPTIONS.map((option) => (
              <button
                key={option.value}
                onClick={() => onViewChange?.(option.value as 'grid' | 'list' | 'compact')}
                className={`flex items-center gap-1 rounded px-2 py-1 text-xs font-medium transition-colors ${
                  currentView === option.value
                    ? 'bg-primary text-primary-foreground'
                    : 'border border-border bg-background text-foreground hover:bg-muted'
                }`}
                title={option.label}
              >
                {option.icon}
              </button>
            ))}
          </div>
        </div>

        <div className="border-t border-border pt-4" />

        {/* Sort Options */}
        <div className="space-y-2">
          <label htmlFor="sort" className="text-sm font-medium text-foreground">
            Sort By
          </label>
          <select
            id="sort"
            value={filters.sortBy || 'newest'}
            onChange={(e) =>
              handleFilterChange('sortBy', e.target.value as SearchFilters['sortBy'])
            }
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10"
          >
            {SORT_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="border-t border-border pt-4" />

        {/* Subject Filter */}
        <div className="space-y-2">
          <label htmlFor="subject" className="text-sm font-medium text-foreground">
            Subject
          </label>
          <select
            id="subject"
            multiple
            value={filters.subjects || []}
            onChange={(e) =>
              handleFilterChange(
                'subjects',
                Array.from(e.target.selectedOptions, (option) => option.value)
              )
            }
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10"
            size={Math.min(SUBJECTS.length, 5)}
          >
            {SUBJECTS.map((subject) => (
              <option key={subject.id} value={subject.name}>
                {subject.name} ({subject.articleCount})
              </option>
            ))}
          </select>
        </div>

        <div className="border-t border-border pt-4" />

        {/* Year Range */}
        <div className="space-y-2">
          <label htmlFor="year" className="text-sm font-medium text-foreground">
            Year
          </label>
          <input
            id="year"
            type="number"
            min="2020"
            max={new Date().getFullYear()}
            value={filters.year || ''}
            onChange={(e) =>
              handleFilterChange('year', e.target.value ? parseInt(e.target.value) : undefined)
            }
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10"
            placeholder="All years"
          />
        </div>

        <div className="border-t border-border pt-4" />

        {/* Checkboxes */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={filters.openAccess || false}
              onChange={(e) => handleFilterChange('openAccess', e.target.checked || undefined)}
              className="rounded border border-border"
            />
            <span className="text-sm text-foreground">Open Access Only</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={filters.peerReviewed || false}
              onChange={(e) => handleFilterChange('peerReviewed', e.target.checked || undefined)}
              className="rounded border border-border"
            />
            <span className="text-sm text-foreground">Peer Reviewed</span>
          </label>
        </div>

        {/* Clear Filters */}
        {Object.keys(filters).length > 0 && (
          <button
            onClick={handleClearFilters}
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            Clear Filters
          </button>
        )}
      </div>
    </div>
  )
}
