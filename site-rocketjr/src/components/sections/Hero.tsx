import Link from "next/link";
import { Darker_Grotesque } from "next/font/google";

const darkerGrotesque = Darker_Grotesque({ subsets: ["latin"], weight: "800" });

export default function Hero() {
  return (
    <section className="bg-white dark:bg-black min-h-[500px] flex flex-col items-center justify-center py-10 sm:py-20">
      <div className="text-center py-20">
        <h1 className="text-4xl leading-tight space-y-4 md:text-6xl font-medium text-black dark:text-white mb-12 px-4 md:px-6 ">
          Chegou a hora da inovação, venha decolar conosco.
        </h1>


      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/contato"
        >
            <button
            type="button"
            className={`bg-gradient-to-r from-red-900 to-red-700 hover:from-red-700 hover:to-gray-900 text-white font-bold py-3 px-6 w-40 rounded-md
            transition duration-300 ease-in-out transform hover:scale-105 text-xl ${darkerGrotesque.className}`}>Contato</button>
        </Link>
        <Link
          href="/#clientes"
        >
            <button
            type="button"
            className={`border-1 border-red-600 text-black dark:text-white font-bold py-3 px-6 w-40 rounded-md
            transition duration-300 ease-in-out transform hover:scale-105 text-xl ${darkerGrotesque.className}`}>Nossos Cases</button>
        </Link>
      </div>
      </div>
    </section>
  );
}