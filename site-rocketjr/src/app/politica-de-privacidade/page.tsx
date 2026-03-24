import type { Metadata } from "next";
import PoliticasPrivacidade from "@/components/legal/PoliticasPrivacidade";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Leia a política de privacidade da RocketJR e entenda como tratamos seus dados pessoais com transparência e segurança.",
  alternates: {
    canonical: "/politica-de-privacidade",
  },
  openGraph: {
    title: "Política de Privacidade | RocketJR",
    description:
      "Entenda como a RocketJR coleta, utiliza e protege os dados dos usuários no site.",
    url: "/politica-de-privacidade",
    type: "website",
  },
};

export default function PoliticaDePrivacidadePage() {
  return <PoliticasPrivacidade />;
}
