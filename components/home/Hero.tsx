import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const fields = [
    { label: "TEMA FAVORIT", val: "The Heritage" },
    { label: "JENIS ACARA", val: "Wedding" },
    { label: "SISTEM", val: "Guestbook + QR" },
    { label: "PERFORMA", val: "Ultra Cepat" },
  ];

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/herocover.webp" 
        alt="CeritaKita Luxury Hero"
        fill
        priority
        className="object-cover scale-105 animate-slow-zoom" 
      />
      
      {/* Cinematic Overlay - Memberikan kontras tanpa menutupi detail foto */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-[#525931]/40 z-10" />

      {/* Hero Content - Tipografi Ramping & Proporsional */}
      <div className="relative z-20 text-center px-6 text-white max-w-6xl">
        <div className="mb-6">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light leading-[1.2] tracking-tight animate-slide-up">
            Dari Hati ke Hati, <br className="hidden md:block" />
            <span className="italic font-light text-[#C6B56E] opacity-95">Lewat Satu Tautan Cinta</span>
          </h1>
        </div>
        
        {/* Subtle Gold Line */}
        <div className="h-px w-16 bg-[#C6B56E]/60 mx-auto mb-8" />
        
        <p className="max-w-2xl mx-auto font-sans text-xs md:text-sm font-light tracking-[0.1em] leading-relaxed mb-10 opacity-70">
          Arsitektur digital premium untuk undangan yang indah, cerdas, dan penuh ketulusan.
        </p>

        {/* Indicators - Mengecil agar tidak menyaingi judul */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[8px] md:text-[9px] uppercase tracking-[0.4em] text-[#C6B56E]/80 font-semibold">
          {["Next.js Powered", "Secure by Supabase", "1000+ Momen Bahagia"].map((badge, idx) => (
            <span key={idx} className="flex items-center gap-4">
              {idx !== 0 && <span className="w-0.5 h-0.5 bg-[#C6B56E] rounded-full opacity-40" />}
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* Floating Booking Bar - REFINED GAYA IDYLL */}
      <div className="absolute bottom-10 left-0 w-full z-30 px-6">
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