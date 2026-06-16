import { createClient } from './server';

export async function getCommunityStories() {
  try {
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      console.warn('Supabase env vars missing. Falling back to empty array for community_stories.');
      return [];
    }

    const supabase = await createClient();
    const { data, error } = await supabase
      .from('community_stories')
      .select('id, title, slug, summary, source_url, source_name, image_url, published_date, category, status, is_active')
      .eq('is_active', true)
      .eq('status', 'published')
      .order('published_date', { ascending: false });

    if (error) {
      console.error('Error fetching community_stories from Supabase:', error.message || error);
      return [];
    }

    if (!data) return [];

    return data.map((story) => ({
      id: story.id,
      title: story.title,
      slug: story.slug,
      publishedDate: story.published_date,
      category: story.category,
      summary: story.summary,
      imageUrl: story.image_url,
      sourceName: story.source_name,
      sourceUrl: story.source_url,
      status: story.status,
      isActive: story.is_active,
    }));
  } catch (err) {
    console.error('Exception fetching community_stories:', err);
    return [];
  }
}

export async function getCareerPosts() {
  try {
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      console.warn('Supabase env vars missing. Falling back to empty array for career_posts.');
      return [];
    }

    const supabase = await createClient();
    const { data, error } = await supabase
      .from('career_posts')
      .select('*')
      .eq('is_active', true)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching career_posts from Supabase:', error);
      return [];
    }

    return data || [];
  } catch (err) {
    console.error('Exception fetching career_posts:', err);
    return [];
  }
}
