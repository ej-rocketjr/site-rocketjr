import logo from "../../assets/logo-rocket.svg";
import MrRaccoon from "../../assets/MrRaccoon.png";
import menu from "../../assets/menuicon.png";

export default function Servicos() {
  return (
    <div className="relative min-h-screen lg:h-screen overflow-x-hidden overflow-y-auto lg:overflow-hidden bg-white flex flex-col">
      <header className="w-full relative z-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-8 lg:px-10 py-5">
          <section className="flex-none"> 
            <img src={logo.src} alt="logo rocket" className="h-10 w-auto" />
          </section>
          <section className="block md:hidden">
            <button> <img src={menu.src} alt="menu" className="w-8 h-8 object-contain" /></button>
          </section>
          <section className="hidden md:block">
            <nav>
              <ul className="flex gap-x-8 list-none text-black font-medium">
                <li className="text-black hover:text-red-600 transition-colors duration-200 cursor-pointer">inicio</li>
                <li className="text-red-600">serviços</li>
                <li className="text-black hover:text-red-600 transition-colors duration-200 cursor-pointer">quem somos</li>
                <li className="text-black hover:text-red-600 transition-colors duration-200 cursor-pointer">clientes</li>
                <li className="text-black hover:text-red-600 transition-colors duration-200 cursor-pointer">contatos</li>
              </ul>
            </nav>
          </section>
          <section className="hidden md:block">
            <div className="border border-red-600 text-red-600 px-5 py-2 rounded-md font-medium transition-all hover:bg-red-700 hover:text-white cursor-pointer">
              <p>Ps Rocket Jr</p>
            </div>
          </section>
        </div>
      </header>
      <main className="w-full relative flex-1 flex flex-col z-10 pb-[300px] lg:pb-0">
        <section>
          <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-black text-center py-12 lg:py-16">Dados que Guiam Decisões Lucrativas</h1>
          </div>
        </section>
        <section className="max-w-7xl w-full mx-auto px-5 md:px-8 lg:px-10">
          <div className="max-w-4xl relative lg:pl-10">
              <h2 className="text-xl lg:text-2xl italic text-black mb-6 lg:mb-8 text-center lg:text-left leading-relaxed">Dados certos. Decisões mais lucrativas.</h2>
              <p className="text-base lg:text-lg text-black leading-relaxed text-center lg:text-left">Transformamos dados brutos em insights estratégicos que orientam decisões inteligentes e aumentam a performance do seu negócio.</p>
            </div>
        </section>
        <div className="flex justify-center lg:pl-20 mt-8 lg:mt-10 w-full relative z-30">
          <a href="https://wa.me/558299767685?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Rocket%20Jr.%20e%20gostaria%20de%20entender%20como%20voc%C3%AAs%20podem%20contribuir%20com%20insights%20estrat%C3%A9gicos%20para%20o%20meu%20neg%C3%B3cio.">
            <button className="bg-gradient-to-r from-[#530101] via-[#750404] to-[#fd0404] text-white px-6 py-3 lg:px-10 lg:py-4 rounded-md font-bold uppercase tracking-widest text-xs lg:text-sm transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95">Ver insights estratégicos</button>
          </a>
        </div>
      </main>
      <div className="absolute z-20 bottom-0 left-1/2 -translate-x-1/2 w-[60vw] max-w-[250px] lg:left-auto lg:right-10 lg:translate-x-0 lg:w-[25vw] lg:max-w-[350px]">
          <img src={MrRaccoon.src} alt="MrRaccoon" className="w-full h-auto block" />
      </div>
      <div className="pointer-events-none absolute z-0 rounded-full border-[#585A5C33] opacity-[0.30]  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] border-[40px] lg:top-[100%] lg:-translate-y-[50%] lg:w-[1200px] lg:h-[1200px] lg:border-[180px]"></div>
    </div>
  );
}