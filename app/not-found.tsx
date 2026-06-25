import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center text-zinc-950 bg-white">
      <h2 className="text-6xl md:text-8xl font-black text-[#F4CA44] mb-4">404</h2>
      <h3 className="text-2xl md:text-3xl font-bold mb-4">Halaman Tidak Ditemukan</h3>
      <p className="text-zinc-500 mb-8 max-w-md">
        Maaf, halaman yang Anda cari tidak tersedia, telah dipindahkan, atau Anda salah memasukkan URL.
      </p>
      <Link 
        href="/" 
        className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-zinc-900 text-white text-[13px] font-bold uppercase tracking-widest hover:bg-[#F4CA44] transition-colors"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}
