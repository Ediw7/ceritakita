"use client";
import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Products() {
  const containerRef = useRef<HTMLDivElement>(null);

  const productList = [
    {
      title: "Web Invitation",
      category: "THE INTERFACE",
      desc: "Undangan digital berbasis web yang responsif, elegan, dan dirancang khusus untuk mencerminkan identitas unik pasangan.",
      image: "/mockup-web.webp", // Pastikan file ini ada di folder public
      align: "left",
    },
    {
      title: "Digital Guestbook",
      category: "THE PROTOCOL",
      desc: "Sistem manajemen tamu cerdas dengan QR Code unik. Pantau kehadiran tamu secara real-time dengan dashboard eksklusif.",
      image: "/mockup-guestbook.webp", // Pastikan file ini ada di folder public
      align: "right",
    },
  ];

  useGSAP(() => {
    // Animasi Parallax pada Gambar
    gsap.utils.toArray(".product-image-container").forEach((container: any) => {
      const image = container.querySelector("img");
      
      gsap.to(image, {
        yPercent: 15, // Efek parallax saat scroll
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    // Reveal Teks secara Staggered
    gsap.from(".product-text", {
      x: (i) => (i % 2 === 0 ? -50 : 50),
      opacity: 0,
      duration: 1.2,
      stagger: 0.5,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".product-grid",
        start: "top 70%",
        toggleActions: "restart reverse restart reverse",
      },
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="bg-[#525931] py-32 px-6 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto product-grid">
        {productList.map((product, i) => (
          <div 
            key={i} 
            className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-32 mb-40 last:mb-0 ${
              product.align === "right" ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Visual Side */}
            <div className="w-full lg:w-3/5">
              <div className="product-image-container relative aspect-[16/10] w-full overflow-hidden rounded-sm bg-black/20 border border-white/10 group">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700 scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#525931]/80 via-transparent to-transparent opacity-60" />
              </div>
            </div>

            {/* Content Side */}
            <div className="product-text w-full lg:w-2/5 space-y-8">
              <div className="space-y-4">
                <span className="text-[10px] font-bold tracking-[0.5em] text-[#C6B56E] uppercase block">
                  {product.category}
                </span>
                <h3 className="text-white font-serif text-4xl md:text-6xl font-light italic leading-tight">
                  {product.title}
                </h3>
              </div>
              
              <div className="h-px w-12 bg-[#C6B56E]/40" />
              
              <p className="text-white/60 font-sans font-light text-base md:text-lg leading-relaxed max-w-md italic">
                "{product.desc}"
              </p>

              <button className="group flex items-center gap-6 text-[10px] font-bold tracking-[0.4em] text-white uppercase transition-all">
                Explore Feature
                <div className="relative flex items-center justify-center">
                  <div className="w-8 h-px bg-[#C6B56E] group-hover:w-16 transition-all duration-700" />
                  <div className="absolute right-0 w-1 h-1 bg-[#C6B56E] rotate-45" />
                </div>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}