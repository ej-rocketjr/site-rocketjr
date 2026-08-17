import type { Metadata } from "next";
import TermosServico from "@/components/legal/TermosServico";

export const metadata: Metadata = {
  title: "Termos de Serviço",
  description:
    "Leia os termos de serviço do site da RocketJR e compreenda as condições para navegação e utilização do conteúdo.",
  alternates: {
    canonical: "/termos-de-servico",
  },
  openGraph: {
    title: "Termos de Serviço | RocketJR",
    description:
      "Confira os termos e condições de serviço do site da RocketJR.",
    url: "/termos-de-servico",
    type: "website",
  },
};

export default function TermosDeServicoPage() {
  return <TermosServico />;
}
