export interface ReachLocation {
  id: string;
  name: string;
  country: string;
  type: "domestic" | "international";
  region?: string;
  coordinates: [number, number] | null;
}

export const reachLocations: ReachLocation[] = [
  // Domestic (Indonesia)
  { id: "sumatera-barat", name: "Sumatera Barat", country: "Indonesia", type: "domestic", region: "Sumatera", coordinates: [-0.7399, 100.8000] },
  { id: "medan", name: "Medan", country: "Indonesia", type: "domestic", region: "Sumatera", coordinates: [3.5952, 98.6722] },
  { id: "bangka", name: "Bangka", country: "Indonesia", type: "domestic", region: "Sumatera", coordinates: [-1.8906, 105.8083] },
  { id: "tambling", name: "Tambling", country: "Indonesia", type: "domestic", region: "Sumatera", coordinates: [-5.6322, 104.3056] },
  { id: "anyer", name: "Anyer", country: "Indonesia", type: "domestic", region: "Jawa", coordinates: [-6.0645, 105.8901] },
  { id: "ujung-kulon", name: "Ujung Kulon", country: "Indonesia", type: "domestic", region: "Jawa", coordinates: [-6.7453, 105.3340] },
  { id: "sawarna", name: "Sawarna", country: "Indonesia", type: "domestic", region: "Jawa", coordinates: [-6.9856, 106.3149] },
  { id: "ciletuh", name: "Ciletuh", country: "Indonesia", type: "domestic", region: "Jawa", coordinates: [-7.1932, 106.4608] },
  { id: "gelar-alam", name: "Gelar Alam", country: "Indonesia", type: "domestic", region: "Jawa", coordinates: [-7.0601, 107.0398] },
  { id: "cianjur-selatan", name: "Cianjur Selatan", country: "Indonesia", type: "domestic", region: "Jawa", coordinates: [-7.2798, 107.1353] },
  { id: "bogor", name: "Bogor", country: "Indonesia", type: "domestic", region: "Jawa", coordinates: [-6.5971, 106.7932] },
  { id: "jakarta", name: "Jakarta", country: "Indonesia", type: "domestic", region: "Jawa", coordinates: [-6.2088, 106.8456] },
  { id: "kepulauan-seribu", name: "Kepulauan Seribu", country: "Indonesia", type: "domestic", region: "Jawa", coordinates: [-5.6027, 106.5621] },
  { id: "tangerang-selatan", name: "Tangerang Selatan", country: "Indonesia", type: "domestic", region: "Jawa", coordinates: [-6.2886, 106.7179] },
  { id: "majalengka", name: "Majalengka", country: "Indonesia", type: "domestic", region: "Jawa", coordinates: [-6.8365, 108.2275] },
  { id: "purwakarta", name: "Purwakarta", country: "Indonesia", type: "domestic", region: "Jawa", coordinates: [-6.5387, 107.4475] },
  { id: "bandung", name: "Bandung", country: "Indonesia", type: "domestic", region: "Jawa", coordinates: [-6.9175, 107.6191] },
  { id: "ciwidey", name: "Ciwidey", country: "Indonesia", type: "domestic", region: "Jawa", coordinates: [-7.0863, 107.4589] },
  { id: "tasikmalaya", name: "Tasikmalaya", country: "Indonesia", type: "domestic", region: "Jawa", coordinates: [-7.3196, 108.2022] },
  { id: "subang", name: "Subang", country: "Indonesia", type: "domestic", region: "Jawa", coordinates: [-6.5658, 107.7634] },
  { id: "cirebon", name: "Cirebon", country: "Indonesia", type: "domestic", region: "Jawa", coordinates: [-6.7320, 108.5523] },
  { id: "kuningan", name: "Kuningan", country: "Indonesia", type: "domestic", region: "Jawa", coordinates: [-6.9758, 108.4831] },
  { id: "pangandaran", name: "Pangandaran", country: "Indonesia", type: "domestic", region: "Jawa", coordinates: [-7.6896, 108.6560] },
  { id: "jogjakarta", name: "Jogjakarta", country: "Indonesia", type: "domestic", region: "Jawa", coordinates: [-7.7956, 110.3695] },
  { id: "solo", name: "Solo", country: "Indonesia", type: "domestic", region: "Jawa", coordinates: [-7.5666, 110.8253] },
  { id: "karanganyar", name: "Karanganyar", country: "Indonesia", type: "domestic", region: "Jawa", coordinates: [-7.6046, 110.9705] },
  { id: "semarang", name: "Semarang", country: "Indonesia", type: "domestic", region: "Jawa", coordinates: [-6.9666, 110.4167] },
  { id: "ambarawa", name: "Ambarawa", country: "Indonesia", type: "domestic", region: "Jawa", coordinates: [-7.2647, 110.4048] },
  { id: "magelang", name: "Magelang", country: "Indonesia", type: "domestic", region: "Jawa", coordinates: [-7.4797, 110.2177] },
  { id: "klaten", name: "Klaten", country: "Indonesia", type: "domestic", region: "Jawa", coordinates: [-7.7051, 110.6019] },
  { id: "bojonegoro", name: "Bojonegoro", country: "Indonesia", type: "domestic", region: "Jawa", coordinates: [-7.1502, 111.8818] },
  { id: "surabaya", name: "Surabaya", country: "Indonesia", type: "domestic", region: "Jawa", coordinates: [-7.2575, 112.7521] },
  { id: "malang", name: "Malang", country: "Indonesia", type: "domestic", region: "Jawa", coordinates: [-7.9797, 112.6304] },
  { id: "bromo", name: "Bromo", country: "Indonesia", type: "domestic", region: "Jawa", coordinates: [-7.9425, 112.9530] },
  { id: "banyuwangi", name: "Banyuwangi", country: "Indonesia", type: "domestic", region: "Jawa", coordinates: [-8.2192, 114.3692] },
  { id: "probolinggo", name: "Probolinggo", country: "Indonesia", type: "domestic", region: "Jawa", coordinates: [-7.7505, 113.2104] },
  { id: "bali", name: "Bali", country: "Indonesia", type: "domestic", region: "Bali & Nusa Tenggara", coordinates: [-8.4095, 115.1889] },
  { id: "lombok", name: "Lombok", country: "Indonesia", type: "domestic", region: "Bali & Nusa Tenggara", coordinates: [-8.5833, 116.1167] },
  { id: "alor", name: "Alor", country: "Indonesia", type: "domestic", region: "Bali & Nusa Tenggara", coordinates: [-8.2500, 124.6667] },
  { id: "labuan-bajo", name: "Labuan Bajo", country: "Indonesia", type: "domestic", region: "Bali & Nusa Tenggara", coordinates: [-8.4902, 119.8767] },
  { id: "banjarmasin", name: "Banjarmasin", country: "Indonesia", type: "domestic", region: "Kalimantan", coordinates: [-3.3167, 114.5901] },
  { id: "pontianak", name: "Pontianak", country: "Indonesia", type: "domestic", region: "Kalimantan", coordinates: [-0.0227, 109.3333] },
  { id: "luwuk-banggai", name: "Luwuk Banggai", country: "Indonesia", type: "domestic", region: "Sulawesi", coordinates: [-0.9416, 122.7844] },
  { id: "pangkalan-bun", name: "Pangkalan Bun", country: "Indonesia", type: "domestic", region: "Kalimantan", coordinates: [-2.6791, 111.6212] },

  // International
  { id: "singapore", name: "Singapore", country: "Singapore", type: "international", region: "Southeast Asia", coordinates: [1.3521, 103.8198] },
  { id: "malaysia", name: "Malaysia", country: "Malaysia", type: "international", region: "Southeast Asia", coordinates: [4.2105, 101.9758] },
  { id: "thailand", name: "Thailand", country: "Thailand", type: "international", region: "Southeast Asia", coordinates: [15.8700, 100.9925] },
  { id: "vietnam", name: "Vietnam", country: "Vietnam", type: "international", region: "Southeast Asia", coordinates: [14.0583, 108.2772] },
  { id: "japan", name: "Japan", country: "Japan", type: "international", region: "East Asia", coordinates: [36.2048, 138.2529] },
  { id: "south-korea", name: "South Korea", country: "South Korea", type: "international", region: "East Asia", coordinates: [35.9078, 127.7669] },
];

export function getAllReachLocations(): ReachLocation[] {
  return reachLocations;
}

export function getDomesticReachLocations(): ReachLocation[] {
  return reachLocations.filter(location => location.type === "domestic");
}

export function getInternationalReachLocations(): ReachLocation[] {
  return reachLocations.filter(location => location.type === "international");
}
