# Publications Page - Developer Guide

## Quick Start

### Access the Pages
- **Main Publications Page:** `http://localhost:3000/publications`
- **Publication Detail:** `http://localhost:3000/publications/[slug]`

### Example Publication Slugs
- `artificial-intelligence-legal-framework`
- `blockchain-smart-contracts-enforcement`
- `data-privacy-gdpr-compliance`

## File Navigation

### Core Application Files

```
app/publications/
├── page.tsx              # Main page - displays hero, featured, stats, trending, volumes, subjects, all publications
├── metadata.ts           # SEO metadata and JSON-LD schema generation
└── [slug]/page.tsx       # Individual article detail page

components/publications/  # 10+ reusable components
├── index.ts              # Component barrel exports (import as needed)
├── publication-card.tsx  # 4 variants: grid, list, compact, featured
├── publication-grid.tsx  # Responsive grid wrapper
├── hero.tsx              # Hero section with search
├── search.tsx            # Search input component
├── filters.tsx           # Advanced filtering UI
├── citations.tsx         # Citation tools
├── statistics.tsx        # Animated stat counters
├── trending.tsx          # Top publications
├── volume-explorer.tsx   # Volume timeline
└── subject-explorer.tsx  # Subject grid

config/publications-config.ts  # All content configuration (560+ lines)
- SAMPLE_PUBLICATIONS[]
- VOLUMES[]
- SUBJECTS[]
- PUBLICATION_STATISTICS
- SORT_OPTIONS, VIEW_OPTIONS, CITATION_STYLES
- Search, sort, and display configuration

lib/citations.ts           # Citation generator utilities
- generateAPACitation()
- generateMLACitation()
- generateChicagoCitation()
- ...8 other formats
- copyCitationToClipboard()
- downloadCitation()

types/publication.ts       # TypeScript interfaces
- Publication
- PublicationCard
- SearchFilters
- Volume, Subject
- Citation
- All metadata types
```

## Common Tasks

### 1. Adding a New Publication

Edit `config/publications-config.ts`:

```typescript
export const SAMPLE_PUBLICATIONS: Publication[] = [
  {
    id: 'pub-2024-004',
    slug: 'new-article-slug',
    title: 'Article Title',
    abstract: 'Article abstract...',
    authors: [{ id: 'auth-001', name: 'Author Name', ... }],
    volume: 1,
    issue: 1,
    pages: { start: 1, end: 20 },
    doi: '10.1234/ijlj.2024.004',
    keywords: ['keyword1', 'keyword2'],
    subjects: ['Subject Area'],
    // ... other fields
  },
  // ...existing publications
]
```

### 2. Changing the Sort Options

Edit `config/publications-config.ts`:

```typescript
export const SORT_OPTIONS = [
  { value: 'newest', label: 'Newest First' },
  { value: 'oldest', label: 'Oldest First' },
  // Add more sort options here
]
```

Then update `lib/citations.ts` if needed to support new sort types.

### 3. Adding a New Research Subject

Edit `config/publications-config.ts`:

```typescript
export const SUBJECTS: Subject[] = [
  // ... existing subjects
  {
    id: 'subj-017',
    name: 'New Subject',
    slug: 'new-subject',
    description: 'Description here',
    articleCount: 0,
  },
]
```

### 4. Customizing Citation Formats

Edit `lib/citations.ts` to modify existing formats or add new ones:

```typescript
export function generateCustomCitation(publication: Publication): string {
  const authors = publication.authors.map((a) => a.name).join(', ')
  return `${authors}. "${publication.title}". Year.`
}
```

### 5. Changing Component Colors/Styling

All components use Tailwind CSS with theme variables from `app/globals.css`:

```css
--color-primary: 25 118 210      /* Blue for primary buttons */
--color-secondary: 56 142 60     /* Green for badges */
--color-accent: 198 124 78       /* Brown for accents */
--color-background: 255 255 255  /* White background (light mode) */
--color-foreground: 20 20 30     /* Dark text (light mode) */
```

To change colors, edit `app/globals.css` CSS variables.

### 6. Converting to API Data

Replace SAMPLE_PUBLICATIONS:

```typescript
// OLD:
import { SAMPLE_PUBLICATIONS } from '@/config/publications-config'

// NEW:
async function getPublications() {
  const res = await fetch('YOUR_API/publications')
  return res.json()
}

// Usage in server component:
const publications = await getPublications()
```

## Component Usage Examples

### Using PublicationGrid

```tsx
import { PublicationGrid } from '@/components/publications'

<PublicationGrid
  publications={publicationsList}
  variant="grid"  // 'grid' | 'list' | 'compact'
  showBookmark={true}
  onBookmark={(id) => console.log('Bookmarked:', id)}
  bookmarkedIds={['pub-1', 'pub-2']}
/>
```

### Using Filters

```tsx
import { Filters } from '@/components/publications'

<Filters
  onFilterChange={(filters) => applyFilters(filters)}
  onViewChange={(view) => setView(view)}
  currentView="grid"
/>
```

### Using Citations

```tsx
import { Citations } from '@/components/publications'
import { SAMPLE_PUBLICATIONS } from '@/config/publications-config'

<Citations publication={SAMPLE_PUBLICATIONS[0]} />
```

### Using Statistics

```tsx
import { Statistics } from '@/components/publications'
import { PUBLICATION_STATISTICS } from '@/config/publications-config'

<Statistics stats={PUBLICATION_STATISTICS} animated={true} />
```

## Search Implementation

Currently uses local client-side filtering. For production:

1. **Meilisearch:** Fast, typo-tolerant search
2. **Elasticsearch:** Powerful, scalable full-text search
3. **Algolia:** Hosted solution with great UX
4. **Supabase Full-Text:** Simple, built-in option

Update `components/publications/search.tsx` and add API integration.

## Citation Formats Reference

| Format | Style | Use Case |
|--------|-------|----------|
| APA | Author. (Year). Title. Journal, Vol(Issue). | Psychology, education |
| MLA | Author. "Title." Journal, Vol, No, Year, pp. | Humanities, arts |
| Chicago | Author. "Title." Journal Vol, no. Issue (Year): pp. | History, literature |
| Harvard | Author, Year. Title. Journal, Vol(Issue), pp. | Business, social sciences |
| IEEE | [#] Author, "Title," Journal, vol., no., pp. | Engineering, computer science |
| Bluebook | Author, Title, Vol Journal pp. (Year). | Law (this is IJLJ's main format!) |
| BibTeX | @article{key, author={}, title={}, ...} | LaTeX documents |
| RIS | TY=JOUR, AU=, TI=, etc. | Reference managers |
| EndNote | %0 Journal Article, %A Author, etc. | EndNote software |

## Schema.org Support

The publications system generates:

- **ScholarlyArticle** - Individual articles
- **CollectionPage** - Main publications page
- **Organization** - IJLJ publishing organization
- **BreadcrumbList** - Navigation paths
- **FAQPage** - FAQ structured data
- **SearchAction** - Site search capability

Validate at: https://validator.schema.org/

## Accessibility Features

- ✅ Semantic HTML (`<article>`, `<section>`, `<nav>`)
- ✅ ARIA labels on interactive elements
- ✅ Keyboard navigation support
- ✅ Focus states visible on all interactive elements
- ✅ Color contrast ≥ 7:1 on text
- ✅ Screen reader support with `sr-only` class
- ✅ Reduced motion support with `prefers-reduced-motion`

## Performance Optimization

- Server Components by default
- Streaming via Suspense boundaries
- Next/Image for optimized images
- CSS variable system for minimal duplication
- Minimal client-side JavaScript
- No unnecessary re-renders

## Testing URLs

```
GET /publications                           # Main page
GET /publications/artificial-intelligence-legal-framework  # Article detail
GET /publications?sort=mostCited           # Sort by citations
GET /publications?filter=openAccess        # Filter options
```

## Common Issues & Solutions

### Issue: Page not loading
**Solution:** Check browser console for errors, verify dev server running

### Issue: Filters not working
**Solution:** Ensure `Filters` is wrapped in `'use client'` directive

### Issue: Citations not copying
**Solution:** Check browser permissions for clipboard API

### Issue: Images not loading
**Solution:** Verify image URLs in `SAMPLE_PUBLICATIONS` are accessible

## API Integration Checklist

- [ ] Connect to real publications database
- [ ] Implement search backend (Meilisearch, etc.)
- [ ] Add download tracking for metrics
- [ ] Set up DOI service integration
- [ ] Configure PDF storage (Vercel Blob, S3, etc.)
- [ ] Add user authentication for bookmarks
- [ ] Set up analytics tracking
- [ ] Configure caching strategy

## Deployment Checklist

- [ ] Environment variables configured
- [ ] Build successful (`npm run build`)
- [ ] TypeScript strict mode clean
- [ ] Testing on mobile devices
- [ ] Schema.org validation passed
- [ ] Performance audit completed (Lighthouse 95+)
- [ ] Accessibility audit passed (WCAG AA+)
- [ ] Git commit pushed to production branch

---

**Last Updated:** July 2026
**Version:** 1.0
**Maintainer:** Development Team
