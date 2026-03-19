import Link from "next/link";
import { Google_Sans, Darker_Grotesque, Archivo_Black } from "next/font/google";

const googleSans = Google_Sans({ subsets: ["latin"] });
const darkerGrotesque = Darker_Grotesque({ subsets: ["latin"] });
const amsiproBold = Archivo_Black({ subsets: ["latin"], weight: "400" });

export default function Hero() {
  return (
    <section className={`bg-white dark:bg-black min-h-[500px] flex flex-col items-center justify-center py-10 sm:py-20 ${darkerGrotesque.className}`}>
      <div className="text-center py-20">
        <h1 className={`text-4xl leading-tight space-y-4 md:text-6xl font-medium text-black dark:text-white mb-6 ${googleSans.className} px-4 md:px-6`}>
          Chegou a hora da inovação. Venha decolar conosco.
        </h1>
        <p className={`text-lg sm:text-4xl md:text-2xl font-normal text-black dark:text-white mt-8 ${amsiproBold.className}`}>
          Transformamos suas ideias em soluções digitais
        </p>

      <div className={`flex items-center justify-center ${darkerGrotesque.className}`}>
        <Link
          href="/contato"
        >
            <button
            type="button"
            className="text-xl md:text-2xl  lg:text-3xl font-bold bg-gradient-to-r from-red-900 to-red-700 hover:from-red-700 hover:to-gray-900 text-white font-bold py-3 px-6 rounded-md whitespace-nowrap
            transition duration-300 ease-in-out transform hover:scale-105 ">Contato</button>
        </Link>
        <Link
          href="#clientes"
        >
            <button
            type="button"
            className="text-xl md:text-2xl  lg:text-3xl border-1 border-red-600 text-black dark:text-white font-bold py-3 px-6 rounded-md whitespace-nowrap
            transition duration-300 ease-in-out transform hover:scale-105 ml-4">Nossos Cases</button>
        </Link>
      </div>
      </div>
    </section>
  );
}