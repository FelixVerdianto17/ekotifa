import CareerClient from './CareerClient';
import { getCareerPosts } from '@/lib/supabase/queries';

export const metadata = {
  title: "Join Our Team | Ekotifa",
  description: "Explore career opportunities and join Ekotifa in creating meaningful journeys and sustainable impact.",
  keywords: ["karir ekowisata", "lowongan konservasi", "loker Bogor", "pengembangan masyarakat", "wisata edukasi", "kerja di Ekotifa"],
  openGraph: {
    title: "Join Our Team | Ekotifa",
    description: "Explore career opportunities and join Ekotifa in creating meaningful journeys and sustainable impact.",
    url: "https://ekotifa.com/career",
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
};

export const dynamic = 'force-dynamic';

export default async function CareerPage() {
  const jobOpenings = await getCareerPosts();

  return <CareerClient initialJobOpenings={jobOpenings} />;
}