import { Link } from "react-router-dom";
import carousel from "../assets/carousel-1.jpg";

export default function Home() {
  return (
    <>
      {/* HERO: single image */}
      <section className="relative w-full h-[70vh] bg-black overflow-hidden">
        <img
          src={carousel}
          alt="Witchy altar with candles and herbs"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        {/* subtle dark overlay so text would pop if you add it later */}
        <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
      </section>

      {/* CONTENT */}
      <section className="relative container mx-auto px-6 py-12 text-gray-100">
        {/* soft gradient blobs */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-purple-400/15 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-blue-400/15 blur-3xl" />
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
              Spells and Rituals ✨
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              Because sometimes you gotta spiritually assault a motherfucker to get what you want
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/about"
                className="inline-block rounded-xl bg-white px-4 py-2 text-black hover:opacity-90"
              >
                See About
              </Link>
              <Link
                to="/products"
                className="inline-block rounded-xl border border-white/20 px-4 py-2 text-white hover:bg-white/10"
              >
                Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
