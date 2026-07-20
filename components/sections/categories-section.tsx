import { Section, SectionHeader, SectionGrid } from '@/components/ui/section'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface CategoryProps {
  name: string
  description: string
  count: number
  icon: string
}

interface CategoriesSectionProps {
  categories: CategoryProps[]
}

export function CategoriesSection({ categories }: CategoriesSectionProps) {
  return (
    <Section>
      <SectionHeader
        subtitle="Research Areas"
        title="Research Categories"
        description="Browse our comprehensive collection of legal research across all major practice areas"
      />

      <SectionGrid cols={3} gap="lg">
        {categories.map((category, index) => (
          <Card
            key={index}
            className="group cursor-pointer hover:shadow-card-hover transition-all duration-300"
          >
            <CardContent>
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{category.icon}</div>
                <Badge variant="secondary" size="sm">
                  {category.count}
                </Badge>
              </div>

              <h3 className="text-heading font-semibold mb-2 group-hover:text-primary transition-colors">
                {category.name}
              </h3>

              <p className="text-body text-muted-foreground mb-4">
                {category.description}
              </p>

              <a
                href={`/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-primary font-medium hover:underline inline-flex items-center gap-2"
              >
                Browse Articles
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </CardContent>
          </Card>
        ))}
      </SectionGrid>
    </Section>
  )
}
