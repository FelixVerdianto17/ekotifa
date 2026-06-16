"use client";

import dynamic from 'next/dynamic';

const MapSection = dynamic(
  () => import('@/features/landing/components/MapSection'),
  {
    ssr: false,
    loading: () => (
      <div className="h-[600px] w-full bg-zinc-50 animate-pulse rounded-[3rem] border border-zinc-200/50 flex items-center justify-center text-zinc-400 font-medium">
        Memuat Peta Jangkauan...
      </div>
    ),
  }
);

export default function MapWrapper() {
  return <MapSection />;
}
