'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // Posisi diturunkan sedikit ke pt-4 agar lebih proporsional
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center pt-4 px-6 transition-all duration-500">
      <div 
        className={`w-full max-w-5xl flex justify-between items-center transition-all duration-700
        ${isScrolled 
          ? 'bg-[#525931]/95 backdrop-blur-xl border border-[#C6B56E]/20 px-10 py-2 rounded-full shadow-[0_15px_40px_rgba(0,0,0,0.2)]' 
          : 'bg-transparent border border-transparent px-10 py-3'
        }`}
      >
        
        {/* Logo - Ukuran Medium-Small yang Berwibawa */}
        <Link href="/" className="flex items-center group">
          <Image 
            src="/ceritakita.png" 
            alt="Logo"
            width={115} 
            height={35}
            className={`object-contain transition-all duration-500 group-hover:scale-105 ${!isScrolled ? 'brightness-0 invert' : ''}`}
          />
        </Link>

        {/* Menu Navigasi - Font 9px (Sweet Spot untuk Luxury) */}
        <div className="hidden lg:flex items-center space-x-10 text-[9px] font-bold tracking-[0.4em] uppercase">
          <Link href="/about" className="text-white/90 hover:text-[#C6B56E] transition-colors duration-300">Tentang Kami</Link>
          
          <div className="group relative">
            <button className="text-white/90 hover:text-[#C6B56E] transition-colors flex items-center gap-2 py-1 uppercase">
              Produk
              <span className="w-1 h-1 bg-[#C6B56E] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </button>
            <div className="absolute top-full -left-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 translate-y-2 group-hover:translate-y-0 bg-[#525931]/98 backdrop-blur-3xl border border-[#C6B56E]/20 p-5 min-w-[200px] rounded-2xl shadow-2xl">
              <Link href="/products/invitation" className="block py-2.5 text-white/70 hover:text-[#C6B56E] tracking-[0.2em] transition-all border-b border-white/5">Web Invitation</Link>
              <Link href="/products/guestbook" className="block py-2.5 text-white/70 hover:text-[#C6B56E] tracking-[0.2em] transition-all">Buku Tamu Digital</Link>
            </div>
          </div>

          <div className="group relative">
            <button className="text-white/90 hover:text-[#C6B56E] transition-colors flex items-center gap-2 py-1 uppercase">
              Tema
              <span className="w-1 h-1 bg-[#C6B56E] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </button>
            <div className="absolute top-full -left-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 translate-y-2 group-hover:translate-y-0 bg-[#525931]/98 backdrop-blur-3xl border border-[#C6B56E]/20 p-5 min-w-[200px] rounded-2xl shadow-2xl">
              <Link href="/themes#heritage" className="block py-2.5 text-white/70 hover:text-[#C6B56E] tracking-[0.2em] border-b border-white/5">The Heritage</Link>
              <Link href="/themes#minimalist" className="block py-2.5 text-white/70 hover:text-[#C6B56E] tracking-[0.2em]">The Minimalist</Link>
            </div>
          </div>

          <Link href="/pricing" className="text-white/90 hover:text-[#C6B56E] transition-colors duration-300">Harga</Link>
          <Link href="/contact" className="text-white/90 hover:text-[#C6B56E] transition-colors duration-300">Kontak</Link>
        </div>

        {/* CTA - Solid & Elegant */}
        <Link 
          href="https://wa.me/..." 
          className={`px-7 py-2.5 rounded-full text-[9px] font-black tracking-[0.25em] uppercase transition-all duration-500
            ${isScrolled 
              ? 'bg-[#C6B56E] text-[#525931] shadow-lg' 
              : 'bg-white/15 text-white border border-white/30 backdrop-blur-sm hover:bg-white hover:text-[#525931]'}`}
        >
          Konsultasi
        </Link>
      </div>
    </nav>
  );
}