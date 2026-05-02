import { useEffect, useState, useRef } from "react";
import zpodDevice from "@/assets/zpod-device.png";

export function FloatingDevice() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const viewH = window.innerHeight;
        // progress from 0 (top enters) to 1 (bottom leaves)
        const progress = Math.max(0, Math.min(1, 1 - (rect.bottom / (viewH + rect.height))));
        setScrollProgress(progress);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const rotateY = -20 + scrollProgress * 120;
  const rotateX = 10 - scrollProgress * 20;

  return (
    <div ref={containerRef} className="w-[300px] h-[300px]" style={{ perspective: "1000px" }}>
      <div
        className="w-full h-full"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`,
          transition: "transform 0.15s ease-out",
        }}
      >
        <img
          src={zpodDevice}
          alt="zpod device"
          width={300}
          height={300}
          className="w-full h-full object-contain drop-shadow-[0_20px_60px_rgba(100,160,255,0.25)]"
          style={{
            backfaceVisibility: "hidden",
          }}
        />
      </div>
    </div>
  );
}
