# Product Requirement Document (PRD) - Ekotifa-next

## 1. Informasi Umum
* **Nama Project:** Ekotifa-next
* **Deskripsi:** Website landing page PT Ekowisata Kreatif Indonesia yang dimigrasi dari React Vite ke Next.js App Router.
* **Tujuan Project:** Menyajikan platform perjalanan Ekotifa secara profesional, modern, dan global untuk mentransformasi pariwisata menjadi pengalaman belajar dan aksi nyata yang berkelanjutan.

---

## 2. Target User
* **Publik / Wisatawan / Pelajar / Profesional:** Mencari informasi tentang program ekowisata, riset ekologi, wisata edukasi, dan aksi keberlanjutan.
* **Mitra Bisnis / Instansi (Pemerintah/Swasta):** Mencari layanan konsultasi pengembangan destinasi pariwisata berkelanjutan dan pengelolaan destinasi.
* **Calon Pelamar Kerja / Magang:** Mencari peluang karir untuk berkontribusi di bidang keberlanjutan.
* **Administrator (Internal):** Mengelola konten program, karir, dan testimoni secara dinamis (Ditangguhkan sementara).

---

## 3. Struktur Website & Navigasi (Sesuai Brief Baru)

### A. Tautan Navigasi (Navbar)
1. **Home** (Halaman Utama / Landing Page)
2. **About Us** (Tentang Kami)
3. **Programs & Services** (Program & Layanan)
   * **Behavior:** Dropdown/mega menu saat hover yang menampilkan 3 kategori utama:
     * Meaningful Journeys
     * Learning Expeditions
     * Purposeful Vacations
4. **Community Stories** (Cerita Komunitas)
   * **Behavior:** Mengarah ke `/stories-impact#community-stories`
5. **Journeys & Impact** (Jejak Jangkauan & Dampak)
   * **Behavior:** Mengarah ke `/stories-impact#journeys-impact`
6. **Join Our Team!** (Peluang Karir / Karir)

### B. Detail Struktur Landing Page (Home)
1. **Hero Section:**
   * **Headline:** “Where Recreation Becomes Meaningful Experience that Drives Sustainable Action.”
   * **Tagline:** “Let's Take More Sustainability Action on Every Vacation”
   * **CTA:** “View Program Details” atau “Lihat Detail Program” (Dilarang memunculkan harga/pricing untuk saat ini).
2. **Introducing Section:**
   * Penjelasan Ekotifa sebagai platform perjalanan yang mentransformasi rekreasi menjadi pengalaman belajar dan aksi bermakna yang berkelanjutan.
3. **About Us Section (Statis):**
   * **Our Stories / Sejarah:** Perjalanan Ekotifa dari inisiatif EFTO (Ecotourism for Tomorrow) pada tahun 2008 hingga bertransformasi menjadi PT Ekowisata Kreatif Indonesia pada Januari 2018.
   * **Komitmen:** Peran Ekotifa sebagai konsultan pariwisata berkelanjutan dan operator ekowisata.
   * **Visi:** “To become Indonesia’s leading platform that transforms learning and recreational experiences through tourism into meaningful and sustainable impact.”
   * **Misi:**
     * Enhance the quality of education through sustainable tourism and experiential learning.
     * Empower local communities.
     * Deliver high-quality services with safety, comfort, and educational value.
     * Connect students and professionals with sustainability, empathy, and social responsibility.
     * Integrate science, art, and culture into every journey.
   * **Core Values:**
     * Sustainable & Experiential Learning Design
     * Destination Management & Local Empowerment
     * Youth Leadership & Research Development
     * Service Excellence & Ethical Tourism Practice
   * **Founder & Team:**
     * **Komisaris & Co-founder:** Bagus Panuntun, S.Hut
     * **Direktur Utama & Co-Founder:** Afrodita Indayana, S.Tr.Par
     * **Executive Customer Relations:** Lulu Paramitha, S.Psi, Anton Ufur Johanes, M.Ba
     * **Executive Government Relations:** Suryo Boediono, S.T, M.Ba, Ronanda Utama, S.Hut, M.Si
     * **Strategic of Curriculum & Education:** Anggun Pesona, M.M
     * **Production Staff:** Lisandie, Ahmad Hanafi, Maharani Putri
     * **Field Operation:** Aprilian Teja, Dinda Akbar Yanuar
4. **Our Approach Section:**
   * **Pendekatan:**
     * Integrated Learning Approaches and Methodologies.
     * Tourism Development Management.
     * Measurement Tools.
   * **Implementation Cycle:** Explore → Research → Experience → Reflection → Action → Publication/Co-Creation.
5. **Programs & Services Section:**
   * **Homepage Component:** Menggunakan card kategori untuk 3 kategori utama.
   * **Behavior:** Setiap card kategori dapat menampilkan daftar program di dalamnya saat di-hover.
   * **Navigation:** Setiap program dalam daftar dapat diklik untuk mengarah ke detail page masing-masing.
6. **Community Stories Section (*PENDING*):**
   * Ditampilkan sesuai layout lama sampai ada brief konten spesifik.
7. **Journeys & Impact Section (Peta & Dampak):**
   * Peta jangkauan area kerja sama Ekotifa.
   * Visualisasi Dampak (**Impact** hanya ditampilkan 1 kali di halaman utama untuk menghindari duplikasi).
   * Kategori & Isi Dampak (*Impact Categories*):
     * **Quality Education for Learners**
       * 10,000+ students engaged in meaningful learning journeys
       * 400+ research and innovation outputs
       * 500+ mentors and practitioners involved
     * **Empowering Communities**
       * 1,000+ local homes supported
       * 500+ local guides and community teams empowered
       * 50+ cultural talents and practitioners engaged
     * **Sustainable Development**
       * 50+ communities and destinations developed
       * 50+ local changemakers nurtured
       * Advancing cultural preservation and ecosystem conservation—from forests, coasts, oceans, mountains, urban areas, and post-mining landscapes.
     * **Inspiring Action**
       * 500+ individuals adopting more sustainable lifestyles
     * **Programs & Reach**
       * 150+ programs delivered across Indonesia
       * 500–700 participants engaged in each grassroots event
   * **Closing Statement:** “Every journey creates quality learning, empowers communities, and drives sustainable action.”
8. **Join Our Team! Section (Karir):**
   * Daftar lowongan pekerjaan/magang aktif. Tombol pendaftaran diarahkan ke Google Form pendaftaran eksternal.

### C. Detail Struktur & Keputusan Desain Programs & Services

#### 1. Pembagian Kategori & Daftar Program
Program Ekotifa dikelompokkan ke dalam 3 kategori utama:

* **Meaningful Journeys**
  * **Target Audience:** Individu, keluarga, komunitas, dan travelers.
  * **Deskripsi:** *Immersive experiences that blend local wisdom, sustainability, culture, mindfulness, and meaningful exploration.*
  * **Program:**
    * Swasana
    * Forest Healing
    * Discoffeery
    * Bike Heritage
    * Couple Journey
    * Adrenaline Junkie
    * Trip In Tribe

* **Learning Expeditions**
  * **Target Audience:** Sekolah, kampus, dan youth development.
  * **Headline:** *Learning beyond the classroom.*
  * **Deskripsi:** *Experiential learning journeys designed to develop research skills, leadership, sustainability awareness, and real-world understanding.*
  * **Program:**
    * Life Cycle
    * Ecocamp / Ecosystem Around Us
    * Local Genius
    * Human Uniqueness
    * Youth Research Camp / YRC
    * Live In Story
    * Feelocity
    * Community Service
    * Future Leader Camp
    * Future Campus Program
    * IndoeStrip
    * Cultural Mission / International Mission

* **Purposeful Vacations**
  * **Target Audience:** Sekolah, perusahaan, komunitas.
  * **Headline:** *Recreation with greater purpose.*
  * **Deskripsi:** *Leisure experiences designed to strengthen relationships, inspire creativity, and create positive social and environmental impact.*
  * **Program:**
    * School Vacation
    * Farewell Party
    * Corporate Vacation
    * Employee Gathering
    * Team Building
    * Company Celebration
    * Business Leisure

#### 2. Detail Page Program (Route: `/programs/[slug]`)
Setiap program memiliki detail page tersendiri dengan routing `/programs/[slug]`. Detail page dirancang dengan struktur premium sebagai berikut:
* **Hero Detail Program:** Visual / gambar premium pembuka halaman detail.
* **Title Besar:** Nama program yang jelas.
* **Subtitle/Tagline:** Kalimat pemikat singkat tentang program.
* **Deskripsi:** Uraian lengkap mengenai program.
* **Highlights:** Poin-poin penting / daya tarik utama program.
* **Outcomes:** Hasil nyata yang didapatkan peserta setelah mengikuti program.
* **Benefits:** Manfaat / nilai tambah yang ditawarkan.
* **CTA (Call to Action):** Tombol aksi yang jelas tanpa mencantumkan harga langsung.
* **Visual/Gambar & Galeri:** Foto-foto pendukung representatif.

#### 3. Aturan Desain Program
* **Desain Premium & Orisinal:** Jangan meniru desain referensi secara 1:1. Desain referensi hanya digunakan untuk inspirasi interaksi dan tata letak. Tampilan akhir wajib mencerminkan identitas merek Ekotifa.
* **SEO Per Halaman:** Setiap detail program wajib menyertakan metadata SEO yang spesifik (title, description, keywords).

### D. Detail Struktur Halaman Stories & Impact (Route: `/stories-impact`)
Halaman utama yang didedikasikan untuk menampilkan cerita komunitas dan dampak nyata dari program-program Ekotifa.

#### 1. Section: Community Stories
* **Deskripsi:** Cerita dan berita terkait kegiatan Ekotifa dari berbagai sumber eksternal (mengambil data dari artikel *open source*/berita spesifik).
* **Behavior & UI:** 
  * Diimplementasikan sebagai *horizontal carousel/slider* (dapat menggunakan Swiper karena *dependency* sudah tersedia).
  * Pengguna dapat menggeser (*slide/scroll*) ke samping jika jumlah *card* melebihi *container*.
  * Mendukung *swipe* di mobile, serta interaksi *drag* atau panah navigasi di desktop.
  * Tautan "Read More" langsung mengarah ke artikel spesifik (*sourceUrl*), bukan *homepage* media.
  * Gambar *card* memprioritaskan penggunaan `og:image` dari artikel sumber.
* **Fitur Masa Depan (Admin & Database):**
  * Ketika Supabase dan *dashboard* admin dibuat, pengelola cukup menempelkan (*paste*) URL artikel.
  * Sistem akan menarik *metadata* secara otomatis (`og:title`, `og:description`, `og:image`, dan `sourceName`) melalui Next.js *route handler/server function*, kemudian menyimpannya ke Supabase.
  * Jika penarikan `og:image` gagal atau diblokir (*hotlink protection*), admin dapat mengunggah/mengisi URL gambar secara manual.
* **Sumber Data:** Berasal dari *open source* resmi. **Dilarang keras mengarang isi berita.**
* **Struktur Data Card (Future Database):**
  * `id`, `title`, `slug`, `summary`, `source_url`, `source_name`, `image_url`, `published_date`, `category`, `status`, `is_active`, `created_at`, `updated_at`.

#### 2. Section: Journeys & Impact
* **Deskripsi:** Menampilkan proyek-proyek berdampak dari Ekotifa secara internal. (Berbeda dengan *Community Stories* yang mengarah ke luar, tautan ini mengarah ke dalam *website*).
* **Tampilan:** *Card project impact* dengan visual premium, gambar besar, dan *overlay* yang *clean*. 
* **Struktur Data Card (Future Database):**
  * `id`, `title`, `slug`, `related_program`, `location`, `description`, `impact_for_participants`, `impact_for_community`, `image_url`, `gallery`, `source_url`, `is_active`, `created_at`, `updated_at`.

#### 3. Detail Page Impact (Route: `/stories-impact/[slug]`)
Setiap *impact card* dapat diklik untuk masuk ke halaman detail internal dengan struktur:
* `title`
* `location`
* `relatedProgram`
* `description`
* `impactForParticipants`
* `impactForCommunity`
* `image/gallery`
* `source/reference` (jika ada)
* `CTA` (Call to Action)

#### 4. Keputusan Teknis Fase Awal
* Menggunakan **Local Data** terlebih dahulu (`data/communityStories.js` dan `data/impactJourneys.js`).
* Setup Supabase ditunda hingga konten sepenuhnya final.
* Seluruh data dari external source wajib menyertakan tautan aslinya sebagai `sourceUrl`.

---

## 4. Aturan Desain & Pengembangan
* **Konsistensi Desain Visual:** Jangan mengubah tata letak visual (*layout*), warna (*colors*), jarak (*spacing*), animasi, atau estetika besar yang sudah ada kecuali ada brief desain resmi.
* **Bahasa:** Kombinasi 70% Bahasa Indonesia untuk kemudahan baca dan 30% English untuk judul/branding agar bernuansa global.

---

## 5. Keputusan Backend & Database (Data Strategy Final)
* **Data Strategy Utama:**
  * **Static / Local Data:** Digunakan untuk **Programs & Services** dan **Journeys & Impact**. Alasan: Data program jarang berubah, sehingga lebih optimal secara performa (*page load*) dan SEO jika disajikan sebagai data lokal/statis. Detail page (`/programs/[slug]`) tetap menggunakan data statis.
  * **Supabase (Database Dinamis):** Digunakan untuk **Community Stories** dan **Join Our Team / Career Posts**. Alasan: Cerita komunitas dan lowongan pekerjaan lebih sering mengalami pembaruan dan bersifat dinamis, sehingga sangat cocok dikelola menggunakan Supabase.
* **Google Form:** Hanya digunakan murni sebagai *link apply* pada detail lowongan, bukan sebagai database untuk *fetch* daftar lowongan. (Integrasi API Excel/Spreadsheet sebelumnya telah dibatalkan/dihapus).
* **Penundaan Dashboard Admin Custom (ON HOLD):**
  Untuk fase MVP (*Minimum Viable Product*), fitur *dashboard custom* untuk admin tidak akan dibuat. Semua entri data dinamis (*Community Stories* dan *Career Posts*) dapat dikelola secara langsung melalui **Supabase Table Editor**. *Dashboard custom* baru akan dibuat di masa mendatang jika dibutuhkan *User Interface* spesifik untuk admin non-teknis.
* **Routing & SEO Dinamis:** Gunakan `generateStaticParams` untuk rute dinamis `/programs/[slug]` dan `generateMetadata` untuk mengelola SEO per program jika memungkinkan.

---

## 6. Optimasi SEO & Semantic HTML
* **Kata Kunci (Keywords):** Wajib menyisipkan istilah-istilah di bawah ini secara natural pada metadata halaman:
  * ekowisata kreatif, program ekowisata, edukasi lingkungan, konservasi, pemberdayaan masyarakat, wisata edukasi, wisata berkelanjutan, Ekotifa.
* **Heading (H1-H6):** Homepage hanya memiliki satu H1 (pada Hero), sub-section besar menggunakan H2.
