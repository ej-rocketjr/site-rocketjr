import Image from "next/image";
import Hero from "@/components/sections/Hero";
import Servicos from "@/components/sections/Servicos";

export default function Home() {
  return (
    <main>
      <Hero />
      <Servicos />
    </main> 
  );
}
