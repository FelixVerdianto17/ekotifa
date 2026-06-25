"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutClient() {
  const missions = [
    "Enhance the quality of education through sustainable tourism and experiential learning",
    "Empower local communities",
    "Deliver high-quality services with safety, comfort, and educational value",
    "Connect students and professionals with sustainability, empathy, and social responsibility",
    "Integrate science, art, and culture into every journey"
  ];

  const coreValues = [
    {
      title: "Sustainable & Experiential Learning Design",
      description: "Merancang program pembelajaran interaktif dan langsung di alam yang mendorong aksi nyata konservasi lingkungan."
    },
    {
      title: "Destination Management & Local Empowerment",
      description: "Mengelola destinasi ekowisata secara profesional untuk meningkatkan kesejahteraan sosial-ekonomi masyarakat lokal."
    },
    {
      title: "Youth Leadership & Research Development",
      description: "Membina kepemimpinan pemuda serta mendukung riset ekologi lapangan untuk melahirkan solusi hijau di masa depan."
    },
    {
      title: "Service Excellence & Ethical Tourism Practice",
      description: "Menghadirkan layanan pariwisata beretika dengan standar keamanan tinggi dan menghargai nilai-nilai kearifan lokal."
    }
  ];

  const approaches = [
    {
      title: "Integrated Learning Approaches and Methodologies",
      desc: "Menggabungkan sains, seni, dan budaya lokal ke dalam satu kurikulum pembelajaran lapangan terpadu."
    },
    {
      title: "Tourism Development Management",
      desc: "Layanan konsultasi dan implementasi manajemen pariwisata berkelanjutan untuk instansi swasta dan pemerintah."
    },
    {
      title: "Measurement Tools",
      desc: "Metrik pengukuran dampak nyata dari program ekowisata terhadap konservasi alam dan perekonomian lokal."
    }
  ];

  const cycleSteps = [
    "Explore",
    "Research",
    "Experience",
    "Reflection",
    "Action",
    "Publication/Co-Creation"
  ];

  const teamCategories = [
    {
      title: "Leadership / Pendiri",
      members: [
        { name: "Bagus Panuntun, S.Hut", role: "Komisaris & Co-Founder", imageUrl: "/images/team-placeholder-1.jpg" },
        { name: "Afrodita Indayana, S.Tr.Par", role: "Direktur Utama & Co-Founder", imageUrl: "/images/profile1.jpg" }
      ]
    },
    {
      title: "Executive Customer Relations",
      members: [
        { name: "Lulu Paramitha, S.Psi", role: "Executive Customer Relations", imageUrl: "/images/team-placeholder-2.jpg" },
        { name: "Anton Ufur Johanes, M.Ba", role: "Executive Customer Relations", imageUrl: "/images/team-placeholder-3.jpg" }
      ]
    },
    {
      title: "Executive Government Relations",
      members: [
        { name: "Suryo Boediono, S.T, M.Ba", role: "Executive Government Relations", imageUrl: "/images/team-placeholder-4.jpg" },
        { name: "Ronanda Utama, S.Hut, M.Si", role: "Executive Government Relations", imageUrl: "/images/team-placeholder-5.jpg" }
      ]
    },
    {
      title: "Strategic of Curriculum & Education",
      members: [
        { name: "Anggun Pesona, M.M", role: "Strategic of Curriculum & Education", imageUrl: "/images/team-placeholder-6.jpg" }
      ]
    },
    {
      title: "Production Staff",
      members: [
        { name: "Lisandie", role: "Production Staff", imageUrl: "/images/team-placeholder-7.jpg" },
        { name: "Ahmad Hanafi", role: "Production Staff", imageUrl: "/images/team-placeholder-8.jpg" },
        { name: "Maharani Putri", role: "Production Staff", imageUrl: "/images/team-placeholder-9.jpg" }
      ]
    },
    {
      title: "Field Operation",
      members: [
        { name: "Aprilian Teja", role: "Field Operation", imageUrl: "/images/team-placeholder-10.jpg" },
        { name: "Dinda Akbar Yanuar", role: "Field Operation", imageUrl: "/images/team-placeholder-11.jpg" }
      ]
    }
  ];

  return (
    <div className="flex w-full flex-col bg-white text-zinc-950 selection:bg-zinc-200">
      
      {/* SECTION 1: Our Stories & Sejarah */}
      <section className="mx-auto w-full max-w-[1400px] px-6 py-32 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-7 max-w-4xl"
          >
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#F4CA44] mb-4 block">Our Stories</span>
            <h1 className="mb-8 text-5xl font-medium tracking-tighter md:text-7xl">
              PT Ekowisata Kreatif Indonesia
            </h1>
            <p className="text-xl leading-relaxed text-zinc-500 mb-6">
              Perjalanan kami dimulai dari inisiatif <span className="font-semibold text-zinc-900">EFTO (Ecotourism for Tomorrow)</span> pada tahun 2008. Didorong oleh komitmen kuat untuk mengintegrasikan pariwisata berkelanjutan dengan edukasi berkualitas, inisiatif ini bertransformasi menjadi <span className="font-semibold text-zinc-900">PT Ekowisata Kreatif Indonesia (Ekotifa)</span> pada Januari 2018.
            </p>
            <p className="text-lg leading-relaxed text-zinc-500">
              Sebagai konsultan pariwisata berkelanjutan dan operator ekowisata tepercaya di Indonesia, kami mendesain platform perjalanan yang mentransformasi rekreasi menjadi pengalaman belajar dan aksi nyata yang berdampak jangka panjang bagi kelestarian bumi.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-5 bg-zinc-50 p-8 md:p-12 rounded-[2.5rem] border border-zinc-100/50"
          >
            <h3 className="text-lg font-bold uppercase tracking-wider text-zinc-800 mb-4">Sejarah Singkat</h3>
            <div className="flex flex-col gap-6 relative border-l border-zinc-200 pl-6 ml-2">
              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded-full bg-zinc-950 border-4 border-white" />
                <span className="text-xs font-bold text-zinc-400">2008</span>
                <h4 className="font-semibold text-zinc-900 mt-1">Inisiasi EFTO</h4>
                <p className="text-sm text-zinc-500 mt-1">Langkah awal kampanye pariwisata berkelanjutan dan edukasi alam bebas.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded-full bg-zinc-400 border-4 border-white" />
                <span className="text-xs font-bold text-zinc-400">Januari 2018</span>
                <h4 className="font-semibold text-zinc-900 mt-1">PT Ekowisata Kreatif Indonesia</h4>
                <p className="text-sm text-zinc-500 mt-1">Resmi berbadan hukum korporasi (Ekotifa) sebagai konsultan dan operator pariwisata berkelanjutan.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Banner Image Penuh */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative h-[500px] sm:h-[600px] w-full overflow-hidden rounded-2xl bg-zinc-50 mt-20"
        > 
          <Image 
            src="/images/sections/About.webp" 
            alt="Kegiatan Konservasi Ekotifa" 
            fill
            sizes="(max-width: 1400px) 100vw, 1400px"
            className="object-contain p-4 md:p-8 rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
          />
        </motion.div>
      </section>

      {/* SECTION 2: Visi & Misi */}
      <section className="w-full bg-zinc-50 py-32 border-y border-zinc-100">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#F4CA44] mb-4 block">Visi Kami</span>
              <h2 className="text-4xl font-medium tracking-tighter md:text-5xl leading-tight mb-8">
                “To become Indonesia’s leading platform that transforms learning and recreational experiences through tourism into meaningful and sustainable impact.”
              </h2>
            </div>
            
            <div className="lg:col-span-7">
              <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#F4CA44] mb-4 block">Misi Kami</span>
              <ul className="space-y-6">
                {missions.map((mission, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-950 text-white font-bold text-sm">
                      0{idx + 1}
                    </div>
                    <p className="text-lg leading-relaxed text-zinc-600 pt-0.5">
                      {mission}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Core Values */}
      <section className="w-full py-32 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-24">
          <div className="mb-16 text-center max-w-xl mx-auto">
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#F4CA44] mb-4 block">Core Values</span>
            <h2 className="text-4xl font-medium tracking-tighter md:text-5xl">
              Nilai-Nilai Utama
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreValues.map((value, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-8 rounded-[2rem] bg-zinc-50 border border-zinc-100 hover:border-zinc-200 transition-all hover:shadow-lg flex flex-col gap-4"
              >
                <div className="text-sm font-bold tracking-widest uppercase text-zinc-400 mb-2">
                  Value 0{idx + 1}
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-zinc-900">{value.title}</h3>
                <p className="text-zinc-500 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Our Approach & Cycle */}
      <section className="w-full py-32 bg-zinc-50 border-t border-zinc-100">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 max-w-lg">
              <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#F4CA44] mb-4 block">Our Approach</span>
              <h2 className="text-4xl font-medium tracking-tighter md:text-5xl mb-6">
                Metodologi Kerja & Siklus Implementasi
              </h2>
              <p className="text-zinc-500 leading-relaxed mb-8">
                Ekotifa mengadopsi pendekatan terintegrasi yang menggabungkan sains, kearifan lokal, dan teknologi untuk mengukur serta mengoptimalkan dampak ekowisata.
              </p>
              
              <div className="flex flex-col gap-6">
                {approaches.map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-200 mt-1">
                      <div className="h-2 w-2 rounded-full bg-zinc-800" />
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-900">{item.title}</h4>
                      <p className="text-sm text-zinc-500 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 bg-zinc-900 p-8 md:p-12 rounded-[2.5rem] text-white">
              <div className="flex items-center gap-3 mb-8">
                <h3 className="text-xl font-bold uppercase tracking-wider text-[#F4CA44]">Implementation Cycle</h3>
              </div>

              {/* Cycle Steps Path */}
              <div className="flex flex-col gap-8 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12 relative">
                {cycleSteps.map((step, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-zinc-800 border border-zinc-700 text-primary font-bold text-lg group-hover:bg-primary group-hover:text-black transition-all">
                      {idx + 1}
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-widest text-zinc-500">Step 0{idx + 1}</span>
                      <h4 className="font-semibold text-white mt-0.5 text-lg">{step}</h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Meet Our Team */}
      <section className="w-full py-32 bg-white border-t border-zinc-100">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-24">
          <div className="mb-20">
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#F4CA44] mb-4 block">Our Team</span>
            <h2 className="text-4xl font-medium tracking-tighter md:text-5xl">
              Meet the minds behind Ekotifa
            </h2>
            <p className="text-zinc-500 mt-4 max-w-2xl leading-relaxed">
              Kolaborasi multi-disiplin antara ahli konservasi, inovator digital, dan penggerak lokal yang berkomitmen memimpin perubahan pariwisata hijau.
            </p>
          </div>

          <div className="flex flex-col items-center">
            {teamCategories.map((category, catIdx) => (
              <div key={catIdx} className="flex flex-col items-center w-full">
                
                {/* Vertical Line dari section sebelumnya */}
                {catIdx > 0 && (
                  <div className="w-px h-16 md:h-24 bg-zinc-200 my-4" />
                )}

                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#F4CA44] mb-8 text-center bg-zinc-700 border border-zinc-700 px-6 py-3 rounded-full">
                  {category.title}
                </h3>
                
                {/* Responsive flex layout based on member count in category */}
                <div className="flex flex-wrap justify-center gap-6 md:gap-8 w-full">
                  {category.members.map((member, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      className="group flex flex-col items-center justify-center text-center p-8 rounded-2xl bg-zinc-50 border border-zinc-200 hover:border-zinc-200 hover:shadow-sm transition-all w-full sm:w-[calc(50%-1.5rem)] md:w-[calc(33.33%-2rem)] lg:w-[280px]"
                    >
                      <h4 className="text-xl font-bold text-zinc-900 leading-snug mb-2">{member.name}</h4>
                      <span className="text-sm font-medium text-[#F4CA44]">{member.role}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
