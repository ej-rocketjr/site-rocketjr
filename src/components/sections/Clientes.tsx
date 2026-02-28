/** 
 * Aqui faz os imports. Exemplo:
 * import Image from "next/image";
 * import LogoRocket from "@/assets/logo-rocket.svg"
 */

export default function Clientes() {
  return (

    <section className="bg-black min-h-screen py-20 px-6">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-center text-white text-3xl font-bold mb-12">Nossos Clientes</h1>

        {/* Adicione os logos/cards dos clientes aqui */}

        <h2>Eduardo Palmeira</h2>
        <p>Desenvolvemos um site institucional com foco em autoridade e captação de leads no mercado imobiliário. Estruturamos páginas de serviços, imóveis e diferenciais de forma estratégica, priorizando clareza, credibilidade e conversão. A solução fortalece o posicionamento profissional e amplia as oportunidades de negócio no digital.</p>

      </div>

    </section>

  );
}