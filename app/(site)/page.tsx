import Hero from '@/features/landing/components/Hero';
import AboutSection from '@/features/landing/components/AboutSection';
import ImpactSection from '@/features/landing/components/ImpactSection';
import ProgramSection from '@/features/landing/components/ProgramSection';
import TravelerQuiz from '@/features/landing/components/TravelerQuiz';
import PartnerSection from '@/features/landing/components/PartnerSection';
import MapWrapper from '@/components/MapWrapper';
import OrganizationJsonLd from '@/components/seo/OrganizationJsonLd';
import WebsiteJsonLd from '@/components/seo/WebsiteJsonLd';

export const metadata = {
  title: "Ekotifa - Ekowisata Kreatif & Wisata Edukasi Berkelanjutan",
  description: "Ekotifa (PT Ekowisata Kreatif Indonesia) menghadirkan program ekowisata kreatif berbasis edukasi lingkungan, konservasi alam, dan pemberdayaan masyarakat lokal.",
  keywords: ["ekowisata kreatif", "program ekowisata", "edukasi lingkungan", "konservasi", "pemberdayaan masyarakat", "wisata edukasi", "Ekotifa"],
  openGraph: {
    title: "Ekotifa - Ekowisata Kreatif & Wisata Edukasi Berkelanjutan",
    description: "Ekotifa (PT Ekowisata Kreatif Indonesia) menghadirkan program ekowisata kreatif berbasis edukasi lingkungan, konservasi alam, dan pemberdayaan masyarakat lokal.",
    url: "https://ekotifa.id",
    siteName: "Ekotifa",
    images: [
      {
        url: "/images/sections/Hero.webp",
        width: 1200,
        height: 630,
        alt: "Ekotifa - Ekowisata Kreatif & Wisata Edukasi Berkelanjutan",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  alternates: {
    canonical: "https://ekotifa.id",
  },
};

export default function Home() {
  return (
    <div className="flex w-full flex-col">
      <OrganizationJsonLd />
      <WebsiteJsonLd />
      <Hero />
      <div id="about">
        <AboutSection />
      </div>
      <div id="impact">
        <ImpactSection />
      </div>
      <div id="program">
        <ProgramSection />
      </div>
      <div id="jangkauan">
        <MapWrapper />
      </div>
      <div id="stories">
        <TravelerQuiz />
      </div>
      <PartnerSection />
    </div>
  );
}
