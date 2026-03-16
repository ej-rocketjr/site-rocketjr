import Image from "next/image";
import LogoRocketHero from "@/assets/logo-rocket-hero-II.svg"

export default function Hero() {
  return (
    <section className="bg-black flex items-center justify-center py-5">
      <div className="text-center">
        <Image
          className="mx-auto mb-1"
          src={LogoRocketHero}
          alt="Logo Rocket JR CTA"
          width={200}
          height={160}
        />
        {/* Adiciosne seu conteúdo Hero aqui */}
      </div>
    </section>
  );
}