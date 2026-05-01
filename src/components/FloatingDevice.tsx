import { useEffect, useState, useRef } from "react";
import zpodDevice from "@/assets/zpod-device.png";

export function FloatingDevice() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? scrollTop / docHeight : 0;
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

  const rotateY = -30 + scrollProgress * 360;
  const rotateX = 15 - scrollProgress * 30;

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block pointer-events-none">
      <div
        className="w-[280px] h-[280px]"
        style={{
          perspective: "800px",
        }}
      >
        <img
          src={zpodDevice}
          alt="zpod device"
          width={280}
          height={280}
          className="w-full h-full object-contain drop-shadow-[0_20px_60px_rgba(100,160,255,0.2)]"
          style={{
            transform: `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`,
            transition: "transform 0.1s linear",
          }}
        />
      </div>
    </div>
  );
}
