import { Section, SectionHeader, SectionGrid } from '@/components/ui/section'
import { PublicationCard } from '@/components/publication-card'

interface FeaturedArticle {
  title: string
  authors: string[]
  category: string
  date: string
  abstract: string
  doi?: string
  citations?: number
  featured?: boolean
}

interface FeaturedArticlesSectionProps {
  articles: FeaturedArticle[]
}

export function FeaturedArticlesSection({ articles }: FeaturedArticlesSectionProps) {
  return (
    <Section variant="alt">
      <SectionHeader
        subtitle="Latest Research"
        title="Featured Articles"
        description="Discover our most impactful recent publications and trending research"
      />

      <SectionGrid cols={3} gap="lg">
        {articles.map((article, index) => (
          <PublicationCard key={index} {...article} />
        ))}
      </SectionGrid>

      <div className="text-center mt-12">
        <a
          href="/articles"
          className="text-primary font-semibold hover:underline text-body"
        >
          View all publications →
        </a>
      </div>
    </Section>
  )
}
