import Image from 'next/image';
import Link from 'next/link';

export default function ImpactSection() {
  return (
    <section className="w-full bg-zinc-50 py-24 md:py-32 border-t border-zinc-200">
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#F4CA44] mb-6">
              Journeys & Impact
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 mb-6 leading-tight">
              Every Journey Creates <span className="text-zinc-400">Impact</span>
            </h2>
            <p className="text-lg text-zinc-600 mb-12 leading-relaxed max-w-xl">
              From learning journeys to community empowerment, Ekotifa designs experiences that create meaningful outcomes for learners, local communities, and sustainable destinations.
            </p>
            
            {/* Stats Grid (2x3) */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-10 mb-12">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-zinc-900 mb-2">10,000+</div>
                <p className="text-sm text-zinc-500 font-medium leading-snug">Students engaged</p>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-zinc-900 mb-2">1,000+</div>
                <p className="text-sm text-zinc-500 font-medium leading-snug">Local homes supported</p>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-zinc-900 mb-2">150+</div>
                <p className="text-sm text-zinc-500 font-medium leading-snug">Programs delivered across Indonesia</p>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-zinc-900 mb-2">50+</div>
                <p className="text-sm text-zinc-500 font-medium leading-snug">Communities and destinations developed</p>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-zinc-900 mb-2">500+</div>
                <p className="text-sm text-zinc-500 font-medium leading-snug">Local guides and teams empowered</p>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-zinc-900 mb-2">500+</div>
                <p className="text-sm text-zinc-500 font-medium leading-snug">Individuals adopting sustainable lifestyles</p>
              </div>
            </div>
            
            {/* CTA */}
            <div>
              <Link 
                href="/stories-impact"
                className="inline-flex h-14 items-center justify-center rounded-full bg-zinc-900 px-10 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-[#F4CA44] hover:scale-[1.02] active:scale-[0.98]"
              >
                Explore Our Impact
              </Link>
            </div>
          </div>
          
          {/* Right Image Collage / Large Image */}
          <div className="relative w-full aspect-[4/5] md:aspect-[4/3] lg:aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl bg-zinc-100 border border-zinc-200/50">
            <Image 
              src="/images/sections/journey-impact-home.webp" 
              alt="Ekotifa Journey and Impact" 
              fill 
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Subtle Overlay to make it more editorial */}
            <div className="absolute inset-0 bg-black/5 mix-blend-multiply"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
