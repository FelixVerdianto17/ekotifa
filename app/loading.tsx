export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-white">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full border-4 border-zinc-100 border-t-[#F4CA44] animate-spin"></div>
        <p className="text-sm font-bold uppercase tracking-widest text-zinc-400">Memuat...</p>
      </div>
    </div>
  );
}
