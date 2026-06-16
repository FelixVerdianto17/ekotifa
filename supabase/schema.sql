CREATE TABLE IF NOT EXISTS public.community_stories (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    summary TEXT NOT NULL,
    source_url TEXT NOT NULL,
    source_name TEXT NOT NULL,
    image_url TEXT,
    published_date DATE NOT NULL,
    category TEXT NOT NULL,
    status TEXT DEFAULT 'published' NOT NULL,
    is_active BOOLEAN DEFAULT true NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);
CREATE TABLE IF NOT EXISTS public.career_posts (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    type TEXT NOT NULL,
    location TEXT NOT NULL,
    description TEXT NOT NULL,
    requirements TEXT NOT NULL,
    google_form_url TEXT NOT NULL,
    is_active BOOLEAN DEFAULT true NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = timezone('utc'::text, now());
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Attach trigger to community_stories
DROP TRIGGER IF EXISTS set_community_stories_updated_at ON public.community_stories;
CREATE TRIGGER set_community_stories_updated_at
BEFORE UPDATE ON public.community_stories
FOR EACH ROW
EXECUTE FUNCTION public.handle_updated_at();

-- Attach trigger to career_posts
DROP TRIGGER IF EXISTS set_career_posts_updated_at ON public.career_posts;
CREATE TRIGGER set_career_posts_updated_at
BEFORE UPDATE ON public.career_posts
FOR EACH ROW
EXECUTE FUNCTION public.handle_updated_at();

-- 4. Enable Row Level Security (RLS)
ALTER TABLE public.community_stories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.career_posts ENABLE ROW LEVEL SECURITY;

-- 5. Security Policies (Public Read-Only)
-- community_stories
DROP POLICY IF EXISTS "Allow public read for active community stories" ON public.community_stories;
CREATE POLICY "Allow public read for active community stories" ON public.community_stories
FOR SELECT
USING (is_active = true);

-- career_posts
DROP POLICY IF EXISTS "Allow public read for active career posts" ON public.career_posts;
CREATE POLICY "Allow public read for active career posts" ON public.career_posts
FOR SELECT
USING (is_active = true);
