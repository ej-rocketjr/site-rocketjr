<<<<<<< HEAD
import Image from "next/image";
import SectionExemplo from "@/components/sections/SectionExemplo"

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        
        <SectionExemplo />

      </main>
    </div>
=======
import Hero from "@/components/sections/Hero";
import Servicos from "@/components/sections/Servicos";
import Clientes from "@/components/sections/Clientes";
import QuemSomos from "@/components/sections/QuemSomos";
import Footer from "@/components/layout/Footer";


export default function Home() {
  return (
    <main>
        <Hero />
        <Servicos />
        <Clientes />
        <QuemSomos />
        <Footer />
    </main>
>>>>>>> ac99ed7 (feat: adicionar header)
  );
}
