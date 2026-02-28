/** 
 * Aqui faz os imports. Exemplo:
 * import Image from "next/image";
 * import LogoRocket from "@/assets/logo-rocket.svg"
 */

import Image from "next/image";
import EduardoPalmeiraCelularEmPe from "@/assets/Eduardo_Palmeira_Section_Nossos_Clientes_Celular_em_Pe.svg"

export default function Clientes() {
  return (

    <section className="relative w-full overflow-x-hidden min-h-screen flex flex-col justify-center items-center bg-[#000000] gap-5 sm:pb-2 lg:pb-50 py-20 px-6">
      
      
      <h1 className="text-center text-white text-3xl font-bold mb-12">Nossos Clientes</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 w-full justify-center items-center">

        

        

        <h2 className="sm:ml-10  text-center text-2xl sm:text-3xl  lg:text-5xl font-thin">Eduardo Palmeira</h2>

        <Image className="mt-10 w-2xs h-xl lg:w-xs lg:h-2xl px-16  ml-8 sm:px-14 lg:px-8 sm:mr-8 lg:ml-30"
          src={EduardoPalmeiraCelularEmPe}
          alt="Imagem do celular em pé mostrando o site do cliente Eduardo Palmeira"
        />

        <p className="mt-10 sm:ml-10 lg:pb-8 text-center text-xs sm:text-sm lg:text-base">Desenvolvemos um site institucional com foco em autoridade e captação de leads no mercado imobiliário. Estruturamos páginas de serviços, imóveis e diferenciais de forma estratégica, priorizando clareza, credibilidade e conversão. A solução fortalece o posicionamento profissional e amplia as oportunidades de negócio no digital.</p>

      </div>

    </section>

  );
}