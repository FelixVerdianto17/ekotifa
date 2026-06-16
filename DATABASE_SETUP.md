# Database Setup Guide (Supabase) - Ekotifa-next

Dokumen ini berisi spesifikasi tabel, konfigurasi autentikasi, kebijakan keamanan (RLS), dan skrip SQL yang diperlukan untuk menyiapkan Supabase sebagai database dan CMS untuk website Ekotifa-next.

Sesuai dengan keputusan data strategy terbaru, data **Programs & Services** dan **Journeys & Impact** tetap dipertahankan secara statis/lokal demi performa dan SEO. Fokus penggunaan Supabase saat ini hanya ditujukan untuk fitur yang memiliki konten dinamis.

---

## 1. Skema Tabel Database

Fokus prioritas saat ini hanya pada dua tabel dinamis berikut:

### A. Tabel `community_stories`
Menyimpan data cerita komunitas yang diambil dari berbagai sumber publikasi atau kegiatan lapangan.
```sql
CREATE TABLE public.community_stories (
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
```

### B. Tabel `career_posts`
Menyimpan data lowongan karir/magang yang aktif.
```sql
CREATE TABLE public.career_posts (
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
```

### C. Trigger Otomatisasi `updated_at`
Fungsi helper untuk memperbarui kolom `updated_at` secara otomatis saat data diperbarui.
```sql
-- Buat fungsi trigger
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = timezone('utc'::text, now());
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Pasang trigger pada tabel career_posts
CREATE TRIGGER set_career_posts_updated_at
BEFORE UPDATE ON public.career_posts
FOR EACH ROW
EXECUTE FUNCTION public.handle_updated_at();

-- Pasang trigger pada tabel community_stories
CREATE TRIGGER set_community_stories_updated_at
BEFORE UPDATE ON public.community_stories
FOR EACH ROW
EXECUTE FUNCTION public.handle_updated_at();
```

---

## 2. Kebijakan Keamanan (Row Level Security - RLS)

RLS harus diaktifkan di semua tabel untuk melindungi data dari manipulasi tidak sah.

### A. Mengaktifkan RLS
```sql
ALTER TABLE public.career_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.community_stories ENABLE ROW LEVEL SECURITY;
```

### B. Kebijakan Keamanan (Public Read-Only)
Hanya data yang berstatus aktif yang boleh dibaca secara publik oleh pengguna (tanpa login).

```sql
-- Akses Publik untuk career_posts
CREATE POLICY "Allow public read for active career posts" ON public.career_posts
FOR SELECT
USING (is_active = true);

-- Akses Publik untuk community_stories
CREATE POLICY "Allow public read for active community stories" ON public.community_stories
FOR SELECT
USING (is_active = true);
```

> **Catatan (Untuk MVP):**
> Operasi `INSERT`, `UPDATE`, dan `DELETE` saat ini dilakukan secara manual menggunakan antarmuka **Supabase Dashboard / Table Editor**. Oleh karena itu, kita tidak perlu menambahkan policy spesifik untuk operasi tersebut saat ini hingga sistem *Admin Dashboard* khusus dibuat.

---

## 3. Konfigurasi Environment Variables (`.env.local`)

Kredensial berikut harus disiapkan di file `.env.local` pada root project (jangan masukkan file ini ke Git/GitHub):

```env
# Kredensial Publik (Aman diakses di sisi klien/frontend)
NEXT_PUBLIC_SUPABASE_URL=https://your-supabase-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-public-key...
```

> **PERINGATAN:** Jangan mengekspos *service role key* (`SUPABASE_SERVICE_ROLE_KEY`) ke frontend. Kunci anonim publik sudah cukup untuk keperluan *fetching* data publik secara aman.
