"use client";
import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FinalCTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Animasi muncul konten utama
    gsap.from(contentRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: "power4.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    // Efek garis emas memanjang
    gsap.from(".cta-line", {
      width: 0,
      duration: 2,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
      },
    });
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef} 
      className="relative bg-[#525931] py-40 px-6 overflow-hidden"
    >
      {/* Background Decorative Text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
        <span className="font-serif text-[20vw] text-white italic whitespace-nowrap">
          Everlasting Love
        </span>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div ref={contentRef} className="space-y-12">
          <div className="space-y-4">
            <span className="text-[10px] font-bold tracking-[0.6em] text-[#C6B56E] uppercase block">
              Ready to start?
            </span>
            <h2 className="text-white font-serif text-5xl md:text-8xl leading-tight font-light">
              Mari Abadikan <br />
              <span className="italic">Cerita Anda.</span>
            </h2>
          </div>

          <div className="cta-line h-px w-32 bg-[#C6B56E] mx-auto" />

          <p className="text-white/60 font-sans text-sm md:text-lg font-light tracking-wide max-w-xl mx-auto leading-relaxed">
            Konsultasikan visi pernikahan Anda dengan tim arsitek digital kami dan buat momen yang tak terlupakan.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-8">
            <Link 
              href="/konsultasi" 
              className="bg-[#C6B56E] text-[#525931] px-12 py-5 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white transition-all duration-500 rounded-sm shadow-xl"
            >
              Mulai Konsultasi
            </Link>
            
            <Link 
              href="/themes" 
              className="group flex items-center gap-4 text-white text-[10px] font-bold uppercase tracking-[0.3em] border-b border-white/20 pb-2 hover:border-[#C6B56E] transition-all"
            >
              Lihat Katalog Tema
              <span className="group-hover:translate-x-2 transition-transform duration-500">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}