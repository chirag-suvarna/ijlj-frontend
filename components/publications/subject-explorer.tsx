'use client'

import Link from 'next/link'
import type { Subject } from '@/types/publication'

interface SubjectExplorerProps {
  subjects: Subject[]
  onSelectSubject?: (subjectId: string) => void
}

export function SubjectExplorer({
  subjects,
  onSelectSubject,
}: SubjectExplorerProps) {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">
          Research Areas
        </h2>
        <p className="mt-2 text-muted-foreground">
          Explore publications across {subjects.length} subject areas
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {subjects.map((subject) => (
          <button
            key={subject.id}
            onClick={() => onSelectSubject?.(subject.id)}
            className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 text-left transition-all duration-300 hover:border-primary hover:shadow-lg"
          >
            {/* Background accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Content */}
            <div className="relative space-y-2">
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                {subject.name}
              </h3>
              {subject.description && (
                <p className="line-clamp-2 text-sm text-muted-foreground">
                  {subject.description}
                </p>
              )}
              <p className="text-xs font-medium text-primary">
                {subject.articleCount} article{subject.articleCount !== 1 ? 's' : ''}
              </p>
            </div>

            {/* Arrow indicator */}
            <div className="mt-4 inline-flex items-center text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
              Explore →
            </div>
          </button>
        ))}
      </div>

      {/* Browse All Link */}
      <div className="flex justify-center pt-4">
        <Link
          href="/publications/subjects"
          className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 font-medium text-foreground transition-colors hover:bg-muted"
        >
          Browse All Subjects →
        </Link>
      </div>
    </section>
  )
}
