import Image from "next/image";
import Hero from "@/components/sections/Hero";
import Servicos from "@/components/sections/Servicos";
import Clientes from "@/components/sections/Clientes";
import QuemSomos from "@/components/sections/QuemSomos";

export default function Home() {
  return (
    <main>
      <Hero />
      <Servicos />
      <Clientes />
      <QuemSomos />
    </main>
  );
}
