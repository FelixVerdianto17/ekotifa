import { MetadataRoute } from 'next';
import { getAllProgramSlugs } from '@/data/programs';
import { getActiveImpactJourneys } from '@/data/impactJourneys';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ekotifa.id';
  
  const routes = [
    '',
    '/about',
    '/programs',
    '/stories-impact',
    '/career',
  ];

  const staticUrls = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Dynamic routes for programs
  const programSlugs = getAllProgramSlugs();
  const programUrls = programSlugs.map((slug) => ({
    url: `${baseUrl}/programs/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  // Dynamic routes for stories-impact
  const impactJourneys = getActiveImpactJourneys();
  const storyUrls = impactJourneys.map((journey) => ({
    url: `${baseUrl}/stories-impact/${journey.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticUrls, ...programUrls, ...storyUrls];
}
