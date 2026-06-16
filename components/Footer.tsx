import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-10 bg-[#F4CA44]/15 border-t border-[#F4CA44]/20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
          {/* Visi / Slogan Ekotifa */}
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <div className="mb-4">
              <Image 
                src="/images/brand/logo.webp" 
                alt="Logo Ekotifa" 
                width={100} 
                height={32} 
                className="object-contain"
              />
            </div>
            <p className="text-xs md:text-sm text-zinc-800 leading-relaxed max-w-md font-medium">
              Menghubungkan petualangan alam luar biasa dengan konservasi lingkungan dan pemberdayaan komunitas lokal.
            </p>
          </div>

          {/* Social Icons / Contacts */}
          <div className="flex flex-col items-center md:items-end justify-center">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-900 mb-4">Hubungi Kami</h4>
            <div className="flex gap-4">
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/ekotifa.id" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-zinc-900 hover:bg-[#F4CA44] hover:text-white transition-all hover:scale-110"
                aria-label="Instagram Ekotifa"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              {/* YouTube */}
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-zinc-900 hover:bg-red-600 hover:text-white transition-all hover:scale-110"
                aria-label="YouTube Ekotifa"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.498 5.814a3.016 3.016 0 0 0 2.122 2.136C4.495 20.5 12 20.5 12 20.5s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              {/* Email */}
              <a 
                href="mailto:ekotifaindonesia@gmail.com" 
                className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-zinc-900 hover:bg-blue-600 hover:text-white transition-all hover:scale-110"
                aria-label="Email Ekotifa"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-[#F4CA44]/30 text-center text-xs text-zinc-700">
          <p suppressHydrationWarning>© {new Date().getFullYear()} PT Ekowisata Kreatif Indonesia (Ekotifa). Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}
