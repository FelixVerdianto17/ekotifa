import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { programCategories } from "@/data/programs";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Programs & Services | Ekotifa",
  description: "Explore Ekotifa’s meaningful journeys, learning expeditions, and purposeful vacations designed for sustainable impact.",
  openGraph: {
    title: "Programs & Services | Ekotifa",
    description: "Explore Ekotifa’s meaningful journeys, learning expeditions, and purposeful vacations designed for sustainable impact.",
    type: "website",
  },
  alternates: {
    canonical: "https://ekotifa.id/programs",
  }
};

export default function ProgramsListingPage() {
  return (
    <main className="w-full bg-[#FDFDFD] pb-24 pt-32 md:pt-40">
      <BreadcrumbJsonLd 
        items={[
          { name: 'Home', item: 'https://ekotifa.id' },
          { name: 'Programs & Services', item: 'https://ekotifa.id/programs' }
        ]} 
      />
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header Section */}
        <div className="mb-16 md:mb-24 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 mb-6">
            Ekowisata & <span className="italic text-zinc-400 font-medium">Program Kreatif</span>
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-zinc-600">
            Temukan pengalaman perjalanan yang tidak hanya menyegarkan, tetapi juga memberikan dampak positif bagi diri sendiri, pelestarian lingkungan, dan pemberdayaan masyarakat lokal secara berkelanjutan.
          </p>
        </div>

        {/* Categories Loop */}
        <div className="flex flex-col gap-24 md:gap-32">
          {programCategories.map((category) => (
            <section key={category.id} id={category.slug} className="scroll-mt-32">
              
              {/* Category Header */}
              <div className="mb-10 pb-6 border-b border-zinc-200 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">{category.title}</h2>
                  <p className="text-base md:text-lg text-zinc-500 max-w-2xl">{category.description}</p>
                </div>
                <div className="hidden md:flex shrink-0">
                  <span className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-4 py-2 text-xs font-bold uppercase tracking-widest text-zinc-500 border border-zinc-200">
                    {category.programs.length} Programs
                  </span>
                </div>
              </div>

              {/* Program List */}
              <div className="flex flex-col">
                {category.programs.map((program) => (
                  <Link 
                    key={program.id} 
                    href={`/programs/${program.slug}`}
                    className="group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-zinc-100 transition-all duration-300 hover:border-yellow-200"
                  >
                    <div className="max-w-3xl">
                      <h3 className="text-2xl font-bold text-zinc-900 mb-2 group-hover:text-yellow-600 transition-colors">
                        {program.title}
                      </h3>
                      <p className="text-base text-zinc-600 line-clamp-2 leading-relaxed">
                        {program.shortDescription || program.description}
                      </p>
                    </div>
                    
                    <div className="mt-6 md:mt-0 flex shrink-0 items-center gap-4">
                      <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 group-hover:text-[#F4CA44] transition-colors">
                        View Details
                      </span>
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-400 transition-all group-hover:border-[#F4CA44]/20 group-hover:bg-[#F4CA44]/10 group-hover:text-[#F4CA44]">
                        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

            </section>
          ))}
        </div>

      </div>
    </main>
  );
}
