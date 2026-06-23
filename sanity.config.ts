import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schema } from './sanity/schemaTypes';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.SANITY_STUDIO_PROJECT_ID || '';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || process.env.SANITY_STUDIO_DATASET || 'production';

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  title: 'Ekotifa CMS',
  schema,
  plugins: [structureTool()],
});
