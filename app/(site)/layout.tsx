import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      
      <main className="flex-grow">
        {children}
      </main>

      <Footer />
      <ContactModal />
    </>
  );
}
