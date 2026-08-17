'use client';

import Image from "next/image";
import React, { useState, useEffect } from "react";  
import raccon from "@/assets/icons/raccoon-mascote-rocket-jr.svg";

export default function HelpRacconPage() {
    const [showMessage, setShowMessage] = useState(true); 
    const [isInitialPhase, setIsInitialPhase] = useState(true); 

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsInitialPhase(false);
            setShowMessage(false); // 
        }, 30000); // 

        return () => clearTimeout(timer); 
    }, []);

    const handleMouseEnter = () => {
        if (!isInitialPhase) { 
            setShowMessage(true);
        }
    };

    const handleMouseLeave = () => {
        if (!isInitialPhase) { 
            setShowMessage(false);
        }
    };

    const handleWhatsAppClick = () => {
        window.open(
            "https://api.whatsapp.com/send/?phone=5582996940657&text=Ol%C3%A1%21+Vim+pelo+site+da+Rocket+Jr.&type=phone_number&app_absent=0", 
            "_blank"
        );
    };

    return (
        <div className="fixed bottom-8 right-8 z-40 flex flex-col items-center space-y-2">
            
                {showMessage && (
                    <div className="absolute bottom-20 right-0 bg-neutral-900 rounded-lg shadow-lg p-4 mb-2 w-65 border border-zinc-800">
                        <p className="text-white text-sm">
                            Ei! Quer crescer no digital? Criamos sites, landing pages e e-commerces focados em gerar resultados para o seu negócio. Clique aqui e entre em contato com a gente pelo WhatsApp!
                        </p>
                        <div className="absolute bottom-[-8px] right-6 w-4 h-4 transform rotate-45 shadow-lg rounded-tl bg-neutral-900"></div>
                    </div>
                )}
            <button
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleWhatsAppClick}
                className="hover:scale-110 transition-transform cursor-pointer focus:outline-none"
                aria-label="Fale conosco no WhatsApp"
            >
                <Image
                    src={raccon}
                    alt="Imagem do mascote da RocketJR, um guaxinim"
                    width={100}
                    height={10}
                    className="w-18 h-18 rounded-full border-1 border-zinc-700 object-cover bg-zinc-900"
                />
            </button>
        </div>
    );
}