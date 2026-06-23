import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getImpactJourneyBySlug, getActiveImpactJourneys } from '@/data/impactJourneys';

// Helper for type
type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  const journeys = getActiveImpactJourneys();
  return journeys.map((journey) => ({
    slug: journey.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const journey = getImpactJourneyBySlug(slug);

  if (!journey) {
    return {
      title: 'Not Found | Ekotifa Community & Impact',
    };
  }

  return {
    title: `${journey.title} | Ekotifa Community & Impact`,
    description: journey.objective || journey.description,
    openGraph: {
      title: `${journey.title} | Ekotifa Community & Impact`,
      description: journey.objective || journey.description,
      images: journey.imageUrl ? [journey.imageUrl] : [],
    },
  };
}

export default async function ImpactJourneyDetail({ params }: Props) {
  const { slug } = await params;
  const journey = getImpactJourneyBySlug(slug);

  if (!journey) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-zinc-50 pt-24 pb-24">
      {/* Breadcrumb & Navigation */}
      <div className="max-w-5xl mx-auto px-6 mb-8">
        <nav className="flex text-sm text-zinc-500 font-medium" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-2">
            <li>
              <Link href="/" className="hover:text-[#F4CA44] transition-colors">Home</Link>
            </li>
            <li><span className="text-zinc-300">/</span></li>
            <li>
              <Link href="/stories-impact" className="hover:text-[#F4CA44] transition-colors">Community & Impact</Link>
            </li>
            <li><span className="text-zinc-300">/</span></li>
            <li className="text-zinc-900 truncate max-w-[200px] md:max-w-none" aria-current="page">
              {journey.title}
            </li>
          </ol>
        </nav>
      </div>

      <article className="max-w-5xl mx-auto px-6">
        {/* Hero Image */}
        <div className="relative w-full aspect-[21/9] md:aspect-[2.5/1] rounded-[2rem] overflow-hidden mb-12 shadow-sm border border-zinc-100">
          <Image
            src={journey.imageUrl || '/images/placeholder.webp'}
            alt={journey.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
          {/* Thin overlay to make text pop if added, though we place text below for clean look */}
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* Header Content */}
        <header className="mb-12 border-b border-zinc-200 pb-12">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-block bg-zinc-50 text-zinc-600 text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-zinc-200">
              {journey.relatedProgram}
            </span>
            <div className="flex items-center gap-2 text-zinc-500 bg-white px-4 py-1.5 rounded-full border border-zinc-200 text-[11px] font-bold uppercase tracking-widest">
              <svg className="w-3.5 h-3.5 text-[#F4CA44]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {journey.location}
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-zinc-900 mb-8 leading-tight tracking-tight">
            {journey.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-600 leading-relaxed font-light max-w-4xl">
            {journey.description}
          </p>
        </header>



        {/* Impact Cards Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 mb-8">Measurable Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Participant Impact */}
            <div className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm transition-all hover:shadow-md hover:border-zinc-200">
              <h3 className="text-lg font-bold text-zinc-900 mb-4 flex items-center gap-3">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F4CA44]/20 flex items-center justify-center border border-[#F4CA44]/50">
                  <span className="w-3 h-3 rounded-full bg-[#F4CA44]"></span>
                </span>
                Impact for Participants
              </h3>
              <p className="text-zinc-600 leading-relaxed">
                {journey.impactForParticipants}
              </p>
            </div>

            {/* Community Impact */}
            <div className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm transition-all hover:shadow-md hover:border-yellow-100">
              <h3 className="text-lg font-bold text-zinc-900 mb-4 flex items-center gap-3">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center border border-yellow-100">
                  <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                </span>
                Impact for Community
              </h3>
              <p className="text-zinc-600 leading-relaxed">
                {journey.impactForCommunity}
              </p>
            </div>
          </div>
        </section>

        {/* Objective Section */}
        {journey.objective && (
          <section className="mb-16 pt-8 border-t border-zinc-200">
            <h2 className="text-sm font-bold uppercase tracking-widest text-[#F4CA44] mb-4">
              Objective
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed">
              {journey.objective}
            </p>
          </section>
        )}

        {/* CTA Back */}
        <div className="mt-16 pt-12 border-t border-zinc-200 text-center md:text-left">
          <Link 
            href="/stories-impact#journeys-impact" 
            className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-zinc-900 text-white text-[13px] font-bold uppercase tracking-widest hover:bg-[#F4CA44] transition-colors focus:outline-none focus:ring-4 focus:ring-yellow-500/20 group"
          >
            <svg className="w-4 h-4 mr-3 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to All Journeys
          </Link>
        </div>

      </article>
    </main>
  );
}
