# Panduan Setup Supabase - Ekotifa-next

Dokumen ini berisi petunjuk langkah-demi-langkah untuk menyiapkan Supabase, mengonfigurasi Next.js, dan menjalankan migrasi skema database awal serta Row Level Security (RLS).

---

## 1. Package yang Perlu Diinstal (Nanti Setelah Persetujuan)
Untuk mengintegrasikan Next.js App Router dengan Supabase Auth & Database secara aman di server dan client, disarankan menginstal package berikut:
* `@supabase/supabase-js` - SDK utama Supabase.
* `@supabase/ssr` - Helper resmi untuk mengelola autentikasi berbasis Cookie di Next.js App Router (Server Components, Route Handlers, Middleware).

Perintah instalasi yang akan dijalankan nanti:
```bash
npm install @supabase/supabase-js @supabase/ssr
```

---

## 2. Struktur File `/lib/supabase`
Untuk mengelola koneksi client dan server Next.js secara modular, berikut struktur file yang akan dibuat:

```text
/lib/supabase
├── client.ts       # Supabase client untuk Client Components (menggunakan browser cookies)
├── server.ts       # Supabase client untuk Server Components & Route Handlers
└── middleware.ts   # Helper untuk memperbarui sesi auth di Middleware Next.js
```

### Kode Rujukan `/lib/supabase/client.ts`
```typescript
import { createBrowserClient } from '@supabase/ssr';

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
```

### Kode Rujukan `/lib/supabase/server.ts`
```typescript
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // Server Component dapat mengabaikan penulisan ulang cookie jika dipicu saat render
          }
        },
      },
    }
  );
}
```

### Kode Rujukan `/lib/supabase/middleware.ts`
```typescript
import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value));
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // Menyegarkan token sesi auth
  await supabase.auth.getUser();

  return supabaseResponse;
}
```

---

## 3. Urutan Setup di Dashboard Supabase
1. **Buat Proyek Baru:** Masuk ke dashboard Supabase, buat organisasi baru (jika belum ada), lalu buat proyek dengan nama `ekotifa-next`. Catat *Database Password*.
2. **Matikan Registrasi Terbuka:**
   * Buka menu **Authentication** -> **Provider Settings** -> **Email**.
   * Nonaktifkan **Confirm Email** (opsional untuk kemudahan tes awal) dan nonaktifkan **Allow Self Signup** agar hanya admin yang bisa didaftarkan secara manual oleh admin utama.
3. **Ambil API Keys:**
   * Masuk ke **Project Settings** -> **API**.
   * Salin **Project URL** dan **anon (public)** key untuk diisi ke `.env.local`.

---

## 4. SQL Schema & RLS Awal
Jalankan skrip SQL berikut di **SQL Editor** pada dashboard Supabase untuk menginisialisasi skema tabel dan aturan keamanan RLS:

```sql
-- 1. Buat tabel admin_users
CREATE TABLE public.admin_users (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    role TEXT DEFAULT 'admin' NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Buat tabel programs
CREATE TABLE public.programs (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    short_description TEXT NOT NULL,
    description TEXT NOT NULL,
    image_url TEXT,
    location TEXT NOT NULL,
    duration TEXT,
    is_featured BOOLEAN DEFAULT false NOT NULL,
    is_active BOOLEAN DEFAULT true NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Buat tabel career_posts
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

-- 4. Pasang Trigger Otomatisasi updated_at
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = timezone('utc'::text, now());
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_programs_updated_at
BEFORE UPDATE ON public.programs
FOR EACH ROW
EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER set_career_posts_updated_at
BEFORE UPDATE ON public.career_posts
FOR EACH ROW
EXECUTE FUNCTION public.handle_updated_at();

-- 5. Aktifkan Row Level Security (RLS)
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.programs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.career_posts ENABLE ROW LEVEL SECURITY;

-- 6. Konfigurasi Kebijakan RLS (Policies)
-- Tabel admin_users
CREATE POLICY "Allow authenticated admins to read admin list" ON public.admin_users
FOR SELECT TO authenticated USING (user_id = auth.uid());

-- Tabel programs
CREATE POLICY "Allow public read for active programs" ON public.programs
FOR SELECT USING (is_active = true);

CREATE POLICY "Allow authorized admins full access on programs" ON public.programs
FOR ALL TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM public.admin_users
    WHERE admin_users.user_id = auth.uid()
  )
)
WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.admin_users
    WHERE admin_users.user_id = auth.uid()
  )
);

-- Tabel career_posts
CREATE POLICY "Allow public read for active career posts" ON public.career_posts
FOR SELECT USING (is_active = true);

CREATE POLICY "Allow authorized admins full access on career posts" ON public.career_posts
FOR ALL TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM public.admin_users
    WHERE admin_users.user_id = auth.uid()
  )
)
WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.admin_users
    WHERE admin_users.user_id = auth.uid()
  )
);
```

---

## 5. Langkah Manual Setelah Setup Dashboard
1. **Membuat User Admin Awal:**
   * Di dashboard Supabase, buka menu **Authentication** -> **Users**.
   * Klik **Add User** -> **Create User**. Masukkan email dan password untuk akun admin.
   * Dapatkan **User ID** (UUID) dari user yang baru dibuat tersebut.
2. **Mendaftarkan User ID ke tabel `admin_users`:**
   * Masuk ke **SQL Editor** Supabase.
   * Jalankan perintah INSERT berikut untuk mendaftarkan akun tersebut sebagai administrator resmi:
     ```sql
     INSERT INTO public.admin_users (user_id, email, role)
     VALUES ('USER_ID_DARI_STEP_SEBELUMNYA', 'emailadmin@domain.com', 'admin');
     ```
