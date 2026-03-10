"use client";
import { Inter } from 'next/font/google';
import Image from 'next/image';
import setaDireta from '../../assets/seta-direita.svg';
import setaEsquerda from '../../assets/seta-esquerda.svg';
import eduardoPalmeira from '../../assets/Eduardo_Palmeira_Section_Nossos_Clientes.svg';
import clinicaSallute from '../../assets/Clinica-Sallute_nossos-clientes.svg';
import oticaLorgil from '../../assets/Site-Otica-Lorgil_nossos_clientes.svg';
import linktreeRaquel from '../../assets/Linktree-Raquel-Paulina_nossos_clientes.svg';
import linktreeEduardo from '../../assets/Linktree-Eduardo-Palmeira_nossos_clientes.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const inter = Inter({ subsets: ['latin'] });

const clientes = [
  {
    id: 'eduardo-palmeira',
    nome: 'Eduardo Palmeira',
    descricao:
      'Desenvolvemos um site institucional com foco em autoridade e captação de leads no mercado imobiliário. Estruturamos páginas de serviços, imóveis e diferenciais de forma estratégica, priorizando clareza, credibilidade e conversão. A solução fortalece o posicionamento profissional e amplia as oportunidades de negócio no digital.',
    imagem: eduardoPalmeira,
    alt: 'Logo Eduardo Palmeira',
  },
  {
    id: 'clinica-sallute',
    nome: 'Clinica Sallute',
    descricao: 'Criamos uma presença digital profissional, transmitindo confiança, organização e cuidado. O projeto foi estruturado para apresentar especialidades, equipe e formas de contato de maneira objetiva e acessível. O resultado é um canal institucional que fortalece a credibilidade da marca e consolida sua autoridade no mercado da saúde.',
    imagem: clinicaSallute,
    alt: 'Logo Clinica Sallute',
  },
  {
    id: 'otica-lorgil',
    nome: 'Ótica Lorgil',
    descricao: 'Desenvolvemos um site catálogo para exposição estratégica de produtos, facilitando a visualização de armações e modelos disponíveis. A navegação foi pensada para ser simples, intuitiva e responsiva. A solução amplia a vitrine digital da marca e fortalece sua presença no mercado local.',
    imagem: oticaLorgil,
    alt: 'Logo Ótica Lorgil',
  },{
    id: 'linktree-raquel',
    nome: 'Linktree Raquel Paulina',
    descricao: 'Desenvolvemos uma página estratégica para organizar canais de atendimento e fortalecer a presença digital profissional. O design prioriza sobriedade, clareza e credibilidade. A solução facilita o contato direto e melhora a experiência do usuário nas redes sociais.',
    imagem: linktreeRaquel,
    alt: 'Logo Linktree Raquel Paulina',
  },{
    id: 'linktree-eduardo',
    nome: 'Linktree Eduardo Palmeira',
    descricao: 'Criamos uma página personalizada para centralizar contatos, imóveis e canais digitais em um único ambiente profissional. O layout foi desenvolvido para reforçar identidade visual e facilitar o direcionamento de potenciais clientes. Uma solução prática para otimizar conversões nas redes sociais.',
    imagem: linktreeEduardo,
    alt: 'Logo Linktree Eduardo Palmeira',
  }
];

export default function Clientes() {
  return (
    <section className="bg-white dark:bg-black min-h-100 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-black dark:text-white text-3xl font-extrabold mb-12">
          Nossos Clientes
        </h1>

        <div className="relative">
          <button type="button" className="swiper-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 -translate-x-6 ml-4">
            <Image src={setaEsquerda} alt="Anterior" width={32} height={32} />
          </button>

          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: '.swiper-prev',
              nextEl: '.swiper-next',
            }}
            spaceBetween={32}
            slidesPerView={1}
            loop={true}
            className="mb-12"
          >
            {clientes.map((cliente) => (
              <SwiperSlide key={cliente.id}>
                <div className="flex items-center gap-8 px-10">
                  {/* Desktop */}
                  <div className="flex-1 hidden md:block">
                    <h2 className="text-black dark:text-white text-5xl font-thin">
                      {cliente.nome}
                    </h2>
                  <p className="text-gray-600 dark:text-gray-300 text-lg text-justify mt-4">
                      {cliente.descricao}
                    </p>
                  </div>
                  <div className="flex-shrink-0 hidden md:block">
                    <Image src={cliente.imagem} alt={cliente.alt} width={500} height={800} />
                  </div>
                  {/* Mobile */}
                  <div className="flex flex-col gap-4 md:hidden">
                    <h2 className="text-black dark:text-white text-3xl font-thin mb-2">
                      {cliente.nome}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-justify">
                      {cliente.descricao}
                    </p>
                    <div className="block md:hidden">
                      <Image src={cliente.imagem} alt={cliente.alt} width={290} height={310} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button type="button" className="swiper-next absolute right-0 top-1/2 -translate-y-1/2 z-10 translate-x-6 mr-4">
            <Image src={setaDireta} alt="Próximo" width={32} height={32} />
          </button>
        </div>
      </div>
    </section>
  );
}