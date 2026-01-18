import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Features from "@/components/home/Features";
import Products from "@/components/home/Products";
import Themes from "@/components/home/Themes";
import Pricing from "@/components/home/Pricing";
import FinalCTA from "@/components/home/FinalCTA";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden bg-[#FDFBF7]">
      <Hero />
      <About />
      <Features />
      <Products />
      <Themes />
      <Pricing />
      <FinalCTA />
      <Testimonials />
      
    </div>
  );
}