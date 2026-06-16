"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin, Play } from 'lucide-react';

type JobOpening = {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  google_form_url?: string;
};

type CoreValue = {
  title: string;
  desc: string;
};

const coreValues: CoreValue[] = [
  {
    title: 'Dampak Nyata',
    desc: 'Setiap aksi dan kontribusi profesional yang kamu berikan berdampak nyata pada kelestarian alam serta peningkatan ekonomi lokal.'
  },
  {
    title: 'Tumbuh Bersama',
    desc: 'Kolaborasi tanpa batas. Dapatkan kesempatan bertumbuh bersama para praktisi konservasi, peneliti, dan inovator kreatif.'
  },
  {
    title: 'Fleksibilitas & Kepercayaan',
    desc: 'Kebebasan yang bertanggung jawab. Bekerja fleksibel dari basecamp kami di Bogor atau secara remote, dengan fokus pada produktivitas dan dampak.'
  }
];

export default function CareerClient({ initialJobOpenings = [] }: { initialJobOpenings?: JobOpening[] }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const jobOpenings = initialJobOpenings;

  return (
    <div className="flex w-full flex-col bg-white text-zinc-950 selection:bg-[#F4CA44]/20">
      
      {/* SECTION 1: HERO */}
      <section className="mx-auto w-full max-w-[1400px] px-6 pt-32 pb-16 md:px-12 lg:px-24 md:pt-40">
        <div className="flex flex-col gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl font-medium tracking-tighter sm:text-6xl md:text-8xl lg:leading-[1.05]">
              Shape the Future. <br />
              <span className="text-zinc-400">Restore the Earth.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-500 md:text-xl">
              Mari berkolaborasi bersama tim Ekotifa untuk mengintegrasikan inovasi teknologi, manajemen destinasi kreatif, dan aksi konservasi nyata demi pariwisata Indonesia yang berkelanjutan.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative h-[300px] w-full overflow-hidden rounded-[2rem] bg-zinc-900 md:h-[600px] group cursor-pointer shadow-2xl"
            onClick={() => setIsPlaying(true)}
          >
            {isPlaying ? (
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/v4Q_7zIIBUw?autoplay=1" 
                title="Ekotifa Video" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="absolute inset-0"
              ></iframe>
            ) : (
              <>
                <img 
                  src="https://img.youtube.com/vi/v4Q_7zIIBUw/maxresdefault.jpg" 
                  alt="Video Thumbnail" 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#F4CA44] text-zinc-950 shadow-xl transition-transform duration-300 group-hover:scale-110">
                    <Play className="h-8 w-8 ml-1" fill="currentColor" />
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: VALUES */}
      <section className="w-full bg-zinc-50 py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-24">
          <div className="mb-16 md:mb-24">
            <h2 className="text-4xl font-medium tracking-tighter md:text-5xl">
              Bekerja dengan Visi & Dampak
            </h2>
          </div>
          
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
            {coreValues.map((value, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col gap-4"
              >
                <div className="mb-2 text-[#F4CA44] text-sm font-bold tracking-widest uppercase">
                  Value {String(idx + 1).padStart(2, '0')}
                </div>
                <h3 className="text-2xl font-semibold">{value.title}</h3>
                <p className="leading-relaxed text-zinc-500">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: OPEN POSITIONS */}
      <section className="mx-auto w-full max-w-[1400px] px-6 py-24 md:px-12 lg:px-24 md:py-32">
        <div className="mb-12">
          <h2 className="text-4xl font-medium tracking-tighter md:text-5xl">
            Posisi Terbuka / Career Opportunities
          </h2>
          <p className="mt-4 text-zinc-500">
            Daftar posisi aktif yang diperbarui secara langsung dari database Ekotifa.
          </p>
        </div>

        {jobOpenings.length > 0 ? (
          <div className="flex flex-col gap-4">
            {jobOpenings.map((job, idx) => (
              <motion.a
                href={job.google_form_url || '#'}
                target={job.google_form_url ? "_blank" : undefined}
                rel="noopener noreferrer"
                key={job.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="group flex flex-col justify-between gap-6 rounded-3xl border border-zinc-200 bg-white p-6 transition-all hover:border-zinc-300 hover:shadow-xl md:flex-row md:items-center md:p-8 cursor-pointer"
              >
                <div className="flex flex-col gap-3">
                  <h3 className="text-2xl font-semibold transition-colors group-hover:text-[#F4CA44]">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-zinc-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-zinc-600">
                      {job.department}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-zinc-500">
                      <MapPin className="h-4 w-4" /> {job.location}
                    </span>
                    <span className="text-sm text-zinc-500">•</span>
                    <span className="text-sm text-zinc-500">{job.type}</span>
                  </div>
                </div>
                <div className="hidden h-12 w-12 items-center justify-center rounded-full bg-zinc-50 transition-all group-hover:bg-[#F4CA44] group-hover:text-white md:flex">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </motion.a>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-zinc-100 bg-zinc-50 p-12 text-center text-zinc-500 text-lg">
            Open positions will be available soon.
          </div>
        )}
      </section>

    </div>
  );
}
