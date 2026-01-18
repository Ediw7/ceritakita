import Link from "next/link";

export default function About() {
  return (
    <section className="bg-[#FDFBF7] pt-32 pb-40 px-6 md:px-10 relative overflow-hidden">
      {/* Subtle Background Text (Luxury Brand Element) */}
      <div className="absolute top-10 right-[-5%] text-[#525931]/5 font-serif text-[15rem] select-none pointer-events-none italic hidden lg:block">
        CeritaKita
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Label Atas yang Ramping */}
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px w-8 bg-[#C6B56E]" />
          <span className="text-[10px] font-bold tracking-[0.5em] text-[#C6B56E] uppercase">
            A Legacy of Love
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Kolom Kiri: Judul dengan Indentasi Artistik (lg:col-span-7) */}
          <div className="lg:col-span-7">
            <h2 className="text-[#525931] font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] font-light">
              Sebab di setiap detail, <br /> 
              <span className="italic font-light text-[#C6B56E] ml-0 md:ml-20 block mt-2">
                ada kisah yang tak sama.
              </span>
            </h2>
          </div>

          {/* Kolom Kanan: Narasi & CTA (lg:col-span-5) */}
          <div className="lg:col-span-5 lg:pt-20 space-y-12">
            <div className="relative">
              {/* Kutipan dengan Garis Vertikal Luxury */}
              <p className="font-sans text-lg md:text-xl font-light leading-relaxed text-[#525931] border-l-[3px] border-[#C6B56E] pl-8 italic">
                "Kami memastikan teknologi melayani cinta, bukan sebaliknya."
              </p>
            </div>
            
            <div className="space-y-6 font-sans text-sm md:text-base font-light leading-relaxed text-[#525931]/70 max-w-md">
              <p>
                Lahir dari tangan mahasiswa Teknik Komputer, kami membangun arsitektur digital berbasis <span className="text-[#525931] font-semibold">Next.js</span> untuk memastikan momen bahagia Anda bebas dari kendala teknis.
              </p>
              <p>
                Presisi kode bertemu dengan ketulusan seni, menghasilkan ekosistem yang cepat, aman, dan tak terlupakan.
              </p>
            </div>

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

      {/* Grid Pattern Subtle (Gaya IDYLL) */}
      <div className="absolute bottom-0 left-0 w-full h-full opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]" />
    </section>
  );
}