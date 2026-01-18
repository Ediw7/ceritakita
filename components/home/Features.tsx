"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Features() {
  const containerRef = useRef<HTMLDivElement>(null);

  const features = [
    { no: "01", title: "Engineering Edge", desc: "Dibangun dengan Next.js untuk kecepatan akses <1 detik. Performa maksimal di setiap perangkat." },
    { no: "02", title: "Secure Ecosystem", desc: "Privasi tamu adalah prioritas. Didukung enkripsi Supabase untuk keamanan data tingkat tinggi." },
    { no: "03", title: "Personal Massal", desc: "Kirim ratusan undangan dalam satu klik dengan sistem otomasi pesan yang tetap terasa personal." },
    { no: "04", title: "Real-time Magic", desc: "Live Dashboard untuk memantau kehadiran tamu secara instan dengan sistem Unique QR Code." },
  ];

  useGSAP(() => {
    // 1. Animasi Header
    gsap.fromTo(".features-header-content", 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        scrollTrigger: {
          trigger: ".features-header-content",
          start: "top 95%",
          toggleActions: "play none none reverse"
        } 
      }
    );

    // 2. Animasi Cards - Menggunakan fromTo dengan immediateRender false
    // agar kartu tidak "menghilang" secara permanen jika JS telat.
    const cards = gsap.utils.toArray(".feature-item-card");
    
    gsap.fromTo(cards, 
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
        immediateRender: false, 
        scrollTrigger: {
          trigger: ".feature-grid-container",
          start: "top 80%", // Pemicu diturunkan sedikit agar koordinat lebih stabil
          toggleActions: "restart none none reverse",
          onRefresh: (self) => {
            // Jika saat refresh (layout berubah) trigger sudah terlewati, paksa muncul
            if (self.progress > 0) gsap.set(cards, { opacity: 1, y: 0 });
          }
        }
      }
    );
  }, { scope: containerRef });

  useEffect(() => {
    // Memaksa kalkulasi ulang ScrollTrigger setelah semua aset (images) kemungkinan besar selesai load
    const handleLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", handleLoad);
    
    // Refresh tambahan setelah jeda singkat
    const timer = setTimeout(() => ScrollTrigger.refresh(), 1500);

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section ref={containerRef} className="bg-white py-32 px-6 md:px-10 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="features-header-content mb-24">
          <span className="text-[10px] font-bold tracking-[0.5em] text-[#C6B56E] uppercase block mb-4">
            Our Advantage
          </span>
          <h2 className="text-[#525931] font-serif text-5xl md:text-7xl leading-tight">
            Keunggulan yang Tak Dimiliki <br />
            <span className="italic font-light">Platform Lainnya.</span>
          </h2>
        </div>

        {/* Grid Container */}
        <div className="feature-grid-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100 border border-gray-100">
          {features.map((item, i) => (
            <div
              key={i}
              className="feature-item-card bg-white p-10 flex flex-col justify-between min-h-[380px] transition-all duration-500 hover:bg-[#FDFBF7] group relative overflow-hidden"
            >
              <span className="text-[6rem] md:text-[8rem] font-serif italic text-[#525931]/5 absolute -top-8 -right-4 select-none group-hover:text-[#C6B56E]/10 transition-colors duration-700">
                {item.no}
              </span>

              <div className="relative z-10">
                <div className="w-12 h-px bg-[#C6B56E] mb-8 group-hover:w-24 transition-all duration-700" />
                <h3 className="font-bold text-[11px] tracking-[0.3em] uppercase text-[#525931] mb-6">
                  {item.title}
                </h3>
                <p className="text-sm text-[#525931]/70 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}