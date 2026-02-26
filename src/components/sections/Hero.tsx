import Image from "next/image";
import LogoRocketHero from "@/assets/logo-rocket-hero.svg"
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-white dark:bg-black min-h-[500px] flex flex-col items-center justify-center py-10 sm:py-20">
      <div className="text-center py-20">
        <Image
          className="mx-auto mb-12 sm:mb-20"
          src={LogoRocketHero}
          alt="Logo Rocket JR CTA"
          width={400}
          height={160}
        />
        <h1 className="text-4xl md:text-6xl font-light font-sans text-black dark:text-white mb-6">
          Chegou A Hora Da Inovação, Venha Voar Com A Gente
        </h1>
        <p className="text-lg sm:text-lg md:text-2xl font-bold text-black dark:text-white mt-8">
          Aqui Damos Asas As Suas Ideias
        </p>
      </div>

      <div className="flex items-center justify-center">
        <Link
          href="/contato"
        >
            <button
            type="button"
            className="bg-gradient-to-r from-red-900 to-red-700 hover:from-red-700 hover:to-gray-900 text-white font-bold py-3 px-6 w-40 rounded-md
            transition duration-300 ease-in-out transform hover:scale-105">Contato</button>
        </Link>
        <Link
          href="/cases"
        >
            <button
            type="button"
            className="border-1 border-red-600 text-black dark:text-white font-bold py-3 px-6 w-40 rounded-md
            transition duration-300 ease-in-out transform hover:scale-105 ml-4">Cases</button>
        </Link>
      </div>
    </section>
  );
}