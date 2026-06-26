import AboutClient from './AboutClient';
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd';

export const metadata = {
  title: "About Us - Ekotifa | Pelopor Ekowisata Kreatif",
  description: "Profil PT Ekowisata Kreatif Indonesia (Ekotifa). Pelajari visi kami dalam memadukan pariwisata berkelanjutan, riset ekologi, dan pemberdayaan masyarakat.",
  keywords: ["ekowisata kreatif", "program ekowisata", "wisata edukasi", "konservasi alam", "pemberdayaan masyarakat", "Tentang Ekotifa"],
  openGraph: {
    title: "About Us - Ekotifa | Pelopor Ekowisata Kreatif",
    description: "Profil PT Ekowisata Kreatif Indonesia (Ekotifa). Pelajari visi kami dalam memadukan pariwisata berkelanjutan, riset ekologi, dan pemberdayaan masyarakat.",
    url: "https://ekotifa.id/about",
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
  alternates: {
    canonical: "https://ekotifa.id/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd 
        items={[
          { name: 'Home', item: 'https://ekotifa.id' },
          { name: 'About Us', item: 'https://ekotifa.id/about' }
        ]} 
      />
      <AboutClient />
    </>
  );
}