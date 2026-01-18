"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin"; // Import TextPlugin

// Daftarkan Plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const typingRef = useRef<HTMLParagraphElement>(null); // Ref untuk teks mengetik

  const fields = [
    { label: "TEMA FAVORIT", val: "The Heritage" },
    { label: "JENIS ACARA", val: "Wedding" },
    { label: "SISTEM", val: "Guestbook + QR" },
    { label: "PERFORMA", val: "Ultra Cepat" },
  ];

  useGSAP(() => {
    // 1. TIMELINE AWAL (Reveal Sekali di Awal)
    const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.5 } });
  
    tl.from(bgRef.current, { scale: 1.2, opacity: 0, duration: 2 })
      .from(titleRef.current, { y: 100, opacity: 0, skewY: 5 }, "-=1.5")
      .from(".hero-text-item", { y: 30, opacity: 0, stagger: 0.2 }, "-=1.2")
      .from(barRef.current, { y: 100, opacity: 0 }, "-=1");

    // 2. TIMELINE TERPISAH UNTUK LOOPING KETIK (Agar tidak mengganggu animasi lain)
    const typingTl = gsap.timeline({ 
      repeat: -1, // Looping selamanya
      repeatDelay: 2 // Diam selama 2 detik sebelum mulai ngetik ulang
    });

    typingTl
      .to(typingRef.current, {
        duration: 3,
        text: "Arsitektur digital premium untuk undangan yang indah, cerdas, dan penuh ketulusan.",
        ease: "none",
      })
      .to(typingRef.current, {
        duration: 1.5,
        text: "", // Menghapus teks kembali
        delay: 3, // Teks menetap selama 3 detik setelah selesai diketik
        ease: "none",
      });
  
    // 3. PARALLAX & FADE OUT (Tetap sama seperti sebelumnya)
    gsap.to(bgRef.current, {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  
    gsap.to([titleRef.current, contentRef.current], {
      opacity: 0,
      y: -50,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "30% top",
        scrub: true,
        onLeaveBack: () => {
          gsap.to([titleRef.current, contentRef.current], { opacity: 1, y: 0, duration: 0.5 });
        }
      },
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <div ref={bgRef} className="absolute inset-0 w-full h-full">
        <Image
          src="/herocover.webp"
          alt="CeritaKita Luxury Hero"
          fill
          priority
          className="object-cover"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-[#525931]/40 z-10" />

      <div ref={contentRef} className="relative z-20 text-center px-6 text-white max-w-6xl">
        <div className="mb-6 overflow-hidden">
          <h1 ref={titleRef} className="font-serif text-5xl md:text-6xl lg:text-7xl font-light leading-[1.2] tracking-tight">
            Dari Hati ke Hati, <br className="hidden md:block" />
            <span className="italic font-light text-[#C6B56E] opacity-95">Lewat Satu Tautan Cinta</span>
          </h1>
        </div>
        
        <div className="hero-text-item h-px w-16 bg-[#C6B56E]/60 mx-auto mb-8" />
        
        {/* Teks Tagline kosong di awal untuk efek mengetik */}
        <p ref={typingRef} className="hero-text-item max-w-2xl mx-auto font-sans text-xs md:text-sm font-light tracking-[0.1em] leading-relaxed mb-10 min-h-[1.5em] opacity-70"></p>

        <div className="hero-text-item flex flex-wrap justify-center gap-x-8 gap-y-4 text-[8px] md:text-[9px] uppercase tracking-[0.4em] text-[#C6B56E]/80 font-semibold">
          {["Next.js Powered", "Secure by Supabase", "1000+ Momen Bahagia"].map((badge, idx) => (
            <span key={idx} className="flex items-center gap-4">
              {idx !== 0 && <span className="w-0.5 h-0.5 bg-[#C6B56E] rounded-full opacity-40" />}
              {badge}
            </span>
          ))}
        </div>
      </div>

      <div ref={barRef} className="absolute bottom-10 left-0 w-full z-30 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 bg-white/95 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-sm overflow-hidden border border-[#C6B56E]/10">
          {fields.map((field, idx) => (
            <div key={idx} className={`p-4 md:p-6 flex flex-col justify-center border-r border-gray-100 transition-colors hover:bg-[#FDFBF7] group ${idx >= 2 ? 'hidden md:flex' : ''}`}>
              <span className="text-[8px] font-bold text-[#525931]/40 uppercase tracking-[0.2em] mb-1 group-hover:text-[#C6B56E] transition-colors">
                {field.label}
              </span>
              <span className="text-[10px] md:text-xs font-bold text-[#525931] tracking-wide">
                {field.val}
              </span>
            </div>
          ))}
          <Link 
            href="/konsultasi" 
            className="col-span-2 md:col-span-1 flex items-center justify-center bg-[#525931] text-[#C6B56E] text-[10px] font-black uppercase tracking-[0.25em] hover:bg-[#C6B56E] hover:text-[#525931] transition-all duration-700 py-4"
          >
            MULAI CERITA
          </Link>
        </div>
      </div>
    </section>
  );
}