"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Card from "../ui/Cards";
import iconIdeia from "@/assets/icon-ideia.svg";
import iconFoguete from "@/assets/icon-foguete.svg";
import iconEcommerce from "@/assets/icon-ecommerce.svg";
import iconDigital from "@/assets/icon-digital.svg";

import "swiper/css";

const cards = [
  {
    icon: iconIdeia,
    title: "Soluções Digitais Que Geram Resultado",
    description:
      "Transformamos Ideias Em Soluções Digitais Estratégicas, Pensadas Para Resolver Problemas Reais, Escalar Operações E Acelerar O Crescimento Do Seu Negócio Com Tecnologia Sob Medida.",
    ctaText: "Transforme Sua Ideia",
    ctaHref: "#contato",
    cutSide: "right" as const,
  },
  {
    icon: iconFoguete,
    title: "Decisões Tecnológicas Mais Inteligentes",
    description:
      "Ajudamos Sua Empresa A Escolher E Implementar As Melhores Tecnologias, Reduzindo Riscos, Aumentando Eficiência E Criando Vantagem Competitiva Em Um Mercado Cada Vez Mais Digital.",
    ctaText: "Fale Com Um Especialista",
    ctaHref: "#contato",
    cutSide: "right" as const,
  },
  {
    icon: iconEcommerce,
    title: "E-Commerces Prontos Para Vender Mais",
    description:
      "Criamos E Otimizamos Lojas Virtuais Focadas Em Conversão, Performance E Experiência Do Usuário, Transformando Visitas Em Vendas Recorrentes.",
    ctaText: "Quero Vender Mais",
    ctaHref: "#contato",
    cutSide: "right" as const,
  },
  {
    icon: iconDigital,
    title: "Transformação Digital Na Prática",
    description:
      "Modernizamos Processos, Automatizamos Operações E Tornamos Sua Empresa Mais Ágil, Eficiente E Pronta Para Escalar.",
    ctaText: "Inicie A Transformação",
    ctaHref: "#contato",
    cutSide: "right" as const,
  },

  {
    icon: iconDigital,
    title: "Dados que Guiam Decisões Lucrativas",
    description:
      "Transformamos dados brutos em insights estratégicos, ajudando sua empresa a tomar decisões baseadas em números, não em achismos.",
    ctaText: "Ver insights",
    ctaHref: "#contato",
    cutSide: "right" as const,
  },

];

export default function Servicos() {
  return (
    <section className="bg-white dark:bg-black min-h-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="mx-auto text-center text-black dark:text-white text-xl sm:text-2xl lg:text-3xl font-medium mb-8 sm:mb-10 lg:mb-12 max-w-150">
          Transformamos suas ideias em soluções digitais inovadoras
        </h2>
      </div>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={12}
        slidesPerView={1.08}
        centeredSlides={false}
        loop={true}
        grabCursor={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          360: {
            slidesPerView: 1.1,
            spaceBetween: 12,
          },
          420: {
            slidesPerView: 1.2,
            spaceBetween: 14,
          },
          540: {
            slidesPerView: 1.5,
            spaceBetween: 16,
          },
          640: {
            slidesPerView: 1.8,
            spaceBetween: 18,
          },
          768: {
            slidesPerView: 2.3,
            spaceBetween: 20,
          },
          900: {
            slidesPerView: 2.7,
            spaceBetween: 22,
          },
          1024: {
            slidesPerView: 3.1,
            spaceBetween: 24,
          },
          1150: {
            slidesPerView: 3.3,
            spaceBetween: 24,
          },
          1280: {
            slidesPerView: 3.8,
            spaceBetween: 28,
          },
        }}
        className="cards-swiper pl-3! sm:pl-6! md:pl-10! lg:pl-12!"
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index} className="h-auto!">
            <Card
              icon={card.icon}
              title={card.title}
              description={card.description}
              ctaText={card.ctaText}
              ctaHref={card.ctaHref}
              cutSide={card.cutSide}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}