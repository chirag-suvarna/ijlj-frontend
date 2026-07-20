import { PublicationSearch } from './search'
import { HERO_CONTENT } from '@/config/publications-config'

interface PublicationsHeroProps {
  onSearch?: (query: string) => void
  isLoading?: boolean
}

export function PublicationsHero({
  onSearch,
  isLoading = false,
}: PublicationsHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background py-12 md:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            {HERO_CONTENT.title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            {HERO_CONTENT.subtitle}
          </p>
        </div>

        {/* Search Bar */}
        <div className="mx-auto mt-10 max-w-2xl">
          <PublicationSearch
            onSearch={onSearch}
            placeholder={HERO_CONTENT.searchPlaceholder}
            isLoading={isLoading}
          />
        </div>

        {/* Statistics */}
        <div className="mx-auto mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3">
          {HERO_CONTENT.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-primary sm:text-3xl md:text-4xl">
                {stat.value.toLocaleString()}
              </div>
              <p className="mt-1 text-sm text-muted-foreground sm:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
