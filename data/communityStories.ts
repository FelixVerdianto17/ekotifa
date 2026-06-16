export const communityStories = [
  {
    id: "cs-1",
    title: "Ekotifa Inovasi dalam Pemberdayaan Masyarakat di Kota Bogor",
    slug: "ekotifa-inovasi-pemberdayaan-masyarakat-bogor",
    date: "2023-05-15",
    category: "Pemberdayaan",
    summary: "Ekotifa menghadirkan inovasi wisata berkelanjutan yang melibatkan UMKM lokal. Program ini mengubah potensi sejarah Kota Bogor menjadi nilai ekonomi yang dirasakan langsung oleh warga sekitar.",
    imageUrl: "https://img.antaranews.com/cache/1200x800/2023/02/21/1676989223687.jpg",
    sourceName: "Antara News",
    sourceUrl: "https://www.antaranews.com/berita/3407715/ekotifa-inovasi-dalam-pemberdayaan-masyarakat-di-kota-bogor",
    status: "published",
    isActive: true,
  },
  {
    id: "cs-2",
    title: "Ekotifa Fasilitasi 223 Siswa YPHB Plus Bogor Riset di Dieng",
    slug: "ekotifa-fasilitasi-siswa-yphb-riset-dieng",
    date: "2023-06-20",
    category: "Edukasi",
    summary: "Melalui program YRC, Ekotifa mendampingi ratusan siswa melakukan riset lapangan di Dieng. Inovasi karya siswa ini bahkan turut diuji kelayakannya oleh praktisi dan peneliti dari BRIN.",
    imageUrl: "https://img.antaranews.com/cache/1200x800/2023/02/26/YPN01130.jpg",
    sourceName: "Antara Megapolitan",
    sourceUrl: "https://megapolitan.antaranews.com/berita/232695/ekotifa-fasilitasi-223-siswa-yphb-plus-bogor-riset-di-dieng",
    status: "published",
    isActive: true,
  },
  {
    id: "cs-3",
    title: "Baik Heritage: Cara Baru Nikmati Sejarah dan Budaya Bogor",
    slug: "baik-heritage-menikmati-sejarah-kota-bogor",
    date: "2023-08-10",
    category: "Wisata Budaya",
    summary: "Program Baik Heritage inisiasi Ekotifa mengajak wisatawan menjelajahi sisa Kerajaan Padjajaran dan warisan kolonial secara ramah lingkungan dengan bersepeda atau berjalan kaki.",
    imageUrl: "https://bogor-kita.com/wp-content/uploads/2021/12/IMG-20211223-WA0001-1000x600.jpg",
    sourceName: "Bogor Kita",
    sourceUrl: "https://bogor-kita.com/baik-heritage-ajak-traveler-kembali-ke-masa-eropa-zaman-dulu/",
    status: "published",
    isActive: true,
  }
];

export const getAllCommunityStories = () => communityStories;
export const getActiveCommunityStories = () => communityStories.filter(story => story.isActive);
export const getCommunityStoryBySlug = (slug: string) => communityStories.find(story => story.slug === slug);
