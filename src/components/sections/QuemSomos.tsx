import Image from "next/image";
import EquipeRocketFoto from "@/assets/Img_EquipeRocketJR_Section_QuemSomos.png"





function QuemSomos() {
  return (
    

      <section className="min-h-screen flex flex-col justify-center items-center bg-[#000000] gap-5   bg-[url('/Foguete_Animado_Section_QuemSomos.svg'),url('/Logo_Rocket_Animada_Section_QuemSomos.svg')] 
      bg-position-[left_top_210px,right_center] 
      bg-no-repeat bg-contain z-0 animate-background-flow">
        
        

        <h1 className="text-3xl text-color-[#FFFFFF] font-bold text-center mb-4">Quem Somos</h1>
      

      

        <Image className="mt-6 w-sm h-[14.8rem] 
        lg:w-2xl lg:h-[27.6rem] "
        src={EquipeRocketFoto}
        alt="Foto da equipe RocketJR"
        />


        <p className="text-center text-[14px] lg:text-base text-color-[#E7E7E7]">
        A Rocket Júnior (RJR) É A Empresa Júnior do Curso De Sistemas De Informação Do Campos Arapiraca - Unidade Educacional De Penedo.Somos Um Time De Estudantes Apaixonados Por Tecnologia E Inovação,Que Aplicam Na Prática Os Conhecimentos Adquiridos Em Sala De Aula Para Desenvolver Soluções Digitais Para O Mercado. Nosso Principal Objetivo É Proporcionar Aos Nossos Membros Uma Experiência Empresarial Real, Preparando-Os Para Os Desafios Do Mercado De Trabalho E Impulsionando Suas Carreiras!
        </p>

        
      
      </section> 

 

  );
}
export default QuemSomos;

