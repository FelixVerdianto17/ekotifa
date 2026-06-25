import { createClient } from './server';

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
