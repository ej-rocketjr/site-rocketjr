'use client';

import Image from "next/image";
import LogoRocketWhite from "@/assets/LogoRocket-white.svg";
import LogoRocket from "@/assets/logo-rocket.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { Darker_Grotesque } from "next/font/google";

const darkerGrotesque = Darker_Grotesque({ subsets: ["latin"] });

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const isActive = (href: string) => pathname === href;

  const navItems = [
    { href: "/", label: "Início" },
    { href: "#servicos", label: "Serviços" },
    { href: "/quem-somos", label: "Quem Somos" },
    { href: "#clientes", label: "Clientes" },
    { href: "/contato", label: "Contato" },
  ];

  return (
    <header ref={headerRef} className={`w-full bg-white dark:bg-black overflow-hidden ${darkerGrotesque.className}`}>
      <div className="flex items-center justify-between py-4 px-8 gap-8">

        {/* Logo - Esquerda */}
        <div className="flex-shrink-0" onClick={() => setIsOpen(false)}>
          <Link href="/">
            <Image
              src={LogoRocketWhite}
              alt="Logo Rocket JR"
              width={120}
              height={45}
              className="block dark:hidden sm:w-40 sm:h-15 w-30 h-10"
              priority
            />
            <Image
              src={LogoRocket}
              alt="Logo Rocket JR"
              width={120}
              height={45}
              className="hidden dark:block sm:w-40 sm:h-15 w-30 h-10"
              priority
            />
          </Link>
        </div>

        {/* Navbar - Centro */}
        <nav className="hidden lg:flex lg:flex-1 justify-center" aria-label="Navegação Principal">
          <ul className="flex gap-6 lg:gap-8 text-black dark:text-white font-medium text-lg lg:text-2xl">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={` font-medium text-3xl transition-colors duration-200 ${
                    isActive(item.href) ? 'text-red-600' : 'hover:text-red-600'
                  }`}
                  aria-current={isActive(item.href) ? 'page' : undefined}
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
            href="https://www.instagram.com/foguetinhos.ej/"
            className="text-xl font-bold sm:text-2xl text-red-600 sm:font-extrabold transition-colors duration-200 hover:text-black dark:hover:text-white whitespace-nowrap"
            target="_blank"
            rel="noopener noreferrer"
          >
            Insta Bastidores
          </Link>
        </div>

        {/* Hamburger Menu - Mobile */}
        <button
          type="button"
          className="lg:hidden flex flex-col gap-1.5 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
          aria-expanded={isOpen}
        >
          <span className={`w-6 h-0.5 bg-black dark:bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-black dark:bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-black dark:bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white dark:bg-black">
          <ul className="flex flex-col gap-4 px-6 py-6 text-black dark:text-white font-medium text-lg">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`text-xl transition-colors duration-200 ${
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