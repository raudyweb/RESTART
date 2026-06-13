import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoImg from "@/assets/restart-logoo.png";

const Navbar = () => {
const [menuOpen,setMenuOpen]=useState(false);
 const links=[
  {label:"Sobre Nosotros",href:"/sobre-nosotros"},
  {label:"Carta",href:"/Carta.pdf"}, // MENÚ PDF: sustituye /menu.pdf por la ruta del PDF definitivo cuando lo subas
  {label:"Horarios",href:"/#horarios"},
  {label:"Visítanos",href:"/#visita"}
 ];
 return <nav className="fixed top-0 left-0 right-0 z-50 bg-background shadow">
 <div className="container flex items-center justify-between px-6 py-4"><a href="/" className="flex items-center gap-3"><img src={logoImg} alt="Restart Coffee" className="w-8 h-8 object-contain"/><span className="font-display text-lg font-semibold">Re · Start</span></a>
 <div className="hidden md:flex items-center gap-8">{links.map(l=><a key={l.href} href={l.href} className="text-sm font-medium text-foreground/80 hover:text-foreground">{l.label}</a>)}<a href="tel:+34621306720" className="px-5 py-2 rounded-full bg-foreground text-background">Llámanos</a></div>
 <button className="md:hidden" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Abrir menú">{menuOpen?<X/>:<Menu/>}</button></div>
 {menuOpen&&<div className="md:hidden bg-background px-6 pb-6 flex flex-col gap-4">{links.map(l=><a key={l.href} href={l.href} onClick={()=>setMenuOpen(false)}>{l.label}</a>)}</div>}</nav>
}
export default Navbar;
