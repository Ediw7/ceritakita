
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';

import './globals.css';

import { Montserrat, Cormorant_Garamond } from 'next/font/google';

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'], 
  weight: ['300', '500', '700'],
  variable: '--font-cormorant' 
});

const montserrat = Montserrat({ 
  subsets: ['latin'], 
  weight: ['300', '600', '800'],
  variable: '--font-montserrat' 
});

// const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
// const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${cormorant.variable} ${montserrat.variable} bg-[#FDFBF7] text-[#525931]`}>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}