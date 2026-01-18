"use client";
import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Animasi Judul (Kiri)
    gsap.from(textRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: "power4.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 90%",
        // play: maju saat masuk, reverse: mundur saat keluar ke atas, 
        // restart: ulang saat masuk lagi dari bawah
        toggleActions: "play reverse play reverse", 
      },
    });

    // 2. Animasi Konten (Kanan)
    gsap.from(".about-content-item", {
      y: 50,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: "expo.out",
      scrollTrigger: {
        trigger: contentRef.current,
        start: "top 85%",
        toggleActions: "play reverse play reverse",
      },
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="bg-[#FDFBF7] pt-32 pb-40 px-6 md:px-10 relative overflow-hidden">
      {/* Background Text Dekoratif */}
      <div className="absolute top-10 right-[-5%] text-[#525931]/5 font-serif text-[15rem] select-none pointer-events-none italic hidden lg:block">
        CeritaKita
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px w-8 bg-[#C6B56E]" />
          <span className="text-[10px] font-bold tracking-[0.5em] text-[#C6B56E] uppercase">
            A Legacy of Love
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          <div className="lg:col-span-7 overflow-hidden">
            <h2 ref={textRef} className="text-[#525931] font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] font-light">
              Sebab di setiap detail, <br /> 
              <span className="italic font-light text-[#C6B56E] ml-0 md:ml-20 block mt-2">
                ada kisah yang tak sama.
              </span>
            </h2>
          </div>

          <div ref={contentRef} className="lg:col-span-5 lg:pt-20 space-y-12">
            <div className="about-content-item">
              <p className="font-sans text-lg md:text-xl font-light leading-relaxed text-[#525931] border-l-[3px] border-[#C6B56E] pl-8 italic">
                "Kami memastikan teknologi melayani cinta, bukan sebaliknya."
              </p>
            </div>
            
            <div className="about-content-item space-y-6 font-sans text-sm md:text-base font-light leading-relaxed text-[#525931]/70 max-w-md">
              <p>
                Lahir dari tangan mahasiswa Teknik Komputer, kami membangun arsitektur digital berbasis <span className="text-[#525931] font-semibold">Next.js</span> untuk memastikan momen bahagia Anda bebas dari kendala teknis.
              </p>
              <p>
                Presisi kode bertemu dengan ketulusan seni, menghasilkan ekosistem yang cepat, aman, dan tak terlupakan.
              </p>
            </div>

            <div className="about-content-item">
              <Link href="/about" className="group inline-flex items-center gap-6 text-[10px] font-bold tracking-[0.4em] text-[#525931] uppercase transition-all">
                <span>Pelajari Filosofi Kami</span>
                <div className="relative flex items-center justify-center">
                  <div className="w-12 h-px bg-[#C6B56E] group-hover:w-20 transition-all duration-700" />
                  <div className="absolute right-0 w-1.5 h-1.5 bg-[#C6B56E] rotate-45 group-hover:translate-x-2 transition-all duration-700" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}