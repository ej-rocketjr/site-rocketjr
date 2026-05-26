
"use client";

import Image from "next/image"
import Link from "next/link";
import { Instagram } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import logoCircularRocket from "@/assets/logos/logo-circular-rocket.svg";
import RaccoonMascoteRocket from "@/assets/icons/raccoon-mascote-rocket-jr.svg";
import rocketLogoHorizontalDark from "@/assets/logos/rocket-logo-horizontal-dark.svg";
import rocketLogoHorizontalLight from "@/assets/logos/rocket-logo-horizontal-light.svg";
import setaVermelha from "@/assets/icons/seta-vermelha.svg";
import logoFejea from "@/assets/logos/logo-fejea.svg";
import logoFejeaDark from "@/assets/logos/logo-fejea-black.svg";
import logoBrasilJr from "@/assets/logos/logo-brasiljr.svg";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-taupe-50 pt-8 text-black dark:bg-neutral-950 dark:text-white">
      <div className="flex w-full flex-col items-center px-4 sm:px-6 lg:px-8">
        <button type="button" onClick={scrollToTop} className="mb-8 flex w-fit items-center justify-center gap-2 rounded-4xl border border-red-600 p-3 text-center md:mb-10 cursor-pointer">
          <span className="text-xs text-black dark:text-white">IR PARA O TOPO</span>
          <Image
            src={setaVermelha}
            alt="Seta para voltar ao topo da página"
            width={10}
            height={10}
          />
        </button>

        <section className="flex w-full flex-col items-center gap-8 py-4 md:gap-10">
          <div className="flex w-full flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 ">
            <Image
              src={rocketLogoHorizontalLight}
              alt="Logo da Rocket Jr"
              width={400}
              height={50}
              className="block h-auto w-[220px] sm:w-[280px] md:w-[360px] dark:hidden"
            />

            <Image
              src={rocketLogoHorizontalDark}
              alt="Logo da Rocket Jr"
              width={400}
              height={50}
              className="hidden h-auto w-[220px] sm:w-[280px] md:w-[360px] dark:block"
            />

            <Image
              src={logoBrasilJr}
              alt="Logo da Brasil JR"
              width={200}
              height={100}
              className="h-auto w-[130px] sm:w-[170px] md:w-[200px]"
            />

            <Image
              src={logoFejea}
              alt="Logo Da Fejea"
              width={90}
              height={50}
              className="hidden h-auto w-[70px] sm:w-[80px] md:w-[90px] dark:block"
            />
            <Image
              src={logoFejeaDark}
              alt="Logo Da Fejea"
              width={90}
              height={50}
              className="block h-auto w-[70px] sm:w-[80px] md:w-[90px] dark:hidden"
            />
          </div>
          <hr className="w-full border-red-500 dark:border-neutral-800" />
        </section>

        <article className="mb-8 w-full md:mb-10">
          <div className="flex w-full flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex flex-col gap-8 sm:flex-row sm:justify-between lg:gap-16">
              <div className="flex flex-col gap-4 text-left">
                <ul className="space-y-1">
                  <li className="font-bold">Menu</li>
                  <li className="hover:text-red-500 transition-colors text-black dark:text-white"><Link href="/">Início</Link></li>
                  <li className="hover:text-red-500 transition-colors text-black dark:text-white"><Link href="/#servicos">Serviços</Link></li>
                  <li className="hover:text-red-500 transition-colors text-black dark:text-white"><Link href="/quem-somos">Quem Somos</Link></li>
                  <li className="hover:text-red-500 transition-colors text-black dark:text-white"><Link href="/#clientes">Clientes</Link></li>
                  <li className="hover:text-red-500 transition-colors text-black dark:text-white"><Link href="/contato">Contato</Link></li>
                </ul>
              </div>

              <div className="flex flex-col gap-4 text-left">
                <ul className="space-y-1">
                  <li className="font-bold">Redes Sociais</li>
                  <li className="flex items-center gap-2 hover:text-red-500 transition-colors text-black dark:text-white"><Instagram size={16} /> <Link href="https://www.instagram.com/rocketjroficial" target="_blank" rel="noopener noreferrer">@rocketjroficial</Link></li>
                  <li className="flex items-center gap-2 hover:text-red-500 transition-colors text-black dark:text-white"><Instagram size={16} /> <Link href="https://www.instagram.com/foguetinhos.ej" target="_blank" rel="noopener noreferrer">@foguetinhos.ej</Link></li>
                  <li className="flex items-center gap-2 hover:text-red-500 transition-colors text-black dark:text-white"><Linkedin size={16} /> <Link href="https://www.linkedin.com/company/rocket-jr/" target="_blank" rel="noopener noreferrer">@rocketjr</Link></li>
                </ul>
              </div>
          </div>

          <div className="order-2 flex w-full flex-col items-center justify-center gap-8 pt-8">
            <ul className="order-1 flex flex-col items-center justify-center flex-wrap gap-2 text-center text-sm lg:order-2 lg:flex-row lg:gap-4">
              <li className="hover:text-red-500 transition-colors text-black dark:text-white">
                <Link href="/politica-de-privacidade">
                  Política de Privacidade
                </Link>
              </li>

              <li className="hover:text-red-500 transition-colors text-black dark:text-white">
                <Link href="/termos-de-servico">
                  Termos de Serviços
                </Link>
              </li>

              <li>2026 ROCKETJR All Rights Reserved.</li>
            </ul>

            <div className="order-2 flex flex-col items-center justify-center gap-2 text-center text-sm">
              <p className="text-center text-sm text-black dark:text-white">
                <strong>Endereço:</strong> Rua Fernandes de Barros, nº 17 - Centro Histórico, Penedo - AL
              </p>

              <p className="text-center text-sm text-black dark:text-white">
                <strong>CNPJ:</strong> 59.783.840/0001-10
              </p>
            </div>
          </div>

          <div className="order-3 w-full lg:order-3 lg:w-auto">
            <div className="ml-auto flex flex-row items-center justify-center lg:justify-end">
              <Image
                src={logoCircularRocket}
                alt="Logo Circular da Rocket Jr"
                width={100}
                height={100}
                className="h-auto w-[64px] sm:w-[72px] md:w-[90px]"
              />

              <Image
                src={RaccoonMascoteRocket}
                alt="Mascote da Rocket Jr"
                width={100}
                height={100}
                className="-ml-1 h-auto w-[90px] sm:w-[130px] md:w-[220px] lg:w-[280px]"
              />
            </div>
            <hr className=" w-full border-red-500 dark:border-neutral-800" />
          </div>
        </div>
        </article>
      </div>
    </footer>
  )
}