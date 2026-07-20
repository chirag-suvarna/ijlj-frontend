'use client'

import type { Volume } from '@/types/publication'

interface VolumeExplorerProps {
  volumes: Volume[]
  onSelectVolume?: (volumeNumber: number) => void
}

export function VolumeExplorer({
  volumes,
  onSelectVolume,
}: VolumeExplorerProps) {
  return (
    <section className="rounded-lg border border-border bg-card p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-foreground">Journal Volumes</h2>
        <p className="mt-2 text-muted-foreground">
          Browse published volumes and issues
        </p>
      </div>

      <div className="space-y-4">
        {volumes.map((volume, index) => (
          <div
            key={`vol-${volume.number}`}
            className="flex items-center gap-4"
          >
            {/* Timeline connector */}
            <div className="flex flex-col items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-background text-sm font-bold text-primary">
                {volume.number}
              </div>
              {index !== volumes.length - 1 && (
                <div className="mt-2 h-8 w-1 bg-border" />
              )}
            </div>

            {/* Volume Content */}
            <button
              onClick={() => onSelectVolume?.(volume.number)}
              className="flex-1 rounded-lg border border-border bg-background p-4 text-left transition-colors hover:bg-muted hover:border-primary"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-foreground">
                    Volume {volume.number} ({volume.year})
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {volume.issueCount} issue{volume.issueCount !== 1 ? 's' : ''} • {volume.articleCount} article{volume.articleCount !== 1 ? 's' : ''}
                  </p>
                </div>
                {volume.featured && (
                  <span className="rounded-full bg-secondary/20 px-2 py-1 text-xs font-medium text-secondary">
                    Latest
                  </span>
                )}
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                Published: {new Date(volume.publishedDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
