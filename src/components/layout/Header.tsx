import Image from "next/image";
import LogoRocket from "@/assets/logo-rocket.svg";

export default function Navbar() {
  return (
    <header className="w-full bg-black">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo - Esquerda */}
        <div className="flex-shrink-0">
          <Image
            src={LogoRocket}
            alt="Logo Rocket JR"
            width={160}
            height={60}
            priority
          />
        </div>

        {/* Navbar - Centro */}
        <nav className="flex-1 flex justify-center">
          <ul className="flex gap-8 text-white font-medium">
            <li>
              <a href="/" className="hover:text-red-600 transition-colors duration-200">
                Início
              </a>
            </li>
            <li>
              <a href="/servicos" className="hover:text-red-600 transition-colors duration-200">
                Serviços
              </a>
            </li>
            <li>
              <a href="/quem-somos" className="hover:text-red-600 transition-colors duration-200">
                Quem Somos
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-600 transition-colors duration-200">
                Clientes
              </a>
            </li>
            <li>
              <a href="/contato" className="hover:text-red-600 transition-colors duration-200">
                Contato
              </a>
            </li>
          </ul>
        </nav>

        {/* Botão - Direita */}
        <div className="flex-shrink-0">
          <button className="border border-red-600 text-red-600 px-5 py-2 rounded-md font-medium transition-all duration-200 hover:bg-red-600 hover:text-white">
            PS Rocket Jr
          </button>
        </div>

      </div>
    </header>
  );
}