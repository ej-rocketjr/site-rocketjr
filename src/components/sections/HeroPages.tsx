import Image from "next/image";
import LogoRocketHero from "@/assets/logo-rocket-hero-II.svg"

export default function Hero() {
  return (
    <section className="bg-black px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
      <div className="mx-auto w-full max-w-7xl text-center">
        <Image
          className="mx-auto mb-1 h-auto w-full max-w-52"
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