'use client';

import Image from "next/image";
import LogoRocket from "@/assets/logo-rocket.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href: string) => pathname === href;

  const navItems = [
    { href: "/", label: "Início" },
    { href: "/servicos", label: "Serviços" },
    { href: "/quem-somos", label: "Quem Somos" },
    { href: "#", label: "Clientes" },
    { href: "/contato", label: "Contato" },
  ];

  return (
    <header className="w-full bg-white dark:bg-black overflow-hidden">
      <div className="flex items-center justify-between py-16 px-8 gap-8">

        {/* Logo - Esquerda */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src={LogoRocket}
              alt="Logo Rocket JR"
              width={120}
              height={45}
              className="sm:w-40 sm:h-15 w-24 h-9"
              priority
            />
          </Link>
        </div>

        {/* Navbar - Centro */}
        <nav className="hidden lg:flex lg:flex-1 justify-center">
          <ul className="flex gap-6 lg:gap-8 text-black dark:text-white font-medium text-lg lg:text-2xl">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`transition-colors duration-200 ${
                    isActive(item.href) ? 'text-red-600' : 'hover:text-red-600'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* PS Rocket Jr - Link */}
        <div className="flex-shrink-0">
          <Link
            href="https://forms.gle/seu-formulario-aqui"
            className="text-lg sm:text-2xl text-red-600 font-bold transition-colors duration-200 hover:text-black dark:hover:text-white whitespace-nowrap"
            target="_blank"
            rel="noopener noreferrer"
          >
            PS Rocket Jr
          </Link>
        </div>

        {/* Hamburger Menu - Mobile */}
        <button
          type="button"
          className="lg:hidden flex flex-col gap-1.5 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          <span className={`w-6 h-0.5 bg-black dark:bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-black dark:bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-black dark:bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
          <ul className="flex flex-col gap-4 px-8 py-6 text-black dark:text-white font-medium text-lg">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`transition-colors duration-200 ${
                    isActive(item.href) ? 'text-red-600' : 'hover:text-red-600'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}