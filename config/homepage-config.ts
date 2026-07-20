export const homepageConfig = {
  hero: {
    headline: 'Advancing Legal Scholarship',
    subheadline: 'Publishing cutting-edge research in law, jurisprudence, and legal studies',
    description: 'IJLJ is a premier peer-reviewed open-access journal committed to publishing rigorous, innovative legal scholarship that shapes the future of law.',
    ctaPrimary: { label: 'Submit Your Research', href: '/submit' },
    ctaSecondary: { label: 'Browse Issues', href: '/issues' },
  },

  stats: [
    { label: 'Published Articles', value: '1,200+' },
    { label: 'Active Researchers', value: '8,500+' },
    { label: 'Countries', value: '140+' },
    { label: 'Average Citations', value: '12.4' },
  ],

  categories: [
    {
      name: 'Constitutional Law',
      description: 'Fundamental principles, governance structures, and constitutional rights.',
      count: 245,
      icon: '📜',
    },
    {
      name: 'International Law',
      description: 'Treaties, diplomacy, cross-border disputes, and global governance.',
      count: 198,
      icon: '🌍',
    },
    {
      name: 'Criminal Law',
      description: 'Offenses, punishment, procedure, and correctional systems.',
      count: 187,
      icon: '⚖️',
    },
    {
      name: 'Commercial Law',
      description: 'Business transactions, contracts, corporate governance, and trade.',
      count: 276,
      icon: '💼',
    },
    {
      name: 'Environmental Law',
      description: 'Sustainability, conservation, climate, and natural resource protection.',
      count: 156,
      icon: '🌱',
    },
    {
      name: 'Intellectual Property',
      description: 'Patents, trademarks, copyrights, and creative rights.',
      count: 142,
      icon: '🔐',
    },
  ],

  features: [
    {
      title: 'Rigorous Peer Review',
      description: 'Every submission undergoes rigorous blind peer review by leading experts in the field.',
      icon: '✓',
    },
    {
      title: 'Open Access',
      description: 'All research is freely accessible to readers worldwide, maximizing impact and citations.',
      icon: '🔓',
    },
    {
      title: 'Rapid Publication',
      description: 'From submission to publication in as little as 90 days through our streamlined process.',
      icon: '⚡',
    },
    {
      title: 'Global Recognition',
      description: 'Indexed in Google Scholar, Scopus, and Web of Science for maximum visibility.',
      icon: '🌟',
    },
    {
      title: 'Digital Tools',
      description: 'Interactive articles, supplementary materials, and advanced search capabilities.',
      icon: '🔍',
    },
    {
      title: 'Community',
      description: 'Join a global network of leading legal scholars and researchers.',
      icon: '🤝',
    },
  ],

  featuredArticles: [
    {
      title: 'The Evolution of Digital Rights in the 21st Century',
      authors: ['Dr. Sarah Johnson', 'Prof. Michael Chen'],
      category: 'Intellectual Property',
      date: '2024-01-15',
      abstract: 'This comprehensive analysis examines the transformation of digital rights frameworks...',
      doi: '10.1234/ijlj.2024.001',
      citations: 28,
      featured: true,
    },
    {
      title: 'Cross-Border Environmental Liability: A Comparative Study',
      authors: ['Prof. Elena Rodriguez'],
      category: 'Environmental Law',
      date: '2024-01-10',
      abstract: 'Exploring international approaches to environmental liability and their effectiveness...',
      doi: '10.1234/ijlj.2024.002',
      citations: 15,
    },
    {
      title: 'Artificial Intelligence and Criminal Responsibility',
      authors: ['Dr. James Patterson', 'Dr. Yuki Tanaka'],
      category: 'Criminal Law',
      date: '2024-01-05',
      abstract: 'Addressing the legal implications of autonomous systems in criminal jurisprudence...',
      doi: '10.1234/ijlj.2024.003',
      citations: 42,
      featured: true,
    },
  ],

  editors: [
    {
      name: 'Prof. Elizabeth Mitchell',
      title: 'Editor-in-Chief',
      affiliation: 'Oxford University, Faculty of Law',
      expertise: ['Constitutional Law', 'Comparative Law'],
      bio: 'Leading expert in constitutional governance with 25 years of academic experience.',
      email: 'e.mitchell@law.ox.ac.uk',
    },
    {
      name: 'Dr. Marcus Thompson',
      title: 'Managing Editor',
      affiliation: 'Harvard Law School',
      expertise: ['International Law', 'Treaties'],
      bio: 'Specializing in international legal frameworks and diplomatic law.',
      email: 'm.thompson@harvard.edu',
    },
    {
      name: 'Prof. Amira Farah',
      title: 'Associate Editor',
      affiliation: 'Cairo University',
      expertise: ['Criminal Law', 'Justice Systems'],
      bio: 'Expert in comparative criminal law across jurisdictions.',
      email: 'a.farah@cairo.edu.eg',
    },
  ],

  faqs: [
    {
      question: 'How long does the review process take?',
      answer: 'Our standard review process takes 30-45 days. We aim to provide authors with initial feedback quickly, allowing for revisions and resubmissions within our 90-day publication target.',
    },
    {
      question: 'Is there a submission fee?',
      answer: 'No, we do not charge submission fees. IJLJ is fully open-access and operates through institutional support and grants.',
    },
    {
      question: 'Can I submit work that has been previously published?',
      answer: 'We only accept original, unpublished research. Previously published work, including preprints, requires explicit disclosure.',
    },
    {
      question: 'What is your acceptance rate?',
      answer: 'Our acceptance rate is approximately 18%, maintaining our high quality standards. We prioritize originality, rigor, and significance.',
    },
    {
      question: 'How do I contact the editors?',
      answer: 'You can reach our editorial team at editors@ijlj.org or visit our Contact page for department-specific inquiries.',
    },
    {
      question: 'Do you offer author support services?',
      answer: 'Yes! We provide writing guidance, formatting assistance, and feedback throughout the submission process.',
    },
  ],

  newsletter: {
    title: 'Stay Updated',
    description: 'Subscribe to receive notifications about new publications, special issues, and journal updates.',
    placeholder: 'Enter your email address',
    buttonLabel: 'Subscribe',
  },

  footer: {
    about: 'IJLJ is a premier peer-reviewed open-access journal dedicated to publishing innovative legal research and advancing scholarship across all domains of law.',
    quickLinks: [
      { label: 'About Us', href: '/about' },
      { label: 'Submit Article', href: '/submit' },
      { label: 'Browse Issues', href: '/issues' },
      { label: 'Contact', href: '/contact' },
    ],
    resources: [
      { label: 'Author Guidelines', href: '/guidelines' },
      { label: 'Editorial Policies', href: '/policies' },
      { label: 'Open Access Statement', href: '/open-access' },
      { label: 'Accessibility', href: '/accessibility' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Use', href: '/terms' },
      { label: 'Copyright', href: '/copyright' },
    ],
    social: [
      { platform: 'Twitter', url: 'https://twitter.com/ijljjournal' },
      { platform: 'LinkedIn', url: 'https://linkedin.com/company/ijlj' },
      { platform: 'ResearchGate', url: 'https://researchgate.net/institution/IJLJ' },
    ],
  },
}
