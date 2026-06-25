"use client";

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center text-zinc-950 bg-white">
      <h2 className="text-4xl md:text-5xl font-black text-red-500 mb-4">Terjadi Kesalahan</h2>
      <p className="text-zinc-500 mb-8 max-w-md">
        Mohon maaf, sistem kami mengalami kendala teknis saat memuat halaman ini.
      </p>
      <button
        onClick={() => reset()}
        className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-zinc-900 text-white text-[13px] font-bold uppercase tracking-widest hover:bg-[#F4CA44] transition-colors"
      >
        Coba Lagi
      </button>
    </div>
  );
}
