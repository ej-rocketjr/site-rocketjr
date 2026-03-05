"use client";

import Image from "next/image";
import { useState } from "react";
import EduardoPalmeira from "@/assets/Eduardo_Palmeira_Section_Nossos_Clientes.svg"


export default function Clientes() {

  // Lista de imagens do slider
    const imagens = [EduardoPalmeira];
    const [indice, setIndice] = useState(0);

    function nextImage() {
    setIndice((prev) => (prev + 1) % imagens.length);
    }

    function prevImage() {
    setIndice((prev) => (prev - 1 + imagens.length) % imagens.length);
    }


  return (

    <section className="relative w-full overflow-x-hidden min-h-screen flex flex-col justify-center items-center bg-white dark:bg-[#000000] gap-5 sm:pb-2 lg:pb-50 py-20 px-6">


      <h1 className="text-center text-black dark:text-white text-3xl font-bold mb-12">Nossos Clientes</h1>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 w-full justify-center items-center">

        <h2 className="sm:ml-10 text-black dark:text-white text-center text-2xl sm:text-3xl  lg:text-5xl font-thin">Eduardo Palmeira</h2>

        <Image className="mt-10 w-xs h-xs sm:w-sm sm:h-sm lg:w-lg lg:h-lg px-16  ml-8 sm:px-14 lg:px-8 sm:mr-8 lg:ml-30"
          id="imgViewer"
          src={imagens[indice]}
          alt="Imagem do celular em pé mostrando o site do cliente Eduardo Palmeira"
        />


        <div className="flex flex-row sm:flex-row items-center gap-4 sm:ml-10">

          <div className="flex gap-4">

            <button

              onClick={prevImage}
              className="px-4 py-2 w-16 h-16  rounded-[50%] bg-[url('/Bottom_Anterior_Section_Nossos_Clientes.svg')] bg-no-repeat bg-center">

            </button>

          </div>

          <p className="mt-10 text-black dark:text-white sm:ml-10 lg:pb-8 text-center text-xs sm:text-sm lg:text-base">Desenvolvemos um site institucional com foco em autoridade e captação de leads no mercado imobiliário. Estruturamos páginas de serviços, imóveis e diferenciais de forma estratégica, priorizando clareza, credibilidade e conversão. A solução fortalece o posicionamento profissional e amplia as oportunidades de negócio no digital.</p>

        </div>

          <button
              onClick={nextImage}
              className="px-4 py-2 w-16 h-16 rounded-[50%] bg-[url('/Bottom_Proximo_Section_Nossos_Clientes.svg')] bg-no-repeat bg-center">

          </button>

      </div>

    </section>

  );
}