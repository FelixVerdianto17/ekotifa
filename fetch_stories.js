const { createClient } = require('next-sanity');

const client = createClient({
  projectId: 'xdjz9r5w', // from sanity env if I can find it, actually let me extract from sanity.cli.ts or similar
  dataset: 'production',
  apiVersion: '2026-06-18',
  useCdn: false,
});

async function run() {
  const query = `*[_type == "communityStory" && isActive == true]`;
  const stories = await client.fetch(query);
  console.log('Sanity count:', stories.length);
}

run();
