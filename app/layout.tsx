import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

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
  metadataBase: new URL('https://ekotifa.com'),
  title: "Ekotifa - PT Ekowisata Kreatif Indonesia",
  description: "Menghubungkan petualangan alam luar biasa dengan konservasi lingkungan dan pemberdayaan komunitas lokal.",
  keywords: ["Ekowisata", "Konservasi", "Wisata Berkelanjutan", "Indonesia", "Ekotifa"],
  authors: [{ name: "Ekotifa" }],
  openGraph: {
    title: "Ekotifa - Pariwisata Berkelanjutan",
    description: "Menghubungkan petualangan alam luar biasa dengan konservasi lingkungan dan pemberdayaan komunitas lokal.",
    type: "website",
    locale: "id_ID",
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
        <Navbar />
        
        <main className="flex-grow">
          {children}
        </main>

        <Footer />
        <ContactModal />
      </body>
    </html>
  );
}
