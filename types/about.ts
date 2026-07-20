export interface TimelineItem {
  year: number
  title: string
  description: string
  icon?: string
}

export interface Feature {
  title: string
  description: string
  icon: string
  link?: string
}

export interface EditorialMember {
  name: string
  title: string
  affiliation: string
  country: string
  expertise: string[]
  bio: string
  avatar?: string
  email?: string
}

export interface WorkflowStep {
  step: number
  title: string
  description: string
  icon: string
}

export interface EthicsCard {
  title: string
  description: string
  icon: string
}

export interface IndexingPlatform {
  name: string
  logo: string
  url: string
  badge?: string
}

export interface StatItem {
  value: string
  label: string
  suffix?: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface AboutConfig {
  hero: {
    headline: string
    subheadline: string
    description: string
    ctaPrimary: { label: string; href: string }
    ctaSecondary: { label: string; href: string }
  }
  story: {
    title: string
    subtitle: string
    description: string
    timeline: TimelineItem[]
  }
  mission: {
    mission: string
    vision: string
    values: Array<{
      title: string
      description: string
      icon: string
    }>
  }
  features: Feature[]
  editorialPhilosophy: {
    title: string
    content: string
    highlights: string[]
  }
  statistics: StatItem[]
  editorialBoard: {
    title: string
    description: string
    featured: EditorialMember[]
    link: { label: string; href: string }
  }
  workflow: {
    title: string
    description: string
    steps: WorkflowStep[]
  }
  ethics: {
    title: string
    description: string
    cards: EthicsCard[]
  }
  indexing: {
    title: string
    description: string
    platforms: IndexingPlatform[]
  }
  globalReach: {
    title: string
    description: string
    stats: Array<{
      value: string
      label: string
    }>
  }
  authorBenefits: {
    title: string
    description: string
    benefits: Array<{
      title: string
      description: string
      icon: string
    }>
  }
  faq: {
    title: string
    description: string
    items: FAQItem[]
  }
  cta: {
    headline: string
    description: string
    buttonLabel: string
    buttonHref: string
  }
}
