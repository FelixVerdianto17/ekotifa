CREATE TABLE IF NOT EXISTS public.career_posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  type text,
  location text,
  description text,
  requirements text,
  google_form_url text,
  is_active boolean default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

ALTER TABLE public.career_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to active career posts" 
ON public.career_posts 
FOR SELECT 
USING (is_active = true);
