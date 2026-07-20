import { Section, SectionHeader, SectionGrid } from '@/components/ui/section'
import { EditorCard } from '@/components/editor-card'

interface Editor {
  name: string
  title: string
  affiliation: string
  expertise: string[]
  bio: string
  email?: string
}

interface EditorsSectionProps {
  editors: Editor[]
}

export function EditorsSection({ editors }: EditorsSectionProps) {
  return (
    <Section variant="alt">
      <SectionHeader
        subtitle="Editorial Leadership"
        title="Meet Our Editors"
        description="Our editorial team comprises leading legal scholars from around the world"
      />

      <SectionGrid cols={3} gap="lg">
        {editors.map((editor, index) => (
          <EditorCard key={index} {...editor} />
        ))}
      </SectionGrid>
    </Section>
  )
}
