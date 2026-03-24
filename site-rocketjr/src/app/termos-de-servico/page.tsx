import type { Metadata } from "next";
import TermosServico from "@/components/legal/TermosServico";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description:
    "Leia os termos de uso do site da RocketJR e compreenda as condições para navegação e utilização do conteúdo.",
  alternates: {
    canonical: "/termos-de-uso",
  },
  openGraph: {
    title: "Termos de Uso | RocketJR",
    description:
      "Confira os termos e condições de uso do site da RocketJR.",
    url: "/termos-de-uso",
    type: "website",
  },
};

export default function TermosDeUsoPage() {
  return <TermosServico />;
}
