# Changelog - Ekotifa-next

Semua perubahan penting pada proyek **Ekotifa-next** akan dicatat dalam dokumen ini. Format changelog didasarkan pada prinsip penulisan riwayat perubahan yang sederhana dan mudah dipahami.

---

## [Unreleased]
### Changed
* **Hero Section UI:**
  * Menyesuaikan durasi *auto slide* pada komponen Hero menjadi 4 detik dan menghilangkan jeda saat disentuh (*pause on hover*) untuk memastikan *looping* gambar berjalan lancar secara terus-menerus.
* **Global CTA Contact Behavior:**
  * Mengubah seluruh tautan Call-To-Action (CTA) yang bertujuan untuk menghubungi Ekotifa (seperti di halaman Detail Program dan Footer) menjadi satu *source of truth* terpusat, yaitu memunculkan `ContactModal` (berisi rute kontak Email dan Instagram).
  * Membuat helper komponen klien re-usable `ContactButton.tsx` untuk memicu *event* `openContactModal`.
  * Meniadakan seluruh integrasi kontak WhatsApp dari komponen antarmuka, menghindari dependensi link `wa.me` secara tersebar.

*Rencana perubahan berikutnya:*
* Push ke GitHub repository.
* Deployment testing ke platform hosting (Vercel/Netlify).

## [1.9.9] - 2026-06-21
### Added
* **Program Baru: OFFLINE DAY:**
  * Menambahkan program *one day healing escape* OFFLINE DAY ke dalam kategori "Meaningful Journeys".
  * Memperbarui antarmuka `Program` secara dinamis (`any` untuk struktur *itinerary* dan aktivitas) agar kompatibel dengan ragam format deskripsi seperti waktu, kapasitas, biaya, _include_, _exclude_, _participant journey_, _unique selling points_, serta _sustainability impact_ tanpa memecah rute dinamis (SSG) maupun metadata SEO.


## [1.9.8] - 2026-06-21
### Added
* **Program Baru: TEROKA:**
  * Menambahkan program living expedition TEROKA ke dalam kategori "Meaningful Journeys".
  * Memperbarui antarmuka data `Program` di `data/programs.ts` untuk mendukung *field* opsional baru (`itinerarySummary`, `safetyAndOperation`, `teamSupport`, `outputs`, `rules`, `seoMetadata`).
  * Mengintegrasikan `seoMetadata` pada komponen halaman detail program agar mampu menangani tag `title` dan `description` khusus secara dinamis.


## [1.9.7] - 2026-06-19
### Changed
* **Hero Section UI:**
  * Mengubah Hero section menjadi carousel gambar dengan fitur *auto slide* (5 detik) dan *pause on hover*.
  * Menambahkan kontrol panah *Previous/Next* berdesain *clean* dengan transisi animasi halus menggunakan `framer-motion`.
* **About Page UI:**
  * Memperbarui tata letak gambar utama About Us agar menggunakan `object-contain` dengan latar belakang cerah (*soft gray/zinc-50*), memastikan gambar tidak terpotong (cropped) namun tetap mempertahankan aspek rasio aslinya secara penuh.
  * Mengubah kartu profil Tim & Pendiri menjadi desain *text-only* yang lebih rapi (tanpa foto/avatar) dengan tata letak konten rata tengah (*justify center*), menyederhanakan antarmuka.

## [1.9.6] - 2026-06-18
### Added
* **Sanity Integration for Careers:**
  * Membuat file client Sanity di `sanity/lib/client.ts` untuk menghubungkan frontend ke Sanity CMS menggunakan `next-sanity`.
  * Membuat file queries Sanity di `sanity/lib/queries.ts` dengan function `getCareerPosts()` untuk mengambil data career post dari Sanity CMS.

### Changed
* **Career Page Integration:**
  * Mengubah `app/(site)/career/page.tsx` untuk mengambil data lowongan pekerjaan langsung dari Sanity CMS melalui `getCareerPosts()`, tidak lagi menggunakan Supabase.
  * Memperbarui tipe data `JobOpening` di `CareerClient.tsx` agar selaras dengan skema data Sanity `careerPost`.
  * Memperbarui visual rendering di `CareerClient.tsx` untuk menampilkan badge `job.type` (menggantikan `job.department` yang tidak ada di skema Sanity).
  * Menambahkan penanganan state lowongan pekerjaan yang tidak memiliki `googleFormUrl` agar tombol apply/kursor-nya *disabled*, namun kartunya tetap tampil (tidak di-filter keluar).

## [1.9.5] - 2026-06-16
### Added
* **Environment Configuration:**
  * Membuat file `.env.example` berisi variabel lingkungan kosong untuk Supabase (`NEXT_PUBLIC_SUPABASE_URL` dan `NEXT_PUBLIC_SUPABASE_ANON_KEY`).
* **Dokumentasi Lengkap:**
  * Menulis ulang `README.md` dengan panduan jalankan lokal, variabel lingkungan, arsitektur data strategy final, skema database Supabase, dan struktur folder.

### Changed
* **Routing & Render Safety:**
  * Mengatur halaman `/career` dan `/stories-impact` ke mode rendering `force-dynamic` untuk mencegah exception `Dynamic server usage` (karena penggunaan cookies Supabase) selama kompilasi build statis.

### Fixed
* **ESLint Syntax Fix:**
  * Memperbaiki kesalahan unescaped apostrophe di komponen `Hero.tsx` pada kata `"Let's"` menjadi `"Let&apos;s"`.

### Deleted
* **Pembersihan File Sampah (Cleanup):**
  * Menghapus folder rute legacy `/app/program` (beserta detail client-nya) yang sudah tidak digunakan lagi karena digantikan oleh `/programs/[slug]`.
  * Menghapus duplikasi file JavaScript klien `lib/supabase/client.js` dan `lib/supabase/server.js` (project menggunakan TypeScript).

## [1.9.4] - 2026-06-14
### Changed
* **UI & Accessibility Carousel Community Stories:**
  * Memvalidasi fungsionalitas Swiper Carousel untuk mengakomodasi tata letak responsif secara mutlak: 1 *card* untuk _mobile_, 2 *card* untuk _tablet_, dan 3 *card* untuk _desktop_.
  * Menyisipkan properti aksesibilitas `a11y` (`prevSlideMessage: "Previous story"` & `nextSlideMessage: "Next story"`) ke dalam komponen geser (Swiper) untuk menunjang ramah disabilitas (Screen Reader).
  * Memverifikasi tombol panah geser agar tetap _clean_, berwarna _gold_ & hitam/putih, serta bersembunyi rapi (opacity: 0) saat sisa kartu tidak mencukupi batas navigasi.

---

## [1.9.3] - 2026-06-14
### Changed
* **Reset Logic Community Stories:**
  * Mereset data _source_ Community Stories agar 100% bergantung pada Supabase (tidak lagi di-_merge_ dengan _local hardcode stories_).
  * Menghapus fungsi `mergeCommunityStories` dan mencabut referensi data lokal pada komponen _page_ utama.
  * Menambahkan fitur penanganan kondisi kosong (*Empty State*) ketika Supabase belum memiliki data, dengan menampilkan pesan: "Community stories will be available soon."
  * Menggunakan gambar `journey-impact-home.webp` sebagai _fallback_ default jika entri *story* tidak memiliki gambar (URL gambar kosong).
  * Menjaga fungsionalitas UI _slider/carousel_ (panah geser dinamis, interaksi usap di ponsel) agar tetap _clean_ & estetik.

---

## [1.9.2] - 2026-06-14
### Fixed
* **Debug Community Stories Rendering:**
  * Memperbaiki normalisasi field Supabase `published_date` menjadi `publishedDate` sesuai dengan kebutuhan komponen UI.
  * Menyesuaikan komponen `CommunityStoriesCarousel` agar tidak error membaca nilai `undefined` dari tanggal.
  * Memastikan komponen tidak melakukan pembatasan jumlah card (`slice`) sehingga semua data yang di-_merge_ dirender seutuhnya ke dalam UI.
  * Menambahkan log _rendered data_ di halaman `/stories-impact` untuk validasi *output*.

---

## [1.9.1] - 2026-06-14
### Fixed
* **Debug Community Stories Supabase & UI:**
  * Memperbaiki konfigurasi caching dengan menambahkan `export const revalidate = 60` agar penambahan data baru di Supabase langsung terefleksikan (Incremental Static Regeneration).
  * Menambahkan console.log tracking untuk memudahkan *debugging* jumlah local vs supabase stories.
  * Memperbaiki komponen carousel `Swiper`: 
    - Menambahkan `watchOverflow={true}` sehingga tombol panah hanya muncul jika jumlah card melebihi tampilan layar.
    - Menyesuaikan desain tombol panah agar lebih *clean* dengan warna *gold* (`#F4CA44`), *black*, dan *white*, tidak lagi menggunakan warna *orange*.

---

## [1.9.0] - 2026-06-14
### Changed
* **Revisi Logic Community Stories:**
  * Mengubah alur pembacaan data Community Stories agar selalu menggabungkan (merge) data lokal (hardcode) dengan data dari Supabase.
  * Menambahkan fungsi `mergeCommunityStories()` untuk mencegah duplikasi (dedupe) berdasarkan `slug`, dengan prioritas data dari Supabase.
  * Memastikan data hardcode selalu tampil sehingga website tidak kosong jika Supabase error atau tidak ada data yang dimasukkan.

---

## [1.8.9] - 2026-06-14
### Changed
* **Dokumentasi & Data Strategy Final:**
  * Menetapkan keputusan akhir bahwa data **Programs & Services** dan **Journeys & Impact** akan sepenuhnya disajikan menggunakan local/static data demi optimalisasi SEO dan performa.
  * Menetapkan penggunaan **Supabase** secara eksklusif hanya untuk bagian yang bersifat dinamis: **Community Stories** dan **Join Our Team / Career Posts**.
  * Pembuatan halaman Custom Admin Dashboard secara resmi ditunda (ON HOLD) untuk MVP. Manajemen data akan dilakukan manual melalui Supabase Dashboard Table Editor.

---

## [1.8.8] - 2026-06-14
### Added
* **Setup Supabase Foundation untuk Karir:**
  * Membuat file `.env.example` untuk variabel lingkungan Supabase.
  * Menyiapkan klien Supabase untuk lingkungan browser (`lib/supabase/client.ts`) dan server (`lib/supabase/server.ts`) menggunakan `@supabase/ssr`.
  * Membuat file skema SQL (`supabase/career_posts.sql`) yang berisi definisi tabel `career_posts` beserta implementasi Row Level Security (RLS).
  * Mengintegrasikan halaman *Join Our Team* (`app/career/page.tsx`) untuk memanggil data langsung dari Supabase secara *Server-Side*, dengan fungsi *fallback* apabila variabel lingkungan Supabase belum diatur.

---

## [1.8.7] - 2026-06-14
### Changed
* **Revisi Halaman Join Our Team / Career:**
  * Menghapus integrasi API Excel/Google Spreadsheet (`sheetdb.io`) yang sebelumnya digunakan untuk *fetch* lowongan, sebagai persiapan migrasi data ke Supabase.
  * Mengganti gambar *Hero* pada bagian atas menjadi *video section* yang premium, menampilkan iframe YouTube responsif saat diklik, lengkap dengan *thumbnail* besar dan ikon *play overlay*.
  * Menghapus CTA *section* "Ajukan Posisi" / Open Application.
  * Mengatur *state* sementara pada daftar lowongan sehingga menampilkan tulisan "Open positions will be available soon" secara elegan ketika data kosong, tanpa menghasilkan error.
  * Memperbarui metadata SEO untuk judul menjadi "Join Our Team | Ekotifa" dan deskripsi yang relevan.

---

## [1.8.6] - 2026-06-14
### Changed
* **Restrukturisasi Path Gambar:**
  * Merapikan folder gambar sesuai struktur final: `public/images/brand`, `public/images/sections`, `public/images/programs`, dan `public/images/partners`.
  * Memperbarui path `logo.webp` di komponen Navbar.
  * Memperbarui path `Hero.webp` dan `About.webp` pada konfigurasi dan layout komponen.
  * Memperbarui path di `data/partnerLogos.ts` dan `generate_logos.js` agar menunjuk ke `public/images/partners/kolaborasi`.

---

## [1.8.5] - 2026-06-13
### Changed
* **Design Guideline Update (No Orange):**
  * Memperbarui `DESIGN.md` untuk menghapus penggunaan warna jingga/orange (`#EB5A34`) secara global.
  * Menetapkan Ekotifa Gold/Yellow (`#F4CA44`) sebagai satu-satunya *primary accent color*.
  * Membersihkan semua komponen UI (Navbar, Hero, Programs, ImpactSection, dll) dari warna `EB5A34`, `orange-500`, dan variannya.
  * Tampilan website kini lebih monokromatik premium (Black/White/Gray) dengan sentilan *Gold* elegan.

---

## [1.8.4] - 2026-06-13
### Changed
* **Visual UI Cleanup & Simplification:**
  * Membersihkan elemen antarmuka yang terlalu kompleks berdasarkan guidelines baru `DESIGN.md`.
  * Menghapus penggunaan icon dekoratif (`lucide-react`) yang tidak fungsional pada section Programs, Career, dan About.
  * Menghilangkan background dan badge berwarna hijau (`emerald`) dan mengubahnya menjadi kombinasi neutral/zinc, yellow (`#F4CA44`), dan orange (`#EB5A34`).
  * Menyederhanakan Core Values dan Implementation Cycle pada halaman About dan Career menjadi tipografi editorial yang premium, menghilangkan kotak ikon berwarna-warni.
  * Memperbarui komponen Navbar, ImpactSection, PartnerSection, dan ProgramSection di Homepage untuk memiliki tata letak teks minimalis tanpa badge yang ramai.
  * Mengganti palet warna pada *Journeys & Impact* (card list dan detail page slug) menjadi orange/yellow accent yang padu dengan brand identity Ekotifa.

---

## [1.8.3] - 2026-06-13
### Changed
* **Pembaruan Requirement Dokumentasi (Stories & Impact):**
  * Memperbarui `PRD.md` untuk mengkodifikasi antarmuka *horizontal carousel* pada **Community Stories** serta spesifikasi halaman detail internal bagi **Journeys & Impact**.
  * Memperbarui `FEATURE_PLAN.md` dengan penambahan *roadmap* pengembangan UI *carousel*, detail halaman *impact*, dan sistem *auto-fetch metadata* (Supabase admin).
  * Memperbarui `DATABASE_SETUP.md` dengan menyempurnakan draf skema tabel `community_stories` (menambahkan `summary`, `source_name`, `published_date`, dll) dan `impact_journeys` (menambahkan `related_program`, `gallery`, dll) agar selaras dengan spesifikasi *database* final kelak.
  * Memperbarui `AI_RULES.md` mengenai diferensiasi navigasi (*link out* untuk Stories vs *link in* untuk Impact) serta pengarahan penggunaan `og:image`.
* **Pembaruan UI:**
  * Mengubah section **Community Stories** di `/stories-impact` menjadi *carousel* menggunakan `Swiper`.
  * *Carousel* mendukung navigasi *swipe* di *mobile*, serta *drag* dan *arrow navigation* di *desktop*.
* **Mapping Data Gambar:**
  * Memperbarui tautan gambar (`imageUrl`) pada *Journeys & Impact* agar mendaur ulang dan memanfaatkan langsung berkas gambar program yang telah tersedia di `public/images/programs/`.
* **Pembuatan Halaman Baru:**
  * Mendesain dan merilis halaman dinamis spesifik untuk rincian proyek (`app/stories-impact/[slug]`).
  * Menerapkan performa statis tingkat lanjut menggunakan Next.js `generateStaticParams` beserta optimasi metadata *Search Engine* (`generateMetadata`).
  * Membuka blokir status "Coming Soon" pada *button card Journeys & Impact* untuk kini langsung memandu pengguna ke halaman rincian.
* **Perbaikan Bug (Hotfix):**
  * Memperbaiki kegagalan pra-kompilasi _(Pre-rendering error)_ pada *Next.js App Router v15+* dengan menerapkan mekanisme `await params` sebelum pemanggilan slug dinamis di `generateMetadata` dan `ImpactJourneyDetail`.
  * Menambahkan status kondisional _(fallback)_ `Impact journeys will be available soon` apabila koleksi data `impactJourneys` kosong.
  * Memperbaiki tata letak penutup `</div>` (Syntax Error) pada logika `impactJourneys.map` di berkas `page.tsx`.
* **Penyempurnaan Struktur Data & Konten:**
  * Menambahkan *field* baru `objective` pada koleksi data `impactJourneys` untuk menjelaskan tujuan utama dari setiap inisiatif dampak.
  * Menata ulang *Card UI* pada laman utama `/stories-impact` agar lebih ringkas (menghilangkan grid *Participant/Community impact* dari kartu *list*, fokus pada deskripsi pendek dan tujuan utama).
  * Menambahkan penampang visual khusus (berbintang estetik) untuk menampilkan **Objective** pada level halaman detail, sekaligus mengatur ulang proporsi penyebutan tautan sumber agar tidak menjadi *highlight* utama.
* **Integrasi Aset & Komponen Visual:**
  * Membangun daftar relasi data dinamis di `data/partnerLogos.ts` yang mendokumentasikan 41 logo kolaborasi dan 18 logo klien dalam format WebP resolusi tinggi.
  * Mendesain ulang `PartnerSection` menjadi dua lajur animasi pita *(Infinite Marquee)* terpisah: lajur atas untuk jejaring Kolaborasi (bergerak ke kiri) dan lajur bawah untuk instansi Klien (bergerak ke kanan).
  * Efek visual pada *marquee* meliputi transisi *grayscale-to-color* saat disentuh *(hover)* serta responsivitas adaptif dari level layar ponsel hingga *desktop* ekstra lebar.

---

## [1.8.2] - 2026-06-13
### Changed
* **Penyatuan Menu Navigasi:**
  * Menggabungkan menu "Community Stories" dan "Journeys & Impact" menjadi satu menu utama di navbar: **"Community & Impact"**.
  * Tautan navigasi langsung mengarah ke halaman utama `/stories-impact`.
* **Penyempurnaan Data & UI Stories-Impact:**
  * Menyesuaikan meta SEO di `app/stories-impact/page.tsx` menjadi `title: Community & Impact | Ekotifa`.
  * Memperbarui tautan sumber (`sourceUrl`) pada 3 *card* awal Community Stories ke tautan artikel spesifik dari Antara, Antara Megapolitan, dan Bogor Kita. Status ketiganya telah diubah menjadi `published` dan dijamin valid.
  * Menonaktifkan sementara tombol "View Impact Details" pada section *Journeys & Impact* menjadi *disabled button* ("Impact Details (Coming Soon)") untuk menghindari potensi *error 404 Not Found* karena *routing* internal detail page belum dibuat. Tombol "Read More" pada *Community Stories* tetap berfungsi membuka tautan sumber secara langsung.
* **Optimalisasi Gambar Berita Eksternal:**
  * Menarik gambar *hero* otentik (via `og:image`) langsung dari artikel Antara News, Antara Megapolitan, dan Bogor Kita untuk dipasang ke atribut `imageUrl`.
  * Memastikan komponen *card* menggunakan `alt={story.title}` agar SEO dan aksesibilitas ramah pembaca layar (screen reader).
  * Memperbarui konfigurasi `next.config.mjs` dengan mendaftarkan *remotePatterns* untuk `img.antaranews.com` dan `bogor-kita.com` sehingga `next/image` diizinkan menampilkan gambar lintas-domain tersebut.

---

## [1.8.1] - 2026-06-13
### Added
* **Pembuatan Halaman Stories & Impact (`/stories-impact`):**
  * Membuat route baru `app/stories-impact/page.tsx` untuk menampilkan fitur cerita komunitas dan dampak program Ekotifa.
  * Menerapkan metadata SEO khusus pada halaman ini (`title` dan `description`).
  * Mengintegrasikan data lokal dari `data/communityStories.ts` ke dalam antarmuka 6 *card* grid responsif untuk bagian **Community Stories**.
  * Mengintegrasikan data lokal dari `data/impactJourneys.ts` ke dalam antarmuka *card* berukuran besar yang premium (dengan foto *hero*, lokasi, deskripsi, *impact for participants/community*, dan CTA "View Impact Details") untuk bagian **Journeys & Impact**.
* **Pembuatan Local Data Stories & Impact:**
  * Membuat file data lokal `data/communityStories.ts` yang memuat 3 artikel berita/sumber publik awal (berkaitan dengan pemberdayaan, YPHB di Dieng, dan Baik Heritage). Data dilengkapi dengan status `needs-review` dan mewajibkan adanya `sourceUrl`.
  * Membuat file data lokal `data/impactJourneys.ts` yang memuat 3 proyek berdampak (YRC, Baik Heritage, dan Bantaragung) lengkap dengan deskripsi dampak kualitatif bagi peserta dan komunitas.
  * Menambahkan helper functions di masing-masing file (`getAll...`, `getActive...`, `getBySlug...`).

### Changed
* **Pembaruan Navigasi Navbar:**
  * Memperbarui tautan menu "Community Stories" agar mengarah ke `/stories-impact#community-stories` (pindah halaman dan menargetkan anchor scroll).
  * Memperbarui tautan menu "Journeys & Impact" agar mengarah ke `/stories-impact#journeys-impact`.
* **Pemberlakuan Review Manual:** Menandai seluruh data yang di-*hardcode* dari sumber *open source* (Antara, Bogor Kita, dll) dengan status `needs-review` atau `draft`. Data ini wajib direview secara manual sebelum dipublikasikan. Integrasi Supabase tetap ditunda.

---

## [1.8.0] - 2026-06-13
### Added
* **Integrasi Brief Community Stories & Journeys Impact:**
  * Memperbarui `PRD.md` dengan struktur halaman `/stories-impact` yang memuat dua section: *Community Stories* (maksimal 6 card dari sumber media/open source) dan *Journeys & Impact* (card berdesain premium dengan overlay clean).
  * Menyertakan skema detail impact page di `/stories-impact/[slug]`.
  * Memperbarui `FEATURE_PLAN.md` dengan penambahan *Milestone 2*, yang menjabarkan 8 fase baru untuk riset konten lokal, pembuatan halaman utama, detail page, komponen UI, hingga SEO, dan menunda Supabase hingga konten final.
  * Memperbarui `AI_RULES.md` dengan aturan ketat untuk menggunakan `sourceUrl`, dilarang mengarang berita (*anti-hallucination*), serta larangan meniru desain referensi UI secara 1:1.
  * Memperbarui `DATABASE_SETUP.md` dengan draft field sementara dan trigger RLS untuk tabel `community_stories` dan `impact_journeys`.

---

## [1.7.2] - 2026-06-12
### Added
* **Penyelesaian Data & Integrasi UI Area Jangkauan (Reach Locations):**
  * Membuat file statis lokal `data/reachLocations.ts` dengan 44 area domestik dan 6 area internasional.
  * Mengisi data koordinat `[latitude, longitude]` asli secara akurat untuk ke-50 titik lokasi tersebut.
  * Membuat helper function pembacaan data: `getAllReachLocations()`, `getDomesticReachLocations()`, dan `getInternationalReachLocations()`.
  * Menghubungkan data lokasi secara langsung ke komponen peta di `features/landing/components/MapSection.tsx` menggunakan `react-leaflet`.
  * Menghapus hardcode lokasi di dalam file MapSection dan menggantinya dengan iterasi data dinamis, lengkap dengan popup interaktif per titik.

---

## [1.7.1] - 2026-06-12
### Changed
* **Mapping Image Program:**
  * Melakukan mapping file gambar WebP di `public/images/programs/` ke field `imageUrl` di `data/programs.ts`.
  * Memastikan path gambar menggunakan string yang persis sama dengan nama file WebP (termasuk spasi/typo dari folder aslinya).
  * Mengubah atribut `alt` pada tag gambar di `app/programs/[slug]/page.tsx` menjadi lebih deskriptif (e.g. "[Title] [Subtitle] by Ekotifa").
  * Struktur slug, program id, serta aset global (about/hero/logo) dipertahankan sesuai konfigurasi awal.

---

## [1.7.0] - 2026-06-12
### Added
* **Pembuatan Detail Page Programs & Services:**
  * Membuat route dinamis Next.js App Router di `app/programs/[slug]/page.tsx` untuk menampilkan detail dari setiap program.
  * Mengambil data secara dinamis dari `data/programs.ts` menggunakan fungsi helper `getProgramBySlug`.
  * Menggunakan fungsi `notFound()` dari `next/navigation` untuk menangani slug program yang tidak ada secara elegan.
  * Menambahkan komponen premium dan bergaya *editorial* yang mencakup *breadcrumb*, *hero section*, deskripsi, *highlights*, *outcomes*, *benefits*, dan *meta information* (aktivitas/destinasi).
* **SEO & Static Site Generation (SSG):**
  * Menambahkan fungsi `generateStaticParams` agar semua halaman program dapat di-render secara statis (SSG) pada saat *build*.
  * Menambahkan fungsi `generateMetadata` untuk men-generate `title`, `description`, `keywords`, dan `openGraph` secara dinamis dan kaya kata kunci per program untuk skor SEO yang maksimal.

### Changed
* **Penyederhanaan UI (Clean & Minimalist Design):**
  * Menghilangkan penggunaan ikon yang berlebihan (*Sparkles*, *Target*, *CheckCircle2*) di dalam detail page untuk memprioritaskan tipografi, *whitespace*, dan keterbacaan.
  * Merubah layout *Highlights* menjadi desain numbering minimalis dan *Outcomes/Benefits* menjadi bullet abu-abu premium.
* **Pembaruan UI Mega Menu & Category Cards:**
  * Merevisi desain *Mega Menu* di navbar agar lebih *compact* (max 5 program per kategori).
  * Membuat *Homepage Category Cards* dengan efek *hover* premium menggunakan framer motion.
  * Membatasi daftar preview program di card maksimal 4 program agar UI tidak penuh.
  * Mengembalikan tombol *Explore All Programs* (dengan gaya teks minimalis & panah geser) yang mengarah ke `/programs` jika jumlah program di suatu kategori > 4.
  * Memperbaiki UX responsif *Category Card* di perangkat mobile: layar sentuh tidak bergantung pada hover. Daftar program dan tombol eksplorasi kini selalu tampil secara default.
  * Memastikan semua tautan preview program terhubung dengan benar ke `/programs/[slug]`.

* **Pembuatan Halaman Listing (/programs):**
  * Membuat *route* utama `app/programs/page.tsx` untuk menampilkan daftar lengkap dari semua kategori dan program.
  * Menerapkan desain *clean*, *premium*, dan *editorial* pada struktur *grid* program yang responsif.
  * Memasukkan metadata SEO khusus (`title`, `description`, `openGraph`) untuk halaman *Programs & Services*.
  * Menghilangkan potensi *error* 404 *Not Found* dari tombol ekslorasi di *homepage*.

* **Penandaan Milestone (FEATURE_PLAN.md):**
  * Secara resmi menandai **Phase 2 hingga Phase 7** sebagai *Selesai* pada peta jalan (*roadmap*). Proses audit QA kode, responsivitas desain, integrasi SEO meta tags, serta kompilasi produksi *build* telah sukses.

---

## [1.6.0] - 2026-06-12
### Added
* **Pembuatan Local Data Programs & Services:**
  * Membuat file local data di `data/programs.ts` (menggunakan TypeScript karena proyek berbasis TS).
  * Menyimpan seluruh informasi program terstruktur untuk 3 kategori utama (*Meaningful Journeys*, *Learning Expeditions*, dan *Purposeful Vacations*) dan seluruh programnya (26 program) lengkap dengan rincian highlights, outcomes, benefits, dsb.
  * Menyediakan helper functions query data: `getProgramCategories()`, `getAllPrograms()`, `getProgramsByCategory()`, `getProgramBySlug()`, dan `getFeaturedPrograms()`.
  * Mencatat bahwa data program masih berupa data lokal hardcoded untuk fase awal pengembangan, dan integrasi database Supabase ditunda hingga struktur konten final disetujui.
* **Dokumentasi Struktur Baru Programs & Services:**
  * Memasukkan detail brief Programs & Services ke dalam `PRD.md` yang terbagi ke dalam 3 kategori utama: *Meaningful Journeys* (target: individu, keluarga, komunitas, travelers), *Learning Expeditions* (target: sekolah, kampus, youth development), dan *Purposeful Vacations* (target: sekolah, perusahaan, komunitas).
  * Mencatat aturan navigasi baru di `PRD.md` (dropdown/mega menu saat hover menu navbar Programs & Services).
  * Mencatat perilaku card kategori di beranda/homepage (hover menampilkan daftar program, klik mengarah ke detail page).
  * Mendokumentasikan spesifikasi struktur premium halaman detail program di route `/programs/[slug]`.
* **Aturan AI Baru di AI_RULES.md:**
  * Menetapkan brief PM sebagai *source of truth* (dilarang mengarang atau menghapus program dari brief).
  * Melarang penyalinan desain referensi secara 1:1 (desain harus orisinal sesuai identitas Ekotifa).
  * Membatasi setup Supabase/admin CRUD sebelum struktur lokal dan detail page stabil.
  * Mewajibkan penerapan metadata SEO di setiap halaman dan detail program.

### Changed
* **Pembaruan Roadmap di FEATURE_PLAN.md:**
  * Merestrukturisasi roadmap pengembangan menjadi 8 fase terfokus untuk implementasi fitur Programs & Services secara bertahap.
* **Penyelarasan Draf Skema Database:**
  * Memperbarui draf skema tabel `programs` pada `DATABASE_SETUP.md` dengan menyertakan field-field baru yang dibutuhkan (seperti `category`, `audience`, `tagline`, `highlights`, `outcomes`, `benefits`, `gallery`, dll.) dan menandainya sebagai draf sementara yang tidak boleh dikunci/diaktifkan hingga konten & UI final.
* **Penundaan Teknis Supabase & Admin CRUD:**
  * Mencatat keputusan teknis untuk menggunakan *hardcoded local data* di awal pengembangan dan menunda migrasi Supabase serta pembuatan admin dashboard sampai konten/UI dinyatakan stabil.

---

## [1.5.0] - 2026-06-11
### Added
* **Penyelesaian Section Journeys & Impact:**
  * Menambahkan section dampak global Ekotifa pada beranda (`MapSection.tsx`), yang terbagi menjadi 5 kategori dampak utama: *Quality Education for Learners*, *Empowering Communities*, *Sustainable Development*, *Inspiring Action*, dan *Programs & Reach*.
  * Menyertakan closing statement: *“Every journey creates quality learning, empowers communities, and drives sustainable action.”*
* **Penyelesaian Section Our Founder & Team:**
  * Menyusun grid tim pada halaman About Us (`AboutClient.tsx`) yang terbagi rapi berdasarkan divisi tim: Komisaris & Co-founder, Direktur Utama & Co-Founder, Executive Customer Relations, Executive Government Relations, Strategic of Curriculum & Education, Production Staff, dan Field Operation.

### Changed
* **Perbaikan Punctuation & Typo Gelar Tim:**
  * Memperbaiki dan menyelaraskan penulisan nama serta gelar akademis anggota tim agar sesuai dengan brief terbaru (misalnya: `M.Ba`, `S.T, M.Ba`, `S.Hut, M.Si`, `M.M` tanpa dot/spasi berlebih).
  * Memperbaiki typo istilah bahasa Inggris di komponen dan data tim (`Goverment` -> `Government`, `Curiculum` -> `Curriculum`).
* **Pembersihan Kode About Page:**
  * Menghapus array data `teamMembers` yang tidak terpakai dari `app/about/page.tsx` karena data tim kini diatur langsung secara modular di dalam `AboutClient.tsx` (menyelesaikan potensi warning dan typescript build errors).
* **Pembaruan Dokumentasi Proyek:**
  * Menyelaraskan [PRD.md](file:///d:/Ekotifa-next/PRD.md) dan [FEATURE_PLAN.md](file:///d:/Ekotifa-next/FEATURE_PLAN.md) untuk mendokumentasikan susunan detail tim terbaru dan metrik statistik global Journeys & Impact.

---

## [1.4.0] - 2026-06-11
### Changed
* **Sinkronisasi Brief Struktur Proyek & Penundaan Backend:**
  * **Pembaruan [PRD.md](file:///d:/Ekotifa-next/PRD.md):** Memetakan menu navigasi baru (Home, About Us, Programs & Services, Community Stories, Journeys & Impact, Join Our Team!) dan skema halaman utama sesuai brief parsial. Menyertakan detail Visi, Misi, Core Values, dan Siklus Pendekatan Ekotifa. Mencatat status penangguhan (*on hold*) setup database dan admin dashboard.
  * **Pembaruan [FEATURE_PLAN.md](file:///d:/Ekotifa-next/FEATURE_PLAN.md):** Menambahkan milestone baru untuk integrasi copywriting & visual statis di Phase 2. Menandai Phase 3 & 4 (Supabase & Admin CRUD) sebagai ditangguhkan hingga struktur konten final tersedia.
  * **Pembaruan [AI_RULES.md](file:///d:/Ekotifa-next/AI_RULES.md):** Menambahkan aturan ketat anti-halusinasi yang melarang AI mengarang data/layout dinamis sebelum brief detail dikirim oleh pengguna.

---

## [1.3.0] - 2026-06-11
### Added
* **Implementasi Fondasi Supabase (JavaScript):**
  * Menginstal library `@supabase/supabase-js` dan `@supabase/ssr` (setelah disetujui user).
  * Membuat helper client browser `lib/supabase/client.js` menggunakan variabel lingkungan untuk client-side fetching.
  * Membuat helper client server `lib/supabase/server.js` untuk server-side rendering dengan dukungan cookies Next.js App Router.
  * Menyediakan file `.env.example` sebagai referensi konfigurasi environment variables.
  * Menyiapkan file [supabase/schema.sql](file:///d:/Ekotifa-next/supabase/schema.sql) berisi SQL awal untuk inisialisasi tabel `programs`, `career_posts`, dan `admin_users` beserta trigger updated_at dan kebijakan RLS (Row Level Security).

### Changed
* **Pembaruan Keputusan Teknis & Dokumentasi Supabase:**
  * **Peralihan Integrasi Karir:** Memutuskan untuk memigrasikan data lowongan karir (`career_posts`) sepenuhnya ke database Supabase, menghentikan penggunaan Google Sheet API (SheetDB) yang sebelumnya direncanakan. Google Form kini murni digunakan sebagai tujuan tautan tombol "Apply".
  * **Pembaruan [PRD.md](file:///d:/Ekotifa-next/PRD.md):** Menyertakan aturan sentralisasi data dinamis dan detail autentikasi admin di PRD.
  * **Pembaruan [FEATURE_PLAN.md](file:///d:/Ekotifa-next/FEATURE_PLAN.md):** Menyusun ulang *milestones* Phase 2 & Phase 3 agar memuat pengerjaan instalasi SDK, setup environment, pembuatan helper server/client, penulisan skema SQL, setup login, serta middleware proteksi rute sebelum berlanjut ke CRUD.
  * **Pembaruan [DATABASE_SETUP.md](file:///d:/Ekotifa-next/DATABASE_SETUP.md):** Memperbarui skema tabel `programs` dan `career_posts` agar bertipe `TEXT`, membuat tabel audit admin baru `admin_users`, dan mendefinisikan aturan Row Level Security (RLS) berbasis data relasi `admin_users.user_id = auth.uid()`.
  * **Pembuatan Berkas Baru [SUPABASE_SETUP.md](file:///d:/Ekotifa-next/SUPABASE_SETUP.md):** Menambahkan dokumen khusus yang merinci rencana instalasi library, struktur file `/lib/supabase` (klien, server, dan middleware), alur setup di dashboard Supabase, skrip SQL lengkap untuk tabel & RLS, serta panduan pendaftaran admin pertama kali secara manual.

---

## [1.2.0] - 2026-06-11
### Changed
* **Penyempurnaan Copywriting & SEO Metadata:**
  * Memperbarui tautan menu Navbar (About Us -> Tentang Kami, Explore -> Kuesioner, Jangkauan -> Area Jangkauan).
  * Menulis ulang headline Hero dengan gaya global ("Creative Ecotourism for Sustainable Impact") dan subheadline bahasa Indonesia yang profesional serta kaya kata kunci.
  * Merevisi copywriting pada section Tentang Kami (deskripsi perusahaan dan paragraf misi) dan section Program ("Ekowisata & Program Kreatif").
  * Melakukan lokalisasi teks interaktif pada kuesioner Traveler Personality dan label statistik area jangkauan pada peta.
  * Mengubah detail core values dan tulisan tombol CTA pada halaman Karir agar lebih profesional dan tidak eksklusif untuk staf IT.
  * Mengoptimalkan kata kunci SEO utama (ekowisata kreatif, program ekowisata, wisata edukasi, konservasi, pemberdayaan masyarakat) pada meta tags dan Open Graph di semua halaman.

---

## [1.1.0] - 2026-06-11
### Added
* **Phase 1: Finalisasi Struktur Next.js & Basic SEO:**
  * Membagi halaman utama (`app/page.tsx`), tentang kami (`app/about/page.tsx`), karir (`app/career/page.tsx`), dan detail program (`app/program/[id]/page.tsx`) menjadi **Server Components** agar dapat mengekspor metadata SEO secara dinamis/statis.
  * Membuat Client Components pendukung (`AboutClient.tsx`, `CareerClient.tsx`, dan `ProgramDetailClient.tsx`) untuk menangani interaktivitas klien (seperti state, useEffect, dan animasi Framer Motion).
  * Menambahkan metadata SEO yang komprehensif (termasuk tag `title`, `description`, `openGraph` basic, dan `locale`) pada setiap halaman penting.
  * Memastikan seluruh navigasi internal menggunakan `next/link` dari Next.js.
  * Memastikan semantic HTML (`header`, `nav`, `main`, `section`, `footer`) dan hierarki heading (satu `h1` di homepage) terjaga dengan baik.
  * Memastikan seluruh gambar memiliki atribut `alt` yang deskriptif.

---

## [1.0.0] - 2026-06-11
### Added
* Pembuatan file dokumentasi penting proyek di root folder:
  * `PRD.md` (Product Requirement Document).
  * `AI_RULES.md` (Aturan khusus untuk AI Coding Assistant).
  * `FEATURE_PLAN.md` (Rencana implementasi & roadmap fitur).
  * `DATABASE_SETUP.md` (Spesifikasi skema SQL dan konfigurasi keamanan Supabase).
  * `CHANGELOG.md` (Dokumen pelacakan versi ini).

### Changed
* **Migrasi Proyek:** Migrasi struktur kode frontend dari React Vite lama ke Next.js App Router (Next.js 16).
  * Pembuatan routing berbasis direktori `/app`.
  * Penyesuaian layout dan modularisasi komponen utama (Hero, Tentang Kami, Program, Lokasi, Kuesioner, Karir, Mitra).
  * Konfigurasi TypeScript dan Tailwind CSS v4 untuk ekosistem Next.js.
