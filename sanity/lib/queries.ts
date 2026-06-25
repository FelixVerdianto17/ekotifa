import { client } from './client';

export async function getCareerPosts() {
  try {
    const query = `*[_type == "careerPost" && isActive == true] | order(publishedDate desc, _createdAt desc) {
      _id,
      title,
      "slug": slug.current,
      type,
      location,
      description,
      requirements,
      googleFormUrl,
      isActive
    }`;
    
    const posts = await client.fetch(query);
    
    console.log('Sanity career posts count:', posts?.length || 0);
    if (posts && posts.length > 0) {
      console.log('titles yang berhasil difetch:', posts.map((p: any) => p.title));
    }
    
    return posts || [];
  } catch (error: any) {
    console.error('Error fetching career posts from Sanity:', error.message || error);
    return [];
  }
}

export async function getCommunityStories() {
  try {
    const query = `*[_type == "communityStory" && isActive == true] | order(publishedDate desc) {
      _id,
      title,
      "slug": slug.current,
      summary,
      sourceUrl,
      sourceName,
      "imageUrl": coalesce(image.asset->url, imageUrl, '/images/placeholder.webp'),
      publishedDate,
      category,
      isActive,
      status
    }`;
    
    const stories = await client.fetch(query);
    
    console.log('Community Stories count:', stories?.length || 0);
    if (stories && stories.length > 0) {
      console.log('Community Stories titles:', stories.map((s: any) => s.title));
    }
    
    return stories || [];
  } catch (error: any) {
    console.error('Error fetching community stories from Sanity:', error.message || error);
    return [];
  }
}
