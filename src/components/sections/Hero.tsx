import Image from "next/image";
import LogoRocketHero from "@/assets/logo-rocket-hero.svg"

export default function Hero() {
  return (
    <section className="bg-black min-h-[500px] flex items-center justify-center py-20">
      <div className="text-center">
        <Image
          className="mx-auto mb-8"
          src={LogoRocketHero}
          alt="Logo Rocket JR CTA"
          width={400}
          height={160}
        />
        {/* Adiciosne seu conteúdo Hero aqui */}
      </div>
    </section>
  );
}