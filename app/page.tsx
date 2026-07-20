import { HeroSection } from '@/components/sections/hero-section'
import { StatsSection } from '@/components/sections/stats-section'
import { CategoriesSection } from '@/components/sections/categories-section'
import { FeaturedArticlesSection } from '@/components/sections/featured-articles-section'
import { FeaturesSection } from '@/components/sections/features-section'
import { EditorsSection } from '@/components/sections/editors-section'
import { FAQSection } from '@/components/sections/faq-section'
import { NewsletterSection } from '@/components/sections/newsletter-section'
import { Footer } from '@/components/footer'
import { homepageConfig } from '@/config/homepage-config'

export default function Home() {
  return (
    <>
      <HeroSection {...homepageConfig.hero} />
      <StatsSection stats={homepageConfig.stats} />
      <CategoriesSection categories={homepageConfig.categories} />
      <FeaturedArticlesSection articles={homepageConfig.featuredArticles} />
      <FeaturesSection features={homepageConfig.features} />
      <EditorsSection editors={homepageConfig.editors} />
      <FAQSection faqs={homepageConfig.faqs} />
      <NewsletterSection {...homepageConfig.newsletter} />
      <Footer config={homepageConfig.footer} />
    </>
  )
}
