'use client';

import Image from "next/image";
import LogoRocket from "@/assets/logo-rocket.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <header className="w-full bg-white dark:bg-black">
      <div className="flex items-center justify-between py-16 px-8 gap-8">
        
        {/* Logo - Esquerda */}
        <div className="flex-shrink-0 ml-2">
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
          <ul className="flex gap-8 text-black dark:text-white font-medium text-2xl">
            <li>
              <Link 
                href="/" 
                className={`transition-colors duration-200 ${
                  isActive('/') ? 'text-red-600' : 'hover:text-red-600'
                }`}
              >
                Início
              </Link>
            </li>
            <li>
              <Link 
                href="/servicos" 
                className={`transition-colors duration-200 ${
                  isActive('/servicos') ? 'text-red-600' : 'hover:text-red-600'
                }`}
              >
                Serviços
              </Link>
            </li>
            <li>
              <Link 
                href="/quem-somos" 
                className={`transition-colors duration-200 ${
                  isActive('/quem-somos') ? 'text-red-600' : 'hover:text-red-600'
                }`}
              >
                Quem Somos
              </Link>
            </li>
            <li>
              <Link 
                href="#" 
                className={`transition-colors duration-200 hover:text-red-600`}
              >
                Clientes
              </Link>
            </li>
            <li>
              <Link 
                href="/contato" 
                className={`transition-colors duration-200 ${
                  isActive('/contato') ? 'text-red-600' : 'hover:text-red-600'
                }`}
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>

        {/* PS Rocket Jr - Link */}
        <div className="flex-shrink-0">
          <Link 
            href="https://forms.gle/seu-formulario-aqui" 
            className="text-2xl text-red-600 font-medium transition-colors duration-200 hover:text-black dark:hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            PS Rocket Jr
          </Link>
        </div>

      </div>
    </header>
  );
}