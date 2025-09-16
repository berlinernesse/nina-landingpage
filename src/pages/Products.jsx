import { Link } from "react-router-dom";
import { products, productCategories } from "../data/products.js"

function Card({ p }) {
  return (
    <Link
      to={p.slug} // relative: /products/:slug
      className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:bg-white/10 transition"
    >
      <div className="aspect-[4/3] w-full overflow-hidden bg-black">
        {p.image ? (
          <img
            src={p.image}
            alt={p.name}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-900 to-zinc-800 text-white/40">
            No image
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{p.name}</h3>
        <p className="mt-1 text-sm text-gray-300">${p.price.toFixed(2)}</p>
        <p className="mt-2 line-clamp-2 text-sm text-gray-400">{p.description}</p>
        <span className="mt-3 inline-block text-sm underline underline-offset-4">
          View details
        </span>
      </div>
    </Link>
  );
}

function CategorySection({ categoryId }) {
  const meta = productCategories[categoryId];
  const items = products.filter((p) => p.category === categoryId).slice(0, 3);
  if (!items.length) return null;

  return (
    <section id={categoryId} className="mt-12">
      <header className="mb-4">
        <h2 className="text-2xl font-bold">{meta.title}</h2>
        {meta.blurb && <p className="mt-1 text-gray-300">{meta.blurb}</p>}
      </header>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {items.map((p) => <Card key={p.id} p={p} />)}
      </div>
    </section>
  );
}

export default function Products() {
  return (
    <div className="container mx-auto px-6 py-12 text-gray-100">
      <header className="flex items-center justify-between gap-4">
        <h1 className="text-4xl font-extrabold tracking-tight">Products</h1>
        <nav className="hidden sm:flex gap-2">
          <a href="#spells" className="rounded-xl border border-white/20 px-3 py-1.5 hover:bg-white/10">
            Spells & Rituals
          </a>
          <a href="#demons" className="rounded-xl border border-white/20 px-3 py-1.5 hover:bg-white/10">
            Demons
          </a>
        </nav>
      </header>

      <CategorySection categoryId="spells" />
      <CategorySection categoryId="demons" />
    </div>
  );
}
