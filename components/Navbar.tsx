"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { programCategories } from "@/data/programs";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileCategory, setActiveMobileCategory] = useState<string | null>(null);
  
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // FIX: Array menu sekarang memiliki properti `isPage` 
  // agar sistem tahu mana yang pindah halaman, mana yang scroll ID
  const navLinks = [
    { name: "About Us", target: "/about", isPage: true },
    { name: "Programs & Services", target: "program", isPage: false },
    { name: "Community & Impact", target: "/stories-impact", isPage: true },
    { name: "Join Our Team!", target: "/career", isPage: true },
  ];

  // FIX: Logika routing yang disempurnakan (Scroll vs Page Navigation)
  const handleNavClick = (link: { target: string; isPage: boolean }) => {
    if (link.isPage) {
      // Jika ini adalah halaman terpisah, gunakan router push
      router.push(link.target);
      window.scrollTo(0, 0);
    } else {
      // Jika ini adalah section di beranda (homepage)
      if (pathname !== "/") {
        router.push("/");
        setTimeout(() => {
          const element = document.getElementById(link.target);
          if (element) element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        const element = document.getElementById(link.target);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header 
      className={cn(
        "fixed left-0 right-0 top-0 z-50 flex flex-col items-center transition-all duration-500 pointer-events-none",
        isScrolled ? "pt-4 md:pt-6" : "pt-0"
      )}
    >
      <nav
        className={cn(
          "pointer-events-auto flex items-center justify-between transition-all duration-500 ease-out backdrop-blur-md z-50 relative",
          isScrolled
            ? "w-[95%] max-w-5xl rounded-full border border-zinc-200/60 bg-white/80 px-6 py-3 shadow-xl shadow-black/5" 
            : "w-full max-w-full rounded-none border-b border-white/20 bg-white/40 px-6 py-5 md:px-12" 
        )}
      >
        <Link 
          href="/" 
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setIsMobileMenuOpen(false);
          }}
          className="flex items-center transition-transform hover:scale-105 active:scale-95"
        >
          <img 
            src="/images/brand/logo.webp" 
            alt="Logo Ekotifa" 
            className="h-7 w-auto object-contain md:h-8" 
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link, idx) => {
            if (link.name === "Programs & Services") {
              return (
                <div key={idx} className="relative group/menu py-2">
                  <button
                    onClick={() => handleNavClick(link)}
                    className={cn(
                      "text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-300 flex items-center gap-1.5 focus:outline-none",
                      isScrolled ? "text-zinc-600 hover:text-black" : "text-zinc-800 hover:text-zinc-950"
                    )}
                  >
                    {link.name}
                    <svg 
                      className="w-3 h-3 transition-transform duration-300 group-hover/menu:rotate-180 text-zinc-400" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Mega Menu Dropdown */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[650px] bg-white/95 backdrop-blur-md rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-zinc-100 p-6 opacity-0 translate-y-2 pointer-events-none group-hover/menu:opacity-100 group-hover/menu:translate-y-0 group-hover/menu:pointer-events-auto transition-all duration-300 ease-out z-50">
                    <div className="grid grid-cols-3 gap-8">
                      {programCategories.slice(0, 3).map((category) => (
                        <div key={category.id} className="flex flex-col gap-3">
                          <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#F4CA44] border-b border-zinc-100 pb-2">
                            {category.title}
                          </h4>
                          <ul className="flex flex-col gap-2.5 text-left">
                            {category.programs.slice(0, 5).map((program) => (
                              <li key={program.id}>
                                <Link
                                  href={`/programs/${program.slug}`}
                                  className="text-[11px] font-medium text-zinc-500 hover:text-yellow-600 transition-colors flex items-center group/item"
                                >
                                  <span className="w-1 h-1 rounded-full bg-zinc-300 group-hover/item:bg-yellow-500 mr-2 transition-colors flex-shrink-0" />
                                  <span className="truncate">{program.title}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-5 pt-4 border-t border-zinc-100 flex justify-between items-center bg-zinc-50/80 -mx-6 -mb-6 px-6 py-4 rounded-b-xl">
                      <p className="text-[10px] text-zinc-500">Discover experiences tailored for you.</p>
                      <button
                        onClick={() => handleNavClick(link)}
                        className="text-[10px] font-bold uppercase tracking-widest text-zinc-900 hover:text-[#F4CA44] transition-colors flex items-center gap-1.5 focus:outline-none"
                      >
                        Explore All Programs
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <button
                key={idx}
                onClick={() => handleNavClick(link)}
                className={cn(
                  "text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-300 focus:outline-none",
                  isScrolled ? "text-zinc-600 hover:text-black" : "text-zinc-800 hover:text-zinc-950"
                )}
              >
                {link.name}
              </button>
            );
          })}
          
          <Button 
            className="h-11 rounded-full bg-zinc-950 px-8 text-[10px] font-bold uppercase tracking-widest text-white shadow-md transition-all hover:scale-105 hover:bg-zinc-800 active:scale-95"
            onClick={() => window.dispatchEvent(new Event('openContactModal'))}
          >
            Hubungi Kami
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="group flex flex-col gap-1.5 p-2 md:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          <div className={cn("h-0.5 w-6 rounded-full bg-zinc-900 transition-all duration-300", isMobileMenuOpen && "rotate-45 translate-y-2")}></div>
          <div className={cn("h-0.5 w-4 rounded-full bg-zinc-900 transition-all duration-300 group-hover:w-6", isMobileMenuOpen && "opacity-0")}></div>
          <div className={cn("h-0.5 w-6 rounded-full bg-zinc-900 transition-all duration-300", isMobileMenuOpen && "-rotate-45 -translate-y-2")}></div>
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      <div
        className={cn(
          "fixed inset-0 h-screen w-screen bg-white/95 backdrop-blur-xl transition-all duration-500 ease-in-out pointer-events-auto flex flex-col p-8 pt-24 md:hidden overflow-y-auto z-40",
          isMobileMenuOpen 
            ? "opacity-100 translate-y-0 visible" 
            : "opacity-0 -translate-y-10 invisible pointer-events-none"
        )}
      >
        <div className="flex flex-col gap-5 mt-4">
          {navLinks.map((link, idx) => {
            if (link.name === "Programs & Services") {
              return (
                <div key={idx} className="flex flex-col">
                  <button
                    onClick={() => {
                      setActiveMobileCategory(
                        activeMobileCategory === "all" ? null : "all"
                      );
                    }}
                    className="text-xs font-bold uppercase tracking-widest text-zinc-800 flex items-center justify-between w-full py-2.5 border-b border-zinc-100 focus:outline-none"
                  >
                    <span>{link.name}</span>
                    <svg
                      className={cn("w-4 h-4 transition-transform duration-300 text-zinc-400", activeMobileCategory === "all" && "rotate-180")}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {/* Mobile Accordion Content */}
                  <div
                    className={cn(
                      "transition-all duration-300 overflow-hidden flex flex-col gap-4 pl-4 text-left",
                      activeMobileCategory === "all" ? "max-h-[1200px] mt-4 opacity-100" : "max-h-0 opacity-0"
                    )}
                  >
                    {programCategories.map((category) => (
                      <div key={category.id} className="flex flex-col gap-2">
                        <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-[#F4CA44]">
                          {category.title}
                        </h4>
                        <ul className="flex flex-col gap-2 pl-2">
                          {category.programs.map((program) => (
                            <li key={program.id}>
                              <Link
                                href={`/programs/${program.slug}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-xs font-medium text-zinc-600 hover:text-[#F4CA44] transition-colors block py-1"
                              >
                                {program.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <button
                key={idx}
                onClick={() => {
                  handleNavClick(link);
                  setIsMobileMenuOpen(false);
                }}
                className="text-xs font-bold uppercase tracking-widest text-zinc-800 text-left py-2.5 border-b border-zinc-100 focus:outline-none"
              >
                {link.name}
              </button>
            );
          })}

          <Button 
            className="w-full h-12 rounded-full bg-zinc-950 mt-6 text-[10px] font-bold uppercase tracking-widest text-white shadow-md hover:bg-zinc-800"
            onClick={() => {
              setIsMobileMenuOpen(false);
              window.dispatchEvent(new Event('openContactModal'));
            }}
          >
            Hubungi Kami
          </Button>
        </div>
      </div>
    </header>
  );
}