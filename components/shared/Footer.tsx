// src/components/shared/Footer.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#FDFBF7] py-20 px-10 border-t border-[#C6B56E]/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-20">
          
          {/* Brand Section */}
          <div className="space-y-8">
            {/* Logo Section - Menggunakan file 1-ceritakita dari folder public */}
            <Link href="/" className="inline-block hover:opacity-80 transition-opacity">
              <Image 
                src="/1-ceritakita.png" 
                alt="CeritaKita Logo" 
                width={150} 
                height={50} 
                className="object-contain"
              />
            </Link>
            
            <p className="text-[10px] tracking-[0.3em] text-[#525931]/50 uppercase max-w-xs leading-loose font-medium">
              Membangun jembatan emosional pertama Anda lewat satu tautan cinta.
            </p>
          </div>

          {/* Navigation Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 md:gap-24">
            <div className="space-y-6">
              <span className="text-[9px] font-bold text-[#C6B56E] uppercase tracking-[0.4em]">Ecosystem</span>
              <ul className="text-[10px] text-[#525931]/60 space-y-4 uppercase tracking-[0.25em] font-semibold">
                <li className="hover:text-[#C6B56E] transition-colors"><Link href="/about">Tentang Kami</Link></li>
                <li className="hover:text-[#C6B56E] transition-colors"><Link href="/products">Produk</Link></li>
                <li className="hover:text-[#C6B56E] transition-colors"><Link href="/themes">Pilihan Tema</Link></li>
              </ul>
            </div>

            <div className="space-y-6">
              <span className="text-[9px] font-bold text-[#C6B56E] uppercase tracking-[0.4em]">Support</span>
              <ul className="text-[10px] text-[#525931]/60 space-y-4 uppercase tracking-[0.25em] font-semibold">
                <li className="hover:text-[#C6B56E] transition-colors"><Link href="/pricing">Harga</Link></li>
                <li className="hover:text-[#C6B56E] transition-colors"><Link href="/contact">Kontak</Link></li>
                <li className="hover:text-[#C6B56E] transition-colors"><Link href="/faq">FAQ</Link></li>
              </ul>
            </div>

            <div className="space-y-6">
              <span className="text-[9px] font-bold text-[#C6B56E] uppercase tracking-[0.4em]">Social</span>
              <ul className="text-[10px] text-[#525931]/60 space-y-4 uppercase tracking-[0.25em] font-semibold">
                <li className="hover:text-[#C6B56E] transition-colors"><Link href="https://instagram.com">Instagram</Link></li>
                <li className="hover:text-[#C6B56E] transition-colors"><Link href="https://wa.me">WhatsApp</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Legal Section */}
        <div className="pt-12 border-t border-[#525931]/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] uppercase tracking-[0.4em] text-[#525931]/30 font-bold">
          <span>© 2026 CeritaKita. Semua hak cipta dilindungi.</span>
          <div className="flex gap-10">
            <span className="hover:text-[#C6B56E] transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-[#C6B56E] transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}