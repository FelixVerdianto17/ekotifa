import AboutClient from './AboutClient';

export const metadata = {
  title: "About Us - Ekotifa | Pelopor Ekowisata Kreatif",
  description: "Profil PT Ekowisata Kreatif Indonesia (Ekotifa). Pelajari visi kami dalam memadukan pariwisata berkelanjutan, riset ekologi, dan pemberdayaan masyarakat.",
  keywords: ["ekowisata kreatif", "program ekowisata", "wisata edukasi", "konservasi alam", "pemberdayaan masyarakat", "Tentang Ekotifa"],
  openGraph: {
    title: "About Us - Ekotifa | Pelopor Ekowisata Kreatif",
    description: "Profil PT Ekowisata Kreatif Indonesia (Ekotifa). Pelajari visi kami dalam memadukan pariwisata berkelanjutan, riset ekologi, dan pemberdayaan masyarakat.",
    url: "https://ekotifa.com/about",
    siteName: "Ekotifa",
    images: [
      {
        url: "/images/sections/About.webp",
        width: 1200,
        height: 630,
        alt: "Tentang Kami - Ekotifa | Pelopor Ekowisata Kreatif",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}