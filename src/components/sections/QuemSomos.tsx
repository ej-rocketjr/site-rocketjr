import Image from "next/image";
import EquipeRocketFoto from "@/assets/Img_EquipeRocketJR_Section_QuemSomos.png"





function QuemSomos() {
  return (
    
      <section className="min-h-screen flex flex-col justify-center items-center bg-[#000000] gap-5 bg-[url('/Foguete_Animado_Section_QuemSomos.svg'),url('/Logo_Rocket_Animada_Section_QuemSomos.svg')] 
      bg-center bg-no-repeat z-0">

        <h1 className="text-3xl text-color-[#FFFFFF] font-bold text-center mb-4">Quem Somos</h1>
      

      

        <Image className="mt-6 w-2xl h-[27.6 rem] "
        src={EquipeRocketFoto}
        alt="Foto da equipe RocketJR"
        />

     


        <p className="mt-8 text-center text-xl text-red-600">ATENÇÃO TEXTO DE EXEMPLO (AINDA NÃO TEM O TEXTO OFICIAL DO SITE) <br /></p>
        <p className="text-center text-xl text-color-[#E7E7E7]">
        Somos uma empresa apaixonada por tecnologia e inovação.<br></br>Nossa missão é transformar ideias em soluções digitais que impulsionam negócios.
        </p>

      
      
      </section>  

  );
}
export default QuemSomos;

