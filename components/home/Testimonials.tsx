"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const REVIEWS = [
  {
    client: "Aditya & Sarah",
    role: "The Heritage Theme",
    text: "Arsitektur digitalnya luar biasa. Undangan kami terasa sangat eksklusif dan tamu-tamu sangat terkesan dengan sistem QR Code-nya.",
  },
  {
    client: "Dimas & Valen",
    role: "Modern Minimalist",
    text: "Sangat membantu bagi kami yang sibuk. Dashboard real-time membuat manajemen tamu jadi sangat mudah dan tenang.",
  },
  {
    client: "Reza & Amel",
    role: "Enchanted Bloom",
    text: "Detail desainnya benar-benar diperhatikan. Tim CeritaKita sangat responsif memastikan setiap pixel sesuai dengan keinginan kami.",
  },
];

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Reveal Header
    gsap.from(".testi-header", {
      y: 40,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".testi-header",
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    });

    // Reveal Cards
    gsap.from(".testi-card", {
      y: 60,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".testi-grid",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="bg-[#FDFBF7] py-32 px-6 md:px-10 overflow-hidden border-t border-[#525931]/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Center */}
        <div className="testi-header text-center mb-24 space-y-4">
          <span className="text-[10px] font-bold tracking-[0.5em] text-[#C6B56E] uppercase block">
            Love Letters
          </span>
          <h2 className="text-[#525931] font-serif text-4xl md:text-6xl italic">
            Apa Kata Mereka
          </h2>
        </div>

        {/* Testi Grid */}
        <div className="testi-grid grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {REVIEWS.map((item, i) => (
            <div key={i} className="testi-card flex flex-col items-center text-center group">
              {/* Quote Mark Subtle */}
              <span className="font-serif text-6xl text-[#C6B56E]/20 mb-2 group-hover:text-[#C6B56E]/40 transition-colors">
                &ldquo;
              </span>
              
              <p className="text-sm md:text-base text-[#525931]/80 font-light leading-relaxed mb-8 italic">
                {item.text}
              </p>
              
              <div className="w-6 h-px bg-[#C6B56E]/30 mb-8" />
              
              <div className="space-y-1">
                <h4 className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#525931]">
                  {item.client}
                </h4>
                <p className="text-[9px] tracking-[0.1em] text-[#C6B56E] uppercase">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}