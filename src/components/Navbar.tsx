import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logoImg from "@/assets/restart-logoo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
 
  const links = [
    { label: "Carta", href: "/Carta.pdf" },
    { label: "Opiniones", href: "/#opiniones" },
    { label: "Horarios", href: "/#horarios" },
    { label: "Visítanos", href: "/#visita" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background shadow">
      <div className="container flex items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-3">
          <img
            src={logoImg}
            alt="Restart Coffee"
            className="w-8 h-8 object-contain"
          />
          <span className="font-display text-lg font-semibold">
            Restart Coffee
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 hover:text-foreground"
            >
              {l.label}
            </a>
          ))}

          <div className="relative group">
            <Link
              to="/sobre-nosotros"
              className="text-sm font-medium text-foreground/80 hover:text-foreground"
            >
              Sobre Nosotros
            </Link>

            <div className="absolute left-0 top-full hidden group-hover:flex flex-col min-w-[180px] bg-background shadow-lg rounded-lg py-2 z-50">
              <Link
                to="/food-truck"
                className="px-4 py-2 text-sm hover:bg-muted"
              >
                Food Truck
              </Link>

              <Link
                to="/macu-bakery"
                className="px-4 py-2 text-sm hover:bg-muted"
              >
                Macu Bakery
              </Link>
            </div>
          </div>

          <a
            href="tel:+34621306720"
            className="px-5 py-2 rounded-full bg-foreground text-background"
          >
            Llámanos
          </a>
        </div>

        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
{/* Mobile */}
{menuOpen && (
  <div className="md:hidden bg-background px-6 pb-6 flex flex-col gap-4">
    {links.map((l) => (
      <a
        key={l.href}
        href={l.href}
        onClick={() => setMenuOpen(false)}
      >
        {l.label}
      </a>
    ))}

    <div className="flex flex-col gap-2">
      <Link
        to="/sobre-nosotros"
        onClick={() => setMenuOpen(false)}
        className="font-medium"
      >
        Sobre Nosotros
      </Link>

      <div className="ml-4 flex flex-col gap-2">
        <Link
          to="/food-truck"
          onClick={() => setMenuOpen(false)}
        >
          Food Truck
        </Link>

        <Link
          to="/macu-bakery"
          onClick={() => setMenuOpen(false)}
        >
          Macu Bakery
        </Link>
      </div>
    </div>
  </div>
)}
     
