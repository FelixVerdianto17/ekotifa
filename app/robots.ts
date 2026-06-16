import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://ekotifa.id/sitemap.xml',
    host: 'https://ekotifa.id',
  };
}
