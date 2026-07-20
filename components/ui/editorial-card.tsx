import React from 'react'
import type { EditorialMember } from '@/types/about'

interface EditorialCardProps extends EditorialMember {
  showBio?: boolean
}

export function EditorialCard({
  name,
  title,
  affiliation,
  country,
  expertise,
  bio,
  avatar,
  email,
  showBio = false,
}: EditorialCardProps) {
  return (
    <div className="bg-muted bg-opacity-30 border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      {/* Avatar placeholder */}
      <div className="w-full h-48 bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center text-4xl">
        {avatar ? (
          <img src={avatar} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="font-bold text-background">
            {name
              .split(' ')
              .map((n) => n[0])
              .join('')}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-heading font-semibold mb-1">{name}</h3>
        <p className="text-accent text-body-small font-semibold mb-1">{title}</p>
        <p className="text-body-small text-muted-foreground mb-1">{affiliation}</p>
        <p className="text-body-small text-muted-foreground mb-4">{country}</p>

        {/* Expertise tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {expertise.map((exp, idx) => (
            <span
              key={idx}
              className="bg-accent/10 text-accent text-xs font-semibold px-2 py-1 rounded"
            >
              {exp}
            </span>
          ))}
        </div>

        {/* Bio */}
        {showBio && bio && (
          <p className="text-body-small text-muted-foreground mb-4 border-t border-border pt-4">
            {bio}
          </p>
        )}

        {/* Email */}
        {email && (
          <a
            href={`mailto:${email}`}
            className="text-accent text-body-small font-semibold hover:underline"
          >
            {email}
          </a>
        )}
      </div>
    </div>
  )
}
