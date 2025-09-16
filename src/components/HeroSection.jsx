import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CarouselHero({
  images = [],            // [{src, alt}]
  interval = 5000,        // ms
  autoPlay = true,
  height = "h-[60vh]",
  pauseOnHover = true,
}) {
  const [i, setI] = useState(0);
  const hoverRef = useRef(false);
  const count = images.length || 1;

  // Autoplay
  useEffect(() => {
    if (!autoPlay || count < 2) return;
    const id = setInterval(() => {
      if (pauseOnHover && hoverRef.current) return;
      setI((n) => (n + 1) % count);
    }, interval);
    return () => clearInterval(id);
  }, [autoPlay, interval, count, pauseOnHover]);

  // Respect prefers-reduced-motion
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      hoverRef.current = true; // effectively pauses autoplay
    }
  }, []);

  const go = (dir) => setI((n) => (n + dir + count) % count);

  if (!images.length) return null;

  return (
    <section
      className="relative w-full select-none"
      onMouseEnter={() => (hoverRef.current = true)}
      onMouseLeave={() => (hoverRef.current = false)}
    >
      <div className={`relative w-full ${height} bg-black overflow-hidden`}>
        {/* Slides (fade) */}
        {images.map((img, idx) => (
          <img
            key={img.src + idx}
            src={img.src}
            alt={img.alt ?? ""}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700
                       ${idx === i ? "opacity-100" : "opacity-0"}`}
            loading={idx === 0 ? "eager" : "lazy"}
          />
        ))}

        {/* Dark overlay for readability (optional) */}
        <div className="absolute inset-0 bg-black/30" aria-hidden="true" />

        {/* Arrows */}
        {count > 1 && (
          <>
            <button
              onClick={() => go(-1)}
              aria-label="Previous slide"
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-xl bg-white/10 p-2
                         text-white backdrop-blur hover:bg-white/20 focus:outline-none
                         focus:ring-2 focus:ring-white/60"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next slide"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-xl bg-white/10 p-2
                         text-white backdrop-blur hover:bg-white/20 focus:outline-none
                         focus:ring-2 focus:ring-white/60"
            >
              <ChevronRight size={22} />
            </button>
          </>
        )}

        {/* Dots */}
        {count > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition
                           ${idx === i ? "bg-white" : "bg-white/40 hover:bg-white/70"}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
