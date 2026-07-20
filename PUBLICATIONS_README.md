# 📚 IJLJ Publications System

A world-class, production-ready Publications page for the **International Journal of Legal Jurisprudence** built with Next.js 16, TypeScript, and Tailwind CSS.

## ✨ Key Features

### 🔍 Discovery & Search
- Full-text search with smart autocomplete
- Advanced filtering (year, subject, country, peer review status, open access)
- 7 sort options (newest, most viewed, most downloaded, most cited, etc.)
- 3 view modes (grid, list, compact)

### 📖 Content Management
- 23 sample publications across 2 volumes
- 16 research subject areas with descriptions
- Author affiliations and institutional data
- Peer review and open access indicators
- Citation metrics (downloads, views, citations)

### 📝 Citation Tools
- **9 citation formats**: APA, MLA, Chicago, Harvard, IEEE, Bluebook, BibTeX, RIS, EndNote
- Copy to clipboard with visual feedback
- Download as file (TXT, BibTeX, RIS, EndNote)
- Automatic formatting with all metadata

### 📊 Statistics & Analytics
- Animated counters for key metrics
- Trending publications by 3 metrics (downloads, views, citations)
- Volume explorer with timeline visualization
- Subject area browsing

### 🎨 User Experience
- Responsive design (mobile-first, 320px to 4K)
- Loading skeletons for smooth transitions
- Empty state handling
- Bookmarking support (architecture ready)
- Keyboard navigation throughout

### 🔒 SEO & Accessibility
- **12+ JSON-LD schemas** for search engines
- Google Scholar meta tags
- Highwire Press metadata
- Dublin Core standards
- WCAG AA+ accessibility
- Semantic HTML throughout

## 📁 Project Structure

```
publications/
├── config/
│   └── publications-config.ts       # All content (CMS-ready)
├── types/
│   └── publication.ts               # TypeScript interfaces
├── lib/
│   └── citations.ts                 # Citation generators
├── components/publications/
│   ├── publication-card.tsx         # Card (4 variants)
│   ├── publication-grid.tsx         # Grid layout
│   ├── hero.tsx                     # Hero section
│   ├── search.tsx                   # Search input
│   ├── filters.tsx                  # Advanced filters
│   ├── citations.tsx                # Citation tools
│   ├── statistics.tsx               # Stat counters
│   ├── trending.tsx                 # Top publications
│   ├── volume-explorer.tsx          # Volume timeline
│   ├── subject-explorer.tsx         # Subject grid
│   └── index.ts                     # Component exports
└── app/publications/
    ├── page.tsx                     # Main page
    ├── metadata.ts                  # SEO metadata
    └── [slug]/page.tsx              # Article detail

Documentation/
├── PUBLICATIONS_README.md           # This file
├── PUBLICATIONS_IMPLEMENTATION.md   # Technical details
└── PUBLICATIONS_DEVELOPER_GUIDE.md  # Developer reference
```

## 🚀 Getting Started

### Installation

The Publications system is already integrated into the IJLJ frontend. No additional installation needed.

### Running Locally

```bash
# Start dev server
npm run dev

# Visit the pages
http://localhost:3000/publications                              # Main page
http://localhost:3000/publications/artificial-intelligence-legal-framework  # Article
```

### Building for Production

```bash
npm run build
npm start
```

## 📖 Usage Examples

### Access Main Publications Page

```
GET /publications
```

Returns a comprehensive page with:
- Hero section with search and stats
- Featured research
- Publication statistics with animated counters
- Trending publications
- Volume explorer
- Subject explorer
- Complete publication catalog

### View Article Details

```
GET /publications/[slug]
```

Example slugs:
- `artificial-intelligence-legal-framework`
- `blockchain-smart-contracts-enforcement`
- `data-privacy-gdpr-compliance`

### Using Components in Your Code

```typescript
import {
  PublicationCard,
  PublicationGrid,
  Statistics,
  Trending,
  Citations,
  Filters,
} from '@/components/publications'

// Display publications
<PublicationGrid
  publications={publicationsList}
  variant="grid"
  showBookmark={true}
/>

// Show statistics
<Statistics stats={publicationStats} animated={true} />

// Display citations
<Citations publication={selectedArticle} />
```

## 🎯 Configuration

All content is stored in `config/publications-config.ts`:

```typescript
// Add a publication
export const SAMPLE_PUBLICATIONS: Publication[] = [
  {
    id: 'pub-2024-001',
    slug: 'article-slug',
    title: 'Article Title',
    abstract: '...',
    authors: [{ name: 'Author Name', ... }],
    volume: 1,
    issue: 1,
    keywords: ['keyword1', 'keyword2'],
    subjects: ['Subject Area'],
    // ... more metadata
  }
]

// Modify sort options
export const SORT_OPTIONS = [
  { value: 'newest', label: 'Newest First' },
  // ... more options
]

// Add research subjects
export const SUBJECTS: Subject[] = [
  {
    id: 'subj-001',
    name: 'Constitutional Law',
    articleCount: 45,
    description: '...'
  }
]
```

## 🔗 Integration Points

### Connect to CMS/API

Replace sample data with real data:

```typescript
// config/publications-config.ts
async function loadPublications() {
  const response = await fetch('YOUR_API/publications')
  return response.json()
}

export const SAMPLE_PUBLICATIONS = await loadPublications()
```

### Connect to Search Backend

Update `components/publications/search.tsx`:

```typescript
async function handleSearch(query: string) {
  const results = await fetch(
    `/api/search?q=${encodeURIComponent(query)}`
  )
  return results.json()
}
```

### Add User Authentication

For bookmarks and saved searches:

```typescript
import { useAuth } from '@/lib/auth'

const { user } = useAuth()

// Save bookmark
await fetch('/api/bookmarks', {
  method: 'POST',
  body: JSON.stringify({ publicationId: pub.id, userId: user.id })
})
```

## 📊 Data Structure

### Publication Record

```typescript
interface Publication {
  id: string
  slug: string
  title: string
  abstract: string
  authors: Author[]
  volume: number
  issue: number
  pages?: { start: number; end: number }
  doi?: string
  keywords: string[]
  subjects: string[]
  categories: string[]
  citations: number
  downloads: number
  views: number
  featured?: boolean
  peerReviewed: boolean
  openAccess: boolean
  license?: 'CC-BY' | 'CC-BY-SA' | ...
  publicationDate: string
  pdf?: { url: string; size: number }
  thumbnail?: string
  // ... more fields
}
```

## 🎨 Customization

### Change Colors

Edit `app/globals.css`:

```css
:root {
  --color-primary: 25 118 210;      /* Blue */
  --color-secondary: 56 142 60;     /* Green */
  --color-accent: 198 124 78;       /* Brown */
  /* ... more colors */
}
```

### Modify Component Styling

All components use Tailwind CSS with theme variables. Edit component files or update CSS variables.

### Add New Citation Format

Edit `lib/citations.ts`:

```typescript
export function generateCustomFormat(publication: Publication): string {
  // Your format here
  return formattedCitation
}
```

## ✅ Testing Checklist

- ✅ TypeScript: All files type-safe, strict mode enabled
- ✅ Build: Turbopack compilation successful
- ✅ Responsive: Tested 320px to 4K
- ✅ SEO: Schema.org validation ready
- ✅ Accessibility: WCAG AA+ compliant
- ✅ Performance: Streaming, lazy loading
- ✅ Pages load without errors
- ✅ Citations generate in all formats
- ✅ Filters and search work correctly
- ✅ Mobile navigation functional

## 📈 Statistics

- **Total Lines of Code:** 2,500+
- **Component Count:** 10+ reusable components
- **Citation Formats:** 9 styles
- **Publications:** 23 samples
- **Subject Areas:** 16 categories
- **TypeScript Interfaces:** 20+
- **Configuration:** 560+ lines (zero hardcoding)
- **JSON-LD Schemas:** 12+

## 🔄 Workflow Integration

### For Developers
1. Update `config/publications-config.ts` to add/modify publications
2. Create new components in `components/publications/`
3. Test locally with `npm run dev`
4. Commit and push changes
5. Deploy to production

### For Content Managers (Future)
1. Connect CMS (Contentful, Sanity, etc.)
2. Data automatically updates on config changes
3. No code changes needed
4. Redeploy to fetch latest content

### For Researchers
1. Submit manuscript through `/submit` page
2. Peer review process
3. Publication on IJLJ
4. Automatic indexing in Google Scholar, CrossRef
5. Citation metrics tracked

## 🚀 Deployment

### To Vercel

```bash
# Push to GitHub
git push origin ijlj-homepage

# Vercel automatically deploys
# View at: https://ijlj.vercel.app/publications
```

### Environment Variables

```env
# .env.local
NEXT_PUBLIC_API_URL=https://api.ijlj.org
```

## 📚 Documentation

- **PUBLICATIONS_IMPLEMENTATION.md** - Complete technical architecture
- **PUBLICATIONS_DEVELOPER_GUIDE.md** - Developer reference and API
- **README.md** - This file (user guide)

## 🤝 Contributing

### Adding Features
1. Create feature branch: `git checkout -b feature/new-feature`
2. Make changes with tests
3. Commit: `git commit -m "feat: Add new feature"`
4. Push: `git push origin feature/new-feature`
5. Create Pull Request

### Bug Reports
Report issues to: `editorial@ijlj.org`

## 📄 License

MIT License - See LICENSE file for details

## 🎓 Academic Compliance

- Supports Highwire Press meta tags (Google Scholar indexing)
- CrossRef DOI integration ready
- Dublin Core metadata standards
- ROAD and OpenAlex compatible
- COPE ethical guidelines compliance
- RoMEO self-archiving policies

## 🔐 Security

- Strict TypeScript checks
- No hardcoded secrets
- Environment variables for sensitive data
- XSS protection via React escaping
- CSRF tokens for forms
- Rate limiting ready (implement as needed)

## 📞 Support

- **Issues:** Create GitHub issue in repository
- **Questions:** Email editorial@ijlj.org
- **Documentation:** See docs folder

## 🎯 Roadmap

### Phase 2 (Future)
- [ ] CMS integration (Contentful/Sanity)
- [ ] Advanced search backend (Meilisearch)
- [ ] User authentication
- [ ] Bookmarking system
- [ ] Recommendation engine
- [ ] Analytics dashboard

### Phase 3 (Later)
- [ ] Multi-language support
- [ ] AI abstract translation
- [ ] Video abstracts
- [ ] Interactive figures
- [ ] Supplementary materials

## 📊 Analytics Events

The system is instrumentation-ready for:
- Publication views
- Download tracking
- Citation clicks
- Search queries
- Filter usage
- Citation format exports

## 🌍 Internationalization

The system supports:
- Multi-language publications (field present)
- RTL languages (Tailwind ready)
- Localized dates/numbers
- Multi-language UI (awaiting implementation)

---

**Version:** 1.0  
**Last Updated:** July 2026  
**Status:** Production Ready  
**Maintainer:** IJLJ Development Team
