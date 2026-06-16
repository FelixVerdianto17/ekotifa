# AI Coding Assistant Rules - Ekotifa-next

Dokumen ini berisi panduan dan batasan wajib bagi AI Coding Assistant (seperti Antigravity, Claude, dll.) saat bekerja pada codebase **Ekotifa-next**. Aturan ini wajib diikuti tanpa pengecualian untuk menjaga stabilitas dan kualitas kode.

---

## Aturan Utama Pengembangan
1. **Jangan Melakukan Rewrite Massal:** Dilarang menulis ulang seluruh file atau struktur proyek tanpa alasan yang sangat kuat dan persetujuan eksplisit dari pengguna.
2. **Pertahankan Desain Besar:** Jangan mengubah tema visual, palet warna, dan estetika utama website yang sudah ada. Modifikasi diperbolehkan untuk merapikan margin, padding, kontras, responsivitas, dan tipografi agar terlihat lebih premium.
3. **Jangan Hapus Section yang Sudah Ada:** Section Hero, Tentang Kami, Program, Area Jangkauan, Kuesioner, Karir, dan Logo Mitra harus tetap ada di halaman utama (landing page).
4. **Pendekatan Bertahap (Step-by-Step):** Kerjakan satu fitur atau perbaikan kecil dalam satu waktu. Jangan menggabungkan banyak perubahan besar dalam satu langkah pengerjaan.
5. **Transparansi Perubahan:** Selalu berikan penjelasan rinci mengenai file apa saja yang diubah, apa tujuannya, serta dampak dari perubahan tersebut sebelum atau sesudah melakukan editing.

---

## Aturan Teknis Next.js & React
1. **Gunakan Next.js App Router:** Ikuti konvensi struktur folder di dalam `/app` (layout.tsx, page.tsx, dll.).
2. **Navigasi Internal:** Selalu gunakan komponen `next/link` (`<Link href="...">`) untuk navigasi antar halaman internal, hindari penggunaan tag anchor biasa (`<a>`) agar tidak terjadi full-page reload.
3. **Metadata SEO:** Setiap page wajib mendefinisikan objek `metadata` atau menggunakan fungsi `generateMetadata` untuk mendukung optimasi SEO.
4. **Optimasi Client vs Server Components:**
   * Gunakan **Server Components** secara default untuk fetching data dan rendering statis/dinamis.
   * Gunakan direktif `"use client"` di baris pertama file **hanya** ketika komponen tersebut memerlukan interaktivitas klien (state, hooks seperti `useState`, `useEffect`, event handlers, atau library khusus browser seperti Leaflet).
5. **Efisiensi Library:** Jangan menginstal library npm baru kecuali benar-benar dibutuhkan dan tidak bisa diselesaikan dengan native API atau library yang sudah ada di `package.json`.
6. **Larangan Mengarang Konten (Anti-Hallucination):** Dilarang mengarang atau menebak detail data, struktur database, skema, atau desain visual untuk section yang belum memiliki brief final (seperti *Programs & Services* dan *Community Stories*). Biarkan bagian tersebut berupa placeholder/statis sesuai layout lama sampai ada instruksi eksplisit dari pengguna.

---

## Aturan Backend & Keamanan
1. **Batasi Lingkup Backend:** Jangan membuat backend terpisah (seperti Express.js atau NestJS). Manfaatkan fitur Route Handlers dari Next.js (Serverless API) dan integrasi langsung ke Supabase SDK.
2. **Data Strategy Wajib:**
   * **Statis / Lokal:** Data `Programs & Services` dan `Journeys & Impact` wajib dipertahankan menggunakan data statis/lokal (jangan dipindahkan ke database Supabase kecuali ada permintaan eksplisit).
   * **Dinamis (Supabase):** Semua fitur yang memerlukan pembaruan konten secara sering (`Community Stories` dan `Career Posts`) wajib menggunakan Supabase.
   * **Dilarang pakai API Excel:** Dilarang menggunakan API Spreadsheet (seperti sheetdb.io) untuk *fetching* data.
3. **Penundaan Custom Admin Dashboard:** Jangan membuat *dashboard admin custom* (`/admin/*`) pada tahap MVP. Pengelolaan data (CRUD) harus dilakukan secara manual melalui *Table Editor* di Supabase Dashboard.
4. **Row Level Security (RLS):** Pastikan setiap tabel di Supabase memiliki policy RLS yang tepat (akses publik hanya boleh membaca data aktif).
5. **Manajemen API Key:**
   * Kunci publik (`NEXT_PUBLIC_SUPABASE_URL` dan `NEXT_PUBLIC_SUPABASE_ANON_KEY`) aman digunakan di sisi klien.
   * Kunci rahasia seperti `SUPABASE_SERVICE_ROLE_KEY` **tidak boleh** diekspos ke sisi klien. Kunci ini hanya boleh digunakan di Server Components atau Route Handlers.

---

## Aturan Khusus Fitur Programs & Services
1. **Source of Truth:** Brief PM (Product Manager) adalah sumber kebenaran utama (*source of truth*). Dilarang keras mengarang program baru atau menghapus program yang sudah tercantum di dalam brief.
2. **Desain Orisinal:** Jangan menyalin desain referensi secara 1:1. Referensi hanya digunakan sebagai inspirasi untuk pola interaksi (*interaction pattern*) dan tata letak (*layout inspiration*). Hasil akhir desain harus sepenuhnya disesuaikan dengan identitas merek Ekotifa.
3. **Status Penyimpanan Data:**
   * Selalu pertahankan file data lokal (`data/programs.ts` atau `data/programs.js`) sebagai *source of truth*.
   * **Jangan pernah** menginisiasi migrasi data Programs & Services ke Supabase kecuali diinstruksikan secara langsung oleh pengguna.
4. **Metadata SEO:** Setiap halaman, termasuk setiap detail halaman program (`/programs/[slug]`), wajib mendefinisikan dan memperhatikan metadata SEO untuk memastikan indeksasi pencarian yang optimal.

---

## Aturan Khusus Fitur Stories & Impact
1. **Dilarang Mengarang Berita/Open Source:** Data untuk Community Stories harus riil dan valid dari media resmi. Jangan mengarang (*hallucinate*) isi berita atau tautan.
2. **Kewajiban Source URL:** Setiap entri pada Community Stories wajib menyertakan `sourceUrl` yang valid (link eksternal). "Read More" harus langsung mengarah ke artikel spesifik ini.
3. **Preferensi Gambar (og:image):** Gambar utama untuk *card* Community Stories sebisa mungkin mengambil dari meta `og:image` artikel asli.
4. **Perbedaan Linking:** 
   * **Community Stories** harus *link out* (tautan eksternal) ke sumber berita spesifik.
   * **Journeys & Impact** harus *link in* (tautan internal) ke halaman detail (`/stories-impact/[slug]`).
5. **UI Community Stories:** Diimplementasikan sebagai *horizontal carousel/slider* (dapat memakai Swiper) dengan desain *clean*, *premium*, dapat di-*swipe* di *mobile*, dan *drag/arrow* di *desktop*.
6. **Future Admin Auto-Fetch:** Setup Supabase untuk Community Stories nantinya akan mendesain admin yang cukup *paste* URL, lalu Next.js *server function* akan otomatis menarik `og:title`, `og:description`, `og:image`, dan `sourceName`.
7. **Desain Orisinal (Journeys & Impact):** Terapkan desain premium dengan visual kuat, card image besar, dan overlay yang clean. Jangan menyalin UI referensi secara 1:1.
8. **Prioritas Database Dinamis:** Tabel `community_stories` merupakan salah satu tabel prioritas yang akan diimplementasikan di Supabase, sementara `impact_journeys` akan tetap menggunakan data statis pada fase awal.
