import Image from "next/image";
import Navbar from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Servicos from "@/components/sections/Servicos";
import Clientes from "@/components/sections/Clientes";
import QuemSomos from "@/components/sections/QuemSomos";
import Footer from "@/components/layout/Footer";


export default function Home() {
  return (
    <main>
        <Navbar />
        <Hero />
        <Servicos />
        <Clientes />
        <QuemSomos />
        <Footer />
    </main>
  );
}
