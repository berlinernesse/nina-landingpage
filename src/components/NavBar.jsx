import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { Search, Home, Info, ShoppingBag } from "lucide-react";

const base =
  "px-3 py-2 rounded-lg transition text-white hover:bg-white hover:text-black";
const active = "underline underline-offset-4";

export default function Navbar() {
  const [term, setTerm] = useState("");
  const nav = useNavigate();

  function onSubmit(e) {
    e.preventDefault();
    const q = term.trim();
    if (!q) return;
    nav(`/products?q=${encodeURIComponent(q)}`);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur">
      <div className="container mx-auto grid grid-cols-[1fr_auto_1fr] items-center gap-4 px-6 py-3">
        {/* LEFT: nav links */}
        <nav className="flex items-center gap-2">
          <NavLink to="/" end className={({ isActive }) => `${base} ${isActive ? active : ""}`}>
            <span className="flex items-center gap-2">
              Home
            </span>
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `${base} ${isActive ? active : ""}`}>
            <span className="flex items-center gap-2">
             
              About
            </span>
          </NavLink>
          <NavLink to="/products" className={({ isActive }) => `${base} ${isActive ? active : ""}`}>
            <span className="flex items-center gap-2">
              Products
            </span>
          </NavLink>
        </nav>

        {/* CENTER: logo */}
        <Link to="/" aria-label="Home" className="justify-self-center">
          <img src={logo} alt="Site logo" className="h-40 w-auto" />
        </Link>

        {/* RIGHT: search */}
        <form role="search" onSubmit={onSubmit} className="justify-self-end w-full max-w-xs">
          <label htmlFor="site-search" className="sr-only">Search</label>
          <div className="relative">
            <input
              id="site-search"
              type="search"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              placeholder="Search products…"
              className="w-full rounded-xl border border-white/20 bg-white px-4 py-2 pr-10 text-sm text-black
                         placeholder:text-gray-500 shadow-sm
                         focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-black"
            />
            <button
              type="submit"
              className="absolute inset-y-0 right-0 grid w-10 place-items-center text-black"
              aria-label="Search"
              title="Search"
            >
              <Search size={18} strokeWidth={2} aria-hidden="true" />
            </button>
          </div>
        </form>
      </div>
    </header>
  );
}
