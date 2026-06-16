"use client";

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { programCategories, Category } from '@/data/programs';

export default function ProgramSection() {
  return (
    <section id="program" className="w-full bg-[#FDFDFD] py-24 md:py-32 scroll-mt-16 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl relative">
        
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-[#F4CA44] mb-4">
              Our Programs
            </h2>
            <h3 className="text-4xl font-bold tracking-tight text-zinc-900 md:text-6xl">
              Ekowisata & <span className="italic text-zinc-400 font-medium">Program Kreatif</span>
            </h3>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            className="md:max-w-sm"
          >
            <p className="text-zinc-500 leading-relaxed text-sm">
              Temukan pengalaman perjalanan yang tidak hanya menyegarkan, tetapi juga memberikan dampak positif bagi diri sendiri, masyarakat lokal, dan lingkungan.
            </p>
          </motion.div>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {programCategories.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>
        
      </div>
    </section>
  );
}

function CategoryCard({ category, index }: { category: Category; index: number }) {
  // Use placeholder images for now
  const placeholderImages = [
    '/images/programs/home-card-2.webp',
    '/images/programs/home-card-3.webp',
    '/images/programs/home-card-1.webp'
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.7, ease: "easeOut" }}
      className="group relative h-[500px] md:h-[550px] w-full overflow-hidden rounded-3xl bg-zinc-900 shadow-xl"
    >
      {/* Background Image */}
      <img
        src={placeholderImages[index]}
        alt={`Kategori - ${category.title}`}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out md:group-hover:scale-110 opacity-30 md:opacity-80 md:group-hover:opacity-30"
      />
      
      {/* Gradient Overlay for Base State (Desktop) */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent transition-opacity duration-500 hidden md:block md:group-hover:opacity-0" />
      
      {/* Dark Overlay for Hover State (Desktop) & Base State (Mobile) */}
      <div className="absolute inset-0 bg-zinc-950/80 backdrop-blur-md opacity-100 md:opacity-0 transition-opacity duration-500 md:group-hover:opacity-100" />

      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col p-8 md:p-10 pointer-events-none">
        
        {/* Top: Program Count Badge */}
        <div className="flex items-start justify-between">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-md">
            {category.programs.length} Programs
          </span>
        </div>

        {/* Bottom Base State (visible when NOT hovered on Desktop) */}
        <div className="mt-auto hidden md:flex flex-col gap-3 transition-all duration-500 group-hover:-translate-y-8 group-hover:opacity-0">
          <h4 className="text-3xl font-bold text-white tracking-tight">{category.title}</h4>
          <p className="text-sm leading-relaxed text-zinc-300 line-clamp-2">
            {category.description}
          </p>
        </div>

        {/* Hover State Content (visible WHEN hovered on Desktop, ALWAYS on Mobile) */}
        <div className="absolute inset-x-8 bottom-8 flex flex-col opacity-100 translate-y-0 md:opacity-0 transition-all duration-500 md:translate-y-8 md:group-hover:translate-y-0 md:group-hover:opacity-100 pointer-events-auto">
          <h4 className="text-2xl font-bold text-white mb-5 border-b border-white/10 pb-4">
            {category.title}
          </h4>
          
          <ul className="mb-6 flex flex-col gap-3.5">
            {category.programs.slice(0, 4).map((program) => (
              <li key={program.id}>
                <Link 
                  href={`/programs/${program.slug}`}
                  className="group/link flex items-center gap-3 text-zinc-300 hover:text-white transition-colors"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-zinc-600 group-hover/link:bg-[#F4CA44] transition-colors flex-shrink-0" />
                  <span className="text-sm font-medium truncate">{program.title}</span>
                </Link>
              </li>
            ))}
          </ul>

          {category.programs.length > 4 && (
            <Link 
              href="/programs"
              className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#F4CA44] hover:text-yellow-500 transition-colors group/btn mt-2"
            >
              Explore All Programs
              <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
            </Link>
          )}
        </div>
        
      </div>
    </motion.div>
  );
}