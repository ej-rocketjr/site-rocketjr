"use client";

import { useEffect, useRef } from "react";

export default function BlurCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const el = cursorRef.current;
            if (!el) return;

            el.style.transform = `translate(${e.clientX - 40}px, ${e.clientY - 40}px)`;
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div
            ref={cursorRef}
            className="
        pointer-events-none fixed left-0 top-0 z-[9999]
        hidden h-20 w-20 rounded-full md:block
        bg-red-500/80 blur-xl
                will-change-transform
      "
        />
    );
}