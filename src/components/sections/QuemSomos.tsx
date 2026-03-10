'use client';
import Image from "next/image";
import EquipeRocketFoto from "@/assets/Img_EquipeRocketJR_Section_QuemSomos.png";

function QuemSomos() {
  return (
    <section className="relative w-full overflow-x-hidden bg-white dark:bg-[#000000] px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-[url('/Foguete_Animado_Section_QuemSomos.svg'),url('/Logo_Rocket_Animada_Section_QuemSomos.svg')]
      bg-position-[left_top_26rem,right_bottom_26rem]
      sm:bg-position-[left_bottom_33rem,right_top_32rem]
      lg:bg-position-[left_top_20rem,right_bottom_16rem]
      bg-no-repeat bg-contain z-0 animate-background-flow">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-6 lg:gap-8">
        <h1 className="text-3xl sm:text-4xl text-black dark:text-white font-bold text-center">Quem Somos</h1>

        <Image className="mt-2 w-xs h-56 md:w-sm md:h-[14.8rem]
        lg:w-2xl lg:h-[27.6rem] "
          src={EquipeRocketFoto}
          alt="Foto da equipe RocketJR"
        />

        <p className="mt-2 max-w-5xl text-center text-black dark:text-white text-[10px] md:text-sm lg:text-base text-color-[#E7E7E7] leading-relaxed">
          A Rocket Júnior (RJR) É A Empresa Júnior do Curso De Sistemas De Informação Do Campos Arapiraca - Unidade Educacional De Penedo.Somos Um Time De Estudantes Apaixonados Por Tecnologia E Inovação,Que Aplicam Na Prática Os Conhecimentos Adquiridos Em Sala De Aula Para Desenvolver Soluções Digitais Para O Mercado. Nosso Principal Objetivo É Proporcionar Aos Nossos Membros Uma Experiência Empresarial Real, Preparando-Os Para Os Desafios Do Mercado De Trabalho E Impulsionando Suas Carreiras!
        </p>
      </div>
    </section>
  );
}
export default QuemSomos;
