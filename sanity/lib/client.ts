import { createClient } from 'next-sanity';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-06-18';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false to bypass CDN cache and get latest data
});
