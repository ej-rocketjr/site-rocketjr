'use client';

import Image from "next/image"
import { Instagram } from 'lucide-react';
import { Linkedin } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="flex flex-col bg-zinc-900 px-4 pt-4 text-white text-center justify-center">
      <div className="flex flex-col justify-center items-center mt-4">
        <div className="flex flex-row items-start gap-8 w-full justify-between">
          <div className="hidden md:flex flex-1"></div>
          <div className="flex flex-col justify-center items-center gap-10 md:gap-20 flex-1">
            <button onClick={scrollToTop} className="flex flex-row justify-center items-center w-fit gap-2 p-3 rounded-4xl border-1 border-red-600 cursor-pointer">
              <span className="text-xs">IR PARA O TOPO</span>
              <Image
                src="/seta-vermelha.svg"
                alt="Descrição da Imagem"
                width={10}
                height={300}
              />
            </button>

            <Image
              src="/rocket-logo-horizontal.svg"
              alt="Logo da RocketJR"
              width={800}
              height={300}
              className="mt-4 max-w-[250px] md:max-w-none w-full h-auto"
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
              <div className="flex gap-1 items-center">
                <Instagram />
                <a href="#" className="hover:text-red-500 transition-colors text-gray-300">@rocketjroficial</a>
              </div>
              <div className="flex gap-1 items-center">
                <Instagram />
                <a href="#" className="hover:text-red-500 transition-colors text-gray-300">@foguetinhos.ej</a>
              </div>
              <div className="flex gap-1 items-center">
                <Linkedin />
                <a href="#" className="hover:text-red-500 transition-colors text-gray-300">@rocketjr</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex md:hidden flex-col gap-1 text-sm text-left mt-10 px-2">
        <span className="font-bold text-white">REDES SOCIAS</span>
        <div className="flex gap-1 items-center">
          <Instagram size={16} />
          <a href="#" className="hover:text-red-500 transition-colors text-gray-300">@rocketjroficial</a>
        </div>
        <div className="flex gap-1 items-center">
          <Instagram size={16} />
          <a href="#" className="hover:text-red-500 transition-colors text-gray-300">@foguetinhos.ej</a>
        </div>
        <div className="flex gap-1 items-center">
          <Linkedin size={16} />
          <a href="#" className="hover:text-red-500 transition-colors text-gray-300">@rocketjr</a>
        </div>
      </div>

      <div className="hidden md:flex justify-between">
        <div className="flex">
          <Image
            src="/logo-circular-rocket.svg"
            alt="Logo da RocketJR"
            width={100}
            height={300}
            className="mt-4"
          />
          <Image
            src="/mascote-rocket-jr.svg"
            alt="Mascote RocketJR"
            width={250}
            height={300}
            className="mt-4"
          />
        </div>
        <div className="flex items-end gap-4">
          <a href="">Política de Privacidade</a>
          <a href="">Termos de Serviço</a>
          <span className="mt-4">2026 ROCKETJR All Rights Reserved.</span>
        </div>
      </div>

      <div className="flex md:hidden relative mt-6">
        <div className="flex items-end gap-3 pb-4 z-10">
          <Image
            src="/logo-circular-rocket.svg"
            alt="Logo da RocketJR"
            width={60}
            height={60}
          />
          <div className="flex flex-col text-left text-[11px] text-gray-400 leading-relaxed">
            <span>2026 rocketjr all rights reserved</span>
            <span>termos de serviço</span>
            <span>política de privacidade</span>
          </div>
        </div>
        <div className="absolute bottom-0 right-0">
          <Image
            src="/mascote-rocket-jr.svg"
            alt="Mascote RocketJR"
            width={180}
            height={250}
            className="object-contain"
          />
        </div>
      </div>
    </footer>
  )
}