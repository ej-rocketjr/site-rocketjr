import Image from "next/image";
import EquipeRocketFoto from "@/assets/Img_EquipeRocketJR_Section_QuemSomos.png"


function QuemSomos() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-4">Quem Somos</h1>


      <Image className="w-2xl h-[27.6 rem]"
        src={EquipeRocketFoto}
        alt="Foto da equipe RocketJR"
      />


      <p className="mt-8 text-center text-red-600">ATENÇÃO TEXTO DE EXEMPLO (AINDA NÃO TEM O TEXTO OFICIAL DO SITE) <br /></p>
      <p className="text-center text-zinc-700 dark:text-zinc-300">
        Somos uma empresa apaixonada por tecnologia e inovação. Nossa missão é transformar ideias em soluções digitais que impulsionam negócios.
      </p>
      
    </div>
  );
}
export default QuemSomos;

