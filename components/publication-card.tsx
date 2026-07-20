import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'

interface PublicationCardProps {
  title: string
  authors: string[]
  category: string
  date: string
  abstract: string
  doi?: string
  citations?: number
  featured?: boolean
}

export function PublicationCard({
  title,
  authors,
  category,
  date,
  abstract,
  doi,
  citations,
  featured,
}: PublicationCardProps) {
  return (
    <Card variant={featured ? 'elevated' : 'default'} className="h-full flex flex-col">
      <CardContent className="flex-1 pb-0">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex-1">
            <h3 className="text-heading font-semibold text-foreground mb-2 line-clamp-2 hover:text-primary transition-colors cursor-pointer">
              {title}
            </h3>
          </div>
          {featured && <Badge variant="accent" size="sm">Featured</Badge>}
        </div>

        <div className="mb-3 flex flex-wrap gap-2">
          <Badge variant="secondary" size="sm">
            {category}
          </Badge>
          <Badge variant="muted" size="sm">
            {date}
          </Badge>
        </div>

        <div className="mb-3">
          <p className="text-body-small text-muted-foreground line-clamp-2">
            {authors.join(', ')}
          </p>
        </div>

        <p className="text-body text-foreground line-clamp-3 mb-3">
          {abstract}
        </p>

        {(doi || citations !== undefined) && (
          <div className="pt-3 border-t border-border flex items-center justify-between text-body-small">
            {doi && (
              <a
                href={`https://doi.org/${doi}`}
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                DOI: {doi}
              </a>
            )}
            {citations !== undefined && (
              <span className="text-muted-foreground">
                {citations} citations
              </span>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
