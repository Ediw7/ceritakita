"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const CATEGORIES = ["All", "Modern", "Heritage", "Minimalist"];

const THEMES = [
  { id: 1, name: "The Royal Sage", cat: "Heritage", img: "/theme-royal.webp" },
  { id: 2, name: "Enchanted Bloom", cat: "Modern", img: "/theme-enchanted.webp" },
  { id: 3, name: "Modern Minimal", cat: "Minimalist", img: "/theme-modern.webp" },
  { id: 4, name: "Rustic Charm", cat: "Heritage", img: "/theme-rustic.webp" },
  { id: 5, name: "Urban Chic", cat: "Modern", img: "/theme-urban.webp" },
  { id: 6, name: "Noir Essence", cat: "Minimalist", img: "/theme-noir.webp" },
  { id: 7, name: "Classic White", cat: "Minimalist", img: "/theme-white.webp" },
  { id: 8, name: "Vintage Rose", cat: "Heritage", img: "/theme-rose.webp" },
];

export default function Themes() {
  const [filter, setFilter] = useState("All");
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(".theme-item", 
      { opacity: 0, scale: 0.95, y: 15 },
      { 
        opacity: 1, 
        scale: 1,
        y: 0, 
        duration: 0.5, 
        stagger: 0.05, 
        ease: "power2.out" 
      }
    );
  }, [filter]);

  const filteredThemes = filter === "All" 
    ? THEMES 
    : THEMES.filter(t => t.cat === filter);

  return (
    <section ref={containerRef} className="bg-[#FDFBF7] py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section - Tetap Gede & Center */}
        <div className="text-center mb-12 space-y-4">
          <span className="text-[10px] font-bold tracking-[0.5em] text-[#C6B56E] uppercase block">
            Portofolio
          </span>
          <h2 className="text-[#525931] font-serif text-5xl md:text-6xl italic leading-tight">
            Koleksi Tema
          </h2>
        </div>

        {/* Filter Buttons - Center & Elegant */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-24 border-b border-[#525931]/10 pb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-[10px] font-bold tracking-[0.4em] uppercase transition-all relative py-2
                ${filter === cat ? "text-[#525931]" : "text-[#525931]/30 hover:text-[#C6B56E]"}`}
            >
              {cat}
              {filter === cat && (
                <div className="absolute bottom-0 left-0 w-full h-px bg-[#C6B56E]" />
              )}
            </button>
          ))}
        </div>

        {/* Portfolio Display - Grid Kecil (5 Kolom di Desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredThemes.map((theme) => (
            <div key={theme.id} className="theme-item group cursor-pointer">
              {/* Gambar Compact dengan Aspect Ratio 4:5 */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-gray-100 mb-4 shadow-sm group-hover:shadow-md transition-shadow">
                <Image
                  src={theme.img}
                  alt={theme.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                {/* Minimal Overlay */}
                <div className="absolute inset-0 bg-[#525931]/5 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              
              {/* Info Teks Kecil & Rapi */}
              <div className="space-y-1">
                <h3 className="font-serif text-lg text-[#525931] group-hover:text-[#C6B56E] transition-colors leading-snug">
                  {theme.name}
                </h3>
                <p className="text-[8px] tracking-[0.2em] text-[#525931]/40 uppercase">
                  {theme.cat} Edition
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}