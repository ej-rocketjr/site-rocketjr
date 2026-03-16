import Image from "next/image";
import Hero from "@/components/sections/Hero";
import Servicos from "@/components/sections/Servicos";
import Clientes from "@/components/sections/Clientes";

export default function Home() {
  return (
    <main>
      <Hero />
      <Servicos />
      <Clientes />
    </main>
  );
}
