import React from 'react'
import { generateAboutPageSchema } from '@/lib/schema'
import { aboutConfig } from '@/config/about-config'
import { homepageConfig } from '@/config/homepage-config'
import { HeroSection } from '@/components/about/hero-section'
import { StoryTimeline } from '@/components/about/story-timeline'
import { MissionVisionSection } from '@/components/about/mission-vision-section'
import { FeaturesGrid } from '@/components/about/features-grid'
import { EditorialPhilosophy } from '@/components/about/editorial-philosophy'
import { StatisticsSection } from '@/components/about/statistics-section'
import { EditorialBoard } from '@/components/about/editorial-board'
import { PublishingWorkflow } from '@/components/about/publishing-workflow'
import { EthicsSection } from '@/components/about/ethics-section'
import { IndexingPlatforms } from '@/components/about/indexing-platforms'
import { GlobalReach } from '@/components/about/global-reach'
import { AuthorBenefits } from '@/components/about/author-benefits'
import { FAQSection } from '@/components/about/faq-section'
import { CTASection } from '@/components/about/cta-section'
import { Footer } from '@/components/footer'

export default function AboutPage() {
  const schema = generateAboutPageSchema()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero Section */}
      <HeroSection {...aboutConfig.hero} />

      {/* Story Timeline */}
      <StoryTimeline {...aboutConfig.story} />

      {/* Mission, Vision, Values */}
      <MissionVisionSection {...aboutConfig.mission} />

      {/* Features Grid */}
      <FeaturesGrid features={aboutConfig.features} />

      {/* Editorial Philosophy */}
      <EditorialPhilosophy {...aboutConfig.editorialPhilosophy} />

      {/* Statistics */}
      <StatisticsSection statistics={aboutConfig.statistics} />

      {/* Editorial Board */}
      <EditorialBoard {...aboutConfig.editorialBoard} />

      {/* Publishing Workflow */}
      <PublishingWorkflow {...aboutConfig.workflow} />

      {/* Ethics */}
      <EthicsSection {...aboutConfig.ethics} />

      {/* Indexing Platforms */}
      <IndexingPlatforms {...aboutConfig.indexing} />

      {/* Global Reach */}
      <GlobalReach {...aboutConfig.globalReach} />

      {/* Author Benefits */}
      <AuthorBenefits {...aboutConfig.authorBenefits} />

      {/* FAQ */}
      <FAQSection {...aboutConfig.faq} />

      {/* Final CTA */}
      <CTASection {...aboutConfig.cta} />

      {/* Footer */}
      <Footer config={homepageConfig.footer} />
    </>
  )
}
