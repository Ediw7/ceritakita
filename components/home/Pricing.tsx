"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const PLANS = [
  {
    name: "Essential",
    price: "149",
    features: ["Custom Domain", "Mobile Responsive", "RSVP Management", "Unique QR Code", "1 Month Active"],
    recommended: false,
  },
  {
    name: "Luxury",
    price: "299",
    features: ["Everything in Essential", "Priority Support", "Digital Guestbook", "Custom Music", "6 Months Active"],
    recommended: true,
  },
  {
    name: "Bespoke",
    price: "599",
    features: ["Full Custom Architecture", "Dedicated Team", "Live Streaming Integration", "Advanced Analytics", "Lifetime Active"],
    recommended: false,
  },
];

export default function Pricing() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Memaksa refresh koordinat agar pemicu akurat
    ScrollTrigger.refresh();

    // Gunakan fromTo untuk menjamin opacity akhir adalah 1
    gsap.fromTo(".pricing-card", 
      { 
        y: 60, 
        opacity: 0 
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".pricing-grid",
          start: "top 90%", // Diubah ke 90% agar lebih cepat terpicu
          toggleActions: "play none none reverse",
          // Jika user sudah scroll lewat, paksa semua muncul
          onEnter: () => gsap.to(".pricing-card", { opacity: 1, y: 0, stagger: 0.1 })
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="bg-white py-32 px-6 md:px-10 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-24 space-y-4">
          <span className="text-[10px] font-bold tracking-[0.5em] text-[#C6B56E] uppercase block">
            Investment
          </span>
          <h2 className="text-[#525931] font-serif text-5xl md:text-6xl italic">
            Pilih Paket Anda
          </h2>
        </div>

        <div className="pricing-grid grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {PLANS.map((plan, i) => (
            <div 
              key={i} 
              // Tambahkan class opacity-0 secara default agar tidak flicker
              className={`pricing-card p-10 flex flex-col items-center text-center transition-all duration-500 border
                ${plan.recommended 
                  ? "border-[#C6B56E] shadow-[0_20px_50px_rgba(198,181,110,0.1)] bg-[#FDFBF7]" 
                  : "border-gray-100 bg-white hover:border-[#C6B56E]/30"}`}
            >
              <h3 className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#525931]/60 mb-8">
                {plan.name}
              </h3>
              
              <div className="mb-10 flex items-baseline gap-1">
                <span className="text-xs font-light text-[#C6B56E]">IDR</span>
                <span className="text-5xl font-serif text-[#525931]">{plan.price}</span>
                <span className="text-[10px] font-bold text-[#525931]/30 uppercase">K</span>
              </div>

              <div className="w-8 h-px bg-[#C6B56E]/30 mb-10" />

              <ul className="space-y-4 mb-12 flex-grow">
                {plan.features.map((feat, idx) => (
                  <li key={idx} className="text-[10px] tracking-widest text-[#525931]/70 uppercase leading-relaxed">
                    {feat}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 text-[9px] font-black uppercase tracking-[0.3em] transition-all duration-500
                ${plan.recommended 
                  ? "bg-[#525931] text-[#C6B56E] hover:bg-[#C6B56E] hover:text-[#525931]" 
                  : "bg-transparent border border-[#525931] text-[#525931] hover:bg-[#525931] hover:text-white"}`}>
                Select Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}