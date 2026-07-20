export function generateAboutPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AboutPage',
        name: 'About IJLJ',
        description: 'Learn about the International Journal of Legal Jurisprudence',
        url: 'https://ijlj.org/about',
        mainEntity: {
          '@id': 'https://ijlj.org',
        },
      },
      {
        '@type': 'Organization',
        '@id': 'https://ijlj.org',
        name: 'International Journal of Legal Jurisprudence',
        url: 'https://ijlj.org',
        logo: 'https://ijlj.org/logo.png',
        description: 'A premier peer-reviewed open-access journal publishing cutting-edge legal research and scholarship across all domains of law.',
        sameAs: [
          'https://twitter.com/ijljjournal',
          'https://linkedin.com/company/ijlj',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'Editorial',
          email: 'editors@ijlj.org',
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How long does the review process take?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Our standard review process takes 30-45 days for initial peer review. Combined with potential revisions, most articles reach a decision within 60-90 days total.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is there a submission fee?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No, IJLJ does not charge submission or publication fees. We are fully open-access and supported by institutional grants and partnerships.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is your acceptance rate?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Our acceptance rate is approximately 18%, maintaining rigorous quality standards.',
            },
          },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://ijlj.org',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'About',
            item: 'https://ijlj.org/about',
          },
        ],
      },
    ],
  }
}
