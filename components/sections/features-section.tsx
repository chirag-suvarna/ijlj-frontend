import { Section, SectionHeader, SectionGrid } from '@/components/ui/section'
import { Card, CardContent } from '@/components/ui/card'

interface FeatureProps {
  title: string
  description: string
  icon: string
}

interface FeaturesSectionProps {
  features: FeatureProps[]
}

export function FeaturesSection({ features }: FeaturesSectionProps) {
  return (
    <Section>
      <SectionHeader
        subtitle="Why Publish With Us"
        title="Benefits of IJLJ"
        description="Discover why leading legal scholars choose IJLJ for publishing their research"
      />

      <SectionGrid cols={3} gap="lg">
        {features.map((feature, index) => (
          <Card key={index}>
            <CardContent>
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-heading font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-body text-muted-foreground">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </SectionGrid>
    </Section>
  )
}
