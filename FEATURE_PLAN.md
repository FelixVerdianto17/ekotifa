# Feature Implementation Plan - Ekotifa-next

Dokumen ini berisi roadmap langkah-demi-langkah (milestones) untuk pengembangan fitur website Ekotifa-next, dari audit struktur dasar, integrasi brief konten baru secara statis, hingga dinamisasi data dan rilis produksi.

---

## **Phase 1: Update Dokumentasi Programs & Services (Selesai)**
Fokus pada memperbarui dokumentasi proyek (PRD, Feature Plan, Database Setup, AI Rules, Changelog) agar selaras dengan brief lengkap Programs & Services yang baru.
- [x] **Update PRD.md:** Struktur kategori, daftar program, behavior UI navbar/homepage, detail page, dan keputusan local data.
- [x] **Update FEATURE_PLAN.md:** Sinkronisasi roadmap 8 fase baru.
- [x] **Update DATABASE_SETUP.md:** Penyusunan field sementara untuk skema program.
- [x] **Update AI_RULES.md:** Aturan pengerjaan program, desain, SEO, dan pembatasan Supabase.
- [x] **Update CHANGELOG.md:** Catatan riwayat masuknya brief lengkap Programs & Services.

---

## **Phase 2: Buat Local Data Programs (Selesai)**
Membuat file data lokal yang menyimpan seluruh informasi program terstruktur sesuai brief.
- [x] Buat file `data/programs.js` atau `data/programs.ts` (menyesuaikan struktur proyek).
- [x] Masukkan data lengkap untuk 3 kategori utama (Meaningful Journeys, Learning Expeditions, Purposeful Vacations) dan seluruh programnya (detail highlights, outcomes, benefits, dll).

---

## **Phase 3: Buat Dropdown Navbar Programs & Services (Selesai)**
Mengimplementasikan menu dropdown/mega menu interaktif pada navbar saat hover.
- [x] Implementasikan hover effect pada menu "Programs & Services" di navbar.
- [x] Buat dropdown/mega menu premium yang menampilkan 3 kategori utama.
- [x] Pastikan navigasi menggunakan `next/link` dan responsif di mobile (menggunakan menu hamburger/accordion).

---

## **Phase 4: Buat Homepage Category Cards (Selesai)**
Mengintegrasikan komponen card kategori di halaman beranda.
- [x] Desain card premium untuk 3 kategori utama Programs & Services di homepage.
- [x] Tambahkan hover effect di mana card kategori memunculkan daftar program yang ada di bawah kategori tersebut.
- [x] Hubungkan setiap item program ke route `/programs/[slug]`.

---

## **Phase 5: Buat Route /programs/[slug] (Selesai)**
Membuat halaman detail dinamis untuk program.
- [x] Setup folder dan file `app/programs/[slug]/page.tsx` (atau route yang sesuai).
- [x] Desain layout detail page premium: hero detail program, title besar, subtitle/tagline, deskripsi, highlights, outcomes, benefits, CTA, dan visual/gambar.
- [x] Implementasikan static generation dengan `generateStaticParams` untuk performa loading cepat jika memungkinkan.

---

## **Phase 6: Buat Metadata SEO per Program (Selesai)**
Optimasi SEO khusus untuk setiap halaman detail program.
- [x] Gunakan `generateMetadata` di route `/programs/[slug]/page.tsx` jika memungkinkan.
- [x] Tarik data title, short_description/tagline, dan keyword spesifik program ke metadata halaman.

---

## **Phase 7: Test Responsive, SEO, dan Build (Selesai)**
Tahap pengujian dan penjaminan kualitas (QA) sebelum rilis lokal.
- [x] Uji responsivitas antarmuka menu navbar dan detail page di berbagai ukuran perangkat.
- [x] Uji metadata SEO menggunakan browser/tool validator SEO.
- [x] Jalankan `npm run build` untuk memverifikasi tidak ada error kompilasi TypeScript atau Next.js.

---

## **Phase 8: Data Strategy Finalization (Selesai)**
- [x] Tetapkan Programs & Services dan Journeys & Impact menggunakan static/local data.
- [x] Rencanakan Supabase untuk data dinamis (Community Stories & Career Posts).

---

## **Milestone 2: Community Stories & Journeys Impact**

Terkait dengan penambahan halaman `/stories-impact` dan bagian terkait.

### **Phase 1: Research Source Community Stories**
- [ ] Riset data/berita valid dari open source (Antara, SMA YPHB, Bogor Kita, IG Official) terkait Ekotifa.
- [ ] Kumpulkan URL sumber yang absah tanpa mengarang berita.

### **Phase 2: Buat Local Data communityStories dan impactJourneys**
- [ ] Buat file `data/communityStories.js` dengan data maksimal 6 cards.
- [ ] Buat file `data/impactJourneys.js`.
- [ ] Pastikan struktur field sesuai standar PRD.

### **Phase 3: Buat Page /stories-impact**
- [ ] Setup struktur halaman utama untuk rute `/stories-impact`.
- [ ] Buat kerangka dua section utama: Community Stories dan Journeys & Impact.
- [ ] Pastikan navigasi anchor dari navbar (`#community-stories` dan `#journeys-impact`) berfungsi.

### **Phase 4: Buat Card UI Community Stories (Carousel)**
- [ ] Desain card UI untuk menampilkan berita/cerita komunitas.
- [ ] Implementasikan tampilan *horizontal carousel/slider* (dapat menggunakan `Swiper` atau *scroll-snap*).
- [ ] Pastikan navigasi mendukung *swipe* di *mobile* dan *drag/arrow* di *desktop*.
- [ ] Hubungkan dengan sumber asli menggunakan eksternal link/tab baru untuk `sourceUrl`.
- [ ] Pastikan gambar menggunakan `og:image` dari artikel asal.

### **Phase 5: Buat Card UI Journeys & Impact**
- [ ] Desain UI berkelas premium, visual kuat, gambar besar, dan overlay yang clean. Jangan copy reference UI 1:1.
- [ ] Hubungkan card dengan route detail.

### **Phase 6: Buat Detail Impact Page**
- [ ] Implementasikan route `/stories-impact/[slug]` untuk menampung detail dari suatu impact journey.
- [ ] Render komponen halaman detail meliputi: `title`, `location`, `relatedProgram`, `description`, `impactForParticipants`, `impactForCommunity`, `image/gallery`, `source/reference` (jika ada), dan CTA.

### **Phase 7: SEO Metadata**
- [ ] Tambahkan meta title, description, dan keyword spesifik pada `/stories-impact` dan halaman detailnya.

### **Phase 8: Data Strategy Finalization (Selesai)**
- [x] Tetapkan Community Stories menggunakan Supabase.
- [x] Tetapkan Journeys & Impact menggunakan static/local data.

---

## **Milestone 3: Dynamic Data with Supabase (Current Phase)**

Fokus pada pengintegrasian data dinamis yang sering berubah (Cerita Komunitas dan Lowongan Kerja).

### **Phase 1: Setup Supabase Foundation**
- [ ] Setup koneksi Supabase (`@supabase/supabase-js`, `@supabase/ssr`).
- [ ] Buat konfigurasi *environment variables* (`.env.local` dan `.env.example`).
- [ ] Siapkan file utilitas `client.ts` dan `server.ts` untuk interaksi database.

### **Phase 2: Database Schema & RLS**
- [ ] Buat *table* `community_stories` dengan parameter lengkap.
- [ ] Buat *table* `career_posts` dengan parameter lengkap (tanpa *Google Form* sebagai *database*, melainkan murni *link apply*).
- [ ] Terapkan Row Level Security (RLS) di mana *public user* hanya bisa melakukan *SELECT* pada baris yang memiliki `is_active = true`.

### **Phase 3: Integrasi Data ke Website**
- [ ] Integrasikan pembacaan data (*read data*) langsung dari Supabase ke dalam halaman website (*Server-Side Rendering*).
- [ ] Tambahkan logika penanganan otomatis (*fallback*) seperti *"Open positions will be available soon"* apabila *environment variables* atau data kosong.
- [ ] (Status: Admin Dashboard custom **ditunda** untuk MVP, seluruh manajemen CRUD data sementara menggunakan *Supabase Table Editor*).

