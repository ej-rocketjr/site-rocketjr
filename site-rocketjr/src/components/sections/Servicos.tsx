"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Cards from "../ui/CardsCarrossel";
import iconIdeia from "@/assets/icons/icon-ideia.svg";
import iconFoguete from "@/assets/icons/icon-foguete.svg";
import iconEcommerce from "@/assets/icons/icon-ecommerce.svg";
import iconDigital from "@/assets/icons/icon-digital.svg";
import iconDados from "@/assets/icons/icon-dados.svg";
import Image from "next/image";
import RaccoonMascoteRocket from "@/assets/icons/raccoon-mascote-rocket-jr.svg";
import "swiper/css";

const services = [
    {
        imgCard: iconIdeia,
        title: "Soluções Digitais Sob Medida",
        description: "Criamos soluções digitais para resolver gargalos reais, escalar operações e acelerar o crescimento do seu negócio.",
        cta: "Transforme sua ideia",
        ctaLink: "/solucoes-digitais",
    },
    {
        imgCard: iconFoguete,
        title: "Decisões Tecnológicas Inteligentes",
        description: "Apoiamos sua empresa na seleção e implementação de tecnologias que trazem performance e vantagem competitiva.",
        cta: "Fale com um especialista",
        ctaLink: "/decisoes-tecnologicas",
    },
    {
        imgCard: iconEcommerce,
        title: "E-commerce para Vender Mais",
        description: "Desenvolvemos e otimizamos e-commerces com foco em experiência, velocidade e aumento de vendas.",
        cta: "Quero vender mais ",
        ctaLink: "/e-commerce",
    },
    {
        imgCard: iconDigital,
        title: "Transformação Digital na Prática",
        description: "Integramos sistemas e automatizamos processos para tornar sua empresa mais ágil, eficiente e preparada para crescer.",
        cta: "Inicie a transformação ",
        ctaLink: "/transformacao-digital",
    },
    {
        imgCard: iconDados,
        title: "Dados para Decisões Lucrativas",
        description: "Transformamos dados em insights acionáveis para orientar decisões com base em números e não em achismos.",
        cta: "Ver insights",
        ctaLink: "/dados",
    },
];

export default function Servicos() {
    const [isClient, setIsClient] = useState(false);
    const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (!swiperInstance?.autoplay) {
            return;
        }

        if (expandedCards.size > 0) {
            swiperInstance.autoplay.stop();
            return;
        }

        swiperInstance.autoplay.start();
    }, [expandedCards, swiperInstance]);

    function handleToggleRead(cardId: string, expanded: boolean) {
        setExpandedCards((prev) => {
            const next = new Set(prev);

            if (expanded) {
                next.add(cardId);
            } else {
                next.delete(cardId);
            }

            return next;
        });
    }

    return (
        <section id="servicos" className="bg-white dark:bg-black px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
            <div className="max-w-7xl mx-auto">
                <h2 className="mx-auto uppercase text-center text-black dark:text-white text-xl sm:text-2xl lg:text-3xl font-medium max-w-5xl">
                    Transformamos suas ideias em soluções digitais inovadoras
                </h2>
            </div>

            <div className="max-w-7xl mx-auto mt-10 sm:mt-12 lg:mt-14">
                {isClient ? (
                    <div className="relative">
                        <Swiper
                            modules={[Autoplay]}
                            onSwiper={setSwiperInstance}
                            spaceBetween={24}
                            slidesPerView={1}
                            autoplay={{ delay: 3500, disableOnInteraction: false }}
                            loop={services.length > 1}
                            grabCursor={true}
                            allowTouchMove={true}
                            breakpoints={{
                                640: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                            }}
                        >
                            {services.map((service) => (
                                <SwiperSlide key={service.title} className="relative z-0 h-full flex">
                                    <Cards
                                        imgCard={service.imgCard}
                                        cardId={service.title}
                                        title={service.title}
                                        description={service.description}
                                        ctaLink={service.ctaLink}
                                        ctaText={service.cta}
                                        onToggleRead={handleToggleRead}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <button
                            type="button"
                            aria-label="Ver serviço anterior"
                            onClick={() => swiperInstance?.slidePrev()}
                            className="hidden lg:inline-flex absolute left-0 top-1/2 z-10 h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-900 shadow-lg transition-colors hover:border-red-500 hover:text-red-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-red-500 dark:hover:text-red-500"
                        >
                            <ChevronLeft size={22} aria-hidden="true" />
                        </button>
                        <button
                            type="button"
                            aria-label="Ver próximo serviço"
                            onClick={() => swiperInstance?.slideNext()}
                            className="hidden lg:inline-flex absolute right-0 top-1/2 z-10 h-12 w-12 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-900 shadow-lg transition-colors hover:border-red-500 hover:text-red-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-red-500 dark:hover:text-red-500"
                        >
                            <ChevronRight size={22} aria-hidden="true" />
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {services.slice(0, 3).map((service) => (
                            <Cards
                                key={service.title}
                                imgCard={service.imgCard}
                                cardId={service.title}
                                title={service.title}
                                description={service.description}
                                ctaLink={service.ctaLink}
                                ctaText={service.cta}
                                onToggleRead={handleToggleRead}
                            />
                        ))}
                    </div>
                )}
            </div>

            <div className="hidden lg:flex max-w-7xl mx-auto mt-14 lg:mt-16 justify-center items-start gap-6 xl:gap-8">
                <article className="relative isolate max-w-2xl rounded-[2.6rem] border-[3px] border-zinc-950 bg-white px-10 py-8 text-zinc-950 shadow-[8px_10px_0px_rgba(24,24,27,0.9)] dark:border-red-700/50 dark:bg-zinc-900 dark:text-zinc-100 dark:shadow-[8px_10px_0px_rgba(255,255,255,0.2)]">
                    <span className="absolute -top-4 left-8 rounded-full border-[3px] bg-zinc-950 px-4 py-1 text-xs font-black uppercase tracking-[0.14em] text-white dark:border-red-700/50 dark:text-white">
                        Rocket Raccoon:
                    </span>
                    <div className="absolute -right-7 bottom-12 h-12 w-12 rounded-full border-[3px] border-zinc-950 bg-white dark:border-red-700/50 dark:bg-zinc-900" />
                    <div className="absolute -right-14 bottom-6 h-7 w-7 rounded-full border-[3px] border-zinc-950 bg-white dark:border-red-700/50 dark:bg-zinc-900" />
                    <div className="absolute right-[-5.5rem] bottom-2 h-6 w-6 rounded-full border-[3px] border-zinc-950 bg-white dark:border-red-700/50 dark:bg-zinc-900" />
                    <p className="text-[1.05rem] leading-8 tracking-[0.01em]">
                        Ei! Quer crescer no digital? Criamos sites, landing pages e e-commerces focados em gerar resultados para o seu negócio.
                    </p>
                </article>
                <Image
                    src={RaccoonMascoteRocket}
                    alt="Raccoon Mascote da RocketJR"
                    width={420}
                    height={360}
                    className="h-auto w-full max-w-sm -translate-y-1 drop-shadow-[0_16px_26px_rgba(0,0,0,0.22)]"
                />
            </div>
        </section>
    );
}
