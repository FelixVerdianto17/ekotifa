import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getActiveImpactJourneys } from '@/data/impactJourneys';
import CommunityStoriesCarousel from '@/components/CommunityStoriesCarousel';
import { cn } from '@/lib/utils';
import { getCommunityStories } from '@/sanity/lib/queries';
import { getActiveCommunityStories } from '@/data/communityStories';
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd';

export const metadata: Metadata = {
  title: 'Community & Impact | Ekotifa',
  description: 'Community stories and impact journeys from Ekotifa’s sustainable tourism, learning expeditions, and community empowerment programs.',
  alternates: {
    canonical: 'https://ekotifa.id/stories-impact',
  },
};

export const revalidate = 3600; // ISR for sanity stories

export default async function StoriesImpactPage() {
  const sanityStories = await getCommunityStories();
  const hardcodedStories = getActiveCommunityStories();
  const communityStories = [...sanityStories, ...hardcodedStories];
  
  const impactJourneys = getActiveImpactJourneys();

  return (
    <main className="min-h-screen bg-zinc-50 pt-24 pb-20">
      <BreadcrumbJsonLd 
        items={[
          { name: 'Home', item: 'https://ekotifa.id' },
          { name: 'Community & Impact', item: 'https://ekotifa.id/stories-impact' }
        ]} 
      />
      {/* Header Section */}
      <section className="px-6 py-16 md:py-24 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-zinc-900 mb-6 tracking-tight">
          Stories & <span className="text-[#F4CA44]">Impact</span>
        </h1>
        <p className="text-zinc-600 max-w-2xl mx-auto text-lg md:text-xl">
          Discover the meaningful changes and inspiring stories we create together with our community, partners, and participants across Indonesia.
        </p>
      </section>

      {/* Community Stories Section */}
      <section id="community-stories" className="px-6 py-16 max-w-7xl mx-auto scroll-mt-24">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-3 tracking-tight">Community Stories</h2>
            <p className="text-zinc-600 text-lg">Latest news and stories from our ecosystem.</p>
          </div>
        </div>

        {communityStories.length === 0 ? (
          <p className="text-zinc-500 text-center py-10 text-xl font-medium">Community stories will be available soon.</p>
        ) : (
          <CommunityStoriesCarousel stories={communityStories} />
        )}
      </section>

      {/* Journeys & Impact Section */}
      <section id="journeys-impact" className="px-6 py-24 mt-12 bg-white scroll-mt-24 rounded-t-[3rem] shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.05)] border-t border-zinc-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-6 tracking-tight">Journeys & <span className="text-[#F4CA44]">Impact</span></h2>
            <p className="text-zinc-600 text-lg md:text-xl max-w-3xl mx-auto">
              Real footprints from our purposeful expeditions. Witness how each journey translates into measurable impact for communities and participants.
            </p>
          </div>

          <div className="flex flex-col gap-24">
            {impactJourneys.length === 0 ? (
              <p className="text-zinc-500 text-center py-10 text-xl font-medium">Impact journeys will be available soon.</p>
            ) : (
              impactJourneys.map((journey, index) => (
                <div  
                key={journey.id} 
                className={cn(
                  "flex flex-col lg:items-center gap-10 lg:gap-20",
                  index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                )}
              >
                {/* Image Side */}
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl group">
                    <Image
                      src={journey.imageUrl || '/images/placeholder.webp'}
                      alt={`Visual impact of ${journey.title}`}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-8 left-8 right-8">

                      <h3 className="text-white text-3xl md:text-4xl font-bold leading-tight drop-shadow-md">
                        {journey.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <div className="flex items-center gap-2.5 text-zinc-500 mb-6 bg-zinc-50 w-fit px-4 py-2 rounded-full border border-zinc-200">
                    <svg className="w-4 h-4 text-[#F4CA44]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="font-bold text-[11px] tracking-widest uppercase">{journey.location}</span>
                  </div>
                  
                  <p className="text-zinc-600 text-lg mb-10 leading-relaxed">
                    {journey.description}
                  </p>

                  <div>
                    <Link 
                      href={`/stories-impact/${journey.slug}`}
                      className="inline-flex items-center justify-center h-14 px-10 rounded-full bg-zinc-900 text-white text-[11px] font-bold uppercase tracking-widest hover:bg-[#F4CA44] transition-colors focus:outline-none focus:ring-4 focus:ring-yellow-500/20"
                    >
                      View Impact Details
                    </Link>
                  </div>
                </div>
              </div>
            ))
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
