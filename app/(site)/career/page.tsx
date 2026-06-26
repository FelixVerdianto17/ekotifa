import CareerClient from './CareerClient';
import { getCareerPosts } from '@/sanity/lib/queries';
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd';

export const metadata = {
  title: "Join Our Team | Ekotifa",
  description: "Explore career opportunities and join Ekotifa in creating meaningful journeys and sustainable impact.",
  keywords: ["karir ekowisata", "lowongan konservasi", "loker Bogor", "pengembangan masyarakat", "wisata edukasi", "kerja di Ekotifa"],
  openGraph: {
    title: "Join Our Team | Ekotifa",
    description: "Explore career opportunities and join Ekotifa in creating meaningful journeys and sustainable impact.",
    url: "https://ekotifa.id/career",
    siteName: "Ekotifa",
    images: [
      {
        url: "https://img.youtube.com/vi/v4Q_7zIIBUw/maxresdefault.jpg",
        width: 1200,
        height: 630,
        alt: "Join Our Team - Ekotifa",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://ekotifa.id/career",
  },
};

export const revalidate = 3600; // ISR for career posts

export default async function CareerPage() {
  const jobOpenings = await getCareerPosts();

  return (
    <>
      <BreadcrumbJsonLd 
        items={[
          { name: 'Home', item: 'https://ekotifa.id' },
          { name: 'Career', item: 'https://ekotifa.id/career' }
        ]} 
      />
      <CareerClient initialJobOpenings={jobOpenings} />
    </>
  );
}