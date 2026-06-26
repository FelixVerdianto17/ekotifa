import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight, Compass, MapPin } from "lucide-react";
import { getProgramBySlug, getAllProgramSlugs } from "@/data/programs";
import Image from "next/image";
import { ContactButton } from "@/components/ui/ContactButton";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import ArticleJsonLd from "@/components/seo/ArticleJsonLd";

// Static Site Generation (SSG)
export function generateStaticParams() {
  const slugs = getAllProgramSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

// SEO Metadata Generation
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  
  if (!program) {
    return { title: "Program Not Found | Ekotifa" };
  }
  
  const title = program.seoMetadata?.title || `${program.title} | Ekotifa Programs & Services`;
  const description = program.seoMetadata?.description || program.shortDescription || program.tagline || program.description.substring(0, 150);
  
  return {
    title: title,
    description: description,
    keywords: [program.title, program.category, "Ekowisata", "Program Edukasi", "Ekotifa", "Sustainable Tourism"],
    openGraph: {
      title: title,
      description: description,
      type: "website",
      images: program.imageUrl ? [{ url: program.imageUrl, alt: program.title }] : undefined,
    },
    alternates: {
      canonical: `https://ekotifa.id/programs/${slug}`,
    }
  };
}

export default async function ProgramDetailPage({ params }: Props) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  
  // Handle 404 cleanly
  if (!program) {
    notFound();
  }

  return (
    <main className="w-full bg-[#FDFDFD] pb-24 pt-32 md:pt-40">
      <ArticleJsonLd 
        title={program.title}
        description={program.description.substring(0, 150)}
        imageUrl={program.imageUrl}
      />
      <BreadcrumbJsonLd 
        items={[
          { name: 'Home', item: 'https://ekotifa.id' },
          { name: 'Programs & Services', item: 'https://ekotifa.id/programs' },
          { name: program.title, item: `https://ekotifa.id/programs/${slug}` }
        ]} 
      />
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Breadcrumb */}
        <nav className="mb-8 flex flex-wrap items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-zinc-400">
          <Link href="/" className="hover:text-yellow-600 transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link href="/programs" className="hover:text-yellow-600 transition-colors">Programs</Link>
          <ChevronRight size={12} />
          <span className="text-zinc-900">{program.title}</span>
        </nav>


        {/* Hero Section */}
        <div className="relative mb-16 overflow-hidden rounded-[2.5rem] bg-zinc-100 aspect-[16/9] md:aspect-[21/9] flex items-end shadow-2xl">
          <Image 
            src={program.imageUrl || '/images/programs/placeholder.jpg'} 
            alt={`${program.title} ${program.subtitle ? program.subtitle.toLowerCase() : 'experience'} by Ekotifa`} 
            fill
            sizes="(max-width: 1400px) 100vw, 1400px"
            className="absolute inset-0 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent" />
          
          <div className="relative z-10 p-8 md:p-16 w-full max-w-4xl">

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
              {program.title}
            </h1>
            <p className="text-xl md:text-2xl font-light text-zinc-200">
              {program.subtitle}
            </p>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Description & Details */}
          <div className="lg:col-span-8 flex flex-col gap-12">
            
            <section>
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[#F4CA44] mb-4">About The Program</h2>
              {program.tagline && (
                <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6">{program.tagline}</h3>
              )}
              <p className="text-zinc-600 leading-relaxed text-lg whitespace-pre-line">
                {program.description}
              </p>
            </section>

            {/* Highlights */}
            {program.highlights && program.highlights.length > 0 && (
              <section>
                <div className="mb-6 pb-4 border-b border-zinc-100">
                  <h3 className="text-2xl font-bold text-zinc-900">Program Highlights</h3>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {program.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4 bg-zinc-50 rounded-2xl p-5 border border-zinc-100">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-200 text-xs font-bold text-zinc-600">
                        {idx + 1}
                      </span>
                      <span className="text-zinc-700 font-medium leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Outcomes & Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              
              {program.outcomes && program.outcomes.length > 0 && (
                <section>
                  <div className="mb-6 pb-4 border-b border-zinc-100">
                    <h3 className="text-xl font-bold text-zinc-900">Outcomes</h3>
                  </div>
                  <ul className="flex flex-col gap-4">
                    {program.outcomes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-zinc-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 shrink-0 mt-2.5" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {program.benefits && program.benefits.length > 0 && (
                <section>
                  <div className="mb-6 pb-4 border-b border-zinc-100">
                    <h3 className="text-xl font-bold text-zinc-900">Benefits</h3>
                  </div>
                  <ul className="flex flex-col gap-4">
                    {program.benefits.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-zinc-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 shrink-0 mt-2.5" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>
            
          </div>

          {/* Right Column: Floating Meta Card */}
          <div className="lg:col-span-4 relative">
            <div className="sticky top-32 rounded-[2rem] bg-zinc-900 p-8 md:p-10 shadow-2xl text-white">
              
              <h3 className="text-xl font-bold mb-8 pb-6 border-b border-white/10 flex items-center justify-between">
                Program Meta
              </h3>

              {program.suitableDestinations && program.suitableDestinations.length > 0 && (
                <div className="mb-8">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-4 flex items-center gap-2">
                    <MapPin size={14} className="text-[#F4CA44]" /> Suitable Destinations
                  </h4>
                  <ul className="flex flex-wrap gap-2.5">
                    {program.suitableDestinations.map((dest, idx) => (
                      <li key={idx} className="bg-white/10 px-3.5 py-1.5 rounded-full text-xs font-medium text-zinc-200 border border-white/5">
                        {dest}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {program.suitableActivities && program.suitableActivities.length > 0 && (
                <div className="mb-10">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-4 flex items-center gap-2">
                    <Compass size={14} className="text-[#F4CA44]" /> Key Activities
                  </h4>
                  <ul className="flex flex-wrap gap-2.5">
                    {program.suitableActivities.map((act, idx) => (
                      <li key={idx} className="bg-white/10 px-3.5 py-1.5 rounded-full text-xs font-medium text-zinc-200 border border-white/5">
                        {act}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <ContactButton 
                className="flex w-full items-center justify-center gap-2 rounded-full bg-yellow-600 px-6 py-4.5 text-xs font-bold uppercase tracking-widest text-zinc-950 transition-all hover:bg-yellow-500 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(202,138,4,0.2)] hover:shadow-[0_0_30px_rgba(202,138,4,0.4)]"
              >
                {program.ctaLabel || "Book Experience"}
                <ArrowRight size={16} />
              </ContactButton>

            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
