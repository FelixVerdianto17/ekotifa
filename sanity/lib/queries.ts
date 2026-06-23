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
