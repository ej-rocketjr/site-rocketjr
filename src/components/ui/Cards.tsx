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

export default function Card({
  icon,
  title,
  description,
  ctaText,
  ctaHref = "#",
  cutSide = "left",
}: CardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 400, h: 370 });
  const [expanded, setExpanded] = useState(false);
  const gradientId = useId();
  const clipPathId = useId().replace(/:/g, "");

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
  const strokeWidth = 2;
  const inset = strokeWidth / 2;
  const innerW = Math.max(size.w - strokeWidth, 0);
  const innerH = Math.max(size.h - strokeWidth, 0);

  const borderPath =
    cutSide === "left"
      ? `M ${inset + cut},${inset} L ${inset + innerW - r},${inset} Q ${inset + innerW},${inset} ${inset + innerW},${inset + r} L ${inset + innerW},${inset + innerH - r} Q ${inset + innerW},${inset + innerH} ${inset + innerW - r},${inset + innerH} L ${inset + r},${inset + innerH} Q ${inset},${inset + innerH} ${inset},${inset + innerH - r} L ${inset},${inset + cut} Z`
      : `M ${inset + r},${inset} L ${inset + innerW - cut},${inset} L ${inset + innerW},${inset + cut} L ${inset + innerW},${inset + innerH - r} Q ${inset + innerW},${inset + innerH} ${inset + innerW - r},${inset + innerH} L ${inset + r},${inset + innerH} Q ${inset},${inset + innerH} ${inset},${inset + innerH - r} L ${inset},${inset + r} Q ${inset},${inset} ${inset + r},${inset} Z`;

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[370px] group"
    >
      {size.w > 0 && (
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox={`0 0 ${size.w} ${size.h}`}
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="100%" stopColor="#dc2626" stopOpacity="1" />
              <stop offset="100%" stopColor="#dc2626" stopOpacity="1" />
              <stop offset="100%" stopColor="#dc2626" stopOpacity="1" />
            </linearGradient>
            <clipPath id={clipPathId}>
              <path d={borderPath} />
            </clipPath>
          </defs>
          <path
            d={borderPath}
            fill="none"
            stroke={`url(#${gradientId})`}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      )}

      <div
        className="relative p-8 flex flex-col gap-4 h-full bg-white dark:bg-black"
        style={{ clipPath: `url(#${clipPathId})` }}
      >
        <div className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0">
          <Image src={icon} alt={title} width={60} height={60} />
        </div>

        <h3 className="text-black dark:text-white text-xl font-bold leading-tight">
          {title}
        </h3>

        <div className="flex-1 flex flex-col min-h-0">
          <div className={`${expanded ? "overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-red-600 scrollbar-track-transparent" : ""}`}>
            <p
              className={`text-gray-700 dark:text-gray-400 text-sm leading-relaxed transition-all duration-300 ${!expanded ? "line-clamp-3" : ""}`}
            >
              {description}
            </p>
          </div>
          {description.length > 150 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-red-500 text-xs font-semibold mt-2 hover:text-red-400 transition-colors flex items-center gap-1 self-start shrink-0"
            >
              {expanded ? "Ler menos" : "Ler mais"}
              <span
                className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
              >
                ↓
              </span>
            </button>
          )}
        </div>

        <a
          href={ctaHref}
          className="flex items-center gap-2 text-black dark:text-white font-bold text-sm hover:text-red-500 transition-colors shrink-0"
        >
          {ctaText}
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
