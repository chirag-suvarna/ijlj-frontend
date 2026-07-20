import { Section } from './ui/section'

interface FooterLink {
  label: string
  href: string
}

interface FooterSocialLink {
  platform: string
  url: string
}

interface FooterConfig {
  about: string
  quickLinks: FooterLink[]
  resources: FooterLink[]
  legal: FooterLink[]
  social: FooterSocialLink[]
}

interface FooterProps {
  config: FooterConfig
}

export function Footer({ config }: FooterProps) {
  return (
    <footer className="bg-foreground text-background">
      <Section noPadding className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-heading font-semibold mb-4">IJLJ</h3>
            <p className="text-body-small leading-relaxed text-background opacity-80">
              {config.about}
            </p>
            <div className="flex gap-4 mt-6">
              {config.social.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background opacity-60 hover:opacity-100 transition-opacity"
                  aria-label={social.platform}
                >
                  {social.platform === 'Twitter' && '𝕏'}
                  {social.platform === 'LinkedIn' && '💼'}
                  {social.platform === 'ResearchGate' && '🔬'}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-subheading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {config.quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-body-small text-background opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-subheading font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {config.resources.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-body-small text-background opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-subheading font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {config.legal.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-body-small text-background opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-background border-opacity-20 pt-8">
          <p className="text-body-small text-background opacity-60 text-center">
            © 2024 International Journal of Legal Jurisprudence. All rights reserved.
          </p>
        </div>
      </Section>
    </footer>
  )
}
