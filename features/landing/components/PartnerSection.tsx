"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { collaborationLogos, clientLogos } from '@/data/partnerLogos';

const duplicatedCollab = [...collaborationLogos, ...collaborationLogos];
const duplicatedClients = [...clientLogos, ...clientLogos];

export default function PartnerSection() {
  return (
    <section className="w-full py-24 bg-[#FDFDFD] overflow-hidden border-t border-zinc-100">
      
      {/* Collaboration Section */}
      <div className="container mx-auto px-6 max-w-[1400px] mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-[#F4CA44] mb-4">
            Trusted By
          </h2>
          <h3 className="text-4xl font-bold tracking-tight text-zinc-900 md:text-5xl">
            Kolaborasi & <span className="italic text-zinc-400 font-medium">Kemitraan Strategis</span>
          </h3>
        </motion.div>
      </div>

      <div className="relative flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] mb-24">
        <motion.div
          className="flex flex-none gap-16 md:gap-24 py-8 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 50, repeat: Infinity }}
          style={{ display: 'flex' }}
          whileHover={{ animationPlayState: 'paused' }} 
        >
          {duplicatedCollab.map((partner, index) => (
            <div key={index} className="flex items-center justify-center h-16 w-[140px] md:h-20 md:w-[180px] relative group grayscale hover:grayscale-0 transition-all duration-500 opacity-50 hover:opacity-100">
              <Image
                src={partner.logoUrl}
                alt={partner.alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 140px, 180px"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Clients Section */}
      <div className="container mx-auto px-6 max-w-[1400px] mb-12 text-center mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-[#F4CA44] mb-4">
            Our Clients
          </h2>
          <h3 className="text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
            Lembaga & <span className="italic text-zinc-400 font-medium">Instansi</span>
          </h3>
        </motion.div>
      </div>

      <div className="relative flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] pb-8">
        <motion.div
          className="flex flex-none gap-16 md:gap-24 py-8 items-center"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ ease: "linear", duration: 40, repeat: Infinity }}
          style={{ display: 'flex' }}
          whileHover={{ animationPlayState: 'paused' }} 
        >
          {duplicatedClients.map((partner, index) => (
            <div key={index} className="flex items-center justify-center h-16 w-[140px] md:h-20 md:w-[180px] relative group grayscale hover:grayscale-0 transition-all duration-500 opacity-50 hover:opacity-100">
              <Image
                src={partner.logoUrl}
                alt={partner.alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 140px, 180px"
              />
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}