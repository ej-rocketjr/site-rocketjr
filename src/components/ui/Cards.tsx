"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useRef, useEffect, useState, useId } from "react";

interface CardProps {
    icon: string;
    title: string;
    description: string;
    ctaText: string;
    ctaHref?: string;
    cutSide?: "left" | "right";
}

export default function Card({ icon, title, description, ctaText, ctaHref = "#", cutSide = "left" }: CardProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [size, setSize] = useState({ w: 400, h: 370 });
    const [expanded, setExpanded] = useState(false);
    const gradientId = useId();

    useEffect(() => {
        const update = () => {
            if (containerRef.current) {
                setSize({
                    w: containerRef.current.offsetWidth,
                    h: containerRef.current.offsetHeight,
                });
            }
        };
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    const r = 16;
    const cut = 35;

    const borderPath =
        cutSide === "left"
            ? `M ${cut},0 L ${size.w - r},0 Q ${size.w},0 ${size.w},${r} L ${size.w},${size.h - r} Q ${size.w},${size.h} ${size.w - r},${size.h} L ${r},${size.h} Q 0,${size.h} 0,${size.h - r} L 0,${cut} Z`
            : `M ${r},0 L ${size.w - cut},0 L ${size.w},${cut} L ${size.w},${size.h - r} Q ${size.w},${size.h} ${size.w - r},${size.h} L ${r},${size.h} Q 0,${size.h} 0,${size.h - r} L 0,${r} Q 0,0 ${r},0 Z`;

    const clipPath =
        cutSide === "left"
            ? "polygon(35px 0, 100% 0, 100% 100%, 0 100%, 0 35px)"
            : "polygon(0 0, calc(100% - 35px) 0, 100% 35px, 100% 100%, 0 100%)";

    return (
        <div ref={containerRef} className="relative w-full h-[370px] group">
            {size.w > 0 && (
                <svg
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    viewBox={`0 0 ${size.w} ${size.h}`}
                    preserveAspectRatio="none"
                >
                    <defs>
                        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#dc2626" stopOpacity="0.8" />
                            <stop offset="50%" stopColor="#dc2626" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#dc2626" stopOpacity="0.15" />
                        </linearGradient>
                    </defs>
                    <path
                        d={borderPath}
                        fill="none"
                        stroke={`url(#${gradientId})`}
                        strokeWidth="2"
                    />
                </svg>
            )}

        
            <div
                className="relative p-10 flex flex-col gap-5 h-full"
                style={{ clipPath }}
            >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0">
                    <Image src={icon} alt="" width={60} height={32} />
                </div>

                <h3 className="text-white text-xl font-bold leading-tight">
                    {title}
                </h3>

                <div className="flex-grow overflow-hidden">
                    <p className={`text-gray-400 text-sm leading-relaxed ${!expanded ? "line-clamp-3 sm:line-clamp-none" : ""}`}>
                        {description}
                    </p>
                    {!expanded && (
                        <button
                            onClick={() => setExpanded(true)}
                            className="text-red-500 text-xs font-semibold mt-1 sm:hidden hover:text-red-400 transition-colors"
                        >
                            Ler mais
                        </button>
                    )}
                </div>

                <a
                    href={ctaHref}
                    className="flex items-center gap-2 text-white font-bold text-sm mt-auto hover:text-red-500 transition-colors shrink-0"
                >
                    {ctaText}
                    <ArrowRight className="w-4 h-4" />
                </a>
            </div>
        </div>
    );
}