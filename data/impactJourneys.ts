export const impactJourneys = [
  {
    id: "ij-1",
    title: "Youth Research Camp (YRC) di Dataran Tinggi Dieng",
    slug: "youth-research-camp-dieng",
    relatedProgram: "Learning Expeditions",
    location: "Dieng, Jawa Tengah",
    description: "Kegiatan riset lapangan kolaborasi Ekotifa yang memfasilitasi ratusan siswa SMA untuk meneliti isu lingkungan dan ekonomi di kawasan Dieng, hingga menghasilkan produk inovatif berkelanjutan.",
    objective: "Melahirkan 500+ inovator muda setiap tahunnya yang mampu memberikan solusi nyata terhadap isu lingkungan dan agrikultur di kawasan dataran tinggi.",
    impactForParticipants: "Mengembangkan kerangka berpikir kritis, kemampuan riset metodologis, dan kepekaan terhadap solusi isu keberlanjutan.",
    impactForCommunity: "Inovasi siswa (seperti bioplastik dari kentang) memberikan wawasan baru bagi masyarakat lokal dalam mengelola limbah pertanian.",
    imageUrl: "/images/programs/youth-research-camp.webp",
    sourceName: "Antara Megapolitan",
    sourceUrl: "https://megapolitan.antaranews.com/",
    status: "needs-review",
    isActive: true,
  },
  {
    id: "ij-2",
    title: "Revitalisasi Sejarah Lokal lewat Baik Heritage",
    slug: "baik-heritage-bogor",
    relatedProgram: "Meaningful Journeys",
    location: "Kota Bogor, Jawa Barat",
    description: "Wisata edukasi sejarah dengan pendekatan low-carbon (bersepeda dan berjalan kaki) yang melintasi situs Kerajaan Pakuan Padjajaran hingga kawasan arsitektur kolonial Belanda.",
    objective: "Mempromosikan pariwisata rendah karbon (low-carbon tourism) di area perkotaan dengan menargetkan peningkatan kunjungan wisata sehat untuk menghidupkan kembali ekonomi situs bersejarah.",
    impactForParticipants: "Meningkatkan apresiasi terhadap cagar budaya lokal sembari mempromosikan gaya hidup sehat dan ramah lingkungan.",
    impactForCommunity: "Menggerakkan perekonomian UMKM di rute wisata dan menumbuhkan kesadaran kolektif untuk menjaga kelestarian sejarah kota.",
    imageUrl: "/images/programs/bike-hertiage.webp",
    sourceName: "Bogor Kita",
    sourceUrl: "https://bogor-kita.com/",
    status: "needs-review",
    isActive: true,
  },
  {
    id: "ij-3",
    title: "Pengabdian Desa Wisata Bantaragung",
    slug: "pengabdian-desa-wisata-bantaragung",
    relatedProgram: "Community Service",
    location: "Bantaragung, Majalengka",
    description: "Program Live In dimana para pemuda menetap bersama warga desa untuk belajar kearifan lokal, bertani, dan turut berkontribusi dalam pengembangan potensi wisata desa.",
    objective: "Plant 1,000 trees/corals in the vicinity of 1 hectare of the conservation area. Implementation of the program until 2030, with a minimum of 2 locations per year.",
    impactForParticipants: "Membangun empati, resiliensi, dan pemahaman budaya melalui interaksi langsung dengan keseharian warga desa.",
    impactForCommunity: "Peningkatan keterampilan pengelola homestay, pemandu lokal, serta memberikan dampak ekonomi langsung dari kehadiran peserta.",
    imageUrl: "/images/programs/Comunity Service.webp",
    sourceName: "Ekotifa Official",
    sourceUrl: "",
    status: "draft",
    isActive: true,
  }
];

export const getAllImpactJourneys = () => impactJourneys;
export const getActiveImpactJourneys = () => impactJourneys.filter(journey => journey.isActive);
export const getImpactJourneyBySlug = (slug: string) => impactJourneys.find(journey => journey.slug === slug);
