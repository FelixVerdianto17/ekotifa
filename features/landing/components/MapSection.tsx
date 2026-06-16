"use client";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Link from 'next/link';

// Fix icon leaflet yang sering hilang saat build
const customIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png', // Ganti dengan icon primary kamu
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

import { getAllReachLocations } from '@/data/reachLocations';

export default function MapSection() {
  const locations = getAllReachLocations();

  return (
    <section className="w-full py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-16">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-4">Our Presence</h2>
          <h3 className="text-4xl font-bold tracking-tight text-zinc-900 md:text-5xl">
            Area Jangkauan <span className="italic text-zinc-400 font-medium">Destinasi & Layanan</span>
          </h3>
        </div>

        <div className="h-[600px] w-full rounded-[3rem] overflow-hidden shadow-2xl border-8 border-zinc-50 relative z-0">
          <MapContainer 
            center={[-2.5489, 118.0149]} // Center of Indonesia
            zoom={5} 
            className="h-full w-full"
            scrollWheelZoom={false}
          >
            {/* TileLayer menggunakan style 'CartoDB Positron' agar warnanya putih/abu-abu bersih ala Endless Worlds */}
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> contributors'
            />

            {locations.map((loc) => (
              loc.coordinates && (
                <Marker key={loc.id} position={loc.coordinates} icon={customIcon}>
                  <Popup className="custom-popup">
                    <div className="p-2">
                      <p className="text-[10px] font-bold uppercase text-primary mb-1">{loc.region || loc.country}</p>
                      <h4 className="font-bold text-zinc-900 mb-2">{loc.name}</h4>
                      <Link 
                        href="/programs"
                        className="text-xs font-bold text-zinc-400 hover:text-black flex items-center gap-1"
                      >
                        Explore Programs →
                      </Link>
                    </div>
                  </Popup>
                </Marker>
              )
            ))}
          </MapContainer>
        </div>
      </div>
    </section>
  );
}