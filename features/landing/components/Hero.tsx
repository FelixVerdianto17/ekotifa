"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const HERO_IMAGES = [
  "/images/sections/Hero.webp",
  "/images/sections/Hero_2.webp",
  "/images/sections/Hero_3.webp",
  "/images/sections/Hero_4.webp",
  "/images/sections/Hero_5.webp",
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
  };

  return (
    // FIX: pt-24 md:pt-28 ditambahkan agar Hero turun dan memberi ruang untuk Navbar pill
    <section id="hero" className="w-full bg-white px-4 pb-12 pt-24 md:px-6 md:pt-28">
      
      {/* Container Utama - Menggunakan border radius besar ala sampul majalah */}
      <div 
        className="relative flex min-h-[85vh] w-full flex-col justify-between overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-zinc-950"
      >
        <AnimatePresence initial={false}>
          <motion.img 
            key={currentIndex}
            src={HERO_IMAGES[currentIndex]}
            alt={`Pemandangan Alam Ekotifa ${currentIndex + 1}`}
            className="absolute inset-0 h-full w-full object-cover"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </AnimatePresence>
        
        {/* Gradient Overlay: Agar teks putih tetap terbaca meski gambarnya terang */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/50 via-black/20 to-black/80" />

        {/* Navigation Arrows */}
        <button 
          onClick={handlePrev}
          aria-label="Previous hero image"
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center p-2 text-white/50 transition-all hover:text-white hover:scale-110 active:scale-95"
        >
          <ChevronLeft className="h-10 w-10 md:h-12 md:w-12" />
        </button>
        <button 
          onClick={handleNext}
          aria-label="Next hero image"
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center p-2 text-white/50 transition-all hover:text-white hover:scale-110 active:scale-95"
        >
          <ChevronRight className="h-10 w-10 md:h-12 md:w-12" />
        </button>

        {/* Top Content: Headline & CTA */}
        <div className="relative z-10 flex flex-col items-start px-6 pt-16 md:px-16 md:pt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start gap-6"
          >
             {/* Headline */}
            <h1 className="max-w-6xl text-4xl font-medium tracking-tighter text-white sm:text-5xl md:text-7xl lg:text-[5.5rem] lg:leading-[1.05]">
              Where Recreation Becomes <br className="hidden md:block" /> Meaningful Experience <br className="hidden md:block" /> that Drives Sustainable Action
            </h1>
            
            {/* CTA Button */}
            <Link 
              href="#program"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-950 transition-all hover:scale-105 active:scale-95"
            >
              Lihat Detail Program
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </div>

        {/* Bottom Content: Subtitle & Tags */}
        <div className="relative z-10 mt-auto flex flex-col gap-8 px-6 pb-8 md:px-16 md:pb-12 w-full">
          
          {/* Subtitle Deskripsi */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full max-w-2xl"
          >
            <p className="text-lg leading-relaxed text-white/90 md:text-2xl font-medium tracking-wide">
              “Let&apos;s Take More Sustainability Action on Every Vacation”
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}