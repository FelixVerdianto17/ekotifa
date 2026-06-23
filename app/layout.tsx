import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";


const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL('https://ekotifa.id'),
  title: {
    default: "Ekotifa | Ekowisata Kreatif Indonesia",
    template: "%s | Ekotifa",
  },
  description: "Ekotifa transforms recreation into meaningful journeys through sustainable tourism, field education, conservation, and community empowerment.",
  keywords: [
    "Ekotifa",
    "Ekowisata Kreatif Indonesia",
    "ecotourism Indonesia",
    "sustainable tourism",
    "educational travel",
    "community empowerment",
    "field learning",
    "wisata edukasi",
    "ekowisata"
  ],
  authors: [{ name: "Ekotifa" }],
  openGraph: {
    title: "Ekotifa | Ekowisata Kreatif Indonesia",
    description: "Meaningful journeys that drive sustainable action.",
    url: "https://ekotifa.id",
    siteName: "Ekotifa",
    type: "website",
    locale: "id_ID",
    images: [{ url: "/images/og/ekotifa-og.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ekotifa | Ekowisata Kreatif Indonesia",
    description: "Meaningful journeys that drive sustainable action.",
    images: ["/images/og/ekotifa-og.jpg"],
  },
  icons: {
    icon: '/images/brand/logo.webp',
    shortcut: '/images/brand/logo.webp',
    apple: '/images/brand/logo.webp',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${outfit.variable} ${plusJakartaSans.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col relative bg-white text-zinc-950 overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  );
}
