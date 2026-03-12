import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Servicos from "@/components/sections/Servicos";
import Clientes from "@/components/sections/Clientes";
import QuemSomos from "@/components/sections/QuemSomos";

export const metadata: Metadata = {
  title: "Início",
  description:
    "Conheça a RocketJR: Empresa Júnior de Sistemas de Informação da UFAL especializada em desenvolvimento web, e-commerce e soluções digitais.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "RocketJR | Soluções Digitais e Desenvolvimento Web",
    description:
      "Conheça os serviços da RocketJR em desenvolvimento web, e-commerce, transformação digital e análise de dados.",
    url: "/",
    type: "website",
  },
};

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
