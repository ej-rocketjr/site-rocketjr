<<<<<<< HEAD

"use client";
=======
'use client';
>>>>>>> baecad9 (feat/style: implementa funcionalidade de voltar ao topo da página e criação do footer)

import Image from "next/image"
import { Instagram } from 'lucide-react';
import { Linkedin } from 'lucide-react';
<<<<<<< HEAD
import logoCircular from "@/assets/logo-circular-rocket.svg";
import mascote from "@/assets/mascote-rocket-jr.svg";
import rocketLogoHorizontal from "@/assets/rocket-logo-horizontal.svg";
import setaVermelha from "@/assets/seta-vermelha.svg";
=======
>>>>>>> baecad9 (feat/style: implementa funcionalidade de voltar ao topo da página e criação do footer)

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
<<<<<<< HEAD
    <footer className="flex flex-col bg-zinc-900 px-4 pt-4 text-white text-center justify-center">
      <div className="flex flex-col justify-center items-center mt-4">
        <div className="flex flex-row items-start gap-8 w-full justify-between">
          <div className="hidden md:flex flex-1" />
          <div className="flex flex-col justify-center items-center gap-10 md:gap-20 flex-1">
            <button type="button" onClick={scrollToTop} className="flex flex-row justify-center items-center w-fit gap-2 p-3 rounded-4xl border border-red-600 cursor-pointer">
              <span className="text-xs">IR PARA O TOPO</span>
              <Image
                src={setaVermelha}
=======
    <footer className="flex flex-col bg-zinc-900 pl-4 pt-4 pr-4 text-white text-center justify-center">
      <div className="flex flex-col justify-center items-center mt-4">
        <div className="flex flex-row items-start gap-8 w-full justify-between">
          <div className="hidden md:flex flex-1"></div>
          <div className="flex flex-col justify-center items-center gap-10 md:gap-20 flex-1">
            <button onClick={scrollToTop} className="flex flex-row justify-center items-center w-fit gap-2 p-3 rounded-4xl border border-red-600 cursor-pointer">
              <span className="text-xs">IR PARA O TOPO</span>
              <Image
                src="/seta-vermelha.svg"
>>>>>>> baecad9 (feat/style: implementa funcionalidade de voltar ao topo da página e criação do footer)
                alt="Descrição da Imagem"
                width={10}
                height={300}
              />
            </button>

            <Image
<<<<<<< HEAD
              src={rocketLogoHorizontal}
              alt="Logo da RocketJR"
              width={800}
              height={300}
              className="mt-4 max-w-62.5 md:max-w-none w-full h-auto"
            />
          </div>
          <div className="hidden md:flex flex-1 justify-end gap-10">
            <div className="flex flex-col gap-1 text-sm text-left">
              <span className="font-bold text-white">MENU</span>
              <a href="/" className="hover:text-red-500 transition-colors text-gray-300">Início</a>
              <a href="/#servicos" className="hover:text-red-500 transition-colors text-gray-300">Serviços</a>
              <a href="/quem-somos" className="hover:text-red-500 transition-colors text-gray-300">Quem Somos</a>
              <a href="/#clientes" className="hover:text-red-500 transition-colors text-gray-300">Clientes</a>
              <a href="/contato" className="hover:text-red-500 transition-colors text-gray-300">Contato</a>
            </div>
            <div className="flex flex-col gap-1 text-sm text-left">
              <span className="font-bold text-white">REDES SOCIAIS</span>
              <div className="flex gap-2 items-center">
                <Instagram />
                <a href="https://www.instagram.com/rocketjroficial" className="hover:text-red-500 transition-colors text-gray-300">@rocketjroficial</a>
              </div>
              <div className="flex gap-2 items-center">
                <Instagram />
                <a href="https://www.instagram.com/foguetinhos.ej" className="hover:text-red-500 transition-colors text-gray-300">@foguetinhos.ej</a>
              </div>
              <div className="flex gap-2 items-center">
                <Linkedin />
                <a href="https://www.linkedin.com/company/rocket-jr/posts/?feedView=all" className="hover:text-red-500 transition-colors text-gray-300">@rocketjr</a>
              </div>
=======
              src="/rocket-logo-horizontal.svg"
              alt="Logo da RocketJR"
              width={800}
              height={300}
              className="mt-4 max-w-62.5 md:max-w-none w-full h-auto"
            />
          </div>
          <div className="hidden md:flex flex-1 justify-end gap-10">
            <div className="flex flex-col gap-1 text-sm text-left">
              <span className="font-bold text-white">MENU</span>
              <a href="#" className="hover:text-red-500 transition-colors text-gray-300">Início</a>
              <a href="#" className="hover:text-red-500 transition-colors text-gray-300">Serviços</a>
              <a href="#" className="hover:text-red-500 transition-colors text-gray-300">Quem Somos</a>
              <a href="#" className="hover:text-red-500 transition-colors text-gray-300">Clientes</a>
              <a href="#" className="hover:text-red-500 transition-colors text-gray-300">Contato</a>
            </div>
            <div className="flex flex-col gap-1 text-sm text-left">
              <span className="font-bold text-white">REDES SOCIAIS</span>
              <div className="flex gap-2 items-center">
                <Instagram />
                <a href="https://www.instagram.com/rocketjroficial" className="hover:text-red-500 transition-colors text-gray-300">@rocketjroficial</a>
              </div>
              <div className="flex gap-2 items-center">
                <Instagram />
                <a href="https://www.instagram.com/foguetinhos.ej" className="hover:text-red-500 transition-colors text-gray-300">@foguetinhos.ej</a>
              </div>
              <div className="flex gap-2 items-center">
                <Linkedin />
                <a href="https://www.linkedin.com/company/rocket-jr/posts/?feedView=all" className="hover:text-red-500 transition-colors text-gray-300">@rocketjr</a>
              </div>

>>>>>>> baecad9 (feat/style: implementa funcionalidade de voltar ao topo da página e criação do footer)
            </div>
          </div>
        </div>
      </div>

<<<<<<< HEAD
      <div className="flex md:hidden flex-col gap-1 text-sm text-left mt-10 px-2">
        <span className="font-bold text-white">REDES SOCIAS</span>
        <div className="flex gap-1 items-center">
          <Instagram size={16} />
          <a href="https://www.instagram.com/rocketjroficial" className="hover:text-red-500 transition-colors text-gray-300">@rocketjroficial</a>
        </div>
        <div className="flex gap-1 items-center">
          <Instagram size={16} />
          <a href="https://www.instagram.com/foguetinhos.ej" className="hover:text-red-500 transition-colors text-gray-300">@foguetinhos.ej</a>
        </div>
        <div className="flex gap-1 items-center">
          <Linkedin size={16} />
          <a href="https://www.linkedin.com/company/rocket-jr/posts/?feedView=all" className="hover:text-red-500 transition-colors text-gray-300">@rocketjr</a>
        </div>
      </div>

      <div className="hidden md:flex justify-between">
        <div className="flex">
          <Image
            src={logoCircular}
=======
      <div className="flex justify-between">
        <div className="flex">
          <Image
            src="/logo-circular-rocket.svg"
>>>>>>> baecad9 (feat/style: implementa funcionalidade de voltar ao topo da página e criação do footer)
            alt="Logo da RocketJR"
            width={100}
            height={300}
            className="mt-4"
          />
<<<<<<< HEAD
          <Image
            src={mascote}
            alt="Mascote RocketJR"
=======

          <Image
            src="/mascote-rocket-jr.svg"
            alt="Logo da RocketJR"
>>>>>>> baecad9 (feat/style: implementa funcionalidade de voltar ao topo da página e criação do footer)
            width={250}
            height={300}
            className="mt-4"
          />
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0d4be1b (style: ajuste de responsividade em dispositivos mobiles)
        <div className="flex items-end gap-4 text-xs mb-5 text-white">
          <a href="https://www.rocketjr.com.br/politica-de-privacidade" className="hover:text-red-500 transition-colors text-white">Política de Privacidade</a>
          <a href="https://www.rocketjr.com.br/termos-de-servico" className="hover:text-red-500 transition-colors text-white">Termos de Serviço</a>
          <span className="mt-4">2026 ROCKETJR All Rights Reserved.</span>
        </div>
      </div>

      <div className="flex md:hidden relative mt-6">
        <div className="flex items-end gap-3 pb-4 z-10">
          <Image
            src={logoCircular}
            alt="Logo da RocketJR"
            width={60}
            height={60}
          />
          <div className="flex flex-col text-left text-[11px] text-white leading-relaxed">
            <span>2026 rocketjr all rights reserved</span>
            <span>termos de serviço</span>
            <span>política de privacidade</span>
          </div>
        </div>
        <div className="absolute bottom-0 right-0">
          <Image
            src={mascote}
            alt="Mascote RocketJR"
            width={180}
            height={250}
            className="object-contain"
          />
        </div>
      </div>
=======
        <div className="flex items-end gap-4">
          <a href="">Política de Privacidade</a>
          <a href="">Termos de Serviço</a>
          <span className="mt-4">2026 ROCKETJR All Rights Reserved.</span>
        </div>
      </div>
>>>>>>> baecad9 (feat/style: implementa funcionalidade de voltar ao topo da página e criação do footer)
    </footer>
  )
}