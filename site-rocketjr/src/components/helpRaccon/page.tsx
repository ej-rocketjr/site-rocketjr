'use client';

import Image from "next/image";
import React, { useState, useEffect } from "react";  
import zap from "@/assets/whatsapp.png";


export default function HelpRacconPage() {
    const [showMessage, setShowMessage] = useState(true); 
    const [isInitialPhase, setIsInitialPhase] = useState(true); 

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsInitialPhase(false);
            setShowMessage(false);
        }, 30000);

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
                        <div className="absolute bottom-[-8px] right-6 w-4 h-4 transform rotate-45 shadow-lg rounded-tl bg-neutral-900" />
                    </div>
                )}
            <button
                type="button"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleWhatsAppClick}
                className="group relative flex h-16 w-16 items-center justify-center rounded-full border-green-300 bg-green-500 shadow-lg shadow-green-900/30 transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-green-900/40 active:scale-95 focus:outline-none"
                aria-label="Fale conosco no WhatsApp"
            >
                <span className="absolute inset-0 rounded-full border-2 border-green-300/60 animate-ping [animation-duration:2.6s]" />
                <Image
                    src={zap}
                    alt="Ícone do WhatsApp"
                    width={100}
                    height={100}
                    className="relative z-10 h-13 w-13 rounded-full object-cover"
                />
            </button>
        </div>
    );
}