# Ekotifa-next

Ekotifa-next adalah aplikasi pariwisata berkelanjutan berbasis Next.js App Router (v16) yang menghubungkan petualangan pariwisata kreatif dengan pelestarian lingkungan dan pemberdayaan masyarakat lokal. Proyek ini dikelola oleh PT Ekowisata Kreatif Indonesia (Ekotifa).

---

## 🚀 Cara Menjalankan Lokal

1. **Kloning Repositori:**
   ```bash
   git clone <url-repo-github>
   cd Ekotifa-next
   ```

2. **Instalasi Dependencies:**
   ```bash
   npm install
   ```

3. **Setup Environment Variables:**
   Salin file `.env.example` menjadi `.env.local` dan lengkapi nilainya:
   ```bash
   cp .env.example .env.local
   ```

4. **Jalankan Development Server:**
   ```bash
   npm run dev
   ```
   Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

5. **Build Produksi:**
   ```bash
   npm run build
   # Untuk menjalankan hasil build
   npm run start
   ```

---

## ⚙️ Environment Variables (`.env.local`)

Aplikasi ini menggunakan integrasi client-side dan server-side dengan Supabase. Pastikan Anda memiliki nilai berikut pada berkas `.env.local` (tidak dikomit ke git):

```env
NEXT_PUBLIC_SUPABASE_URL=https://<your-project-id>.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-anon-public-key>
```

---

## 📊 Strategi Data (Data Strategy)

Ekotifa-next menggunakan strategi data hibrida untuk performa optimal, optimasi SEO, dan fleksibilitas data dinamis:

1. **Programs & Services:** Menggunakan **data lokal statis** di `data/programs.ts` agar halaman detail program dapat di-render menggunakan *Static Site Generation (SSG)* demi kecepatan memuat (page load) dan skor SEO yang tinggi.
2. **Journeys & Impact:** Menggunakan **data lokal statis** di `data/impactJourneys.ts` yang di-render secara statis (SSG) dengan `generateStaticParams` untuk optimasi SEO maksimum pada halaman detail dampak.
3. **Community Stories:** Menggunakan **data dinamis dari Supabase** (`community_stories`) yang dibaca secara *on-demand* di Server Components (`force-dynamic`). Jika database kosong, halaman memiliki status fallback elegan.
4. **Career / Hiring:** Menggunakan **data dinamis dari Supabase** (`career_posts`) yang dibaca secara *on-demand* (`force-dynamic`).
5. **Google Form:** Digunakan secara eksklusif hanya untuk menampung pengajuan lamaran karir (tombol *Apply Now* mengarahkan ke form Google yang relevan).

---

## 🗄️ Struktur Tabel Supabase

Skema tabel SQL lengkap tersedia pada direktori `supabase/schema.sql`. Aplikasi menggunakan tabel-tabel berikut:

### 1. `community_stories`
Menyimpan cerita dan berita terkait dampak komunitas Ekotifa dari media eksternal.
- `id` (UUID, Primary Key)
- `title` (TEXT, Not Null)
- `slug` (TEXT, Unique, Not Null)
- `summary` (TEXT, Not Null)
- `source_url` (TEXT, Not Null)
- `source_name` (TEXT, Not Null)
- `image_url` (TEXT, Nullable)
- `published_date` (DATE, Not Null)
- `category` (TEXT, Not Null)
- `status` (TEXT, Default 'published')
- `is_active` (BOOLEAN, Default true)
- Row Level Security (RLS) diaktifkan: Hanya memperbolehkan akses `SELECT` publik untuk baris dengan status `is_active = true`.

### 2. `career_posts`
Menyimpan informasi posisi lowongan pekerjaan yang aktif.
- `id` (UUID, Primary Key)
- `title` (TEXT, Not Null)
- `slug` (TEXT, Unique, Not Null)
- `type` (TEXT, Not Null - e.g., Full-time, Internship)
- `location` (TEXT, Not Null)
- `description` (TEXT, Not Null)
- `requirements` (TEXT, Not Null)
- `google_form_url` (TEXT, Not Null)
- `is_active` (BOOLEAN, Default true)
- Row Level Security (RLS) diaktifkan: Hanya memperbolehkan akses `SELECT` publik untuk lowongan dengan status `is_active = true`.

---

## 🛠️ Folder Struktur Utama

```text
Ekotifa-next/
├── app/               # Next.js App Router Pages & Layouts
├── components/        # Shared components (Navbar, Footer, UI elements)
├── features/          # Feature-based modular components (e.g. landing sections)
├── data/              # Static local datasets (programs, reach locations, etc.)
├── lib/               # Utility functions and Supabase SDK initialization
│   └── supabase/      # Supabase server & browser clients, query functions
├── public/            # Static assets (images, webp logos, icons)
│   └── images/        # Curated images (brand, partners, programs, sections)
└── supabase/          # Database setup and schema SQL scripts
```

---

## 🎨 Konsistensi UI & Desain

- **Warna Utama:** Ekotifa Gold (`#F4CA44`) digunakan sebagai aksen utama.
- **Warna Pendukung:** Monokromatik abu-abu gelap ke hitam (`zinc-900`/`zinc-950`) untuk teks dan background gelap premium, serta putih (`#FFFFFF`/`#FDFDFD`) untuk background bersih bergaya editorial.
- **Tipografi:** Menggunakan font Google Outfit (Display) dan Plus Jakarta Sans (Sans-serif).
- **Aturan Warna:** Tidak diperbolehkan menggunakan aksen warna jingga/orange (`#EB5A34`) atau hijau (`emerald`/`green`) sebagai warna aksen utama navigasi atau tombol.
