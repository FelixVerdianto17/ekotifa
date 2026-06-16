# Ekotifa-next Design Guideline

> **Source of Truth for Ekotifa Visual Design**
> Panduan ini adalah pedoman mutlak untuk seluruh keputusan UI/UX dan iterasi *frontend* pada proyek Ekotifa-next.

## 1. Visual Direction & Identity
Ekotifa-next mengadopsi nuansa visual yang **Clean, Modern, Premium, dan Editorial**, sekaligus memancarkan kehangatan pariwisata berkelanjutan (ecotourism). 
- **Banyak Whitespace:** Biarkan elemen bernapas. Jangan penuhi satu *section* dengan terlalu banyak konten atau ornamen.
- **Minimalist:** Tidak terlalu ramai, hindari penggunaan lencana (*badges*) dan ikon yang berlebihan.
- **Editorial Layout:** Beri kesan seperti majalah/jurnal wisata modern—teks yang tertata rapi berdampingan dengan gambar/foto resolusi tinggi.

---

## 2. Brand Colors

### Primary Colors
Warna identitas ekowisata kreatif Ekotifa bergeser dari kemonotonan warna "hijau lingkungan".
- **Ekotifa Yellow/Gold (`#F4CA44`)**: Digunakan sebagai satu-satunya primary accent. Untuk label kecil, angka numerik (*numbering*), garis bawah (*underline*), area *highlight*, efek *hover* yang elegan, dan detail kecil pemanis layar.

### Neutral Colors
Digunakan sebagai palet utama penyusun fondasi arsitektur UI.
- **Black (`#0F0F0F`)**: Teks utama, judul (*heading*), dan basis blok gelap.
- **White (`#FFFFFF`)**: Latar belakang standar utama.
- **Soft White (`#FAFAF7`)**: Latar belakang pendukung untuk kartu atau *section* agar memecah kebosanan dari warna putih murni.
- **Light Gray (`#E5E5E5`)**: Border, garis pemisah (*divider*).
- **Medium Gray (`#71717A`)**: Teks paragraf pendukung (*muted text*), teks meta.

### ⛔ Color Rules (Larangan)
1. **Dilarang** menggunakan "Eco Green" (hijau tua atau hijau terang) sebagai warna utama atau rona latar blok yang mendominasi.
2. **Dilarang** menggunakan warna hijau terang untuk *badge*, judul, atau *accent* elemen utama.
3. **Dilarang** menggunakan warna Jingga/Orange di elemen UI apapun.
4. **Dilarang** mencampurkan terlalu banyak palet warna mencolok dalam satu *section* UI.

---

## 3. Typography
- **Heading**: Besar, tebal (*bold*), dan jelas. Memiliki kontras ukuran yang dramatis *(Editorial feel)*.
- **Subheading**: Proporsi dan *weight* font harus lebih ringan dari judul utama.
- **Paragraph**: Harus punya *line-height* *(leading)* yang longgar (seperti `leading-relaxed`) dan *font-weight* ringan/reguler agar nyaman dibaca panjang.
- **Uppercase Rule**: Hindari kapitalisasi huruf (ALL CAPS) pada kalimat yang panjang. Gunakan huruf kapital murni HANYA untuk label/seksi super kecil (contoh: "OUR PROGRAMS", "JOURNEYS & IMPACT").

---

## 4. Components & Elements

### Icon Rules
- Jangan gunakan ikon secara berlebihan, apalagi hanya untuk hiasan (dekorasi kosong).
- Jangan pasang ikon untuk setiap titik (*bullet item*) pada daftar panjang. Gunakan *bullet points* bulat biasa atau penomoran rapi.
- Ikon HANYA dipakai jika mempermudah pemahaman kognitif bacaan.
- **Batas Maksimal**: Jika benar-benar perlu, gunakan 1 ikon utama per kartu *(card)*.

### Badge (Pita/Lencana) Rules
- **Tujuan Khusus**: Badge HANYA diizinkan untuk menandakan *Category*, *Status*, dan *Small Label Section* (penanda kecil bagian).
- Jangan menjejali terlalu banyak *badge* di dalam satu kartu.
- *Badge* HANYA elemen meta; ia TIDAK BOLEH tampil lebih dominan dari pada elemen *Title* maupun Konten Utama.
- Hindari *badge* dekoratif yang nir-fungsi.

### Button & CTA Rules
- **Primary Button**: Warna latar belakang menggunakan *Black* (`#0F0F0F`) yang solid. Efek *hover* bisa menggunakan sentilan warna emas/kuning (`#F4CA44`) secara elegan.
- **Secondary Button**: Gunakan latar transparan/putih dengan pinggiran garis *(border)* berwarna hitam atau abu-abu.
- **Hover States**: Efek sentuhan menonjolkan sentilan warna emas/kuning (`#F4CA44`) secara elegan.
- **Hierarchy**: Jangan menimbun terlalu banyak tombol CTA secara sejajar dalam satu seksi. Satu CTA utama biasanya sudah cukup.

### Card Design
- **Garis Bentuk**: Gunakan radius melengkung tingkat *medium/large* (contoh: `rounded-3xl` atau `rounded-[2rem]`) agar modern dan mulus.
- **Border**: Border halus dan tipis (contoh: `border-zinc-100` / `border-[#E5E5E5]`).
- **Dimensi**: Terapkan bayangan halus *(subtle shadow)* atau transisi gaya sentuhan *(subtle hover)* seperti perubahan border. 
- **Konten Visual**: Jika ada gambar, jadikan gambar tersebut pahlawan utamanya. Jangan mengerumuni *card* dengan pernak-pernik atau tulisan meta kecil yang padat.
- Harus dirancang agar tetap bersih (*clean*) dan enak dipandang dalam ukuran seluler (*mobile*).

---

## 5. Layout & Imagery

### Section Layout
- **Ruang Napas**: Setiap *section* vertikal MAUPUN horizontal harus memiliki *padding* atau jarak yang **sangat lega/lapang**.
- **Komposisi Default**: Setiap blok utama sangat dianjurkan memiliki komposisi: `Label Kecil Uppercase` + `Heading Besar` + `Deskripsi Pendek`.
- **Aturan Beranda (*Homepage*)**: Homepage Ekotifa HANYA berfungsi sebagai **Cuplikan** (Preview). Semua penjelasan detail/teks artikel ekstra panjang wajib dikirim rutenya ke halaman *detail/child pages* terkait.

### Image Rules
- Utamakan ekstensi *WebP* atau *AVIF* yang sudah terkompresi canggih.
- Harus dipanggil melalui *wrapper* `<Image/>` (Next.js) selama aman dan di-izin-kan secara konfigurasi.
- **Aksesibilitas**: Sematkan *alt text* (deskripsi gambar) yang spesifik dan jelas, BUKAN teks statis seadanya.
- Jadikan porsi gambar fotorealistik sebagai senjata estetik utama (pengganti peran *icons* yang dihindari).
- **Eksposur**: Dilarang memajang gambar/foto mentah yang terlalu gelap kecuali disengaja untuk memuat *white typography* sebagai teks lapisan atasnya (seperti di komponen *Hero* atau *Banner*).
