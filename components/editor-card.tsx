import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'

interface EditorCardProps {
  name: string
  title: string
  affiliation: string
  expertise: string[]
  bio: string
  image?: string
  email?: string
}

export function EditorCard({
  name,
  title,
  affiliation,
  expertise,
  bio,
  image,
  email,
}: EditorCardProps) {
  return (
    <Card className="h-full flex flex-col text-center">
      <CardContent className="flex-1">
        {image && (
          <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center overflow-hidden">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <h3 className="text-heading font-semibold text-foreground mb-1">
          {name}
        </h3>

        <p className="text-body-small text-accent font-medium mb-1">
          {title}
        </p>

        <p className="text-body-small text-muted-foreground mb-3">
          {affiliation}
        </p>

        <p className="text-body text-foreground mb-3 leading-relaxed">
          {bio}
        </p>

        <div className="flex flex-wrap gap-2 justify-center mb-3">
          {expertise.map((exp) => (
            <Badge key={exp} variant="muted" size="sm">
              {exp}
            </Badge>
          ))}
        </div>

        {email && (
          <a
            href={`mailto:${email}`}
            className="text-primary hover:underline text-body-small"
          >
            Contact
          </a>
        )}
      </CardContent>
    </Card>
  )
}
